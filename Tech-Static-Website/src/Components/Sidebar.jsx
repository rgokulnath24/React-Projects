import React from "react";

export default function Sidebar({ data }) {
  return (
    <div id="sidebar">
      <table>
        <tbody>
          {data.map((k) => (
            <tr key={k.id}>
              <td>{k.Title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
