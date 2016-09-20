import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import App from '../../js/components/App/App'

function setup() {
    const props = {
        addTodo: expect.createSpy()
    }

    const enzymeWrapper = shallow(<App {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Header', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup()
            expect(enzymeWrapper.find('h1').text()).toBe('Hallo igjen')

        })

    })
})