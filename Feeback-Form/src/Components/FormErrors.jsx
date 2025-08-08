import React, { useState, useEffect, useRef } from 'react';

export default function FormErrors() {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('Engineering');
  const [feedback, setFeedback] = useState('');
  const [allFeedbacks, setAllFeedbacks] = useState([]);
  const [showThanks, setShowThanks] = useState(false);

  const feedbackRef = useRef();
  const newFeedbackRef = useRef();

  useEffect(() => {
    const saved = localStorage.getItem('feedbacks');
    if (saved) {
      setAllFeedbacks(JSON.parse(saved));
    }
    feedbackRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(allFeedbacks));
    if (allFeedbacks.length > 0 && newFeedbackRef.current) {
      newFeedbackRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    // console.log("Feedback locked");
    
  }, [allFeedbacks]);

  // Save only when not the very first load
useEffect(() => {
  if (allFeedbacks.length > 0) {
    localStorage.setItem('feedbacks', JSON.stringify(allFeedbacks));
  }
}, [allFeedbacks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    const newEntry = {
      id: Date.now(),
      name: name.trim() || 'Anonymous',
      department,
      feedback: feedback.trim(),
    };

    setAllFeedbacks([newEntry, ...allFeedbacks]);
    setName('');
    setFeedback('');
    setShowThanks(true);
    setTimeout(() => setShowThanks(false), 3000);
  };

  return (
    <div style={styles.container}>
      <h2>Employee Feedback</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Your Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          style={styles.input}
        >
          <option>Engineering</option>
          <option>Marketing</option>
          <option>HR</option>
          <option>Sales</option>
        </select>
        <textarea
          ref={feedbackRef}
          placeholder="Your Feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Submit Feedback</button>
      </form>

      {showThanks && <p style={styles.thanks}>✅ Thank you for your feedback!</p>}

      <div style={styles.feedbackList}>
        <h3>Feedbacks</h3>
        {allFeedbacks.length === 0 ? (
          <p>No feedback yet.</p>
        ) : (
          allFeedbacks.map((item, index) => (
            <div
              key={item.id}
              ref={index === 0 ? newFeedbackRef : null}
              style={styles.card}
            >
              <p><strong>{item.name}</strong> ({item.department})
              <span>-<strong style={{color:"green"}}>{item.feedback}</strong></span></p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: '600px', margin: 'auto', padding: '20px' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '8px', fontSize: '1rem' },
  textarea: { padding: '8px', fontSize: '1rem', minHeight: '80px' },
  button: { padding: '10px', background: '#007bff', color: '#fff', border: 'none' },
  feedbackList: { marginTop: '30px' },
  card: { background: '#f1f1f1', padding: '10px', marginBottom: '10px', borderRadius: '5px' },
  thanks: { color: 'green', marginTop: '10px' },
};
