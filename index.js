
module.exports = {
  "env": {
      "browser": true,
      "node": true,
      "commonjs": true,
      "es6": true
  },
  "parser": "babel-eslint",
  "extends": ["eslint:recommended"],
  "parserOptions": {
      "ecmaVersion": 2015,
      "sourceType": "module",
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "experimentalDecorators": true, // @ 装饰
        "jsx": true
      }
  },
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
      "array-bracket-spacing": ["error"],
      "arrow-body-style": ["error", "as-needed"],
      // "arrow-parens": ["error", "as-needed"],
      "arrow-spacing": ["error"],
      "block-spacing": ["error"],
      "brace-style": ["error"],
      // "camelcase": ["error", {properties: "never"}],  //某些情况 不用驼峰命名
      // "capitalized-comments": ["error"],              //注释随意  不用大小写开头
      "comma-dangle": ["error"],
      "comma-spacing": ["error"],
      "comma-style": ["error"],
      "computed-property-spacing": ["error"],
      // "curly": ["error"],  if 判断 作用域
      "dot-location": ["error", "property"],
      "dot-notation": ["error"],
      "eol-last": ["error"],
      "func-call-spacing": ["error"],
      "func-name-matching": ["error"],
      "generator-star-spacing": ["error"],
      "indent": ["error", 2, {
          "SwitchCase": 1,
          "MemberExpression": 1
      }],
      // "jsx-quotes": ["error"], // 单引号
      "key-spacing": ["error"],
      "keyword-spacing": ["error"],
      "linebreak-style": ["error"],
      // "lines-around-comment": ["error", {
      //     "beforeLineComment": true        //注释不需要空行
      // }],
      "lines-around-directive": ["error"],
      // "lines-around-comment": ["error", { "applyDefaultIgnorePatterns": false }],//注释随意,忽略注释前的空行
      // "new-cap": ["error"],
      // "newline-after-var": ["error"],  定义不用判断
      // "newline-before-return": ["error"], return 随意
      "new-parens": ["error"],
      "no-cond-assign": ["off"],
      "no-console": ["off"],
      "no-delete-var": ["off"],
      "no-extra-bind": ["error"],
      // "no-extra-parens": ["error"],// 没有多余的父级
      "no-floating-decimal": ["error"],
      // "no-lonely-if": ["error"],
      "no-multiple-empty-lines": ["error", {
          "max": 1,
          "maxBOF": 0,
          "maxEOF": 0
      }],
      "no-multi-spaces": ["error"],
      "no-redeclare": ["error"],
      "no-trailing-spaces": ["error"],
      "no-unused-vars": ["error", { "args": "none"}],//arguments和...props 允许定义不用
      "no-undef-init": ["error"],
      "no-useless-computed-key": ["error"],
      "no-useless-rename": ["error"],
      "no-useless-return": ["error"],
      "no-var": ["error"],
      "no-whitespace-before-property": ["error"],
      // "object-curly-newline": ["error"],
      "object-curly-spacing": ["error", 'always'],
      "object-shorthand": ["error"],
      "operator-assignment": ["error"],
      "one-var": [2, { var: "always"}],// 允许const 连续定义
      "one-var-declaration-per-line": ["error"],
      "padded-blocks": ["error", "never"],
      "prefer-arrow-callback": ["error"],
      "prefer-spread": ["error"],
      "prefer-template": ["error"],
      "quotes": ["error", "single"],
      "quote-props": ["error", "as-needed"],
      "rest-spread-spacing": ["error"],
      "react/jsx-uses-react": ["error"],   //react插件配置
      "react/jsx-uses-vars": ["error"],    //react插件配置
      "semi": ["error", "never"],
      "space-before-blocks": ["error"],
      "space-before-function-paren": ["error", "never"],
      "space-in-parens": ["error", "never"],
      "space-infix-ops": ["error"],
      "space-unary-ops": ["error", {
          "words": true,
          "nonwords": false
      }],
      // "spaced-comment": ["error"],
      "template-curly-spacing": ["error"],
      "yield-star-spacing": ["error"],
      "yoda": ["error"]
  }
};
