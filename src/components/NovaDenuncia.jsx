import { useState } from "react";

function NovaDenuncia() {
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const dados = {
      categoria,
      descricao,
      imagem,
      status: "Enviado",
    };

    console.log("Denúncia:", dados);
    alert("Denúncia enviada com sucesso!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center p-4">
      
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-3xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-1 text-center">
          Nova Denúncia
        </h2>

        <p className="text-gray-500 text-sm text-center mb-6">
          Informe o problema encontrado
        </p>

        {/* Categoria */}
        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Categoria
        </label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="w-full mb-4 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        >
          <option value="">Selecione uma categoria</option>
          <option value="lixo">🗑️ Lixo</option>
          <option value="mato">🌿 Mato alto</option>
          <option value="mosquito">🦟 Foco de mosquito</option>
        </select>

        {/* Descrição */}
        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Descrição
        </label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="w-full mb-4 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Descreva o problema..."
          rows="4"
          required
        />

        {/* Imagem */}
        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Foto (opcional)
        </label>
        <input
          type="file"
          onChange={(e) => setImagem(e.target.files[0])}
          className="mb-4 w-full text-sm"
        />

        {/* Botão */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
        >
          Enviar Denúncia
        </button>
      </form>
    </div>
  );
}
<h2 className="text-5xl text-red-500">
  TESTE
</h2>
export default NovaDenuncia;