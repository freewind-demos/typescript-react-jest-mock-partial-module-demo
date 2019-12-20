import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import last from 'lodash/last';

import Hello from "./hello";
import Inner, {InnerProps} from './Inner';
import Mock = jest.Mock;

jest.mock('./Inner', () => jest.fn(() => null));

const innerMock = Inner as Mock;

export function getLastCallArguments<T>(mockFn: jest.Mock): T {
  const calls = mockFn.mock.calls;
  if (calls.length === 0) {
    throw new Error('the mock has not been called');
  }

  const lastCall = last(calls) as any[];
  return lastCall[0] as T;
}


describe('Hello', () => {

  it('mock inner component', () => {
    render(<Hello name='jest' onChange={() => undefined}/>)
    const args = getLastCallArguments<InnerProps>(innerMock)
    expect(args.message).toEqual('Hello, jest');
  });

  it('trigger from mocked component', () => {
    innerMock.mockImplementation(({onChange}: InnerProps) => {
      const newValue = 'hello-new';
      return <button onClick={() => onChange(newValue)}>Mock Button</button>
    })

    const onChangeMock = jest.fn()
    const {getByText} = render(<Hello name='jest' onChange={onChangeMock}/>)

    fireEvent.click(getByText('Mock Button'));
    expect(onChangeMock).toHaveBeenCalledWith('hello-new');

  })

})
