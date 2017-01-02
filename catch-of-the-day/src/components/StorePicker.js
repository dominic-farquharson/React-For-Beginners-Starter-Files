//needed for every component
import React from 'react';

//creating a StorePicker component
class StorePicker extends React.Component {
  //every component needs Render method
  render() {
    //can only return one parent element
    return (

      <form className="store-selector">
        {/* JSX Comment */}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store 	&rarr;</button>
      </form>

    )
  }
}

export default StorePicker;
