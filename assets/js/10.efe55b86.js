(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{179:function(t,e,n){"use strict";var r=n(2),i=n(22),a=n(23),o=n(5),s=[].sort,u=[1,2,3];r(r.P+r.F*(o(function(){u.sort(void 0)})||!o(function(){u.sort(null)})||!n(18)(s)),"Array",{sort:function(t){return void 0===t?s.call(a(this)):s.call(a(this),i(t))}})},194:function(t,e,n){},362:function(t,e,n){"use strict";var r=n(194);n.n(r).a},405:function(t,e,n){"use strict";n.r(e);n(51),n(24),n(179);var r={props:["language"],data:function(){return{}},computed:{recentFiles:function(){var t=this;return this.$site.pages.filter(function(e){return"en"===t.language?e.path.indexOf("/en/blog/")>=0&&"Blog"!==e.title:e.path.indexOf("/blog/")>=0&&e.path.indexOf("/en/")<0&&"Blog"!==e.title}).sort(function(t,e){var n=new Date(t.frontmatter.date).getTime()-new Date(e.frontmatter.date).getTime();return n>0?-1:n<0?1:0}).slice(0,3)}},methods:{date:function(t){var e=new Date(t.frontmatter.date).toLocaleDateString(this.$lang,{month:"long",year:"numeric",day:"numeric"});return e}}},i=(n(362),n(0)),a=Object(i.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"recent-posts"},this._l(this.recentFiles,function(t){return e("div",{staticClass:"post"},[e("Card",{attrs:{post:t}})],1)}))},[],!1,null,"4bb22921",null);a.options.__file="RecentContent.vue";e.default=a.exports}}]);