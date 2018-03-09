import React, { Component } from 'react';

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: []
        };
    }

    componentDidMount() {
        fetch("/history")
            .then((res) => {
                if (res.status !== 200) {
                    console.log("Error");
                    console.log(res.status);
                }
                return res.json();
            })
            .then((json) => {
                this.setState({
                    history: json
                });
            })
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        const history = this.state.history;
        return (
            <div className="Transporte container-fluid">
                <h3 className="centerAlign">Historic Figths</h3>
                <table className="table transportesTable">
                    <thead>
                        <tr><th>Player 1</th><th>Player 2</th><th>Winner</th><th className="textCenter">With how many likes?</th><th className="textCenter">Date</th></tr>
                    </thead>
                    <tbody>
                        {history.map((hist) => <tr key={hist._id}>
                            <td>{hist.player1}</td>
                            <td>{hist.player2}</td>
                            <td>{hist.winner}</td>
                            <td>{hist.likes}</td>
                            <td>{hist.date}</td>
                        </tr>)
                        }
                    </tbody>
                </table>
                <button onClick={() => this.nextPath("/")} className="btn btn-primary">Back</button>
            </div>
        );
    }
}

export default History;