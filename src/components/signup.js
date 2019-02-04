import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        console.log("PROPS")
        console.log(props);
        document.title = "count these hands howboudah";
    }

    componentDidMount() {
        console.log("%clol why are you opening the console", "background: #222; color: #bada55");
        console.log("%cyou silly.", "background: #222; color: #bada55");
        var players = this.props.players;
        window.localStorage.setItem("lol", JSON.stringify(players))
        var localStorage = JSON.parse(window.localStorage.getItem("lol"))
        console.log(localStorage);
    }

    //parameters reversed? call is "this.handleTextFieldChange.bind(this,index)"
    handleTextFieldChange = (index, e) => {
        this.props.handlePlayerNameChange(index, e.target.value)
    }

    render() {
        const players = this.props.players.map((playa, index) => (
            <div key={index}>
                <TextField
                    value={playa.name}
                    label="Player"
                    onChange={this.handleTextFieldChange.bind(this, index)}
                    variant="outlined" /> <br /> </div>
        ));
        return (
            <div id="home">
                <div id="logo">
                    <h1> count these hands. </h1> <br />
                    a point counter for nertz, speed uno, or anything else that requires keeping track of points
                <div id="credit"> created by jon wong because he was bored. </div>
                </div>
                <div id="signup">
                    {players}
                    <br />
                    <Button onClick={this.props.handleNewPlayer} variant="contained"> Add another player. </Button> <br />
                    <Button onClick={this.props.handleRemovePlayer} variant="contained"> Remove player. </Button> <br />
                    <Button onClick={this.props.handleLetsPlay} variant="contained" color="primary"> Let's Play! </Button>
                </div>
            </div>
        )
    }
}
