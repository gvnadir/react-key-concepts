import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <Calculator operation="sum" />
      <Calculator operation="sub" />
      <Calculator operation="mul" />
      <Calculator operation="div" />
    </>
  );
}

export default App;
