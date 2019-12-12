import React from 'react';
import {render} from "@testing-library/react";
import Hello from "./hello";
import Inner from './Inner';

jest.mock('./Inner', () => {
  const mock = jest.fn((...args) => {
    console.log("### args", args)
    return null
  });
  return mock;
});

describe('Hello', () => {

  it('mock inner component', () => {
    render(<Hello name='jest'/>)
    expect(Inner).toHaveBeenCalledWith({"message": "Hello, jest"}, {});
  });

})
