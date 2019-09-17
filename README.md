# the eslint config file for csx
## Feature
  simple to use && easy to use in vscode with the plugins named eslint、prettier-Code formatter (简单易用，尤其是在vscode中配合eslint、prettier-Code formatter两个插件使用)
## Usage
  step 1
  ```
    cd your-project 
    eslint --init
    npm install eslint-config-yhcsx --save-dev 
        or 
    npm i eslint-config-yhcsx -D
  ```
  step 2

  change .eslintrc.js which is created in the 'step 1', which is the config file of eslint, just like below:
  ```
    module.exports = {
        "extends": "yhcsx", // 'yhcsx' is simplify same as 'eslint-config-yhcsx'
    }
  ```

## Tips
  used in the my team only, but if you have some problem, please issue me in the [github](https://github.com/webhaoying/npmCsxEslintConfig)
## Q&A
  1、

  - q: 为什么我操作完成之后，eslint没有生效？

  - a: 很大概率上，安装完了之后，编辑器并不会生效，此时可以重启编辑器，即可生效
  ```
Q: Why does eslint not take effect when I do all the steps in the `Usage`?

  A: There is a high probability that after installation, the editor will not take effect. You can restart the editor at this time.
  ```

