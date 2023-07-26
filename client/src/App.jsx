import "./App.css";
import Url from "./Url";
import Redirect from "./Redirect"
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
          <Route index element={<Url />} />
          <Route path="/:id" element={<Redirect />} />
      </Routes>
  )
}

export default App;
