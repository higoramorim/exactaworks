import React from 'react';
import { create } from 'react-test-renderer';
import Label from '../components/Label';

describe('Label component', () => {
  test('Matches the provided value property', () => {
    const component = create(<Label value="Username"/>);
    const instance = component.root;

    const label = instance.findByType('label');

    expect(label.props.children.indexOf('Username')).not.toBe(-1);
  });

  test('Includes template when used as a block component', () => {
    const component = create(<Label>Password</Label>);
    const instance = component.root;

    const label = instance.findByType('label');

    expect(label.props.children.indexOf('Password')).not.toBe(-1);
  });

  test('Includes for attribute if the "inputId" property is provided', () => {
    const component = create(<Label inputId="nickname"/>);
    const instance = component.root;

    const label = instance.findByType('label');

    expect(label.props.htmlFor).toBe('nickname');
  });
});