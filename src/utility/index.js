import _ from 'lodash';


export let getClonedObject = obj => _.reduce(obj, (r, val, k) => { 
    r[k] = val; 
    return r;
}, {});




