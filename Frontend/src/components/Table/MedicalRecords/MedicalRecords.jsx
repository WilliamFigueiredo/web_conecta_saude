import Table from "../Table";

function MedicalRecord() {
  const columns = [
    "Documento",
    "Categoria",
    "Data",
    "Profissional",
    "Baixar",
  ];

  const fields = [
    "document",
    "category",
    "date",
    "professional",
    "download",
  ];

  const data = [];

  return <Table columns={columns} fields={fields} data={data} />;
}

export default MedicalRecord;