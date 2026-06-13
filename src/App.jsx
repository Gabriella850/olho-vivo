import { useState, useEffect } from "react";
import { supabase } from "./services/supabase";

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

  useEffect(() => {
    if (!usuario || usuario.usuario === "visitante") return;

    carregarDenuncias();
    carregarNotificacoes();
  }, [usuario]);

  async function carregarDenuncias() {
    const { data, error } = await supabase
      .from("denuncias")
      .select("*")
      .eq("usuario", usuario.usuario);

    if (error) {
      console.error(error);
      return;
    }

    setDenuncias(data || []);
  }

  async function carregarNotificacoes() {
    const { data, error } = await supabase
      .from("notificacoes")
      .select("*")
      .eq("usuario", usuario.usuario);

    if (error) {
      console.error(error);
      return;
    }

    setNotificacoes(data || []);
  }

  if (!usuario) {
    return <Login onLogin={setUsuario} />;
  }

  if (tela === "dashboard") {
    return (
      <>
        <Dashboard
          setTela={setTela}
          usuario={usuario}
          setUsuario={setUsuario}
        />
        <ChatAjuda />
      </>
    );
  }

  if (tela === "rapido") {
    return (
      <>
        <FormularioRapido
          setTela={setTela}
          setDenuncias={setDenuncias}
          setNotificacoes={setNotificacoes}
          usuario={usuario}
        />
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
          usuario={usuario}
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
        <MinhasDenuncias
          denuncias={denuncias}
          setTela={setTela}
        />
        <ChatAjuda />
      </>
    );
  }

  if (tela === "notificacoes") {
    return (
      <>
        <Notificacoes
          notificacoes={notificacoes}
          setTela={setTela}
          usuario={usuario}
        />
        <ChatAjuda />
      </>
    );
  }

  return null;
}

export default App;