(this["webpackJsonplupus-yonderboy"]=this["webpackJsonplupus-yonderboy"]||[]).push([[0],{23:function(t,e,a){t.exports=a(36)},28:function(t,e,a){},29:function(t,e,a){},30:function(t,e,a){},36:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(14),s=a.n(o),l=a(8),c=a(5),i=(a(28),function(t){var e=t.children;return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,e))}),u=function(){return r.a.createElement(i,null,"Hi.")},m=function(){return r.a.createElement(i,null,'"Chaos, Mr. Who," Lupus Yonderboy said. "That is our mode and modus. That is our central kick."')},h=(a(29),function(t){var e=t.children;return r.a.createElement("div",{className:"header"},e)}),d=a(20),f=a(15),p=a(16),v=a(21),y=a(17),E=a(22),b=function(t){function e(t){var a;return Object(f.a)(this,e),(a=Object(v.a)(this,Object(y.a)(e).call(this,t))).state={posts:[],authorsLoading:null,postsLoading:null,time:null,error:null},a}return Object(E.a)(e,t),Object(p.a)(e,[{key:"renderPosts",value:function(t){return t.map((function(t){return r.a.createElement("div",{key:t.Id},r.a.createElement("div",{className:"title"},t.Title),r.a.createElement("div",{className:"author"},t.hasOwnProperty("_authorName")?t._authorName:"Anonymous"),r.a.createElement("div",{className:"content"},t.Content))}))}},{key:"componentWillMount",value:function(){var t=this,e="https://lupus-yonderboy-go-env.wv5mqwfbqj.us-east-1.elasticbeanstalk.com/";this.setState({postsLoading:!0,authorsLoading:!0});!function e(a){setTimeout((function(){t.state.postsLoading&&(a+=50,t.setState({time:a}),e(a))}),10)}(0),fetch(e+"posts").then((function(t){return t.json()})).then((function(e){var a=!0,n=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done);a=!0){var l=o.value;t.setState({posts:[].concat(Object(d.a)(t.state.posts),[l])})}}catch(c){n=!0,r=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw r}}})).catch((function(){t.setState({error:":("})})).finally((function(){t.setState({postsLoading:!1})})),fetch(e+"authors").then((function(t){return t.json()})).then((function(e){var a=t.state.posts,n={},r=!0,o=!1,s=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var i=l.value;n[i.Id]=i.Name}}catch(v){o=!0,s=v}finally{try{r||null==c.return||c.return()}finally{if(o)throw s}}var u=!0,m=!1,h=void 0;try{for(var d,f=a[Symbol.iterator]();!(u=(d=f.next()).done);u=!0){var p=d.value;p._authorName=n[p.Author]}}catch(v){m=!0,h=v}finally{try{u||null==f.return||f.return()}finally{if(m)throw h}}t.setState({posts:a})})).catch((function(){t.setState({error:":("})})).finally((function(){t.setState({authorsLoading:!1})}))}},{key:"render",value:function(){return r.a.createElement(i,null,this.state.postsLoading?this.state.time:this.state.error,this.renderPosts(this.state.posts),this.state.authorsLoading||this.state.postsLoading?null:r.a.createElement("div",{className:"smile"},":)"))}}]),e}(n.Component),N=(a(30),document.getElementById("root"));s.a.render(r.a.createElement((function(){return r.a.createElement(l.a,null,r.a.createElement(h,null,r.a.createElement("div",null,r.a.createElement("span",{className:"header-span"},r.a.createElement(l.b,{to:"/",className:"header-link"},"HOME")),r.a.createElement("span",{className:"header-span"},r.a.createElement(l.b,{to:"/about",className:"header-link"},"ABOUT")),r.a.createElement("span",{className:"header-span"},r.a.createElement(l.b,{to:"/posts",className:"header-link"},"POSTS")))),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:u}),r.a.createElement(c.a,{path:"/about",component:m}),r.a.createElement(c.a,{path:"/posts",component:b})))}),null),N)}},[[23,1,2]]]);
//# sourceMappingURL=main.f36fd552.chunk.js.map