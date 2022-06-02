//import logo from './logo.svg';
import './App.css';
import y71 from './componentes/img/y71.jpg';
import carrinho from './componentes/img/carrinho.png';
import mais from './componentes/img/mais.png'

function LinhaDeCategoria({ categoria }) {
  return (
    <tr>
      <th colSpan="2">
        {categoria}
      </th>
    </tr>
  );
}

function LinhaDeProduto({ producto }) {
  const nome = producto.stoque? producto.nome :
    <span style={{ color: 'red' }}>
      {producto.nome}
    </span>;

  return (
    <tr>
      <td>{nome}</td>
      <td>{producto.preco}</td>
    </tr>
  );
}

function TabelaDeProduto({ productos }) {
  const rows = [];
  let lastCategory = null;

  productos.forEach((producto) => {
    if (producto.categoria !== lastCategory) {
      rows.push(
        <LinhaDeCategoria
          categoria={producto.categoria}
          key={producto.categoria} />
      );
    }
    rows.push(
      <LinhaDeProduto
        producto={producto}
        key={producto.nome} />
    );
    lastCategory = producto.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function BarraPesquisa() {
  return (
    <form>
      <input type="text" placeholder="pesquisar..." />
      <label className='filtro'>
        <input type="checkbox"  />
        {' '}
        Apenas disponíveis
      </label>
    </form>
  );
}

function TabelaFiltravel({ productos }) {
  return (
    <div>
      <TabelaDeProduto productos={productos} />
    </div>
  );
}
const PRODUCTOS = [
  //informatica
  {categoria: "informatica",subcategoria:"computador", preco: "kz300k", stoque: true,nome: "lenovo"},
  {categoria: "informatica",subcategoria:"computador", preco: "kz300k", stoque: true,nome: "HP"},
  {categoria: "informatica",subcategoria:"telemovel", preco: "kz80k", stoque: true,nome: "vivo"},
  {categoria: "informatica",subcategoria:"telemovel", preco: "kz100k", stoque: true,nome: "Samsung"},
  {categoria: "informatica",subcategoria:"carregador", preco: "kz12k", stoque: false,nome: "carregador lenovo"},
  {categoria: "informatica",subcategoria:"carregador", preco: "kz6k", stoque: false,nome: "carregador samsung"},
  //restauraçao
  {categoria: "restauracao",subcategoria:"bebidas", preco: "kz 1k", stoque: true,nome: "sumo de laranja"},
  {categoria: "restauracao",subcategoria:"bebidas", preco: "kz 1k", stoque: true,nome: "cocacola"},
  {categoria: "restauracao",subcategoria:"produtos pasteleiros", preco: "kz 1k", stoque: true,nome: "bolo de chocolate"},
  {categoria: "restauracao",subcategoria:"produtos pasteleiros", preco: "kz 1k", stoque: false,nome: "pastel de natas"},
  {categoria: "restauracao",subcategoria:"cusinhados", preco: "kz 10k", stoque: false,nome: "bacalhau com natas"},
  {categoria: "restauracao",subcategoria:"cusinhados", preco: "kz 10k", stoque: false,nome: "lazanha"},
  //serviços
  {categoria: "servicos",subcategoria:"frio", preco: "kz 10k", stoque: false,nome: "AC"},
  {categoria: "servicos",subcategoria:"frio", preco: "kz 10k", stoque: true,nome: "geleira"},
  {categoria: "servicos",subcategoria:"radio", preco: "kz 10k", stoque: true,nome: "TV"},
  {categoria: "servicos",subcategoria:"radio", preco: "kz 10k", stoque: true,nome: "computadores"},
]
// colar no App <TabelaFiltravel productos={PRODUCTOS} />;

// let valor=document.getElementById(produto)

//function Apresentar(){
//}
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="cabcima">
        <h1>Shopping</h1>
        <div>
        <button className="login" > LogIn</button>
        <button className="inscrever"> Inscrever-se</button>
        </div>
      </div>

      <div className="cabmeio">
        <h4>Explorar</h4>
        <h4>Carreiras</h4>
      </div>

      <div className="cabbaixo">
        <div className="pesquisa"><BarraPesquisa/></div>

        <div className=" servicos">
          
          <button className='informatica'> Informática 
          <ul className='eleminformatica'>
            <li  >Computador
              <div className='container' >
                <div className='produto'>
                <img src={y71} />
                <h4><b>HP-W11-intel</b></h4>
                <p>300k kz</p>
                <div className='minicones'><img src={mais} /><img src={carrinho} /></div>
                </div>
                <div className='produto'>
                <img src={y71} />
                <h4><b>HP-W11-intel</b></h4>
                <p>300k kz</p>
                <div className='minicones' ><img src={mais} /><img src={carrinho} /></div>
                </div>
                <div className='produto'>
                <img src={y71} />
                <h4><b>HP-W11-intel</b></h4>
                <p>300k kz</p>
                <div className='minicones'><img src={mais} /><img src={carrinho} /></div>
                </div>
              </div>
            </li>


            <li>Disco</li>
            <li>Telemóvel</li>
            <li>Auricular</li>
            <li>Carregador</li>
            <li>Mause</li>
          </ul>
          </button>

          <button className='restauracao'> Restauração
          <ul>
            <li>Bebidas</li>
            <li>Produtos pasteleiros</li>
            <li>Cusinhados</li>
          </ul>
          </button>
          <button className='prestacaoservicos'> Prestação de Serviços
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

      <div className='apresentacao'>
      <TabelaFiltravel productos={PRODUCTOS}/>;
      </div>
      
    </div>

    
  );
}

export default App;
