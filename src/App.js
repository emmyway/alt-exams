import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Repo from "./Pages/Repo";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/repo/:repoName" element={<Repo />} />

      {/* "*" path targets all the non existing pages  */}
      <Route exact path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
