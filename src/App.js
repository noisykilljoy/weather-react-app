import "./App.css";
import SearchEng from "./searchEng";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          <h1>weather search</h1>
          <SearchEng />
          <p>made by Vandah Taghdisi</p>
          <a href="https://github.com/noisykilljoy/weather-react-app">
            github repository
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
