import './App.css';
import ChatArea from './ChatArea';
import SendForm from './SendForm';


function App() {


  return (

    <div className="App">
      <div className='centered'>
        <ChatArea></ChatArea>
        <SendForm></SendForm>
      </div>

    </div>
  );
}

export default App;
