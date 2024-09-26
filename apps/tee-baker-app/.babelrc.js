module.exports = function (api) {
  api.cache(true);

  if (process.env.NX_TASK_TARGET_TARGET === 'build' || process.env.NX_TASK_TARGET_TARGET.includes('storybook')) {
    return {
      presets: [
        [
          '@nx/react/babel',
          {
            runtime: 'automatic',
          },
        ],
      ],
    };
  }

  return {
    presets: [['module:@react-native/babel-preset', { useTransformReactJSX: true }]],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@/assets': './src/app/assets',
            '@/components': './src/app/components',
            '@/icons': './src/app/icons',
            '@/navigation': './src/app/navigation',
            '@/screens': './src/app/screens',
            '@/services': './src/app/services',
            '@/styles': './src/app/styles',
            '@/types': './src/app/types',
            '@/utils': './src/app/utils',
          },
        },
      ],
      ['module:react-native-dotenv'],
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
