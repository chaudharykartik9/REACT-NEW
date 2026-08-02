import useCounterStore from './store/CounterStore'

function App() {
  const count = useCounterStore((state) => state.count);

  const increment = useCounterStore((state) => state.increment);

  const decrement = useCounterStore((state) => state.decrement);

  const reset = useCounterStore((state) => state.reset);

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Zustand Counter</h1>

      <h2>{count}</h2>

      <button onClick={decrement}>-</button>

      <button onClick={increment}>+</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;