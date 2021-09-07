(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{55:function(n,e,t){},98:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"fetchContacts",(function(){return P})),t.d(r,"addContact",(function(){return $})),t.d(r,"deleteContact",(function(){return G}));var a={};t.r(a),t.d(a,"getFilter",(function(){return K})),t.d(a,"getIsLoading",(function(){return Q})),t.d(a,"getContacts",(function(){return X})),t.d(a,"getVisibleContacts",(function(){return Y}));var o,c,i,s,l,d=t(0),u=t.n(d),p=t(20),f=t.n(p),b=t(5),j=(t(55),t(9)),x=t(2),h=t(3),m=h.a.section(o||(o=Object(x.a)(["\n  padding: 40px 0;\n"]))),g=h.a.h2(c||(c=Object(x.a)(["\n  margin: 0 auto 50px;\n  text-transform: capitalize;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 50px;\n  text-align: center;\n  color: #727273;\n"]))),v=t(1),O=function(n){var e=n.title,t=n.children;return Object(v.jsxs)(m,{children:[e&&Object(v.jsxs)(g,{children:[Object(v.jsx)(j.a,{}),e]}),t]})},y=h.a.div(i||(i=Object(x.a)(["\n  width: 900px;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  padding: 30px;\n  border-radius: 20px;\n  box-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec040;\n  background-color: #f0f0f3;\n  & h1,\n  h2 {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #727273;\n    font-size: 28px;\n    margin-bottom: 50px;\n    margin-top: 0;\n    & svg {\n      margin-right: 15px;\n      color: #727273;\n    }\n  }\n"]))),k=h.a.div(s||(s=Object(x.a)(["\n  width: 450px;\n"]))),w=h.a.div(l||(l=Object(x.a)(["\n  width: 450px;\n"]))),C=function(n){var e=n.children;return Object(v.jsx)(y,{children:e})},z=t(33),L=t(32),F=t.n(L),A=t(7),B=t.n(A),M=t(13),S=t(10),V=t(45),N=t(46),T=t(18),q=t.n(T);q.a.defaults.baseURL="https://61156ec88f38520017a384ea.mockapi.io";var I,J,R,U,W,Z,E,D=function(){function n(){Object(V.a)(this,n)}return Object(N.a)(n,null,[{key:"fetchContacts",value:function(){var n=Object(M.a)(B.a.mark((function n(){var e,t;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q.a.get("/contacts");case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"addContact",value:function(){var n=Object(M.a)(B.a.mark((function n(e){var t,r;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q.a.post("/contacts",e);case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"deleteContact",value:function(){var n=Object(M.a)(B.a.mark((function n(e){return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q.a.delete("/contacts/".concat(e));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}]),n}(),P=Object(S.b)("contacts/getContacts",function(){var n=Object(M.a)(B.a.mark((function n(e,t){var r,a;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.rejectWithValue,n.prev=1,n.next=4,D.fetchContacts();case 4:return a=n.sent,n.abrupt("return",a);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return",r(n.t0.message));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}()),$=Object(S.b)("contacts/addContact",function(){var n=Object(M.a)(B.a.mark((function n(e,t){var r,a;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.rejectWithValue,n.prev=1,n.next=4,D.addContact(e);case 4:return a=n.sent,n.abrupt("return",a);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return",r(n.t0.message));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}()),G=Object(S.b)("contacts/deleteContact",function(){var n=Object(M.a)(B.a.mark((function n(e,t){var r;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.rejectWithValue,n.prev=1,n.next=4,D.deleteContact(e);case 4:return n.abrupt("return",e);case 7:return n.prev=7,n.t0=n.catch(1),n.abrupt("return",r(n.t0.message));case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(e,t){return n.apply(this,arguments)}}()),H=t(21),K=function(n){return n.contacts.filter},Q=function(n){return n.contacts.isLoading},X=function(n){return n.contacts.items},Y=Object(H.a)([X,K],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())||n.number.includes(e)}))})),_=t(17),nn=t.n(_),en=h.a.form(I||(I=Object(x.a)(["\n  margin: 0 auto 50px;\n"]))),tn=h.a.label(J||(J=Object(x.a)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  left: 0;\n  bottom: 5px;\n  margin-bottom: 10px;\n  cursor: text;\n  font-size: 20px;\n  color: var(--grey);\n\n  transition: color 250ms ease, transform 250ms ease;\n\n  & svg {\n    margin-right: 10px;\n    font-weight: 500;\n    transition: color 250ms ease, transform 250ms ease;\n  }\n"]))),rn=h.a.input(R||(R=Object(x.a)(["\n  display: block;\n  width: 100%;\n  height: 50px;\n  padding-left: 30px;\n  border: none;\n  border-bottom: 1px solid var(--dark);\n  font-size: 20px;\n  color: var(--dark);\n  background-color: transparent;\n\n  &::placeholder {\n    opacity: 0;\n    color: var(--dark);\n    font-weight: 700;\n    transition: opacity 250ms ease;\n  }\n\n  &:focus {\n    outline: none;\n    border-color: var(--dark);\n    &::placeholder {\n      opacity: 0.7;\n      font-weight: 700;\n      transition-delay: 250ms;\n    }\n  }\n\n  &:focus + label,\n  &:not(:placeholder-shown) + label {\n    font-size: 0;\n    color: var(--dark);\n    & svg {\n      font-weight: 700;\n      color: var(--dark);\n    }\n  }\n"]))),an=h.a.button(U||(U=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 5px 10px;\n  cursor: pointer;\n  border: 1px solid #f0f0f3;\n  box-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec040;\n  border-radius: 20px;\n  font-size: 20px;\n  text-transform: uppercase;\n  color: var(--dark);\n  background-color: transparent;\n  transition: all 250ms ease-in-out;\n  &:hover {\n    transform: scale(1.2);\n  }\n  & svg {\n    margin-right: 10px;\n  }\n"]))),on=h.a.div(W||(W=Object(x.a)(["\n  position: relative;\n  width: 400px;\n  margin-bottom: 50px;\n"]))),cn=function(){var n=Object(d.useState)(""),e=Object(z.a)(n,2),t=e[0],o=e[1],c=Object(d.useState)(""),i=Object(z.a)(c,2),s=i[0],l=i[1],u=Object(b.b)(),p=Object(b.c)(a.getContacts),f=nn()(),x=nn()(),h=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":o(r);break;case"number":l(r);break;default:return}};return Object(v.jsxs)(en,{onSubmit:function(n){n.preventDefault(),function(n,e,t){var r=n.find((function(n){return n.name.toLowerCase()===e.toLowerCase()})),a=n.find((function(n){return n.number.replace(/[^0-9]/g,"")===t.replace(/[^0-9]/g,"")}));return r?(F.a.fire({position:"center",icon:"error",title:"".concat(e.toUpperCase(),"\nis already in contacts!"),confirmButtonColor:"indianred"}),r):a?(F.a.fire({position:"center",icon:"error",title:"This number is already in contacts as\n".concat(a.name.toUpperCase()),confirmButtonColor:"indianred"}),a):void 0}(p,t,s)||(u(r.addContact({name:t,number:s})),o(""),l(""))},action:"",children:[Object(v.jsxs)(on,{children:[Object(v.jsx)(rn,{onChange:h,id:f,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Name",autoComplete:"off",maxLength:"40",required:!0}),Object(v.jsxs)(tn,{htmlFor:f,children:[Object(v.jsx)(j.h,{size:"25"}),"Name"]})]}),Object(v.jsxs)(on,{children:[Object(v.jsx)(rn,{onChange:h,id:x,type:"tel",name:"number",value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"111-11-11",autoComplete:"off",maxLength:"15",required:!0}),Object(v.jsxs)(tn,{htmlFor:x,children:[Object(v.jsx)(j.d,{size:"25"}),"Number"]})]}),Object(v.jsxs)(an,{type:"submit",children:[Object(v.jsx)(j.f,{}),"Add contact"]})]})},sn=t(27),ln=t.n(sn),dn=h.a.li(Z||(Z=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  width: 440px;\n  font-size: 20px;\n  margin: 0 auto;\n  padding: 10px 5px;\n  & span {\n    display: inline-flex;\n    align-items: center;\n    font-weight: 600;\n    color: var(--grey);\n    &:first-of-type {\n      color: var(--dark);\n      margin-right: 10px;\n    }\n    & svg {\n      margin-right: 15px;\n      color: var(--dark);\n    }\n  }\n  & svg {\n    color: var(--dark);\n  }\n"]))),un=h.a.button(E||(E=Object(x.a)(["\n  display: block;\n  margin-left: auto;\n  margin-right: 10px;\n  font-size: 16px;\n  padding: 5px;\n  color: var(--dark);\n  border: none;\n  border-radius: 20px;\n  cursor: pointer;\n  background-color: transparent;\n  transition: all 250ms ease;\n  &:hover {\n    border: 1px solid var(--dark);\n  }\n"])));un.propTypes={onClick:ln.a.func.isRequired};var pn,fn,bn,jn,xn=function(n){var e=n.name,t=n.number,r=n.onClick;return Object(v.jsxs)(dn,{children:[Object(v.jsxs)("span",{children:[Object(v.jsx)(j.g,{size:"20"}),e,":"]}),Object(v.jsx)("span",{children:t}),Object(v.jsx)(un,{onClick:r,children:"delete"})]})},hn=h.a.ul(pn||(pn=Object(x.a)(["\n  border-radius: 4px;\n  overflow: hidden;\n"]))),mn=function(){var n=Object(b.c)(a.getVisibleContacts),e=Object(b.b)();return Object(v.jsx)(hn,{children:n.map((function(n){var t=n.name,a=n.number,o=n.id;return Object(v.jsx)(xn,{name:t,number:a,id:o,onClick:function(){return e(r.deleteContact(o))}},o)}))})},gn=Object(S.c)({name:"contacts",initialState:{items:[],filter:"",isLoading:!1,error:null},reducers:{changeFilter:function(n,e){n.filter=e.payload}},extraReducers:function(n){n.addCase(P.fulfilled,(function(n,e){n.items=e.payload})).addCase($.fulfilled,(function(n,e){n.items.push(e.payload)})).addCase(G.fulfilled,(function(n,e){n.items=n.items.filter((function(n){return n.id!==e.payload}))})).addMatcher(Object(S.d)(P.pending,$.pending,G.pending),(function(n){n.isLoading=!0,n.error=null})).addMatcher(Object(S.d)(P.fulfilled,$.fulfilled,G.fulfilled,P.rejected,$.rejected,G.rejected),(function(n){n.isLoading=!1})).addMatcher(Object(S.d)(P.rejected,$.rejected,G.rejected),(function(n,e){n.error=e.payload,console.error(e.payload)}))}}),vn=gn.actions.changeFilter,On=gn.reducer,yn=h.a.label(fn||(fn=Object(x.a)(["\n  position: absolute;\n  left: 0;\n  bottom: 5px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n  cursor: text;\n  font-size: 20px;\n  color: var(--grey);\n\n  transition: color 250ms ease-in-out, transform 250ms ease-in-out;\n  & svg {\n    margin-right: 10px;\n    transition: color 250ms ease-in-out, transform 250ms ease-in-out;\n  }\n"]))),kn=h.a.input(bn||(bn=Object(x.a)(["\n  display: block;\n  width: 100%;\n  height: 50px;\n  margin-bottom: 30px;\n  padding-left: 40px;\n  border: none;\n  border-bottom: 1px solid var(--dark);\n  font-size: 20px;\n  color: var(--dark);\n  background-color: transparent;\n  transition: all 250ms ease-in-out;\n  &::placeholder {\n    opacity: 0;\n    color: var(--dark);\n    transition: opacity 250ms ease;\n  }\n  &:focus {\n    outline: none;\n    border-bottom: 1px solid var(--dark);\n    &::placeholder {\n      opacity: 0.7;\n      transition-delay: 250ms;\n    }\n  }\n  &:focus + label,\n  &:not(:placeholder-shown) + label {\n    font-size: 0;\n    text-transform: uppercase;\n    font-weight: 600;\n    color: var(--dark);\n    & svg {\n      color: var(--dark);\n    }\n  }\n"]))),wn=h.a.div(jn||(jn=Object(x.a)(["\n  position: relative;\n  width: 400px;\n  margin-bottom: 25px;\n"]))),Cn=function(){var n=nn()(),e=Object(b.c)(a.getFilter),t=Object(b.b)();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(wn,{children:[Object(v.jsx)(kn,{id:n,name:"filter",onChange:function(n){return t(vn(n.target.value))},type:"text",value:e,placeholder:"Name"}),Object(v.jsxs)(yn,{htmlFor:n,children:[Object(v.jsx)(j.c,{size:"30"}),"Find contact by name"]})]})})},zn=t(47),Ln=t.n(zn),Fn=t(22);var An=Object(Fn.a)("div",{target:"e15zyvaz0"})({name:"jd0tk2",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;pointer-events:none"}),Bn=function(n){var e=n.loading;return Object(v.jsx)(An,{children:Object(v.jsx)(Ln.a,{loading:e,color:"#727273",size:400})})},Mn=function(){var n=Object(b.c)(a.getContacts),e=Object(b.c)(a.getIsLoading),t=Object(b.b)();return Object(d.useEffect)((function(){t(r.fetchContacts())}),[t]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(O,{title:"Phone Book",children:Object(v.jsxs)(C,{children:[Object(v.jsxs)(w,{children:[Object(v.jsxs)("h1",{children:[Object(v.jsx)(j.e,{})," Add Contact"]}),Object(v.jsx)(cn,{})]}),Object(v.jsxs)(k,{children:[Object(v.jsxs)("h2",{children:[Object(v.jsx)(j.b,{}),"Contacts"]}),Object(v.jsx)(Cn,{}),n.length>0&&Object(v.jsx)(mn,{})]})]})}),Object(v.jsx)(Bn,{loading:e})]})},Sn=Object(S.a)({reducer:{contacts:On},devTools:!1});f.a.render(Object(v.jsx)(u.a.StrictMode,{children:Object(v.jsx)(b.a,{store:Sn,children:Object(v.jsx)(Mn,{})})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.76186e14.chunk.js.map