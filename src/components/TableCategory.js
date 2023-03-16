import { useState } from 'react';

function TableCategory() {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Farm ID</th>
            <th>Farm notes</th>
          </tr>
          <tr>
            <td>11111</td>
            <td>Mock description of Farm 11111</td>
          </tr>
          <tr>
            <td>22222</td>
            <td>Mock description of Farm 22222</td>
          </tr>
        </tbody>
      </table>
      <button id="add-btn-table-category">Add New Item</button>
    </>
  );
}

export default TableCategory;