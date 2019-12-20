import React from 'react'
import Inner from './Inner';

type Props = {
  name: string,
  onChange: (value: string) => void
}

export default function Hello({name, onChange}: Props) {
  return <Inner message={`Hello, ${name}`} onChange={onChange}/>
};

