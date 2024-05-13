import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import "./Post.css";

const Post = ({ post }) => {
  return (
    <div className="post-container">
      <div className="post-header">
        <div>
          <h4>{post.postName}</h4>
          <div className="vacancy-container">
            <FontAwesomeIcon icon={faPeopleGroup} />
            <p>{post.vacancy} vacancies</p>
          </div>
        </div>
        <p className="post-tag">{post.tag}</p>
        <button type="button" className="post-apply-btn">
          Apply
        </button>
      </div>
      <div className="eligibility-container">
      {post.eligibilites.map(eligibility => (
        <p key={eligibility}>{eligibility}</p>
      ))}
      <p>Age limit: {post.bornBetween}</p>
      </div>
    </div>
  );
};

export default Post;
