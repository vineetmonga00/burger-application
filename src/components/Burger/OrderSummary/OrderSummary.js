import React from 'react'
import classes from './OrderSummary.css';
const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return <li><span style={{textTransform: 'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}</li>
    })
  return (
    <div className={classes.OrderSummary}>
      <h3>Your Order Summary</h3>
      <ul>{ingredientSummary}</ul>
      <p>Please enjoy your BURGER!</p>
    </div>
  )
};

export default orderSummary;
