import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr } from '../test/testUtils'
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = () => {
    return shallow(<App />)
}

test('renders learn react link', () => {
  
});
