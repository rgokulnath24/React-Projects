import { useState, useEffect } from "react";

export default function App() {
  const [q, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const query = q.trim();
    setErr("");
    if (!query) {
      setItems([]);
      setTotal(0);
      return;
    }

    let alive = true;
    const t = setTimeout(async () => {
      try {
        setLoading(true);
        const r = await fetch(
          `https://api.github.com/search/users?q=${encodeURIComponent(
            query
          )}&per_page=5&page=${page}`
        );
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const data = await r.json();
        if (alive) {
          setItems(Array.isArray(data.items) ? data.items : []);
          setTotal(data.total_count || 0);
        }
      } catch (e) {
        if (alive) setErr(e.message || "Failed to fetch");
      } finally {
        if (alive) setLoading(false);
      }
    }, 400);

    return () => {
      clearTimeout(t);
      alive = false;
    };
  }, [q, page]);

  const handleClear = () => {
    setQuery("");
    setItems([]);
    setErr("");
    setPage(1);
    setTotal(0);
  };

  return (
    <div style={styles.container}>
      <h1>🔍 GitHub User Search</h1>
      <div style={styles.searchContainer}>
        <input
          type="text"
          value={q}
          placeholder="Type a GitHub username"
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1); // reset to first page on new search
          }}
          style={styles.input}
        />
        <button onClick={handleClear} style={styles.clearButton}>
          Clear
        </button>
      </div>

      {loading && <p style={styles.infoText}>Searching...</p>}
      {err && <p style={styles.errorText}>{err}</p>}

      {total > 0 && (
        <p style={styles.totalText}>Total Results: {total}</p>
      )}

      <ul style={styles.list}>
        {items.map((u) => (
          <li key={u.id} style={styles.listItem}>
            <img
              src={u.avatar_url}
              alt={u.login}
              width="50"
              height="50"
              style={styles.avatar}
            />
            <a
              href={u.html_url}
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              {u.login}
            </a>
          </li>
        ))}
      </ul>

      {total > 5 && (
        <div style={styles.pagination}>
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page===1}
          >
            ◀ Prev
          </button>
          <span>Page {page}</span>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={items.length < 5}
          >
            Next ▶
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  
 container: {
  fontFamily: "Arial",
  maxWidth: "600px",
  width: "100%",
  padding: "20px",
  background: "#f4f4f4",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  
  position: "fixed",
  top: "5%",
  left: "50%",
  transform: "translateX(-50%)",
},

  searchContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
  },
  clearButton: {
    padding: "10px 15px",
    background: "#e74c3c",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  infoText: {
    color: "#555",
  },
  errorText: {
    color: "red",
  },
  totalText: {
    fontWeight: "bold",
    marginTop: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    margin: "10px 0",
    background: "white",
    padding: "10px",
    borderRadius: "8px",
  },
  avatar: {
    borderRadius: "50%",
  },
  link: {
    fontSize: "18px",
    textDecoration: "none",
    color: "#3498db",
  },
  pagination: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
  },
};
