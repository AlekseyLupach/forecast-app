import "./App.css";
import Page from "./components/Page";
import Pages from "./components/Page/Pages"
import { Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Page} />
        <Route path="/days/:id" component={Pages} />
      </div>
    </BrowserRouter>
  );
}

export default App;
