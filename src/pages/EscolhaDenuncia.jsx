import { Check } from "lucide-react";
function EscolhaDenuncia({ setTela }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-green-700 p-6">

      <h1 className="text-white text-2xl font-bold mb-6">
        Nova Denúncia
      </h1>

      <div className="flex flex-col gap-4">

        {/* FORMULÁRIO RÁPIDO */}
        <div
          onClick={() => setTela("rapido")}
          className="bg-white p-5 rounded-2xl shadow-md cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-green-700 font-semibold text-lg">
            ⚡ Formulário Rápido
          </h2>

          <p className="text-gray-900 text-sm mt-2">
            Só os campos essenciais. Ideal para registrar uma ocorrência pontual de forma ágil.
          </p>

<ul className="text-sm text-gray-800 mt-3 space-y-2">
  <li className="flex items-center gap-2">
    <Check size={16} className="text-green-600" />
    Registro em menos de 2 minutos
  </li>

  <li className="flex items-center gap-2">
    <Check size={16} className="text-green-600" />
    Apenas os campos essenciais
  </li>

  <li className="flex items-center gap-2">
    <Check size={16} className="text-green-600" />
    Protocolo gerado na hora
  </li>
</ul>

          <p className="text-xs text-green-600 mt-3">
            ⏱️ Rápido (até 3 minutos)
          </p>
        </div>

        {/* FORMULÁRIO COMPLETO */}
        <div
          onClick={() => setTela("completo")}
          className="bg-white p-5 rounded-2xl shadow-md cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-green-700 font-semibold text-lg">
            🧾 Formulário Completo
          </h2>

          <p className="text-gray-900 text-sm mt-2">
            Recursos avançados para acompanhamento próximo. Ideal para casos que exigem mais evidências.
          </p>

<ul className="text-sm text-gray-800 mt-3 space-y-2">
  <li className="flex items-center gap-2">
    <Check size={16} className="text-green-600" />
    Mais detalhes da ocorrência
  </li>

  <li className="flex items-center gap-2">
    <Check size={16} className="text-green-600" />
    Histórico completo
  </li>

  <li className="flex items-center gap-2">
    <Check size={16} className="text-green-600" />
    Melhor acompanhamento
  </li>
</ul>

          <p className="text-xs text-green-600 mt-3">
            📝 Passo a passo
          </p>
        </div>

      </div>

      {/* Botão voltar */}
      <button
        onClick={() => setTela("dashboard")}
        className="mt-6 text-white border border-white py-2 px-4 rounded-xl"
      >
        Voltar
      </button>
    </div>
  );
}

export default EscolhaDenuncia;