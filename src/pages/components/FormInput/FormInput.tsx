interface InputProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

export const FormInput: React.FC<InputProps> = ({ label, onChange }) => {
  return (
    <div>
      <label className="block text-white font-medium mb-2">{label}</label>
      <input
        type="text"
        className="border border-slate-950 shadow-md p-1 rounded w-full"
        onChange={(e) => onChange(e)}
      />
     
    </div>
  );
};
