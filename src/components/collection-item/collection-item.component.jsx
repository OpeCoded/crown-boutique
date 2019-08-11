import React from "react";
//redux bindings that gives us access to redux state
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";
import "./collection-item.styles.scss";

//represent a single product
//item is are props of a single product like price,image,name
//addItem is the property dispatch from redux which is passed into the component,
//so when users clicks the add to cart button..the addItem is fired and the stores the item in our redux store
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      {/* the onClick function here allows to add items into the same array. This function can be used anywhere in this app (through Redux) */}
      <CustomButton onClick={() => addItem(item)} inverted>
        {" "}
        Add to cart{" "}
      </CustomButton>
    </div>
  );
};

//dispatching the addItem action...it is a function that gets a property dispatch
//whenever there is an addItem action...gets the item in as the property which will be passed into our CollectionItem
// of this function that will represent the add item prop that gets passed in to our component (CollectionItem) and
//then dispatch our add item action creator passing the item in (as payload or value)
//then dispatch it into our redux store and go throug our redux flow
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
