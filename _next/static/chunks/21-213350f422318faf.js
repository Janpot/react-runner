"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21],{7595:function(n,e,t){t.d(e,{ud:function(){return r.ud},pq:function(){return m}});var r=t(4293),o=t(7294),i=t(2062),s=t(5620),u=t(2349);function c(){return(c=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function a(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e.indexOf(t=i[r])>=0||(o[t]=n[t]);return o}const l={plain:{color:"#ffffff",backgroundColor:"#282c34"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#b2b2b2"}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:"#b2b2b2"}},{types:["boolean"],style:{color:"#ff8b50"}},{types:["tag"],style:{color:"#fc929e"}},{types:["string"],style:{color:"#8dc891"}},{types:["punctuation"],style:{color:"#88c6Be"}},{types:["selector","char","builtin","inserted"],style:{color:"#d8dee9"}},{types:["function"],style:{color:"#79b6f2"}},{types:["operator","entity","url","variable"],style:{color:"#d7deea"}},{types:["keyword"],style:{color:"#c5a5c5"}},{types:["class-name"],style:{color:"#fac863"}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"700"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["namespace"],style:{opacity:.7}}]},p=["children","language","theme","padding","noWrapper","noWrap","className","style"],d=n=>{let{children:e,language:t="jsx",theme:r=l,padding:i=10,noWrapper:d,noWrap:f,className:m,style:g}=n,y=a(n,p);return o.createElement(s.ZP,{code:e||"",language:t,Prism:u.Z,theme:r},(n=>{let{className:e,style:t,tokens:r,getLineProps:s,getTokenProps:u}=n;const a=r.map(((n,e)=>o.createElement("div",s({line:n,key:e}),n.map(((n,e)=>o.createElement("span",u({token:n,key:e})))))));return d?a:o.createElement("pre",c({className:m?e+" "+m:e,style:c({},t,{margin:0,padding:i,whiteSpace:f?"pre":"pre-wrap"},g)},y),a)}))},f=["defaultValue","value","language","theme","padding","onChange"],m=n=>{let{defaultValue:e,value:t,language:r="jsx",theme:s=l,padding:u=10,onChange:p}=n,m=a(n,f);const[g,y]=(0,o.useState)(e||""),b=void 0!==t,h=(0,o.useCallback)((n=>o.createElement(d,{language:r,theme:s,noWrapper:!0},n)),[r,s]),v=(0,o.useRef)(p);v.current=p;const x=(0,o.useCallback)((n=>{b||y(n),null==v.current||v.current(n)}),[b]),w=(0,o.useMemo)((()=>c({},s.plain,m.style)),[s.plain,m.style]);return o.createElement(i.Z,c({},m,{padding:u,value:b?t:g,highlight:h,onValueChange:x,style:w}))};(0,o.createContext)({})},4293:function(n,e,t){t.d(e,{ud:function(){return p}});var r=t(7294),o=t(81);function i(){return(i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}const s=/^export default(?=\s+)/m,u=/^render(?=\s*\([^)])/m,c=/^</,a=n=>{const{code:e,scope:t}=n,a=e.trim();if(!a)return null;const l=((n,e)=>{const t=Object.keys(e),r=t.map((n=>e[n]));return new Function(...t,n)(...r)})((n=>(0,o.vs)(n,{transforms:["jsx","typescript"],production:!0}).code)((n=>s.test(n)?n.replace(s,"return"):u.test(n)?n.replace(u,"return"):(n=n.replace(/;$/,""),c.test(n)&&(n="<>"+n+"</>"),"return ("+n+")"))(a)),i({React:r},t));return l?(0,r.isValidElement)(l)?l:"function"==typeof l?(0,r.createElement)(l):"string"==typeof l?(0,r.createElement)(r.Fragment,void 0,l):null:null};class l extends r.Component{constructor(){super(...arguments),this.state={element:null,error:null,prevCode:null}}static getDerivedStateFromProps(n,e){if(e.prevCode===n.code)return null;try{return{element:a(n),error:e.error&&n.code!==e.prevCode?null:e.error,prevCode:n.code}}catch(e){return{element:null,error:e.toString(),prevCode:n.code}}}static getDerivedStateFromError(n){return{error:n.toString()}}componentDidMount(){var n,e,t;null==(n=(e=this.props).onRendered)||n.call(e,null==(t=this.state.error)?void 0:t.toString())}shouldComponentUpdate(n){return n.code!==this.props.code}componentDidUpdate(){var n,e,t;null==(n=(e=this.props).onRendered)||n.call(e,null==(t=this.state.error)?void 0:t.toString())}render(){return this.state.error?null:this.state.element}}const p=n=>{let{code:e,scope:t,disableCache:o}=n;const i=(0,r.useRef)(!0),s=(0,r.useRef)(null),u=(0,r.useRef)(t);u.current=t;const[c,a]=(0,r.useState)((()=>{const n=(0,r.createElement)(l,{code:e,scope:u.current,onRendered:e=>{e?a({element:o?null:s.current,error:e}):s.current=n}});return{element:n,error:null}}));return(0,r.useEffect)((()=>{if(i.current)return void(i.current=!1);const n=(0,r.createElement)(l,{code:e,scope:u.current,onRendered:e=>{e?a({element:o?null:s.current,error:e}):s.current=n}});a({element:n,error:null})}),[e,o]),c}},5453:function(n,e,t){t.d(e,{Nf:function(){return y},ML:function(){return b},ph:function(){return h},MB:function(){return v},jj:function(){return x},aM:function(){return w},v5:function(){return k}});var r=t(5893),o=t(7294),i=t(7379),s=t(4293),u=t(7595);function c(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function a(){var n=c(["\n  display: flex;\n  box-shadow: 0 0 8px 0 lightsteelblue;\n  height: 300px;\n  overflow: hidden;\n\n  @media (max-width: 640px) {\n    flex-direction: column-reverse;\n    height: 480px;\n  }\n"]);return a=function(){return n},n}function l(){var n=c(["\n  flex: 0 1 720px;\n  overflow: auto;\n"]);return l=function(){return n},n}function p(){var n=c(["\n  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;\n  font-size: 14px;\n  white-space: pre;\n  caret-color: #fff;\n  min-width: 100%;\n  min-height: 100%;\n  float: left;\n\n  & > textarea,\n  & > pre {\n    outline: none;\n    white-space: pre !important;\n  }\n"]);return p=function(){return n},n}function d(){var n=c(["\n  flex: 1 1 720px;\n  position: relative;\n  display: flex;\n  background: #fff;\n  overflow: hidden;\n"]);return d=function(){return n},n}function f(){var n=c(["\n  margin: auto;\n  white-space: pre-wrap;\n  max-width: 100%;\n  max-height: 100%;\n  overflow: auto;\n"]);return f=function(){return n},n}function m(){var n=c(["\n  background: #fcc;\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  margin: 0;\n  padding: 10px;\n  color: #f00;\n  white-space: pre-wrap;\n"]);return m=function(){return n},n}var g=i.ZP.div.withConfig({componentId:"sc-ffc2e4e6-0"})(a()),y=i.ZP.div.withConfig({componentId:"sc-ffc2e4e6-1"})(l()),b=(0,i.ZP)(u.pq).withConfig({componentId:"sc-ffc2e4e6-2"})(p()),h=i.ZP.div.withConfig({componentId:"sc-ffc2e4e6-3"})(d()),v=i.ZP.div.withConfig({componentId:"sc-ffc2e4e6-4"})(f()),x=i.ZP.div.withConfig({componentId:"sc-ffc2e4e6-5"})(m()),w=function(n){return n.replace(/^import [^']* from '[^']*'/gm,"")},k=function(n){var e=n.code,t=n.scope,i=n.language,u=(0,o.useState)((e||"").trim()),c=u[0],a=u[1],l=(0,s.ud)({code:w(c),scope:t}),p=l.element,d=l.error;return(0,r.jsxs)(g,{children:[(0,r.jsx)(y,{children:(0,r.jsx)(b,{value:c,language:i,onChange:a})}),(0,r.jsxs)(h,{children:[(0,r.jsx)(v,{children:p}),d&&(0,r.jsx)(x,{children:d})]})]})}},2660:function(n,e,t){t.d(e,{e:function(){return m},$:function(){return g}});var r=t(7294),o=t(7379),i=t(865),s=t(9971);function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function a(){var n=c(['\n    <h2>React Runner</h2>\n    <ul>\n      <li>Inline element(s)</li>\n      <li>Function component</li>\n      <li>\n        Class component, <b>with class fields support</b>\n      </li>\n      <li>\n        Composing components with <b>render</b> or <b>export default</b>\n      </li>\n      <li>\n        Support <b>Typescript</b>\n      </li>\n      <li>Server Side Rendering</li>\n    </ul>\n    <div>\n      <span>Hacker News </span>\n      <a href="#hacker-news">in react-runner</a>\n      <span> vs </span>\n      <a href="https://nihgwu.github.io/react-runner/examples/hacker-news">\n        in real world\n      </a>\n    </div>\n    ']);return a=function(){return n},n}function l(){var n=c(["\n    function Counter() {\n      const [count, setCount] = React.useState(0)\n\n      return (\n        <>\n          <div>{count}</div>\n          <button onClick={() => setCount(count => count + 1)}>+</button>\n          <button onClick={() => setCount(count => count - 1)}>-</button>\n        </>\n      )\n    }\n    "]);return l=function(){return n},n}function p(){var n=c(["\n    class Counter extends React.Component {\n      state = {\n        count: 0,\n      }\n\n      onIncrement = () => {\n        this.setState(({ count }) => ({\n          count: count + 1,\n        }))\n      }\n\n      onDecrement = () => {\n        this.setState(({ count }) => ({\n          count: count - 1,\n        }))\n      }\n\n      render() {\n        return (\n          <div>\n            <div>{this.state.count}</div>\n            <button onClick={this.onIncrement}>+</button>\n            <button onClick={this.onDecrement}>-</button>\n          </div>\n        )\n      }\n    }\n    "]);return p=function(){return n},n}function d(){var n=c(["\n    const Button = styled.button`\n      background: transparent;\n      color: steelblue;\n      border: 2px solid steelblue;\n      margin: 5px 10px;\n      padding: 5px 10px;\n      font-size: 16px;\n      border-radius: 4px;\n\n      ${props => props.primary && css`\n        background: steelblue;\n        color: white;\n      `}\n    `\n\n    export default () => (\n      <>\n        <Button>Normal Button</Button>\n        <Button primary>Primary Button</Button>\n      </>\n    )\n    "],["\n    const Button = styled.button\\`\n      background: transparent;\n      color: steelblue;\n      border: 2px solid steelblue;\n      margin: 5px 10px;\n      padding: 5px 10px;\n      font-size: 16px;\n      border-radius: 4px;\n\n      \\${props => props.primary && css\\`\n        background: steelblue;\n        color: white;\n      \\`}\n    \\`\n\n    export default () => (\n      <>\n        <Button>Normal Button</Button>\n        <Button primary>Primary Button</Button>\n      </>\n    )\n    "]);return d=function(){return n},n}function f(){var n=c(["\n    const Button = styled.button`\n      background: transparent;\n      color: steelblue;\n      border: 2px solid steelblue;\n      margin: 5px 10px;\n      padding: 5px 10px;\n      font-size: 16px;\n      border-radius: 4px;\n\n      ${props => props.primary && css`\n        background: steelblue;\n        color: white;\n      `}\n    `\n\n    render(\n      <>\n        <Button>Normal Button</Button>\n        <Button primary>Primary Button</Button>\n      </>\n    )\n    "],["\n    const Button = styled.button\\`\n      background: transparent;\n      color: steelblue;\n      border: 2px solid steelblue;\n      margin: 5px 10px;\n      padding: 5px 10px;\n      font-size: 16px;\n      border-radius: 4px;\n\n      \\${props => props.primary && css\\`\n        background: steelblue;\n        color: white;\n      \\`}\n    \\`\n\n    render(\n      <>\n        <Button>Normal Button</Button>\n        <Button primary>Primary Button</Button>\n      </>\n    )\n    "]);return f=function(){return n},n}var m=function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){u(n,e,t[e])}))}return n}({},r,{styled:o.ZP,css:o.iv,keyframes:o.F4,createGlobalStyle:o.vJ}),g=[{key:"inline-elements",title:"Inline elements",code:(0,i.FD)(a())},{key:"function-component",title:"Function Component",code:(0,i.FD)(l())},{key:"class-component",title:"Class Component with fields support",code:(0,i.FD)(p())},{key:"export-default",title:"export default Component",code:(0,i.FD)(d())},{key:"render",title:"render(<Component />)",code:(0,i.FD)(f())},{key:"hacker-news",title:"Hacker News (Typescript)",code:s.Z}]},9971:function(n,e){e.Z="import { useState, useEffect } from 'react'\nimport styled from 'styled-components'\n\ntype Item = {\n  id: number\n  title: string\n  points?: number | null\n  user?: string | null\n  time: number\n  time_ago: string\n  comments_count: number\n  type: string\n  url?: string\n  domain?: string\n}\n\nconst getItems = (page: number): Promise<Item[]> =>\n  fetch(`https://api.hnpwa.com/v0/news/${page}.json`)\n    .then((response) => response.json())\n    .catch()\n\nconst Link = styled.a`\n  color: steelblue;\n  text-decoration: none;\n`\n\nconst Meta = styled.span`\n  color: gray;\n  font-size: small;\n\n  & + &::before {\n    content: '|';\n    margin: 8px;\n  }\n`\n\nconst Item = ({ item }: { item: Item }) => (\n  <li>\n    <Link href={item.url} target=\"_blank\" rel=\"noopener noreferrer\">\n      {item.title}\n    </Link>\n    <div>\n      <Meta>{item.points} points</Meta>\n      <Meta>\n        by {item.user} {item.time_ago}\n      </Meta>\n      <Meta>{item.comments_count} comments</Meta>\n    </div>\n  </li>\n)\n\nconst Ul = styled.ul`\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  gap: 8px;\n`\n\nconst List = ({ page }: { page: number }) => {\n  const [items, setItems] = useState<Item[] | null>(null)\n\n  useEffect(() => {\n    getItems(page).then(setItems)\n  }, [page])\n\n  if (!items) return <Meta>loading...</Meta>\n  return (\n    <Ul>\n      {items.map((item) => (\n        <Item key={item.id} item={item} />\n      ))}\n    </Ul>\n  )\n}\n\nconst Container = styled.div`\n  padding: 16px;\n  max-width: 640px;\n  margin: auto;\n  background: white;\n`\n\nconst Header = styled.header`\n  height: 48px;\n  position: sticky;\n  top: 0;\n  background: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n`\n\nconst Button = styled.button`\n  background: none;\n  border: none;\n`\n\nexport default function App() {\n  const [page, setPage] = useState(1)\n\n  return (\n    <Container>\n      <Header>\n        <h2>Hacker News</h2>\n        <div>\n          <Button disabled={page === 1} onClick={() => setPage(page - 1)}>\n            prev\n          </Button>\n          <Meta> {page} / 10 </Meta>\n          <Button disabled={page >= 10} onClick={() => setPage(page + 1)}>\n            next\n          </Button>\n        </div>\n      </Header>\n      <List page={page} />\n    </Container>\n  )\n}\n"}}]);