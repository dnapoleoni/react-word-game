import React from 'react'
import { LevelObject } from '../app/types'
import { BasicButton } from './BasicButton'
import { useAppDispatch } from '../app/hooks';
import { changeScreen } from '../app/store';

interface IProps {
    data: LevelObject
}

function LevelButton(props: IProps) {
    const dispatch = useAppDispatch();
    return (
        <li>
            <BasicButton title={ props.data.description } onClick={ () => dispatch(changeScreen('game'))}>
                { props.data.title }
            </BasicButton>
        </li>
    )
}

export default LevelButton