(this["webpackJsonplibrary-books"]=this["webpackJsonplibrary-books"]||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),i=a.n(n),s=a(7),c=a.n(s),o=(a(14),a(3)),u=a.n(o),l=a(5),d=a(4),b=a(8),m=a.n(b),j=(a(17),"https://www.googleapis.com/books/v1/volumes?q="),f=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,r=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,fetch(j+t);case 3:return a=e.sent,e.abrupt("return",a.json());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=a(2),h=a.n(p),v={id:h.a.string.isRequired,volumeInfo:h.a.shape({title:h.a.string.isRequired,authors:h.a.array.isRequired,imageLinks:h.a.shape({smallThumbnail:h.a.string.isRequired}).isRequired}).isRequired}.isRequired,O=(h.a.string.isRequired,h.a.func.isRequired,h.a.func.isRequired,h.a.arrayOf(v).isRequired,h.a.bool.isRequired,h.a.bool.isRequired,h.a.func.isRequired,function(e){var t=e.autocomplete,a=e.loadData;return Object(r.jsx)("div",{className:"form__item ui selection dropdown",children:t.map((function(e){var t=e.volumeInfo,n=e.id;return Object(r.jsx)("button",{type:"button",className:"autocomplete__item",onClick:function(){return a(t.title)},children:t.title},n)}))})}),x=function(e){var t=e.query,a=e.handleQuery,n=e.handleSubmit,i=e.autocomplete,s=e.autocompleteError,c=e.autocompleteStatus,o=e.loadData;return Object(r.jsxs)("div",{className:"container__right",children:[Object(r.jsxs)("form",{className:"form",children:[Object(r.jsx)("input",{className:"form__item ui selection dropdown",onChange:a,value:t}),Object(r.jsx)("button",{className:"form__item ui primary button",onClick:n,type:"submit",disabled:s,children:"search"})]}),c&&(s?Object(r.jsx)("div",{className:"error",children:"No matches"}):Object(r.jsx)(O,{loadData:o,autocomplete:i}))]})},k=function(e){var t=e.books;return Object(r.jsx)("div",{className:"books",children:t.map((function(e){var t=e.volumeInfo,a=e.id;return Object(r.jsxs)("div",{className:"book",children:[Object(r.jsx)("img",{className:"book__img",src:void 0===t.imageLinks?"https://logodix.com/logo/1338312.png":t.imageLinks.smallThumbnail,alt:t.title}),Object(r.jsx)("div",{children:Object(r.jsx)("h4",{children:t.title})}),Object(r.jsx)("div",{children:t.authors&&t.authors.map((function(e){return Object(r.jsx)("div",{children:e})}))})]},a)}))})},g=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],i=t[1],s=Object(n.useState)(""),c=Object(d.a)(s,2),o=c[0],b=c[1],j=Object(n.useState)(!1),p=Object(d.a)(j,2),h=p[0],v=p[1],O=Object(n.useState)([]),g=Object(d.a)(O,2),q=g[0],y=g[1],R=Object(n.useState)(!1),_=Object(d.a)(R,2),w=_[0],N=_[1],S=Object(n.useState)(!1),I=Object(d.a)(S,2),D=I[0],C=I[1],E=function(){var e=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:if(a=e.sent,void 0!==a.items){e.next=7;break}return N(!0),e.abrupt("return");case 7:N(!1),y(a.items);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=Object(n.useCallback)(m()(E,500),[]),J=function(){var e=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:0===(a=e.sent).totalItems?v(!0):(v(!1),i(a.items));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"container__left",children:h?Object(r.jsx)("div",{children:"Invalid entry, no books found!"}):Object(r.jsx)(k,{books:a})}),Object(r.jsx)(x,{query:o,handleQuery:function(e){var t=e.target.value;b(t),""!==t?(C(!0),L(t)):C(!1)},handleSubmit:function(e){if(e.preventDefault(),""===o)return N(!0),void v(!0);J(o)},autocomplete:q,autocompleteError:w,autocompleteStatus:D,loadData:function(e){J(e),b(e),C(!1)}})]})};a(20);c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.2d060b92.chunk.js.map