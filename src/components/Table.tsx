import Client from "../core/Client";
import { IconDelete, IconEdit } from "./Icons";

interface TableProps {
  clients: Client[];
  clientSelected?: (client: Client) => void;
  clientDeleted?: (client: Client) => void;
}

export const Table = (props: TableProps) => {
  const renderActions = props.clientSelected || props.clientDeleted;

  function renderActionsButtons(client: Client) {
    return (
      <td className="p-4 flex justify-center ">
        {props.clientSelected ? (
          <button
            onClick={() => props.clientSelected(client)}
            className="flex justify-center items-center text-green-600 rounded-full p-2 mx-1 hover:bg-purple-50"
          >
            {<IconEdit />}
          </button>
        ) : (
          false
        )}

        {props.clientDeleted ? (
          <button
            onClick={() => props.clientDeleted(client)}
            className="flex justify-center items-center text-red-600 rounded-full p-2 mx-1 hover:bg-purple-50"
          >
            {<IconDelete />}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}
      >
        <tr>
          <th className="text-left p-4">Código</th>
          <th className="text-left p-4">Nome</th>
          <th className="text-left p-4">Idade</th>
          {renderActions && <th className="p-4">Ações</th>}
        </tr>
      </thead>
      <tbody>
        {props.clients?.map((client, index) => (
          <tr
            key={index}
            className={`${index % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
          >
            <td className="text-left p-4">{client.id}</td>
            <td className="text-left p-4">{client.name}</td>
            <td className="text-left p-4">{client.age}</td>

            {renderActions && renderActionsButtons(client)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
