import React, { Component } from "react";
import logo from "../../logo.svg";
import "./firstComponent.css";
import Item from "../apiConsumer/items";

class FirstComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        Item.getAllItems((err, result) => {
            if (result) {
                console.log(result);
                const itemList = result.items.map((item, index) => {
                    return (
                        index + 1 + ". " + item.name
                    );
                });

                const items = itemList.map((item) =>
                    <div>{item.toUpperCase()}</div>
                );

                this.setState({items})
            }
            else {
                // a bit ugly error handling
                this.setState({items: "Items are not showing up, something is wrong :D"})
            }

        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Boilerplate</h2>
                </div>
                <div className="App-intro">
                    <h3>Items found</h3>
                    <div >
                        {this.state.items}
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstComponent;
