import { type StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from "vite";
import { ServerOptions } from "vite";

const isProduction = process.env.NODE_ENV === 'production';

const config: StorybookConfig = {
    core: {
        builder: '@storybook/builder-vite',
    },
    env: (config) => ({
        ...config,
        STORYBOOK_BASE_URL: isProduction ? 'https://redback-operations.github.io/redback-ui' : 'http://localhost:6006',
    }),
    async viteFinal(config, { configType }) {
        // Ensure that config.optimizeDeps is defined
        config.optimizeDeps = config.optimizeDeps || {};

        // Ensure that config.optimizeDeps.include is an array
        config.optimizeDeps.include = config.optimizeDeps.include || [];

        // Add 'polished' to the array
        config.optimizeDeps.include.push('polished');

        // Ensure config.server is defined before merging
        config.server = config.server || {} as ServerOptions;

        // Production-specific configuration
        if (configType === 'PRODUCTION') {
            config.server = mergeConfig(config.server, {
                mimeTypes: {
                    'ts': 'text/javascript'
                }
            });
        }

        return config;
    },
    staticDirs: ['../public', { from: '../src/themes', to: 'themes' }],
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)', '../docs/**/*.mdx'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-docs',
        'storybook-dark-mode'
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {}
    },
    docs: {
        autodocs: true,
        defaultName: 'Docs',
    },
};

export default config;
