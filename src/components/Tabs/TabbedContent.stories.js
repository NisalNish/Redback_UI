// src/components/Tab/TabbedContent.stories.js
import React from 'react';
import Tabs from './TabbedContent';

export default {
  title: 'Components/Tabs', // This defines where the component will appear in Storybook
  component: Tabs,
};

const tabsData = [
  { label: 'Tab 1', content: 'This is content for Tab 1' },
  { label: 'Tab 2', content: 'This is content for Tab 2' },
  { label: 'Tab 3', content: 'This is content for Tab 3' },
];

export const Default = () => <Tabs tabs={tabsData} />;
