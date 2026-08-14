import Table from "../Table";

function Nutrition() {
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
    "download",
  ];

  const data = [];

  return <Table columns={columns} fields={fields} data={data} />;
}

export default Nutrition;