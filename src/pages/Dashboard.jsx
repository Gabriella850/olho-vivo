import { BadgePlus, Bell } from "lucide-react";

function Dashboard({ setTela, usuario, setUsuario }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-green-700 p-6 flex flex-col">

      {/* Header */}
      <div className="text-white mb-8">
        <h1 className="text-2xl font-bold">
          Olá, {usuario.nome} 👋
        </h1>
        <p className="text-green-100">
          O que você deseja fazer hoje?
        </p>
      </div>

      {/* Cards */}
      <div className="flex-1 flex flex-col gap-4">

        {/* Nova denúncia */}
        <div
          onClick={() => setTela("nova")}
          className="bg-white p-5 rounded-2xl shadow-md cursor-pointer hover:scale-105 transition"
        >
          <BadgePlus size={32} className="text-green-600 mb-2" />
          <h2 className="text-lg font-semibold text-green-700">
            Nova Denúncia
          </h2>
          <p className="text-gray-500 text-sm">
            Registre um novo problema
          </p>
        </div>

        {/* Minhas denúncias */}
        <div
          onClick={() => setTela("minhas")}
          className="bg-white p-5 rounded-2xl shadow-md cursor-pointer hover:scale-105 transition"
        >
          <div className="text-3xl mb-2">📋</div>
          <h2 className="text-lg font-semibold text-green-700">
            Minhas Denúncias
          </h2>
          <p className="text-gray-500 text-sm">
            Acompanhe suas solicitações
          </p>
        </div>

        {/* Notificações */}
        <div
          onClick={() => setTela("notificacoes")}
          className="bg-white p-5 rounded-2xl shadow-md cursor-pointer hover:scale-105 transition"
        >
          <Bell size={32} className="text-green-600 mb-2" />
          <h2 className="text-lg font-semibold text-green-700">
            Notificações
          </h2>
          <p className="text-gray-500 text-sm">
            Veja atualizações das suas denúncias
          </p>
        </div>

      </div>

      {/* Botão sair */}
      <button
        onClick={() => setUsuario(null)}
        className="mt-6 text-white border border-white py-2 rounded-xl hover:bg-white hover:text-green-700 transition"
      >
        Sair
      </button>

    </div>
  );
}

export default Dashboard;