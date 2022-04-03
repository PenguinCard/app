### webpack + typescript + react

#### npm install(development) 

> ##### for css and style
> ```shell
> npm i -D css-loader
> npm i -D style-loader
> ```
> 
> ##### for typescript
> ```shell
> npm i -D ts-loader
> npm i -D typescript
> ```
> 
> ##### for webpack
> ```shell
> npm i -D webpack
> npm i -D webpack-cli
> ```
> 
> ##### dev-server
> ```shell
> npm i -D webpack-dev-server
> npm i -D html-webpack-plugin
> ```
#### npm install
> ##### for bootstrap
> ```shell
> npm i @popperjs/core
> npm i bootstrap
> npm i bootstrap-icons
> ```
> 
> ##### for react
> ```shell 
> npm i @types/react 
> npm i @types/react-dom
> ```
> 
> ##### for react-router
> ```shell
> npm i react-router-dom
> ```
> 
> ##### for redux
> ```shell
> npm i react-redux
> npm i @reduxjs/toolkit
> ```
> 
> ##### for axios
> ```shell
> npm i @types/axios 
> ```

<br>

#### typescript setting

##### tsconfig.json

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
```
<br>

#### webpack setting
##### webpack.config.js
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = {
    mode: "development",            // 모드 production(default), development, none
    entry: "./src/index.tsx",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            fs: false
        }
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: './dist',
        port: 9000,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}

module.exports = webpackConfig
```

### Execute Webpack
```shell
npx webpack
```

### Execute webpack-dev-server
```shell
npx webpack-dev-server
```

<br>

### source
- https://webpack.kr/guides/typescript/

