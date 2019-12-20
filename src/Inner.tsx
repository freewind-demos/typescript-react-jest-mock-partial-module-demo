import React from 'react';

export type InnerProps = {
  message: string,
  onChange: (value: string) => void
}

export default function Inner({message, onChange}: InnerProps) {
  function onValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  return <div>
    <div>Inner: {message}</div>
    <input type='text' onChange={onValueChange}/>
  </div>
};
