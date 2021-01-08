import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr } from '../test/testUtils'
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = () => {
    return shallow(<App />)
}

test('App renders without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-app')
  expect(component.length).toBe(1)
});
