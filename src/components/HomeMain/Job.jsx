import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const Job = ({ Job }) => {
  return (
    <div className="job-container">
      <Link to={`/Jobs/${Job._id}`} className="header-link">
        <Avatar
          backgroundImage={`url(${Job.postImage})`}
          padding="2rem"
          borderRadius="20%"
        ></Avatar>
        <div className="job-header">
          <h4>{Job.postedBy}</h4>
          <p>{Job.jobTitle}</p>
          <div className="vacancy-header">
            <FontAwesomeIcon icon={faPeopleGroup} />
            <p>
              {Job.vacancy} vacancies for {Job.posts.length} posts
            </p>
          </div>
        </div>
        <button type="button" className="apply-btn">Apply</button>
      </Link>
      <div className="eligibility-tags">
        <div className="job-timing">
          <p>Application Started: {Job.applicationStarted}</p>
          <p>Last date to apply: {Job.lastDateToApply}</p>
        </div>
        <p>Age limit: {Job.bornBetween}</p>
        <p>
          You should have at least one of the following educational
          qualification:
        </p>
        <div className="tags">
          {Job.eligibilityTags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Job;
