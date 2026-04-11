function Notificacoes({ notificacoes, setTela }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-2xl font-bold text-green-700 mb-4">
        Notificações
      </h1>

      {notificacoes.length === 0 ? (
        <p className="text-gray-600">
          Você não possui notificações.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {notificacoes.map((n, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow"
            >
              <p className="text-gray-800 text-sm">
                {n.mensagem}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                {n.data}
              </p>
            </div>
          ))}
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

export default Notificacoes;