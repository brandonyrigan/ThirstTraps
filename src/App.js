import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Ball from './components/Ball/Ball';
import './App.css';
import Particles from 'react-particles-js';
import 'tachyons';


const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }         
}        
class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      input: '',
      termialX:"",
      termialY:"",
      originX:"",
      originY:"",
      balls:[]
    };
      this.complete = this.complete.bind(this)
    }

  componentDidMount(){
      document.addEventListener('click',this.click);
  }

  click=e=>{
      let ball = {
          id: `${e.timeStamp}`,
          termialX:this.refs.terminal.offsetLeft,
          termialY:this.refs.terminal.offsetTop,
          originX:e.pageX,
          originY:e.pageY
      };
      this.state.balls.push(ball);
      this.setState({},()=>{
          this.refs.ball.init()
      })

  };
  complete(id){
      this.state.balls.forEach((v,i)=>{
          if(v.id === id){
              this.state.balls.splice(i,1);
              this.setState({});
              return
          }
      })
  }

  render() {
    return (
      <div className="App">
      <Particles className='particles' params={particlesOptions} />
      <Logo />
      <div className="terminal" ref="terminal"></div>
      {
        this.state.balls.map(v=>(
            <Ball ref="ball"
                  key={v.id}
                  terminal={{x:v.termialX,y:v.termialY}}
                  origin={{x:v.originX,y:v.originY}}
                  id={v.id}
                  complete={this.complete}
            />
        ))
      }
      {<ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
      />} 
      </div>
      );
  }
  
}

export default App;
