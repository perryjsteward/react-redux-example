import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actions from '../../store/actions.js';


class Counter extends Component {
    render () {
        let counterHistory = this.props.history.map((el, i)=>{
            return (
                <li 
                    onClick={() => this.props.removeResultFromHistory(i)}
                    key={i}>
                    {el}
                </li>
            );
        });


        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.incValue} />
                <CounterControl label="Decrement" clicked={this.props.decValue}  />
                <CounterControl label="Add 5" clicked={() => this.props.addValue(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.subValue(5)}  />
                <hr />
                <button onClick={this.props.addResultToHistory}>Store result</button>
                <ul>
                    {counterHistory}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter,
        history: state.history
    };
};

const mapDispatchToProps = dispatch => {
    return {
        incValue: () => dispatch(actions.incCounter()),
        decValue: () => dispatch(actions.decCounter()),
        addValue: (val) => dispatch(actions.addCounter(val)),
        subValue: (val) => dispatch(actions.subCounter(val)),
        addResultToHistory: () => dispatch(actions.addHistory()),
        removeResultFromHistory: (index) => dispatch(actions.delHistory(index)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);