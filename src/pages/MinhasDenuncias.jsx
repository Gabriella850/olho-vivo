import {
  BookOpen,
  Calendar,
  CircleCheckBig,
  Clock3,
} from "lucide-react";

function MinhasDenuncias({ denuncias, setTela }) {

  const etapas = [
    "Recebido",
    "Em análise",
    "Fiscalização agendada",
    "Resolvido",
  ];

  // calcula prazo máximo
  const calcularPrazo = (status) => {
    const hoje = new Date();

    if (status === "Recebido") {
      hoje.setDate(hoje.getDate() + 3);
    } else if (status === "Em análise") {
      hoje.setDate(hoje.getDate() + 7);
    } else if (status === "Fiscalização agendada") {
      hoje.setDate(hoje.getDate() + 7);
    }

    return hoje.toLocaleDateString();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-2xl font-bold text-green-700 mb-4">
        Minhas Denúncias
      </h1>

      {denuncias.length === 0 ? (
        <p className="text-gray-600">
          Você ainda não fez nenhuma denúncia.
        </p>
      ) : (
        <div className="flex flex-col gap-4">

          {denuncias.map((d, index) => {

            // 🔥 simula avanço automático
            const statusSimulado =
              index % 4 === 0
                ? "Recebido"
                : index % 4 === 1
                ? "Em análise"
                : index % 4 === 2
                ? "Fiscalização agendada"
                : "Resolvido";

            const etapaAtual = etapas.indexOf(statusSimulado);

            return (
              <div
                key={index}
                className="bg-white p-4 rounded-2xl shadow-md"
              >

                {/* Categoria */}
                <p className="font-semibold text-green-700 text-lg capitalize">
                  {d.categoria}
                </p>

                {/* Descrição */}
                <p className="text-sm text-gray-600 mt-1">
                  {d.descricao}
                </p>

                {/* Informações */}
                <div className="mt-4 text-sm text-gray-700 flex flex-col gap-2">

                  {/* DATA */}
                  <div className="flex items-center gap-2">
                    <Calendar
                      size={16}
                      className="text-green-700"
                    />
                    <p>Data: {d.data}</p>
                  </div>

                  {/* PROTOCOLO */}
                  <div className="flex items-center gap-2">
                    <BookOpen
                      size={16}
                      className="text-green-700"
                    />
                    <p>Protocolo: {d.protocolo}</p>
                  </div>

                  {/* STATUS */}
                  <div className="flex items-center gap-2">

                    <CircleCheckBig
                      size={16}
                      className={
                        statusSimulado === "Recebido"
                          ? "text-emerald-800"
                          : statusSimulado === "Em análise"
                          ? "text-yellow-500"
                          : statusSimulado === "Fiscalização agendada"
                          ? "text-blue-500"
                          : "text-green-600"
                      }
                    />

                    <p
                      className={`font-semibold ${
                        statusSimulado === "Recebido"
                          ? "text-emerald-800"
                          : statusSimulado === "Em análise"
                          ? "text-yellow-600"
                          : statusSimulado === "Fiscalização agendada"
                          ? "text-blue-600"
                          : "text-green-600"
                      }`}
                    >
                      Status: {statusSimulado}
                    </p>

                  </div>

                  {/* PRAZO */}
                  {statusSimulado !== "Resolvido" ? (
                    <div className="flex items-center gap-2">

                      <Clock3
                        size={16}
                        className="text-orange-500"
                      />

                      <p className="text-orange-600 font-medium">
                        Data limite de atualização:{" "}
                        {calcularPrazo(statusSimulado)}
                      </p>

                    </div>
                  ) : (
                    <div className="flex items-center gap-2">

                      <CircleCheckBig
                        size={16}
                        className="text-green-600"
                      />

                      <p className="text-green-600 font-medium">
                        Problema resolvido
                      </p>

                    </div>
                  )}

                </div>

                {/* Barrinha visual */}
                <div className="mt-5">

                  {/* nomes das etapas */}
                  <div className="flex justify-between text-[10px] sm:text-xs mb-2 gap-1">

                    {etapas.map((etapa, i) => (

                      <span
                        key={i}
                        className={`text-center flex-1 ${
                          i <= etapaAtual
                            ? "font-semibold"
                            : "text-gray-400"
                        } ${
                          i === 0 && i <= etapaAtual
                            ? "text-emerald-800"
                            : i === 1 && i <= etapaAtual
                            ? "text-yellow-600"
                            : i === 2 && i <= etapaAtual
                            ? "text-blue-600"
                            : i === 3 && i <= etapaAtual
                            ? "text-green-600"
                            : ""
                        }`}
                      >
                        {etapa}
                      </span>

                    ))}

                  </div>

                  {/* barra */}
                  <div className="flex items-center gap-1">

                    {etapas.map((_, i) => (

                      <div
                        key={i}
                        className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                          i === 0 && i <= etapaAtual
                            ? "bg-emerald-800"
                            : i === 1 && i <= etapaAtual
                            ? "bg-yellow-400"
                            : i === 2 && i <= etapaAtual
                            ? "bg-blue-500"
                            : i === 3 && i <= etapaAtual
                            ? "bg-green-600"
                            : "bg-gray-300"
                        }`}
                      />

                    ))}

                  </div>

                </div>

              </div>
            );
          })}
        </div>
      )}

      <button
        onClick={() => setTela("dashboard")}
        className="mt-6 bg-green-600 text-white py-2 px-4 rounded-xl"
      >
        Voltar
      </button>

    </div>
  );
}

export default MinhasDenuncias;