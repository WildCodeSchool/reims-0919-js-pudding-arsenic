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
        choiseAlcohol: '',
        choiseNo: '',
      },
    };
  }

  showSliders=()=>{
    // style={display: this.state.choiseAlcohol ? 'none' : 'block' }
      this.setState({
        choiseAlcohol : false,
        choiseNo : true
      })
    }
    showNoAlcohol=()=>{
      // style={display: this.state.choiseAlcohol ? 'none' : 'block' }
        this.setState({
          choiseAlcohol : true,
          choiseNo : false,
        })
      }

  render() {
    return (
      <div className = "formSlider">
        <div className = "btnSelectAlcohol">
          <h3 className = "titlechoiseAlcohol">Choisissez votre Cocktail ....</h3>
          <button className = "btnS" onClick={this.showNoAlcohol}>Sans Alcool</button>
          <button className = "btnA" onClick={this.showSliders}>Diabol hique</button>
        </div>
        <div>
          <h1 className = "showTitleNo" style={ {display: this.state.choiseAlcohol ? 'none' : 'block'} }>Petit joueur !</h1>
        </div>
        <div className = "showSlider" style={ {display: this.state.choiseAlcohol ? 'block' : 'none'} }>
          <form className="form">
            <InputRange
              draggableTrack
              maxValue={100}
              minValue={0}
              onChange={value => this.setState({ Taux: value })}
              value={this.state.Taux} />
          </form>
          <h3>Le taux d'alcool de votre brevage sera compris entre {this.state.Taux.min} et {this.state.Taux.max}°</h3>
        </div>
      </div>
    );
  }
}
  
  export default App;