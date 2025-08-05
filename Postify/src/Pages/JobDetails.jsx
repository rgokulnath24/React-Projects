import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.arbeitnow.com/api/job-board-api")
      .then((res) => res.json())
      .then((data) => {
        const jobData = data.data[parseInt(id)];
        setJob(jobData);
      });
  }, [id]);

  if (!job) return <p style={{ padding: "20px" }}>Loading job details...</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h2>{job.title}</h2>
      <p><b>Company:</b> {job.company_name}</p>
      <p><b>Location:</b> {job.location}</p>
      <p><b>Remote:</b> {job.remote ? "Yes" : "No"}</p>
      <div dangerouslySetInnerHTML={{__html:job.description}} />
      <button
        onClick={() => navigate("/apply")}
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Apply Now
      </button>
    </div>
  );
}
