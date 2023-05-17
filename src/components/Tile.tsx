import React from 'react'

const style = {
    tile: "w-12 h-12 border-2 border-black rounded-lg flex items-center justify-center p-6 pointer bg-white shadow shadow-md"
}

interface IProps {
    letter: string;
    className?: string;
}

function Tile(props: IProps) {

    return (
        <div 
            draggable={true}
            className={ style.tile }
            onDragStart={(e) => console.log(e, 'start')}
            onDragEnd={(e) => console.log(e, 'end')}
            onDragOver={(e) => e.preventDefault() }
            onDragEnter={(e) => e.preventDefault() }
            onDragLeave={(e) => e.preventDefault() }
            
        >{ props.letter.toUpperCase() }</div>
    )
}

export default Tile
