import React, { useState } from "react";
import ".././blocks/table.css";

// Array inicial para visualização local (conectar ao banco)
const prontuarioData = [
  {
    id: 1,
    documento: "Receita de Amoxicilina",
    categoria: "Receita",
    data: "12/05/2026",
    profissional: "Dra. Carolina Lima",
    arquivoUrl: "#",
  },
  {
    id: 2,
    documento: "Atestado Médico",
    categoria: "Consulta",
    data: "10/05/2026",
    profissional: "Dr. Marcos Silva",
    arquivoUrl: "#",
  },
  {
    id: 3,
    documento: "Hemograma Completo",
    categoria: "Exame",
    data: "08/05/2026",
    profissional: "Dr. Roberto Souza",
    arquivoUrl: "#",
  },
  {
    id: 4,
    documento: "Vacina Febre Amarela",
    categoria: "Vacina",
    data: "01/04/2026",
    profissional: "Enf. Sandra Costa",
    arquivoUrl: "#",
  },
  {
    id: 5,
    documento: "Receita de Ibuprofeno",
    categoria: "Receita",
    data: "20/03/2026",
    profissional: "Dra. Carolina Lima",
    arquivoUrl: "#",
  },
  {
    id: 6,
    documento: "Raio-X de Tórax",
    categoria: "Exame",
    data: "15/03/2026",
    profissional: "Dr. Roberto Souza",
    arquivoUrl: "#",
  },
  {
    id: 7,
    documento: "Laudo Cardiologia",
    categoria: "Exame",
    data: "10/02/2026",
    profissional: "Dr. Fábio Almeida",
    arquivoUrl: "#",
  },
  {
    id: 8,
    documento: "Vacina Tríplice Viral",
    categoria: "Vacina",
    data: "15/01/2026",
    profissional: "Enf. Sandra Costa",
    arquivoUrl: "#",
  },
];

function Prontuario() {
  // Quando integrar com o banco, basta carregar os dados aqui no setDocumentos
  const [documentos, setDocumentos] = useState(prontuarioData);

  const handleDownloadResumo = () => {
    alert("Iniciando download do resumo clínico em PDF...");
  };

  return (
    <div className="table">
      {/* Cabeçalho da página */}
      <div className="table__header">
        <h1 className="table__title">Prontuário Eletrônico</h1>
        <button className="table__bnt-pdf" onClick={handleDownloadResumo}>
          Baixar resumo clínico (PDF)
        </button>
      </div>

      {/* Container da tabela com scroll interno */}
      <div className="table__wrapper">
        <table className="table__titles">
          <thead>
            <tr>
              <th>Documento</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Profissional</th>
              <th className="text-center">Arquivo</th>
            </tr>
          </thead>
          <tbody>
            {documentos.map((doc) => (
              <tr key={doc.id}>
                <td className="table__font-semibold">{doc.documento}</td>
                <td>{doc.categoria}</td>
                <td>{doc.data}</td>
                <td>{doc.profissional}</td>
                <td className="table__icon-center">
                  <a
                    href={doc.arquivoUrl}
                    className="table__archive-download-link"
                    title="Baixar Arquivo"
                  >
                    {/* Ícone em SVG (sei lá como faz isso, peguei pronto) */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Prontuario;
