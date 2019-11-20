import React from 'react';
import { create } from 'react-test-renderer';
import Tabs from '../components/Tabs';

describe('Tabs component', () => {
  test('Generate items if "items" array is provided', () => {
    const items = [{}];
    const component = create(<Tabs items={items}/>);
    const instance = component.root;
    
    const tabs = instance.findByType('ul');

    expect(tabs.props.children.length).toEqual(1);
  });

  test('Includes tab--active class if the "active" property is provided', () => {
    const items = [{ active: true }];
    const component = create(<Tabs items={items}/>);
    const { children } = component.root.findByType('ul').props;

    expect(children[0].props.className.includes('tab--active')).toBe(true);
  });

  test('Includes tab--completed class if the "completed" property is provided', () => {
    const items = [{ completed: true }];
    const component = create(<Tabs items={items}/>);
    const { children } = component.root.findByType('ul').props;

    expect(children[0].props.className.includes('tab--completed')).toBe(true);
  });

  test('Triggers the onClick callback', () => {
    const onClick = jest.fn();
    const items = [{}];
    const component = create(<Tabs items={items} onClick={onClick}/>);
    const { children } = component.root.findByType('ul').props;

    children[0].props.onClick();

    expect(onClick).toHaveBeenCalled();
  });
});