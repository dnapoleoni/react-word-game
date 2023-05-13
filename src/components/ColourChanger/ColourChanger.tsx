import { PropsWithChildren } from "react"
import { CornerPosition } from "../../app/types"
import { useAppSelector, useAppDispatch, colourChangerHex } from "../../app/hooks"
import { change } from "./ColourChangerSlice"

// styles
const style = {
    
}

// prop shape
interface IProps {
    position?: CornerPosition;
}

// corner position 
export const getPositionObj = (pos: CornerPosition): string => {
    let out = pos ? 'absolute m-2 w-10 h-10 lh-0 p-2' : '';
    switch (pos) {
        case 'tr':
            out += ' top-0 right-0';
            break;
        case 'tl':
            out += ' top-0 left-0';
            break;
        case 'br':
            out += ' bottom-0 right-0';
            break;
        case 'bl':
            out += ' bottom-0 left-0';
            break;
    }
    return out;
}

export function ColourChanger(props: PropsWithChildren<IProps>) {
    const hex = useAppSelector(colourChangerHex);
    const dispatch = useAppDispatch();
    const pos:string = getPositionObj(props.position);
    return (
        <button onClick={() => dispatch(change())} className={pos}>{props.children || '@'}</button>
    )
};