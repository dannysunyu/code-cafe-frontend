module.exports = {
  extends: ['airbnb'],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react-hooks',
    'react-refresh', // 之前用的插件也加进来
  ],
  rules: {
    // Airbnb 默认规则基础上做调整

    // React 17+ 不需要显式 import React
    'react/react-in-jsx-scope': 'off',

    // 你之前的 no-unused-vars 规则
    'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

    // react-refresh 插件规则
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    // react-hooks 推荐规则通常用 extends plugin:react-hooks/recommended，但这里手动写示例
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // 你可以在这里添加更多自定义规则
    'no-console': 'off',
  },
};
