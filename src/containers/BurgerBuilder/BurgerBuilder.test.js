import {BurgerBuilder} from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import React from 'react';
import {configure, shallow}from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} ingredients={{salad: 1}}/>); 
  });

  it('should render <BuildControls/> when recieving ingredients', () => {
    expect(wrapper.find(BuildControls));
  });
});
