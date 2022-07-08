import{_ as a,c as n,o as t,a as s}from"./app.63fc1e90.js";const b='{"title":"Button","description":"","frontmatter":{},"headers":[{"level":3,"title":"Install","slug":"install"}],"relativePath":"basic/button.md"}',p={},e=s(`<h1 id="button" tabindex="-1">Button <a class="header-anchor" href="#button" aria-hidden="true">#</a></h1><hr><h3 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import { createApp } from &#39;vue&#39;;
import { Button } from &#39;amberm-ui&#39;;

const app = createApp();
app.use(Button);
</code></pre></div><h4 id="type" tabindex="-1">Type <a class="header-anchor" href="#type" aria-hidden="true">#</a></h4><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amber-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amber-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amber-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amber-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amber-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amber-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amber-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amber-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amber-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amber-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amber-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amber-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="disabled" tabindex="-1">Disabled <a class="header-anchor" href="#disabled" aria-hidden="true">#</a></h4><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amber-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amber-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amber-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amber-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amber-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amber-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="shape" tabindex="-1">Shape <a class="header-anchor" href="#shape" aria-hidden="true">#</a></h4><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amber-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Defalut<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amber-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amber-button</span> <span class="token attr-name">round</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Round<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amber-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="size" tabindex="-1">Size <a class="header-anchor" href="#size" aria-hidden="true">#</a></h4><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amber-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>large<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Large<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amber-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amber-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>normal<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Normal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amber-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amber-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amber-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amber-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Mini<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amber-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 class="default">API</h3><h4 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h4><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Can be set to <code>default</code>\u3001<code>primary</code>\u3001<code>success</code>\u3001<code>info</code>\u3001<code>warning</code>\u3001<code>danger</code></td><td>String</td><td><code>default</code></td></tr><tr><td>disabled</td><td>-</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>round</td><td>-</td><td>Boolean</td><td>-</td></tr><tr><td>size</td><td>Can be set to <code>large</code>\u3001<code>normal</code>\u3001<code>small</code>\u3001<code>mini</code></td><td>String</td><td><code>normal</code></td></tr><tr><td>loading</td><td>-</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>loadingText</td><td></td><td>String</td><td>&quot;&quot;</td></tr></tbody></table><h4 id="event" tabindex="-1">Event <a class="header-anchor" href="#event" aria-hidden="true">#</a></h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>Emitted when button is clicked and not disabled or loading</td><td>event: Event</td></tr></tbody></table>`,17),o=[e];function c(l,u,k,i,r,d){return t(),n("div",null,o)}var m=a(p,[["render",c]]);export{b as __pageData,m as default};