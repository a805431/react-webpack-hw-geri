function Table({ data, config }) {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((farm) => {
    return (
      <tr key={farm.farmId}>
        <td>{config[0].render(farm)}</td>
        <td>{farm.farmNotes}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
