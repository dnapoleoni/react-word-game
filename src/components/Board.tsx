import React from 'react'
import Tile from './Tile';

const style = {
    board: "flex flex-wrap items-center justify-center gap-2"
}
interface IProps {
    tiles: Array<string>;
    className?: string;
}

function Board(props: IProps) {
  return (
    <div className={ props.className }>
        <div className={ style.board }>
            { 
            props.tiles && props.tiles.map((tile, index) => (
                <Tile key={ index } letter={ tile }/>
            ))
            }    
        </div>
    </div>
  )
}

export default Board