import React from 'react';
import { create } from 'react-test-renderer';
import InfoSection from '../components/InfoSection';

describe('InfoSection component', () => {
  test('Generate widgets if "widgets" array is provided', () => {
    const widgets = [{}];
    const component = create(<InfoSection widgets={widgets}/>);
    const instance = component.root;
    
    const container = instance.findByType('div');

    expect(container.props.children.length).toEqual(1);
  });

  test('Includes template when used as a block component', () => {
    const component = create(<InfoSection>Content</InfoSection>);
    const instance = component.root;

    const container = instance.findByType('div');

    expect(container.props.children.indexOf('Content')).not.toBe(-1);
  });
});