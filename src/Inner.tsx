import React from 'react';

export type InnerProps = {
  message: string
}

export default function Inner({message}: InnerProps) {
  return <div>Inner: {message}</div>
};
