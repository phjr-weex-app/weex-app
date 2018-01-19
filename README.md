

#<h1 style="text-align:center;">phjr-weex-app</h1>

## weex 项目

## 一 、 目录
<ul>
<li><a href="#weexxiangguandizhi">weex相关地址</a>
	<ul>
		<li><a href="#weexguanwang">weex官网</a></li>
		<li><a href="#weexguanwanggit">weexpack git地址</a></li>
		<li><a href="#chajianshichang">插件市场</a></li>
	</ul>
</li>
<li><a href="#xiugaipeizhiwenjian">修改配置文件 webpack.config.js</a></li>
<li><a href="#peizhisrclujing">配置src路径简写为@</a></li>
<li><a href="#routermingmingbiaozhun">router 命名标准</a></li>
</ul>

### <h3 id="weexxiangguandizhi">二、weex相关地址</h3>
> <a href="http://weex.apache.org/cn/" id="weexguanwang">weex官网</a>

> <a href="<a href="http://weex.apache.org/cn/" id="weexguanwanggit">weexpack git地址</a>

> <a href="https://market.dotwe.org/" id="chajianshichang">插件市场</a>

###  <h3 id="xiugaipeizhiwenjian">三 、修改配置文件webpack.config.js</h3>


+ <p style="color:red; display:inline-block;"> webpack.config.js</p>

1、 修改webpack.config.js

默认为

```
const entry = {};
const weexEntry = {};
```

如果添加了入口文件，如下面代码

```
const entry = {
    'index': pathTo.resolve('src', 'entry.js')
};
const weexEntry = {
    'index': pathTo.resolve('src', 'entry.js')
};
```
需要将walk()；注释掉

```
function walk(dir) {
  dir = dir || '.';
  const directory = pathTo.join(__dirname, 'src', dir);
  fs.readdirSync(directory)
    .forEach((file) => {
      const fullpath = pathTo.join(directory, file);
      const stat = fs.statSync(fullpath);
      const extname = pathTo.extname(fullpath);
      if (stat.isFile() && extname === '.vue' || extname === '.we') {
        if (!fileType) {
          fileType = extname;
        }
        if (fileType && extname !== fileType) {
          console.log('Error: This is not a good practice when you use ".we" and ".vue" togither!');
        }
        const name = pathTo.join(dir, pathTo.basename(file, extname));
        if (extname === '.vue') {
          const entryFile = pathTo.join(vueWebTemp, dir, pathTo.basename(file, extname) + '.js');
          fs.outputFileSync(pathTo.join(entryFile), getEntryFileContent(entryFile, fullpath));
          
          entry[name] = pathTo.join(__dirname, entryFile) + '?entry=true';
        } 
        weexEntry[name] = fullpath + '?entry=true';
      } else if (stat.isDirectory() && file !== 'build' && file !== 'include') {
        const subdir = pathTo.join(dir, file);
        walk(subdir);
      }
    });
}
```

### <h3 id="srcmulujiegou">四、src目录结构（暂时设置的，如果看到好的项目可以修改，暂时参考的官网<a href="">weex-hackernews</a>案例）</h3>
<ul>
<li><h5>assets</h5>
<p>静态文件</p>
</li>
<li><h5>components</h5>
<p>组件</p>
</li>
<li>
<h5>filters</h5>
<p>过滤器</p>
</li>
<li>
<h5>mixins</h5>
<p>混合机制</p>
<p>
在entry.js中 通过添加

<strong style="color:red;">Vue.mixin(mixins)</strong>

来注册mixin中的方法，实现在全局调用
</p>
</li>
<li><h5>router</h5>
<p>路由配置</p>
</li>
<li><h5>store</h5></li>
<li><h5>view</h5></li>
<li>
<h5>entry.js</h5>
<p>入口文件</p>
</li>
<li><h5>index.vue</h5>
<p>挂载根实例root文件</p>
</li>
</ul>

###  <h3 id="peizhisrclujing">五 、配置src路径简写为@</h3>
在webpack.config.js中添加如下代码

```
function resolve (dir) {

    return pathTo.join(__dirname, dir)
    
}

webConfig.resolve && weexConfig.resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
      alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
```

添加后，entry.js中

```
import store from '../src/store/index';
```

就可以写为

```
import store from '@/store/index';
```
此后，文件中的'../src'都可以写成'@';

###<h3 id="routermingmingbiaozhun">六 、router 命名标准</h3>

router中，import后重命名需要加"<span style="color:red;">View</span>"如<span style="color:red;">IndexView</span>,驼峰命名方式，配置路由时，name 必填（不填不会保存，但是不方便浏览器通过vue插件debug）

<span style="color:red;">*下面的路由仅供参考，有更好的方式再改</span>

```
import RegisterView   from '@/views/register/register.vue';
import IndexView      from '@/views/index/index.vue';


export default new Router({
  routes: [
    {
      path: '/',
        name: 'IndexView',
        component: IndexView
    },
    {
      path:'/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path:'/test',
      name: 'TestView',
      component: TestView
    },
      {
          path:'/register',
          name: 'RegisterView',
          component: RegisterView
      }
  ]
})
```
