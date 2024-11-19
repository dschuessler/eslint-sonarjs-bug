import sonarjs from 'eslint-plugin-sonarjs';

export default [
  {
    plugins: {
      sonarjs
    }
  },
  sonarjs.configs.recommended,
];
