(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n.n(a),o=n(6),s=n.n(o),i=n(3),u=n(4),l=n(5),b=n(16),j=n.n(b),d=n(7),O=n(19),f=n(2),m=n(17),h=n.n(m),p={addContact:Object(u.b)("contacts/addContact",(function(e,t){return{payload:{id:h.a.generate(),name:e,number:t}}})),deleteContact:Object(u.b)("contacts/deleteContact"),filterContacts:Object(u.b)("contacts/filterContacts")},x=Object(u.c)([],(c={},Object(d.a)(c,p.addContact,(function(e,t){return[].concat(Object(O.a)(e),[t.payload])})),Object(d.a)(c,p.deleteContact,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),c)),C=Object(u.c)("",Object(d.a)({},p.filterContacts,(function(e,t){return t.payload}))),v=Object(f.b)({contacts:x,filter:C}),N={key:"root",storage:j.a},g=Object(l.g)(N,v),y=Object(u.a)({reducer:g,middleware:Object(u.d)({serializableCheck:{ignoredActions:[l.a,l.f,l.b,l.c,l.d,l.e]}}),devTools:!0}),k={store:y,persistor:Object(l.h)(y)},w=n(18),A=(n(40),n(1)),z=function(e){var t=e.children;return Object(A.jsx)("div",{className:"container",children:t})},L=n(13),S=function(e){return e.contacts},J=function(e){return e.filter},Z=function(e){var t=S(e),n=J(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},q=n(14);n(42);var B=function(){var e=Object(a.useState)(""),t=Object(L.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(L.a)(r,2),s=o[0],u=o[1],l=Object(i.c)(S),b=Object(i.b)(),j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":u(a);break;default:return}};return Object(A.jsxs)("form",{id:"contact",className:"form",onSubmit:function(e){e.preventDefault(),!function(e){return l.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))}(n)?!function(e){return l.find((function(t){return t.number===e}))}(s)?(b(p.addContact(n,s)),c(""),u("")):q.a.info("\ud83e\udd14 ".concat(s," is already in use"),{autoClose:2500}):q.a.info("'".concat(n,"' is already in use!"),{autoClose:2500})},children:[Object(A.jsxs)("label",{children:[Object(A.jsx)("p",{className:"title",children:"Name:"}),Object(A.jsx)("input",{className:"input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:j})]}),Object(A.jsxs)("label",{children:[Object(A.jsx)("p",{className:"title",children:"Number:"}),Object(A.jsx)("input",{className:"input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:s,onChange:j})]}),Object(A.jsx)("button",{className:"button",type:"submit",children:"Add contact"})]})};n(43);var D=function(){var e=Object(i.c)(J),t=Object(i.b)();return Object(A.jsx)("input",{className:"input",type:"text",name:"filter",onChange:function(e){return t(p.filterContacts(e.target.value))},value:e,placeholder:"search contact"})};n(44);var M=function(){var e=Object(i.c)(Z),t=Object(i.b)();return Object(A.jsx)("ul",{className:"list",children:e.map((function(e){return Object(A.jsxs)("li",{children:[Object(A.jsxs)("p",{className:"title",children:["Name: ",e.name]}),Object(A.jsxs)("p",{className:"title",children:["Number: ",e.number]}),Object(A.jsx)("button",{className:"button",onClick:function(){return t(p.deleteContact(e.id))},type:"button",children:"Delete"})]},e.id)}))})};var E=function(){return Object(A.jsxs)(z,{children:[Object(A.jsx)("h1",{children:"Phonebook"}),Object(A.jsx)(B,{}),Object(A.jsx)("h2",{children:"Contacts"}),Object(A.jsx)(D,{}),Object(A.jsx)(M,{})]})};n(45);s.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(i.a,{store:k.store,children:Object(A.jsx)(w.a,{loading:null,persistor:k.persistor,children:Object(A.jsx)(E,{})})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.9f0809a6.chunk.js.map