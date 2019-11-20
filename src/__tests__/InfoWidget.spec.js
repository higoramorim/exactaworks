import React from 'react';
import { create } from 'react-test-renderer';
import InfoWidget from '../components/InfoWidget';

describe('InfoWidget component', () => {
  test('Includes info-widget--inline class if the "inline" property is provided', () => {
    const component = create(<InfoWidget inline/>);
    const instance = component.root;

    const widget = instance.findAllByType('div')[1];

    expect(widget.props.className.includes('info-widget--inline')).toBe(true);
  });

  test('Matches the provided label property', () => {
    const component = create(<InfoWidget label="Name"/>);
    const instance = component.root;

    const label = instance.findByType('span');

    expect(label.props.children.indexOf('Name')).not.toBe(-1);
  });

  test('Matches the provided label property', () => {
    const component = create(<InfoWidget content="Content"/>);
    const instance = component.root;

    const content = instance.findByType('p');

    expect(content.props.children.indexOf('Content')).not.toBe(-1);
  });

  /* TODO: Test details property */
});