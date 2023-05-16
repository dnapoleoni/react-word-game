// core
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./app/hooks"

// assets
import "./App.css"
import Logo from "./assets/logo.svg"

// components
import { BasicButton } from "./components/BasicButton"
import { Screen } from "./components/Screen"

// actions
import { init } from "./app/store";
import Tester from "./components/Tester"

function App() {

  const dispatch = useAppDispatch();

  const test = useAppSelector(({ root: { test }}) => test);
  const screen = useAppSelector(({ root: { screen }}) => screen);
  console.log(test, screen);

  // useEffect(() => {
  //   dispatch(init('tested'));
  // }, [dispatch])
  

  return (
    <div className="App">
      <main className="min-h-screen">

        <Tester/>

        {/*<!-- main menu --> */}
        <Screen>
          <img src={Logo}/>
          <p>Drag the letter tiles into tile racks to form words. Drag the tile racks up & down to match words to their cryptic definitions. When all the letters fit and all words match their definitions - you've won the level!</p>
          <BasicButton onClick={() => dispatch(init('tested'))}>Play Game</BasicButton>
        </Screen>

        {/*<!-- level menu --> */}


        {/*<!-- game screen --> */}
      
      
      </main>
    </div>
  )
};

export default App
