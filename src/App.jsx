import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NovaDenuncia from "./components/NovaDenuncia";
import ChatAjuda from "./components/ChatAjuda";
import EscolhaDenuncia from "./pages/EscolhaDenuncia";
import FormularioRapido from "./pages/FormularioRapido";
import FormularioCompleto from "./pages/FormularioCompleto";
import MinhasDenuncias from "./pages/MinhasDenuncias";
import Notificacoes from "./pages/Notificacoes";

function App() {
  const [notificacoes, setNotificacoes] = useState([]);
  const [denuncias, setDenuncias] = useState([]);
  const [usuario, setUsuario] = useState(null);
  const [tela, setTela] = useState("dashboard");

  if (!usuario) {
  return <Login onLogin={setUsuario} />;
}

  if (tela === "dashboard") {
    return (
      <>
        <Dashboard setTela={setTela} usuario={usuario} setUsuario={setUsuario} />
        <ChatAjuda />
      </>
    );
  }

  if (tela === "rapido") {
  return (
    <>
      <FormularioRapido setTela={setTela} setDenuncias={setDenuncias} setNotificacoes={setNotificacoes} />
      <ChatAjuda />
    </>
  );
}

if (tela === "completo") {
  return (
    <>
       <FormularioCompleto 
        setTela={setTela} 
        setDenuncias={setDenuncias} 
        setNotificacoes={setNotificacoes} 
      />
      <ChatAjuda />
    </>
  );
}

 if (tela === "nova") {
  return (
    <>
      <EscolhaDenuncia setTela={setTela} />
      <ChatAjuda />
    </>
  );
}

if (tela === "minhas") {
  return (
    <>
      <MinhasDenuncias denuncias={denuncias} setTela={setTela} />
      <ChatAjuda />
    </>
  );
}

if (tela === "notificacoes") {
  return (
    <>
      <Notificacoes notificacoes={notificacoes} setTela={setTela} />
      <ChatAjuda />
    </>
  );
}
}

export default App;