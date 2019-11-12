import React from 'react';
//import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import './slider.css' ;
import '../../../node_modules/react-input-range/lib/css/index.css'

 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Taux: {
        min: 0,
        max: 0,
      },
    };
  }

  render() {
    return (
      <div className = "formSlider">
      <form className="form">
        <InputRange
          draggableTrack
          maxValue={100}
          minValue={0}
          onChange={value => this.setState({ Taux: value })}
          // onChangeComplete={value => console.log(value)}
          //let Label={value => (value)}
          value={this.state.Taux} />
      </form>
    <h3>Le taux d'alcool de votre brevage sera compris entre {this.state.Taux.min} et {this.state.Taux.max}°</h3>
</div>
    );
  }
}
  
  export default App;