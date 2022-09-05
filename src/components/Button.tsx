interface ButtonProps {
  children: any;
  bgColor: "green" | "blue" | "red";
  additionalStyle?: string;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`
        bg-gradient-to-r
        ${
          props.bgColor === "green"
            ? "from-green-500 to-green-700"
            : props.bgColor === "blue"
            ? "from-blue-500 to-blue-700"
            : "from-red-500 to-red-700"
        }
        text-white
        py-2
        px-4
        rounded-md
        ${props.additionalStyle}
      `}
    >
      {props.children}
    </button>
  );
};
