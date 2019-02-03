import React, { Component } from 'react';
import PhoneListWrapperComponent from './components/PhoneList/PhoneListWrapperComponent';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import SearchWrapperComponent from "./components/Search/SearchWrapper";
import SortWrapperComponent from "./components/Sort/SortWrapperComponent";
import CartWrapperComponent from "./components/Cart/CartWrapperComponent";


class App extends Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <section>

                        <SearchWrapperComponent />

                        <SortWrapperComponent/>
                    </section>

                    <CartWrapperComponent/>
                </div>

                <div className="col-md-10">
                    <PhoneListWrapperComponent />
                </div>
            </div>
        </div>

    );
  }
}

export default App;
