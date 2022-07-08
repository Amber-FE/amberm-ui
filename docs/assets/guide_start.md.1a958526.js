import{_ as n,c as a,o as s,a as t}from"./app.63fc1e90.js";const m='{"title":"Quick Start","description":"","frontmatter":{},"headers":[],"relativePath":"guide/start.md"}',p={},c=t(`<h1 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-hidden="true">#</a></h1><hr><h4 id="cdn" tabindex="-1">CDN <a class="header-anchor" href="#cdn" aria-hidden="true">#</a></h4><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- style --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/amber-ui@0.3.0/dist/css/index.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- vue --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- AmberUI Library --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/amber-ui@0.3.0/dist/index.umd.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amber-button</span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amber-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>  <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="vue-cli-webpack" tabindex="-1">vue-cli / webpack <a class="header-anchor" href="#vue-cli-webpack" aria-hidden="true">#</a></h4><div class="language-shell"><pre><code>  <span class="token function">npm</span> i amber-ui -S
</code></pre></div><div class="language-javascript"><pre><code>  <span class="token comment">// \u5168\u90E8\u5F15\u5165</span>
  <span class="token keyword">import</span> <span class="token string">&#39;amber-ui/dist/css/index.css&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> AmberUi <span class="token keyword">from</span> <span class="token string">&#39;amber-ui&#39;</span><span class="token punctuation">;</span>

  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>AmberUi<span class="token punctuation">)</span>

  <span class="token comment">// \u6309\u9700\u5F15\u7528</span>
  <span class="token keyword">import</span> <span class="token string">&#39;amber-ui/dist/css/picture-stretch.css&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> PictureStretch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;amber-ui&#39;</span><span class="token punctuation">;</span>

  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>PictureStretch<span class="token punctuation">)</span>
</code></pre></div>`,7),o=[c];function e(l,u,k,i,r,d){return s(),a("div",null,o)}var h=n(p,[["render",e]]);export{m as __pageData,h as default};