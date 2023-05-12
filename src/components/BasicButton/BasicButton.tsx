import { PropsWithChildren, FunctionComponent, MouseEventHandler } from "react"
import styles from "./BasicButton.module.css"

interface IProps {
    enabled?: boolean;
    onClick: MouseEventHandler;
}

export const BasicButton: FunctionComponent<PropsWithChildren<IProps>> = (props) => (
    <>
        { props.enabled
            ? <button onClick={props.onClick} className={styles.button}>{props.children}</button>
            :  <button disabled className={`${styles.button} disabled`}>{props.children}</button>
        }
    </>
);

BasicButton.defaultProps = {
    enabled: true
};