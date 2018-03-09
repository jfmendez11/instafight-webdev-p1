import React, { Component } from 'react';

class FightResult extends Component {
    render() {
        let status;
        if (this.props.tie) {
            status = <img src="http://www.reactiongifs.com/r/2013/02/tied.gif" alt="Mark Whalber gif saying we have a tie" />;
        } else {
            status = (
                <div>
                    <img src={this.props.winnerSrc} alt="instagram profile picture of the winner" />
                    <h3>{this.props.winner}</h3>
                    <button type="button" onClick={this.props.handleClick} className="btn btn-primary">View winner pics!</button>
                    <br />
                    <br />
                </div>
            );
        }
        return (
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12">
                        <h3>And the winner is...</h3>
                        {status}
                    </div>
                </div>
            </div>
        );
    }
}

export default FightResult;