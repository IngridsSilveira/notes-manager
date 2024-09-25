import { DefaultDisplay } from "./components/DefaultDisplay/DefaultDisplay";

export const App = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-200">
      <h1 className="text-2xl font-mono font-medium text-gray-800 mb-1">
        Calcule sua Média
      </h1>
      <DefaultDisplay/>
    </div>
  );
};
