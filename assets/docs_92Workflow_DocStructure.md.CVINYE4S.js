import{_ as a,o as i,c as n,ae as e}from"./chunks/framework.D6sYw4vw.js";const t="/ai4energy.github.io/assets/image/92Workflow/DocStructure-16-48-02.png",l="/ai4energy.github.io/assets/image/92Workflow/DocStructure-16-59-55.png",g=JSON.parse('{"title":"文档（docs）编写方法","description":"","frontmatter":{},"headers":[],"relativePath":"docs/92Workflow/DocStructure.md","filePath":"docs/92Workflow/DocStructure.md","lastUpdated":1773485796000}'),p={name:"docs/92Workflow/DocStructure.md"};function o(r,s,c,d,h,k){return i(),n("div",null,[...s[0]||(s[0]=[e(`<h1 id="文档-docs-编写方法" tabindex="-1">文档（docs）编写方法 <a class="header-anchor" href="#文档-docs-编写方法" aria-label="Permalink to &quot;文档（docs）编写方法&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><pre><code>Contents：文档编写方法介绍

Contributor: YJY

Email:522432938@qq.com

如有错误，请批评指正。
</code></pre><h2 id="文档结构" tabindex="-1">文档结构 <a class="header-anchor" href="#文档结构" aria-label="Permalink to &quot;文档结构&quot;">​</a></h2><p>在包的根目录下，都有一个<code>/docs</code>文件夹，里面就是文档的所有内容。</p><p><code>/docs</code>结构如下：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── index.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── components</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├──MTKMPC.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   └──...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── MyApp.jl</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── build</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── index.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── .gitignore</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── Project.toml</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└── make.jl</span></span></code></pre></div><p><strong>/src</strong>里包含了文档的内容，即很多markdown文件。对应关系如下：</p><p><img src="`+t+'" alt="图 1"></p><p><strong>.gitignore</strong>里的内容是在git提交时忽略的内容。例如<code>/build</code>的内容就会全部忽略。</p><p><strong>Project.toml</strong>是julia的环境文件，说明了docs环境中需要用到的包。</p><p><strong>make.jl</strong>是生成的html页面的主文件。运行make.jl，则生成/build文件夹，在默认浏览器中打开<code>/build/index.html</code>就能看到文档，和网页版的一模一样。本质上也是一样的，Github部署也是部署的它。这是本地版，github提交时，会自动运行make.jl生成然后部署。所以<code>/build</code>不用上传。</p><h2 id="编写方法" tabindex="-1">编写方法 <a class="header-anchor" href="#编写方法" aria-label="Permalink to &quot;编写方法&quot;">​</a></h2><p>新添加文档只需要两步操作：</p><ol><li>创建新的文档(.md文件)</li><li>在make.jl中链接文档路径</li></ol><p>make.jl中的page链接了全部文档。 <img src="'+l+`" alt="图 2"></p><p>图中的&quot;Modeling&quot;是子目录，在<code>/src</code>里可看到对应文件夹。</p><p>如果没有在make.jl中链接，就不会在html中显示。<strong>没链接等于没写🤣🤣🤣</strong>。</p><p>::: note</p><pre><code>某些库会设计自动链接，如果自动链接了就不需要手动添加了。
</code></pre></div>`,2)])])}const u=a(p,[["render",o]]);export{g as __pageData,u as default};
