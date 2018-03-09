import React, { Component } from 'react';
import { Navbar, Nav, NavItem, } from "react-bootstrap";
import './App.css';
import FightResult from "./FightResult";
import WinnerCarousel from './WinnerCarousel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: "",
      player2: "",
      likesP1: 0,
      likesP2: 0,
      winner: "",
      likes: 0,
      gameOver: false,
      tie: false,
      winnerSrcPics: [],
      winnerSrc: "",
      showPics: false
    };
    this.updateP1 = this.updateP1.bind(this);
    this.updateP2 = this.updateP2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  updateP1(event) {
    this.setState({ player1: event.target.value });
  }

  updateP2(event) {
    this.setState({ player2: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let likes1 = 0;
    let likes2 = 0;
    let imgSrc1 = [];
    let imgSrc2 = [];
    let ppSrc1 = "";
    let ppSrc2 = "";
    fetch("https://instagram.com/" + this.state.player1 + "/?__a=1")
      .then((res) => {
        if (res.status !== 200 || typeof res.user === undefined) {
          alert("There's not a user with the username " + this.state.player1 + " (Player 1) or the user has a private account");
          return;
        }
        return res.json();
      })
      .then((json) => {
        ppSrc1 = json.user.profile_pic_url_hd;
        for (let i = 0; i < json.user.media.nodes.length; i++) {
          likes1 += json.user.media.nodes[i].likes.count;
          imgSrc1.push(json.user.media.nodes[i].display_src);
        }
        this.setState({ likesP1: likes1 });
      })
      .then(() => {
        fetch("https://instagram.com/" + this.state.player2 + "/?__a=1")
          .then((res) => {
            if (res.status !== 200 || typeof res.user === undefined) {
              alert("There's not a user with the username " + this.state.player2 + " (Player 2) or the user has a private account");
              return;
            } else
              return res.json();
          })
          .then((json) => {
            ppSrc2 = json.user.profile_pic_url_hd;
            for (let i = 0; i < json.user.media.nodes.length; i++) {
              likes2 += json.user.media.nodes[i].likes.count;
              imgSrc2.push(json.user.media.nodes[i].display_src);
            }
            this.setState({ likesP2: likes2 });
          })
          .then(() => {
            if (this.state.likesP1 === this.state.likesP2) this.setState({ tie: true, gameOver: true, winner: "Tie", likes: this.state.likesP1 });
            else if (this.state.likesP1 > this.state.likesP2) this.setState({ gameOver: true, winner: this.state.player1, likes: this.state.likesP1, winnerSrcPics: imgSrc1, winnerSrc: ppSrc1 });
            else this.setState({ gameOver: true, winner: this.state.player2, likes: this.state.likesP2, winnerSrcPics: imgSrc2, winnerSrc: ppSrc2 });
          })
          .then(() => {
            fetch("/history", {
              method: "POST",
              body: JSON.stringify(this.state),
              headers: {
                "Content-Type": "application/json"
              }
            }).then((res) => {
              if (res.status !== 200) {
                console.log("Error");
                console.log(res.status);
              }
              return res.json();
            })
              .then((json) => {
                alert(json.message);
              })
          });
      });
  }

  handleClick(event) {
    this.setState({ showPics: true });
  }

  handleClick2(event) {
    this.setState({
      player1: "",
      player2: "",
      likesP1: 0,
      likesP2: 0,
      winner: "",
      likes: 0,
      gameOver: false,
      tie: false,
      winnerSrcPics: [],
      winnerSrc: "",
      showPics: false
    })
  }

  render() {
    let winnerWinner;
    let carousel;
    if (this.state.gameOver) winnerWinner = <FightResult tie={this.state.tie} winner={this.state.winner} winnerSrc={this.state.winnerSrc} handleClick={this.handleClick} />;
    else winnerWinner = <div></div>;
    if (this.state.showPics) carousel = <WinnerCarousel showPics={this.state.showPics} winnerSrcPics={this.state.winnerSrcPics} handleClick2={this.handleClick2} />;
    else carousel = <div></div>;
    return (
      <div className="App">
        <header className="App-header">
          <Navbar inverse collapseOnSelect className="customNav">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/#">InstaFight</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="/history">History</NavItem>
              </Nav>
              <Nav pullRight>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <form onSubmit={this.handleSubmit}>
                <label className="col-md-5">
                  Player 1:
              <br />
                  <input type="text" value={this.state.player1} onChange={this.updateP1} />
                </label>
                <div className="col-md-2 text-center">
                  <h5><strong>Vs.</strong></h5>
                </div>
                <label className="col-md-5">
                  Player 2:
              <br />
                  <input type="text" value={this.state.player2} onChange={this.updateP2} />
                </label>
                <br />
                <br />
                <input type="submit" value="Submit" className="btn btn-primary" />
              </form>
            </div>
          </div>
        </div>
        {winnerWinner}
        {carousel}
        <footer className="text-center footer-area">
          <div className="footer">
            <br />
            <br />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12" id="credentials">
                  Copyright &copy; Juan Felipe Méndez Peralta 2018
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
