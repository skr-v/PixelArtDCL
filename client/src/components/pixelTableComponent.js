import React, { Component } from "react";

const apiUrl = "http://127.0.0.1:7753";

class PixelTable extends Component {
    constructor(props) {
        super(props);
        this.state = { pixelsApiRes: [] };
    }

    callAPI() {
        fetch(`${apiUrl}/api/pixels`)
            .then(res => res.json())
            .then(resJson => this.setState({pixelsApiRes : resJson}))
    }

    componentDidMount() {
        this.callAPI();
        this.timer = setInterval(() => this.callAPI(), 1000);    
    }

    createColumns(rowIndex) {
        let cols = [];
        for (let i = 0; i < this.props.cols; i++) {
            var cell = (this.state.pixelsApiRes.find(pixel => pixel.x===i && pixel.y===rowIndex));
            if (cell) {
                console.log(i, rowIndex);
            }
        cols.push(<td key={i} style={{backgroundColor: cell ? cell.color : 'black'}}>{rowIndex === 0 ? i : null}</td>);
        }
        return cols;
    }

    createRows() {
        let rows = [];
        for (let i = this.props.rows-1; i >= 0; i--) {
        rows.push(<tr key={i}>{i}{this.createColumns(i)}</tr>);
        }
        return rows;
    }

    render() {
        return (
            <div>
                {/* {this.state.pixelsApiRes.map((pixel,index) => <p key={index}>{pixel.x},{pixel.y},{pixel.color}</p>)} */}
                <table>
                    <tbody>{this.createRows()}</tbody>
                </table>
                <h5>{this.props.rows}x{this.props.cols}</h5>
            </div>
        );
    }
}

export default PixelTable;
