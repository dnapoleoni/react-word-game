import { PropsWithChildren, MouseEventHandler } from "react"

// css
const style = {
    disabled: 'hover:bg-white opacity-10'
}

// prop shape
interface IProps {
    enabled?: boolean;
    onClick: MouseEventHandler;
}

// default
BasicButton.defaultProps = {
    enabled: true
};

// output
export function BasicButton(props:PropsWithChildren<IProps>){
    return (
        <>
            { props.enabled
                ? <button onClick={props.onClick}>{props.children}</button>
                :  <button disabled className={style.disabled}>{props.children}</button>
            }
        </>
    )
}