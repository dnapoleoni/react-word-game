import { ColourChanger } from "./components/ColourChanger/ColourChanger"
import { useAppSelector, colourChangerHex } from "./app/hooks"
import "./App.css"

function App() {
  return (
    <div className="App" style={
      { backgroundColor: useAppSelector(colourChangerHex)} 
    }>
        <ColourChanger />
      
      <main className="min-h-screen">
        <h1>Here is a hero</h1>
        <h2>Here is a header</h2>
        <p>Here is some content</p>
      </main>
    </div>
  )
}

export default App
