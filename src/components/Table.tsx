import React from 'react'

interface IProps {
    racks: object;
    className?: string;
}
function Table(props: IProps) {
  return (
    <div className={ props.className }>Table</div>
  )
}

export default Table