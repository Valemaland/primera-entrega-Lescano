import logo from './logo.svg';
import './App.css';
/*import './NavBar.js';*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>-Librería espacializada en ilustración-</code>
        </p>
        <p>
          Libro Liebre 
        </p>
      
      <nav className="navbar" >
            <ul>
                <li>
                    
                    <a href="#">
                    Nosotros                       
                    </a>
                    
                </li>
                <li>
                    
                    <a href="https://www.google.com">   
                    Tienda
                    </a>
                </li>
                <li>
                    
                    <a href="https://ar.pinterest.com/srtamedusa/libros-ilustrados/">  
                    Blog                      
                    </a>
                </li>
                <li>
                    
                    <a href="#/">  
                    Eventos                     
                    </a>
                </li>
                <li>
                      
                    <a href="#">      
                    Contacto               
                    </a>
                </li>
            </ul>
        </nav>
      </header>
    </div>
    
  );
}

export default App;
