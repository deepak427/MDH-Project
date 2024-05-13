import JobsList from "./JobsList";
import "./HomeMain.css";
import { useDispatch, useSelector } from "react-redux";

const HomeMain = () => {

  const JobList = useSelector((state) => state.jobReducer);

  return (
    <div className="main-bar">
      <h1>Search for jobs</h1>
      <div>
        <p className="results">10 results</p>
        {!JobList.data ? (
          <h3>Loading...</h3>
        ) : (
          <JobsList JobsList={JobList.data} />
        )}
      </div>
    </div>
  );
};

export default HomeMain;
