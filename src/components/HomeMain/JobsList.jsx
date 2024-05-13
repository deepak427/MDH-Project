import Job from "./Job";

const JobsList = ({ JobsList }) => {
  return (
    <>
      {JobsList.map((job) => (
        <Job Job={job} key={job._id} />
      ))}
    </>
  );
};

export default JobsList;
