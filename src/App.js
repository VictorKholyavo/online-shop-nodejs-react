import React, {Component} from "react";
import "./App.css";
import withAuth from "./components/withAuth";
import Header from "./Header/HeaderView";
import MenuView from "./Menu/MenuView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header user={this.props.user} history={this.props.history}/>
        <MenuView history={this.props.history}/>
      </div>
    );
  }
}

export default withAuth(App);
