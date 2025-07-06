import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';
import GrandParentComponent from "./ColorContextDemo";

function App() {
  return (
    <>
      <Calculator />
      <GrandParentComponent />
    </>
  );
}

export default App;
