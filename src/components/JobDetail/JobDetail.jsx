import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./JobDetail.css";
import PostList from "./PostList";

const JobDetail = () => {
  const { id } = useParams();

  const JobList = useSelector((state) => state.jobReducer);

  return (
    <div className="job-detail-main">
      {!JobList.data ? (
        <h3>Loading...</h3>
      ) : (
        <>
          {JobList.data.filter((job) => {
            return job._id == id;
          }).map((job) => (
            <div key={job._id}>
              {" "}
              <h1>{job.postedBy}</h1>
              <p>{job.jobTitle}</p>
              <div className="detail-boxes">
                <div className="dates-box">
                  <h3>Important dates</h3>
                  <p>Application Started: {job.applicationStarted}</p>
                  <p>Last date to apply: {job.lastDateToApply}</p>
                  <p>Admit Card: {job.lastDateToApply}</p>
                  <p>Exam Date: {job.lastDateToApply}</p>
                </div>
                <div className="fees-box">
                  <h3>Application fees</h3>
                  {job.applicationFees.map((fees) => (
                    <div key={fees._id} className="fees-detail">
                      <p>{fees.category}</p>
                      <p>: {fees.fees}</p>
                    </div>
                  ))}
                </div>
              </div>
              <PostList postList={job.posts} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default JobDetail;
