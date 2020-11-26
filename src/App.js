import logo from './logo.svg';
import './App.css';

const Timer = () => {
  let year = new Date().getFullYear();

  return(
    <div>
    <p>
      ps. these pages should be finished by the end of the year {year}
    </p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello to my personal website!
        </p>
        <p>
          I will be adding more information about me to this page in the near future.
        </p>
        <Timer/>
        <p>-Matias Lang</p>
      </header>
    </div>
  );
}

export default App;
