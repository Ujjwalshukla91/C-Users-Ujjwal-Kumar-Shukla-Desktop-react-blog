import React, { Component } from 'react';

import './App.css';

/* class RegularClass {}
class ComponentClass extends Component {}

const regulagrClassInstance = new RegularClass();
const componentClassInstance =new ComponentClass();

console.log('regulagrClassInstance', regulagrClassInstance);
console.log('componentClassInstance', componentClassInstance);
 */
//import components
class App extends Component {
  constructor(){
    super();
    this.state={ displayBio: false};

    console.log('component this', this);

    this.toggleDisplayBio =this.toggleDisplayBio.bind(this);
  }


toggleDisplayBio(){
  this.setState({ displayBio: !this.state.displayBio });
}

  render() {
    return(
      <div>
        <h1>hello!</h1>
        <p>My name is ujjwal kumar shukla</p>
        <p>i am trying to learn react</p>
        {
          this.state.displayBio ? (
          <div>
            <p>I am trying to Learn react js</p>
            <p>React js is most important to learn coding</p>
            <p>Coding is cool language</p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
        }
      </div>
    )
  }
}

export default App;













/* import Contact from './Contact' */

/* function App() {
  //write javasctipt Here

  const [name,setName]=useState("Ujjwal")
 
  return (
    <div className="App">
      <h1>Hello Ujjwal</h1>

      <div className="home">
        <About name={name} />
        <Contact />
      </div>
     
    </div>
  );
}
 */

 