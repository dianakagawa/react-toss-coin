import fiveHeads from "./components/fiveHeads";

function App() {
  return (
    <div className="App">
      <h1>Let's flip a coin!</h1>
      <button
        onClick={() => {
          fiveHeads()
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }}
      >
        Flip Me!
      </button>
    </div>
  );
}

export default App;
