import{_ as n,c as s,o as a,e as p}from"./app.61b478ad.js";const d='{"title":"\u6D4B\u8BD5\u6587\u6863","description":"","frontmatter":{"title":"\u6D4B\u8BD5\u6587\u6863","tags":["\u6D4B\u8BD5","\u7B97\u6CD5"],"cover":"https://tva2.sinaimg.cn/large/0060lm7Tly1fpx1skrabaj31hc0u01kx.jpg"},"headers":[{"level":2,"title":"\u4EE3\u7801\u6D4B\u8BD5","slug":"\u4EE3\u7801\u6D4B\u8BD5"},{"level":2,"title":"katex \u6D4B\u8BD5","slug":"katex-\u6D4B\u8BD5"}],"relativePath":"posts/\u968F\u7B14/doc2 - \u526F\u672C.md"}',t={},e=p(`<h2 id="\u4EE3\u7801\u6D4B\u8BD5" tabindex="-1">\u4EE3\u7801\u6D4B\u8BD5 <a class="header-anchor" href="#\u4EE3\u7801\u6D4B\u8BD5" aria-hidden="true">#</a></h2><p>\u4E8C\u5206\u67E5\u627E <code>binsearch</code></p><div class="language-ts line-numbers-mode"><pre><code><span class="token comment">//[l, r)</span>
<span class="token keyword">function</span> <span class="token function">search</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span> 
    <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> r <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token punctuation">(</span>l <span class="token operator">+</span> r<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            r <span class="token operator">=</span> c<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            l <span class="token operator">=</span> c <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> c<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="katex-\u6D4B\u8BD5" tabindex="-1">katex \u6D4B\u8BD5 <a class="header-anchor" href="#katex-\u6D4B\u8BD5" aria-hidden="true">#</a></h2><p>\u6B63\u6001\u5206\u5E03\u7684\u6982\u7387\u5BC6\u5EA6\u51FD\u6570\u5747\u503C\u4E3A $\\mu$ \u65B9\u5DEE\u4E3A $\\sigma^2$ (\u6216\u6807\u51C6\u5DEE $\\sigma$ )\uFF0C\u662F\u9AD8\u65AF\u51FD\u6570\u7684\u4E00\u4E2A\u5B9E\u4F8B\uFF1A</p><p>$$f(x;\\mu,\\sigma)=\\frac{1}{\\sigma\\sqrt{2\\pi}} \\exp \\left( -\\frac{(x- \\mu)^2}{2\\sigma^2} \\right)$$</p><p>\u5982\u679C\u4E00\u4E2A\u968F\u673A\u53D8\u91CF $X$ \u670D\u4ECE\u8FD9\u4E2A\u5206\u5E03\uFF0C\u6211\u4EEC\u5199\u4F5C $X \\sim N(\\mu, \\sigma^2)$ \u3002\u5982\u679C $\\mu =0$ \u5E76\u4E14 $\\sigma =1$ \uFF0C\u8FD9\u4E2A\u5206\u5E03\u88AB\u79F0\u4E3A\u6807\u51C6\u6B63\u6001\u5206\u5E03\uFF0C\u8FD9\u4E2A\u5206\u5E03\u80FD\u591F\u7B80\u5316\u4E3A $$f(x) = \\frac{1}{\\sqrt{2\\pi}} \\exp\\left(-\\frac{x^2}{2} \\right)$$</p><p>\u7D2F\u79EF\u5206\u5E03\u51FD\u6570\u662F\u6307\u968F\u673A\u53D8\u91CF $X$ \u5C0F\u4E8E\u6216\u7B49\u4E8E $x$ \u7684\u6982\u7387\uFF0C\u7528\u6982\u7387\u5BC6\u5EA6\u51FD\u6570\u8868\u793A\u4E3A $$F(x;\\mu,\\sigma)=\\frac{1}{\\sigma\\sqrt{2\\pi}}\\int_{-\\infty}^x \\exp \\left( -\\frac{(t - \\mu)^2}{2\\sigma^2}\\ \\right) dt$$</p><p>\u6B63\u6001\u5206\u5E03\u7684\u7D2F\u79EF\u5206\u5E03\u51FD\u6570\u80FD\u591F\u7531\u4E00\u4E2A\u53EB\u505A\u8BEF\u5DEE\u51FD\u6570\u7684\u7279\u6B8A\u51FD\u6570\u8868\u793A\uFF1A $$\\Phi (z)={\\frac 12}\\left[1+\\operatorname {erf}\\left({\\frac {z-\\mu }{\\sigma {\\sqrt 2}}}\\right)\\right]$$</p>`,9),o=[e];function c(r,l,u,i,k,m){return a(),s("div",null,o)}var $=n(t,[["render",c]]);export{d as __pageData,$ as default};
