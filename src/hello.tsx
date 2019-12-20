import React from 'react'
import {prefix, suffix} from './utils';

type Props = {
  name: string,
  onChange: (value: string) => void
}

export default function Hello({name, onChange}: Props) {
  return <div>
    <button onClick={() => onChange(`${prefix}${name}${suffix}`)}>Click</button>
  </div>
};

