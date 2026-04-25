import { useState } from "react";

function FormularioCompleto({ setTela, setDenuncias, setNotificacoes }) {
  const [passo, setPasso] = useState(1);

  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [endereco, setEndereco] = useState("");
  const [imagem, setImagem] = useState(null);
  const [coords, setCoords] = useState(null);

  const [enviado, setEnviado] = useState(false);
  const [protocolo, setProtocolo] = useState("");

  const gerarProtocolo = () => {
    return "DEN-" + Math.floor(Math.random() * 100000);
  };

  const proximo = () => setPasso(passo + 1);
  const voltar = () => setPasso(passo - 1);

  const handleSubmit = () => {
    const novoProtocolo = gerarProtocolo();

    const novaDenuncia = {
      categoria,
      descricao,
      endereco,
      protocolo: novoProtocolo,
      status: "Em análise",
      data: new Date().toLocaleDateString(),
    };

    setDenuncias((prev) => [...prev, novaDenuncia]);

    setNotificacoes((prev) => [
      {
        mensagem: "Sua denúncia foi registrada e está em análise",
        data: new Date().toLocaleDateString(),
      },
      ...prev,
    ]);

    setProtocolo(novoProtocolo);
    setEnviado(true);
  };

  const pegarLocalizacao = () => {
    if (!navigator.geolocation) {
      alert("Geolocalização não suportada");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      setCoords({ latitude, longitude });

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const data = await response.json();

        if (data && data.address) {
          const rua = data.address.road || "";
          const bairro =
            data.address.suburb ||
            data.address.neighbourhood ||
            data.address.village ||
            "";
          const cidade =
            data.address.city ||
            data.address.town ||
            data.address.municipality ||
            "";

          setEndereco(`${rua}, ${bairro} - ${cidade}`);
        } else {
          setEndereco(`Lat: ${latitude}, Lng: ${longitude}`);
        }
      } catch {
        setEndereco(`Lat: ${latitude}, Lng: ${longitude}`);
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-green-700 p-6">

      <h1 className="text-white text-2xl font-bold mb-4">
        Formulário Completo
      </h1>

      <p className="text-white mb-4 text-sm">
        Passo {passo} de 4
      </p>

      {!enviado ? (
        <div className="bg-white p-5 rounded-2xl shadow-md flex flex-col gap-4">

          {/* PASSO 1 */}
          {passo === 1 && (
            <>
              <h2 className="font-semibold text-green-700">Detalhes</h2>

              <select
                className="p-3 border rounded-xl"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="">Selecione uma categoria</option>
                <option value="lixo">🗑️ Lixo</option>
                <option value="mato">🌿 Mato alto</option>
                <option value="mosquito">🦟 Foco de mosquito</option>
                <option value="outro">📌 Outro problema</option>
              </select>

              {/* 💡 orientação */}
              <p className="text-xs text-gray-500">
                Descreva com detalhes o problema encontrado no terreno.
              </p>

              <textarea
                placeholder="Explique o problema com o máximo de detalhes possível..."
                className="p-3 border rounded-xl"
                rows="4"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />

              <button
                onClick={() => {
                  if (!categoria || !descricao) {
                    alert("Preencha os campos!");
                    return;
                  }
                  proximo();
                }}
                className="bg-green-600 text-white py-2 rounded-xl"
              >
                Próximo
              </button>
            </>
          )}

          {/* PASSO 2 */}
          {passo === 2 && (
            <>
              <h2 className="font-semibold text-green-700">Localização</h2>

              <input
                type="text"
                placeholder="Endereço completo"
                className="p-3 border rounded-xl"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />

              <button
                onClick={pegarLocalizacao}
                className="bg-green-100 text-green-700 py-2 rounded-xl"
              >
                📍 Usar minha localização
              </button>

              {coords && (
                <button
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`,
                      "_blank"
                    )
                  }
                  className="bg-blue-100 text-blue-700 py-2 rounded-xl"
                >
                  🗺️ Ver no mapa
                </button>
              )}

              <div className="flex gap-2">
                <button onClick={voltar} className="w-full border py-2 rounded-xl">
                  Voltar
                </button>

                <button
                  onClick={() => {
                    if (!endereco) {
                      alert("Informe o endereço!");
                      return;
                    }
                    proximo();
                  }}
                  className="w-full bg-green-600 text-white py-2 rounded-xl"
                >
                  Próximo
                </button>
              </div>
            </>
          )}

          {/* PASSO 3 */}
          {passo === 3 && (
            <>
              <h2 className="font-semibold text-green-700">Mídia</h2>

              <input
                type="file"
                onChange={(e) => setImagem(e.target.files[0])}
              />

              <div className="flex gap-2">
                <button onClick={voltar} className="w-full border py-2 rounded-xl">
                  Voltar
                </button>

                <button onClick={proximo} className="w-full bg-green-600 text-white py-2 rounded-xl">
                  Próximo
                </button>
              </div>
            </>
          )}

          {/* PASSO 4 */}
          {passo === 4 && (
            <>
              <h2 className="font-semibold text-green-700">Revisão</h2>

              <p><strong>Categoria:</strong> {categoria}</p>
              <p><strong>Descrição:</strong> {descricao}</p>
              <p><strong>Endereço:</strong> {endereco}</p>

              <p className="text-sm text-gray-500">
                Data: {new Date().toLocaleDateString()}
              </p>

              <div className="flex gap-2 mt-2">
                <button onClick={voltar} className="w-full border py-2 rounded-xl">
                  Voltar
                </button>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-600 text-white py-2 rounded-xl"
                >
                  Confirmar denúncia
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="bg-white p-5 rounded-2xl shadow-md text-center">

          <h2 className="text-green-700 text-xl font-bold mb-2">
            ✅ Denúncia enviada!
          </h2>

          <p className="text-gray-600 mb-2">Protocolo:</p>

          <p className="text-green-700 font-bold text-lg mb-4">
            {protocolo}
          </p>

          <p className="text-sm text-gray-500 mb-4">
            Sua denúncia será analisada. Caso não se enquadre nas finalidades do sistema, você será orientado.
          </p>

          <button
            onClick={() => setTela("dashboard")}
            className="bg-green-600 text-white py-2 px-4 rounded-xl"
          >
            Voltar ao início
          </button>
        </div>
      )}

      {!enviado && (
        <button
          onClick={() => setTela("nova")}
          className="mt-4 text-white border border-white py-2 px-4 rounded-xl"
        >
          Cancelar
        </button>
      )}
    </div>
  );
}

export default FormularioCompleto;