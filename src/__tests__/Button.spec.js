import React from 'react';
import { create } from 'react-test-renderer';
import Button from '../components/Button';

describe('Button component', () => {
  test('Matches the provided label', () => {
    const component = create(<Button label="Checkout"/>);
    const instance = component.root;

    const button = instance.findByType('button');

    expect(button.props.children.indexOf('Checkout')).not.toBe(-1);
  });

  test('Includes btn--success class if the "success" property is provided', () => {
    const component = create(<Button success/>);
    const instance = component.root;

    const button = instance.findByType('button');

    expect(button.props.className.includes('btn--success')).toBe(true);
  });

  test('Includes disabled attribute if the "disabled" property is provided', () => {
    const component = create(<Button disabled/>);
    const instance = component.root;

    const button = instance.findByType('button');

    expect(button.props.disabled).toBeTruthy();
  });

  test('Includes type attribute if the "type" property is provided', () => {
    const component = create(<Button type="submit"/>);
    const instance = component.root;

    const button = instance.findByType('button');

    expect(button.props.type).toBeTruthy();
  });

  test('Displays a spinner component if the "loading" property is provided', () => {
    const component = create(<Button loading/>);
    const instance = component.root;

    const button = instance.findByType('button');

    expect(button.props.children[0]).toBeInstanceOf(Object);
  });

  test('Triggers the onClick callback', () => {
    const onClick = jest.fn();
    const component = create(<Button onClick={onClick}/>);
    const button = component.root.findByType('button');

    button.props.onClick();
    /* experiment with ReactTestUtils.Simulate.click() */

    expect(onClick).toHaveBeenCalled();
  });
});