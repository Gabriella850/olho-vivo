import { useState } from "react";
import logo from "../assets/logo.png";

function Login({ onLogin }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [modoCadastro, setModoCadastro] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !senha || (modoCadastro && !nome)) {
      alert("Preencha todos os campos!");
      return;
    }

    if (modoCadastro) {
      alert("Conta criada com sucesso!");
      onLogin({ nome, email });
    } else {
      // se for login, usa parte do email como nome
      const nomeGerado = email.split("@")[0];
      onLogin({ nome: nomeGerado, email });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-green-700">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-3xl shadow-xl w-full max-w-sm"
      >
        <div className="flex flex-col items-center mb-1">
<h1 className="text-2xl font-bold text-green-700 mb-0">
    Olho Vivo
  </h1>

  <img src={logo} alt="Logo" className="w-45" />
</div>
        <h2 className="text-2xl font-bold text-green-700 text-center mb-2">
          {modoCadastro ? "Criar Conta" : "Login"}
        </h2>

        {/* Nome (só aparece no cadastro) */}
        {modoCadastro && (
          <input
            type="text"
            placeholder="Nome"
            className="w-full mb-3 p-3 border rounded-xl"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-3 border rounded-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full mb-4 p-3 border rounded-xl"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 mb-3">
          {modoCadastro ? "Cadastrar" : "Entrar"}
        </button>

        <p
          className="text-center text-sm text-green-700 cursor-pointer"
          onClick={() => setModoCadastro(!modoCadastro)}
        >
          {modoCadastro
            ? "Já tem conta? Fazer login"
            : "Não tem conta? Criar conta"}
        </p>
      </form>
    </div>
  );
}

export default Login;