import React from "react";

import { Table } from "../components/Table";
import useClients from "../hooks/useClients";
import { Button } from "../components/Button";
import { Layout } from "../components/Layout";
import { ClientForm } from "../components/ClientForm";

export default function Home() {
  const {
    client,
    clients,
    newClient,
    showTable,
    saveClient,
    deleteClient,
    getAllClients,
    clientSelected,
    tableIsVisible,
  } = useClients();

  React.useEffect(getAllClients, []);

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
        {tableIsVisible ? (
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
        ) : (
          <ClientForm
            client={client}
            clientChanged={saveClient}
            abort={showTable}
          />
        )}
      </Layout>
    </div>
  );
}
