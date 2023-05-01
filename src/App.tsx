import { Button } from "./components/Button";


function App() {
  return (
    <div>
      <h1 className="font-bold text-center text-white my-10 text-4xl"> Componente de Botão</h1>
      <div className="w-full flex flex-col gap-10 justify-center items-center">
        <Button variant="submit" size="default" >Entrar</Button>
        <Button variant="proceed" size="small" >Avançar</Button>
        <Button variant="cancel" size="small" >Cancelar</Button>
        <Button icon={"0000"}>Entrar</Button>
      </div>
    </div>
  );
}

export default App;