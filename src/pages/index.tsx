import React from "react";

import Client from "../core/Client";
import { Table } from "../components/Table";
import { Button } from "../components/Button";
import { Layout } from "../components/Layout";
import { ClientForm } from "../components/ClientForm";
import { FormContext } from "../contexts/FormContext";
import { lista } from "../backend/config";

const clients = [
  new Client("Jean", 26, "sd2f31sdf"),
  new Client("jusé", 26, "sd2f31sdf"),
  new Client("maria", 26, "sd2f31sdf"),
  new Client("elza", 26, "sd2f31sdf"),
];

export default function Home() {
  // const { isVisible, setIsVisible } = React.useContext(FormContext);

  const [visible, setVisible] = React.useState<"table" | "form">("table");
  const [client, setClient] = React.useState<Client>(Client.emptyClient());

  function clientSelected(client: Client) {
    console.log(client.name, "selecionado");
    setClient(client);
    setVisible("form");
  }

  function deleteClient(client: Client) {
    console.log(client.name, "deletado");
  }

  function saveClient(client: Client) {
    console.log(client);
    setVisible("table");
  }

  function newClient() {
    setClient(Client.emptyClient());
    setVisible("form");

    const clientslist = lista();

    if (clientslist) {
      console.log(clientslist);
    }
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
        {visible === "form" ? (
          <ClientForm
            client={client}
            clientChanged={saveClient}
            abort={() => setVisible("table")}
          />
        ) : (
          <>
            <div className="flex justify-end">
              <Button
                onClick={newClient}
                bgColor="blue"
                additionalStyles="mb-4"
              >
                Novo cliente
              </Button>
            </div>
            <Table
              clients={clients}
              clientDeleted={deleteClient}
              clientSelected={clientSelected}
            />
          </>
        )}
      </Layout>
    </div>
  );
}
