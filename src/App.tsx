// core
// import { useEffect } from "react"
import Logo from "./assets/logo.svg"
import { useAppSelector } from "./app/hooks"

// assets
import "./App.css"

// components
import Wrapper from "./components/Wrapper";
import WelcomeScreen from "./components/GameScreens/WelcomeScreen"
import LevelScreen from "./components/GameScreens/LevelScreen";

// actions

function App() {

  // screens list
  const screens = {
    welcome: WelcomeScreen,
    level: LevelScreen
  }

  // screen state variable
  const screen: string = useAppSelector(({ root: { screen }}) => screen);
  const levels: Array<object> = useAppSelector(({ root: { levels }}) => levels);

  return (
    <div className="App">
      <header><Wrapper><img src={Logo}/></Wrapper></header>
      <main>
        { (screens as any)[screen]({ levels }) }
      </main>
    </div>
  )
};

export default App
