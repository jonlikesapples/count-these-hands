import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Points extends Component {
    constructor(props) {
        super(props);
        console.log("PROPS")
        console.log(props)
        document.title = "read it and weep"
        console.log("%clol why are you opening the console", "background: #222; color: #bada55");
        console.log("%cyou silly.", "background: #222; color: #bada55");
        var arrayNames = localStorage.getItem("players").split("|");
        var persistantPoints = localStorage.getItem("points").split("|");
        var namesAndPoints = [];
        arrayNames.map((n, index, arr) => {
            namesAndPoints.push({
                name: n,
                points: parseInt(persistantPoints[index]),
                textfield: ""
            })
        })

        namesAndPoints.sort(function (a, b, ) {
            return b.points - a.points
        })

        this.setState({ names: namesAndPoints })
    }

    //NOTE TO SELF: onKeyPress uses event.key, while onChange uses event.target.value
    handleTextFieldChange = (name, e) => {
        var index;
        for (var i = 0; i < this.state.names.length; i++) {
            if (name == this.state.names[i].name) {
                index = i; break;
            }
        }
        this.state.names[index].textfield = e.target.value;
        // console.log(this.state.names[index]);
        this.setState({ changeMeToReloadDOM: "" });
    }

    newRoundButton = () => {
        var localStorageString = "";
        this.state.names.map((n) => {
            n.points += (n.textfield != "") ? parseInt(n.textfield) : 0;
        })
        // console.log(this.state.names);
        this.state.names.map((p, index, arr) => {
            if (!(index == arr.length - 1)) {
                localStorageString += p.points + "|"
            } else { localStorageString += p.points }
        })
        localStorage.setItem('points', localStorageString);
        window.location.reload();
        // console.log("RELOAD WINDOW [DISABLED]")
    }

    backHomeButton = () => {
        document.cookie = "";
        window.location.href = "/"
    }
    render() {
        const points = this.props.players.map((player, index) => (
           console.log(player)
        ));
        return (
            <div id="biggest">
                {/* {names.map((n) => {
                    return <div id={n.name}>
                        <h1> {n.name.charAt(0).toUpperCase() + n.name.slice(1)} : {n.points} </h1>
                        <TextField label="Points"
                            type="number"
                            value={n.textfield}
                            onChange={this.handleTextFieldChange.bind(this, n.name)}
                            variant="outlined"
                        />
                    </div>
                })} */}
                {points}
                <br />
                <Button onClick={this.newRoundButton} variant="contained" color="primary"> Next Round! </Button> <br /> <br />
                <Button onClick={this.backHomeButton} variant="contained" color="secondary"> New Game </Button>

                {/* <Button onClick = {this.resetEverything}> Reset (in case something broke) </Button> */}
            </div>
        )
    }
}
