import React from "react";

const FliterProduct = (props) => {
  function onFilterValueChanged(event) {
    props.filterValueSelected(event.target.value);
  }

  function onRadioValueChanged(event){
    props.filterValueSelected(event.target.value);
  }

  return (
    <>
      <div className="filter-search">
        <select name="isA-Z" onChange={onFilterValueChanged}>
          <option value="Custom-order">Custom</option>
          <option value="Ball">Ball</option>
          <option value="Bat">Bat</option>
          <option value="Shoes">Shoes</option>
        </select>
      </div>
      <input type="radio" id="html" name="fav_language" value="HTML" onChange={onRadioValueChanged}/>
      <label htmlFor="html">below 500</label>
      <br />
      <input type="radio" id="css" name="fav_language" value="CSS" />
      <label htmlFor="css">500 - 1000</label>
      <br />
      <input
        type="radio"
        id="javascript"
        name="fav_language"
        value="JavaScript"
      />
      <label htmlFor="javascript">above 1000</label>
    </>
  );
};

export default FliterProduct;
