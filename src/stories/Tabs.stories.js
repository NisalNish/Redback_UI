import React from 'react';
import Tabs from '../components/Tabs/TabbedContent';

export default {
  title: 'Example/TabbedContent',
  component: Tabs,
};

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: 'Tab 1', content: 'Content 1' },
    { label: 'Tab 2', content: 'Content 2' },
    { label: 'Tab 3', content: 'Content 3' },
  ],
};
