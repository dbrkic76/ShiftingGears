import "./App.css";
import { Car } from "./Car";
import { Counter } from "./Counter";

function App() {
  return (
    <div className="App">
      {/* <Counter startValue={0} />
      <Counter startValue={5} />
      <Counter startValue={10} /> */}
      <Car brand="VW" carColor="grey" />
      <Car brand="Peugeot" carColor="blue" />
      <Car brand="Kia" carColor="silver" />
    </div>
  );
}

export default App;
