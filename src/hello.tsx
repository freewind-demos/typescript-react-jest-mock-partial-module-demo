import React from 'react'
import Inner from './Inner';

type Props = {
  name: string
}

export default function Hello({name}: Props) {
  return <Inner message={`Hello, ${name}`}/>;
};

