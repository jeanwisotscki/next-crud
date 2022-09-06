import React from "react";

import useTableOrForm from "./useTableOrForm";

import Client from "../core/Client";
import ClientRepo from "../core/ClientRepo";
import ClientsCollection from "../backend/db/ClientsCollection";

export default function useClients() {
  const repo: ClientRepo = new ClientsCollection();

  const { tableIsVisible, showForm, showTable } = useTableOrForm();

  const [clients, setClients] = React.useState<Client[]>([]);
  const [client, setClient] = React.useState<Client>(Client.emptyClient());

  function clientSelected(client: Client) {
    setClient(client);
    showForm();
  }

  async function deleteClient(client: Client) {
    await repo.delete(client);
    getAllClients();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAllClients();
  }

  function newClient() {
    setClient(Client.emptyClient());
    showForm();
  }

  function getAllClients() {
    repo.getAll().then((clients) => {
      setClients(clients);
      showTable();
    });
  }

  return {
    client,
    clients,
    showTable,
    newClient,
    saveClient,
    deleteClient,
    getAllClients,
    clientSelected,
    tableIsVisible,
  };
}
