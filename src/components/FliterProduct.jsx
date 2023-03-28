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
    <div className="enhanced">
      <div className="filter-search">
        <select name="isA-Z" onChange={onFilterValueChanged}>
          <option value="Custom-order">Custom</option>
          <option value="Ball">Ball</option>
          <option value="Bat">Bat</option>
          <option value="Shoes">Shoes</option>
        </select>
      </div>
      <div className="radioselect">
      <div class="container">
      <div class="container">
	<form>
		<label>
			<input type="radio" name="radio" checked=""/>
			<span>Under 500</span>
		</label>
		<label>
			<input type="radio" name="radio"/>
			<span>500-1000</span>
		</label>
		<label>
			<input type="radio" name="radio"/>
			<span>Above 1000</span>
		</label>
	</form>
</div>
</div>
      <br />
      
      
      </div>
      </div>
    </>
  );
};

export default FliterProduct;
