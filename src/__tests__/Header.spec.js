import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('Header component', () => {
  test('Generate links if "items" array is provided', () => {
    const items = [{ path: '/' }, { path: '/' }];
    const component = create(
      <div>
        <Router>
          <Header items={items}/>
        </Router>
      </div>
    );
    const instance = component.root;

    const nav = instance.findByType('nav');

    expect(nav.props.children.length).toEqual(2);
  });
});