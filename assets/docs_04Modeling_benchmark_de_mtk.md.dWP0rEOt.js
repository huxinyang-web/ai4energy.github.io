import{_ as a,o as n,c as p,ae as e}from"./chunks/framework.D6sYw4vw.js";const h=JSON.parse('{"title":"MTK为什么比DE慢？","description":"","frontmatter":{},"headers":[],"relativePath":"docs/04Modeling/benchmark_de_mtk.md","filePath":"docs/04Modeling/benchmark_de_mtk.md","lastUpdated":1773485796000}'),t={name:"docs/04Modeling/benchmark_de_mtk.md"};function l(i,s,c,o,r,d){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="mtk为什么比de慢" tabindex="-1">MTK为什么比DE慢？ <a class="header-anchor" href="#mtk为什么比de慢" aria-label="Permalink to &quot;MTK为什么比DE慢？&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><pre><code>Contents：代码优化

Contributor: HY

Email:1171006975@qq.com

如有错误，请批评指正。
</code></pre><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>SCIML是一个非常强大的开源社区，提供了从建模到仿真的一条龙计算工具链。</p><p>建模用<a href="https://mtk.sciml.ai/stable/" target="_blank" rel="noreferrer">ModelingToolkit.jl</a>；求解用<a href="https://diffeq.sciml.ai/dev_/" target="_blank" rel="noreferrer">DifferentialEquations.jl</a>。</p><h2 id="mtk和de计算时间对比" tabindex="-1">MTK和DE计算时间对比 <a class="header-anchor" href="#mtk和de计算时间对比" aria-label="Permalink to &quot;MTK和DE计算时间对比&quot;">​</a></h2><p>以一个简单的ODE为例：</p><p><span class="katex-display"><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mfrac><mrow><mi mathvariant="normal">∂</mi><mi>T</mi></mrow><mrow><mi mathvariant="normal">∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>p</mi><mo>∗</mo><mi>t</mi><mo>∗</mo><mi>T</mi></mrow><annotation encoding="application/x-tex">\\frac{\\partial T}{\\partial t}=p*t*T </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:1.37144em;"></span><span class="strut bottom" style="height:2.05744em;vertical-align:-0.686em;"></span><span class="base displaystyle textstyle uncramped"><span class="mord reset-textstyle displaystyle textstyle uncramped"><span class="sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"></span><span class="mfrac"><span class="vlist"><span style="top:0.686em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle textstyle cramped"><span class="mord textstyle cramped"><span class="mord mathrm" style="margin-right:0.05556em;">∂</span><span class="mord mathit">t</span></span></span></span><span style="top:-0.22999999999999998em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle textstyle uncramped frac-line"></span></span><span style="top:-0.677em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle textstyle uncramped"><span class="mord textstyle uncramped"><span class="mord mathrm" style="margin-right:0.05556em;">∂</span><span class="mord mathit" style="margin-right:0.13889em;">T</span></span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"></span></span><span class="mrel">=</span><span class="mord mathit">p</span><span class="mbin">∗</span><span class="mord mathit">t</span><span class="mbin">∗</span><span class="mord mathit" style="margin-right:0.13889em;">T</span></span></span></span></span></p><p>一个ODE算的太快了，体现不出来差距，我们重复这个方程n次，组成一个n维的ODEs。</p> \\frac{\\partial T(i)}{\\partial t}=p*t*T(i),i∈(1,2,3...,n) <p>然后我们用MTK方法和DE方法分别建模：</p><h3 id="de方法" tabindex="-1">DE方法 <a class="header-anchor" href="#de方法" aria-label="Permalink to &quot;DE方法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>using ModelingToolkit, DifferentialEquations</span></span>
<span class="line"><span>n=10000</span></span>
<span class="line"><span>#DE</span></span>
<span class="line"><span>function de_test!(dT, T, p, t)</span></span>
<span class="line"><span>    n=length(T)</span></span>
<span class="line"><span>    for i in 1:n</span></span>
<span class="line"><span>        dT[i]=p[i]*t*T[i]</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    nothing</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span>u0 = [1.0 for i in 1:n]</span></span>
<span class="line"><span>p = [1e-3 for i in 1:n]</span></span>
<span class="line"><span>prob_de = ODEProblem(de_test!, u0, (0, 100), p, saveat=1)</span></span>
<span class="line"><span>@time sol_de=solve(prob_de);</span></span></code></pre></div><h3 id="mtk方法" tabindex="-1">MTK方法 <a class="header-anchor" href="#mtk方法" aria-label="Permalink to &quot;MTK方法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#ModelingToolkit</span></span>
<span class="line"><span>@variables t </span></span>
<span class="line"><span>∂ = Differential(t)</span></span>
<span class="line"><span>sts = @variables T(t)[1:n]=1.0 </span></span>
<span class="line"><span>par = @parameters p[1:n]=1e-3</span></span>
<span class="line"><span>eqs=[∂(T[i])~p[i]*t*T[i] for i in 1:n]</span></span>
<span class="line"><span>@named sys_mtk = ODESystem(eqs,t,sts...,par...)</span></span>
<span class="line"><span>@named prob_mtk = ODEProblem(sys_mtk,[],(0,100))</span></span>
<span class="line"><span>@time sol_mtk=solve(prob_mtk);</span></span></code></pre></div><p>计算结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#第一次计算(包含预编译时间)</span></span>
<span class="line"><span>#@time sol_de=solve(prob_de);</span></span>
<span class="line"><span> 0.265494 seconds (217.39 k allocations: 21.561 MiB, 95.65% compilation time: 100% of which was recompilation)</span></span>
<span class="line"><span> #@time sol_mtk=solve(prob_mtk);</span></span>
<span class="line"><span> 507.240792 seconds (193.00 M allocations: 6.895 GiB, 0.84% gc time, 100.00% compilation time)</span></span>
<span class="line"><span></span></span>
<span class="line"><span> #第二次计算(不需要预编译)</span></span>
<span class="line"><span> #@time sol_de=solve(prob_de);</span></span>
<span class="line"><span>0.013862 seconds (453 allocations: 10.783 MiB)</span></span>
<span class="line"><span> #@time sol_mtk=solve(prob_mtk);</span></span>
<span class="line"><span>0.009364 seconds (451 allocations: 10.489 MiB)</span></span></code></pre></div><p>我们可以很惊奇的发现，MTK的编译时间竟然要500秒！而DE却只要0.26秒。但是在第二次计算时，MTK却实现了弯道超车，时间只需要0.009秒，而DE需要0.013秒。</p><p>这是什么原因导致的呢？有同学可能会说，是不是符号运算导致系统额外的开销？尤其是编译时，符号运算会不会导致编译时间大幅增加？但是，我们只统计了<code>solve</code>这个步骤的时间，符号运算确实很费时间，但主要是体现在<code>ODESystem</code>和<code>structural_simplify</code>这些步骤上。到了<code>solve</code>时，其实符号运算已经完成了，已经生成了对应的函数了，在接下来的运算中，应该是基于生成的函数进行计算，而不是进行符号计算。那么，编译时间慢，到底是不是符号运算导致的呢？</p><p>或许，我们可以尝试将MTK中生成的函数剥离出来，直接进行DE运算，彻底摒弃MTK中所有与符号相关的东西。</p><p>简单写一个函数，把MTK中生成的函数取出来：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#get_expr_from_mtk</span></span>
<span class="line"><span>using RuntimeGeneratedFunctions</span></span>
<span class="line"><span>_cache_lock = Threads.SpinLock()</span></span>
<span class="line"><span>_cachename = Symbol(&quot;#_RuntimeGeneratedFunctions_cache&quot;)</span></span>
<span class="line"><span>_tagname = Symbol(&quot;#_RGF_ModTag&quot;)</span></span>
<span class="line"><span>function get_expr(f::RuntimeGeneratedFunction{argnames, cache_tag, context_tag, id}) where {</span></span>
<span class="line"><span>    argnames,</span></span>
<span class="line"><span>    cache_tag,</span></span>
<span class="line"><span>    context_tag,</span></span>
<span class="line"><span>    id,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>    return Expr(:-&gt;, Expr(:tuple, argnames...), _lookup_body(cache_tag, id))</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span>function _lookup_body(cache_tag, id)</span></span>
<span class="line"><span>    lock(_cache_lock) do</span></span>
<span class="line"><span>        cache = getfield(parentmodule(cache_tag), _cachename)</span></span>
<span class="line"><span>        body = cache[id]</span></span>
<span class="line"><span>        body isa WeakRef ? body.value : body</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span>mtk_expr = get_expr(prob_mtk.f.f.f_iip);</span></span></code></pre></div><p>提取出来的代码比较长，我大概展示一下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>:(</span></span>
<span class="line"><span>    (_-out, -arg1,-arg2,t)-&gt;</span></span>
<span class="line"><span>    begin</span></span>
<span class="line"><span>    ˍ₋out[1] = (*)((*)(t, ˍ₋arg2[1]), ˍ₋arg1[1])</span></span>
<span class="line"><span>    ˍ₋out[2] = (*)((*)(t, ˍ₋arg2[2]), ˍ₋arg1[2])</span></span>
<span class="line"><span>    ˍ₋out[3] = (*)((*)(t, ˍ₋arg2[3]), ˍ₋arg1[3])</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    ˍ₋out[9997] = (*)((*)(t, ˍ₋arg2[9997]), ˍ₋arg1[9997])</span></span>
<span class="line"><span>    ˍ₋out[9998] = (*)((*)(t, ˍ₋arg2[9998]), ˍ₋arg1[9998])</span></span>
<span class="line"><span>    ˍ₋out[9999] = (*)((*)(t, ˍ₋arg2[9999]), ˍ₋arg1[9999])</span></span>
<span class="line"><span>    ˍ₋out[10000] = (*)((*)(t, ˍ₋arg2[10000]), ˍ₋arg1[10000])</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>这是一个<code>Expr</code>，我们<code>eval</code>一下，就是一个函数了，然后我们生成对应的<code>ODEProblem</code>，再<code>solve</code>一下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>u0 = [1.0 for i in 1:n]</span></span>
<span class="line"><span>p = [1e-3 for i in 1:n]</span></span>
<span class="line"><span>prob_mtk_expr = ODEProblem(eval(mtk_expr), u0, (0, 100), p, saveat=1)</span></span>
<span class="line"><span>@time sol_mtk_expr=solve(prob_mtk_expr);</span></span></code></pre></div><p>计算结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#@time sol_mtk_expr=solve(prob_mtk_expr);</span></span>
<span class="line"><span>#第一次</span></span>
<span class="line"><span>513.691586 seconds (129.78 M allocations: 4.903 GiB, 0.36% gc time, 100.00% compilation time)</span></span>
<span class="line"><span>#第二次</span></span>
<span class="line"><span>0.020437 seconds (453 allocations: 10.783 MiB)</span></span></code></pre></div><p>抛掉了MTK中所有的符号运算，只保留DE最原汁的本味，我们发现，编译时间竟然还需要513秒！这说明，导致MTK编译时间长的&quot;罪魁祸首&quot;不是符号运算！</p><p>真正的&quot;罪魁祸首&quot;是什么呢？我们对比一下手搓的DE和MTK自动生成的DE：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#手搓DE</span></span>
<span class="line"><span>function de_test!(dT, T, p, t)</span></span>
<span class="line"><span>    n=length(T)</span></span>
<span class="line"><span>    for i in 1:n</span></span>
<span class="line"><span>        dT[i]=p[i]*t*T[i]</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    nothing</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#MTK自动生成DE</span></span>
<span class="line"><span>(_-out, -arg1,-arg2,t)-&gt;</span></span>
<span class="line"><span>    begin</span></span>
<span class="line"><span>    ˍ₋out[1] = (*)((*)(t, ˍ₋arg2[1]), ˍ₋arg1[1])</span></span>
<span class="line"><span>    ˍ₋out[2] = (*)((*)(t, ˍ₋arg2[2]), ˍ₋arg1[2])</span></span>
<span class="line"><span>    ˍ₋out[3] = (*)((*)(t, ˍ₋arg2[3]), ˍ₋arg1[3])</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    ˍ₋out[9997] = (*)((*)(t, ˍ₋arg2[9997]), ˍ₋arg1[9997])</span></span>
<span class="line"><span>    ˍ₋out[9998] = (*)((*)(t, ˍ₋arg2[9998]), ˍ₋arg1[9998])</span></span>
<span class="line"><span>    ˍ₋out[9999] = (*)((*)(t, ˍ₋arg2[9999]), ˍ₋arg1[9999])</span></span>
<span class="line"><span>    ˍ₋out[10000] = (*)((*)(t, ˍ₋arg2[10000]), ˍ₋arg1[10000])</span></span>
<span class="line"><span>end</span></span></code></pre></div><p>大家看出区别了吗？手搓DE用的是<code>for</code>循环，而MTK生成的DE将方程组全部展开了！在Julia中，<code>for</code>能够很好的被编译优化，而将方程组展开，会消耗大量的计算资源用于编译优化！</p><p>因此，我们可以得出一个结论：在DE中，适当运用<code>for</code>，能够显著提高编译速度！</p><p>进一步的，既然<code>for</code>可以，那<code>broadcast</code>可以不可以呢？咱们试试：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function de_broadcast_test!(dT, T, p, t)</span></span>
<span class="line"><span>    dT .= p*t.*T</span></span>
<span class="line"><span>    nothing</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span>u0 = [1.0 for i in 1:n]</span></span>
<span class="line"><span>p = [1e-3 for i in 1:n]</span></span>
<span class="line"><span>prob_de = ODEProblem(de_broadcast_test!, u0, (0, 100), p, saveat=1)</span></span>
<span class="line"><span>@time sol_de=solve(prob_de);</span></span></code></pre></div><p>计算结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#第一次</span></span>
<span class="line"><span> 0.605884 seconds (1.17 M allocations: 75.106 MiB, 97.80% compilation time)</span></span>
<span class="line"><span>#第二次</span></span>
<span class="line"><span> 0.013741 seconds (603 allocations: 16.509 MiB)</span></span></code></pre></div><p>对比<code>for</code>和<code>broadcast</code>的计算结果，我们发现两者相差不大，编译时间都远远小于MTK生成的代码。</p><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>1.MTK编译慢的原因不全是因为符号计算，还有一部分原因是自动生成的函数不利于编译优化。</p><p>2.在编写函数的过程中，适当运用<code>for</code>和<code>broadcast</code>可以显著提高代码性能，减少编译时间。</p></div>`,2)])])}const g=a(t,[["render",l]]);export{h as __pageData,g as default};
