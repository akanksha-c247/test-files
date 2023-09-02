import './App.css';
import { Banner } from './components/banner/Banner';
import { Content } from './components/content/Content';
import { Header } from './components/header/Header';
import { NavBar } from './components/navBar/NavBar';
// import { Header } from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Banner/>
      <Content/>
    </div>
  );
}

export default App;
