import { BrowserRouter } from "react-router-dom";
import All_routes from "./All_routes";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchAllJobs } from "./actions/jobs";
import { useEffect } from "react";
import { setCurrentUser } from "./actions/currentUser";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    dispatch(fetchAllJobs());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <All_routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
