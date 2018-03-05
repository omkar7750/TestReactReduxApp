import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate} from '../actions/filters.js'


let TextFilter = (props) => {
    return <div>
            <input type = 'text' value={props.filters.text} onChange = {(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }} />

            <select value={props.filters.sortBy} onChange = {(e) => {
                console.log('sort by : ', e.target.value);
                props.dispatch(e.target.value == 'date'? sortByDate(): sortByAmount())
            }}>
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
            </select>
        </div>
}

let mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(TextFilter);