import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="CR7" aboutLink="Ye about ka button hai, or isme prop types use kiya hai"/>
    {/* <Navbar/> */}
    <TextForm/>
    </>     
  );
}

export default App;
