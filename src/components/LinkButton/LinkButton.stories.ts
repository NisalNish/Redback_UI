import LinkButton from './LinkButton';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeColor, ThemeElementAppearance } from '../../types.ts';
import { themeColors } from '../../types.ts';

const meta = {
	title: 'Components/LinkButton',
	component: LinkButton,
	argTypes: {
		label: { disable: true },
		color: { control: 'select', options: Object.keys(themeColors) },
		target: { control: 'radio', options: ['_blank', undefined] }
	},
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;


const defaultProps = {
	href: '#',
	color: 'primary' as ThemeColor,
	appearance: 'solid' as ThemeElementAppearance
};

const disableControls = {
	parameters: {
		controls: {
			disable: true
		},
		actions: {
			disable: true
		},
	}
};

export const Demo: Story = {
	args: {
		label: 'LinkButton',
		...defaultProps
	},
	tags: ['excludeFromSidebar']
};

export const Default: Story = {
	args: {
		...defaultProps,
		label: 'Default LinkButton',
	},
	...disableControls
};