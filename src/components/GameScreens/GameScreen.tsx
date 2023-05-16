import Board from "../Board";
import Table from "../Table";


function GameScreen({ ... rest }) {

  // get current loaded level daya
  const level = rest.currentLevel;
  console.log(level)

  const letters: Array<string> = level.words.map((w:any) => w.word)
    .join("") // make words into 1 string
    .split("") // split into letters
    .sort(() => 0.5-Math.random()) // sort them randomly

  return (
    <div className="flex flex-row justify-center">
      <Board className="w-1/2" tiles={ letters }/>
      <Table className="w-1/2" racks={ level.defs }/>
    </div>
  )
  
  
}

export default GameScreen