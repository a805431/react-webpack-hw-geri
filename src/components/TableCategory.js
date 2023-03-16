import { useState } from 'react';

function TableCategory() {
    return (<table>
        <tr>
            <th>Farm ID</th>
            <th>Farm notes</th>
        </tr>
        <tr>
            <td>11111</td>
            <td>22222</td>
        </tr>
        <tr>
            <td>Mock description of Farm 11111</td>
            <td>Mock description of Farm 22222</td>
        </tr>
    </table>);
}

export default TableCategory;