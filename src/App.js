import React, { Component } from 'react';
import PhoneListWrapperComponent from './components/PhoneList/PhoneListWrapperComponent';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import SearchWrapperComponent from "./components/Search/SearchWrapper";
import SortWrapperComponent from "./components/Sort/SortWrapperComponent";
import CartWrapperComponent from "./components/Cart/CartWrapperComponent";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import SinglePhoneComponent from "./components/SinglePhone/SinglePhone";

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
                    <Router>
                        <div>
                            <Route exact  path='/' component={PhoneListWrapperComponent} />
                            <Route path='/:id' component={SinglePhoneComponent} />
                        </div>

                    </Router>
                </div>


            </div>
        </div>

    );
  }
}

export default App;
