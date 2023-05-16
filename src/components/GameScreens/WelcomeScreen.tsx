// import React from 'react'
import Wrapper from '../Wrapper';
import { BasicButton } from '../BasicButton'
import { useAppDispatch } from "./../../app/hooks"
import { changeScreen } from "./../../app/store";

function WelcomeScreen() {

  const dispatch = useAppDispatch();

  return (
    <Wrapper>
        <p>Drag the letter tiles into tile racks to form words. Drag the tile racks up & down to match words to their cryptic definitions. When all the letters fit and all words match their definitions - you've won the level!</p>
        <BasicButton onClick={() => dispatch(changeScreen('level'))}>Play Game</BasicButton>
    </Wrapper>
  )
}

export default WelcomeScreen