import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = () => {
    setLoading(true);
    const randomPage=(Math.floor(Math.random()*10));
    const url=`https://www.arbeitnow.com/api/job-board-api?page=${randomPage}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.data.slice(0,12)); // Limit to 10 jobs
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", fontSize: "32px" }}>OpenJobs</h1>
      <p style={{ textAlign: "center" }}>Find your next remote job.</p>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button
          onClick={fetchJobs}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Refresh Jobs
        </button>
      </div>

      {loading && <p style={{ textAlign: "center" }}>Loading jobs...</p>}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {jobs.map((job, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
              background: "#f5f5f5",
            }}
          >
            <h3>{job.title}</h3>
            <p><b>Location:</b> {job.location}</p>
            <Link to={`/job/${i}`}>View More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
