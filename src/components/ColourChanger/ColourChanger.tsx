import { useState } from "react"
import { useAppSelector, useAppDispatch, colourChangerHex } from "../../app/hooks"
import { change } from "./ColourChangerSlice" 

import styles from "./ColourChanger.module.css"

export function ColourChanger() {
    const hex = useAppSelector(colourChangerHex);
    const dispatch = useAppDispatch();
  
    return (
        <button onClick={() => dispatch(change())} className={styles.button}>@</button>
    )
};