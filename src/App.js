import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/Greeting';
// import Greetingf from './components/pure/Greetingf';
import TaskListComponent from './components/container/Task_list';
import ComponenteA from './components/pure/ComponenteA';
import GreetingStyled from './components/pure/GreetingStyled';
import Clock from './components/Clock';
import ClockFuncional from './components/ClockFuncional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio Greeting*/ }
        {/* <Greeting name={"Nicolás"}> </Greeting> */}
        {/* <Greetingf name={"Nicolás"}></Greetingf> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <GreetingStyled name="Nicolás"></GreetingStyled> */}
        {/* <Clock></Clock> */}
        <ClockFuncional></ClockFuncional>
        {/* <ComponenteA></ComponenteA> */}
      </header>
    </div>
  );
}

export default App;
