import React from 'react'

class ShowIngredients extends React.Component {
  constructor(props) {
      super(props)
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
