# 一.项目运行

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
# 二.代码文件结构
## 从上到下：
- node_modules: node包；
- public: 公共文件；
- src: 项目源代码：
   - assets: 静态资源文件：
     - css: 样式文件；
       - normalize.css: 样式初始化文件；
       - base.css: 自定义初始化样式文件；
     - img: 图片文件；
   - common: 一些公共的文件：
     - const.js: 常量配置；
     - utils.js: 公共的方法；
     - mixin.js: 混入相关的文件；  
   - components: 公共组件：
     - common: <font color="red">组件库：可以在多个项目中共用;</font> 
     - content: <font color="red">当前项目通用的组件：可以在当前多个页面(view)中共用；</font>
   - network: 网络请求相关的文件；  
   - router: 路由相关的文件；
   - store: vuex相关的文件；
   - views: 页面保存的文件夹；
   - App.vue: 项目主页；
   - main.js: 项目初始化文件； 
   
