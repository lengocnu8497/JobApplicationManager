import React, { Component } from "react";

import Board from "./Board";

import { Provider } from "react-redux";
import store from "../store";

import "../../styles/TaskBoard.css";

export default class TaskBoard extends Component {
    render() {
        return (
            /* store activities card in memory*/
            <Provider store={store}>
                <Board />
            </Provider>
        );
    }
}