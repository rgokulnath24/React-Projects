import React, { useState, useRef, useEffect } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [showReminder, setShowReminder] = useState(false);

  const inputRef = useRef(null); // 📌 useRef to auto-focus input
  const timerRef = useRef(null); // ⏱️ useRef to store timeout ID

  // 🟡 Focus input when page loads
  useEffect(() => {
   inputRef.current.focus();
  }, []);

  // 🔁 Reset reminder timer when task input changes
  useEffect(() => {
    clearTimeout(timerRef.current);
    if (task.trim() !== "") {
      timerRef.current = setTimeout(() => {
        setShowReminder(true);
      }, 10000); // 10 seconds idle
    } else {
      setShowReminder(false);
    }
    return () => clearTimeout(timerRef.current);
  }, [task]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");
      setShowReminder(false);
      inputRef.current.focus(); // refocus input
    }
  };

  return (
    <div style={styles.container}>
      <h2>📝 Todo App</h2>
      <input
        type="text"
        ref={inputRef}
        value={task}
        placeholder="Add your task"
        onChange={(e) => setTask(e.target.value)}
        style={styles.input}
      />
      <button onClick={addTask} style={styles.button}>Add Task</button>

      <ul style={styles.list}>
        {taskList.map((t, i) => (
          <li key={i}>{i + 1}. {t}</li>
        ))}
      </ul>

      {showReminder && <p style={styles.reminder}>⏰ Reminder: Still there?</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  input: {
    padding: "10px",
    width: "80%",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    marginLeft: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  list: {
    textAlign: "left",
    marginTop: "20px",
  },
  reminder: {
    color: "red",
    marginTop: "20px",
    fontWeight: "bold",
  },
};
