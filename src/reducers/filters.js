
import {getClonedObject} from '../utility/index.js';


const defaultFilterState = {
        text: '',
        sortBy: '',
        startDate: undefined,
        endDate: undefined
};

const filterReducer = (state = defaultFilterState, action) => {
    switch(action.type){
        case 'TEXT_FILTER': {
            var obj = getClonedObject(state);
            obj.text = action.text;
            return obj;
        }
            
            
        case 'SORT_BY_AMOUNT': {
            var obj = getClonedObject(state);
            obj.sortBy= 'amount';
            return obj;
        }
            

        case 'SORT_BY_DATE': {
            var obj = getClonedObject(state);
            obj.sortBy= 'date';
            return obj;
        }
            
        case 'SET_START_DATE': {
            var obj = getClonedObject(state);
            obj.startDate= action.startDate;
            return obj;
        }

        case 'SET_END_DATE': {
            var obj = getClonedObject(state);
            obj.endDate= action.endDate;
            return obj;
        }

        default:
            return state;
    }
     
}

export default filterReducer;