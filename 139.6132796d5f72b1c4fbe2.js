"use strict";(self.webpackChunkcurrencyTracker=self.webpackChunkcurrencyTracker||[]).push([[139],{1689:(n,e,t)=>{t.d(e,{R:()=>a,S:()=>c});var r=t(2861),o="FEaGrWR8uCP7H6M0akI2QHOlNV9ruqrluTSfjA7L",i=r.Z.create({headers:{"X-CoinAPI-Key":"5441514E-9326-458D-BC01-80B01773CC05"},baseURL:"https://rest.coinapi.io/v1/ohlcv/"}),a={getCurrency:function(){return r.Z.get("https://api.currencyapi.com/v3/latest?apikey=".concat(o,"&currencies=EUR%2CUSD%2CCAD%2CAUD%2CTRY%2CARS%2CJPY%2CCNY%2CBTC%2CETH")).then((function(n){return n.data}))},getConversion:function(n,e){return i.get("https://api.currencyapi.com/v3/latest?apikey=".concat(o,"&currencies=").concat(e,"&base_currency=").concat(n)).then((function(n){return n.data}))},getCurrencyDayData:function(n,e){return i.get("BITSTAMP_SPOT_".concat(n,"_USD/history?period_id=1DAY&time_start=").concat(e,"T00:00:00&time_end=").concat(e,"T23:59:59")).then((function(n){return n.data}))},getCurrencyMonthData:function(n,e){return i.get("BITSTAMP_SPOT_".concat(n,"_USD/history?period_id=1DAY&time_start=").concat(e,"T00:00:00")).then((function(n){return n.data}))}},c={getBanks:function(n){var e=n.longitude,t=n.latitude;return r.Z.get("https://api.foursquare.com/v3/places/search?ll=".concat(t,"%2C").concat(e,"&radius=60000&categories=11045&limit=50"),{headers:{Authorization:"fsq3HyolGsCqtDGga8fBMoz3nQpZgcyohztGHWTmFA9gibI="}}).then((function(n){return n.data}))}}},6235:(n,e,t)=>{t.d(e,{d:()=>u});var r=t(5893),o=t(7294),i=t(6799),a=t(3916),c=t(794),s=t(5957),u=(0,o.memo)((function(n){var e=n.currencies,t=n.currencyForValue,o=(0,i.T)();return(0,r.jsx)(a.P0,{"data-cy":"currencyCard","data-testid":"currencyCard",children:e.map((function(n,e){return(0,r.jsxs)(a.zr,{onClick:function(){return function(n){o((0,s.nm)(n)),o((0,c.tY)(!0))}(n.name)},"data-cy":"currencyItem",children:[(0,r.jsx)(a.pP,{src:n.img,alt:n.name}),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(a.ll,{"data-cy":"currencyTitle",children:n.name}),t&&(0,r.jsx)(a.tg,{children:null==t?void 0:t.data[n.code].value})]})]},e)}))})}))},1078:(n,e,t)=>{t.d(e,{V:()=>g});var r,o,i,a,c,s=t(5893),u=t(7294),l=t(394),d=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},p=l.ZP.div(r||(r=d(["\n  position: relative;\n  width: 200px;\n  font-family: ",";\n"],["\n  position: relative;\n  width: 200px;\n  font-family: ",";\n"])),(function(n){return n.theme.fonts[0]})),f=l.ZP.div(o||(o=d(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: ",";\n  border: 1px solid ",";\n  border-radius: 5px;\n  cursor: pointer;\n  height: 25px;\n"],["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: ",";\n  border: 1px solid ",";\n  border-radius: 5px;\n  cursor: pointer;\n  height: 25px;\n"])),(function(n){return n.theme.indentation.i10}),(function(n){return n.theme.usedColors.grayMoreOpacity})),h=l.ZP.div(i||(i=d(["\n  width: 0;\n  height: 0;\n  border-top: 5px solid ",";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  transition: transform 0.2s ease-in-out;\n\n  transform: ",";\n"],["\n  width: 0;\n  height: 0;\n  border-top: 5px solid ",";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  transition: transform 0.2s ease-in-out;\n\n  transform: ",";\n"])),(function(n){return n.theme.colors.fontColor}),(function(n){return n.open?"rotate(180deg)":""})),y=l.ZP.div(a||(a=d(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  z-index: 5;\n  max-height: 100px;\n  overflow-y: auto;\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  border-top: none;\n  border-radius: 0 0 5px 5px;\n  box-shadow: 0 2px 4px ",";\n  opacity: ",";\n  visibility: ",";\n  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;\n\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: ",";\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: ",";\n  }\n\n  &::-webkit-scrollbar-thumb:hover {\n    background-color: ",";\n  }\n"],["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  z-index: 5;\n  max-height: 100px;\n  overflow-y: auto;\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  border-top: none;\n  border-radius: 0 0 5px 5px;\n  box-shadow: 0 2px 4px ",";\n  opacity: ",";\n  visibility: ",";\n  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;\n\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: ",";\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: ",";\n  }\n\n  &::-webkit-scrollbar-thumb:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.usedColors.black}),(function(n){return n.theme.usedColors.white}),(function(n){return n.theme.usedColors.grayMoreOpacity}),(function(n){return n.theme.usedColors.blackOpacity}),(function(n){return n.open?1:0}),(function(n){return n.open?"visible":"hidden"}),(function(n){return n.theme.usedColors.grayOpacity}),(function(n){return n.theme.usedColors.grayMoreOpacity}),(function(n){return n.theme.usedColors.grayOpacity})),m=l.ZP.div(c||(c=d(["\n  padding: ",";\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n  }\n"],["\n  padding: ",";\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.indentation.i10}),(function(n){return n.theme.usedColors.grayMoreOpacity})),g=function(n){var e=n.options,t=n.value,r=n.onChange,o=(0,u.useState)(!1),i=o[0],a=o[1],c=e.find((function(n){return n.name===t}));return(0,s.jsxs)(p,{"data-testid":"currencySelect","data-cy":"currencySelect",children:[(0,s.jsxs)(f,{onClick:function(){a(!i)},"data-cy":"selectOptions",children:[null==c?void 0:c.name,(0,s.jsx)(h,{open:i})]}),(0,s.jsx)(y,{open:i,"data-cy":"selectOption",children:e.map((function(n){return(0,s.jsx)(m,{onClick:function(){return function(n){r(n.name),a(!1)}(n)},children:n.name},n.name)}))})]})}},8685:(n,e,t)=>{t.d(e,{Q:()=>u});var r,o,i,a=t(5893),c=t(7294),s=t(394).ZP.div(r||(o=["\n  width: 100%;\n  text-align: center;\n"],i=["\n  width: 100%;\n  text-align: center;\n"],Object.defineProperty?Object.defineProperty(o,"raw",{value:i}):o.raw=i,r=o)),u=(0,c.memo)((function(n){var e=n.error;return(0,a.jsxs)(s,{children:["Ops, something went wrong...",e]})}))},5284:(n,e,t)=>{t.r(e),t.d(e,{default:()=>wn});var r,o,i,a,c,s,u=t(5893),l=t(7294),d=t(6113),p=t(8685),f=t(5376),h=t(5512),y=t(745),m=t(394),g=t(4911),b=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},x=m.ZP.div(r||(r=b(["\n  pointer-events: all;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  top: 10%;\n  left: 0;\n  transition: 0.4s;\n  z-index: 3;\n"],["\n  pointer-events: all;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  top: 10%;\n  left: 0;\n  transition: 0.4s;\n  z-index: 3;\n"]))),v=m.ZP.div(o||(o=b(["\n  max-width: 70vw;\n  max-height: 20vh;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 20px;\n  pointer-events: all;\n  background-color: ",";\n  transition: 0.4s;\n"],["\n  max-width: 70vw;\n  max-height: 20vh;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 20px;\n  pointer-events: all;\n  background-color: ",";\n  transition: 0.4s;\n"])),g.ck.green),C=(i=function(n,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},i(n,e)},function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=n}i(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),w=function(n){function e(){var e=null!==n&&n.apply(this,arguments)||this;return e.root=document.getElementById("pop-root"),e}return C(e,n),e.prototype.componentDidMount=function(){var n=this;setTimeout((function(){(0,y.s)(n.root).unmount()}),3e3)},e.prototype.renderComponent=function(){(0,y.s)(this.root).render((0,u.jsx)(e,{}))},e.prototype.render=function(){return(0,u.jsx)(x,{children:(0,u.jsx)(v,{"data-cy":"chartPopUp",children:"The chart with the data for the past month was successfully built"})})},e}(l.Component),_=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},n(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),k=function(){function n(n){this.observers=[],this.data=n}return n.prototype.processData=function(){this.notifyObservers()},n.prototype.registerObserver=function(n){this.observers.push(n)},n.prototype.removeObserver=function(n){var e=this.observers.indexOf(n);-1!==e&&this.observers.splice(e,1)},n.prototype.notifyObservers=function(){for(var n=0,e=this.observers;n<e.length;n++)e[n].update()},n}(),j=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return _(e,n),e.prototype.update=function(){new w({}).renderComponent()},e}(function(){function n(n){this.subject=n,this.subject.registerObserver(this)}return n.prototype.unsubscribe=function(){this.subject.removeObserver(this)},n}()),O=t(6799),P=t(3037),T=t(5189),D=m.ZP.div(a||(c=["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 50vh;\n  width: 100%;\n  background-color: ",";\n"],s=["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 50vh;\n  width: 100%;\n  background-color: ",";\n"],Object.defineProperty?Object.defineProperty(c,"raw",{value:s}):c.raw=s,a=c),(function(n){return n.theme.usedColors.lightGreen}));h.kL.register(h.uw,h.f$,h.ZL,h.Dx,h.u,h.De);var E,S,R,A,Z,M,z,I,N,Y=(0,l.memo)((function(n){var e=n.dataChart,t=n.code,r=(0,O.C)(P.hU),o=function(n,e){var t={datasets:[{label:"".concat(e," / USD"),data:n&&(null==n?void 0:n.map((function(n){var e=n.time_close,t=n.price_open,r=n.price_high,o=n.price_low,i=n.price_close;return{x:e.slice(0,10),o:t,h:r,l:o,c:i,s:[t,i]}}))),backgroundColor:function(n){var e=n.raw,t=e.o,r=e.c;return"".concat(r>=t?g.ck.greenChart:g.ck.red)},barPercentage:1,maxBarThickness:20,minBarLength:7,borderColor:"".concat(g.ck.black),borderWidth:2,borderSkipped:!1}]},r={id:"candlestick",beforeDatasetDraw:function(n,e){var r=n.ctx,o=n.scales,i=(o.x,o.y);r.save(),r.lineWidth=2,r.strokeStyle="".concat(g.ck.black),t.datasets[0].data.forEach((function(e,o){var a,c,s,u;r.beginPath(),r.moveTo(n.getDatasetMeta(0).data[o].x,n.getDatasetMeta(0).data[o].y),r.lineTo(n.getDatasetMeta(0).data[o].x,i.getPixelForValue(null===(c=null===(a=null==t?void 0:t.datasets[0])||void 0===a?void 0:a.data[o])||void 0===c?void 0:c.h)),r.stroke(),r.beginPath(),r.moveTo(n.getDatasetMeta(0).data[o].x,n.getDatasetMeta(0).data[o].y),r.lineTo(n.getDatasetMeta(0).data[o].x,i.getPixelForValue(null===(u=null===(s=null==t?void 0:t.datasets[0])||void 0===s?void 0:s.data[o])||void 0===u?void 0:u.l)),r.stroke()}))}};return{data:t,options:{responsive:!0,devicePixelRatio:20,maintainAspectRatio:!1,parsing:{xAxisKey:"x",yAxisKey:"s"},scales:{x:{stacked:!0,grid:{offset:!0}},y:{stacked:!0,beginAtZero:!1,grace:"80%",grid:{offset:!0}}}},plugins:[r]}}(e,t);return(0,l.useEffect)((function(){var n=new k(e),t=new j(n);return r===T.z.Month&&e&&n.processData(),function(){t.unsubscribe()}}),[r,e]),(0,u.jsx)(D,{"data-cy":"barChat","data-testid":"barChat",children:(0,u.jsx)(f.$Q,{data:o.data,options:o.options,plugins:o.plugins})})})),L=t(6235),U=t(1078),F=function(n){return{type:"CURRENCY/SET_DAY_TIMELINE",payload:{day:n}}},B=function(n){return{type:"CURRENCY/SET_DATA_CHART_TIMELINE",payload:{data:n}}},$=function(n){void 0===n&&(n=T.z.Day);var e=new Date,t=n===T.z.Month?"0".concat(e.getMonth()).slice(-2):"0".concat(e.getMonth()+1).slice(-2),r="0".concat(e.getDate()-1).slice(-2),o=e.getFullYear(),i=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),a=Array.from({length:i},(function(n,e){return(e+1).toString()})).filter((function(n){return parseInt(n,10)<e.getDate()}));return{day:r,month:t,year:o,pastDaysArr:a}},q=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},V=m.ZP.div(E||(E=q(["\n  position: relative;\n  width: 200px;\n  font-family: ",";\n"],["\n  position: relative;\n  width: 200px;\n  font-family: ",";\n"])),(function(n){return n.theme.fonts[0]})),H=m.ZP.div(S||(S=q(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: ",";\n  border: 1px solid ",";\n  border-radius: 5px;\n  cursor: pointer;\n  height: 25px;\n"],["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: ",";\n  border: 1px solid ",";\n  border-radius: 5px;\n  cursor: pointer;\n  height: 25px;\n"])),(function(n){return n.theme.indentation.i10}),(function(n){return n.theme.usedColors.grayMoreOpacity})),Q=m.ZP.div(R||(R=q(["\n  width: 0;\n  height: 0;\n  border-top: 5px solid ",";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  transition: transform 0.2s ease-in-out;\n\n  transform: ",";\n"],["\n  width: 0;\n  height: 0;\n  border-top: 5px solid ",";\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  transition: transform 0.2s ease-in-out;\n\n  transform: ",";\n"])),(function(n){return n.theme.colors.fontColor}),(function(n){return n.open?"rotate(180deg)":""})),G=m.ZP.div(A||(A=q(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  z-index: 5;\n  max-height: 100px;\n  overflow-y: auto;\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  border-top: none;\n  border-radius: 0 0 5px 5px;\n  box-shadow: 0 2px 4px ",";\n  opacity: ",";\n  visibility: ",";\n  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;\n\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: ",";\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: ",";\n  }\n\n  &::-webkit-scrollbar-thumb:hover {\n    background-color: ",";\n  }\n"],["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  z-index: 5;\n  max-height: 100px;\n  overflow-y: auto;\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  border-top: none;\n  border-radius: 0 0 5px 5px;\n  box-shadow: 0 2px 4px ",";\n  opacity: ",";\n  visibility: ",";\n  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;\n\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: ",";\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: ",";\n  }\n\n  &::-webkit-scrollbar-thumb:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.usedColors.black}),(function(n){return n.theme.usedColors.white}),(function(n){return n.theme.usedColors.grayMoreOpacity}),(function(n){return n.theme.usedColors.blackOpacity}),(function(n){return n.open?1:0}),(function(n){return n.open?"visible":"hidden"}),(function(n){return n.theme.usedColors.grayOpacity}),(function(n){return n.theme.usedColors.grayMoreOpacity}),(function(n){return n.theme.usedColors.grayOpacity})),J=m.ZP.div(Z||(Z=q(["\n  padding: ",";\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n  }\n"],["\n  padding: ",";\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.indentation.i10}),(function(n){return n.theme.usedColors.grayMoreOpacity})),W=function(){var n=(0,O.T)(),e=(0,l.useState)(null),t=e[0],r=e[1],o=(0,l.useState)(1),i=o[0],a=o[1],c=(0,l.useState)(""),s=c[0],d=c[1],p=(0,l.useState)(""),f=p[0],h=p[1],y=(0,l.useState)(!1),m=y[0],g=y[1];(0,l.useEffect)((function(){var n=$();d(n.month),a(n.year),r(n.pastDaysArr),h(n.day)}),[]);var b,x=(b=+s)?["January","February","March","April","May","June","July","August","September","October","November","December"][b-1]:null;return(0,u.jsxs)(V,{"data-cy":"daySelect","data-testid":"daySelect",children:[(0,u.jsxs)(H,{onClick:function(){g(!m)},"data-cy":"daySelectOption",children:[f," ",x,(0,u.jsx)(Q,{open:m})]}),(0,u.jsx)(G,{open:m,"data-cy":"optionsContainer",children:null==t?void 0:t.map((function(e){return(0,u.jsxs)(J,{onClick:function(){return function(e){n(B(null)),h(e);var t="0".concat(e).slice(-2);n(F("".concat(i,"-").concat(s,"-").concat(t))),g(!1)}(e)},"data-cy":"day",children:[e," ",x]},e)}))})]})},X=t(4559),K=(0,l.memo)((function(n){var e=n.open,t=n.period,r=(0,O.T)(),o=(0,l.useCallback)((function(){var n=t===T.z.Day?T.z.Month:T.z.Day;t===T.z.Day&&r(F(null)),r(B(null)),r(function(n){return{type:"CURRENCY/SET_PERIOD_TIMELINE",payload:{period:n}}}(n))}),[r,t]);return(0,u.jsxs)(X.Gd,{open:e||!1,"data-testid":"toggle",children:[t===T.z.Month?"Month":"Day",(0,u.jsxs)(X.QQ,{children:[(0,u.jsx)(X.sM,{type:"checkbox",checked:t!==T.z.Day,onChange:o}),(0,u.jsx)(X.Y1,{"data-cy":"periodToggleSlider"})]})]})})),nn=t(9285),en=t(7479),tn=function(n){return nn.Z.filter((function(e){return e.name===n}))},rn=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},on=m.ZP.div(M||(M=rn(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin: "," ",";\n  min-height: 30vh;\n"],["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin: "," ",";\n  min-height: 30vh;\n"])),(function(n){return n.theme.indentation.i20}),(function(n){return n.theme.indentation.i0})),an=m.ZP.div(z||(z=rn(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n"],["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n"]))),cn=m.ZP.div(I||(I=rn(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-start;\n  flex-wrap: wrap;\n"],["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-start;\n  flex-wrap: wrap;\n"]))),sn=m.ZP.div(N||(N=rn(["\n  font-size: ",";\n  padding-bottom: ",";\n  color: ",";\n"],["\n  font-size: ",";\n  padding-bottom: ",";\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.indentation.i10}),(function(n){return n.theme.colors.toggleBorder})),un=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},n(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),ln=function(n){function e(e){var t=n.call(this,e)||this;return t.currenciesOptions=nn.Z.filter((function(n){return"Bitcoin"===n.name||"Ethereum"===n.name})),t.fetchCurrency=function(){var n=t.props,e=n.selectedDay,r=n.period,o=n.fetchCurrencyDayOhlcvThunk,i=n.fetchCurrencyMonthOhlcvThunk;if(t.state.code&&e&&o(t.state.code,e),t.state.code&&r===T.z.Month){var a=$(r),c="".concat(a.year,"-").concat(a.month,"-").concat(a.day);i(t.state.code,c)}},t.handleSelectChange=function(n){t.props.setCurrencyForTimeLine(n),t.props.setDataForChart(null)},t.state={code:(0,en.$)(t.props.currencyTimeLineName),selectCurrency:tn(t.props.currencyTimeLineName)},t}return un(e,n),e.prototype.componentDidMount=function(){this.fetchCurrency()},e.prototype.componentDidUpdate=function(n){n.selectedDay===this.props.selectedDay&&n.period===this.props.period||this.fetchCurrency(),n.currencyTimeLineName!==this.props.currencyTimeLineName&&this.setState({code:(0,en.$)(this.props.currencyTimeLineName),selectCurrency:tn(this.props.currencyTimeLineName)})},e.prototype.render=function(){var n=this.state.code,e=this.props,t=e.currencyTimeLineName,r=e.dataChar,o=e.period;return(0,u.jsxs)(on,{children:[(0,u.jsxs)(an,{children:[(0,u.jsx)(sn,{children:"Select the currency that interests you"}),(0,u.jsx)(U.V,{options:this.currenciesOptions,value:t,onChange:this.handleSelectChange})]}),(0,u.jsxs)(cn,{children:[(0,u.jsx)(K,{period:o}),o===T.z.Day&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(sn,{children:"Select from which date to bring statistics"}),(0,u.jsx)(W,{})]}),(0,u.jsx)(L.d,{currencies:this.state.selectCurrency})]}),r&&n&&(0,u.jsx)(Y,{dataChart:r,code:n})]})},e}(l.PureComponent),dn=t(2861),pn=t(1689),fn=t(794),hn=t(5957),yn=t(8017),mn=function(n,e,t,r){return new(t||(t=Promise))((function(o,i){function a(n){try{s(r.next(n))}catch(n){i(n)}}function c(n){try{s(r.throw(n))}catch(n){i(n)}}function s(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,c)}s((r=r.apply(n,e||[])).next())}))},gn=function(n,e){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=e.call(n,a)}catch(n){c=[6,n],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}},bn=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},n(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),xn=function(){return xn=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},xn.apply(this,arguments)},vn=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return bn(e,n),e.prototype.render=function(){var n=this.props,e=n.errorCurrency,t=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t}(n,["errorCurrency"]);return e?(0,u.jsx)(p.Q,{error:e}):(0,u.jsx)(ln,xn({},t))},e}(l.Component),Cn={setCurrencyForTimeLine:function(n){return{type:"CURRENCY/SET_CURRENCY_FOR_TIMELINE",payload:{currency:n}}},setDataForChart:B,fetchCurrencyDayOhlcvThunk:function(n,e){return function(t){return mn(void 0,void 0,void 0,(function(){var r,o,i,a;return gn(this,(function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),t((0,fn.qy)(yn.A.Loading)),[4,pn.R.getCurrencyDayData(n,e)];case 1:return r=c.sent(),t(B(r)),t((0,hn.R9)(null)),t((0,fn.qy)(yn.A.Succeeded)),[3,3];case 2:return o=c.sent(),dn.Z.isAxiosError(o)&&(i=o.response?null===(a=o.response)||void 0===a?void 0:a.data.message:o.message,t((0,hn.R9)(i))),t((0,fn.qy)(yn.A.Failed)),[3,3];case 3:return[2]}}))}))}},fetchCurrencyMonthOhlcvThunk:function(n,e){return function(t){return mn(void 0,void 0,void 0,(function(){var r,o,i,a;return gn(this,(function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),t((0,fn.qy)(yn.A.Loading)),[4,pn.R.getCurrencyMonthData(n,e)];case 1:return r=c.sent(),t(B(r)),t((0,hn.R9)(null)),t((0,fn.qy)(yn.A.Succeeded)),[3,3];case 2:return o=c.sent(),dn.Z.isAxiosError(o)&&(i=o.response?null===(a=o.response)||void 0===a?void 0:a.data.message:o.message,t((0,hn.R9)(i))),t((0,fn.qy)(yn.A.Failed)),[3,3];case 3:return[2]}}))}))}}};const wn=(0,d.$j)((function(n){return{currencyTimeLineName:n.timeLine.currencyTimeLine,period:n.timeLine.period,selectedDay:n.timeLine.selectedDay,dataChar:n.timeLine.dataForChart,errorCurrency:n.home.errorCurrency}}),Cn)(vn)},9285:(n,e,t)=>{t.d(e,{Z:()=>p,f:()=>f});const r=t.p+"images/australianDollarIcon.svg",o=t.p+"images/bitcoinIcon.svg",i=t.p+"images/bovespaIcon.svg",a=t.p+"images/canadianDollarIcon.svg",c=t.p+"images/dollarIcon.svg",s=t.p+"images/ethereum.svg",u=t.p+"images/euroIcon.svg",l=t.p+"images/IFIX.svg",d=t.p+"images/libraIcon.svg";var p=[{symbol:"AR$",name:"Argentine Peso",symbol_native:"$",decimal_digits:2,rounding:0,code:"ARS",name_plural:"Argentine pesos",img:t.p+"images/pesoArgentinoIcon.svg"},{symbol:"AU$",name:"Australian Dollar",symbol_native:"$",decimal_digits:2,rounding:0,code:"AUD",name_plural:"Australian dollars",img:r},{symbol:"CA$",name:"Canadian Dollar",symbol_native:"$",decimal_digits:2,rounding:0,code:"CAD",name_plural:"Canadian dollars",img:a},{symbol:"CN¥",name:"Chinese Yuan",symbol_native:"CN¥",decimal_digits:2,rounding:0,code:"CNY",name_plural:"Chinese yuan",img:t.p+"images/wonIcon.svg"},{symbol:"€",name:"Euro",symbol_native:"€",decimal_digits:2,rounding:0,code:"EUR",name_plural:"Euros",img:u},{symbol:"¥",name:"Japanese Yen",symbol_native:"￥",decimal_digits:0,rounding:0,code:"JPY",name_plural:"Japanese yen",img:t.p+"images/yenIcon.svg"},{symbol:"TL",name:"Turkish Lira",symbol_native:"TL",decimal_digits:2,rounding:0,code:"TRY",name_plural:"Turkish Lira",img:d},{symbol:"$",name:"US Dollar",symbol_native:"$",decimal_digits:2,rounding:0,code:"USD",name_plural:"US dollars",img:c},{symbol:"₿",name:"Bitcoin",symbol_native:"₿",decimal_digits:8,rounding:0,code:"BTC",name_plural:"Bitcoins",img:o},{symbol:"Ξ",name:"Ethereum",symbol_native:"Ξ",decimal_digits:18,rounding:0,code:"ETH",name_plural:"Ethereum",img:s}],f=[{name:"Bovespa Index",value:"15%",img:i},{name:"IFIX",value:"15%",img:l}]},3916:(n,e,t)=>{t.d(e,{Eq:()=>x,P0:()=>C,Q2:()=>b,X4:()=>g,Z:()=>j,e7:()=>T,ll:()=>O,pP:()=>k,tg:()=>P,to:()=>v,zr:()=>_});var r,o,i,a,c,s,u,l,d,p,f,h,y=t(394),m=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},g=y.ZP.div(r||(r=m(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  margin-bottom: ",";\n"],["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.indentation.i20}),(function(n){return n.theme.indentation.i20})),b=y.ZP.div(o||(o=m(["\n  display: flex;\n  flex-direction: column;\n  width: 35vw;\n"],["\n  display: flex;\n  flex-direction: column;\n  width: 35vw;\n"]))),x=y.ZP.div(i||(i=m(["\n  font-size: ",";\n  font-weight: ",";\n  line-height: 30px;\n  color: ",";\n"],["\n  font-size: ",";\n  font-weight: ",";\n  line-height: 30px;\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.xl}),(function(n){return n.theme.fontWeight.light}),(function(n){return n.theme.colors.fontColor})),v=y.ZP.hr(a||(a=m(["\n  border: none;\n  border-top: 2px solid ",";\n  margin: "," ",";\n"],["\n  border: none;\n  border-top: 2px solid ",";\n  margin: "," ",";\n"])),(function(n){return n.theme.colors.currencyCard}),(function(n){return n.theme.indentation.i20}),(function(n){return n.theme.indentation.i0})),C=y.ZP.div(c||(c=m(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: ",";\n  padding: "," ",";\n"],["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: ",";\n  padding: "," ",";\n"])),(function(n){return n.theme.indentation.i30}),(function(n){return n.theme.indentation.i20}),(function(n){return n.theme.indentation.i0})),w=(0,y.F4)(s||(s=m(["\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"],["\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"]))),_=y.ZP.div(u||(u=m(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: ",";\n  border-radius: 10px;\n  animation: "," 0.5s ease-out;\n  padding: "," ",";\n\n  &:hover {\n    box-shadow: 0 2px 3px 2px ",";\n  }\n"],["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: ",";\n  border-radius: 10px;\n  animation: "," 0.5s ease-out;\n  padding: "," ",";\n\n  &:hover {\n    box-shadow: 0 2px 3px 2px ",";\n  }\n"])),(function(n){return n.theme.colors.currencyCard}),w,(function(n){return n.theme.indentation.i0}),(function(n){return n.theme.indentation.i10}),(function(n){return n.theme.colors.boxShadow})),k=y.ZP.img(l||(l=m(["\n  width: 50px;\n  height: 50px;\n"],["\n  width: 50px;\n  height: 50px;\n"]))),j=y.ZP.div(d||(d=m(["\n  padding: ",";\n"],["\n  padding: ",";\n"])),(function(n){return n.theme.indentation.i20})),O=y.ZP.div(p||(p=m(["\n  font-size: ",";\n  font-weight: ",";\n"],["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.fontSizes.xl}),(function(n){return n.theme.fontWeight.normal})),P=y.ZP.div(f||(f=m(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n"],["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeight.light}),(function(n){return n.theme.colors.fontColorOpacity})),T=y.ZP.div(h||(h=m(["\n  display: flex;\n  flex-direction: column;\n"],["\n  display: flex;\n  flex-direction: column;\n"])))},5957:(n,e,t)=>{t.d(e,{R9:()=>o,U$:()=>r,cL:()=>c,nm:()=>i,wE:()=>a});var r=function(n){return{type:"CURRENCY/FETCH_CURRENCY",payload:n}},o=function(n){return{type:"CURRENCY/SET_ERROR_CURRENCY",payload:{errorCurrency:n}}},i=function(n){return{type:"CURRENCY/SET_CURRENCY_FROM",payload:{currencyFrom:n}}},a=function(n){return{type:"CURRENCY/SET_CURRENCY_TO",payload:{currencyTo:n}}},c=function(n){return{type:"CURRENCY/SET_CONVERT_VALUE",payload:{convertValue:n}}}},7479:(n,e,t)=>{t.d(e,{$:()=>o});var r=t(9285),o=function(n){var e;return n?null===(e=r.Z.find((function(e){return e.name===n})))||void 0===e?void 0:e.code:null}}}]);