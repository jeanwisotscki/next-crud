interface InputFormProps {
  label: string;
  type: "text" | "number";
  inputValue: any;
  onChangeInp: (inputValue: any) => void;
}

export const Input = (props: InputFormProps) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1" htmlFor={props.label}>
        {props.label}
      </label>
      <input
        id={props.label}
        className={`
          border border-purple-500
          rounded-md
          px-4 py-2 mb-2
          bg-gray-100
          focus:outline-none
          focus:bg-white
          
        `}
        type={props.type}
        value={props.inputValue}
        onChange={(e) => props.onChangeInp(e.target.value)}
      />
    </div>
  );
};
