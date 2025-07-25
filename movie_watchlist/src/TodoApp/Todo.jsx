import { useState, useRef } from "react";

export default function MovieWatchlist() {
  const [movies, setMovies] = useState([
    { id: 1, name: "The Dark Knight" },
    { id: 2, name: "A History of Violence" }
  ]);

  const [input, setInput] = useState("");
  const inputRef = useRef();
  

  const addMovie = () => {
    const trimmed = input.trim();
    if (trimmed === "") return;

    const newMovie = {
      id: Date.now(),
      name: trimmed
    };
    setMovies([...movies, newMovie]);
    setInput("");
    inputRef.focus(); // auto focus again after adding
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🎬 Movie Watchlist</h2>

      <div style={styles.inputSection}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter movie name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={addMovie} style={styles.button}>➕ Add</button>
      </div>

      {movies.length === 0 ? (
        <p style={styles.empty}>🎉 You're all caught up! Add some movies 🍿</p>
      ) : (
        <ul style={styles.list}>
          {movies.map((movie) => (
            <li key={movie.id} style={styles.listItem}>
              🎥 {movie.name}
              <button onClick={() => deleteMovie(movie.id)} style={styles.deleteBtn}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// 🎨 Simple styles
const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "rgb(228, 218, 218)",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  heading: {
    textAlign: "center"
  },
  inputSection: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px"
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    cursor: "pointer"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  listItem: {
    padding: "10px",
    backgroundColor: "#fff",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "5px"
  },
  deleteBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "18px"
  },
  empty: {
    textAlign: "center",
    fontStyle: "italic"
  }
};
