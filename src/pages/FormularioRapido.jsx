import { useState } from "react";
import {
  Trash2,
  Trees,
  Bug,
  FileWarning,
  CircleCheckBig,
  BookOpen,
  ShieldAlert,
} from "lucide-react";

function FormularioRapido({
  setTela,
  setDenuncias,
  setNotificacoes,
  usuario,
}) {

  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [protocolo, setProtocolo] = useState("");

  const gerarProtocolo = () => {
    return "DEN-" + Math.floor(Math.random() * 100000);
  };

  // ✅ DESCRIÇÃO AUTOMÁTICA
  const gerarDescricao = (categoriaSelecionada) => {

    switch (categoriaSelecionada) {

      case "lixo":
        return "Acúmulo de lixo em terreno baldio, causando mau cheiro e risco à saúde, endereço [insira aqui].";

      case "mato":
        return "Terreno com mato alto, podendo abrigar animais e causar riscos, endereço [insira aqui].";

      case "mosquito":
        return "Terreno com mato alto e possível foco de mosquito, endereço [insira aqui].";

      case "outro":
        return "Problema identificado no terreno que não se enquadra nas categorias anteriores, endereço [insira aqui].";

      default:
        return "";
    }
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!categoria || !descricao) {
      alert("Preencha todos os campos!");
      return;
    }

    const novoProtocolo = gerarProtocolo();

    const novaDenuncia = {
      categoria,
      descricao,
      protocolo: novoProtocolo,
      status: "Recebido",
      data: new Date().toLocaleDateString(),
      usuario: usuario.nome,
    };

    setDenuncias((prev) => [...prev, novaDenuncia]);

    setNotificacoes((prev) => [
      {
        mensagem: "Sua denúncia foi enviada com sucesso",
        data: new Date().toLocaleDateString(),
      },
      ...prev,
    ]);

    setProtocolo(novoProtocolo);
    setEnviado(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-green-700 p-6">

      <h1 className="text-white text-2xl font-bold mb-4">
        Formulário Rápido
      </h1>

      {!enviado ? (

        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 rounded-2xl shadow-md flex flex-col gap-4"
        >

          {/* Categoria */}
          <div>

            <label className="text-sm text-gray-600">
              Categoria
            </label>

            <select
              className="w-full mt-1 p-3 border rounded-xl"
              value={categoria}
              onChange={(e) => {
                const valor = e.target.value;
                setCategoria(valor);
                setDescricao(gerarDescricao(valor));
              }}
            >

              <option value="">
                Selecione uma categoria
              </option>

              <option value="lixo">
                🗑️ Lixo
              </option>

              <option value="mato">
                🌿 Mato alto
              </option>

              <option value="mosquito">
                🦟 Foco de mosquito
              </option>

              <option value="outro">
                📌 Outro problema
              </option>

            </select>

            {/* orientação */}
            <div className="flex items-start gap-2 mt-3 bg-green-50 p-3 rounded-xl">

              <ShieldAlert
                size={18}
                className="text-green-700 mt-0.5"
              />

              <p className="text-xs text-gray-600">
                Este aplicativo é destinado a denúncias relacionadas
                a terrenos baldios e problemas urbanos similares.
              </p>

            </div>

          </div>

          {/* Descrição */}
          <div>

            <label className="text-sm text-gray-600">
              Descrição
            </label>

            <textarea
              placeholder="Selecione uma categoria"
              className="w-full mt-1 p-3 border rounded-xl"
              rows="4"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />

          </div>

          {/* BOTÃO */}
          <button className="bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">

            Enviar denúncia

          </button>

        </form>

      ) : (

        <div className="bg-white p-5 rounded-2xl shadow-md text-center">

          {/* ÍCONE */}
          <div className="flex justify-center mb-3">

            <CircleCheckBig
              size={50}
              className="text-green-600"
            />

          </div>

          <h2 className="text-green-700 text-xl font-bold mb-2">
            Denúncia enviada!
          </h2>

          {/* protocolo */}
          <div className="flex items-center justify-center gap-2 mb-3">

            <BookOpen
              size={18}
              className="text-green-700"
            />

            <p className="text-gray-700 font-medium">
              Protocolo:
            </p>

          </div>

          <p className="text-green-700 font-bold text-lg mb-4">
            {protocolo}
          </p>

          <p className="text-sm text-gray-500 mb-2">
            Guarde esse número para acompanhar sua denúncia.
          </p>

          {/* diferencial */}
          <div className="bg-green-50 p-3 rounded-xl mb-4">

            <p className="text-sm text-gray-600">
              Sua denúncia será analisada. Caso não se enquadre
              nas finalidades do sistema, você será orientado.
            </p>

          </div>

          <button
            onClick={() => setTela("dashboard")}
            className="bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition"
          >
            Voltar ao início
          </button>

        </div>

      )}

      {/* voltar */}
      {!enviado && (

        <button
          onClick={() => setTela("nova")}
          className="mt-4 text-white border border-white py-2 px-4 rounded-xl hover:bg-white hover:text-green-700 transition"
        >
          Voltar
        </button>

      )}

    </div>
  );
}

export default FormularioRapido;