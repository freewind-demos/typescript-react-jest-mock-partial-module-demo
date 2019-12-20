import React from 'react';
import {render, fireEvent} from "@testing-library/react";

import Hello from "./hello";

jest.mock('./utils', () => {
  return {
    __esModule: true,
    prefix: jest.requireActual('./utils').prefix,
    suffix: ']]'
  }
});


describe('Hello', () => {

  it('trigger from mocked component', () => {
    const onChangeMock = jest.fn()
    const {getByText} = render(<Hello name='jest' onChange={onChangeMock}/>)

    fireEvent.click(getByText('Click'));
    expect(onChangeMock).toHaveBeenCalledWith('<<jest]]');

  })

})
