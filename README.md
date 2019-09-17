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

