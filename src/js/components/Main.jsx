'user strict'

import React from 'react';

import data from '../data';

import {GROUNDS_DATA} from '../constants';


class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.renderRow = this.renderRow.bind(this);
        this.renderCell = this.renderCell.bind(this);
        this.generateBoard = this.generateBoard.bind(this);
    }

    renderRow(row, i) {
        return (
            <tr key={i}>
                {row.map(this.renderCell)}
            </tr>
        );
    }

    renderCell(cell, i) {
        return (
            <td key={i} className="col-md-1">
                <i className={`fa fa-3x fa-${cell.icon}`} />
                {cell.key}
            </td>
        );
    }

    generateBoard(data) {
        return (
            <table className="table table-bordered">
                <tbody className="">
                    {data.map(this.renderRow)}
                </tbody>
            </table>
        );
    }

    render() {


        return (
            <section>
                <div className="container">
                    <div className="page-header">
                        <h1>BMF</h1>
                    </div>
                </div>

                <div className="container">
                    {this.generateBoard(data)}
                </div>
            </section>
        );
    }
}

export default Main;
