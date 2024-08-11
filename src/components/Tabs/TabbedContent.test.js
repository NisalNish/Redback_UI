import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tabs from './TabbedContent';

test('renders tabs and allows navigation', () => {
  const tabs = [
    { label: 'Tab 1', content: 'Content 1' },
    { label: 'Tab 2', content: 'Content 2' },
    { label: 'Tab 3', content: 'Content 3' },
  ];

  const { getByText } = render(<Tabs tabs={tabs} />);

  // Verify initial state
  expect(getByText('Content 1')).toBeVisible();
  expect(getByText('Content 2')).not.toBeVisible();
  expect(getByText('Content 3')).not.toBeVisible();

  // Click on the second tab
  fireEvent.click(getByText('Tab 2'));
  expect(getByText('Content 2')).toBeVisible();
  expect(getByText('Content 1')).not.toBeVisible();
  expect(getByText('Content 3')).not.toBeVisible();
});
