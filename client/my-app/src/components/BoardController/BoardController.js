import React from 'react';
import {Board} from "../Board/Board";
import './BoardController.css';
import {Chat} from "../Chat/Chat";
import {TimeController} from "../TimeController/TimeController";


export class BoardController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
            ],
            index : 0,
        };
        this.plusHistory=this.plusHistory.bind(this);
        this.minusHistory=this.minusHistory.bind(this);
        this.initGame=this.initGame.bind(this);
    }

    plusHistory() {
        if (this.state.index < this.state.history.length - 1) {
            this.setState({ index : this.state.index + 1});
        }
    }
    minusHistory() {
        if (this.state.index > 0) {
            this.setState({ index : this.state.index - 1});
        }
    }

    initGame() {

    }

    render(){
        return (
            <div className='BorderController-all height-all'>
                <div className='distance-boardController-elements BoardController-time'>
                    <TimeController initCallback={this.initGame}/>
                    </div>
                <div className='flex-board-center'>
                    <div className='justify-center margin-board'>
                        <Board
                        fen = {this.state.history[this.state.index]}
                        />
                    </div>
                    <div className='justify-center margin-board'>
                        <button className='BoardController-button' onClick={this.minusHistory}> Previous </button>
                        <button className='BoardController-button' onClick={this.plusHistory}> Next </button>
                    </div>
                </div>
                <div className='height-all distance-boardController-elements BorderController-chat'>
                    <Chat />
                </div>
            </div>
        );
    }
}
