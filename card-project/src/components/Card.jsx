import React from "react";
import { Bookmark } from "lucide-react";

const Card = ({ job }) => {
  return (
    <div className="card">
      <div className="top">
        <img src={job.logo} alt={job.company} />
        <button>
          {job.saved ? "Saved" : "Save"} <Bookmark size={12} />
        </button>
      </div>

      <div className="center">
        <h3>
          {job.company} <span>{job.posted}</span>
        </h3>

        <h2>{job.role}</h2>

        <div className="tag">
          {job.tags.map((tag, index) => (
            <h4 key={index}>{tag}</h4>
          ))}
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{job.salary}</h3>
          <p>{job.location}</p>
        </div>

        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;