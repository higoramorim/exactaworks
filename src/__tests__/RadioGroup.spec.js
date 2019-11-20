import React from 'react';
import { create } from 'react-test-renderer';
import RadioGroup from '../components/RadioGroup';

describe('RadioGroup component', () => {
  test('Matches the provided label', () => {
    const component = create(<RadioGroup label="Gender"/>);
    const instance = component.root;

    const { children } = instance.findByType('div').props;

    expect(children[0].props.value).toEqual('Gender');
  });

  test('Generate radio elements if "items" array is provided', () => {
    const items = [{}];
    const component = create(<RadioGroup label="Label" items={items}/>);
    const instance = component.root;
    
    const container = instance.findByType('div');
    
    expect(container.props.children.length).toBeGreaterThan(1);
  });

  test('Name param is provided to child components', () => {
    const items = [{}];
    const component = create(<RadioGroup name="gender" items={items}/>);
    const instance = component.root;
    
    const radio = instance.findByType('div').props.children[1][0];

    expect(radio.props.name).toEqual('gender');
  });
});