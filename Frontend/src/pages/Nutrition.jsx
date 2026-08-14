import React, { useState } from "react";
import ".././blocks/table.css";

// Array inicial para visualização local (conectar ao banco)

const nutritionData = [
  {
    id: 1,
    documento: "Plano alimentar inicial",
    data: "22/07/2026",
    profissional: "Dr. Jon Snow",
    arquivoUrl: "#",
  },
  {
    id: 2,
    documento: "Avaliação Nutricional",
    data: "22/06/2026",
    profissional: "Dr. Robb Stark",
    arquivoUrl: "#",
  },
  {
    id: 3,
    documento: "Evolução Nutricional",
    data: "22/05/2026",
    profissional: "Dr. Ned Stark",
    arquivoUrl: "#",
  },
  {
    id: 4,
    documento: "Orientações Nutricionais",
    data: "22/04/2026",
    profissional: "Dra. Catelyn Tully",
    arquivoUrl: "#",
  },
  {
    id: 5,
    documento: "Plano alimentar inicial",
    data: "22/03/2026",
    profissional: "Dr. Brandow Stark",
    arquivoUrl: "#",
  },
  {
    id: 6,
    documento: "Orientações Nutricionais",
    data: "22/02/2026",
    profissional: "Dra. Arya Stark",
    arquivoUrl: "#",
  },
  {
    id: 7,
    documento: "Avaliação Nutricional",
    data: "22/01/2026",
    profissional: "Dra. Sansa Stark",
    arquivoUrl: "#",
  },
];

function Nutrition() {
  const [documentos, setDocumentos] = useState(nutritionData);

  const handleDownloadResumo = () => {
    alert("Iniciando download do resumo Clínico em PDF...");
  };

  return (
    <div className="table">
      <div className="table__header">
        <h1 className="table__title">Sua saúde alimentar</h1>
        <button className="table__bnt-pdf" onClick={handleDownloadResumo}>
          Baixar resumo nutricional (PDF)
        </button>
      </div>

      <div className="table__wrapper">
        <table className="table__titles">
          <thead>
            <tr>
              <th>Documento</th>
              <th>Data</th>
              <th>Profissional</th>
              <th className="text-center">Arquivo</th>
            </tr>
          </thead>

          <tbody>
            {documentos.map((doc) => (
              <tr key={doc.id}>
                <td className="table__font-semibold">{doc.documento}</td>
                <td>{doc.data}</td>
                <td>{doc.profissional}</td>

                <td className="table__icon-center">
                  <a
                    href={doc.arquivoUrl}
                    className="table__archive-download-link"
                    title="Baixar Arquivo"
                  >
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

export default Nutrition;
