(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},107:function(e,t,a){e.exports=a(481)},114:function(e,t,a){},116:function(e,t,a){},118:function(e,t,a){},143:function(e,t,a){},153:function(e,t){},21:function(e,t,a){},375:function(e,t,a){},481:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=(a(109),a(29)),r=a.n(c),s=(a(114),a(3)),i=a(2),l=a(4),u=a(6),m=a(5),h=a(7),p=(a(116),a(118),a(482)),d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.user?o.a.createElement("div",{className:"nav-links"},o.a.createElement(p.a,{to:"/faq"},"FAQ"),o.a.createElement(p.a,{to:"/notes"},"Notes"),o.a.createElement(p.a,{to:"/profile"},"Profile"),o.a.createElement("div",{className:"navLink",onClick:this.props.logout},"Logout")):o.a.createElement("div",{className:"nav-links"},o.a.createElement(p.a,{to:"/faq"},"FAQ"),o.a.createElement(p.a,{to:"/signup"},"Signup"),o.a.createElement(p.a,{to:"/login"},"Login"));return o.a.createElement("div",{className:"navbarStyle"},o.a.createElement("div",{className:"nav"},o.a.createElement("div",{className:"nav-header"},o.a.createElement("div",{className:"nav-title"},o.a.createElement(p.a,{to:"/"},"ENOT"))),o.a.createElement("div",{className:"nav-btn"},o.a.createElement("label",{for:"nav-check"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null))),o.a.createElement("input",{type:"checkbox",id:"nav-check"}),e))}}]),t}(o.a.Component),f=a(11),v=a(42),E=a.n(v);a(68).config();var b=function e(){var t=this;Object(i.a)(this,e),this.signup=function(e){return t.service.post("/signup",e).then(function(e){return e.data})},this.login=function(e){return t.service.post("/login",e).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.logout=function(){return t.service.get("/logout").then(function(e){return e.data})},this.service=E.a.create({baseURL:"".concat("https://ironhack-enot.herokuapp.com/api","/auth"),withCredentials:!0})},g=a(483),j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,o=a.password;e.authService.signup({username:n,password:o}).then(function(t){e.props.getUser(t),e.setState({username:"",password:"",redirect:!0})})},e.handleChange=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(f.a)({},n,o))},e.state={username:"",password:"",redirect:!1},e.authService=new b,e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.state&&this.state.redirect?o.a.createElement(g.a,{to:"/"}):o.a.createElement("div",{className:"signup"},o.a.createElement("h2",null,"Signup"),o.a.createElement("form",{onSubmit:this.handleFormSubmit},o.a.createElement("input",{type:"text",name:"username",onChange:function(t){return e.handleChange(t)},placeholder:"Username"}),o.a.createElement("br",null),o.a.createElement("input",{type:"password",name:"password",onChange:function(t){return e.handleChange(t)},placeholder:"Password"}),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",value:"Signup"})))}}]),t}(n.Component),O=(a(143),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,o=a.password;e.authService.login({username:n,password:o}).then(function(t){e.props.getUser(t),e.setState(Object(s.a)({},e.state,{redirect:!0}))})},e.handleChange=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(f.a)({},n,o))},e.state={username:"",password:"",redirect:!1},e.authService=new b,e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.state&&this.state.redirect?o.a.createElement(g.a,{to:"/notes"}):o.a.createElement("div",{className:"login"},o.a.createElement("h2",null,"Login"),o.a.createElement("form",{onSubmit:this.handleFormSubmit},o.a.createElement("input",{type:"text",name:"username",onChange:function(t){return e.handleChange(t)},placeholder:"Username"}),o.a.createElement("br",null),o.a.createElement("input",{type:"password",name:"password",onChange:function(t){return e.handleChange(t)},placeholder:"Password"}),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",value:"Login"})))}}]),t}(n.Component));a(68).config();var S=function e(){var t=this;Object(i.a)(this,e),this.showNotes=function(){return t.service.get("/notes").then(function(e){return e.data})},this.showNoteDetails=function(e){return t.service.get("/note/".concat(e)).then(function(e){return e.data})},this.showEditDetails=function(e){return t.service.get("/edit/".concat(e)).then(function(e){return e.data})},this.editNoteDetails=function(e,a,n){return t.service.post("/edit",{title:e,noteText:a,id:n}).then(function(e){return e.data})},this.shareNoteDetails=function(e,a){return t.service.post("/share/".concat(e),{shareWith:a}).then(function(e){return e.data})},this.createNote=function(e,a,n,o,c){var r=new FormData;return r.append("photo",n),r.append("title",e),r.append("noteText",a),r.append("sketch",o),r.append("snippetLanguage",c.snippetLanguage),r.append("snippetContent",c.snippetContent),t.service.post("/note/createnote",r,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){return e.data})},this.deleteNote=function(e){return t.service.delete("/note/".concat(e)).then(function(e){return e.data})},this.service=E.a.create({baseURL:"".concat("https://ironhack-enot.herokuapp.com/api","/note"),withCredentials:!0})},C=a(17),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).openModal=function(){a.setState({open:!0})},a.closeModal=function(){a.setState({open:!1})},a.handleChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(s.a)({},a.state,Object(f.a)({},n,o)))},a.handlePersonToShareNote=function(e){e.preventDefault();var t=a.props.noteId,n=a.state.shareWith;a.noteService.shareNoteDetails(t,n).then(function(){console.log("si quieres pues Ramon")}).catch(function(e){return console.log(e)})},a.state={open:!1,shareWith:""},a.noteService=new S,a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("button",{className:"button",onClick:this.openModal},o.a.createElement("i",{className:"fa fa-share-alt"})),o.a.createElement(C.a,{open:this.state.open,closeOnDocumentClick:!0,onClose:this.closeModal},o.a.createElement("div",{className:"popupStyle"},o.a.createElement("button",{className:"button leftButton",onClick:this.closeModal},o.a.createElement("i",{className:"fa fa-arrow-left","aria-hidden":"true"})),o.a.createElement("h2",null,"With whom do you want to share the note?"),o.a.createElement("form",{onSubmit:this.handlePersonToShareNote},o.a.createElement("input",{type:"text",onChange:function(t){return e.handleChange(t)},name:"shareWith"}),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",value:"Send"})))))}}]),t}(o.a.Component),k=a(18),w=a.n(k),y=a(24),x=a.n(y),_=a(23),M=a.n(_),T=a(102),D=a.n(T),U=(a(21),a(53),a(373),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).openModal=function(){e.setState({open:!0})},e.closeModal=function(){e.setState({open:!1})},e.downloadImage=function(){var e=document.getElementById("imageToSave");w.a.toJpeg(e,{quality:.95}).then(function(e){var t=document.createElement("a");t.download="my-image-name.jpeg",t.href=e,t.click()})},e.downloadSketch=function(){var e=document.getElementById("sketchToSave");w.a.toJpeg(e,{quality:.95}).then(function(e){var t=document.createElement("a");t.download="my-sketch-name.jpeg",t.href=e,t.click()})},e.state={open:!1,note:null},e.noteService=new S,e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.noteService.showNoteDetails(this.props.id).then(function(t){return e.setState(Object(s.a)({},e.state,{note:t}))})}},{key:"componentWillUnmount",value:function(){this.setState(Object(s.a)({},this.state,{note:null}))}},{key:"render",value:function(){x.a.locale("es");var e=this.state.note?o.a.createElement("div",{className:"noteDetailInPopup"},o.a.createElement("button",{className:"button leftButton",onClick:this.closeModal},o.a.createElement("i",{className:"fa fa-arrow-left","aria-hidden":"true"})),o.a.createElement("h3",null,this.state.note.title),o.a.createElement("p",null,x()(this.state.note.created_at).format("D MMM")),o.a.createElement("p",null,M()(this.state.note.noteText)),o.a.createElement("img",{id:"sketchToSave",src:this.state.note.sketch,alt:"",onClick:this.downloadSketch}),o.a.createElement("br",null),o.a.createElement("img",{id:"imageToSave",src:this.state.note.imgPath,alt:"",onClick:this.downloadImage}),o.a.createElement("br",null),o.a.createElement(D.a,{language:this.state.note.snippetLanguage},this.state.note.snippetContent)):o.a.createElement("p",null);return o.a.createElement("div",{className:"showNoteTitle"},o.a.createElement("button",{className:"button",onClick:this.openModal},this.props.title),o.a.createElement(C.a,{open:this.state.open,closeOnDocumentClick:!0,onClose:this.closeModal},o.a.createElement("div",{className:""},e)))}}]),t}(o.a.Component)),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getNotes=function(){a.noteService.showNotes().then(function(e){return a.setState({notes:e})})},a.delete=function(e){a.noteService.deleteNote(e).then(function(){return a.getNotes()})},a.getClass=function(e){var t=["noteLightBlue","noteCoral","noteLightgreen","noteFabada","noteYellow","noteAqua","noteFuxia"];return t[e%t.length]},a.openModal=function(){a.setState(Object(s.a)({},a.state,{open:!0}))},a.closeModal=function(){a.setState(Object(s.a)({},a.state,{open:!1}))},a.state={notes:[],open:!1},a.notes=[],a.noteService=new S,a.getNotes(),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;if(this.state.notes)var t=this.state.notes.map(function(t,a){var n=t._id;return o.a.createElement("div",{className:"noteBoxResponsive col-xs-12 col-sm-6 col-md-2 ".concat(e.getClass(a)),key:t._id},o.a.createElement("div",{className:"showNoteTools"},o.a.createElement("button",{onClick:function(){e.delete(n)}},o.a.createElement("i",{className:"fa fa-trash","aria-hidden":"true"})),o.a.createElement(p.a,{to:"/edit/".concat(t._id)},o.a.createElement("i",{className:"fa fa-edit"})),o.a.createElement(N,{noteId:t._id})),o.a.createElement(U,{id:t._id,title:t.title}),o.a.createElement("div",null,M()(t.noteText)))});return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},t))}}]),t}(o.a.Component),B=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).fetchUser=function(){e.authService.loggedin().then(function(t){return e.setState(Object(s.a)({},e.state,{user:t}))})},e.state={note:null,notes:null},e.authService=new b,e.fetchUser(),e.noteService=new S,e.noteService.showNoteDetails().then(function(t){return e.setState(Object(s.a)({},e.state,{note:t}))}),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.user?o.a.createElement("div",{className:"notesAndCreate"},o.a.createElement("div",{className:"createNote"},o.a.createElement("div",null,o.a.createElement(p.a,{to:"/note/createnote"},"Create note"))),o.a.createElement(L,{user:this.state.user})):o.a.createElement("p",null);return o.a.createElement("div",{className:"notes"},e)}}]),t}(n.Component),F=(a(375),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.user?o.a.createElement("div",{className:"profile"},o.a.createElement("div",{className:"userNamePhoto"},o.a.createElement("img",{src:this.props.user.imgPath,alt:""}),o.a.createElement("p",null,this.props.user.username))):o.a.createElement(g.a,{to:"/"})}}]),t}(n.Component)),I=a(14),P=a(106),W=a(62),q=a.n(W),R=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={color:"#18202e",width:850,height:400,brushRadius:3,lazyRadius:12,sketch:""},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.setInterval(function(){e.setState(Object(s.a)({},e.state,{color:"#18202e"}))},2e3)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{id:"mySketch"},o.a.createElement(P.a,{ref:function(t){return e.saveableCanvas=t},brushColor:this.state.color,brushRadius:this.state.brushRadius,lazyRadius:this.state.lazyRadius,canvasWidth:this.state.width,canvasHeight:this.state.height})),o.a.createElement("div",{className:q.a.tools},o.a.createElement("button",{onClick:function(){var t=document.getElementById("mySketch");w.a.toJpeg(t,{quality:.95}).then(function(t){e.props.onUpdate(t),e.setState(Object(s.a)({},e.state,{sketch:t}))}),localStorage.setItem("savedDrawing",e.saveableCanvas.getSaveData())}},o.a.createElement("i",{className:"fa fa-save"})),o.a.createElement("button",{onClick:function(){e.saveableCanvas.clear()}},o.a.createElement("i",{className:"fa fa-eraser"})),o.a.createElement("button",{onClick:function(){e.saveableCanvas.undo()}},o.a.createElement("i",{className:"fa fa-undo"}))))}}]),t}(o.a.Component),J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onUpdate=function(e){a.props.onUpdate(e),a.setState({sketch:e})},a.state={open:!1,sketch:""},a.openModal=a.openModal.bind(Object(I.a)(Object(I.a)(a))),a.closeModal=a.closeModal.bind(Object(I.a)(Object(I.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"openModal",value:function(){this.setState({open:!0})}},{key:"closeModal",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{className:"button",onClick:this.openModal},o.a.createElement("i",{className:"fa fa-paint-brush"})),o.a.createElement(C.a,{open:this.state.open,closeOnDocumentClick:!0,onClose:this.closeModal},o.a.createElement("div",{className:"popupStyle"},o.a.createElement(R,{onUpdate:this.onUpdate}))))}}]),t}(o.a.Component),A=a(44),z=a.n(A),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).saveSnippet=function(){a.props.onSnippetUpdate(a.state.snippetLanguage?a.state.snippetLanguage:"javascript",a.state.snippetContent),a.setState({snippetLanguage:a.state.snippetLanguage,snippetContent:a.state.snippetContent,open:!1})},a.handleChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(s.a)({},a.state,Object(f.a)({},n,o)))},a.state={open:!1,snippetContent:"",snippetLanguage:""},a.openModal=a.openModal.bind(Object(I.a)(Object(I.a)(a))),a.closeModal=a.closeModal.bind(Object(I.a)(Object(I.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"openModal",value:function(){this.setState({open:!0})}},{key:"closeModal",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("button",{className:"button",onClick:this.openModal},o.a.createElement("i",{className:"fa fa-code"})),o.a.createElement(C.a,{open:this.state.open,closeOnDocumentClick:!0,onClose:this.closeModal},o.a.createElement("div",{className:"popupStyle"},o.a.createElement("button",{className:"button leftButton",onClick:this.closeModal},o.a.createElement("i",{className:"fa fa-arrow-left","aria-hidden":"true"})),o.a.createElement("h2",null,"Add snippet"),o.a.createElement("div",{className:"select"},o.a.createElement("select",{onChange:function(t){return e.handleChange(t)},name:"snippetLanguage"},o.a.createElement("option",{selected:"selected",value:"javascript"},"JavaScript"),o.a.createElement("option",{value:"java"},"Java"),o.a.createElement("option",{value:"python"},"Python"),o.a.createElement("option",{value:"html"},"HTML"))),o.a.createElement("textarea",{onChange:function(t){return e.handleChange(t)},name:"snippetContent"}),o.a.createElement("br",null),o.a.createElement("button",{className:"saveButton",onClick:this.saveSnippet},"Save"))))}}]),t}(o.a.Component),Q=(a(100),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.noteText,o=a.title,c=a.photo,r=a.sketch,i=a.snippet;e.noteService.createNote(o,n,c,r,i).then(function(){e.setState(Object(s.a)({},e.state,{redirect:!0}))}).catch(function(e){return console.log(e)})},e.handleChange=function(t){var a=t.target,n=a.name,o=a.value;"photo"==n?e.setState(Object(s.a)({},e.state,{photo:t.target.files[0]})):e.setState(Object(s.a)({},e.state,Object(f.a)({},n,o)))},e.onUpdate=function(t){e.setState({sketch:t})},e.onSnippetUpdate=function(t,a){e.setState({snippet:{snippetLanguage:t,snippetContent:a}})},e.onNoteTextChange=function(t){e.setState({noteText:t})},e.state={noteText:"",title:"",photo:"",redirect:!1,sketch:"",snippet:{snippetContent:"",snippetLanguage:""}},e.noteService=new S,e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.state&&this.state.redirect?o.a.createElement(g.a,{to:"/notes"}):o.a.createElement("div",{className:"notes"},o.a.createElement("div",{className:"createNoteBox"},o.a.createElement(p.a,{className:"leftButton",to:"/notes"},o.a.createElement("i",{className:"fa fa-arrow-left","aria-hidden":"true"})),o.a.createElement("h2",null,"Create note"),o.a.createElement("form",{onSubmit:this.handleFormSubmit},o.a.createElement("label",{htmlFor:"title"},"Title:"),o.a.createElement("input",{className:"createNoteTitle",type:"text",onChange:function(t){return e.handleChange(t)},name:"title",autofocus:"true"}),o.a.createElement("br",null),o.a.createElement(z.a,{theme:"snow",value:this.state.noteText,onChange:this.onNoteTextChange}),o.a.createElement("input",{type:"file",name:"photo",onChange:function(t){return e.handleChange(t)}}),o.a.createElement("input",{type:"hidden",name:"sketch",value:this.state.sketch}),o.a.createElement("input",{type:"hidden",name:"snippetLanguage",value:this.state.snippet.snippetLanguage}),o.a.createElement("input",{type:"hidden",name:"snippetContent",value:this.state.snippet.snippetContent}),o.a.createElement("input",{type:"submit",value:"Send"})),o.a.createElement("div",{className:"noteTools"},o.a.createElement(J,{onUpdate:this.onUpdate}),o.a.createElement(H,{onSnippetUpdate:this.onSnippetUpdate}))))}}]),t}(n.Component)),V=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).showInForm=function(){e.noteService.showEditDetails().then(function(t){e.setState(Object(s.a)({},e.state,{note:t}))})},e.handleFormSubmit=function(t){t.preventDefault();var a=e.props.match.params.id,n=e.state,o=n.title,c=n.noteText;e.noteService.editNoteDetails(o,c,a).then(function(){e.setState(Object(s.a)({},e.state,{redirect:!0}))}).catch(function(e){return console.log(e)})},e.handleChange=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(s.a)({},e.state,Object(f.a)({},n,o)))},e.onNoteTextChange=function(t){e.setState({noteText:t})},e.state={note:null,noteText:"",title:"",redirect:!1},e.noteService=new S,e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.history.location.pathname),this.noteService=new S,this.noteService.showEditDetails(this.props.history.location.pathname.split("/")[2]).then(function(t){return e.setState(Object(s.a)({},e.state,{note:t,title:t.title,noteText:t.noteText}))})}},{key:"componentWillUnmount",value:function(){this.setState(Object(s.a)({},this.state,{note:null}))}},{key:"render",value:function(){var e=this;if(this.state&&this.state.redirect)return o.a.createElement(g.a,{to:"/notes"});var t=this.state.note?o.a.createElement("div",{className:"createNoteBox"},o.a.createElement(p.a,{className:"leftButton",to:"/notes"},o.a.createElement("i",{className:"fa fa-arrow-left","aria-hidden":"true"})),o.a.createElement("h2",null,"Edit note"),o.a.createElement("form",{onSubmit:this.handleFormSubmit},o.a.createElement("label",{htmlFor:"title"},"Title:"),o.a.createElement("input",{type:"text",className:"createNoteTitle",onChange:function(t){return e.handleChange(t)},oninit:!0,name:"title",defaultValue:this.state.note.title}),o.a.createElement("br",null),o.a.createElement(z.a,{theme:"snow",defaultValue:this.state.note.noteText,onChange:this.onNoteTextChange}),o.a.createElement("input",{type:"submit",value:"Send"}))):o.a.createElement("p",null);return o.a.createElement("div",{className:"notes"},t)}}]),t}(n.Component),G=(a(101),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"homeBody"},o.a.createElement("div",{class:"content"},o.a.createElement("div",{class:"content__container"},o.a.createElement("p",{class:"content__container__text"},"ENOT"),o.a.createElement("ul",{class:"content__container__list"},o.a.createElement("li",{class:"content__container__list__item"},"captures !"),o.a.createElement("li",{class:"content__container__list__item"},"sketch !"),o.a.createElement("li",{class:"content__container__list__item"},"shares !"),o.a.createElement("li",{class:"content__container__list__item"},"everywhere !")))))}}]),t}(o.a.Component)),Y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"homeInfo"},o.a.createElement("div",{className:"logoLine"},o.a.createElement("img",{className:"logoEnot",src:"./logoEnot.png",alt:""})),o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col-xs-12 col-sm-4"},o.a.createElement("div",{class:"box"},o.a.createElement("h2",null,"Capture"),o.a.createElement("p",null,"Capture ideas and inspiration in notes, sketches, and pictures."))),o.a.createElement("div",{class:"col-xs-12 col-sm-4"},o.a.createElement("div",{class:"box"},o.a.createElement("h2",null,"Code snippets"),o.a.createElement("p",null,"Gestiona todo, desde grandes proyectos hasta momentos personales."))),o.a.createElement("div",{class:"col-xs-12 col-sm-4"},o.a.createElement("div",{class:"box"},o.a.createElement("h2",null,"A single place"),o.a.createElement("p",null,"At work, at home, and everywhere in between"))))))}}]),t}(o.a.Component),$=a(485),K=a(486),X=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).downloadImage=function(){var e=document.getElementById("imageToSave");w.a.toJpeg(e,{quality:.95}).then(function(e){var t=document.createElement("a");t.download="my-image-name.jpeg",t.href=e,t.click()})},a.downloadSketch=function(){var e=document.getElementById("sketchToSave");w.a.toJpeg(e,{quality:.95}).then(function(e){var t=document.createElement("a");t.download="my-sketch-name.jpeg",t.href=e,t.click()})},a.state={note:null},a.noteService=new S,a.noteService.showNoteDetails(e.match.params.id).then(function(e){return a.setState(Object(s.a)({},a.state,{note:e}))}),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.unlisten=this.props.history.listen(function(t,a){e.noteService=new S,e.noteService.showNoteDetails(t.pathname.split("/")[2]).then(function(t){return e.setState(Object(s.a)({},e.state,{note:t}))})})}},{key:"componentWillUnmount",value:function(){this.setState(Object(s.a)({},this.state,{note:null}))}},{key:"render",value:function(){x.a.locale("es");var e=this.state.note?o.a.createElement("div",null,o.a.createElement("h3",null,this.state.note.title),o.a.createElement("p",null,x()(this.state.note.created_at).format("D MMM")),o.a.createElement("p",null,M()(this.state.note.noteText)),o.a.createElement("img",{id:"sketchToSave",src:this.state.note.sketch,alt:"",onClick:this.downloadSketch}),o.a.createElement("img",{id:"imageToSave",src:this.state.note.imgPath,alt:"",onClick:this.downloadImage})):o.a.createElement("p",null);return o.a.createElement("div",{className:"modifyNote"},e)}}]),t}(n.Component),Z=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).fetchUser=function(){e.authService.loggedin().then(function(t){return e.setState(Object(s.a)({},e.state,{user:t}))})},e.getUser=function(t){e.setState(Object(s.a)({},e.state,{user:t}))},e.logout=function(){e.authService.logout().then(function(){return e.setState(Object(s.a)({},e.state,{user:null,redirect:!0}))})},e.state={user:null,redirect:!1},e.noteService=new S,e.authService=new b,e.fetchUser(),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.state&&this.state.redirect?o.a.createElement(t,null):o.a.createElement("div",{className:"App"},o.a.createElement(d,{user:this.state.user,logout:this.logout}),o.a.createElement($.a,null,o.a.createElement(K.a,{exact:!0,path:"/",render:function(){return o.a.createElement(G,null)}}),o.a.createElement(K.a,{exact:!0,path:"/signup",render:function(){return o.a.createElement(j,{getUser:e.getUser})}}),o.a.createElement(K.a,{exact:!0,path:"/faq",render:function(){return o.a.createElement(Y,null)}}),o.a.createElement(K.a,{exact:!0,path:"/login",render:function(){return o.a.createElement(O,{getUser:e.getUser})}}),o.a.createElement(K.a,{exact:!0,path:"/notes",render:function(){return o.a.createElement(B,{showNotes:e.showNotes})}}),o.a.createElement(K.a,{exact:!0,path:"/profile",render:function(){return o.a.createElement(F,{user:e.state.user})}}),o.a.createElement(K.a,{exact:!0,path:"/note/createnote",render:function(){return o.a.createElement(Q,null)}}),o.a.createElement(K.a,{path:"/edit/:id",render:function(t){return o.a.createElement(V,Object.assign({user:e.state.user},t))}}),o.a.createElement(K.a,{exact:!0,path:"/notes/:id",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(B,{showNotes:e.showNotes}),o.a.createElement(X,Object.assign({user:e.state.user},t)))}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=a(484);r.a.render(o.a.createElement(ee.a,null,o.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,t,a){},62:function(e,t,a){}},[[107,2,1]]]);
//# sourceMappingURL=main.33ac4416.chunk.js.map