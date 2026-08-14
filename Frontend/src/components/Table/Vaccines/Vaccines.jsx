import Table from "../Table";

function Exercise() {
  const columns = [
    "Plano",
    "Profissional",
    "Data",
    "Download",
  ];

  const fields = [
    "plan",
    "professional",
    "date",
    "arquivo",
  ];

  const data = [];

  return <Table columns={columns} fields={fields} data={data} />;
}

export default Exercise;