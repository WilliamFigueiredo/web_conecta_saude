import { useState, useEffect } from "react";
import ".././blocks/table.css";
import Preloader from "../components/Preloader/Preloader";
import { getCachedProfessionals } from "../utils/RandomUserApi";

const nutritionTemplate = [
  {
    id: 1,
    documento: "Plano alimentar inicial",
    data: "22/07/2026",
    arquivoUrl: "#",
  },
  {
    id: 2,
    documento: "Avaliação Nutricional",
    data: "22/06/2026",
    arquivoUrl: "#",
  },
  {
    id: 3,
    documento: "Evolução Nutricional",
    data: "22/05/2026",
    arquivoUrl: "#",
  },
  {
    id: 4,
    documento: "Orientações Nutricionais",
    data: "22/04/2026",
    arquivoUrl: "#",
  },
  {
    id: 5,
    documento: "Plano alimentar inicial",
    data: "22/03/2026",
    arquivoUrl: "#",
  },
  {
    id: 6,
    documento: "Orientações Nutricionais",
    data: "22/02/2026",
    arquivoUrl: "#",
  },
  {
    id: 7,
    documento: "Avaliação Nutricional",
    data: "22/01/2026",
    arquivoUrl: "#",
  },
];

function Nutrition() {
  const [documentos, setDocumentos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    getCachedProfessionals(
      "nutrition_profissionais",
      "female",
      nutritionTemplate.length,
    )
      .then((nomes) => {
        const dadosComProfissional = nutritionTemplate.map((doc, index) => ({
          ...doc,
          profissional: `Dra. ${nomes[index % nomes.length]}`,
        }));
        setDocumentos(dadosComProfissional);
      })
      .catch(() =>
        setErro(
          "Desculpe, algo deu errado durante a solicitação. Pode haver um problema de conexão ou o servidor pode estar inativo. Por favor, tente novamente mais tarde.",
        ),
      )
      .finally(() => setCarregando(false));
  }, []);

  const handleDownloadResumo = () => {
    alert("Iniciando download do resumo Clínico em PDF...");
  };

  if (carregando) {
    return (
      <div className="table">
        <Preloader />
      </div>
    );
  }

  if (erro) {
    return (
      <div className="table">
        <p className="table__error">{erro}</p>
      </div>
    );
  }

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
