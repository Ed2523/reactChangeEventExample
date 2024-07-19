import "./App.css";
import { Person } from "./Person";
/** let name: string = "ed"
let age: number = 34
let isMarried: boolean = true

let ages: number[] = [1, 2, 3, 4,5]
let person: any = 3
person = "hhh"*/

function App() {
  /*
  const fetchUser = () => ({ name: "Julio", age: 27, isMarried: null });
  const userFetched = fetchUser();*/
  return (
    <>
      <Person name={"Oscar"} age={23} isMarried={true} />
      <Person name={"Nora"} age={23} isMarried={false} />
    </>
  );
}

export default App;
