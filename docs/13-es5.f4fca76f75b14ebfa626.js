function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{PRsi:function(e,r,t){"use strict";t.r(r),t.d(r,"HeroDetailsModule",(function(){return f}));var n,o,c=t("ofXK"),i=t("tyNb"),s=t("Mzne"),a=t("fXoL"),u=t("NLch"),l=t("5XCh"),b=[{path:"",component:(n=function(){function e(r,t,n,o,c){_classCallCheck(this,e),this.route=r,this.router=t,this.heroService=n,this.getJson=o,this.routerService=c,this.curHero={}}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.route.paramMap.subscribe((function(r){console.log(r,r.get("id"),r.get("param")),e.curHero=e.heroService.getHero(r.get("id"))}))}}]),e}(),n.\u0275fac=function(e){return new(e||n)(a.Pb(i.a),a.Pb(i.f),a.Pb(u.a),a.Pb(l.a),a.Pb(s.a))},n.\u0275cmp=a.Jb({type:n,selectors:[["app-hero-details"]],decls:8,vars:3,consts:[[1,"hero-details"]],template:function(e,r){1&e&&(a.Vb(0,"section",0),a.zc(1," details "),a.Vb(2,"h4"),a.zc(3),a.Ub(),a.Vb(4,"h4"),a.zc(5),a.Ub(),a.Vb(6,"h4"),a.zc(7),a.Ub(),a.Ub()),2&e&&(a.Db(3),a.Ac(null==r.curHero?null:r.curHero._id),a.Db(2),a.Ac(null==r.curHero?null:r.curHero.content),a.Db(2),a.Ac(null==r.curHero?null:r.curHero.updated_at))},styles:[""]}),n)}],f=((o=function e(){_classCallCheck(this,e)}).\u0275mod=a.Nb({type:o}),o.\u0275inj=a.Mb({factory:function(e){return new(e||o)},providers:[s.a],imports:[[i.i.forChild(b),c.b],i.i]}),o)}}]);