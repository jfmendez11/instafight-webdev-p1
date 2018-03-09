import React, { Component } from 'react';
import { Carousel } from "react-bootstrap";

class WinnerCarousel extends Component {
    render() {
        let lst = this.props.winnerSrcPics;
        return (
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12">
                        <Carousel id="winner-car">
                            {lst.map((src) =>
                                <Carousel.Item>
                                    <img src={src} alt="winner pic" width={640} height={640} />
                                </Carousel.Item>
                            )}
                        </Carousel>
                        <br />
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" onClick={this.props.handleClick2} className="btn btn-primary">New Fight</button>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default WinnerCarousel;