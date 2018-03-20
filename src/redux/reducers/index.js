import { combineReducers } from 'redux';
import notereducer from './notereducer';

const app = combineReducers({
    notes: notereducer
});

export default app