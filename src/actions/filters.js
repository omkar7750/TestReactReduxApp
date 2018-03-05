
let
    setTextFilter = (text = '') => ({
        type: 'TEXT_FILTER',
        text
    }),

    sortByAmount = (amount) => ({
        type: 'SORT_BY_AMOUNT'
    }),

    sortByDate = (date) => ({
        type: 'SORT_BY_DATE'
    }),

    setStartDate = (startDate) => ({
        type: 'SET_START_DATE',
        startDate
    }),

    setEndDate = (endDate) => ({
        type: 'SET_END_DATE',
        endDate
    })

export  {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate};