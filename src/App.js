import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';
import GrandParentComponent from "./ColorContextDemo";
import CountDown from "./CountDown";

function App() {
  return (
    <>
      <Calculator />
      <GrandParentComponent />
      <CountDown initial={10} />
    </>
  );
}

export default App;
