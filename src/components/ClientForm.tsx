import React from "react";

import { Input } from "./Input";
import { Button } from "./Button";

import Client from "../core/Client";
import { FormContext } from "../contexts/FormContext";

interface ClientFormProps {
  client: Client;
  abort?: () => void;
  clientChanged?: (client: Client) => void;
}

export const ClientForm = (props: ClientFormProps) => {
  // const { setIsVisible } = React.useContext(FormContext);

  const id = props.client?.id;
  const [name, setName] = React.useState(props.client?.name ?? "");
  const [age, setAge] = React.useState(props.client?.age ?? 0);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {id && <Input label="Código" type="text" inputValue={id} readOnly />}

      <Input label="Nome" type="text" inputValue={name} onChangeInp={setName} />
      <Input
        label="Idade"
        type="number"
        inputValue={age}
        onChangeInp={setAge}
      />

      <div className="flex justify-end mt-4">
        <Button
          onClick={() => props.clientChanged?.(new Client(name, +age, id))}
          bgColor="green"
        >
          Salvar
        </Button>

        <Button onClick={props.abort} bgColor="red" additionalStyles="ml-2">
          Cancelar
        </Button>
      </div>
    </form>
  );
};
