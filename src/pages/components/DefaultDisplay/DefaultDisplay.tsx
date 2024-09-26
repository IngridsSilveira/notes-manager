import { useState } from "react";
import { FormInput, Button, ExibirNota, NotasLista } from "../index";

interface Nota {
  id: number;
  materia: string;
  nota: number;
}

export const DefaultDisplay: React.FC = () => {
  const [materia, setMateria] = useState<string>("");
  const [nota, setNota] = useState<number>(0);
  const [notaAluno, setNotaAluno] = useState<Nota[]>([]);

  const [mediaNotas, setMediaNotas] = useState<number>(0);
  const [mostrarResultado, setMostrarResultado] = useState<boolean>(false);

  //Transforma a nota do estudante em um array de objeto e valida alguns itens
  const notaEstudante = () => {
    //Valida se a nota é um número entre 0 e 10
    if (isNaN(nota) || nota > 10) {
      alert("A nota deve ser um número, entre 0 a 10");
      return "";
    }
    //Valida se os inputs estão preenchidos
    if (!materia || !nota) {
      alert("Preencha todos os campos");
      return;
    }
    // Cria um novo item de notas com os dados do aluno e adiciona à lista
    const newNotaAlunoItem: Nota = {
      id: Math.floor(Math.random() * 100),
      materia: materia,
      nota: nota,
    };
    // Adiciona a nova nota à lista de notas do aluno e limpa os campos
    setNotaAluno([...notaAluno, newNotaAlunoItem]);
    setMateria("");
    setNota(0);
  };

  // Calcula a média das notas do aluno
  const calcularMedia = () => {
    setMediaNotas(
      notaAluno
        .map((notaAlunoItem) => notaAlunoItem.nota)
        .reduce((total, currentValue) => total + currentValue, 0) /
        notaAluno.length
    );
    setMostrarResultado(true);
  };

  //Limpa todas as informações
  const limparTela = () => {
    setMediaNotas(0)
    setMostrarResultado(false);
    setNotaAluno([])
  }

  return (
    <div className="flex flex-col-reverse md:flex-row">
      {/* div média */}
      <div className="bg-black flex flex-col justify-between p-4 rounded-b-md md:rounded-l-md md:rounded-r-none shadow-md w-80">
        <p className="text-lg text-center mb-1 font-mono font-medium text-gray-200">
          Sua grade:{" "}
        </p>

        <NotasLista notaAluno={notaAluno} />

        <ExibirNota mediaNotas={mediaNotas} mostrarResultado={mostrarResultado} />
        <div className="flex gap-2">
          <Button color="indigo" label="Calcular Média" onClick={calcularMedia} />
          <Button color="indigo" label="Limpar" onClick={limparTela} />
        </div>
      </div>

      {/* formulário */}
      <form className="bg-indigo-700 p-2 rounded-t-md md:rounded-r-md md:rounded-l-none shadow-md w-80">
        <p className="text-lg text-center mb-1 font-mono font-medium text-gray-200">
          Adicione suas Notas:{" "}
        </p>
        <FormInput
          label="Materia"
          value={materia}
          onChange={(e) => setMateria(e.target.value)}
        />
        <FormInput
          label="Nota:"
          value={nota}
          onChange={(e) => setNota(Number(e.target.value))}
        />
        <Button color="black" label="Adicionar" onClick={notaEstudante} />
      </form>
    </div>
  );
};
