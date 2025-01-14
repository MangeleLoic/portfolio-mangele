
import './index.css';
import Home from './Components/Home';
import MyNavBar from './Components/MyNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Components/Projects';
import MyFooter from './Components/MyFooter';
import Skills from './Components/Skills';






function App() {
  return (
    <>
    <MyNavBar/>
    <Home/>
    <Skills/>
    <Projects/>
    <MyFooter/>
    </>
  );
}

export default App;
