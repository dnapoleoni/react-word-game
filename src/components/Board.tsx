import React from 'react'

interface IProps {
    tiles: Array<string>;
    className?: string;
}
function Board(props: IProps) {
  return (
    <div className={ props.className }>{ props.tiles }</div>
  )
}

export default Board