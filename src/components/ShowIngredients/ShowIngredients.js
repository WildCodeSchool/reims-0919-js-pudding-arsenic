/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */
import React from 'react';

class ShowIngredients extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <figure>
                <img src={this.props.image_front_url} />
                </figure>
                <p>{this.props.generic_name_fr}</p>
                <p>{this.props.manufacturing_places}</p>
                <p>{this.props.nutriments.alcohol}° alcool</p>
            </div>
        )
    }
}
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <figure>
          <img src={this.props.image_front_url} alt={this.props.generic_name_fr} />
        </figure>
        <p>{this.props.generic_name_fr}</p>
        <p>{this.props.manufacturing_places}</p>
        <p>
          {this.props.nutriments.alcohol}
° alcool
        </p>
      </div>
    );
  }
}


export default ShowIngredients;
