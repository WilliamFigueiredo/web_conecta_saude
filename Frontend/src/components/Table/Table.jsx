function Table({ columns, data, fields }) {
  return (
    <div className="table__container">
      <div className="table__header">
        {columns.map((column) => (
          <p className="table__header-title" key={column}>
            {column}
          </p>
        ))}
      </div>

      <div className="table__body">
        {data.map((item, index) => (
          <div className="table__body-row" key={index}>
            {fields.map((field) => (
              <p className="table__body-text" key={field}>
                {item[field]}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
