import React from "react";

import { Input } from "./Input";
import { Button } from "./Button";

import Client from "../core/Client";
import { FormContext } from "../contexts/FormContext";

interface ClientFormProps {
  client: Client;
}

export const ClientForm = (props: ClientFormProps) => {
  const { setIsVisible } = React.useContext(FormContext);

  const [name, setName] = React.useState(props.client?.name ?? "");
  const [age, setAge] = React.useState(props.client?.age ?? "");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input label="Nome" type="text" inputValue={name} onChangeInp={setName} />
      <Input
        label="Idade"
        type="number"
        inputValue={age}
        onChangeInp={setAge}
      />

      <div className="flex justify-end mt-4">
        <Button bgColor="green">Salvar</Button>
        <Button
          onClick={() => setIsVisible(true)}
          bgColor="red"
          additionalStyle="ml-2"
        >
          Cancelar
        </Button>
      </div>
    </form>
  );
};
