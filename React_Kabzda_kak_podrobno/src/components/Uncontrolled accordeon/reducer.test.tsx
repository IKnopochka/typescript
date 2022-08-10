import {reducer, StateType} from "./reducer";

test('collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})
    //expectation
    //expect(newState.collapsed).toBe(true);

    expect(()=> {
        reducer(state, {type: "TOGED"})
    }).toThrowError()
})