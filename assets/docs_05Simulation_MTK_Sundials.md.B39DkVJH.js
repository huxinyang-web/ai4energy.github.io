import{_ as n,o as a,c as e,ae as p}from"./chunks/framework.D6sYw4vw.js";const m=JSON.parse('{"title":"MTK调用Sundials计算","description":"","frontmatter":{},"headers":[],"relativePath":"docs/05Simulation/MTK_Sundials.md","filePath":"docs/05Simulation/MTK_Sundials.md","lastUpdated":1773485796000}'),l={name:"docs/05Simulation/MTK_Sundials.md"};function i(t,s,c,o,r,d){return a(),e("div",null,[...s[0]||(s[0]=[p(`<h1 id="mtk调用sundials计算" tabindex="-1">MTK调用Sundials计算 <a class="header-anchor" href="#mtk调用sundials计算" aria-label="Permalink to &quot;MTK调用Sundials计算&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><pre><code>Contents：MTK、Sundials

Contributor: HY

Email:1171006975@qq.com

如有错误，请批评指正。
</code></pre><p>::: note</p><pre><code>MTK = ModelingToolkit.jl

[Sundials](https://computing.llnl.gov/projects/sundials)基于Fortran/C的求解器

[ModelingToolkit.jl ](https://mtk.sciml.ai/stable/)符号建模包
</code></pre><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>Sundials是一款非常成熟和受欢迎的开源求解器，它在求解速度和适用范围上领先绝大多数求解器。当我们使用传统求解器遇到困难时，不妨调用Sundials试试。</p><p>Sundials可以求解ODEs，DAEs和NonlinearEqs等问题。接下来，我将以锂电池的P2D模型为例，分别介绍如何调用Sundials计算<code>DAEProblem</code>，<code>ODEProblem</code>，<code>NonlinearProblem</code>：</p><h2 id="_1-odeproblem" tabindex="-1">1.ODEProblem <a class="header-anchor" href="#_1-odeproblem" aria-label="Permalink to &quot;1.ODEProblem&quot;">​</a></h2><p>选取锂电池P2D模型中的ODEs部分进行计算：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>using ModelingToolkit, DifferentialEquations,Sundials</span></span>
<span class="line"><span>include(&quot;P2D_并行_固液相模型.jl&quot;)</span></span>
<span class="line"><span>include(&quot;P2D_并行_电路模型.jl&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#ODEProblem</span></span>
<span class="line"><span>@named batter_chemistry = P2D_Libatter_chemistry(n_mesh_neg=8, n_mesh_sep=8, n_mesh_pos=8)</span></span>
<span class="line"><span>@named OdeFun_chemistry = ODESystem([], t)</span></span>
<span class="line"><span>@named model_chemistry = compose(OdeFun_chemistry, [batter_chemistry])</span></span>
<span class="line"><span>sys_chemistry = structural_simplify(model_chemistry)</span></span>
<span class="line"><span>prob_chemistry = ODEProblem(sys_chemistry, [], (0.0, 100.0))</span></span>
<span class="line"><span>#不调用Sundials</span></span>
<span class="line"><span>@time sol_chemistry = solve(prob_chemistry);</span></span>
<span class="line"><span>#调用Sundials</span></span>
<span class="line"><span>@time sol_chemistry = solve(prob_chemistry, CVODE_Adams());</span></span></code></pre></div><p>计算结果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#不调用Sundials</span></span>
<span class="line"><span>0.000980 seconds (171 allocations: 828.094 KiB)</span></span>
<span class="line"><span>#调用Sundials</span></span>
<span class="line"><span>0.000151 seconds (111 allocations: 37.734 KiB)</span></span></code></pre></div><h2 id="_2-nonlinearproblem" tabindex="-1">2.NonlinearProblem <a class="header-anchor" href="#_2-nonlinearproblem" aria-label="Permalink to &quot;2.NonlinearProblem&quot;">​</a></h2><p>选取锂电池P2D模型中的NonlinearEqs部分进行计算：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#NonlinearProblem</span></span>
<span class="line"><span>@named batter_electric = P2D_Libatter_electric()</span></span>
<span class="line"><span>@named current = Constant(U=20)</span></span>
<span class="line"><span>@named current_source = Current_source()</span></span>
<span class="line"><span>@named ground = Ground()</span></span>
<span class="line"><span>eqs = [</span></span>
<span class="line"><span>    connect(batter_electric.n, ground.g, current_source.n)</span></span>
<span class="line"><span>    connect(batter_electric.p, current_source.p)</span></span>
<span class="line"><span>    connect(current.u, current_source.u)]</span></span>
<span class="line"><span>@named OdeFun_electric = ODESystem(eqs, t)</span></span>
<span class="line"><span>@named model_electric = compose(OdeFun_electric, [batter_electric, current, current_source, ground])</span></span>
<span class="line"><span>sys_electric = structural_simplify(model_electric)</span></span>
<span class="line"><span>prob_electric = NonlinearProblem(ODEProblem(sys_electric, [], (0.0, 0.0), []))</span></span>
<span class="line"><span>#不调用Sundials</span></span>
<span class="line"><span>@time sol_electric = solve(prob_electric);</span></span>
<span class="line"><span>#调用Sundials</span></span>
<span class="line"><span>@time sol_electric = solve(prob_electric, KINSOL());</span></span></code></pre></div><p>计算结果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#不调用Sundials</span></span>
<span class="line"><span>0.000283 seconds (92 allocations: 31.922 KiB)</span></span>
<span class="line"><span>#调用Sundials</span></span>
<span class="line"><span>0.000487 seconds (270 allocations: 11.703 KiB)</span></span></code></pre></div><h2 id="_3-daeproblem" tabindex="-1">3.DAEProblem <a class="header-anchor" href="#_3-daeproblem" aria-label="Permalink to &quot;3.DAEProblem&quot;">​</a></h2><p>选取锂电池P2D模型(DAEs)进行计算：</p><h3 id="note-如果之前建模生成的是odesystem-需要生成对应的daeproblem才能调用sundials进行求解-不调用sundials的话-直接生成odeproblem即可。" tabindex="-1">NOTE:如果之前建模生成的是ODESystem，需要生成对应的DAEProblem才能调用Sundials进行求解，不调用Sundials的话，直接生成ODEProblem即可。 <a class="header-anchor" href="#note-如果之前建模生成的是odesystem-需要生成对应的daeproblem才能调用sundials进行求解-不调用sundials的话-直接生成odeproblem即可。" aria-label="Permalink to &quot;NOTE:如果之前建模生成的是ODESystem，需要生成对应的DAEProblem才能调用Sundials进行求解，不调用Sundials的话，直接生成ODEProblem即可。&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#DAEProblem</span></span>
<span class="line"><span>include(&quot;P2D组件 copy.jl&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>series_num=1;</span></span>
<span class="line"><span>parallel_num=1;</span></span>
<span class="line"><span>batters = [@named batter[(i-1)*series_num+j]= P2D_Libatter() for i in 1:parallel_num, j in 1:series_num]</span></span>
<span class="line"><span>@named current = Constant(U = 20);</span></span>
<span class="line"><span>@named current_source = Current_source();</span></span>
<span class="line"><span>@named ground = Ground();</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>eqs = [</span></span>
<span class="line"><span>    [connect(batters[i,j].n, batters[i,j+1].p) for i in 1:parallel_num, j in 1:series_num-1]...</span></span>
<span class="line"><span>    [connect(batters[i,1].p, batters[i+1,1].p) for i in 1:parallel_num-1]...</span></span>
<span class="line"><span>    [connect(batters[i,end].n, batters[i+1,end].n) for i in 1:parallel_num-1]...</span></span>
<span class="line"><span>    connect(batters[end,end].n, ground.g, current_source.n)</span></span>
<span class="line"><span>    connect(batters[1,1].p, current_source.p)</span></span>
<span class="line"><span>    connect(current.u, current_source.u)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@named OdeFun = ODESystem(eqs, t)</span></span>
<span class="line"><span>@named model = compose(OdeFun, [batters..., current, current_source, ground])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sys = structural_simplify(model)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>prob = DAEProblem(sys, zeros(length(states(sys))),[], (0.0, 2500.0),[])</span></span>
<span class="line"><span>prob_ode = ODEProblem(sys,[], (0.0, 2500.0),[])</span></span>
<span class="line"><span>#不调用Sundials</span></span>
<span class="line"><span>@time sol = solve(prob_ode);</span></span>
<span class="line"><span>#调用Sundials</span></span>
<span class="line"><span>@time sol = solve(prob,IDA());</span></span></code></pre></div><p>计算结果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#不调用Sundials</span></span>
<span class="line"><span>0.313776 seconds (13.57 k allocations: 7.203 MiB)</span></span>
<span class="line"><span>#调用Sundials</span></span>
<span class="line"><span>0.095321 seconds (38.60 k allocations: 1.576 MiB)</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>Sundials求解器和SCIML默认的求解器各有胜负。总的来说，对于一些简单的方程组，SCIML默认的求解器更快，对于一些较为复杂的方程组，Sundials求解器更快。</p></div>`,2)])])}const b=n(l,[["render",i]]);export{m as __pageData,b as default};
