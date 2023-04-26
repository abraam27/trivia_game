// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Question from "./pages/question";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Question></Question>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
