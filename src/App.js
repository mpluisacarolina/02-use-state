import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './Components/MiPrimerEstado';
import { Ejercicio } from './Components/Ejercicio'

function App() {

    const fecha = new Date();
    const ano_actual = fecha.getFullYear();

 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1> El Estado en React - Hook useState </h1>
        <div className = "Componentes">
            <hr/>
            <MiPrimerEstado/>
          <hr/>
            <Ejercicio 
              yearActual = {ano_actual}
            />
            <hr/>
          
          <div/>
         </div>
      </header>
    </div>
  );
}

export default App;
