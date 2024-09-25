interface ExibirNotaProps {
    mediaNotas: number;
    mostrarResultado: boolean;
}
export const ExibirNota: React.FC<ExibirNotaProps> = ({mediaNotas, mostrarResultado}) => {
    return (
        <div>
        <h2 className="text-white font-medium">
          Média total: {mediaNotas}
        </h2>
        {mostrarResultado && (
        <p
          className={`${
            mediaNotas !== null && mediaNotas >= 6 ? "text-green-500" : "text-red-500"
          } text-lg font-bold`}
        >
          {mediaNotas !== null && mediaNotas >= 6 ? "Aprovado" : "Reprovado"}
        </p>
      )}
      </div>
    )
}