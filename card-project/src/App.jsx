import React from "react";
import Card from "./components/Card";
import jobs from "./data/jobs";

const App = () => {
  return (
    <div className="parent">
      {jobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  );
};

export default App;