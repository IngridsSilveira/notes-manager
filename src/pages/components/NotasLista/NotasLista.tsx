interface NotasListaProps {
  notaAluno: {
    id: number;
    materia: string;
    nota: number;
  }[];
}

export const NotasLista: React.FC<NotasListaProps> = ({ notaAluno }) => {
  return (
    <ul className="flex items-center justify-center flex-wrap">
      {notaAluno.map((nota) => {
        return (
          <li
            className="text-white font-medium p-1 w-1/2 border border-indigo-700"
            key={nota.id}
          >
            <p>{nota.materia}</p>
            <p>Nota: {nota.nota}</p>
          </li>
        );
      })}
    </ul>
  );
};
