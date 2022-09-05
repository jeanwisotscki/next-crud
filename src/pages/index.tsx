import { Layout } from "../components/Layout";
import { Table } from "../components/Table";
import Client from "../core/Client";

export default function Home() {
  const clients = [
    new Client("Jean", 26, "sd2f31sdf"),
    new Client("jusé", 26, "sd2f31sdf"),
    new Client("maria", 26, "sd2f31sdf"),
    new Client("elza", 26, "sd2f31sdf"),
  ];

  function clientSelected(client: Client) {
    console.log(client.name, "selecionado");
  }

  function clientDeleted(client: Client) {
    console.log(client.name, "deletado");
  }

  return (
    <div
      className={`
      flex 
      h-screen 
      justify-center 
      items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}
    >
      <Layout title="Cadastro de usuários">
        <Table
          clients={clients}
          clientDeleted={clientDeleted}
          clientSelected={clientSelected}
        ></Table>
      </Layout>
    </div>
  );
}
