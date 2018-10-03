/**
 * @jest-environment node
 */

import React from 'react';
import { renderToString } from 'react-dom/server';

import PublicNavigation from './PublicNavigation';

jest.mock('./items', () => ({ getItems: jest.fn(), getButtonItem: jest.fn() }));

describe('PublicNavigation', () => {
  it('server side renders', () => {
    expect(() => {
      renderToString(<PublicNavigation />);
    }).not.toThrow();
  });
});