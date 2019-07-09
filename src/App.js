import React,{Component} from 'react';
import './App.css';
import Form from './Components/Form';

class App extends Component {
  onSubmit=(fields)=>{
    console.log('App comp got',fields);
  }
  render(){
  return (
    <div className="App">
      <Form onSubmit={fields => this.handleSubmit(fields)}/>
    </div>
  );
}
}

export default App;
