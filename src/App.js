import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/Greeting';
// import Greetingf from './components/pure/Greetingf';
import TaskListComponent from './components/container/Task_list';
import ComponenteA from './components/pure/ComponenteA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio Greeting*/ }
        {/* <Greeting name={"Nicolás"}> </Greeting> */}
        {/* <Greetingf name={"Nicolás"}></Greetingf> */}
        {/* <TaskListComponent></TaskListComponent> */}
        <ComponenteA></ComponenteA>
      </header>
    </div>
  );
}

export default App;
