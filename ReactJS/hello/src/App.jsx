import './App.css'
import Header from './assets/componente/header/Header';
import Subtitulo from './assets/componente/Subtitulo/subtitulo';
import Title from './assets/componente/title/Title';

function App() {
  
  return (
    <>
     <Header />
      <Title  titulo="Anne a melhor"/>
      <Subtitulo texto="Minha pagina" />
      <Subtitulo texto="Minha pagina 2" />
    </>
  );
}

export default App;
