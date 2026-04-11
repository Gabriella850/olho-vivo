import { useState } from "react";
import { X } from "lucide-react";

function ChatAjuda() {

const fecharChat = () => { setAberto(false); setMensagens([]);};

  const [aberto, setAberto] = useState(false);
  const [mensagens, setMensagens] = useState([]);

  const respostas = {
    denuncia: `Para fazer uma denúncia:

1. Clique em "Nova Denúncia"
2. Escolha a categoria do problema
3. Descreva a situação com o máximo de detalhes
4. (Opcional) Adicione uma foto
5. Clique em enviar

Sua denúncia ficará registrada no sistema.`,

foco: `Este aplicativo é destinado exclusivamente para denúncias de terrenos baldios em Rondonópolis- MT.

Seu objetivo é permitir que a população registre problemas encontrados nesses locais e acompanhe suas denúncias.

Para saber os tipos de problemas que podem ser denunciados, consulte a opção "Quais são as categorias?".`,

    categorias: `Categorias disponíveis:

🗑️ Lixo acumulado  
🌿 Mato alto  
🦟 Possível foco de mosquito  

Escolha a que melhor representa o problema encontrado no terreno.`,

    tempo: `Após o envio, sua denúncia ficará registrada.

O tempo de resolução depende do órgão responsável de Rondonópolis, mas você poderá acompanhar pelo app.`,

    dados: `Seus dados são utilizados apenas para identificação dentro do sistema.

Eles não são compartilhados publicamente.`,

bug: `Se você encontrou algum problema no aplicativo:

Envie um e-mail para nossa equipe de suporte:

📧 projetoolhovivosuporte
@gmail.com

Descreva o erro encontrado e, se possível, adicione prints do ocorrido.

Sua ajuda é muito importante para melhorarmos o sistema!`,
  };

   // função do chat
  const handlePergunta = (pergunta, resposta) => {
    setMensagens([
      { tipo: "user", texto: pergunta },
      { tipo: "bot", texto: resposta },
    ]);
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setAberto(!aberto)}
        className="fixed bottom-5 right-5 bg-green-600 text-white p-4 rounded-full shadow-lg text-xl hover:bg-green-700"
      >
        💬
      </button>

      {/* Chat */}
      {aberto && (
        <div className="fixed bottom-20 right-5 w-80 bg-white rounded-2xl shadow-xl p-4">

          <h3 className="font-bold text-green-700 mb-2">
            Ajuda
          </h3>

          {/* Mensagem inicial */}
          <p className="text-sm text-gray-600 mb-3">
            Olá! 👋  
            Estou aqui para te ajudar.  
            Escolha uma das opções abaixo:
          </p>

          {/* Botões */}
          <div className="space-y-2">

            <button
  onClick={() =>
    handlePergunta(
      "Para que serve o aplicativo?",
      respostas.foco
    )
  }
  className="w-full text-left text-sm bg-gray-100 p-2 rounded hover:bg-gray-200"
>
  ℹ️ Para que serve o app?
</button>

            <button
              onClick={() =>
                handlePergunta(
                  "Como fazer uma denúncia?",
                  respostas.denuncia
                )
              }
              className="w-full text-left text-sm bg-gray-100 p-2 rounded hover:bg-gray-200"
            >
              📍 Como fazer uma denúncia?
            </button>

            <button
              onClick={() =>
                handlePergunta(
                  "Quais são as categorias?",
                  respostas.categorias
                )
              }
              className="w-full text-left text-sm bg-gray-100 p-2 rounded hover:bg-gray-200"
            >
              📂 Quais são as categorias?
            </button>

            <button
              onClick={() =>
                handlePergunta(
                  "Quanto tempo demora?",
                  respostas.tempo
                )
              }
              className="w-full text-left text-sm bg-gray-100 p-2 rounded hover:bg-gray-200"
            >
              ⏱️ Quanto tempo demora?
            </button>

            <button
              onClick={() =>
                handlePergunta(
                  "Meus dados estão seguros?",
                  respostas.dados
                )
              }
              className="w-full text-left text-sm bg-gray-100 p-2 rounded hover:bg-gray-200"
            >
              🔒 Meus dados estão seguros?
            </button>

            <button
              onClick={() =>
                handlePergunta(
                  "Quero reportar um problema",
                  respostas.bug
                )
              }
              className="w-full text-left text-sm bg-gray-100 p-2 rounded hover:bg-gray-200"
            >
              🐞 Reportar um problema
            </button>
          </div>

  {/* Mensagens estilo chat */}
          <div className="mt-4 space-y-2 max-h-60 overflow-y-auto">
            {mensagens.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-xl text-sm max-w-[80%] whitespace-pre-line ${
                  msg.tipo === "user"
                    ? "bg-green-600 text-white ml-auto"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.texto}
              </div>
            ))}
          </div>
          <button 
          onClick= {fecharChat} 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" > 
          <X size={20} /> </button>
        </div>
      )}
    </>
  );
}

export default ChatAjuda;