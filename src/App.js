//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="cabcima">
        <h1>Shopping</h1>
        <div>
        <button> LogIn</button>
        <button> Increver-se</button>
        </div>
      </div>

      <div className="cabmeio">
        <p>Explorar</p>
        <p>Carreiras</p>
      </div>

      <div className="cabbaixo">
        <div className="pesquisa"><input type="text" placeholder="Pesquisar..."></input></div>

        <div className=" servicos">
          <button> Informática 
          <ul>
            <li>Computador</li>
            <li>Disco</li>
            <li>Telemóvel</li>
            <li>Auricular</li>
            <li>Carregador</li>
            <li>Mause</li>
          </ul>
          </button>
          <button> Restauração
          <ul>
            <li>Bebidas</li>
            <li>Produtos pasteleiros</li>
            <li>Cusinhados</li>
          </ul>
          </button>
          <button> Prestação de Serviços
          <ul>
            <li>Técnico de Frio</li>
            <li>Técnico Rádio</li>
            <li>Pintura</li>
            <li>Arquitectura</li>
            <li>Electricidade</li>
            <li>Mecânica auto</li>
          </ul>

          </button>

        </div>
           
      </div>
      

      </header>

      <div>

      </div>
    </div>
    
  );
}

export default App;
