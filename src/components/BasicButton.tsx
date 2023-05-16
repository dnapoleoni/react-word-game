import { PropsWithChildren, MouseEventHandler } from "react"

// css
const style = {
    disabled: 'hover:bg-white opacity-10'
}

// prop shape
interface IProps {
    enabled?: boolean;
    title?: string;
    onClick: MouseEventHandler;
}

// default
BasicButton.defaultProps = {
    enabled: true,
    title: ""
};

// output
export function BasicButton(props:PropsWithChildren<IProps>){
    return (
        <>
            { props.enabled
                ? <button title={ props.title } onClick={props.onClick}>{props.children}</button>
                :  <button disabled className={style.disabled}>{props.children}</button>
            }
        </>
    )
}