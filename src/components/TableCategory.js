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
      <section>
        <button>Add New Item</button>
      </section>
    </>
  );
}

export default TableCategory;
