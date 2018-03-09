import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import './App.css';

class Players extends Component {
    render() {
        return (
                <div className="Playrz container">
                <form className="form form-horizontal" id="playerz-submission" onSubmit={this.props.handleSubmit}>
                    <div className="row">
                        <h3 className="centerAlign">Enter Players Usernames</h3>
                        <div className="col-md-5">
                            <FormGroup>
                                <ControlLabel>Player 1: </ControlLabel>
                                <FormControl
                                    type="text" placeholder="Player 1 username"
                                    name="player1" onChange={this.props.udpateP1}
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2 text-center">
                          <br />
                          <h5><strong>VS.</strong></h5>
                        </div>
                        <div className="col-md-5">
                            <FormGroup>
                                <ControlLabel>Player 2: </ControlLabel>
                                <FormControl
                                    type="text" placeholder="Player 2 username"
                                    name="player2" onChange={this.props.udpateP2}
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <FormGroup>
                        <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default Players;