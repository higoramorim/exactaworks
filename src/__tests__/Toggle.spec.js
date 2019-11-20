import React from 'react';
import { create, act } from 'react-test-renderer';
import Toggle from '../components/Toggle';

describe('Toggle component', () => {
  test('Includes type attribute if the "type" property is provided', () => {
    const component = create(<Toggle type="radio"/>);
    const instance = component.root;

    const toggle = instance.findByType('input');

    expect(toggle.props.type).toBe('radio');
  });

  test('Includes value attribute if the "value" property is provided', () => {
    const component = create(<Toggle value="M"/>);
    const instance = component.root;

    const toggle = instance.findByType('input');

    expect(toggle.props.value).toEqual('M');
  });

  test('Includes name attribute if the "name" property is provided', () => {
    const component = create(<Toggle name="gender"/>);
    const instance = component.root;

    const toggle = instance.findByType('input');

    expect(toggle.props.name).toBeDefined();
  });

  test('Includes disabled attribute if the "disabled" property is provided', () => {
    const component = create(<Toggle disabled/>);
    const instance = component.root;

    const toggle = instance.findByType('input');

    expect(toggle.props.disabled).toBeDefined();
  });

  test('Checks the element if "checked" property is provided', () => {
    const component = create(<Toggle checked/>);
    const instance = component.root;

    const toggle = instance.findByType('input');

    expect(toggle.props.checked).toBe(true);
  });

  test('Matches the provided label', () => {
    const component = create(<Toggle label="Accept"/>);
    const instance = component.root;

    const span = instance.findByType('span');

    expect(span.props.children.indexOf('Accept')).not.toBe(-1);
  });

  test('Triggers the onChange callback', () => {
    const onChange = jest.fn();
    const component = create(<Toggle onChange={onChange}/>);
    const button = component.root.findByType('input');

    act(() => button.props.onChange());

    expect(onChange).toHaveBeenCalled();
  });
});