import React from 'react';
import { create, act } from 'react-test-renderer';
import Form from '../components/Form';

describe('Form component', () => {
  test('Matches the provided title property', () => {
    const component = create(<Form title="New Account"/>);
    const instance = component.root;

    const h1 = instance.findByType('h1');

    expect(h1.props.children).toEqual('New Account');
  });

  test('Includes template when used as a block component', () => {
    const component = create(<Form>Content</Form>);
    const instance = component.root;

    const container = instance.findByType('div');

    expect(container.props.children[1]).toEqual('Content');
  });

  test('Triggers the onSubmit callback', () => {
    const onSubmit = jest.fn();
    const evt = { preventDefault() {} };

    const component = create(<Form onSubmit={onSubmit}/>);
    const form = component.root.findByType('form');

    act(() => form.props.onSubmit(evt));

    expect(onSubmit).toHaveBeenCalled();
  });
});