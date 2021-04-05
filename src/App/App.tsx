import Board from "../pages/board/Board";
import { BrowserRouter as Router } from "react-router-dom";
import StoreProvider from "../redux/store";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Board />
      </Router>
    </StoreProvider>
  );
}

export default App;
