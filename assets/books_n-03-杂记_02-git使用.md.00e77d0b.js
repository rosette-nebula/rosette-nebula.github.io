import{_ as n,c as a,o as s,b as e}from"./app.32bb6aff.js";const _='{"title":"git\u4F7F\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"git\u521B\u5EFA\u548C\u5220\u9664tag","slug":"git\u521B\u5EFA\u548C\u5220\u9664tag"}],"relativePath":"books/n-03-\u6742\u8BB0/02-git\u4F7F\u7528.md","lastUpdated":1663054316000}',t={},p=e(`<h1 id="git\u4F7F\u7528" tabindex="-1">git\u4F7F\u7528</h1><h2 id="git\u521B\u5EFA\u548C\u5220\u9664tag" tabindex="-1">git\u521B\u5EFA\u548C\u5220\u9664tag</h2><div class="language-shell line-numbers-mode"><pre><code><span class="token comment"># \u5148\u4E0E\u8FDC\u7A0B\u4ED3\u5E93\u540C\u6B65</span>
<span class="token function">git</span> fetch
<span class="token comment"># git tag (\u53EF\u52A0\u4E0A\u53C2\u6570 -l \u6216 --list) \u67E5\u770B\u5F53\u524D\u6240\u6709\u7684tag</span>
<span class="token function">git</span> tag <span class="token parameter variable">-l</span>
<span class="token comment"># \u65B0\u589E\u4E00\u4E2Atag (-a \u540E\u8DDF \u81EA\u5B9A\u4E49tagname(\u4E00\u822C\u4E3A\uFF1A\u7248\u672C\u53F7)\uFF0C-m \u540E\u8DDF\u5907\u6CE8)</span>
<span class="token function">git</span> tag <span class="token parameter variable">-a</span> v1.0.0 <span class="token parameter variable">-m</span> <span class="token string">&quot;my version 1.0.0&quot;</span>
<span class="token comment"># \u63A8\u9001\u5355\u4E2Atag (git push origin &lt;tagname&gt;)</span>
<span class="token function">git</span> push origin v1.0.0
<span class="token comment"># \u63A8\u9001\u6240\u6709tag</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--tags</span>
<span class="token comment"># \u5220\u9664\u5355\u4E2Atag (git tag -d &lt;tagname&gt;)</span>
<span class="token function">git</span> tag <span class="token parameter variable">-d</span> v1.0.0
<span class="token comment"># \u63A8\u9001\u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93tag (git push origin :refs/tags/&lt;tagname&gt;)</span>
<span class="token function">git</span> push origin :refs/tags/v1.0.0

<span class="token comment"># \u76F4\u63A5\u5220\u9664\u8FDC\u7A0Btag</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,3),l=[p];function r(i,c,o,g,m,b){return s(),a("div",null,l)}var k=n(t,[["render",r]]);export{_ as __pageData,k as default};
