import React, { useState } from "react";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stored = localStorage.getItem("contacts");
    return stored ? JSON.parse(stored) : [];
  });

  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveToLocal = (data) => {
    localStorage.setItem("contacts", JSON.stringify(data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContacts = [...contacts];
    if (editIndex !== null) {
      updatedContacts[editIndex] = formData;
      setEditIndex(null);
    } else {
      updatedContacts.push(formData);
    }
    setContacts(updatedContacts);
    saveToLocal(updatedContacts);
    setFormData({ name: "", phone: "" });
  };

  const handleEdit = (index) => {
    setFormData(contacts[index]);
    setEditIndex(index);
  };

  const handleConfirmDelete = (index) => {
    setDeleteIndex(index);
    const modal = new window.bootstrap.Modal(document.getElementById("confirmModal"));
    modal.show();
  };

  const handleDelete = () => {
    const updatedContacts = contacts.filter((_, i) => i !== deleteIndex);
    setContacts(updatedContacts);
    saveToLocal(updatedContacts);
    setDeleteIndex(null);
    const modal = window.bootstrap.Modal.getInstance(document.getElementById("confirmModal"));
    modal.hide();
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  // return(<> className=
  // </>)
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">📱 Contact Manager</h2>

      <form onSubmit={handleSubmit} className="row g-2 shadow p-4 mb-4 bg-light rounded">
        <div className="col-md-5">
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-5">
          <input
            type="text"
            name="phone"
            placeholder="Enter phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-2 d-grid">
          <button type="submit" className="btn btn-success">
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>
      </form>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
        />
      </div>

      <table className="table table-bordered table-striped shadow">
        <thead className="table-dark">
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Phone</th>
            <th style={{ width: "150px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center text-muted">No contacts found</td>
            </tr>
          ) : (
            filteredContacts.map((contact, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>
                  <button
                    onClick={() => handleEdit(index)}
                    className="btn btn-sm btn-warning text-dark me-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleConfirmDelete(index)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Modal */}
      <div
        className="modal fade"
        id="confirmModal"
        tabIndex="-1"
        aria-labelledby="confirmModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-warning text-dark">
              <h5 className="modal-title" id="confirmModalLabel">Confirm Delete</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">Are you sure you want to delete this contact?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button onClick={handleDelete} className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
