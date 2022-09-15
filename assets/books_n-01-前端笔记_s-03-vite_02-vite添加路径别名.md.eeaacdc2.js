import{_ as n,c as s,o as a,b as p}from"./app.32bb6aff.js";const m='{"title":"vite\u6DFB\u52A0\u8DEF\u5F84\u522B\u540D","description":"","frontmatter":{},"headers":[],"relativePath":"books/n-01-\u524D\u7AEF\u7B14\u8BB0/s-03-vite/02-vite\u6DFB\u52A0\u8DEF\u5F84\u522B\u540D.md","lastUpdated":1662618673000}',t={},e=p(`<h1 id="vite\u6DFB\u52A0\u8DEF\u5F84\u522B\u540D" tabindex="-1">vite\u6DFB\u52A0\u8DEF\u5F84\u522B\u540D</h1><ul><li><code>vite.config.ts</code>\u6587\u4EF6\u6DFB\u52A0\u4EE5\u4E0B\u914D\u7F6E</li></ul><div class="language-ts line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u8DEF\u5F84\u522B\u540D\u914D\u7F6E</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li><code>tsconfig.json</code> \u6587\u4EF6\u6DFB\u52A0\u4EE5\u4E0B\u914D\u7F6E</li></ul><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/*&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,5),o=[e];function c(l,r,i,u,k,b){return a(),s("div",null,o)}var _=n(t,[["render",c]]);export{m as __pageData,_ as default};
