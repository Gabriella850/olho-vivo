function MinhasDenuncias({ denuncias, setTela }) {
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
          {denuncias.map((d, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow"
            >
              <p className="font-semibold text-green-700">
                {d.categoria}
              </p>

              <p className="text-sm text-gray-600">
                {d.descricao}
              </p>

              <p className="text-sm mt-2">
                📅 {d.data}
              </p>

              <p className="text-sm">
                📌 Protocolo: {d.protocolo}
              </p>

              <p className="text-sm font-semibold text-blue-600">
                Status: {d.status}
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

export default MinhasDenuncias;