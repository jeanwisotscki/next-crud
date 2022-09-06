interface InputFormProps {
  label: string;
  type: "text" | "number";
  inputValue: any;
  readOnly?: boolean;
  onChangeInp?: (inputValue: any) => void;
}

export const Input = (props: InputFormProps) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1" htmlFor={props.label}>
        {props.label}
      </label>
      <input
        className={`
          border border-purple-500
          rounded-md
          px-4 py-2 mb-2
          bg-gray-100
          focus:outline-none
          ${props.readOnly ? "" : "focus:bg-white"}
        `}
        id={props.label}
        type={props.type}
        value={props.inputValue}
        readOnly={props.readOnly}
        onChange={(e) => props.onChangeInp(e.target.value)}
      />
    </div>
  );
};
