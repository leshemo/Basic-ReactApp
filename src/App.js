import logo from './logo.svg';
import omriPic from './omriPic.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={omriPic} className="App-logo" alt="omriPic" />
        <p>
         Testing out and playing around with React. Interesting stuff, though I definitely want to learn more. Maybe Vue.js next?
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
