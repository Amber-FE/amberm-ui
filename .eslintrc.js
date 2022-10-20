module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 处理 defineProps 报错
    'vue/setup-compiler-macros': true
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // 防止prettier与eslint冲突
    'prettier/prettier': 'error',
    // eslint-plugin-import es module导入eslint规则配置，旨在规避拼写错误问题
    'import/no-unresolved': 0,
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'always'
      }
    ],
    // 使用导出的名称作为默认属性（主要用作导出模块内部有 default， 和直接导出两种并存情况下，会出现default.proptry 这种问题从在的情况）
    'import/no-named-as-default-member': 0,
    'import/order': ['error', { 'newlines-between': 'always' }],
    // 导入确保是否在首位
    'import/first': 0,
    // 如果文件只有一个导出，是否开启强制默认导出
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [],
        optionalDependencies: false
      }
    ],
    /**
     * 关于typescript语法校验
     * 参考文档： https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
     */
    '@typescript-eslint/no-extra-semi': 0,
    // 是否禁止使用any类型
    '@typescript-eslint/no-explicit-any': 0,
    // 是否对于null情况做非空断言
    '@typescript-eslint/no-non-null-assertion': 0,
    // 是否对返回值类型进行定义校验
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    // 结合eslint 'no-use-before-define': 'off'，不然会有报错，需要关闭eslint这个校验，主要是增加了对于type\interface\enum
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { overrides: { constructors: 'no-public' } }
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase']
      }
    ],
    // 不允许使用 var
    'no-var': 'error',
    // 如果没有修改值，有些用const定义
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    // 关于vue3 的一些语法糖校验
    // 超过 4 个属性换行展示
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 4
      }
    ],
    // setup 语法糖校验
    'vue/script-setup-uses-vars': 'error',
    // 关于箭头函数
    'vue/arrow-spacing': 'error',
    'vue/html-indent': 'off'
  }
}
