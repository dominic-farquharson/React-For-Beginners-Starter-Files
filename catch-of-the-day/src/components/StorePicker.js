//needed for every component
import React from 'react';
import {getFunName} from '../helpers';

//creating a StorePicker component
class StorePicker extends React.Component {
  /*
  Alternate method to bind this to method calling it
  constructor() {
    super();
    //looks for goToStore method to bind itself to that method.
    this.goToStore = this.goToStore.bind(this);
  }
  */
  //every component needs Render method
  goToStore(event) {
    // stops form from submitting
    event.preventDefault();
    console.log('you changed the URL');
    // first grab text from the box. Need to map this to method it's called in.
    console.log(this.storeInput.value);
    // Second, transition from root to other directories.
  }

  render() {
    //can only return one parent element. Render method is bound to component.
    return (

      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        {/* JSX Comment */}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store &rarr;</button>
      </form>

    )
  }
}

export default StorePicker;
