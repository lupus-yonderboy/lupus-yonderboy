(this["webpackJsonplupus-yonderboy"]=this["webpackJsonplupus-yonderboy"]||[]).push([[0],{26:function(t,e,n){},30:function(t,e,n){t.exports=n(43)},39:function(t,e,n){},40:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var s=n(0),a=n.n(s),o=n(17),r=n.n(o),i=n(19),c={posts:[],post:{}},u=n(15),l=n(14),p=n(6),h=(n(39),function(t){var e=t.children;return a.a.createElement("div",{className:"header"},e)}),m=n(9),f=n(10),d=n(12),v=n(11),b=n(13),y=(n(40),function(t){var e=t.children;return a.a.createElement("div",{className:"container"},a.a.createElement("div",null,e))}),E=function(t){return{type:"SET_POSTS",posts:t}},O=function(t){return{type:"SET_POST",post:t}},j=n(29),P=function(){var t="https://lupus-yonderboy-go-env.wv5mqwfbqj.us-east-1.elasticbeanstalk.com/",e=fetch(t+"posts").then((function(t){return t.json()})),n=fetch(t+"authors").then((function(t){return t.json()}));return Promise.all([e,n]).then((function(t){return function(t){var e=t.postsRes,n=t.authorsRes,s={},a=[],o=!0,r=!1,i=void 0;try{for(var c,u=n[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var l=c.value;s[l.Id]=l.Name}}catch(b){r=!0,i=b}finally{try{o||null==u.return||u.return()}finally{if(r)throw i}}var p=!0,h=!1,m=void 0;try{for(var f,d=e[Symbol.iterator]();!(p=(f=d.next()).done);p=!0){var v=f.value;a.push(Object(j.a)({_authorName:s[v.Author]},v))}}catch(b){h=!0,m=b}finally{try{p||null==d.return||d.return()}finally{if(h)throw m}}return a}({postsRes:t[0],authorsRes:t[1]})}))},g=function(t){function e(){return Object(m.a)(this,e),Object(d.a)(this,Object(v.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(f.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.props.posts.length||P().then((function(e){t.props.setPosts(e)}))}},{key:"render",value:function(){return a.a.createElement(y,null,'"Chaos, Mr. Who," Lupus Yonderboy said. "That is our mode and modus. That is our central kick."')}}]),e}(s.Component),S=Object(p.b)((function(t){return{posts:t.posts}}),(function(t){return{setPosts:function(e){return t(E(e))}}}))(g),k=function(t){function e(){return Object(m.a)(this,e),Object(d.a)(this,Object(v.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(f.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.props.posts.length||P().then((function(e){t.props.setPosts(e)}))}},{key:"render",value:function(){return a.a.createElement(y,null,"Hi.")}}]),e}(s.Component),N=Object(p.b)((function(t){return{posts:t.posts}}),(function(t){return{setPosts:function(e){return t(E(e))}}}))(k),T=(n(26),function(t,e){return t.find((function(t){return t.Id===e}))}),I=function(t){function e(t){var n;return Object(m.a)(this,e),(n=Object(d.a)(this,Object(v.a)(e).call(this,t))).state={loading:null,time:null,error:null},n}return Object(b.a)(e,t),Object(f.a)(e,[{key:"componentDidMount",value:function(){var t=this;if(this.props.posts.length){var e=parseInt(this.props.match.params.postId),n=T(this.props.posts,e);this.props.setPost(n)}else{this.setState({loading:!0}),function e(n){setTimeout((function(){t.state.loading&&(n+=10,t.setState({time:n}),e(n))}),10)}(0),P().then((function(e){var n=parseInt(t.props.match.params.postId),s=T(e,n);t.props.setPost(s),t.props.setPosts(e)})).catch((function(){t.setState({error:":("})})).finally((function(){t.setState({loading:!1})}))}}},{key:"componentDidUpdate",value:function(t){if(this.props.location!==t.location){var e=parseInt(this.props.match.params.postId),n=T(this.props.posts,e);this.props.setPost(n)}}},{key:"render",value:function(){return a.a.createElement(y,null,this.state.loading?this.state.time:this.state.error,this.state.loading?null:a.a.createElement("div",null,a.a.createElement("div",{className:"title"},this.props.post.Title),a.a.createElement("div",{className:"author"},this.props.post._authorName),a.a.createElement("div",{className:"content"},this.props.post.Content)))}}]),e}(s.Component),w=Object(p.b)((function(t){return{posts:t.posts,post:t.post}}),(function(t){return{setPosts:function(e){return t(E(e))},setPost:function(e){return t(O(e))}}}))(I),C=function(t){function e(t){var n;return Object(m.a)(this,e),(n=Object(d.a)(this,Object(v.a)(e).call(this,t))).state={loading:null,time:null,error:null},n}return Object(b.a)(e,t),Object(f.a)(e,[{key:"setPost",value:function(t){this.props.setPost(t)}},{key:"renderPosts",value:function(t){var e=this;return t.map((function(t){return a.a.createElement("div",{key:t.Id},a.a.createElement(u.b,{to:"/posts/".concat(t.Id),onClick:function(){return e.setPost(t)},className:"title"},t.Title),a.a.createElement("div",{className:"author"},t.hasOwnProperty("_authorName")?t._authorName:"?"),a.a.createElement("div",{className:"content"},t.Content.slice(0,230)+" ..."))}))}},{key:"componentDidMount",value:function(){var t=this;if(!this.props.posts.length){this.setState({loading:!0}),function e(n){setTimeout((function(){t.state.loading&&(n+=10,t.setState({time:n}),e(n))}),10)}(0),P().then((function(e){t.props.setPosts(e)})).catch((function(){t.setState({error:":("})})).finally((function(){t.setState({loading:!1})}))}}},{key:"render",value:function(){return a.a.createElement(y,null,this.state.loading?this.state.time:this.state.error,this.state.loading?null:this.renderPosts(this.props.posts))}}]),e}(s.Component),_=Object(p.b)((function(t){return{posts:t.posts,post:t.post}}),(function(t){return{setPosts:function(e){return t(E(e))},setPost:function(e){return t(O(e))}}}))(C),M=(n(42),document.getElementById("root")),D=Object(i.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_POSTS":return Object.assign({},t,{posts:e.posts});case"SET_POST":return Object.assign({},t,{post:e.post});default:return t}}));r.a.render(a.a.createElement((function(t){return a.a.createElement(p.a,{store:t.store},a.a.createElement(u.a,null,a.a.createElement(h,null,a.a.createElement("div",null,a.a.createElement("span",{className:"header-span"},a.a.createElement(u.b,{to:"/",className:"header-link"},"HOME")),a.a.createElement("span",{className:"header-span"},a.a.createElement(u.b,{to:"/about",className:"header-link"},"ABOUT")),a.a.createElement("span",{className:"header-span"},a.a.createElement(u.b,{to:"/posts",className:"header-link"},"POSTS")))),a.a.createElement(l.c,null,a.a.createElement(l.a,{exact:!0,path:"/",component:N}),a.a.createElement(l.a,{path:"/about",component:S}),a.a.createElement(l.a,{path:"/posts/:postId",component:w}),a.a.createElement(l.a,{path:"/posts",component:_}))))}),{store:D}),M)}},[[30,1,2]]]);
//# sourceMappingURL=main.e92a67ea.chunk.js.map