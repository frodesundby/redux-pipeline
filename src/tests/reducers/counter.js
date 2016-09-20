import {expect} from 'chai'
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../../js/constants/ActionTypes'
import reducer from '../../js/store/reducers/counter'

describe('Counter Reducer', () => {
    it('Should handle INCREMENT_COUNTER', () => {
        const initialState = 0
        const newState = reducer(initialState, {type: 'INCREMENT_COUNTER'})
        expect(newState).to.eql(1)
    })
    it('Should handle DECREMENT_COUNTER', () => {
        const initialState = 0
        const newState = reducer(initialState, {type: 'DECREMENT_COUNTER'})
        expect(newState).to.eql(-1)
    })
})
