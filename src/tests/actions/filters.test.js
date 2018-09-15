import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Should generate the text filter object with text value', () => {
    const action = setTextFilter('input');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'input'
    });
});

test('Should generate the text filter object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('Should generate the action object for sort by date', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'});
});

test('Should generate the action object for sort by amount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT'});
});