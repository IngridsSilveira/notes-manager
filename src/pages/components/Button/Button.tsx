interface ButtonProps {
    label:string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => any;
    color: string;
}

const ButtonColor : { [key: string]: string } ={
    black: "bg-black",
    indigo: "bg-indigo-700"
}
export const Button: React.FC<ButtonProps> = ({color, label, onClick}) => {
    const buttonColor = ButtonColor[color] || "bg-green-600"
  return (
    <button
      className={`${buttonColor} text-white px-4 py-2 rounded mt-2 w-full`}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
