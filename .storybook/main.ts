import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../shared/stories/**/*.mdx',
    '../**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: ['@storybook/addon-docs'],
  framework: '@storybook/nextjs',
  staticDirs: ['../public'],

  webpackFinal: async (config) => {
    // SVG를 React 컴포넌트로 변환하는 Webpack 설정
    // next.config.ts와 동일한 설정 적용
    config.module = config.module || { rules: [] };
    config.module.rules = config.module.rules || [];

    // 기존 SVG 규칙 제거 (있다면)
    config.module.rules = config.module.rules.filter(
      (rule) =>
        !(typeof rule === 'object' && rule?.test?.toString().includes('svg')),
    );

    // SVG를 React 컴포넌트로 처리하는 규칙 추가
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: 24,
            typescript: true,
            removeDimensions: true,
          },
        },
      ],
    });

    return config;
  },
};
export default config;
