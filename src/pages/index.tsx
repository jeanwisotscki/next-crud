import React from "react";

import Client from "../core/Client";
import { Table } from "../components/Table";
import { Button } from "../components/Button";
import { Layout } from "../components/Layout";
import { ClientForm } from "../components/ClientForm";
import { FormContext } from "../contexts/FormContext";

const clients = [
  new Client("Jean", 26, "sd2f31sdf"),
  new Client("jusé", 26, "sd2f31sdf"),
  new Client("maria", 26, "sd2f31sdf"),
  new Client("elza", 26, "sd2f31sdf"),
];

export default function Home() {
  const { isVisible, setIsVisible } = React.useContext(FormContext);

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
        {isVisible ? (
          <>
            <div className="flex justify-end">
              <Button
                onClick={() => setIsVisible(false)}
                bgColor="blue"
                additionalStyle="mb-4"
              >
                Novo cliente
              </Button>
            </div>
            <Table
              clients={clients}
              clientDeleted={clientDeleted}
              clientSelected={clientSelected}
            ></Table>
          </>
        ) : (
          <ClientForm client={clients[0]} />
        )}
      </Layout>
    </div>
  );
}
