import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


interface State {
  szam : number;
  nagyineve: string;
  nagyik: string[];
}

class App extends Component<{}, State>{

  constructor(props : {}) {
    super(props);

    this.state = {
      szam: 0,
      nagyineve: '',
      nagyik : [],
    }
  }

  gombnyomas = () => {

    this.setState({
      szam : this.state.szam + 1,
    })

  }

  felvetel = () => {
    if(this.state.szam >= 100){
      let nagyi = this.state.nagyineve

      this.setState({
        szam : this.state.szam - 100,
        nagyik: [ nagyi, ...this.state.nagyik ],
        nagyineve : '',
      })
    }
  }


  render(){
    let stilus : any = {};

    if(this.state.szam > 50){
      stilus.color = 'red';
      stilus.fontSize = '150%';
      stilus.fontWeight = 'bold';
    }
    return <div>
      <p style={stilus}>Sütik száma:{this.state.szam} </p>
      <img src='/suti.png' onClick={this.gombnyomas} alt='Suti' /><br />

      <p>Nagyi neve:

      <input type="text" value={this.state.nagyineve} onChange={(e) => {this.setState({nagyineve: e.currentTarget.value})}}></input><br />
      <button onClick={this.felvetel}>Nagyi Felvétel</button>
      </p>
      <div className='container-fluid'>
        <div className='row'>
          {this.state.nagyik.map(nagyi => 
          <div className='col-lg-1 col-md-2 col-sm-6 col-12'>{nagyi}</div>)}
        </div>
      </div>
    </div>
  }

}

export default App;


