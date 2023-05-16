import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { LevelObject } from "../../app/types";
import LevelButton from "../LevelButton";
import Wrapper from "../Wrapper";


function LevelScreen({... rest}) {

  const levels = rest.levels;

  return (
    <Wrapper>
      <p>Select a level below</p>
        <ul>
          {
            levels && levels.map((obj: LevelObject) => (
             <LevelButton data={ obj } key={ obj.id }/>
            ))
          }            
        </ul>
    </Wrapper>
  )
  
  
}

export default LevelScreen