import { Injectable, Inject, ViewChild } from '@angular/core';
import {
  Router,
  RouterOutlet,
  ActivatedRoute,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  RoutesRecognized
} from '@angular/router';
import { UpdataSubjectService } from './subject.service';
// import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

@Injectable()
export class RouterService {
  routerData: any = {};
  cacheAllConfig: Map<string, object> = new Map(); // 路由配置中的所有配置
  constructor(
    public routerInfo: ActivatedRoute,
    public router: Router,
    public subjectService: UpdataSubjectService,
    // private enable: boolean
  ) {
    this.setRouterData(router);
  }

  /**
   * 重新设置路由信息
   * @param router 路由信息
   */
  private setRouterData(router) {
    // 获取所有路由配置信息
    const getRouteAllConfig = (param) => {

      if (param.data) {
        this.cacheAllConfig.set(param.data.routeName, param);
      }

      if (param._loadedConfig &&
        param._loadedConfig.routes.length > 0) {
        param._loadedConfig.routes.map(m => {
          if (m.children) {
            m.children.map(n => {
              return getRouteAllConfig(n);
            });
          } else {
            return getRouteAllConfig(m);
          }
        });
      } else if (param.children) {
        param.children.map(n => {
          return getRouteAllConfig(n);
        });
      }

    };
    console.log(router);
    router.config.map((x) => {
      getRouteAllConfig(x);
    });
    console.log(this.cacheAllConfig);


    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // console.log(router);
      } else if (event instanceof NavigationEnd) { // 路由跳转结束时执行
        // console.log(router, router.url, event);
        let routerName = router.url; // 定义当前路由名称
        //  跳转路由时是否包含了点，路由的静态数据项配置没有包含点，如果包含了匹配时需要去掉
        if (routerName.indexOf('.') !== -1) {
          routerName = routerName.split('.')[1];
        }

        // 跳转路由时是否包含了分号，如果包含了那么需要去掉后边的参数部分
        if (routerName.indexOf(';') !== -1) {
          routerName = routerName.split(';')[0];
        }

        const curConfig: any = this.cacheAllConfig.get(routerName);

        if (!curConfig) {
          return undefined;
        }


        if (curConfig.data.routeName === routerName) { // 如果当前不是空路由时
          this.routerData = Object.assign({}, curConfig); // 获取当前自定义的路由信息
        } else if (routerName === '' || routerName === '/') { // 如果当前是空路由跳转到login页面时
          this.routerData = Object.assign({}, curConfig); // 获取当前自定义的路由信息
        }
        console.log(this.routerData);
        this.subjectService.emitRouterDataSubject(this.routerData);
      } else if (event instanceof NavigationCancel) {
        // console.log(router);
      } else if (event instanceof NavigationError) {
        // console.log(router);
      } else if (event instanceof RoutesRecognized) {
        // console.log(router);
      }
    });
    console.log(this.cacheAllConfig, this.routerData);
  }

  /**
   * 获取路由中自定义的data数据
   * @param outlet 路由入口的实例
   */
  getRouterData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
}
