import React from 'react'
import { useAppSelector } from '../app/hooks';

function Tester() {

    const test = useAppSelector(({ root: { test }}) => test);
    
  return (
    <div>{test}</div>
  )
}

export default Tester