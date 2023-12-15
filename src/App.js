import logo from './logo.svg';
import './App.css';
import Counter from './components/counterComponent'
function App() {
  return (
    <div className="App">
      <header className="">
        <img src={logo} className="App-logo" alt="logo" wicth='100' />
      </header>
      <Counter/>
    </div>
  );
}

export default App;
