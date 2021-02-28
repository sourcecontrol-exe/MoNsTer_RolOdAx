import './App.css'
import {Component} from 'react';


class App extends Component{
   constructor(){
     super();

     this.state = {
       monsters: [
         {
           name: "betaal",
           id:"abc1"
         },
         {
           name : "swetabh",
           id:"hello12"
         },
         {
           name : "dracula",
           id:"adasd"
         }
       ]
     }
   }
  render(){
    return (
    <div className="App">

      {
        this.state.monsters.map(ele=>
          <h1 key = {ele.id}>{ele.name}</h1>
        )
      }
  
    </div>
  );
  }
}
export default App;
 