import {
  CommonModule,
  DOCUMENT,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  isPlatformBrowser,
  isPlatformServer
} from "./chunk-2ZKNZU6R.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-PS32Z2ZL.js";
import {
  fromEvent
} from "./chunk-ZFEMJNE7.js";
import "./chunk-XKHFCS7L.js";
import {
  __decorate,
  debounceTime
} from "./chunk-HBBEYCRV.js";
import {
  arc_default,
  area_default,
  band,
  brushX,
  cardinalClosed_default,
  format,
  lineRadial_default,
  line_default,
  linear2 as linear,
  linear_default,
  max,
  min,
  ordinal,
  pie_default,
  point,
  quantile,
  quantile2,
  range,
  rgb,
  select_default,
  sinInOut,
  stratify_default,
  time,
  timeFormat,
  treemap_default,
  value_default
} from "./chunk-265UZNVO.js";
import {
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-4KQ2WF6L.js";

// node_modules/rfdc/index.js
var require_rfdc = __commonJS({
  "node_modules/rfdc/index.js"(exports, module) {
    "use strict";
    module.exports = rfdc2;
    function copyBuffer(cur) {
      if (cur instanceof Buffer) {
        return Buffer.from(cur);
      }
      return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length);
    }
    function rfdc2(opts) {
      opts = opts || {};
      if (opts.circles) return rfdcCircles(opts);
      const constructorHandlers = /* @__PURE__ */ new Map();
      constructorHandlers.set(Date, (o) => new Date(o));
      constructorHandlers.set(Map, (o, fn) => new Map(cloneArray(Array.from(o), fn)));
      constructorHandlers.set(Set, (o, fn) => new Set(cloneArray(Array.from(o), fn)));
      if (opts.constructorHandlers) {
        for (const handler2 of opts.constructorHandlers) {
          constructorHandlers.set(handler2[0], handler2[1]);
        }
      }
      let handler = null;
      return opts.proto ? cloneProto : clone;
      function cloneArray(a2, fn) {
        const keys = Object.keys(a2);
        const a22 = new Array(keys.length);
        for (let i = 0; i < keys.length; i++) {
          const k2 = keys[i];
          const cur = a2[k2];
          if (typeof cur !== "object" || cur === null) {
            a22[k2] = cur;
          } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            a22[k2] = handler(cur, fn);
          } else if (ArrayBuffer.isView(cur)) {
            a22[k2] = copyBuffer(cur);
          } else {
            a22[k2] = fn(cur);
          }
        }
        return a22;
      }
      function clone(o) {
        if (typeof o !== "object" || o === null) return o;
        if (Array.isArray(o)) return cloneArray(o, clone);
        if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
          return handler(o, clone);
        }
        const o2 = {};
        for (const k2 in o) {
          if (Object.hasOwnProperty.call(o, k2) === false) continue;
          const cur = o[k2];
          if (typeof cur !== "object" || cur === null) {
            o2[k2] = cur;
          } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            o2[k2] = handler(cur, clone);
          } else if (ArrayBuffer.isView(cur)) {
            o2[k2] = copyBuffer(cur);
          } else {
            o2[k2] = clone(cur);
          }
        }
        return o2;
      }
      function cloneProto(o) {
        if (typeof o !== "object" || o === null) return o;
        if (Array.isArray(o)) return cloneArray(o, cloneProto);
        if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
          return handler(o, cloneProto);
        }
        const o2 = {};
        for (const k2 in o) {
          const cur = o[k2];
          if (typeof cur !== "object" || cur === null) {
            o2[k2] = cur;
          } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            o2[k2] = handler(cur, cloneProto);
          } else if (ArrayBuffer.isView(cur)) {
            o2[k2] = copyBuffer(cur);
          } else {
            o2[k2] = cloneProto(cur);
          }
        }
        return o2;
      }
    }
    function rfdcCircles(opts) {
      const refs = [];
      const refsNew = [];
      const constructorHandlers = /* @__PURE__ */ new Map();
      constructorHandlers.set(Date, (o) => new Date(o));
      constructorHandlers.set(Map, (o, fn) => new Map(cloneArray(Array.from(o), fn)));
      constructorHandlers.set(Set, (o, fn) => new Set(cloneArray(Array.from(o), fn)));
      if (opts.constructorHandlers) {
        for (const handler2 of opts.constructorHandlers) {
          constructorHandlers.set(handler2[0], handler2[1]);
        }
      }
      let handler = null;
      return opts.proto ? cloneProto : clone;
      function cloneArray(a2, fn) {
        const keys = Object.keys(a2);
        const a22 = new Array(keys.length);
        for (let i = 0; i < keys.length; i++) {
          const k2 = keys[i];
          const cur = a2[k2];
          if (typeof cur !== "object" || cur === null) {
            a22[k2] = cur;
          } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            a22[k2] = handler(cur, fn);
          } else if (ArrayBuffer.isView(cur)) {
            a22[k2] = copyBuffer(cur);
          } else {
            const index2 = refs.indexOf(cur);
            if (index2 !== -1) {
              a22[k2] = refsNew[index2];
            } else {
              a22[k2] = fn(cur);
            }
          }
        }
        return a22;
      }
      function clone(o) {
        if (typeof o !== "object" || o === null) return o;
        if (Array.isArray(o)) return cloneArray(o, clone);
        if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
          return handler(o, clone);
        }
        const o2 = {};
        refs.push(o);
        refsNew.push(o2);
        for (const k2 in o) {
          if (Object.hasOwnProperty.call(o, k2) === false) continue;
          const cur = o[k2];
          if (typeof cur !== "object" || cur === null) {
            o2[k2] = cur;
          } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            o2[k2] = handler(cur, clone);
          } else if (ArrayBuffer.isView(cur)) {
            o2[k2] = copyBuffer(cur);
          } else {
            const i = refs.indexOf(cur);
            if (i !== -1) {
              o2[k2] = refsNew[i];
            } else {
              o2[k2] = clone(cur);
            }
          }
        }
        refs.pop();
        refsNew.pop();
        return o2;
      }
      function cloneProto(o) {
        if (typeof o !== "object" || o === null) return o;
        if (Array.isArray(o)) return cloneArray(o, cloneProto);
        if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
          return handler(o, cloneProto);
        }
        const o2 = {};
        refs.push(o);
        refsNew.push(o2);
        for (const k2 in o) {
          const cur = o[k2];
          if (typeof cur !== "object" || cur === null) {
            o2[k2] = cur;
          } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            o2[k2] = handler(cur, cloneProto);
          } else if (ArrayBuffer.isView(cur)) {
            o2[k2] = copyBuffer(cur);
          } else {
            const i = refs.indexOf(cur);
            if (i !== -1) {
              o2[k2] = refsNew[i];
            } else {
              o2[k2] = cloneProto(cur);
            }
          }
        }
        refs.pop();
        refsNew.pop();
        return o2;
      }
    }
  }
});

// node_modules/@angular/cdk/fesm2022/portal.mjs
function throwNullPortalError() {
  throw Error("Must provide a portal to attach");
}
function throwPortalAlreadyAttachedError() {
  throw Error("Host already has a portal attached");
}
function throwPortalOutletAlreadyDisposedError() {
  throw Error("This PortalOutlet has already been disposed");
}
function throwUnknownPortalTypeError() {
  throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.");
}
function throwNullPortalOutletError() {
  throw Error("Attempting to attach a portal to a null PortalOutlet");
}
function throwNoPortalAttachedError() {
  throw Error("Attempting to detach a portal that is not attached to a host");
}
var Portal = class {
  /** Attach this portal to a host. */
  attach(host) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (host == null) {
        throwNullPortalOutletError();
      }
      if (host.hasAttached()) {
        throwPortalAlreadyAttachedError();
      }
    }
    this._attachedHost = host;
    return host.attach(this);
  }
  /** Detach this portal from its host */
  detach() {
    let host = this._attachedHost;
    if (host != null) {
      this._attachedHost = null;
      host.detach();
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throwNoPortalAttachedError();
    }
  }
  /** Whether this portal is attached to a host. */
  get isAttached() {
    return this._attachedHost != null;
  }
  /**
   * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
   * the PortalOutlet when it is performing an `attach()` or `detach()`.
   */
  setAttachedHost(host) {
    this._attachedHost = host;
  }
};
var ComponentPortal = class extends Portal {
  constructor(component, viewContainerRef, injector, componentFactoryResolver, projectableNodes) {
    super();
    this.component = component;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.componentFactoryResolver = componentFactoryResolver;
    this.projectableNodes = projectableNodes;
  }
};
var TemplatePortal = class extends Portal {
  constructor(templateRef, viewContainerRef, context, injector) {
    super();
    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
    this.context = context;
    this.injector = injector;
  }
  get origin() {
    return this.templateRef.elementRef;
  }
  /**
   * Attach the portal to the provided `PortalOutlet`.
   * When a context is provided it will override the `context` property of the `TemplatePortal`
   * instance.
   */
  attach(host, context = this.context) {
    this.context = context;
    return super.attach(host);
  }
  detach() {
    this.context = void 0;
    return super.detach();
  }
};
var DomPortal = class extends Portal {
  constructor(element) {
    super();
    this.element = element instanceof ElementRef ? element.nativeElement : element;
  }
};
var BasePortalOutlet = class {
  constructor() {
    this._isDisposed = false;
    this.attachDomPortal = null;
  }
  /** Whether this host has an attached portal. */
  hasAttached() {
    return !!this._attachedPortal;
  }
  /** Attaches a portal. */
  attach(portal) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!portal) {
        throwNullPortalError();
      }
      if (this.hasAttached()) {
        throwPortalAlreadyAttachedError();
      }
      if (this._isDisposed) {
        throwPortalOutletAlreadyDisposedError();
      }
    }
    if (portal instanceof ComponentPortal) {
      this._attachedPortal = portal;
      return this.attachComponentPortal(portal);
    } else if (portal instanceof TemplatePortal) {
      this._attachedPortal = portal;
      return this.attachTemplatePortal(portal);
    } else if (this.attachDomPortal && portal instanceof DomPortal) {
      this._attachedPortal = portal;
      return this.attachDomPortal(portal);
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      throwUnknownPortalTypeError();
    }
  }
  /** Detaches a previously attached portal. */
  detach() {
    if (this._attachedPortal) {
      this._attachedPortal.setAttachedHost(null);
      this._attachedPortal = null;
    }
    this._invokeDisposeFn();
  }
  /** Permanently dispose of this portal host. */
  dispose() {
    if (this.hasAttached()) {
      this.detach();
    }
    this._invokeDisposeFn();
    this._isDisposed = true;
  }
  /** @docs-private */
  setDisposeFn(fn) {
    this._disposeFn = fn;
  }
  _invokeDisposeFn() {
    if (this._disposeFn) {
      this._disposeFn();
      this._disposeFn = null;
    }
  }
};
var DomPortalOutlet = class extends BasePortalOutlet {
  /**
   * @param outletElement Element into which the content is projected.
   * @param _componentFactoryResolver Used to resolve the component factory.
   *   Only required when attaching component portals.
   * @param _appRef Reference to the application. Only used in component portals when there
   *   is no `ViewContainerRef` available.
   * @param _defaultInjector Injector to use as a fallback when the portal being attached doesn't
   *   have one. Only used for component portals.
   * @param _document Reference to the document. Used when attaching a DOM portal. Will eventually
   *   become a required parameter.
   */
  constructor(outletElement, _componentFactoryResolver, _appRef, _defaultInjector, _document) {
    super();
    this.outletElement = outletElement;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._appRef = _appRef;
    this._defaultInjector = _defaultInjector;
    this.attachDomPortal = (portal) => {
      if (!this._document && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Cannot attach DOM portal without _document constructor parameter");
      }
      const element = portal.element;
      if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("DOM portal content must be attached to a parent node.");
      }
      const anchorNode = this._document.createComment("dom-portal");
      element.parentNode.insertBefore(anchorNode, element);
      this.outletElement.appendChild(element);
      this._attachedPortal = portal;
      super.setDisposeFn(() => {
        if (anchorNode.parentNode) {
          anchorNode.parentNode.replaceChild(element, anchorNode);
        }
      });
    };
    this._document = _document;
  }
  /**
   * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
   * @param portal Portal to be attached
   * @returns Reference to the created component.
   */
  attachComponentPortal(portal) {
    const resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !resolver) {
      throw Error("Cannot attach component portal to outlet without a ComponentFactoryResolver.");
    }
    const componentFactory = resolver.resolveComponentFactory(portal.component);
    let componentRef;
    if (portal.viewContainerRef) {
      componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector, portal.projectableNodes || void 0);
      this.setDisposeFn(() => componentRef.destroy());
    } else {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._appRef) {
        throw Error("Cannot attach component portal to outlet without an ApplicationRef.");
      }
      componentRef = componentFactory.create(portal.injector || this._defaultInjector || Injector.NULL);
      this._appRef.attachView(componentRef.hostView);
      this.setDisposeFn(() => {
        if (this._appRef.viewCount > 0) {
          this._appRef.detachView(componentRef.hostView);
        }
        componentRef.destroy();
      });
    }
    this.outletElement.appendChild(this._getComponentRootNode(componentRef));
    this._attachedPortal = portal;
    return componentRef;
  }
  /**
   * Attaches a template portal to the DOM as an embedded view.
   * @param portal Portal to be attached.
   * @returns Reference to the created embedded view.
   */
  attachTemplatePortal(portal) {
    let viewContainer = portal.viewContainerRef;
    let viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context, {
      injector: portal.injector
    });
    viewRef.rootNodes.forEach((rootNode) => this.outletElement.appendChild(rootNode));
    viewRef.detectChanges();
    this.setDisposeFn(() => {
      let index2 = viewContainer.indexOf(viewRef);
      if (index2 !== -1) {
        viewContainer.remove(index2);
      }
    });
    this._attachedPortal = portal;
    return viewRef;
  }
  /**
   * Clears out a portal from the DOM.
   */
  dispose() {
    super.dispose();
    this.outletElement.remove();
  }
  /** Gets the root HTMLElement for an instantiated component. */
  _getComponentRootNode(componentRef) {
    return componentRef.hostView.rootNodes[0];
  }
};
var _CdkPortal = class _CdkPortal extends TemplatePortal {
  constructor(templateRef, viewContainerRef) {
    super(templateRef, viewContainerRef);
  }
};
_CdkPortal.ɵfac = function CdkPortal_Factory(t) {
  return new (t || _CdkPortal)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ViewContainerRef));
};
_CdkPortal.ɵdir = ɵɵdefineDirective({
  type: _CdkPortal,
  selectors: [["", "cdkPortal", ""]],
  exportAs: ["cdkPortal"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
var CdkPortal = _CdkPortal;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkPortal, [{
    type: Directive,
    args: [{
      selector: "[cdkPortal]",
      exportAs: "cdkPortal",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: ViewContainerRef
  }], null);
})();
var _TemplatePortalDirective = class _TemplatePortalDirective extends CdkPortal {
};
_TemplatePortalDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵTemplatePortalDirective_BaseFactory;
  return function TemplatePortalDirective_Factory(t) {
    return (ɵTemplatePortalDirective_BaseFactory || (ɵTemplatePortalDirective_BaseFactory = ɵɵgetInheritedFactory(_TemplatePortalDirective)))(t || _TemplatePortalDirective);
  };
})();
_TemplatePortalDirective.ɵdir = ɵɵdefineDirective({
  type: _TemplatePortalDirective,
  selectors: [["", "cdk-portal", ""], ["", "portal", ""]],
  exportAs: ["cdkPortal"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkPortal,
    useExisting: _TemplatePortalDirective
  }]), ɵɵInheritDefinitionFeature]
});
var TemplatePortalDirective = _TemplatePortalDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplatePortalDirective, [{
    type: Directive,
    args: [{
      selector: "[cdk-portal], [portal]",
      exportAs: "cdkPortal",
      providers: [{
        provide: CdkPortal,
        useExisting: TemplatePortalDirective
      }],
      standalone: true
    }]
  }], null, null);
})();
var _CdkPortalOutlet = class _CdkPortalOutlet extends BasePortalOutlet {
  constructor(_componentFactoryResolver, _viewContainerRef, _document) {
    super();
    this._componentFactoryResolver = _componentFactoryResolver;
    this._viewContainerRef = _viewContainerRef;
    this._isInitialized = false;
    this.attached = new EventEmitter();
    this.attachDomPortal = (portal) => {
      if (!this._document && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Cannot attach DOM portal without _document constructor parameter");
      }
      const element = portal.element;
      if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("DOM portal content must be attached to a parent node.");
      }
      const anchorNode = this._document.createComment("dom-portal");
      portal.setAttachedHost(this);
      element.parentNode.insertBefore(anchorNode, element);
      this._getRootNode().appendChild(element);
      this._attachedPortal = portal;
      super.setDisposeFn(() => {
        if (anchorNode.parentNode) {
          anchorNode.parentNode.replaceChild(element, anchorNode);
        }
      });
    };
    this._document = _document;
  }
  /** Portal associated with the Portal outlet. */
  get portal() {
    return this._attachedPortal;
  }
  set portal(portal) {
    if (this.hasAttached() && !portal && !this._isInitialized) {
      return;
    }
    if (this.hasAttached()) {
      super.detach();
    }
    if (portal) {
      super.attach(portal);
    }
    this._attachedPortal = portal || null;
  }
  /** Component or view reference that is attached to the portal. */
  get attachedRef() {
    return this._attachedRef;
  }
  ngOnInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    super.dispose();
    this._attachedRef = this._attachedPortal = null;
  }
  /**
   * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
   *
   * @param portal Portal to be attached to the portal outlet.
   * @returns Reference to the created component.
   */
  attachComponentPortal(portal) {
    portal.setAttachedHost(this);
    const viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
    const resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
    const componentFactory = resolver.resolveComponentFactory(portal.component);
    const ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector, portal.projectableNodes || void 0);
    if (viewContainerRef !== this._viewContainerRef) {
      this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
    }
    super.setDisposeFn(() => ref.destroy());
    this._attachedPortal = portal;
    this._attachedRef = ref;
    this.attached.emit(ref);
    return ref;
  }
  /**
   * Attach the given TemplatePortal to this PortalHost as an embedded View.
   * @param portal Portal to be attached.
   * @returns Reference to the created embedded view.
   */
  attachTemplatePortal(portal) {
    portal.setAttachedHost(this);
    const viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context, {
      injector: portal.injector
    });
    super.setDisposeFn(() => this._viewContainerRef.clear());
    this._attachedPortal = portal;
    this._attachedRef = viewRef;
    this.attached.emit(viewRef);
    return viewRef;
  }
  /** Gets the root node of the portal outlet. */
  _getRootNode() {
    const nativeElement = this._viewContainerRef.element.nativeElement;
    return nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement : nativeElement.parentNode;
  }
};
_CdkPortalOutlet.ɵfac = function CdkPortalOutlet_Factory(t) {
  return new (t || _CdkPortalOutlet)(ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(DOCUMENT));
};
_CdkPortalOutlet.ɵdir = ɵɵdefineDirective({
  type: _CdkPortalOutlet,
  selectors: [["", "cdkPortalOutlet", ""]],
  inputs: {
    portal: [0, "cdkPortalOutlet", "portal"]
  },
  outputs: {
    attached: "attached"
  },
  exportAs: ["cdkPortalOutlet"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
var CdkPortalOutlet = _CdkPortalOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkPortalOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkPortalOutlet]",
      exportAs: "cdkPortalOutlet",
      standalone: true
    }]
  }], () => [{
    type: ComponentFactoryResolver$1
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    portal: [{
      type: Input,
      args: ["cdkPortalOutlet"]
    }],
    attached: [{
      type: Output
    }]
  });
})();
var _PortalHostDirective = class _PortalHostDirective extends CdkPortalOutlet {
};
_PortalHostDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵPortalHostDirective_BaseFactory;
  return function PortalHostDirective_Factory(t) {
    return (ɵPortalHostDirective_BaseFactory || (ɵPortalHostDirective_BaseFactory = ɵɵgetInheritedFactory(_PortalHostDirective)))(t || _PortalHostDirective);
  };
})();
_PortalHostDirective.ɵdir = ɵɵdefineDirective({
  type: _PortalHostDirective,
  selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]],
  inputs: {
    portal: [0, "cdkPortalHost", "portal"]
  },
  exportAs: ["cdkPortalHost"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkPortalOutlet,
    useExisting: _PortalHostDirective
  }]), ɵɵInheritDefinitionFeature]
});
var PortalHostDirective = _PortalHostDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalHostDirective, [{
    type: Directive,
    args: [{
      selector: "[cdkPortalHost], [portalHost]",
      exportAs: "cdkPortalHost",
      inputs: [{
        name: "portal",
        alias: "cdkPortalHost"
      }],
      providers: [{
        provide: CdkPortalOutlet,
        useExisting: PortalHostDirective
      }],
      standalone: true
    }]
  }], null, null);
})();
var _PortalModule = class _PortalModule {
};
_PortalModule.ɵfac = function PortalModule_Factory(t) {
  return new (t || _PortalModule)();
};
_PortalModule.ɵmod = ɵɵdefineNgModule({
  type: _PortalModule,
  imports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
  exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
});
_PortalModule.ɵinj = ɵɵdefineInjector({});
var PortalModule = _PortalModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalModule, [{
    type: NgModule,
    args: [{
      imports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
      exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
    }]
  }], null, null);
})();

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationMetadataType;
(function(AnimationMetadataType2) {
  AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
  AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
  AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
  AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
  AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
  AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
  AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
  AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
  AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
  AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
  AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
  AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
  AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
})(AnimationMetadataType || (AnimationMetadataType = {}));
function trigger(name, definitions) {
  return {
    type: AnimationMetadataType.Trigger,
    name,
    definitions,
    options: {}
  };
}
function animate(timings, styles = null) {
  return {
    type: AnimationMetadataType.Animate,
    styles,
    timings
  };
}
function sequence(steps, options = null) {
  return {
    type: AnimationMetadataType.Sequence,
    steps,
    options
  };
}
function style(tokens) {
  return {
    type: AnimationMetadataType.Style,
    styles: tokens,
    offset: null
  };
}
function transition(stateChangeExpr, steps, options = null) {
  return {
    type: AnimationMetadataType.Transition,
    expr: stateChangeExpr,
    animation: steps,
    options
  };
}
var _AnimationBuilder = class _AnimationBuilder {
};
_AnimationBuilder.ɵfac = function AnimationBuilder_Factory(t) {
  return new (t || _AnimationBuilder)();
};
_AnimationBuilder.ɵprov = ɵɵdefineInjectable({
  token: _AnimationBuilder,
  factory: () => (() => inject(BrowserAnimationBuilder))(),
  providedIn: "root"
});
var AnimationBuilder = _AnimationBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var _BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  constructor(rootRenderer, doc) {
    super();
    this.animationModuleType = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    this._nextAnimationId = 0;
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation$1.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation) {
    const id2 = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation) ? sequence(animation) : animation;
    issueAnimationCommand(this._renderer, null, id2, "register", [entry]);
    return new BrowserAnimationFactory(id2, this._renderer);
  }
};
_BrowserAnimationBuilder.ɵfac = function BrowserAnimationBuilder_Factory(t) {
  return new (t || _BrowserAnimationBuilder)(ɵɵinject(RendererFactory2), ɵɵinject(DOCUMENT));
};
_BrowserAnimationBuilder.ɵprov = ɵɵdefineInjectable({
  token: _BrowserAnimationBuilder,
  factory: _BrowserAnimationBuilder.ɵfac,
  providedIn: "root"
});
var BrowserAnimationBuilder = _BrowserAnimationBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  constructor(id2, element, options, _renderer) {
    this.id = id2;
    this.element = element;
    this._renderer = _renderer;
    this.parentPlayer = null;
    this._started = false;
    this.totalTime = 0;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
};
function issueAnimationCommand(renderer, element, id2, command, args) {
  renderer.setProperty(element, `@@${id2}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.ɵtype;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.ɵtype;
  return type === 0 || type === 1;
}

// node_modules/@swimlane/ngx-charts/fesm2020/swimlane-ngx-charts.mjs
var import_rfdc = __toESM(require_rfdc(), 1);

// node_modules/d3-sankey/node_modules/d3-array/src/ascending.js
function ascending_default(a2, b) {
  return a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
}

// node_modules/d3-sankey/node_modules/d3-array/src/bisector.js
function bisector_default(f) {
  let delta = f;
  let compare = f;
  if (f.length === 1) {
    delta = (d, x2) => f(d) - x2;
    compare = ascendingComparator(f);
  }
  function left2(a2, x2, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a2.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a2[mid], x2) < 0) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }
  function right2(a2, x2, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a2.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a2[mid], x2) > 0) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  }
  function center2(a2, x2, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a2.length;
    const i = left2(a2, x2, lo, hi - 1);
    return i > lo && delta(a2[i - 1], x2) > -delta(a2[i], x2) ? i - 1 : i;
  }
  return {
    left: left2,
    center: center2,
    right: right2
  };
}
function ascendingComparator(f) {
  return (d, x2) => ascending_default(f(d), x2);
}

// node_modules/d3-sankey/node_modules/d3-array/src/number.js
function number_default(x2) {
  return x2 === null ? NaN : +x2;
}

// node_modules/d3-sankey/node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector_default(ascending_default);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = bisector_default(number_default).center;

// node_modules/d3-sankey/node_modules/d3-array/src/array.js
var array = Array.prototype;
var slice = array.slice;
var map = array.map;

// node_modules/d3-sankey/node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);

// node_modules/d3-sankey/node_modules/d3-array/src/max.js
function max2(values, valueof) {
  let max4;
  if (valueof === void 0) {
    for (const value2 of values) {
      if (value2 != null && (max4 < value2 || max4 === void 0 && value2 >= value2)) {
        max4 = value2;
      }
    }
  } else {
    let index2 = -1;
    for (let value2 of values) {
      if ((value2 = valueof(value2, ++index2, values)) != null && (max4 < value2 || max4 === void 0 && value2 >= value2)) {
        max4 = value2;
      }
    }
  }
  return max4;
}

// node_modules/d3-sankey/node_modules/d3-array/src/min.js
function min2(values, valueof) {
  let min4;
  if (valueof === void 0) {
    for (const value2 of values) {
      if (value2 != null && (min4 > value2 || min4 === void 0 && value2 >= value2)) {
        min4 = value2;
      }
    }
  } else {
    let index2 = -1;
    for (let value2 of values) {
      if ((value2 = valueof(value2, ++index2, values)) != null && (min4 > value2 || min4 === void 0 && value2 >= value2)) {
        min4 = value2;
      }
    }
  }
  return min4;
}

// node_modules/d3-sankey/node_modules/d3-array/src/shuffle.js
var shuffle_default = shuffler(Math.random);
function shuffler(random) {
  return function shuffle(array2, i0 = 0, i1 = array2.length) {
    let m = i1 - (i0 = +i0);
    while (m) {
      const i = random() * m-- | 0, t = array2[m + i0];
      array2[m + i0] = array2[i + i0];
      array2[i + i0] = t;
    }
    return array2;
  };
}

// node_modules/d3-sankey/node_modules/d3-array/src/sum.js
function sum(values, valueof) {
  let sum3 = 0;
  if (valueof === void 0) {
    for (let value2 of values) {
      if (value2 = +value2) {
        sum3 += value2;
      }
    }
  } else {
    let index2 = -1;
    for (let value2 of values) {
      if (value2 = +valueof(value2, ++index2, values)) {
        sum3 += value2;
      }
    }
  }
  return sum3;
}

// node_modules/d3-sankey/src/align.js
function left(node) {
  return node.depth;
}
function justify(node, n) {
  return node.sourceLinks.length ? node.depth : n - 1;
}

// node_modules/d3-sankey/src/constant.js
function constant(x2) {
  return function() {
    return x2;
  };
}

// node_modules/d3-sankey/src/sankey.js
function ascendingSourceBreadth(a2, b) {
  return ascendingBreadth(a2.source, b.source) || a2.index - b.index;
}
function ascendingTargetBreadth(a2, b) {
  return ascendingBreadth(a2.target, b.target) || a2.index - b.index;
}
function ascendingBreadth(a2, b) {
  return a2.y0 - b.y0;
}
function value(d) {
  return d.value;
}
function defaultId(d) {
  return d.index;
}
function defaultNodes(graph) {
  return graph.nodes;
}
function defaultLinks(graph) {
  return graph.links;
}
function find(nodeById, id2) {
  const node = nodeById.get(id2);
  if (!node) throw new Error("missing: " + id2);
  return node;
}
function computeLinkBreadths({
  nodes
}) {
  for (const node of nodes) {
    let y0 = node.y0;
    let y1 = y0;
    for (const link2 of node.sourceLinks) {
      link2.y0 = y0 + link2.width / 2;
      y0 += link2.width;
    }
    for (const link2 of node.targetLinks) {
      link2.y1 = y1 + link2.width / 2;
      y1 += link2.width;
    }
  }
}
function Sankey() {
  let x0 = 0, y0 = 0, x1 = 1, y1 = 1;
  let dx = 24;
  let dy = 8, py;
  let id2 = defaultId;
  let align = justify;
  let sort2;
  let linkSort;
  let nodes = defaultNodes;
  let links = defaultLinks;
  let iterations = 6;
  function sankey() {
    const graph = {
      nodes: nodes.apply(null, arguments),
      links: links.apply(null, arguments)
    };
    computeNodeLinks(graph);
    computeNodeValues(graph);
    computeNodeDepths(graph);
    computeNodeHeights(graph);
    computeNodeBreadths(graph);
    computeLinkBreadths(graph);
    return graph;
  }
  sankey.update = function(graph) {
    computeLinkBreadths(graph);
    return graph;
  };
  sankey.nodeId = function(_) {
    return arguments.length ? (id2 = typeof _ === "function" ? _ : constant(_), sankey) : id2;
  };
  sankey.nodeAlign = function(_) {
    return arguments.length ? (align = typeof _ === "function" ? _ : constant(_), sankey) : align;
  };
  sankey.nodeSort = function(_) {
    return arguments.length ? (sort2 = _, sankey) : sort2;
  };
  sankey.nodeWidth = function(_) {
    return arguments.length ? (dx = +_, sankey) : dx;
  };
  sankey.nodePadding = function(_) {
    return arguments.length ? (dy = py = +_, sankey) : dy;
  };
  sankey.nodes = function(_) {
    return arguments.length ? (nodes = typeof _ === "function" ? _ : constant(_), sankey) : nodes;
  };
  sankey.links = function(_) {
    return arguments.length ? (links = typeof _ === "function" ? _ : constant(_), sankey) : links;
  };
  sankey.linkSort = function(_) {
    return arguments.length ? (linkSort = _, sankey) : linkSort;
  };
  sankey.size = function(_) {
    return arguments.length ? (x0 = y0 = 0, x1 = +_[0], y1 = +_[1], sankey) : [x1 - x0, y1 - y0];
  };
  sankey.extent = function(_) {
    return arguments.length ? (x0 = +_[0][0], x1 = +_[1][0], y0 = +_[0][1], y1 = +_[1][1], sankey) : [[x0, y0], [x1, y1]];
  };
  sankey.iterations = function(_) {
    return arguments.length ? (iterations = +_, sankey) : iterations;
  };
  function computeNodeLinks({
    nodes: nodes2,
    links: links2
  }) {
    for (const [i, node] of nodes2.entries()) {
      node.index = i;
      node.sourceLinks = [];
      node.targetLinks = [];
    }
    const nodeById = new Map(nodes2.map((d, i) => [id2(d, i, nodes2), d]));
    for (const [i, link2] of links2.entries()) {
      link2.index = i;
      let {
        source,
        target
      } = link2;
      if (typeof source !== "object") source = link2.source = find(nodeById, source);
      if (typeof target !== "object") target = link2.target = find(nodeById, target);
      source.sourceLinks.push(link2);
      target.targetLinks.push(link2);
    }
    if (linkSort != null) {
      for (const {
        sourceLinks,
        targetLinks
      } of nodes2) {
        sourceLinks.sort(linkSort);
        targetLinks.sort(linkSort);
      }
    }
  }
  function computeNodeValues({
    nodes: nodes2
  }) {
    for (const node of nodes2) {
      node.value = node.fixedValue === void 0 ? Math.max(sum(node.sourceLinks, value), sum(node.targetLinks, value)) : node.fixedValue;
    }
  }
  function computeNodeDepths({
    nodes: nodes2
  }) {
    const n = nodes2.length;
    let current = new Set(nodes2);
    let next = /* @__PURE__ */ new Set();
    let x2 = 0;
    while (current.size) {
      for (const node of current) {
        node.depth = x2;
        for (const {
          target
        } of node.sourceLinks) {
          next.add(target);
        }
      }
      if (++x2 > n) throw new Error("circular link");
      current = next;
      next = /* @__PURE__ */ new Set();
    }
  }
  function computeNodeHeights({
    nodes: nodes2
  }) {
    const n = nodes2.length;
    let current = new Set(nodes2);
    let next = /* @__PURE__ */ new Set();
    let x2 = 0;
    while (current.size) {
      for (const node of current) {
        node.height = x2;
        for (const {
          source
        } of node.targetLinks) {
          next.add(source);
        }
      }
      if (++x2 > n) throw new Error("circular link");
      current = next;
      next = /* @__PURE__ */ new Set();
    }
  }
  function computeNodeLayers({
    nodes: nodes2
  }) {
    const x2 = max2(nodes2, (d) => d.depth) + 1;
    const kx2 = (x1 - x0 - dx) / (x2 - 1);
    const columns = new Array(x2);
    for (const node of nodes2) {
      const i = Math.max(0, Math.min(x2 - 1, Math.floor(align.call(null, node, x2))));
      node.layer = i;
      node.x0 = x0 + i * kx2;
      node.x1 = node.x0 + dx;
      if (columns[i]) columns[i].push(node);
      else columns[i] = [node];
    }
    if (sort2) for (const column of columns) {
      column.sort(sort2);
    }
    return columns;
  }
  function initializeNodeBreadths(columns) {
    const ky2 = min2(columns, (c) => (y1 - y0 - (c.length - 1) * py) / sum(c, value));
    for (const nodes2 of columns) {
      let y2 = y0;
      for (const node of nodes2) {
        node.y0 = y2;
        node.y1 = y2 + node.value * ky2;
        y2 = node.y1 + py;
        for (const link2 of node.sourceLinks) {
          link2.width = link2.value * ky2;
        }
      }
      y2 = (y1 - y2 + py) / (nodes2.length + 1);
      for (let i = 0; i < nodes2.length; ++i) {
        const node = nodes2[i];
        node.y0 += y2 * (i + 1);
        node.y1 += y2 * (i + 1);
      }
      reorderLinks(nodes2);
    }
  }
  function computeNodeBreadths(graph) {
    const columns = computeNodeLayers(graph);
    py = Math.min(dy, (y1 - y0) / (max2(columns, (c) => c.length) - 1));
    initializeNodeBreadths(columns);
    for (let i = 0; i < iterations; ++i) {
      const alpha = Math.pow(0.99, i);
      const beta = Math.max(1 - alpha, (i + 1) / iterations);
      relaxRightToLeft(columns, alpha, beta);
      relaxLeftToRight(columns, alpha, beta);
    }
  }
  function relaxLeftToRight(columns, alpha, beta) {
    for (let i = 1, n = columns.length; i < n; ++i) {
      const column = columns[i];
      for (const target of column) {
        let y2 = 0;
        let w = 0;
        for (const {
          source,
          value: value2
        } of target.targetLinks) {
          let v = value2 * (target.layer - source.layer);
          y2 += targetTop(source, target) * v;
          w += v;
        }
        if (!(w > 0)) continue;
        let dy2 = (y2 / w - target.y0) * alpha;
        target.y0 += dy2;
        target.y1 += dy2;
        reorderNodeLinks(target);
      }
      if (sort2 === void 0) column.sort(ascendingBreadth);
      resolveCollisions(column, beta);
    }
  }
  function relaxRightToLeft(columns, alpha, beta) {
    for (let n = columns.length, i = n - 2; i >= 0; --i) {
      const column = columns[i];
      for (const source of column) {
        let y2 = 0;
        let w = 0;
        for (const {
          target,
          value: value2
        } of source.sourceLinks) {
          let v = value2 * (target.layer - source.layer);
          y2 += sourceTop(source, target) * v;
          w += v;
        }
        if (!(w > 0)) continue;
        let dy2 = (y2 / w - source.y0) * alpha;
        source.y0 += dy2;
        source.y1 += dy2;
        reorderNodeLinks(source);
      }
      if (sort2 === void 0) column.sort(ascendingBreadth);
      resolveCollisions(column, beta);
    }
  }
  function resolveCollisions(nodes2, alpha) {
    const i = nodes2.length >> 1;
    const subject = nodes2[i];
    resolveCollisionsBottomToTop(nodes2, subject.y0 - py, i - 1, alpha);
    resolveCollisionsTopToBottom(nodes2, subject.y1 + py, i + 1, alpha);
    resolveCollisionsBottomToTop(nodes2, y1, nodes2.length - 1, alpha);
    resolveCollisionsTopToBottom(nodes2, y0, 0, alpha);
  }
  function resolveCollisionsTopToBottom(nodes2, y2, i, alpha) {
    for (; i < nodes2.length; ++i) {
      const node = nodes2[i];
      const dy2 = (y2 - node.y0) * alpha;
      if (dy2 > 1e-6) node.y0 += dy2, node.y1 += dy2;
      y2 = node.y1 + py;
    }
  }
  function resolveCollisionsBottomToTop(nodes2, y2, i, alpha) {
    for (; i >= 0; --i) {
      const node = nodes2[i];
      const dy2 = (node.y1 - y2) * alpha;
      if (dy2 > 1e-6) node.y0 -= dy2, node.y1 -= dy2;
      y2 = node.y0 - py;
    }
  }
  function reorderNodeLinks({
    sourceLinks,
    targetLinks
  }) {
    if (linkSort === void 0) {
      for (const {
        source: {
          sourceLinks: sourceLinks2
        }
      } of targetLinks) {
        sourceLinks2.sort(ascendingTargetBreadth);
      }
      for (const {
        target: {
          targetLinks: targetLinks2
        }
      } of sourceLinks) {
        targetLinks2.sort(ascendingSourceBreadth);
      }
    }
  }
  function reorderLinks(nodes2) {
    if (linkSort === void 0) {
      for (const {
        sourceLinks,
        targetLinks
      } of nodes2) {
        sourceLinks.sort(ascendingTargetBreadth);
        targetLinks.sort(ascendingSourceBreadth);
      }
    }
  }
  function targetTop(source, target) {
    let y2 = source.y0 - (source.sourceLinks.length - 1) * py / 2;
    for (const {
      target: node,
      width
    } of source.sourceLinks) {
      if (node === target) break;
      y2 += width + py;
    }
    for (const {
      source: node,
      width
    } of target.targetLinks) {
      if (node === source) break;
      y2 -= width;
    }
    return y2;
  }
  function sourceTop(source, target) {
    let y2 = target.y0 - (target.targetLinks.length - 1) * py / 2;
    for (const {
      source: node,
      width
    } of target.targetLinks) {
      if (node === source) break;
      y2 += width + py;
    }
    for (const {
      target: node,
      width
    } of source.sourceLinks) {
      if (node === target) break;
      y2 -= width;
    }
    return y2;
  }
  return sankey;
}

// node_modules/d3-sankey/node_modules/d3-path/src/path.js
var pi = Math.PI;
var tau = 2 * pi;
var epsilon = 1e-6;
var tauEpsilon = tau - epsilon;
function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null;
  this._ = "";
}
function path() {
  return new Path();
}
Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x2, y2) {
    this._ += "M" + (this._x0 = this._x1 = +x2) + "," + (this._y0 = this._y1 = +y2);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x2, y2) {
    this._ += "L" + (this._x1 = +x2) + "," + (this._y1 = +y2);
  },
  quadraticCurveTo: function(x1, y1, x2, y2) {
    this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x2) + "," + (this._y1 = +y2);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x3, y3) {
    this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x3) + "," + (this._y1 = +y3);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (r < 0) throw new Error("negative radius: " + r);
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    } else if (!(l01_2 > epsilon)) ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    } else {
      var x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }
      this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x2, y2, r, a0, a1, ccw) {
    x2 = +x2, y2 = +y2, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x2 + dx, y0 = y2 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (r < 0) throw new Error("negative radius: " + r);
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    } else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }
    if (!r) return;
    if (da < 0) da = da % tau + tau;
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x2 - dx) + "," + (y2 - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    } else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + +(da >= pi) + "," + cw + "," + (this._x1 = x2 + r * Math.cos(a1)) + "," + (this._y1 = y2 + r * Math.sin(a1));
    }
  },
  rect: function(x2, y2, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x2) + "," + (this._y0 = this._y1 = +y2) + "h" + +w + "v" + +h + "h" + -w + "Z";
  },
  toString: function() {
    return this._;
  }
};
var path_default = path;

// node_modules/d3-sankey/node_modules/d3-shape/src/constant.js
function constant_default2(x2) {
  return function constant2() {
    return x2;
  };
}

// node_modules/d3-sankey/node_modules/d3-shape/src/math.js
var epsilon2 = 1e-12;
var pi2 = Math.PI;
var halfPi = pi2 / 2;
var tau2 = 2 * pi2;

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(x2, y2);
        break;
    }
  }
};
function linear_default2(context) {
  return new Linear(context);
}

// node_modules/d3-sankey/node_modules/d3-shape/src/point.js
function x(p) {
  return p[0];
}
function y(p) {
  return p[1];
}

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/radial.js
var curveRadialLinear = curveRadial(linear_default2);
function Radial(curve) {
  this._curve = curve;
}
Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a2, r) {
    this._curve.point(r * Math.sin(a2), r * -Math.cos(a2));
  }
};
function curveRadial(curve) {
  function radial(context) {
    return new Radial(curve(context));
  }
  radial._curve = curve;
  return radial;
}

// node_modules/d3-sankey/node_modules/d3-shape/src/array.js
var slice2 = Array.prototype.slice;

// node_modules/d3-sankey/node_modules/d3-shape/src/link/index.js
function linkSource(d) {
  return d.source;
}
function linkTarget(d) {
  return d.target;
}
function link(curve) {
  var source = linkSource, target = linkTarget, x2 = x, y2 = y, context = null;
  function link2() {
    var buffer, argv = slice2.call(arguments), s2 = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = path_default();
    curve(context, +x2.apply(this, (argv[0] = s2, argv)), +y2.apply(this, argv), +x2.apply(this, (argv[0] = t, argv)), +y2.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }
  link2.source = function(_) {
    return arguments.length ? (source = _, link2) : source;
  };
  link2.target = function(_) {
    return arguments.length ? (target = _, link2) : target;
  };
  link2.x = function(_) {
    return arguments.length ? (x2 = typeof _ === "function" ? _ : constant_default2(+_), link2) : x2;
  };
  link2.y = function(_) {
    return arguments.length ? (y2 = typeof _ === "function" ? _ : constant_default2(+_), link2) : y2;
  };
  link2.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, link2) : context;
  };
  return link2;
}
function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}
function linkHorizontal() {
  return link(curveHorizontal);
}

// node_modules/d3-sankey/node_modules/d3-shape/src/symbol/diamond.js
var tan30 = Math.sqrt(1 / 3);
var tan30_2 = tan30 * 2;

// node_modules/d3-sankey/node_modules/d3-shape/src/symbol/star.js
var kr = Math.sin(pi2 / 10) / Math.sin(7 * pi2 / 10);
var kx = Math.sin(tau2 / 10) * kr;
var ky = -Math.cos(tau2 / 10) * kr;

// node_modules/d3-sankey/node_modules/d3-shape/src/symbol/triangle.js
var sqrt3 = Math.sqrt(3);

// node_modules/d3-sankey/node_modules/d3-shape/src/symbol/wye.js
var s = Math.sqrt(3) / 2;
var k = 1 / Math.sqrt(12);
var a = (k / 2 + 1) * 3;

// node_modules/d3-sankey/node_modules/d3-shape/src/noop.js
function noop_default() {
}

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/basis.js
function point2(that, x2, y2) {
  that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x2) / 6, (that._y0 + 4 * that._y1 + y2) / 6);
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        point2(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        point2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/basisClosed.js
function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x2, this._y2 = y2;
        break;
      case 1:
        this._point = 2;
        this._x3 = x2, this._y3 = y2;
        break;
      case 2:
        this._point = 3;
        this._x4 = x2, this._y4 = y2;
        this._context.moveTo((this._x0 + 4 * this._x1 + x2) / 6, (this._y0 + 4 * this._y1 + y2) / 6);
        break;
      default:
        point2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/basisOpen.js
function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x0 = (this._x0 + 4 * this._x1 + x2) / 6, y0 = (this._y0 + 4 * this._y1 + y2) / 6;
        this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
        break;
      case 3:
        this._point = 4;
      default:
        point2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/bundle.js
function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}
Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x2 = this._x, y2 = this._y, j = x2.length - 1;
    if (j > 0) {
      var x0 = x2[0], y0 = y2[0], dx = x2[j] - x0, dy = y2[j] - y0, i = -1, t;
      while (++i <= j) {
        t = i / j;
        this._basis.point(this._beta * x2[i] + (1 - this._beta) * (x0 + t * dx), this._beta * y2[i] + (1 - this._beta) * (y0 + t * dy));
      }
    }
    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x2, y2) {
    this._x.push(+x2);
    this._y.push(+y2);
  }
};
var bundle_default = function custom(beta) {
  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }
  bundle.beta = function(beta2) {
    return custom(+beta2);
  };
  return bundle;
}(0.85);

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/cardinal.js
function point3(that, x2, y2) {
  that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x2), that._y2 + that._k * (that._y1 - y2), that._x2, that._y2);
}
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        point3(this, this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        this._x1 = x2, this._y1 = y2;
        break;
      case 2:
        this._point = 3;
      default:
        point3(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var cardinal_default = function custom2(tension) {
  function cardinal(context) {
    return new Cardinal(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom2(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/cardinalClosed.js
function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x2, this._y3 = y2;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x2, this._y4 = y2);
        break;
      case 2:
        this._point = 3;
        this._x5 = x2, this._y5 = y2;
        break;
      default:
        point3(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var cardinalClosed_default2 = function custom3(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom3(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/cardinalOpen.js
function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point3(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var cardinalOpen_default = function custom4(tension) {
  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom4(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/catmullRom.js
function point4(that, x2, y2) {
  var x1 = that._x1, y1 = that._y1, x22 = that._x2, y22 = that._y2;
  if (that._l01_a > epsilon2) {
    var a2 = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a2 - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a2 - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }
  if (that._l23_a > epsilon2) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x22 = (x22 * b + that._x1 * that._l23_2a - x2 * that._l12_2a) / m;
    y22 = (y22 * b + that._y1 * that._l23_2a - y2 * that._l12_2a) / m;
  }
  that._context.bezierCurveTo(x1, y1, x22, y22, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y2;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        point4(this, x2, y2);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var catmullRom_default = function custom5(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom5(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/catmullRomClosed.js
function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y2;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x2, this._y3 = y2;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x2, this._y4 = y2);
        break;
      case 2:
        this._point = 3;
        this._x5 = x2, this._y5 = y2;
        break;
      default:
        point4(this, x2, y2);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var catmullRomClosed_default = function custom6(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom6(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/catmullRomOpen.js
function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y2;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point4(this, x2, y2);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var catmullRomOpen_default = function custom7(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom7(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/linearClosed.js
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) this._context.lineTo(x2, y2);
    else this._point = 1, this._context.moveTo(x2, y2);
  }
};

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/monotone.js
function sign(x2) {
  return x2 < 0 ? -1 : 1;
}
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point5(that, t0, t1) {
  var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point5(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    var t1 = NaN;
    x2 = +x2, y2 = +y2;
    if (x2 === this._x1 && y2 === this._y1) return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point5(this, slope2(this, t1 = slope3(this, x2, y2)), t1);
        break;
      default:
        point5(this, this._t0, t1 = slope3(this, x2, y2));
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
    this._t0 = t1;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x2, y2) {
  MonotoneX.prototype.point.call(this, y2, x2);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x2, y2) {
    this._context.moveTo(y2, x2);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x2, y2) {
    this._context.lineTo(y2, x2);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x3, y3) {
    this._context.bezierCurveTo(y1, x1, y2, x2, y3, x3);
  }
};

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/natural.js
function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x2 = this._x, y2 = this._y, n = x2.length;
    if (n) {
      this._line ? this._context.lineTo(x2[0], y2[0]) : this._context.moveTo(x2[0], y2[0]);
      if (n === 2) {
        this._context.lineTo(x2[1], y2[1]);
      } else {
        var px = controlPoints(x2), py = controlPoints(y2);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x2[i1], y2[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n === 1) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x2, y2) {
    this._x.push(+x2);
    this._y.push(+y2);
  }
};
function controlPoints(x2) {
  var i, n = x2.length - 1, m, a2 = new Array(n), b = new Array(n), r = new Array(n);
  a2[0] = 0, b[0] = 2, r[0] = x2[0] + 2 * x2[1];
  for (i = 1; i < n - 1; ++i) a2[i] = 1, b[i] = 4, r[i] = 4 * x2[i] + 2 * x2[i + 1];
  a2[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x2[n - 1] + x2[n];
  for (i = 1; i < n; ++i) m = a2[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a2[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a2[i] = (r[i] - a2[i + 1]) / b[i];
  b[n - 1] = (x2[n] + a2[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x2[i + 1] - a2[i + 1];
  return [a2, b];
}

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/step.js
function Step(context, t) {
  this._context = context;
  this._t = t;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y2);
          this._context.lineTo(x2, y2);
        } else {
          var x1 = this._x * (1 - this._t) + x2 * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y2);
        }
        break;
      }
    }
    this._x = x2, this._y = y2;
  }
};

// node_modules/d3-sankey/src/sankeyLinkHorizontal.js
function horizontalSource(d) {
  return [d.source.x1, d.y0];
}
function horizontalTarget(d) {
  return [d.target.x0, d.y1];
}
function sankeyLinkHorizontal_default() {
  return linkHorizontal().source(horizontalSource).target(horizontalTarget);
}

// node_modules/@swimlane/ngx-charts/fesm2020/swimlane-ngx-charts.mjs
var _c0 = ["caretElm"];
var _c1 = (a0) => ({
  model: a0
});
function TooltipContentComponent_span_4_ng_template_1_Template(rf, ctx) {
}
function TooltipContentComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, TooltipContentComponent_span_4_ng_template_1_Template, 0, 0, "ng-template", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx_r0.context));
  }
}
function TooltipContentComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r0.title, ɵɵsanitizeHtml);
  }
}
function LegendComponent_header_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "header", 4)(1, "span", 5);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.title);
  }
}
function LegendComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 6)(1, "ngx-charts-legend-entry", 7);
    ɵɵlistener("select", function LegendComponent_li_4_Template_ngx_charts_legend_entry_select_1_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.labelClick.emit($event));
    })("activate", function LegendComponent_li_4_Template_ngx_charts_legend_entry_activate_1_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.activate($event));
    })("deactivate", function LegendComponent_li_4_Template_ngx_charts_legend_entry_deactivate_1_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.deactivate($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("label", entry_r3.label)("formattedLabel", entry_r3.formattedLabel)("color", entry_r3.color)("isActive", ctx_r0.isActive(entry_r3));
  }
}
var _c2 = ["*"];
function ChartComponent_ngx_charts_scale_legend_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ngx-charts-scale-legend", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("horizontal", ctx_r0.legendOptions && ctx_r0.legendOptions.position === ctx_r0.LegendPosition.Below)("valueRange", ctx_r0.legendOptions.domain)("colors", ctx_r0.legendOptions.colors)("height", ctx_r0.view[1])("width", ctx_r0.legendWidth);
  }
}
function ChartComponent_ngx_charts_legend_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-charts-legend", 5);
    ɵɵlistener("labelClick", function ChartComponent_ngx_charts_legend_4_Template_ngx_charts_legend_labelClick_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.legendLabelClick.emit($event));
    })("labelActivate", function ChartComponent_ngx_charts_legend_4_Template_ngx_charts_legend_labelActivate_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.legendLabelActivate.emit($event));
    })("labelDeactivate", function ChartComponent_ngx_charts_legend_4_Template_ngx_charts_legend_labelDeactivate_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.legendLabelDeactivate.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("horizontal", ctx_r0.legendOptions && ctx_r0.legendOptions.position === ctx_r0.LegendPosition.Below)("data", ctx_r0.legendOptions.domain)("title", ctx_r0.legendOptions.title)("colors", ctx_r0.legendOptions.colors)("height", ctx_r0.view[1])("width", ctx_r0.legendWidth)("activeEntries", ctx_r0.activeEntries);
  }
}
var _c3 = ["ngx-charts-axis-label", ""];
var _c4 = ["ticksel"];
var _c5 = ["ngx-charts-x-axis-ticks", ""];
function XAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementContainer(0);
  }
}
function XAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_template_5__svg_ng_container_0__svg_tspan_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "tspan", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tickLine_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    ɵɵattribute("y", i_r2 * 12);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", tickLine_r1, " ");
  }
}
function XAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_template_5__svg_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, XAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_template_5__svg_ng_container_0__svg_tspan_1_Template, 2, 2, "tspan", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const tickLines_r3 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngForOf", tickLines_r3);
  }
}
function XAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, XAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_template_5__svg_ng_container_0_Template, 2, 1, "ng-container", 6);
  }
  if (rf & 2) {
    const tick_r4 = ɵɵnextContext(2).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r4.tickChunks(tick_r4));
  }
}
function XAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const tickFormatted_r6 = ɵɵnextContext().ngIf;
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ctx_r4.tickTrim(tickFormatted_r6), " ");
  }
}
function XAxisTicksComponent__svg_g_2__svg_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "title");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "text", 7);
    ɵɵtemplate(4, XAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_container_4_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
    ɵɵtemplate(5, XAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_template_5_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(7, XAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_template_7_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const tickFormatted_r6 = ctx.ngIf;
    const tmplMultilineTick_r7 = ɵɵreference(6);
    const tmplSinglelineTick_r8 = ɵɵreference(8);
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(tickFormatted_r6);
    ɵɵadvance();
    ɵɵattribute("text-anchor", ctx_r4.textAnchor)("transform", ctx_r4.textTransform);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.isWrapTicksSupported)("ngIfThen", tmplMultilineTick_r7)("ngIfElse", tmplSinglelineTick_r8);
  }
}
function XAxisTicksComponent__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 5);
    ɵɵtemplate(1, XAxisTicksComponent__svg_g_2__svg_ng_container_1_Template, 9, 6, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tick_r4 = ctx.$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵattribute("transform", ctx_r4.tickTransform(tick_r4));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.tickFormat(tick_r4));
  }
}
function XAxisTicksComponent__svg_g_3__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵelement(1, "line", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵattribute("transform", ctx_r4.gridLineTransform());
    ɵɵadvance();
    ɵɵattribute("y1", -ctx_r4.gridLineHeight);
  }
}
function XAxisTicksComponent__svg_g_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, XAxisTicksComponent__svg_g_3__svg_g_1_Template, 2, 2, "g", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tick_r9 = ctx.$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵattribute("transform", ctx_r4.tickTransform(tick_r9));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.showGridLines);
  }
}
var _c6 = ["ngx-charts-x-axis", ""];
function XAxisComponent__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 2);
    ɵɵlistener("dimensionsChanged", function XAxisComponent__svg_g_1_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.emitTicksHeight($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("trimTicks", ctx_r1.trimTicks)("rotateTicks", ctx_r1.rotateTicks)("maxTickLength", ctx_r1.maxTickLength)("tickFormatting", ctx_r1.tickFormatting)("tickArguments", ctx_r1.tickArguments)("tickStroke", ctx_r1.tickStroke)("scale", ctx_r1.xScale)("orient", ctx_r1.xOrient)("showGridLines", ctx_r1.showGridLines)("gridLineHeight", ctx_r1.dims.height)("width", ctx_r1.dims.width)("tickValues", ctx_r1.ticks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function XAxisComponent__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "g", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("label", ctx_r1.labelText)("offset", ctx_r1.labelOffset)("orient", ctx_r1.orientation.Bottom)("height", ctx_r1.dims.height)("width", ctx_r1.dims.width);
  }
}
var _c7 = ["ngx-charts-y-axis-ticks", ""];
function YAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementContainer(0);
  }
}
function YAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_template_5__svg_ng_container_0__svg_ng_container_1__svg_tspan_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "tspan", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tickLine_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext(6);
    ɵɵattribute("y", i_r2 * (8 + ctx_r2.tickSpacing));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", tickLine_r1, " ");
  }
}
function YAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_template_5__svg_ng_container_0__svg_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, YAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_template_5__svg_ng_container_0__svg_ng_container_1__svg_tspan_1_Template, 2, 2, "tspan", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const tickLines_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵproperty("ngForOf", tickLines_r4);
  }
}
function YAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_template_5__svg_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, YAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_template_5__svg_ng_container_0__svg_ng_container_1_Template, 2, 1, "ng-container", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const tickLines_r4 = ctx.ngIf;
    ɵɵnextContext(2);
    const tmplSinglelineTick_r5 = ɵɵreference(8);
    ɵɵadvance();
    ɵɵproperty("ngIf", tickLines_r4.length > 1)("ngIfElse", tmplSinglelineTick_r5);
  }
}
function YAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, YAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_template_5__svg_ng_container_0_Template, 2, 2, "ng-container", 7);
  }
  if (rf & 2) {
    const tick_r6 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r2.tickChunks(tick_r6));
  }
}
function YAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const tickFormatted_r7 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ctx_r2.tickTrim(tickFormatted_r7), " ");
  }
}
function YAxisTicksComponent__svg_g_2__svg_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "title");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "text", 8);
    ɵɵtemplate(4, YAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_container_4_Template, 1, 0, "ng-container", 9);
    ɵɵelementEnd();
    ɵɵtemplate(5, YAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_template_5_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(7, YAxisTicksComponent__svg_g_2__svg_ng_container_1__svg_ng_template_7_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const tickFormatted_r7 = ctx.ngIf;
    const tmplMultilineTick_r8 = ɵɵreference(6);
    const tmplSinglelineTick_r5 = ɵɵreference(8);
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(tickFormatted_r7);
    ɵɵadvance();
    ɵɵstyleProp("font-size", "12px");
    ɵɵattribute("dy", ctx_r2.dy)("x", ctx_r2.x1)("y", ctx_r2.y1)("text-anchor", ctx_r2.textAnchor);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.wrapTicks)("ngIfThen", tmplMultilineTick_r8)("ngIfElse", tmplSinglelineTick_r5);
  }
}
function YAxisTicksComponent__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 6);
    ɵɵtemplate(1, YAxisTicksComponent__svg_g_2__svg_ng_container_1_Template, 9, 10, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tick_r6 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("transform", ctx_r2.transform(tick_r6));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.tickFormat(tick_r6));
  }
}
function YAxisTicksComponent__svg_path_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "path", 13);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("d", ctx_r2.referenceAreaPath)("transform", ctx_r2.gridLineTransform());
  }
}
function YAxisTicksComponent__svg_g_4__svg_g_1__svg_line_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "line", 15);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵattribute("x2", ctx_r2.gridLineWidth);
  }
}
function YAxisTicksComponent__svg_g_4__svg_g_1__svg_line_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "line", 15);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵattribute("x2", -ctx_r2.gridLineWidth);
  }
}
function YAxisTicksComponent__svg_g_4__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, YAxisTicksComponent__svg_g_4__svg_g_1__svg_line_1_Template, 1, 1, "line", 14)(2, YAxisTicksComponent__svg_g_4__svg_g_1__svg_line_2_Template, 1, 1, "line", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵattribute("transform", ctx_r2.gridLineTransform());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.orient === ctx_r2.Orientation.Left);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.orient === ctx_r2.Orientation.Right);
  }
}
function YAxisTicksComponent__svg_g_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, YAxisTicksComponent__svg_g_4__svg_g_1_Template, 3, 3, "g", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tick_r9 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("transform", ctx_r2.transform(tick_r9));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.showGridLines);
  }
}
function YAxisTicksComponent__svg_g_5__svg_g_1__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "title");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "text", 17);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const refLine_r10 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.tickTrim(ctx_r2.tickFormat(refLine_r10.value)));
    ɵɵadvance();
    ɵɵattribute("dy", ctx_r2.dy)("y", -6)("x", ctx_r2.gridLineWidth)("text-anchor", ctx_r2.textAnchor);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", refLine_r10.name, " ");
  }
}
function YAxisTicksComponent__svg_g_5__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵelement(1, "line", 16);
    ɵɵtemplate(2, YAxisTicksComponent__svg_g_5__svg_g_1__svg_g_2_Template, 5, 6, "g", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const refLine_r10 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("transform", ctx_r2.transform(refLine_r10.value));
    ɵɵadvance();
    ɵɵattribute("x2", ctx_r2.gridLineWidth)("transform", ctx_r2.gridLineTransform());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.showRefLabels);
  }
}
function YAxisTicksComponent__svg_g_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, YAxisTicksComponent__svg_g_5__svg_g_1_Template, 3, 4, "g", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.showRefLines);
  }
}
var _c8 = ["ngx-charts-y-axis", ""];
function YAxisComponent__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 2);
    ɵɵlistener("dimensionsChanged", function YAxisComponent__svg_g_1_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.emitTicksWidth($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("trimTicks", ctx_r1.trimTicks)("maxTickLength", ctx_r1.maxTickLength)("tickFormatting", ctx_r1.tickFormatting)("tickArguments", ctx_r1.tickArguments)("tickValues", ctx_r1.ticks)("tickStroke", ctx_r1.tickStroke)("scale", ctx_r1.yScale)("orient", ctx_r1.yOrient)("showGridLines", ctx_r1.showGridLines)("gridLineWidth", ctx_r1.dims.width)("referenceLines", ctx_r1.referenceLines)("showRefLines", ctx_r1.showRefLines)("showRefLabels", ctx_r1.showRefLabels)("height", ctx_r1.dims.height)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function YAxisComponent__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "g", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("label", ctx_r1.labelText)("offset", ctx_r1.labelOffset)("orient", ctx_r1.yOrient)("height", ctx_r1.dims.height)("width", ctx_r1.dims.width);
  }
}
var _c9 = ["ngx-charts-svg-linear-gradient", ""];
function SvgLinearGradientComponent__svg_stop_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "stop");
  }
  if (rf & 2) {
    const stop_r1 = ctx.$implicit;
    ɵɵstyleProp("stop-color", stop_r1.color)("stop-opacity", stop_r1.opacity);
    ɵɵattribute("offset", stop_r1.offset + "%");
  }
}
var _c10 = ["ngx-charts-circle", ""];
var _c11 = ["ngx-charts-circle-series", ""];
var _c12 = (a0) => ({
  name: a0
});
function CircleSeriesComponent__svg_g_0__svg_rect_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "rect", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("@animationState", "active");
    ɵɵattribute("x", ctx_r1.circle.cx - ctx_r1.circle.radius)("y", ctx_r1.circle.cy)("width", ctx_r1.circle.radius * 2)("height", ctx_r1.circle.height)("fill", ctx_r1.gradientFill);
  }
}
function CircleSeriesComponent__svg_g_0__svg_rect_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "rect", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("x", ctx_r1.circle.cx - ctx_r1.circle.radius)("y", ctx_r1.circle.cy)("width", ctx_r1.circle.radius * 2)("height", ctx_r1.circle.height)("fill", ctx_r1.gradientFill);
  }
}
function CircleSeriesComponent__svg_g_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "defs");
    ɵɵelement(2, "g", 1);
    ɵɵelementEnd();
    ɵɵtemplate(3, CircleSeriesComponent__svg_g_0__svg_rect_3_Template, 1, 6, "rect", 2)(4, CircleSeriesComponent__svg_g_0__svg_rect_4_Template, 1, 5, "rect", 2);
    ɵɵelementStart(5, "g", 3);
    ɵɵlistener("select", function CircleSeriesComponent__svg_g_0_Template_g_select_5_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClick(ctx_r1.circle.data));
    })("activate", function CircleSeriesComponent__svg_g_0_Template_g_activate_5_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.activateCircle());
    })("deactivate", function CircleSeriesComponent__svg_g_0_Template_g_deactivate_5_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.deactivateCircle());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("orientation", ctx_r1.barOrientation.Vertical)("name", ctx_r1.gradientId)("stops", ctx_r1.circle.gradientStops);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.isSSR && ctx_r1.barVisible && ctx_r1.type === "standard");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isSSR && ctx_r1.barVisible && ctx_r1.type === "standard");
    ɵɵadvance();
    ɵɵclassProp("active", ctx_r1.isActive(ɵɵpureFunction1(20, _c12, ctx_r1.circle.seriesName)));
    ɵɵproperty("cx", ctx_r1.circle.cx)("cy", ctx_r1.circle.cy)("r", ctx_r1.circle.radius)("fill", ctx_r1.circle.color)("pointerEvents", ctx_r1.circle.value === 0 ? "none" : "all")("data", ctx_r1.circle.value)("classNames", ctx_r1.circle.classNames)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipPlacement", ctx_r1.placementTypes.Top)("tooltipType", ctx_r1.styleTypes.tooltip)("tooltipTitle", ctx_r1.tooltipTemplate ? void 0 : ctx_r1.getTooltipText(ctx_r1.circle))("tooltipTemplate", ctx_r1.tooltipTemplate)("tooltipContext", ctx_r1.circle.data);
  }
}
var _c13 = ["ngx-charts-grid-panel", ""];
var _c14 = ["ngx-charts-grid-panel-series", ""];
function GridPanelSeriesComponent__svg_g_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "g", 1);
  }
  if (rf & 2) {
    const gridPanel_r1 = ctx.$implicit;
    ɵɵclassProp("grid-panel", true)("odd", gridPanel_r1.class === "odd")("even", gridPanel_r1.class === "even");
    ɵɵproperty("height", gridPanel_r1.height)("width", gridPanel_r1.width)("x", gridPanel_r1.x)("y", gridPanel_r1.y);
  }
}
var _c15 = ["ngx-charts-svg-radial-gradient", ""];
function SvgRadialGradientComponent__svg_stop_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "stop");
  }
  if (rf & 2) {
    const stop_r1 = ctx.$implicit;
    ɵɵstyleProp("stop-color", stop_r1.color)("stop-opacity", stop_r1.opacity);
    ɵɵattribute("offset", stop_r1.offset + "%");
  }
}
var _c16 = ["ngx-charts-area", ""];
function AreaComponent__svg_defs_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "defs");
    ɵɵelement(1, "g", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("orientation", ctx_r0.barOrientation.Vertical)("name", ctx_r0.gradientId)("stops", ctx_r0.gradientStops);
  }
}
var _c17 = ["ngx-charts-count-up", ""];
var _c18 = ["tooltipAnchor"];
var _c19 = ["ngx-charts-tooltip-area", ""];
function TooltipArea__svg_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵelement(1, "span", 7);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tooltipItem_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵstyleProp("background-color", tooltipItem_r2.color);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.getToolTipText(tooltipItem_r2), " ");
  }
}
function TooltipArea__svg_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtemplate(1, TooltipArea__svg_ng_template_2_div_1_Template, 3, 3, "div", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const model_r4 = ctx.model;
    ɵɵadvance();
    ɵɵproperty("ngForOf", model_r4);
  }
}
var _c20 = ["ngx-charts-timeline", ""];
function AdvancedLegendComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("countTo", ctx_r0.roundedTotal)("valueFormatting", ctx_r0.valueFormatting);
  }
}
function AdvancedLegendComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.valueFormatting ? ctx_r0.valueFormatting(ctx_r0.roundedTotal) : ctx_r0.defaultValueFormatting(ctx_r0.roundedTotal), " ");
  }
}
function AdvancedLegendComponent_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 16);
  }
  if (rf & 2) {
    const legendItem_r3 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("countTo", legendItem_r3._value)("valueFormatting", ctx_r0.valueFormatting);
  }
}
function AdvancedLegendComponent_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const legendItem_r3 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.valueFormatting ? ctx_r0.valueFormatting(legendItem_r3.value) : ctx_r0.defaultValueFormatting(legendItem_r3.value), " ");
  }
}
function AdvancedLegendComponent_div_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 18);
  }
  if (rf & 2) {
    const legendItem_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("countTo", legendItem_r3.percentage)("countSuffix", "%");
  }
}
function AdvancedLegendComponent_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const legendItem_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1("", legendItem_r3.percentage.toLocaleString(), "%");
  }
}
function AdvancedLegendComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵlistener("mouseenter", function AdvancedLegendComponent_div_7_Template_div_mouseenter_0_listener() {
      const legendItem_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.activate.emit(legendItem_r3.data));
    })("mouseleave", function AdvancedLegendComponent_div_7_Template_div_mouseleave_0_listener() {
      const legendItem_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.deactivate.emit(legendItem_r3.data));
    })("click", function AdvancedLegendComponent_div_7_Template_div_click_0_listener() {
      const legendItem_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.select.emit(legendItem_r3.data));
    });
    ɵɵelement(1, "div", 10);
    ɵɵtemplate(2, AdvancedLegendComponent_div_7_div_2_Template, 1, 2, "div", 11)(3, AdvancedLegendComponent_div_7_div_3_Template, 2, 1, "div", 12);
    ɵɵelementStart(4, "div", 13);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵtemplate(6, AdvancedLegendComponent_div_7_div_6_Template, 1, 2, "div", 14)(7, AdvancedLegendComponent_div_7_div_7_Template, 2, 1, "div", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const legendItem_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵstyleProp("border-left-color", legendItem_r3.color);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.animations);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.animations);
    ɵɵadvance(2);
    ɵɵtextInterpolate(legendItem_r3.displayLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.animations);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.animations);
  }
}
var _c21 = ["ngx-charts-area-series", ""];
var _c22 = ["tooltipTemplate"];
var _c23 = ["seriesTooltipTemplate"];
var _c24 = (a0, a1) => [a0, a1];
function AreaChartComponent__svg_g_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 7);
    ɵɵlistener("dimensionsChanged", function AreaChartComponent__svg_g_5_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateXAxisHeight($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("xScale", ctx_r1.xScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showXAxisLabel)("labelText", ctx_r1.xAxisLabel)("trimTicks", ctx_r1.trimXAxisTicks)("rotateTicks", ctx_r1.rotateXAxisTicks)("maxTickLength", ctx_r1.maxXAxisTickLength)("tickFormatting", ctx_r1.xAxisTickFormatting)("ticks", ctx_r1.xAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function AreaChartComponent__svg_g_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 8);
    ɵɵlistener("dimensionsChanged", function AreaChartComponent__svg_g_6_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateYAxisWidth($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function AreaChartComponent__svg_g_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵelement(1, "g", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const series_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("baseValue", ctx_r1.baseValue)("colors", ctx_r1.colors)("data", series_r4)("activeEntries", ctx_r1.activeEntries)("scaleType", ctx_r1.scaleType)("gradient", ctx_r1.gradient)("curve", ctx_r1.curve)("animations", ctx_r1.animations);
  }
}
function AreaChartComponent__svg_g_9__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 13);
    ɵɵlistener("select", function AreaChartComponent__svg_g_9__svg_g_2_Template_g_select_1_listener($event) {
      const series_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, series_r7));
    })("activate", function AreaChartComponent__svg_g_9__svg_g_2_Template_g_activate_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event));
    })("deactivate", function AreaChartComponent__svg_g_9__svg_g_2_Template_g_deactivate_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const series_r7 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("colors", ctx_r1.colors)("activeEntries", ctx_r1.activeEntries)("data", series_r7)("scaleType", ctx_r1.scaleType)("visibleValue", ctx_r1.hoveredVertical)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate);
  }
}
function AreaChartComponent__svg_g_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 10);
    ɵɵlistener("mouseleave", function AreaChartComponent__svg_g_9_Template_g_mouseleave_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.hideCircles());
    });
    ɵɵelementStart(1, "g", 11);
    ɵɵlistener("hover", function AreaChartComponent__svg_g_9_Template_g_hover_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateHoveredVertical($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, AreaChartComponent__svg_g_9__svg_g_2_Template, 2, 9, "g", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("dims", ctx_r1.dims)("xSet", ctx_r1.xSet)("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("results", ctx_r1.results)("colors", ctx_r1.colors)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.seriesTooltipTemplate);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results);
  }
}
function AreaChartComponent__svg_g_10__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵelement(1, "g", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const series_r9 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("xScale", ctx_r1.timelineXScale)("yScale", ctx_r1.timelineYScale)("baseValue", ctx_r1.baseValue)("colors", ctx_r1.colors)("data", series_r9)("scaleType", ctx_r1.scaleType)("gradient", ctx_r1.gradient)("curve", ctx_r1.curve)("animations", ctx_r1.animations);
  }
}
function AreaChartComponent__svg_g_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 14);
    ɵɵlistener("onDomainChange", function AreaChartComponent__svg_g_10_Template_g_onDomainChange_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateDomain($event));
    });
    ɵɵtemplate(1, AreaChartComponent__svg_g_10__svg_g_1_Template, 2, 9, "g", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("results", ctx_r1.results)("view", ɵɵpureFunction2(10, _c24, ctx_r1.timelineWidth, ctx_r1.height))("height", ctx_r1.timelineHeight)("scheme", ctx_r1.scheme)("customColors", ctx_r1.customColors)("legend", ctx_r1.legend)("scaleType", ctx_r1.scaleType);
    ɵɵattribute("transform", ctx_r1.timelineTransform);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
function AreaChartNormalizedComponent__svg_g_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 7);
    ɵɵlistener("dimensionsChanged", function AreaChartNormalizedComponent__svg_g_5_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateXAxisHeight($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("xScale", ctx_r1.xScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showXAxisLabel)("labelText", ctx_r1.xAxisLabel)("trimTicks", ctx_r1.trimXAxisTicks)("rotateTicks", ctx_r1.rotateXAxisTicks)("maxTickLength", ctx_r1.maxXAxisTickLength)("tickFormatting", ctx_r1.xAxisTickFormatting)("ticks", ctx_r1.xAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function AreaChartNormalizedComponent__svg_g_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 8);
    ɵɵlistener("dimensionsChanged", function AreaChartNormalizedComponent__svg_g_6_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateYAxisWidth($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function AreaChartNormalizedComponent__svg_g_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵelement(1, "g", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const series_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("colors", ctx_r1.colors)("data", series_r4)("scaleType", ctx_r1.scaleType)("activeEntries", ctx_r1.activeEntries)("gradient", ctx_r1.gradient)("normalized", true)("curve", ctx_r1.curve)("animations", ctx_r1.animations);
  }
}
function AreaChartNormalizedComponent__svg_g_9__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 13);
    ɵɵlistener("select", function AreaChartNormalizedComponent__svg_g_9__svg_g_2_Template_g_select_1_listener($event) {
      const series_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, series_r7));
    })("activate", function AreaChartNormalizedComponent__svg_g_9__svg_g_2_Template_g_activate_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event));
    })("deactivate", function AreaChartNormalizedComponent__svg_g_9__svg_g_2_Template_g_deactivate_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const series_r7 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("type", ctx_r1.seriesType.Stacked)("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("colors", ctx_r1.colors)("activeEntries", ctx_r1.activeEntries)("data", series_r7)("scaleType", ctx_r1.scaleType)("visibleValue", ctx_r1.hoveredVertical)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate);
  }
}
function AreaChartNormalizedComponent__svg_g_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 10);
    ɵɵlistener("mouseleave", function AreaChartNormalizedComponent__svg_g_9_Template_g_mouseleave_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.hideCircles());
    });
    ɵɵelementStart(1, "g", 11);
    ɵɵlistener("hover", function AreaChartNormalizedComponent__svg_g_9_Template_g_hover_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateHoveredVertical($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, AreaChartNormalizedComponent__svg_g_9__svg_g_2_Template, 2, 10, "g", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("dims", ctx_r1.dims)("xSet", ctx_r1.xSet)("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("results", ctx_r1.results)("colors", ctx_r1.colors)("showPercentage", true)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.seriesTooltipTemplate);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results);
  }
}
function AreaChartNormalizedComponent__svg_g_10__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵelement(1, "g", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const series_r9 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("xScale", ctx_r1.timelineXScale)("yScale", ctx_r1.timelineYScale)("colors", ctx_r1.colors)("data", series_r9)("scaleType", ctx_r1.scaleType)("gradient", ctx_r1.gradient)("normalized", true)("curve", ctx_r1.curve)("animations", ctx_r1.animations);
  }
}
function AreaChartNormalizedComponent__svg_g_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 14);
    ɵɵlistener("onDomainChange", function AreaChartNormalizedComponent__svg_g_10_Template_g_onDomainChange_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateDomain($event));
    });
    ɵɵtemplate(1, AreaChartNormalizedComponent__svg_g_10__svg_g_1_Template, 2, 9, "g", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("results", ctx_r1.results)("view", ɵɵpureFunction2(10, _c24, ctx_r1.timelineWidth, ctx_r1.height))("height", ctx_r1.timelineHeight)("scheme", ctx_r1.scheme)("customColors", ctx_r1.customColors)("legend", ctx_r1.legend)("scaleType", ctx_r1.scaleType);
    ɵɵattribute("transform", ctx_r1.timelineTransform);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
var _c25 = ".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n";
function AreaChartStackedComponent__svg_g_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 7);
    ɵɵlistener("dimensionsChanged", function AreaChartStackedComponent__svg_g_5_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateXAxisHeight($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("xScale", ctx_r1.xScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showXAxisLabel)("labelText", ctx_r1.xAxisLabel)("trimTicks", ctx_r1.trimXAxisTicks)("rotateTicks", ctx_r1.rotateXAxisTicks)("maxTickLength", ctx_r1.maxXAxisTickLength)("tickFormatting", ctx_r1.xAxisTickFormatting)("ticks", ctx_r1.xAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function AreaChartStackedComponent__svg_g_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 8);
    ɵɵlistener("dimensionsChanged", function AreaChartStackedComponent__svg_g_6_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateYAxisWidth($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function AreaChartStackedComponent__svg_g_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵelement(1, "g", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const series_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("colors", ctx_r1.colors)("data", series_r4)("scaleType", ctx_r1.scaleType)("gradient", ctx_r1.gradient)("activeEntries", ctx_r1.activeEntries)("stacked", true)("curve", ctx_r1.curve)("animations", ctx_r1.animations);
  }
}
function AreaChartStackedComponent__svg_g_9__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 12);
    ɵɵlistener("select", function AreaChartStackedComponent__svg_g_9__svg_g_2_Template_g_select_1_listener($event) {
      const series_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, series_r7));
    })("activate", function AreaChartStackedComponent__svg_g_9__svg_g_2_Template_g_activate_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event));
    })("deactivate", function AreaChartStackedComponent__svg_g_9__svg_g_2_Template_g_deactivate_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const series_r7 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("type", ctx_r1.seriesType.Stacked)("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("colors", ctx_r1.colors)("activeEntries", ctx_r1.activeEntries)("data", series_r7)("scaleType", ctx_r1.scaleType)("visibleValue", ctx_r1.hoveredVertical)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate);
  }
}
function AreaChartStackedComponent__svg_g_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 10);
    ɵɵlistener("mouseleave", function AreaChartStackedComponent__svg_g_9_Template_g_mouseleave_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.hideCircles());
    });
    ɵɵelementStart(1, "g", 11);
    ɵɵlistener("hover", function AreaChartStackedComponent__svg_g_9_Template_g_hover_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateHoveredVertical($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, AreaChartStackedComponent__svg_g_9__svg_g_2_Template, 2, 10, "g", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("dims", ctx_r1.dims)("xSet", ctx_r1.xSet)("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("results", ctx_r1.results)("colors", ctx_r1.colors)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.seriesTooltipTemplate);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
function AreaChartStackedComponent__svg_g_10__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵelement(1, "g", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const series_r9 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("xScale", ctx_r1.timelineXScale)("yScale", ctx_r1.timelineYScale)("colors", ctx_r1.colors)("data", series_r9)("scaleType", ctx_r1.scaleType)("gradient", ctx_r1.gradient)("stacked", true)("curve", ctx_r1.curve)("animations", ctx_r1.animations);
  }
}
function AreaChartStackedComponent__svg_g_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 13);
    ɵɵlistener("onDomainChange", function AreaChartStackedComponent__svg_g_10_Template_g_onDomainChange_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateDomain($event));
    });
    ɵɵtemplate(1, AreaChartStackedComponent__svg_g_10__svg_g_1_Template, 2, 9, "g", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("results", ctx_r1.results)("view", ɵɵpureFunction2(10, _c24, ctx_r1.timelineWidth, ctx_r1.height))("height", ctx_r1.timelineHeight)("scheme", ctx_r1.scheme)("customColors", ctx_r1.customColors)("legend", ctx_r1.legend)("scaleType", ctx_r1.scaleType);
    ɵɵattribute("transform", ctx_r1.timelineTransform);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
var _c26 = ["ngx-charts-bar", ""];
function BarComponent__svg_defs_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "defs");
    ɵɵelement(1, "g", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("orientation", ctx_r0.orientation)("name", ctx_r0.gradientId)("stops", ctx_r0.gradientStops);
  }
}
var _c27 = ["ngx-charts-bar-label", ""];
var _c28 = ["ngx-charts-series-horizontal", ""];
function SeriesHorizontal__svg_g_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 2);
    ɵɵlistener("select", function SeriesHorizontal__svg_g_0_Template_g_select_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.click($event));
    })("activate", function SeriesHorizontal__svg_g_0_Template_g_activate_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.activate.emit($event));
    })("deactivate", function SeriesHorizontal__svg_g_0_Template_g_deactivate_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.deactivate.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bar_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("@animationState", "active")("width", bar_r3.width)("height", bar_r3.height)("x", bar_r3.x)("y", bar_r3.y)("fill", bar_r3.color)("stops", bar_r3.gradientStops)("data", bar_r3.data)("orientation", ctx_r1.barOrientation.Horizontal)("roundEdges", bar_r3.roundEdges)("gradient", ctx_r1.gradient)("isActive", ctx_r1.isActive(bar_r3.data))("ariaLabel", bar_r3.ariaLabel)("animations", ctx_r1.animations)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipPlacement", ctx_r1.tooltipPlacement)("tooltipType", ctx_r1.tooltipType)("tooltipTitle", ctx_r1.tooltipTemplate ? void 0 : bar_r3.tooltipText)("tooltipTemplate", ctx_r1.tooltipTemplate)("tooltipContext", bar_r3.data)("noBarWhenZero", ctx_r1.noBarWhenZero);
  }
}
function SeriesHorizontal__svg_g_1__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 4);
    ɵɵlistener("dimensionsChanged", function SeriesHorizontal__svg_g_1__svg_g_1_Template_g_dimensionsChanged_0_listener($event) {
      const i_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.dataLabelWidthChanged.emit({
        size: $event,
        index: i_r5
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const b_r6 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("barX", b_r6.x)("barY", b_r6.y)("barWidth", b_r6.width)("barHeight", b_r6.height)("value", b_r6.total)("valueFormatting", ctx_r1.dataLabelFormatting)("orientation", ctx_r1.barOrientation.Horizontal);
  }
}
function SeriesHorizontal__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, SeriesHorizontal__svg_g_1__svg_g_1_Template, 1, 7, "g", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.barsForDataLabels)("ngForTrackBy", ctx_r1.trackDataLabelBy);
  }
}
function BarHorizontalComponent__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 5);
    ɵɵlistener("dimensionsChanged", function BarHorizontalComponent__svg_g_2_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateXAxisHeight($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("xScale", ctx_r1.xScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showXAxisLabel)("labelText", ctx_r1.xAxisLabel)("trimTicks", ctx_r1.trimXAxisTicks)("rotateTicks", ctx_r1.rotateXAxisTicks)("maxTickLength", ctx_r1.maxXAxisTickLength)("tickFormatting", ctx_r1.xAxisTickFormatting)("ticks", ctx_r1.xAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function BarHorizontalComponent__svg_g_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 6);
    ɵɵlistener("dimensionsChanged", function BarHorizontalComponent__svg_g_3_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateYAxisWidth($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks)("yAxisOffset", ctx_r1.dataLabelMaxWidth.negative)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function BarHorizontal2DComponent__svg_g_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 6);
    ɵɵlistener("dimensionsChanged", function BarHorizontal2DComponent__svg_g_3_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateXAxisHeight($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("xScale", ctx_r1.valueScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showXAxisLabel)("labelText", ctx_r1.xAxisLabel)("trimTicks", ctx_r1.trimXAxisTicks)("rotateTicks", ctx_r1.rotateXAxisTicks)("maxTickLength", ctx_r1.maxXAxisTickLength)("tickFormatting", ctx_r1.xAxisTickFormatting)("ticks", ctx_r1.xAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function BarHorizontal2DComponent__svg_g_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 7);
    ɵɵlistener("dimensionsChanged", function BarHorizontal2DComponent__svg_g_4_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateYAxisWidth($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("yScale", ctx_r1.groupScale)("dims", ctx_r1.dims)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks)("yAxisOffset", ctx_r1.dataLabelMaxWidth.negative)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function BarHorizontal2DComponent__svg_g_5__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 9);
    ɵɵlistener("select", function BarHorizontal2DComponent__svg_g_5__svg_g_1_Template_g_select_1_listener($event) {
      const group_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, group_r5));
    })("activate", function BarHorizontal2DComponent__svg_g_5__svg_g_1_Template_g_activate_1_listener($event) {
      const group_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event, group_r5));
    })("deactivate", function BarHorizontal2DComponent__svg_g_5__svg_g_1_Template_g_deactivate_1_listener($event) {
      const group_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event, group_r5));
    })("dataLabelWidthChanged", function BarHorizontal2DComponent__svg_g_5__svg_g_1_Template_g_dataLabelWidthChanged_1_listener($event) {
      const index_r6 = ɵɵrestoreView(_r4).index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDataLabelMaxWidthChanged($event, index_r6));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("@animationState", "active");
    ɵɵattribute("transform", ctx_r1.groupTransform(group_r5));
    ɵɵadvance();
    ɵɵproperty("xScale", ctx_r1.valueScale)("activeEntries", ctx_r1.activeEntries)("yScale", ctx_r1.innerScale)("colors", ctx_r1.colors)("series", group_r5.series)("dims", ctx_r1.dims)("gradient", ctx_r1.gradient)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate)("seriesName", group_r5.name)("roundEdges", ctx_r1.roundEdges)("animations", ctx_r1.animations)("showDataLabel", ctx_r1.showDataLabel)("dataLabelFormatting", ctx_r1.dataLabelFormatting)("noBarWhenZero", ctx_r1.noBarWhenZero);
  }
}
function BarHorizontal2DComponent__svg_g_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, BarHorizontal2DComponent__svg_g_5__svg_g_1_Template, 2, 17, "g", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
function BarHorizontal2DComponent__svg_g_6__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 9);
    ɵɵlistener("select", function BarHorizontal2DComponent__svg_g_6__svg_g_1_Template_g_select_1_listener($event) {
      const group_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, group_r8));
    })("activate", function BarHorizontal2DComponent__svg_g_6__svg_g_1_Template_g_activate_1_listener($event) {
      const group_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event, group_r8));
    })("deactivate", function BarHorizontal2DComponent__svg_g_6__svg_g_1_Template_g_deactivate_1_listener($event) {
      const group_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event, group_r8));
    })("dataLabelWidthChanged", function BarHorizontal2DComponent__svg_g_6__svg_g_1_Template_g_dataLabelWidthChanged_1_listener($event) {
      const index_r9 = ɵɵrestoreView(_r7).index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDataLabelMaxWidthChanged($event, index_r9));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const group_r8 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("transform", ctx_r1.groupTransform(group_r8));
    ɵɵadvance();
    ɵɵproperty("xScale", ctx_r1.valueScale)("activeEntries", ctx_r1.activeEntries)("yScale", ctx_r1.innerScale)("colors", ctx_r1.colors)("series", group_r8.series)("dims", ctx_r1.dims)("gradient", ctx_r1.gradient)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate)("seriesName", group_r8.name)("roundEdges", ctx_r1.roundEdges)("animations", ctx_r1.animations)("showDataLabel", ctx_r1.showDataLabel)("dataLabelFormatting", ctx_r1.dataLabelFormatting)("noBarWhenZero", ctx_r1.noBarWhenZero);
  }
}
function BarHorizontal2DComponent__svg_g_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, BarHorizontal2DComponent__svg_g_6__svg_g_1_Template, 2, 16, "g", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
function BarHorizontalNormalizedComponent__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 5);
    ɵɵlistener("dimensionsChanged", function BarHorizontalNormalizedComponent__svg_g_2_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateXAxisHeight($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("xScale", ctx_r1.xScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showXAxisLabel)("labelText", ctx_r1.xAxisLabel)("trimTicks", ctx_r1.trimXAxisTicks)("rotateTicks", ctx_r1.rotateXAxisTicks)("maxTickLength", ctx_r1.maxXAxisTickLength)("tickFormatting", ctx_r1.xAxisTickFormatting)("ticks", ctx_r1.xAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function BarHorizontalNormalizedComponent__svg_g_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 6);
    ɵɵlistener("dimensionsChanged", function BarHorizontalNormalizedComponent__svg_g_3_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateYAxisWidth($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function BarHorizontalNormalizedComponent__svg_g_4__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 8);
    ɵɵlistener("select", function BarHorizontalNormalizedComponent__svg_g_4__svg_g_1_Template_g_select_1_listener($event) {
      const group_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, group_r5));
    })("activate", function BarHorizontalNormalizedComponent__svg_g_4__svg_g_1_Template_g_activate_1_listener($event) {
      const group_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event, group_r5));
    })("deactivate", function BarHorizontalNormalizedComponent__svg_g_4__svg_g_1_Template_g_deactivate_1_listener($event) {
      const group_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event, group_r5));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("@animationState", "active");
    ɵɵattribute("transform", ctx_r1.groupTransform(group_r5));
    ɵɵadvance();
    ɵɵproperty("type", ctx_r1.barChartType.Normalized)("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("activeEntries", ctx_r1.activeEntries)("colors", ctx_r1.colors)("series", group_r5.series)("dims", ctx_r1.dims)("gradient", ctx_r1.gradient)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate)("seriesName", group_r5.name)("animations", ctx_r1.animations)("noBarWhenZero", ctx_r1.noBarWhenZero);
  }
}
function BarHorizontalNormalizedComponent__svg_g_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, BarHorizontalNormalizedComponent__svg_g_4__svg_g_1_Template, 2, 15, "g", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
function BarHorizontalNormalizedComponent__svg_g_5__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 8);
    ɵɵlistener("select", function BarHorizontalNormalizedComponent__svg_g_5__svg_g_1_Template_g_select_1_listener($event) {
      const group_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, group_r7));
    })("activate", function BarHorizontalNormalizedComponent__svg_g_5__svg_g_1_Template_g_activate_1_listener($event) {
      const group_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event, group_r7));
    })("deactivate", function BarHorizontalNormalizedComponent__svg_g_5__svg_g_1_Template_g_deactivate_1_listener($event) {
      const group_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event, group_r7));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("transform", ctx_r1.groupTransform(group_r7));
    ɵɵadvance();
    ɵɵproperty("type", ctx_r1.barChartType.Normalized)("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("activeEntries", ctx_r1.activeEntries)("colors", ctx_r1.colors)("series", group_r7.series)("dims", ctx_r1.dims)("gradient", ctx_r1.gradient)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate)("seriesName", group_r7.name)("animations", ctx_r1.animations)("noBarWhenZero", ctx_r1.noBarWhenZero);
  }
}
function BarHorizontalNormalizedComponent__svg_g_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, BarHorizontalNormalizedComponent__svg_g_5__svg_g_1_Template, 2, 14, "g", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
function BarHorizontalStackedComponent__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 5);
    ɵɵlistener("dimensionsChanged", function BarHorizontalStackedComponent__svg_g_2_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateXAxisHeight($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("xScale", ctx_r1.xScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showXAxisLabel)("labelText", ctx_r1.xAxisLabel)("trimTicks", ctx_r1.trimXAxisTicks)("rotateTicks", ctx_r1.rotateXAxisTicks)("maxTickLength", ctx_r1.maxXAxisTickLength)("tickFormatting", ctx_r1.xAxisTickFormatting)("ticks", ctx_r1.xAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function BarHorizontalStackedComponent__svg_g_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 6);
    ɵɵlistener("dimensionsChanged", function BarHorizontalStackedComponent__svg_g_3_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateYAxisWidth($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks)("yAxisOffset", ctx_r1.dataLabelMaxWidth.negative)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function BarHorizontalStackedComponent__svg_g_4__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 8);
    ɵɵlistener("select", function BarHorizontalStackedComponent__svg_g_4__svg_g_1_Template_g_select_1_listener($event) {
      const group_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, group_r5));
    })("activate", function BarHorizontalStackedComponent__svg_g_4__svg_g_1_Template_g_activate_1_listener($event) {
      const group_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event, group_r5));
    })("deactivate", function BarHorizontalStackedComponent__svg_g_4__svg_g_1_Template_g_deactivate_1_listener($event) {
      const group_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event, group_r5));
    })("dataLabelWidthChanged", function BarHorizontalStackedComponent__svg_g_4__svg_g_1_Template_g_dataLabelWidthChanged_1_listener($event) {
      const index_r6 = ɵɵrestoreView(_r4).index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDataLabelMaxWidthChanged($event, index_r6));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("@animationState", "active");
    ɵɵattribute("transform", ctx_r1.groupTransform(group_r5));
    ɵɵadvance();
    ɵɵproperty("type", ctx_r1.barChartType.Stacked)("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("colors", ctx_r1.colors)("series", group_r5.series)("activeEntries", ctx_r1.activeEntries)("dims", ctx_r1.dims)("gradient", ctx_r1.gradient)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate)("seriesName", group_r5.name)("animations", ctx_r1.animations)("showDataLabel", ctx_r1.showDataLabel)("dataLabelFormatting", ctx_r1.dataLabelFormatting)("noBarWhenZero", ctx_r1.noBarWhenZero);
  }
}
function BarHorizontalStackedComponent__svg_g_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, BarHorizontalStackedComponent__svg_g_4__svg_g_1_Template, 2, 17, "g", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
function BarHorizontalStackedComponent__svg_g_5__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 8);
    ɵɵlistener("select", function BarHorizontalStackedComponent__svg_g_5__svg_g_1_Template_g_select_1_listener($event) {
      const group_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, group_r8));
    })("activate", function BarHorizontalStackedComponent__svg_g_5__svg_g_1_Template_g_activate_1_listener($event) {
      const group_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event, group_r8));
    })("deactivate", function BarHorizontalStackedComponent__svg_g_5__svg_g_1_Template_g_deactivate_1_listener($event) {
      const group_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event, group_r8));
    })("dataLabelWidthChanged", function BarHorizontalStackedComponent__svg_g_5__svg_g_1_Template_g_dataLabelWidthChanged_1_listener($event) {
      const index_r9 = ɵɵrestoreView(_r7).index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDataLabelMaxWidthChanged($event, index_r9));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const group_r8 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("transform", ctx_r1.groupTransform(group_r8));
    ɵɵadvance();
    ɵɵproperty("type", ctx_r1.barChartType.Stacked)("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("colors", ctx_r1.colors)("series", group_r8.series)("activeEntries", ctx_r1.activeEntries)("dims", ctx_r1.dims)("gradient", ctx_r1.gradient)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate)("seriesName", group_r8.name)("animations", ctx_r1.animations)("showDataLabel", ctx_r1.showDataLabel)("dataLabelFormatting", ctx_r1.dataLabelFormatting)("noBarWhenZero", ctx_r1.noBarWhenZero);
  }
}
function BarHorizontalStackedComponent__svg_g_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, BarHorizontalStackedComponent__svg_g_5__svg_g_1_Template, 2, 16, "g", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
var _c29 = ["ngx-charts-series-vertical", ""];
function SeriesVerticalComponent__svg_g_0__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 2);
    ɵɵlistener("select", function SeriesVerticalComponent__svg_g_0__svg_g_1_Template_g_select_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event));
    })("activate", function SeriesVerticalComponent__svg_g_0__svg_g_1_Template_g_activate_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.activate.emit($event));
    })("deactivate", function SeriesVerticalComponent__svg_g_0__svg_g_1_Template_g_deactivate_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.deactivate.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bar_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("@animationState", "active")("@.disabled", !ctx_r1.animations)("width", bar_r3.width)("height", bar_r3.height)("x", bar_r3.x)("y", bar_r3.y)("fill", bar_r3.color)("stops", bar_r3.gradientStops)("data", bar_r3.data)("orientation", ctx_r1.barOrientation.Vertical)("roundEdges", bar_r3.roundEdges)("gradient", ctx_r1.gradient)("ariaLabel", bar_r3.ariaLabel)("isActive", ctx_r1.isActive(bar_r3.data))("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipPlacement", ctx_r1.tooltipPlacement)("tooltipType", ctx_r1.tooltipType)("tooltipTitle", ctx_r1.tooltipTemplate ? void 0 : bar_r3.tooltipText)("tooltipTemplate", ctx_r1.tooltipTemplate)("tooltipContext", bar_r3.data)("noBarWhenZero", ctx_r1.noBarWhenZero)("animations", ctx_r1.animations);
  }
}
function SeriesVerticalComponent__svg_g_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, SeriesVerticalComponent__svg_g_0__svg_g_1_Template, 1, 22, "g", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.bars)("ngForTrackBy", ctx_r1.trackBy);
  }
}
function SeriesVerticalComponent__svg_g_1__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 2);
    ɵɵlistener("select", function SeriesVerticalComponent__svg_g_1__svg_g_1_Template_g_select_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event));
    })("activate", function SeriesVerticalComponent__svg_g_1__svg_g_1_Template_g_activate_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.activate.emit($event));
    })("deactivate", function SeriesVerticalComponent__svg_g_1__svg_g_1_Template_g_deactivate_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.deactivate.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bar_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("width", bar_r5.width)("height", bar_r5.height)("x", bar_r5.x)("y", bar_r5.y)("fill", bar_r5.color)("stops", bar_r5.gradientStops)("data", bar_r5.data)("orientation", ctx_r1.barOrientation.Vertical)("roundEdges", bar_r5.roundEdges)("gradient", ctx_r1.gradient)("ariaLabel", bar_r5.ariaLabel)("isActive", ctx_r1.isActive(bar_r5.data))("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipPlacement", ctx_r1.tooltipPlacement)("tooltipType", ctx_r1.tooltipType)("tooltipTitle", ctx_r1.tooltipTemplate ? void 0 : bar_r5.tooltipText)("tooltipTemplate", ctx_r1.tooltipTemplate)("tooltipContext", bar_r5.data)("noBarWhenZero", ctx_r1.noBarWhenZero)("animations", ctx_r1.animations);
  }
}
function SeriesVerticalComponent__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, SeriesVerticalComponent__svg_g_1__svg_g_1_Template, 1, 20, "g", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.bars)("ngForTrackBy", ctx_r1.trackBy);
  }
}
function SeriesVerticalComponent__svg_g_2__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 4);
    ɵɵlistener("dimensionsChanged", function SeriesVerticalComponent__svg_g_2__svg_g_1_Template_g_dimensionsChanged_0_listener($event) {
      const i_r7 = ɵɵrestoreView(_r6).index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.dataLabelHeightChanged.emit({
        size: $event,
        index: i_r7
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const b_r8 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("barX", b_r8.x)("barY", b_r8.y)("barWidth", b_r8.width)("barHeight", b_r8.height)("value", b_r8.total)("valueFormatting", ctx_r1.dataLabelFormatting)("orientation", ctx_r1.barOrientation.Vertical);
  }
}
function SeriesVerticalComponent__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, SeriesVerticalComponent__svg_g_2__svg_g_1_Template, 1, 7, "g", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.barsForDataLabels)("ngForTrackBy", ctx_r1.trackDataLabelBy);
  }
}
function BarVerticalComponent__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 5);
    ɵɵlistener("dimensionsChanged", function BarVerticalComponent__svg_g_2_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateXAxisHeight($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("xScale", ctx_r1.xScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showXAxisLabel)("labelText", ctx_r1.xAxisLabel)("trimTicks", ctx_r1.trimXAxisTicks)("rotateTicks", ctx_r1.rotateXAxisTicks)("maxTickLength", ctx_r1.maxXAxisTickLength)("tickFormatting", ctx_r1.xAxisTickFormatting)("ticks", ctx_r1.xAxisTicks)("xAxisOffset", ctx_r1.dataLabelMaxHeight.negative)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function BarVerticalComponent__svg_g_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 6);
    ɵɵlistener("dimensionsChanged", function BarVerticalComponent__svg_g_3_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateYAxisWidth($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function BarVertical2DComponent__svg_g_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 6);
    ɵɵlistener("dimensionsChanged", function BarVertical2DComponent__svg_g_3_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateXAxisHeight($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("xScale", ctx_r1.groupScale)("dims", ctx_r1.dims)("showLabel", ctx_r1.showXAxisLabel)("labelText", ctx_r1.xAxisLabel)("trimTicks", ctx_r1.trimXAxisTicks)("rotateTicks", ctx_r1.rotateXAxisTicks)("maxTickLength", ctx_r1.maxXAxisTickLength)("tickFormatting", ctx_r1.xAxisTickFormatting)("ticks", ctx_r1.xAxisTicks)("xAxisOffset", ctx_r1.dataLabelMaxHeight.negative)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function BarVertical2DComponent__svg_g_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 7);
    ɵɵlistener("dimensionsChanged", function BarVertical2DComponent__svg_g_4_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateYAxisWidth($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("yScale", ctx_r1.valueScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function BarVertical2DComponent__svg_g_5__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 9);
    ɵɵlistener("select", function BarVertical2DComponent__svg_g_5__svg_g_1_Template_g_select_0_listener($event) {
      const group_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, group_r5));
    })("activate", function BarVertical2DComponent__svg_g_5__svg_g_1_Template_g_activate_0_listener($event) {
      const group_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event, group_r5));
    })("deactivate", function BarVertical2DComponent__svg_g_5__svg_g_1_Template_g_deactivate_0_listener($event) {
      const group_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event, group_r5));
    })("dataLabelHeightChanged", function BarVertical2DComponent__svg_g_5__svg_g_1_Template_g_dataLabelHeightChanged_0_listener($event) {
      const index_r6 = ɵɵrestoreView(_r4).index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDataLabelMaxHeightChanged($event, index_r6));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("@animationState", "active")("activeEntries", ctx_r1.activeEntries)("xScale", ctx_r1.innerScale)("yScale", ctx_r1.valueScale)("colors", ctx_r1.colors)("series", group_r5.series)("dims", ctx_r1.dims)("gradient", ctx_r1.gradient)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate)("showDataLabel", ctx_r1.showDataLabel)("dataLabelFormatting", ctx_r1.dataLabelFormatting)("seriesName", group_r5.name)("roundEdges", ctx_r1.roundEdges)("animations", ctx_r1.animations)("noBarWhenZero", ctx_r1.noBarWhenZero);
    ɵɵattribute("transform", ctx_r1.groupTransform(group_r5));
  }
}
function BarVertical2DComponent__svg_g_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, BarVertical2DComponent__svg_g_5__svg_g_1_Template, 1, 17, "g", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
function BarVertical2DComponent__svg_g_6__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 9);
    ɵɵlistener("select", function BarVertical2DComponent__svg_g_6__svg_g_1_Template_g_select_0_listener($event) {
      const group_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, group_r8));
    })("activate", function BarVertical2DComponent__svg_g_6__svg_g_1_Template_g_activate_0_listener($event) {
      const group_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event, group_r8));
    })("deactivate", function BarVertical2DComponent__svg_g_6__svg_g_1_Template_g_deactivate_0_listener($event) {
      const group_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event, group_r8));
    })("dataLabelHeightChanged", function BarVertical2DComponent__svg_g_6__svg_g_1_Template_g_dataLabelHeightChanged_0_listener($event) {
      const index_r9 = ɵɵrestoreView(_r7).index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDataLabelMaxHeightChanged($event, index_r9));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r8 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("activeEntries", ctx_r1.activeEntries)("xScale", ctx_r1.innerScale)("yScale", ctx_r1.valueScale)("colors", ctx_r1.colors)("series", group_r8.series)("dims", ctx_r1.dims)("gradient", ctx_r1.gradient)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate)("showDataLabel", ctx_r1.showDataLabel)("dataLabelFormatting", ctx_r1.dataLabelFormatting)("seriesName", group_r8.name)("roundEdges", ctx_r1.roundEdges)("animations", ctx_r1.animations)("noBarWhenZero", ctx_r1.noBarWhenZero);
    ɵɵattribute("transform", ctx_r1.groupTransform(group_r8));
  }
}
function BarVertical2DComponent__svg_g_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, BarVertical2DComponent__svg_g_6__svg_g_1_Template, 1, 16, "g", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
function BarVerticalNormalizedComponent__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 5);
    ɵɵlistener("dimensionsChanged", function BarVerticalNormalizedComponent__svg_g_2_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateXAxisHeight($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("xScale", ctx_r1.xScale)("dims", ctx_r1.dims)("showLabel", ctx_r1.showXAxisLabel)("labelText", ctx_r1.xAxisLabel)("trimTicks", ctx_r1.trimXAxisTicks)("rotateTicks", ctx_r1.rotateXAxisTicks)("maxTickLength", ctx_r1.maxXAxisTickLength)("tickFormatting", ctx_r1.xAxisTickFormatting)("ticks", ctx_r1.xAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function BarVerticalNormalizedComponent__svg_g_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 6);
    ɵɵlistener("dimensionsChanged", function BarVerticalNormalizedComponent__svg_g_3_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateYAxisWidth($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function BarVerticalNormalizedComponent__svg_g_4__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 8);
    ɵɵlistener("select", function BarVerticalNormalizedComponent__svg_g_4__svg_g_1_Template_g_select_1_listener($event) {
      const group_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, group_r5));
    })("activate", function BarVerticalNormalizedComponent__svg_g_4__svg_g_1_Template_g_activate_1_listener($event) {
      const group_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event, group_r5));
    })("deactivate", function BarVerticalNormalizedComponent__svg_g_4__svg_g_1_Template_g_deactivate_1_listener($event) {
      const group_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event, group_r5));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("@animationState", "active");
    ɵɵattribute("transform", ctx_r1.groupTransform(group_r5));
    ɵɵadvance();
    ɵɵproperty("type", ctx_r1.barChartType.Normalized)("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("activeEntries", ctx_r1.activeEntries)("colors", ctx_r1.colors)("series", group_r5.series)("dims", ctx_r1.dims)("gradient", ctx_r1.gradient)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate)("seriesName", group_r5.name)("animations", ctx_r1.animations)("noBarWhenZero", ctx_r1.noBarWhenZero);
  }
}
function BarVerticalNormalizedComponent__svg_g_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, BarVerticalNormalizedComponent__svg_g_4__svg_g_1_Template, 2, 15, "g", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
function BarVerticalNormalizedComponent__svg_g_5__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 8);
    ɵɵlistener("select", function BarVerticalNormalizedComponent__svg_g_5__svg_g_1_Template_g_select_1_listener($event) {
      const group_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, group_r7));
    })("activate", function BarVerticalNormalizedComponent__svg_g_5__svg_g_1_Template_g_activate_1_listener($event) {
      const group_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event, group_r7));
    })("deactivate", function BarVerticalNormalizedComponent__svg_g_5__svg_g_1_Template_g_deactivate_1_listener($event) {
      const group_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event, group_r7));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("transform", ctx_r1.groupTransform(group_r7));
    ɵɵadvance();
    ɵɵproperty("type", ctx_r1.barChartType.Normalized)("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("activeEntries", ctx_r1.activeEntries)("colors", ctx_r1.colors)("series", group_r7.series)("dims", ctx_r1.dims)("gradient", ctx_r1.gradient)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate)("seriesName", group_r7.name)("animations", ctx_r1.animations)("noBarWhenZero", ctx_r1.noBarWhenZero);
  }
}
function BarVerticalNormalizedComponent__svg_g_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, BarVerticalNormalizedComponent__svg_g_5__svg_g_1_Template, 2, 14, "g", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
function BarVerticalStackedComponent__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 5);
    ɵɵlistener("dimensionsChanged", function BarVerticalStackedComponent__svg_g_2_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateXAxisHeight($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("xScale", ctx_r1.xScale)("dims", ctx_r1.dims)("showLabel", ctx_r1.showXAxisLabel)("labelText", ctx_r1.xAxisLabel)("trimTicks", ctx_r1.trimXAxisTicks)("rotateTicks", ctx_r1.rotateXAxisTicks)("maxTickLength", ctx_r1.maxXAxisTickLength)("tickFormatting", ctx_r1.xAxisTickFormatting)("ticks", ctx_r1.xAxisTicks)("xAxisOffset", ctx_r1.dataLabelMaxHeight.negative)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function BarVerticalStackedComponent__svg_g_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 6);
    ɵɵlistener("dimensionsChanged", function BarVerticalStackedComponent__svg_g_3_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateYAxisWidth($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function BarVerticalStackedComponent__svg_g_4__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 8);
    ɵɵlistener("select", function BarVerticalStackedComponent__svg_g_4__svg_g_1_Template_g_select_1_listener($event) {
      const group_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, group_r5));
    })("activate", function BarVerticalStackedComponent__svg_g_4__svg_g_1_Template_g_activate_1_listener($event) {
      const group_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event, group_r5));
    })("deactivate", function BarVerticalStackedComponent__svg_g_4__svg_g_1_Template_g_deactivate_1_listener($event) {
      const group_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event, group_r5));
    })("dataLabelHeightChanged", function BarVerticalStackedComponent__svg_g_4__svg_g_1_Template_g_dataLabelHeightChanged_1_listener($event) {
      const index_r6 = ɵɵrestoreView(_r4).index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDataLabelMaxHeightChanged($event, index_r6));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("@animationState", "active");
    ɵɵattribute("transform", ctx_r1.groupTransform(group_r5));
    ɵɵadvance();
    ɵɵproperty("type", ctx_r1.barChartType.Stacked)("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("activeEntries", ctx_r1.activeEntries)("colors", ctx_r1.colors)("series", group_r5.series)("dims", ctx_r1.dims)("gradient", ctx_r1.gradient)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate)("showDataLabel", ctx_r1.showDataLabel)("dataLabelFormatting", ctx_r1.dataLabelFormatting)("seriesName", group_r5.name)("animations", ctx_r1.animations)("noBarWhenZero", ctx_r1.noBarWhenZero);
  }
}
function BarVerticalStackedComponent__svg_g_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, BarVerticalStackedComponent__svg_g_4__svg_g_1_Template, 2, 17, "g", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
function BarVerticalStackedComponent__svg_g_5__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 8);
    ɵɵlistener("select", function BarVerticalStackedComponent__svg_g_5__svg_g_1_Template_g_select_1_listener($event) {
      const group_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, group_r8));
    })("activate", function BarVerticalStackedComponent__svg_g_5__svg_g_1_Template_g_activate_1_listener($event) {
      const group_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event, group_r8));
    })("deactivate", function BarVerticalStackedComponent__svg_g_5__svg_g_1_Template_g_deactivate_1_listener($event) {
      const group_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event, group_r8));
    })("dataLabelHeightChanged", function BarVerticalStackedComponent__svg_g_5__svg_g_1_Template_g_dataLabelHeightChanged_1_listener($event) {
      const index_r9 = ɵɵrestoreView(_r7).index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDataLabelMaxHeightChanged($event, index_r9));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const group_r8 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("transform", ctx_r1.groupTransform(group_r8));
    ɵɵadvance();
    ɵɵproperty("type", ctx_r1.barChartType.Stacked)("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("activeEntries", ctx_r1.activeEntries)("colors", ctx_r1.colors)("series", group_r8.series)("dims", ctx_r1.dims)("gradient", ctx_r1.gradient)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate)("showDataLabel", ctx_r1.showDataLabel)("dataLabelFormatting", ctx_r1.dataLabelFormatting)("seriesName", group_r8.name)("animations", ctx_r1.animations)("noBarWhenZero", ctx_r1.noBarWhenZero);
  }
}
function BarVerticalStackedComponent__svg_g_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, BarVerticalStackedComponent__svg_g_5__svg_g_1_Template, 2, 16, "g", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
var _c30 = ["ngx-charts-box", ""];
function BoxComponent__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "g", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("orientation", ctx_r0.BarOrientation.Vertical)("name", ctx_r0.gradientId)("stops", ctx_r0.gradientStops);
  }
}
function BoxComponent__svg_line_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "line", 6);
  }
  if (rf & 2) {
    const line_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("hidden", ctx_r0.hideBar);
    ɵɵattribute("x1", line_r2.v1.x)("y1", line_r2.v1.y)("x2", line_r2.v2.x)("y2", line_r2.v2.y)("stroke", ctx_r0.strokeColor)("stroke-width", i_r3 === 2 ? ctx_r0.medianLineWidth : ctx_r0.whiskerStrokeWidth)("mask", i_r3 ? void 0 : ctx_r0.maskLine);
  }
}
var _c31 = ["ngx-charts-box-series", ""];
function BoxChartComponent__svg_g_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 5);
    ɵɵlistener("activate", function BoxChartComponent__svg_g_5_Template_g_activate_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onActivate($event));
    })("deactivate", function BoxChartComponent__svg_g_5_Template_g_deactivate_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDeactivate($event));
    })("select", function BoxChartComponent__svg_g_5_Template_g_select_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClick($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const result_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("colors", ctx_r1.colors)("roundEdges", ctx_r1.roundEdges)("strokeColor", ctx_r1.strokeColor)("strokeWidth", ctx_r1.strokeWidth)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate)("series", result_r3)("dims", ctx_r1.dims)("animations", ctx_r1.animations)("gradient", ctx_r1.gradient);
  }
}
var _c32 = ["ngx-charts-bubble-series", ""];
function BubbleSeriesComponent__svg_g_0__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 2);
    ɵɵlistener("select", function BubbleSeriesComponent__svg_g_0__svg_g_2_Template_g_select_0_listener() {
      ɵɵrestoreView(_r1);
      const circle_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onClick(circle_r2.data));
    })("activate", function BubbleSeriesComponent__svg_g_0__svg_g_2_Template_g_activate_0_listener() {
      ɵɵrestoreView(_r1);
      const circle_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.activateCircle(circle_r2));
    })("deactivate", function BubbleSeriesComponent__svg_g_0__svg_g_2_Template_g_deactivate_0_listener() {
      ɵɵrestoreView(_r1);
      const circle_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.deactivateCircle(circle_r2));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const circle_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("opacity", circle_r2.opacity);
    ɵɵclassProp("active", circle_r2.isActive);
    ɵɵproperty("@animationState", "active")("cx", 0)("cy", 0)("r", circle_r2.radius)("fill", circle_r2.color)("pointerEvents", "all")("data", circle_r2.value)("classNames", circle_r2.classNames)("tooltipDisabled", ctx_r2.tooltipDisabled)("tooltipPlacement", ctx_r2.placementTypes.Top)("tooltipType", ctx_r2.styleTypes.tooltip)("tooltipTitle", ctx_r2.tooltipTemplate ? void 0 : ctx_r2.getTooltipText(circle_r2))("tooltipTemplate", ctx_r2.tooltipTemplate)("tooltipContext", circle_r2.data);
  }
}
function BubbleSeriesComponent__svg_g_0__svg_g_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 2);
    ɵɵlistener("select", function BubbleSeriesComponent__svg_g_0__svg_g_3_Template_g_select_0_listener() {
      ɵɵrestoreView(_r4);
      const circle_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onClick(circle_r2.data));
    })("activate", function BubbleSeriesComponent__svg_g_0__svg_g_3_Template_g_activate_0_listener() {
      ɵɵrestoreView(_r4);
      const circle_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.activateCircle(circle_r2));
    })("deactivate", function BubbleSeriesComponent__svg_g_0__svg_g_3_Template_g_deactivate_0_listener() {
      ɵɵrestoreView(_r4);
      const circle_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.deactivateCircle(circle_r2));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const circle_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("opacity", circle_r2.opacity);
    ɵɵclassProp("active", circle_r2.isActive);
    ɵɵproperty("cx", 0)("cy", 0)("r", circle_r2.radius)("fill", circle_r2.color)("pointerEvents", "all")("data", circle_r2.value)("classNames", circle_r2.classNames)("tooltipDisabled", ctx_r2.tooltipDisabled)("tooltipPlacement", ctx_r2.placementTypes.Top)("tooltipType", ctx_r2.styleTypes.tooltip)("tooltipTitle", ctx_r2.tooltipTemplate ? void 0 : ctx_r2.getTooltipText(circle_r2))("tooltipTemplate", ctx_r2.tooltipTemplate)("tooltipContext", circle_r2.data);
  }
}
function BubbleSeriesComponent__svg_g_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g");
    ɵɵtemplate(2, BubbleSeriesComponent__svg_g_0__svg_g_2_Template, 1, 18, "g", 1)(3, BubbleSeriesComponent__svg_g_0__svg_g_3_Template, 1, 17, "g", 1);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const circle_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵattribute("transform", circle_r2.transform);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isSSR);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isSSR);
  }
}
function BubbleChartComponent__svg_g_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 6);
    ɵɵlistener("dimensionsChanged", function BubbleChartComponent__svg_g_5_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateXAxisHeight($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("showGridLines", ctx_r1.showGridLines)("dims", ctx_r1.dims)("xScale", ctx_r1.xScale)("showLabel", ctx_r1.showXAxisLabel)("labelText", ctx_r1.xAxisLabel)("trimTicks", ctx_r1.trimXAxisTicks)("rotateTicks", ctx_r1.rotateXAxisTicks)("maxTickLength", ctx_r1.maxXAxisTickLength)("tickFormatting", ctx_r1.xAxisTickFormatting)("ticks", ctx_r1.xAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function BubbleChartComponent__svg_g_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 7);
    ɵɵlistener("dimensionsChanged", function BubbleChartComponent__svg_g_6_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateYAxisWidth($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("showGridLines", ctx_r1.showGridLines)("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function BubbleChartComponent__svg_g_8__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 9);
    ɵɵlistener("select", function BubbleChartComponent__svg_g_8__svg_g_1_Template_g_select_1_listener($event) {
      const series_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, series_r5));
    })("activate", function BubbleChartComponent__svg_g_8__svg_g_1_Template_g_activate_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event));
    })("deactivate", function BubbleChartComponent__svg_g_8__svg_g_1_Template_g_deactivate_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const series_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("@animationState", "active");
    ɵɵadvance();
    ɵɵproperty("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("rScale", ctx_r1.rScale)("xScaleType", ctx_r1.xScaleType)("yScaleType", ctx_r1.yScaleType)("xAxisLabel", ctx_r1.xAxisLabel)("yAxisLabel", ctx_r1.yAxisLabel)("colors", ctx_r1.colors)("data", series_r5)("activeEntries", ctx_r1.activeEntries)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate);
  }
}
function BubbleChartComponent__svg_g_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, BubbleChartComponent__svg_g_8__svg_g_1_Template, 2, 13, "g", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("clip-path", ctx_r1.clipPath);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.data)("ngForTrackBy", ctx_r1.trackBy);
  }
}
function BubbleChartComponent__svg_g_9__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 9);
    ɵɵlistener("select", function BubbleChartComponent__svg_g_9__svg_g_1_Template_g_select_1_listener($event) {
      const series_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, series_r7));
    })("activate", function BubbleChartComponent__svg_g_9__svg_g_1_Template_g_activate_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event));
    })("deactivate", function BubbleChartComponent__svg_g_9__svg_g_1_Template_g_deactivate_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const series_r7 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("rScale", ctx_r1.rScale)("xScaleType", ctx_r1.xScaleType)("yScaleType", ctx_r1.yScaleType)("xAxisLabel", ctx_r1.xAxisLabel)("yAxisLabel", ctx_r1.yAxisLabel)("colors", ctx_r1.colors)("data", series_r7)("activeEntries", ctx_r1.activeEntries)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate);
  }
}
function BubbleChartComponent__svg_g_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, BubbleChartComponent__svg_g_9__svg_g_1_Template, 2, 12, "g", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("clip-path", ctx_r1.clipPath);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.data)("ngForTrackBy", ctx_r1.trackBy);
  }
}
var _c33 = ["ngx-charts-heat-map-cell", ""];
function HeatMapCellComponent__svg_defs_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "defs");
    ɵɵelement(1, "g", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("orientation", ctx_r0.barOrientation.Vertical)("name", ctx_r0.gradientId)("stops", ctx_r0.gradientStops);
  }
}
var _c34 = ["ngx-charts-heat-map-cell-series", ""];
var _c35 = (a0, a1, a2) => ({
  series: a0,
  name: a1,
  value: a2
});
function HeatCellSeriesComponent__svg_g_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 1);
    ɵɵlistener("select", function HeatCellSeriesComponent__svg_g_0_Template_g_select_0_listener() {
      const c_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onClick(c_r2.cell));
    })("activate", function HeatCellSeriesComponent__svg_g_0_Template_g_activate_0_listener() {
      const c_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.activate.emit(c_r2.cell));
    })("deactivate", function HeatCellSeriesComponent__svg_g_0_Template_g_deactivate_0_listener() {
      const c_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.deactivate.emit(c_r2.cell));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("x", c_r2.x)("y", c_r2.y)("width", c_r2.width)("height", c_r2.height)("fill", c_r2.fill)("data", c_r2.data)("gradient", ctx_r2.gradient)("animations", ctx_r2.animations)("tooltipDisabled", ctx_r2.tooltipDisabled)("tooltipPlacement", ctx_r2.placementTypes.Top)("tooltipType", ctx_r2.styleTypes.tooltip)("tooltipTitle", ctx_r2.tooltipTemplate ? void 0 : ctx_r2.tooltipText(c_r2))("tooltipTemplate", ctx_r2.tooltipTemplate)("tooltipContext", ɵɵpureFunction3(14, _c35, c_r2.series, c_r2.label, c_r2.data));
  }
}
function HeatMapComponent__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 6);
    ɵɵlistener("dimensionsChanged", function HeatMapComponent__svg_g_2_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateXAxisHeight($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("xScale", ctx_r1.xScale)("dims", ctx_r1.dims)("showLabel", ctx_r1.showXAxisLabel)("labelText", ctx_r1.xAxisLabel)("trimTicks", ctx_r1.trimXAxisTicks)("rotateTicks", ctx_r1.rotateXAxisTicks)("maxTickLength", ctx_r1.maxXAxisTickLength)("tickFormatting", ctx_r1.xAxisTickFormatting)("ticks", ctx_r1.xAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function HeatMapComponent__svg_g_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 7);
    ɵɵlistener("dimensionsChanged", function HeatMapComponent__svg_g_3_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateYAxisWidth($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function HeatMapComponent__svg_rect_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "rect");
  }
  if (rf & 2) {
    const rect_r4 = ctx.$implicit;
    ɵɵattribute("x", rect_r4.x)("y", rect_r4.y)("rx", rect_r4.rx)("width", rect_r4.width)("height", rect_r4.height)("fill", rect_r4.fill);
  }
}
var _c36 = ["ngx-charts-line", ""];
function LineComponent__svg_g_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵelement(1, "path", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("@animationState", "active");
    ɵɵattribute("d", ctx_r0.initialPath)("fill", ctx_r0.fill)("stroke", ctx_r0.stroke);
  }
}
function LineComponent__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵelement(1, "path", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵattribute("d", ctx_r0.initialPath)("fill", ctx_r0.fill)("stroke", ctx_r0.stroke);
  }
}
var _c37 = ["ngx-charts-line-series", ""];
function LineSeriesComponent__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "g", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("orientation", ctx_r0.barOrientation.Vertical)("name", ctx_r0.gradientId)("stops", ctx_r0.gradientStops);
  }
}
function LineSeriesComponent__svg_g_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "g", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("active", ctx_r0.isActive(ctx_r0.data))("inactive", ctx_r0.isInactive(ctx_r0.data));
    ɵɵproperty("data", ctx_r0.data)("path", ctx_r0.outerPath)("fill", ctx_r0.hasGradient ? ctx_r0.gradientUrl : ctx_r0.colors.getColor(ctx_r0.data.name))("opacity", ctx_r0.rangeFillOpacity)("animations", ctx_r0.animations);
  }
}
function LineChartComponent__svg_g_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 7);
    ɵɵlistener("dimensionsChanged", function LineChartComponent__svg_g_5_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateXAxisHeight($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("xScale", ctx_r1.xScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showXAxisLabel)("labelText", ctx_r1.xAxisLabel)("trimTicks", ctx_r1.trimXAxisTicks)("rotateTicks", ctx_r1.rotateXAxisTicks)("maxTickLength", ctx_r1.maxXAxisTickLength)("tickFormatting", ctx_r1.xAxisTickFormatting)("ticks", ctx_r1.xAxisTicks)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function LineChartComponent__svg_g_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 8);
    ɵɵlistener("dimensionsChanged", function LineChartComponent__svg_g_6_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateYAxisWidth($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks)("referenceLines", ctx_r1.referenceLines)("showRefLines", ctx_r1.showRefLines)("showRefLabels", ctx_r1.showRefLabels)("wrapTicks", ctx_r1.wrapTicks);
  }
}
function LineChartComponent__svg_g_8__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵelement(1, "g", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const series_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("@animationState", "active");
    ɵɵadvance();
    ɵɵproperty("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("colors", ctx_r1.colors)("data", series_r4)("activeEntries", ctx_r1.activeEntries)("scaleType", ctx_r1.scaleType)("curve", ctx_r1.curve)("rangeFillOpacity", ctx_r1.rangeFillOpacity)("hasRange", ctx_r1.hasRange)("animations", ctx_r1.animations);
  }
}
function LineChartComponent__svg_g_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, LineChartComponent__svg_g_8__svg_g_1_Template, 2, 11, "g", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
function LineChartComponent__svg_g_9__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵelement(1, "g", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const series_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("colors", ctx_r1.colors)("data", series_r5)("activeEntries", ctx_r1.activeEntries)("scaleType", ctx_r1.scaleType)("curve", ctx_r1.curve)("rangeFillOpacity", ctx_r1.rangeFillOpacity)("hasRange", ctx_r1.hasRange)("animations", ctx_r1.animations);
  }
}
function LineChartComponent__svg_g_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, LineChartComponent__svg_g_9__svg_g_1_Template, 2, 10, "g", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
function LineChartComponent__svg_g_10__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 14);
    ɵɵlistener("select", function LineChartComponent__svg_g_10__svg_g_2_Template_g_select_1_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event));
    })("activate", function LineChartComponent__svg_g_10__svg_g_2_Template_g_activate_1_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event));
    })("deactivate", function LineChartComponent__svg_g_10__svg_g_2_Template_g_deactivate_1_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const series_r8 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("colors", ctx_r1.colors)("data", series_r8)("scaleType", ctx_r1.scaleType)("visibleValue", ctx_r1.hoveredVertical)("activeEntries", ctx_r1.activeEntries)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate);
  }
}
function LineChartComponent__svg_g_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 11);
    ɵɵlistener("mouseleave", function LineChartComponent__svg_g_10_Template_g_mouseleave_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.hideCircles());
    });
    ɵɵelementStart(1, "g", 12);
    ɵɵlistener("hover", function LineChartComponent__svg_g_10_Template_g_hover_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateHoveredVertical($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, LineChartComponent__svg_g_10__svg_g_2_Template, 2, 9, "g", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("dims", ctx_r1.dims)("xSet", ctx_r1.xSet)("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("results", ctx_r1.results)("colors", ctx_r1.colors)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.seriesTooltipTemplate);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results);
  }
}
function LineChartComponent__svg_g_11__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵelement(1, "g", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const series_r10 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("xScale", ctx_r1.timelineXScale)("yScale", ctx_r1.timelineYScale)("colors", ctx_r1.colors)("data", series_r10)("scaleType", ctx_r1.scaleType)("curve", ctx_r1.curve)("hasRange", ctx_r1.hasRange)("animations", ctx_r1.animations);
  }
}
function LineChartComponent__svg_g_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 15);
    ɵɵlistener("onDomainChange", function LineChartComponent__svg_g_11_Template_g_onDomainChange_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateDomain($event));
    });
    ɵɵtemplate(1, LineChartComponent__svg_g_11__svg_g_1_Template, 2, 8, "g", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("results", ctx_r1.results)("view", ɵɵpureFunction2(10, _c24, ctx_r1.timelineWidth, ctx_r1.height))("height", ctx_r1.timelineHeight)("scheme", ctx_r1.scheme)("customColors", ctx_r1.customColors)("scaleType", ctx_r1.scaleType)("legend", ctx_r1.legend);
    ɵɵattribute("transform", ctx_r1.timelineTransform);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
var _c38 = ["ngx-charts-pie-label", ""];
var _c39 = ["ngx-charts-polar-series", ""];
function PolarSeriesComponent__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "g", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("color", ctx_r0.seriesColor)("name", ctx_r0.gradientId)("startOpacity", 0.25)("endOpacity", 1)("stops", ctx_r0.gradientStops);
  }
}
function PolarSeriesComponent__svg_g_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 5);
    ɵɵlistener("select", function PolarSeriesComponent__svg_g_4_Template_g_select_0_listener() {
      const circle_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.select.emit(circle_r3.data));
    })("activate", function PolarSeriesComponent__svg_g_4_Template_g_activate_0_listener() {
      const circle_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.activate.emit({
        name: circle_r3.data.series
      }));
    })("deactivate", function PolarSeriesComponent__svg_g_4_Template_g_deactivate_0_listener() {
      const circle_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.deactivate.emit({
        name: circle_r3.data.series
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const circle_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("opacity", ctx_r0.inactive ? 0.2 : 1);
    ɵɵproperty("cx", circle_r3.cx)("cy", circle_r3.cy)("r", ctx_r0.circleRadius)("fill", circle_r3.color)("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipPlacement", ctx_r0.placementTypes.Top)("tooltipType", ctx_r0.styleTypes.tooltip)("tooltipTitle", ctx_r0.tooltipTemplate ? void 0 : ctx_r0.tooltipText(circle_r3))("tooltipTemplate", ctx_r0.tooltipTemplate)("tooltipContext", circle_r3.data);
  }
}
function PolarChartComponent__svg_g_4__svg_circle_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "circle", 7);
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    ɵɵattribute("r", r_r1);
  }
}
function PolarChartComponent__svg_g_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, PolarChartComponent__svg_g_4__svg_circle_1_Template, 1, 1, "circle", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.radiusTicks);
  }
}
function PolarChartComponent__svg_g_5__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "g", 9);
  }
  if (rf & 2) {
    const tick_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("data", tick_r3)("radius", ctx_r1.outerRadius)("label", tick_r3.label)("max", ctx_r1.outerRadius)("value", ctx_r1.showGridLines ? 1 : ctx_r1.outerRadius)("explodeSlices", true)("animations", ctx_r1.animations)("labelTrim", ctx_r1.labelTrim)("labelTrimSize", ctx_r1.labelTrimSize);
  }
}
function PolarChartComponent__svg_g_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, PolarChartComponent__svg_g_5__svg_g_1_Template, 1, 9, "g", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.thetaTicks);
  }
}
function PolarChartComponent__svg_g_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 10);
    ɵɵlistener("dimensionsChanged", function PolarChartComponent__svg_g_6_Template_g_dimensionsChanged_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateYAxisWidth($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("yScale", ctx_r1.yAxisScale)("dims", ctx_r1.yAxisDims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("wrapTicks", ctx_r1.wrapTicks);
    ɵɵattribute("transform", ctx_r1.transformYAxis);
  }
}
function PolarChartComponent__svg_g_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "g", 11);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("label", ctx_r1.xAxisLabel)("offset", ctx_r1.labelOffset)("orient", ctx_r1.orientation.Bottom)("height", ctx_r1.dims.height)("width", ctx_r1.dims.width);
  }
}
function PolarChartComponent__svg_g_8__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 13);
    ɵɵlistener("select", function PolarChartComponent__svg_g_8__svg_g_1_Template_g_select_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event));
    })("activate", function PolarChartComponent__svg_g_8__svg_g_1_Template_g_activate_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event));
    })("deactivate", function PolarChartComponent__svg_g_8__svg_g_1_Template_g_deactivate_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const series_r6 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("@animationState", "active");
    ɵɵadvance();
    ɵɵproperty("gradient", ctx_r1.gradient)("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("colors", ctx_r1.colors)("data", series_r6)("activeEntries", ctx_r1.activeEntries)("scaleType", ctx_r1.scaleType)("curve", ctx_r1.curve)("rangeFillOpacity", ctx_r1.rangeFillOpacity)("animations", ctx_r1.animations)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate);
  }
}
function PolarChartComponent__svg_g_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, PolarChartComponent__svg_g_8__svg_g_1_Template, 2, 13, "g", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("transform", ctx_r1.transformPlot);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
function PolarChartComponent__svg_g_9__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 13);
    ɵɵlistener("select", function PolarChartComponent__svg_g_9__svg_g_1_Template_g_select_1_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event));
    })("activate", function PolarChartComponent__svg_g_9__svg_g_1_Template_g_activate_1_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onActivate($event));
    })("deactivate", function PolarChartComponent__svg_g_9__svg_g_1_Template_g_deactivate_1_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeactivate($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const series_r8 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("gradient", ctx_r1.gradient)("xScale", ctx_r1.xScale)("yScale", ctx_r1.yScale)("colors", ctx_r1.colors)("data", series_r8)("activeEntries", ctx_r1.activeEntries)("scaleType", ctx_r1.scaleType)("curve", ctx_r1.curve)("rangeFillOpacity", ctx_r1.rangeFillOpacity)("animations", ctx_r1.animations)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate);
  }
}
function PolarChartComponent__svg_g_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, PolarChartComponent__svg_g_9__svg_g_1_Template, 2, 12, "g", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("transform", ctx_r1.transformPlot);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.results)("ngForTrackBy", ctx_r1.trackBy);
  }
}
var _c40 = ["ngx-charts-pie-arc", ""];
function PieArcComponent__svg_defs_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "defs");
    ɵɵelement(1, "g", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("color", ctx_r0.fill)("name", ctx_r0.radialGradientId)("startOpacity", ctx_r0.startOpacity);
  }
}
var _c41 = ["ngx-charts-pie-series", ""];
function PieSeriesComponent__svg_g_0__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "g", 3);
  }
  if (rf & 2) {
    const arc_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("data", arc_r2)("radius", ctx_r2.outerRadius)("color", ctx_r2.color(arc_r2))("label", ctx_r2.labelText(arc_r2))("labelTrim", ctx_r2.trimLabels)("labelTrimSize", ctx_r2.maxLabelLength)("max", ctx_r2.max)("value", arc_r2.value)("explodeSlices", ctx_r2.explodeSlices)("animations", ctx_r2.animations);
  }
}
function PieSeriesComponent__svg_g_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, PieSeriesComponent__svg_g_0__svg_g_1_Template, 1, 10, "g", 1);
    ɵɵelementStart(2, "g", 2);
    ɵɵlistener("select", function PieSeriesComponent__svg_g_0_Template_g_select_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onClick($event));
    })("activate", function PieSeriesComponent__svg_g_0_Template_g_activate_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.activate.emit($event));
    })("deactivate", function PieSeriesComponent__svg_g_0_Template_g_deactivate_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.deactivate.emit($event));
    })("dblclick", function PieSeriesComponent__svg_g_0_Template_g_dblclick_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.dblclick.emit($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const arc_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.labelVisible(arc_r2));
    ɵɵadvance();
    ɵɵproperty("startAngle", arc_r2.startAngle)("endAngle", arc_r2.endAngle)("innerRadius", ctx_r2.innerRadius)("outerRadius", ctx_r2.outerRadius)("fill", ctx_r2.color(arc_r2))("value", arc_r2.data.value)("gradient", ctx_r2.gradient)("data", arc_r2.data)("max", ctx_r2.max)("explodeSlices", ctx_r2.explodeSlices)("isActive", ctx_r2.isActive(arc_r2.data))("animate", ctx_r2.animations)("tooltipDisabled", ctx_r2.tooltipDisabled)("tooltipPlacement", ctx_r2.placementTypes.Top)("tooltipType", ctx_r2.styleTypes.tooltip)("tooltipTitle", ctx_r2.getTooltipTitle(arc_r2))("tooltipTemplate", ctx_r2.tooltipTemplate)("tooltipContext", arc_r2.data);
  }
}
var _c42 = ".pie-label{font-size:11px}.pie-label.animation{animation:.75s ease-in fadeIn}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.pie-label-line{stroke-dasharray:100%}.pie-label-line.animation{animation:3s linear drawOut;transition:d .75s}@keyframes drawOut{0%{stroke-dashoffset:100%}to{stroke-dashoffset:0}}\n";
var _c43 = ["ngx-charts-pie-grid-series", ""];
function PieGridSeriesComponent__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 2);
    ɵɵlistener("select", function PieGridSeriesComponent__svg_g_1_Template_g_select_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClick($event));
    })("activate", function PieGridSeriesComponent__svg_g_1_Template_g_activate_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.activate.emit($event));
    })("deactivate", function PieGridSeriesComponent__svg_g_1_Template_g_deactivate_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.deactivate.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const arc_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("startAngle", arc_r3.startAngle)("endAngle", arc_r3.endAngle)("innerRadius", ctx_r1.innerRadius)("outerRadius", ctx_r1.outerRadius)("fill", ctx_r1.color(arc_r3))("value", arc_r3.data.value)("data", arc_r3.data)("gradient", false)("pointerEvents", arc_r3.pointerEvents)("animate", arc_r3.animate);
    ɵɵattribute("class", arc_r3.class);
  }
}
var _c44 = (a0) => ({
  data: a0
});
function PieGridComponent__svg_g_2__svg_text_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "text", 10);
  }
  if (rf & 2) {
    const series_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("countTo", series_r3.percent)("countSuffix", "%");
  }
}
function PieGridComponent__svg_g_2__svg_text_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "text", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const series_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", series_r3.percent.toLocaleString(), " ");
  }
}
function PieGridComponent__svg_g_2__svg_text_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "text", 12);
  }
  if (rf & 2) {
    const series_r3 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("countTo", series_r3.total)("countPrefix", ctx_r1.label + ": ");
    ɵɵattribute("y", series_r3.outerRadius);
  }
}
function PieGridComponent__svg_g_2__svg_text_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "text", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const series_r3 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("y", series_r3.outerRadius);
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ctx_r1.label, ": ", series_r3.total.toLocaleString(), " ");
  }
}
function PieGridComponent__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 3)(1, "g", 4);
    ɵɵlistener("select", function PieGridComponent__svg_g_2_Template_g_select_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClick($event));
    })("activate", function PieGridComponent__svg_g_2_Template_g_activate_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onActivate($event));
    })("deactivate", function PieGridComponent__svg_g_2_Template_g_deactivate_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDeactivate($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, PieGridComponent__svg_g_2__svg_text_2_Template, 1, 2, "text", 5)(3, PieGridComponent__svg_g_2__svg_text_3_Template, 2, 1, "text", 6);
    ɵɵelementStart(4, "text", 7);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵtemplate(6, PieGridComponent__svg_g_2__svg_text_6_Template, 1, 3, "text", 8)(7, PieGridComponent__svg_g_2__svg_text_7_Template, 2, 3, "text", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const series_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("transform", series_r3.transform);
    ɵɵadvance();
    ɵɵproperty("colors", series_r3.colors)("data", series_r3.data)("innerRadius", series_r3.innerRadius)("outerRadius", series_r3.outerRadius)("animations", ctx_r1.animations)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipPlacement", ctx_r1.placementTypes.Top)("tooltipType", ctx_r1.styleTypes.tooltip)("tooltipTitle", ctx_r1.tooltipTemplate ? void 0 : ctx_r1.tooltipText(ɵɵpureFunction1(17, _c44, series_r3)))("tooltipTemplate", ctx_r1.tooltipTemplate)("tooltipContext", series_r3.data[0].data);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.animations);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.animations);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", series_r3.label, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.animations);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.animations);
  }
}
var _c45 = ["textEl"];
var _c46 = ["ngx-charts-card", ""];
function CardComponent__svg_path_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "path", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("fill", ctx_r1.bandColor)("transform", ctx_r1.transformBand)("d", ctx_r1.bandPath);
  }
}
var _c47 = ["ngx-charts-card-series", ""];
function CardSeriesComponent__svg_rect_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "rect", 2);
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("fill", ctx_r1.emptyColor);
    ɵɵattribute("x", c_r1.x)("y", c_r1.y)("width", c_r1.width)("height", c_r1.height);
  }
}
function CardSeriesComponent__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 3);
    ɵɵlistener("select", function CardSeriesComponent__svg_g_1_Template_g_select_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("x", c_r4.x)("y", c_r4.y)("width", c_r4.width)("height", c_r4.height)("color", c_r4.color)("bandColor", c_r4.bandColor)("textColor", c_r4.textColor)("data", c_r4.data)("label", c_r4.label)("medianSize", ctx_r1.medianSize)("valueFormatting", ctx_r1.valueFormatting)("labelFormatting", ctx_r1.labelFormatting)("animations", ctx_r1.animations);
  }
}
var _c48 = ["ngx-charts-tree-map-cell", ""];
function TreeMapCellComponent__svg_defs_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "defs");
    ɵɵelement(1, "g", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("orientation", ctx_r0.orientation.Vertical)("name", ctx_r0.gradientId)("stops", ctx_r0.gradientStops);
  }
}
function TreeMapCellComponent__svg_foreignObject_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("countTo", ctx_r0.value)("valueFormatting", ctx_r0.valueFormatting);
  }
}
function TreeMapCellComponent__svg_foreignObject_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.formattedValue, " ");
  }
}
function TreeMapCellComponent__svg_foreignObject_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "foreignObject", 4);
    ɵɵnamespaceHTML();
    ɵɵelementStart(1, "p");
    ɵɵelement(2, "span", 5)(3, "br");
    ɵɵtemplate(4, TreeMapCellComponent__svg_foreignObject_3_span_4_Template, 1, 2, "span", 6)(5, TreeMapCellComponent__svg_foreignObject_3_span_5_Template, 2, 1, "span", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("pointer-events", "none");
    ɵɵattribute("x", ctx_r0.x)("y", ctx_r0.y)("width", ctx_r0.width)("height", ctx_r0.height);
    ɵɵadvance();
    ɵɵstyleProp("color", ctx_r0.getTextColor())("height", ctx_r0.height + "px")("width", ctx_r0.width + "px");
    ɵɵadvance();
    ɵɵproperty("innerHTML", ctx_r0.formattedLabel, ɵɵsanitizeHtml);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.animations);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.animations);
  }
}
var _c49 = ["ngx-charts-tree-map-cell-series", ""];
function TreeMapCellSeriesComponent__svg_g_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 1);
    ɵɵlistener("select", function TreeMapCellSeriesComponent__svg_g_0_Template_g_select_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("data", c_r3.data)("x", c_r3.x)("y", c_r3.y)("width", c_r3.width)("height", c_r3.height)("fill", c_r3.fill)("label", c_r3.label)("value", c_r3.value)("valueFormatting", ctx_r1.valueFormatting)("labelFormatting", ctx_r1.labelFormatting)("gradient", ctx_r1.gradient)("animations", ctx_r1.animations)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipPlacement", ctx_r1.placementTypes.Top)("tooltipType", ctx_r1.styleTypes.tooltip)("tooltipTitle", ctx_r1.tooltipTemplate ? void 0 : ctx_r1.getTooltipText(c_r3))("tooltipTemplate", ctx_r1.tooltipTemplate)("tooltipContext", c_r3.data);
  }
}
var _c50 = ["valueTextEl"];
var _c51 = ["unitsTextEl"];
var _c52 = () => ({});
function LinearGaugeComponent__svg_line_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "line", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("transform", ctx_r1.transformLine)("stroke", ctx_r1.colors.getColor(ctx_r1.units));
  }
}
function LinearGaugeComponent__svg_line_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "line", 11);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("transform", ctx_r1.transformLine)("stroke", ctx_r1.colors.getColor(ctx_r1.units));
  }
}
var _c53 = ["ngx-charts-gauge-arc", ""];
var _c54 = ["ngx-charts-gauge-axis", ""];
function GaugeAxisComponent__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 2);
    ɵɵelement(1, "path");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tick_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵattribute("d", tick_r1.line);
  }
}
function GaugeAxisComponent__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 2)(1, "text", 3);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const tick_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵstyleProp("text-anchor", tick_r2.textAnchor);
    ɵɵattribute("transform", tick_r2.textTransform);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", tick_r2.text, " ");
  }
}
function GaugeAxisComponent__svg_g_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 4);
    ɵɵelement(1, "path");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tick_r3 = ctx.$implicit;
    ɵɵadvance();
    ɵɵattribute("d", tick_r3.line);
  }
}
function GaugeComponent__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 6);
    ɵɵlistener("select", function GaugeComponent__svg_g_2_Template_g_select_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClick($event));
    })("activate", function GaugeComponent__svg_g_2_Template_g_activate_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onActivate($event));
    })("deactivate", function GaugeComponent__svg_g_2_Template_g_deactivate_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDeactivate($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const arc_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("transform", ctx_r1.rotation);
    ɵɵadvance();
    ɵɵproperty("backgroundArc", arc_r3.backgroundArc)("valueArc", arc_r3.valueArc)("cornerRadius", ctx_r1.cornerRadius)("colors", ctx_r1.colors)("isActive", ctx_r1.isActive(arc_r3.valueArc.data))("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipTemplate", ctx_r1.tooltipTemplate)("valueFormatting", ctx_r1.valueFormatting)("animations", ctx_r1.animations);
  }
}
function GaugeComponent__svg_g_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "g", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("bigSegments", ctx_r1.bigSegments)("smallSegments", ctx_r1.smallSegments)("min", ctx_r1.min)("max", ctx_r1.max)("radius", ctx_r1.outerRadius)("angleSpan", ctx_r1.angleSpan)("valueScale", ctx_r1.valueScale)("startAngle", ctx_r1.startAngle)("tickFormatting", ctx_r1.axisTickFormatting);
  }
}
function GaugeComponent__svg_text_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "text", 8, 0)(2, "tspan", 9);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "tspan", 10);
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("text-anchor", "middle");
    ɵɵattribute("transform", ctx_r1.textTransform);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r1.displayValue);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.units);
  }
}
function SankeyComponent__svg_g_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 5)(1, "defs")(2, "linearGradient", 6);
    ɵɵelement(3, "stop", 7)(4, "stop", 8);
    ɵɵelementEnd()();
    ɵɵelementStart(5, "path", 9);
    ɵɵlistener("click", function SankeyComponent__svg_g_2_Template_path_click_5_listener() {
      const link_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.select.emit(link_r2.data));
    })("mouseenter", function SankeyComponent__svg_g_2_Template_path_mouseenter_5_listener() {
      const link_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.activate.emit(link_r2.data));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("tooltipDisabled", ctx_r2.tooltipDisabled)("tooltipType", ctx_r2.styleTypes.tooltip)("tooltipPlacement", "top")("tooltipTitle", ctx_r2.tooltipTemplate ? void 0 : link_r2.tooltip)("tooltipTemplate", ctx_r2.tooltipTemplate)("tooltipContext", link_r2.data);
    ɵɵadvance(2);
    ɵɵattribute("id", link_r2.id)("x1", link_r2.source.x1)("x2", link_r2.target.x0);
    ɵɵadvance();
    ɵɵattribute("stop-color", link_r2.startColor);
    ɵɵadvance();
    ɵɵattribute("stop-color", link_r2.endColor);
    ɵɵadvance();
    ɵɵattribute("d", link_r2.path)("stroke", link_r2.gradientFill)("stroke-width", link_r2.strokeWidth);
  }
}
function SankeyComponent__svg_g_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g", 10)(1, "rect", 11);
    ɵɵlistener("click", function SankeyComponent__svg_g_3_Template_rect_click_1_listener() {
      const rect_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.select.emit(rect_r5.data));
    })("mouseenter", function SankeyComponent__svg_g_3_Template_rect_mouseenter_1_listener() {
      const rect_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.activate.emit(rect_r5.data));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const rect_r5 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("transform", rect_r5.transform);
    ɵɵadvance();
    ɵɵproperty("tooltipDisabled", ctx_r2.tooltipDisabled)("tooltipType", ctx_r2.styleTypes.tooltip)("tooltipPlacement", "top")("tooltipTitle", ctx_r2.tooltipTemplate ? void 0 : rect_r5.tooltip)("tooltipTemplate", ctx_r2.tooltipTemplate)("tooltipContext", rect_r5.data);
    ɵɵattribute("x", 0)("y", 0)("width", rect_r5.width)("height", rect_r5.height)("fill", rect_r5.fill);
  }
}
function SankeyComponent__svg_g_4__svg_text_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "text", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const rect_r6 = ɵɵnextContext().$implicit;
    ɵɵattribute("x", rect_r6.width + 5)("y", rect_r6.height / 2)("text-anchor", rect_r6.labelAnchor)("dx", rect_r6.labelAnchor === "end" ? -25 : 0);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", rect_r6.label, " ");
  }
}
function SankeyComponent__svg_g_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵtemplate(1, SankeyComponent__svg_g_4__svg_text_1_Template, 2, 5, "text", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const rect_r6 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("transform", rect_r6.transform);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.showLabels && rect_r6.height > 15);
  }
}
function throttle(func, wait, options) {
  options = options || {};
  let context;
  let args;
  let result;
  let timeout = null;
  let previous = 0;
  function later() {
    previous = options.leading === false ? 0 : +/* @__PURE__ */ new Date();
    timeout = null;
    result = func.apply(context, args);
  }
  return function() {
    const now = +/* @__PURE__ */ new Date();
    if (!previous && options.leading === false) {
      previous = now;
    }
    const remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}
function throttleable(duration, options) {
  return function innerDecorator(target, key, descriptor) {
    return {
      configurable: true,
      enumerable: descriptor.enumerable,
      get: function getter() {
        Object.defineProperty(this, key, {
          configurable: true,
          enumerable: descriptor.enumerable,
          value: throttle(descriptor.value, duration, options)
        });
        return this[key];
      }
    };
  };
}
var PlacementTypes;
(function(PlacementTypes2) {
  PlacementTypes2["Top"] = "top";
  PlacementTypes2["Bottom"] = "bottom";
  PlacementTypes2["Left"] = "left";
  PlacementTypes2["Right"] = "right";
  PlacementTypes2["Center"] = "center";
})(PlacementTypes || (PlacementTypes = {}));
var caretOffset = 7;
function verticalPosition(elDimensions, popoverDimensions, alignment) {
  if (alignment === PlacementTypes.Top) {
    return elDimensions.top - caretOffset;
  }
  if (alignment === PlacementTypes.Bottom) {
    return elDimensions.top + elDimensions.height - popoverDimensions.height + caretOffset;
  }
  if (alignment === PlacementTypes.Center) {
    return elDimensions.top + elDimensions.height / 2 - popoverDimensions.height / 2;
  }
  return void 0;
}
function horizontalPosition(elDimensions, popoverDimensions, alignment) {
  if (alignment === PlacementTypes.Left) {
    return elDimensions.left - caretOffset;
  }
  if (alignment === PlacementTypes.Right) {
    return elDimensions.left + elDimensions.width - popoverDimensions.width + caretOffset;
  }
  if (alignment === PlacementTypes.Center) {
    return elDimensions.left + elDimensions.width / 2 - popoverDimensions.width / 2;
  }
  return void 0;
}
var PositionHelper = class _PositionHelper {
  /**
   * Calculate vertical alignment position
   *
   * @memberOf PositionHelper
   */
  static calculateVerticalAlignment(elDimensions, popoverDimensions, alignment) {
    let result = verticalPosition(elDimensions, popoverDimensions, alignment);
    if (result + popoverDimensions.height > window.innerHeight) {
      result = window.innerHeight - popoverDimensions.height;
    }
    return result;
  }
  /**
   * Calculate vertical caret position
   *
   * @memberOf PositionHelper
   */
  static calculateVerticalCaret(elDimensions, popoverDimensions, caretDimensions, alignment) {
    let result;
    if (alignment === PlacementTypes.Top) {
      result = elDimensions.height / 2 - caretDimensions.height / 2 + caretOffset;
    }
    if (alignment === PlacementTypes.Bottom) {
      result = popoverDimensions.height - elDimensions.height / 2 - caretDimensions.height / 2 - caretOffset;
    }
    if (alignment === PlacementTypes.Center) {
      result = popoverDimensions.height / 2 - caretDimensions.height / 2;
    }
    const popoverPosition = verticalPosition(elDimensions, popoverDimensions, alignment);
    if (popoverPosition + popoverDimensions.height > window.innerHeight) {
      result += popoverPosition + popoverDimensions.height - window.innerHeight;
    }
    return result;
  }
  /**
   * Calculate horz alignment position
   *
   * @memberOf PositionHelper
   */
  static calculateHorizontalAlignment(elDimensions, popoverDimensions, alignment) {
    let result = horizontalPosition(elDimensions, popoverDimensions, alignment);
    if (result + popoverDimensions.width > window.innerWidth) {
      result = window.innerWidth - popoverDimensions.width;
    }
    return result;
  }
  /**
   * Calculate horz caret position
   *
   * @memberOf PositionHelper
   */
  static calculateHorizontalCaret(elDimensions, popoverDimensions, caretDimensions, alignment) {
    let result;
    if (alignment === PlacementTypes.Left) {
      result = elDimensions.width / 2 - caretDimensions.width / 2 + caretOffset;
    }
    if (alignment === PlacementTypes.Right) {
      result = popoverDimensions.width - elDimensions.width / 2 - caretDimensions.width / 2 - caretOffset;
    }
    if (alignment === PlacementTypes.Center) {
      result = popoverDimensions.width / 2 - caretDimensions.width / 2;
    }
    const popoverPosition = horizontalPosition(elDimensions, popoverDimensions, alignment);
    if (popoverPosition + popoverDimensions.width > window.innerWidth) {
      result += popoverPosition + popoverDimensions.width - window.innerWidth;
    }
    return result;
  }
  /**
   * Checks if the element's position should be flipped
   *
   * @memberOf PositionHelper
   */
  static shouldFlip(elDimensions, popoverDimensions, placement, spacing) {
    let flip = false;
    if (placement === PlacementTypes.Right) {
      if (elDimensions.left + elDimensions.width + popoverDimensions.width + spacing > window.innerWidth) {
        flip = true;
      }
    }
    if (placement === PlacementTypes.Left) {
      if (elDimensions.left - popoverDimensions.width - spacing < 0) {
        flip = true;
      }
    }
    if (placement === PlacementTypes.Top) {
      if (elDimensions.top - popoverDimensions.height - spacing < 0) {
        flip = true;
      }
    }
    if (placement === PlacementTypes.Bottom) {
      if (elDimensions.top + elDimensions.height + popoverDimensions.height + spacing > window.innerHeight) {
        flip = true;
      }
    }
    return flip;
  }
  /**
   * Position caret
   *
   * @memberOf PositionHelper
   */
  static positionCaret(placement, elmDim, hostDim, caretDimensions, alignment) {
    let top = 0;
    let left2 = 0;
    if (placement === PlacementTypes.Right) {
      left2 = -7;
      top = _PositionHelper.calculateVerticalCaret(hostDim, elmDim, caretDimensions, alignment);
    } else if (placement === PlacementTypes.Left) {
      left2 = elmDim.width;
      top = _PositionHelper.calculateVerticalCaret(hostDim, elmDim, caretDimensions, alignment);
    } else if (placement === PlacementTypes.Top) {
      top = elmDim.height;
      left2 = _PositionHelper.calculateHorizontalCaret(hostDim, elmDim, caretDimensions, alignment);
    } else if (placement === PlacementTypes.Bottom) {
      top = -7;
      left2 = _PositionHelper.calculateHorizontalCaret(hostDim, elmDim, caretDimensions, alignment);
    }
    return {
      top,
      left: left2
    };
  }
  /**
   * Position content
   *
   * @memberOf PositionHelper
   */
  static positionContent(placement, elmDim, hostDim, spacing, alignment) {
    let top = 0;
    let left2 = 0;
    if (placement === PlacementTypes.Right) {
      left2 = hostDim.left + hostDim.width + spacing;
      top = _PositionHelper.calculateVerticalAlignment(hostDim, elmDim, alignment);
    } else if (placement === PlacementTypes.Left) {
      left2 = hostDim.left - elmDim.width - spacing;
      top = _PositionHelper.calculateVerticalAlignment(hostDim, elmDim, alignment);
    } else if (placement === PlacementTypes.Top) {
      top = hostDim.top - elmDim.height - spacing;
      left2 = _PositionHelper.calculateHorizontalAlignment(hostDim, elmDim, alignment);
    } else if (placement === PlacementTypes.Bottom) {
      top = hostDim.top + hostDim.height + spacing;
      left2 = _PositionHelper.calculateHorizontalAlignment(hostDim, elmDim, alignment);
    }
    return {
      top,
      left: left2
    };
  }
  /**
   * Determine placement based on flip
   *
   * @memberOf PositionHelper
   */
  static determinePlacement(placement, elmDim, hostDim, spacing) {
    const shouldFlip = _PositionHelper.shouldFlip(hostDim, elmDim, placement, spacing);
    if (shouldFlip) {
      if (placement === PlacementTypes.Right) {
        return PlacementTypes.Left;
      } else if (placement === PlacementTypes.Left) {
        return PlacementTypes.Right;
      } else if (placement === PlacementTypes.Top) {
        return PlacementTypes.Bottom;
      } else if (placement === PlacementTypes.Bottom) {
        return PlacementTypes.Top;
      }
    }
    return placement;
  }
};
var TooltipContentComponent = class {
  constructor(element, renderer, platformId) {
    this.element = element;
    this.renderer = renderer;
    this.platformId = platformId;
  }
  get cssClasses() {
    let clz = "ngx-charts-tooltip-content";
    clz += ` position-${this.placement}`;
    clz += ` type-${this.type}`;
    clz += ` ${this.cssClass}`;
    return clz;
  }
  ngAfterViewInit() {
    setTimeout(this.position.bind(this));
  }
  position() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const nativeElm = this.element.nativeElement;
    const hostDim = this.host.nativeElement.getBoundingClientRect();
    if (!hostDim.height && !hostDim.width) return;
    const elmDim = nativeElm.getBoundingClientRect();
    this.checkFlip(hostDim, elmDim);
    this.positionContent(nativeElm, hostDim, elmDim);
    if (this.showCaret) {
      this.positionCaret(hostDim, elmDim);
    }
    setTimeout(() => this.renderer.addClass(nativeElm, "animate"), 1);
  }
  positionContent(nativeElm, hostDim, elmDim) {
    const {
      top,
      left: left2
    } = PositionHelper.positionContent(this.placement, elmDim, hostDim, this.spacing, this.alignment);
    this.renderer.setStyle(nativeElm, "top", `${top}px`);
    this.renderer.setStyle(nativeElm, "left", `${left2}px`);
  }
  positionCaret(hostDim, elmDim) {
    const caretElm = this.caretElm.nativeElement;
    const caretDimensions = caretElm.getBoundingClientRect();
    const {
      top,
      left: left2
    } = PositionHelper.positionCaret(this.placement, elmDim, hostDim, caretDimensions, this.alignment);
    this.renderer.setStyle(caretElm, "top", `${top}px`);
    this.renderer.setStyle(caretElm, "left", `${left2}px`);
  }
  checkFlip(hostDim, elmDim) {
    this.placement = PositionHelper.determinePlacement(this.placement, elmDim, hostDim, this.spacing);
  }
  onWindowResize() {
    this.position();
  }
};
TooltipContentComponent.ɵfac = function TooltipContentComponent_Factory(t) {
  return new (t || TooltipContentComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(PLATFORM_ID));
};
TooltipContentComponent.ɵcmp = ɵɵdefineComponent({
  type: TooltipContentComponent,
  selectors: [["ngx-tooltip-content"]],
  viewQuery: function TooltipContentComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.caretElm = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function TooltipContentComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("resize", function TooltipContentComponent_resize_HostBindingHandler() {
        return ctx.onWindowResize();
      }, false, ɵɵresolveWindow);
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.cssClasses);
    }
  },
  inputs: {
    host: "host",
    showCaret: "showCaret",
    type: "type",
    placement: "placement",
    alignment: "alignment",
    spacing: "spacing",
    cssClass: "cssClass",
    title: "title",
    template: "template",
    context: "context"
  },
  decls: 6,
  vars: 6,
  consts: [["caretElm", ""], [3, "hidden"], [1, "tooltip-content"], [4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]],
  template: function TooltipContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div");
      ɵɵelement(1, "span", 1, 0);
      ɵɵelementStart(3, "div", 2);
      ɵɵtemplate(4, TooltipContentComponent_span_4_Template, 2, 4, "span", 3)(5, TooltipContentComponent_span_5_Template, 1, 1, "span", 4);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵclassMapInterpolate1("tooltip-caret position-", ctx.placement, "");
      ɵɵproperty("hidden", !ctx.showCaret);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", !ctx.title);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.title);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  styles: [".ngx-charts-tooltip-content{position:fixed;border-radius:3px;z-index:5000;display:block;font-weight:400;opacity:0;pointer-events:none!important}.ngx-charts-tooltip-content.type-popover{background:#fff;color:#060709;border:1px solid #72809b;box-shadow:0 1px 3px #0003,0 1px 1px #00000024,0 2px 1px -1px #0000001f;font-size:13px;padding:4px}.ngx-charts-tooltip-content.type-popover .tooltip-caret{position:absolute;z-index:5001;width:0;height:0}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-left{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-right{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-bottom{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #fff}.ngx-charts-tooltip-content.type-tooltip{color:#fff;background:rgba(0,0,0,.75);font-size:12px;padding:0 10px;text-align:center;pointer-events:auto}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-left{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-right{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-bottom{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content .tooltip-label{display:block;line-height:1em;padding:8px 5px 5px;font-size:1em}.ngx-charts-tooltip-content .tooltip-val{display:block;font-size:1.3em;line-height:1em;padding:0 5px 8px}.ngx-charts-tooltip-content .tooltip-caret{position:absolute;z-index:5001;width:0;height:0}.ngx-charts-tooltip-content.position-right{transform:translate(10px)}.ngx-charts-tooltip-content.position-left{transform:translate(-10px)}.ngx-charts-tooltip-content.position-top{transform:translateY(-10px)}.ngx-charts-tooltip-content.position-bottom{transform:translateY(10px)}.ngx-charts-tooltip-content.animate{opacity:1;transition:opacity .3s,transform .3s;transform:translate(0);pointer-events:auto}.area-tooltip-container{padding:5px 0;pointer-events:none}.tooltip-item{text-align:left;line-height:1.2em;padding:5px 0}.tooltip-item .tooltip-item-color{display:inline-block;height:12px;width:12px;margin-right:5px;color:#5b646b;border-radius:3px}\n"],
  encapsulation: 2
});
__decorate([throttleable(100)], TooltipContentComponent.prototype, "onWindowResize", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipContentComponent, [{
    type: Component,
    args: [{
      selector: "ngx-tooltip-content",
      template: `
    <div>
      <span #caretElm [hidden]="!showCaret" class="tooltip-caret position-{{ this.placement }}"> </span>
      <div class="tooltip-content">
        <span *ngIf="!title">
          <ng-template [ngTemplateOutlet]="template" [ngTemplateOutletContext]="{ model: context }"> </ng-template>
        </span>
        <span *ngIf="title" [innerHTML]="title"> </span>
      </div>
    </div>
  `,
      encapsulation: ViewEncapsulation$1.None,
      styles: [".ngx-charts-tooltip-content{position:fixed;border-radius:3px;z-index:5000;display:block;font-weight:400;opacity:0;pointer-events:none!important}.ngx-charts-tooltip-content.type-popover{background:#fff;color:#060709;border:1px solid #72809b;box-shadow:0 1px 3px #0003,0 1px 1px #00000024,0 2px 1px -1px #0000001f;font-size:13px;padding:4px}.ngx-charts-tooltip-content.type-popover .tooltip-caret{position:absolute;z-index:5001;width:0;height:0}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-left{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-right{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-bottom{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #fff}.ngx-charts-tooltip-content.type-tooltip{color:#fff;background:rgba(0,0,0,.75);font-size:12px;padding:0 10px;text-align:center;pointer-events:auto}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-left{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-right{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-bottom{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content .tooltip-label{display:block;line-height:1em;padding:8px 5px 5px;font-size:1em}.ngx-charts-tooltip-content .tooltip-val{display:block;font-size:1.3em;line-height:1em;padding:0 5px 8px}.ngx-charts-tooltip-content .tooltip-caret{position:absolute;z-index:5001;width:0;height:0}.ngx-charts-tooltip-content.position-right{transform:translate(10px)}.ngx-charts-tooltip-content.position-left{transform:translate(-10px)}.ngx-charts-tooltip-content.position-top{transform:translateY(-10px)}.ngx-charts-tooltip-content.position-bottom{transform:translateY(10px)}.ngx-charts-tooltip-content.animate{opacity:1;transition:opacity .3s,transform .3s;transform:translate(0);pointer-events:auto}.area-tooltip-container{padding:5px 0;pointer-events:none}.tooltip-item{text-align:left;line-height:1.2em;padding:5px 0}.tooltip-item .tooltip-item-color{display:inline-block;height:12px;width:12px;margin-right:5px;color:#5b646b;border-radius:3px}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    host: [{
      type: Input
    }],
    showCaret: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    alignment: [{
      type: Input
    }],
    spacing: [{
      type: Input
    }],
    cssClass: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    context: [{
      type: Input
    }],
    caretElm: [{
      type: ViewChild,
      args: ["caretElm"]
    }],
    cssClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    onWindowResize: [{
      type: HostListener,
      args: ["window:resize"]
    }]
  });
})();
var InjectionRegisteryService = class {
  constructor(injectionService) {
    this.injectionService = injectionService;
    this.defaults = {};
    this.components = /* @__PURE__ */ new Map();
  }
  getByType(type = this.type) {
    return this.components.get(type);
  }
  create(bindings) {
    return this.createByType(this.type, bindings);
  }
  createByType(type, bindings) {
    bindings = this.assignDefaults(bindings);
    const component = this.injectComponent(type, bindings);
    this.register(type, component);
    return component;
  }
  destroy(instance) {
    const compsByType = this.components.get(instance.componentType);
    if (compsByType && compsByType.length) {
      const idx = compsByType.indexOf(instance);
      if (idx > -1) {
        const component = compsByType[idx];
        component.destroy();
        compsByType.splice(idx, 1);
      }
    }
  }
  destroyAll() {
    this.destroyByType(this.type);
  }
  destroyByType(type) {
    const comps = this.components.get(type);
    if (comps && comps.length) {
      let i = comps.length - 1;
      while (i >= 0) {
        this.destroy(comps[i--]);
      }
    }
  }
  injectComponent(type, bindings) {
    return this.injectionService.appendComponent(type, bindings);
  }
  assignDefaults(bindings) {
    const inputs = __spreadValues({}, this.defaults.inputs);
    const outputs = __spreadValues({}, this.defaults.outputs);
    if (!bindings.inputs && !bindings.outputs) {
      bindings = {
        inputs: bindings
      };
    }
    if (inputs) {
      bindings.inputs = __spreadValues(__spreadValues({}, inputs), bindings.inputs);
    }
    if (outputs) {
      bindings.outputs = __spreadValues(__spreadValues({}, outputs), bindings.outputs);
    }
    return bindings;
  }
  register(type, component) {
    if (!this.components.has(type)) {
      this.components.set(type, []);
    }
    const types = this.components.get(type);
    types.push(component);
  }
};
function isViewContainerRef(x2) {
  return x2.element;
}
var InjectionService = class _InjectionService {
  constructor(applicationRef, componentFactoryResolver, injector) {
    this.applicationRef = applicationRef;
    this.componentFactoryResolver = componentFactoryResolver;
    this.injector = injector;
  }
  /**
   * Sets a default global root view container. This is useful for
   * things like ngUpgrade that doesn't have a ApplicationRef root.
   *
   * @param container
   */
  static setGlobalRootViewContainer(container) {
    _InjectionService.globalRootViewContainer = container;
  }
  /**
   * Gets the root view container to inject the component to.
   *
   * @memberOf InjectionService
   */
  getRootViewContainer() {
    if (this._container) return this._container;
    if (_InjectionService.globalRootViewContainer) return _InjectionService.globalRootViewContainer;
    if (this.applicationRef.components.length) return this.applicationRef.components[0];
    throw new Error("View Container not found! ngUpgrade needs to manually set this via setRootViewContainer or setGlobalRootViewContainer.");
  }
  /**
   * Overrides the default root view container. This is useful for
   * things like ngUpgrade that doesn't have a ApplicationRef root.
   *
   * @param container
   *
   * @memberOf InjectionService
   */
  setRootViewContainer(container) {
    this._container = container;
  }
  /**
   * Gets the html element for a component ref.
   *
   * @param componentRef
   *
   * @memberOf InjectionService
   */
  getComponentRootNode(component) {
    if (isViewContainerRef(component)) {
      return component.element.nativeElement;
    }
    if (component.hostView && component.hostView.rootNodes.length > 0) {
      return component.hostView.rootNodes[0];
    }
    return component.location.nativeElement;
  }
  /**
   * Gets the root component container html element.
   *
   * @memberOf InjectionService
   */
  getRootViewContainerNode(component) {
    return this.getComponentRootNode(component);
  }
  /**
   * Projects the bindings onto the component
   *
   * @param component
   * @param options
   *
   * @memberOf InjectionService
   */
  projectComponentBindings(component, bindings) {
    if (bindings) {
      if (bindings.inputs !== void 0) {
        const bindingKeys = Object.getOwnPropertyNames(bindings.inputs);
        for (const bindingName of bindingKeys) {
          component.instance[bindingName] = bindings.inputs[bindingName];
        }
      }
      if (bindings.outputs !== void 0) {
        const eventKeys = Object.getOwnPropertyNames(bindings.outputs);
        for (const eventName of eventKeys) {
          component.instance[eventName] = bindings.outputs[eventName];
        }
      }
    }
    return component;
  }
  /**
   * Appends a component to a adjacent location
   *
   * @param componentClass
   * @param [options={}]
   * @param [location]
   *
   * @memberOf InjectionService
   */
  appendComponent(componentClass, bindings = {}, location) {
    if (!location) location = this.getRootViewContainer();
    const appendLocation = this.getComponentRootNode(location);
    const portalHost = new DomPortalOutlet(appendLocation, this.componentFactoryResolver, this.applicationRef, this.injector);
    const portal = new ComponentPortal(componentClass);
    const componentRef = portalHost.attach(portal);
    this.projectComponentBindings(componentRef, bindings);
    return componentRef;
  }
};
InjectionService.globalRootViewContainer = null;
InjectionService.ɵfac = function InjectionService_Factory(t) {
  return new (t || InjectionService)(ɵɵinject(ApplicationRef), ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(Injector));
};
InjectionService.ɵprov = ɵɵdefineInjectable({
  token: InjectionService,
  factory: InjectionService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectionService, [{
    type: Injectable
  }], function() {
    return [{
      type: ApplicationRef
    }, {
      type: ComponentFactoryResolver$1
    }, {
      type: Injector
    }];
  }, null);
})();
var TooltipService = class extends InjectionRegisteryService {
  constructor(injectionService) {
    super(injectionService);
    this.type = TooltipContentComponent;
  }
};
TooltipService.ɵfac = function TooltipService_Factory(t) {
  return new (t || TooltipService)(ɵɵinject(InjectionService));
};
TooltipService.ɵprov = ɵɵdefineInjectable({
  token: TooltipService,
  factory: TooltipService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipService, [{
    type: Injectable
  }], function() {
    return [{
      type: InjectionService
    }];
  }, null);
})();
var LegendPosition;
(function(LegendPosition2) {
  LegendPosition2["Right"] = "right";
  LegendPosition2["Below"] = "below";
})(LegendPosition || (LegendPosition = {}));
var LegendType;
(function(LegendType2) {
  LegendType2["ScaleLegend"] = "scaleLegend";
  LegendType2["Legend"] = "legend";
})(LegendType || (LegendType = {}));
var ScaleType;
(function(ScaleType2) {
  ScaleType2["Time"] = "time";
  ScaleType2["Linear"] = "linear";
  ScaleType2["Ordinal"] = "ordinal";
  ScaleType2["Quantile"] = "quantile";
})(ScaleType || (ScaleType = {}));
var ScaleLegendComponent = class {
  constructor() {
    this.horizontal = false;
  }
  ngOnChanges(changes) {
    const gradientValues = this.gradientString(this.colors.range(), this.colors.domain());
    const direction = this.horizontal ? "right" : "bottom";
    this.gradient = `linear-gradient(to ${direction}, ${gradientValues})`;
  }
  /**
   * Generates the string used in the gradient stylesheet properties
   * @param colors array of colors
   * @param splits array of splits on a scale of (0, 1)
   */
  gradientString(colors, splits) {
    splits.push(1);
    const pairs2 = [];
    colors.reverse().forEach((c, i) => {
      pairs2.push(`${c} ${Math.round(splits[i] * 100)}%`);
    });
    return pairs2.join(", ");
  }
};
ScaleLegendComponent.ɵfac = function ScaleLegendComponent_Factory(t) {
  return new (t || ScaleLegendComponent)();
};
ScaleLegendComponent.ɵcmp = ɵɵdefineComponent({
  type: ScaleLegendComponent,
  selectors: [["ngx-charts-scale-legend"]],
  inputs: {
    valueRange: "valueRange",
    colors: "colors",
    height: "height",
    width: "width",
    horizontal: "horizontal"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 8,
  vars: 10,
  consts: [[1, "scale-legend"], [1, "scale-legend-label"], [1, "scale-legend-wrap"]],
  template: function ScaleLegendComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "span");
      ɵɵtext(3);
      ɵɵelementEnd()();
      ɵɵelement(4, "div", 2);
      ɵɵelementStart(5, "div", 1)(6, "span");
      ɵɵtext(7);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵstyleProp("height", ctx.horizontal ? void 0 : ctx.height, "px")("width", ctx.width, "px");
      ɵɵclassProp("horizontal-legend", ctx.horizontal);
      ɵɵadvance(3);
      ɵɵtextInterpolate(ctx.valueRange[1].toLocaleString());
      ɵɵadvance();
      ɵɵstyleProp("background", ctx.gradient);
      ɵɵadvance(3);
      ɵɵtextInterpolate(ctx.valueRange[0].toLocaleString());
    }
  },
  styles: [".chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .scale-legend{text-align:center;display:flex;flex-direction:column}.chart-legend .scale-legend-wrap{display:inline-block;flex:1;width:30px;border-radius:5px;margin:0 auto}.chart-legend .scale-legend-label{font-size:12px}.chart-legend .horizontal-legend.scale-legend{flex-direction:row}.chart-legend .horizontal-legend .scale-legend-wrap{width:auto;height:30px;margin:0 16px}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScaleLegendComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-scale-legend",
      template: `
    <div
      class="scale-legend"
      [class.horizontal-legend]="horizontal"
      [style.height.px]="horizontal ? undefined : height"
      [style.width.px]="width"
    >
      <div class="scale-legend-label">
        <span>{{ valueRange[1].toLocaleString() }}</span>
      </div>
      <div class="scale-legend-wrap" [style.background]="gradient"></div>
      <div class="scale-legend-label">
        <span>{{ valueRange[0].toLocaleString() }}</span>
      </div>
    </div>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .scale-legend{text-align:center;display:flex;flex-direction:column}.chart-legend .scale-legend-wrap{display:inline-block;flex:1;width:30px;border-radius:5px;margin:0 auto}.chart-legend .scale-legend-label{font-size:12px}.chart-legend .horizontal-legend.scale-legend{flex-direction:row}.chart-legend .horizontal-legend .scale-legend-wrap{width:auto;height:30px;margin:0 16px}\n"]
    }]
  }], null, {
    valueRange: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    horizontal: [{
      type: Input
    }]
  });
})();
function formatLabel(label) {
  if (label instanceof Date) {
    label = label.toLocaleDateString();
  } else {
    label = label.toLocaleString();
  }
  return label;
}
function escapeLabel(label) {
  return label.toLocaleString().replace(/[&'`"<>]/g, (match) => {
    return {
      "&": "&amp;",
      // tslint:disable-next-line: quotemark
      "'": "&#x27;",
      "`": "&#x60;",
      '"': "&quot;",
      "<": "&lt;",
      ">": "&gt;"
    }[match];
  });
}
var LegendEntryComponent = class {
  constructor() {
    this.isActive = false;
    this.select = new EventEmitter();
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.toggle = new EventEmitter();
  }
  get trimmedLabel() {
    return this.formattedLabel || "(empty)";
  }
  onMouseEnter() {
    this.activate.emit({
      name: this.label
    });
  }
  onMouseLeave() {
    this.deactivate.emit({
      name: this.label
    });
  }
};
LegendEntryComponent.ɵfac = function LegendEntryComponent_Factory(t) {
  return new (t || LegendEntryComponent)();
};
LegendEntryComponent.ɵcmp = ɵɵdefineComponent({
  type: LegendEntryComponent,
  selectors: [["ngx-charts-legend-entry"]],
  hostBindings: function LegendEntryComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mouseenter", function LegendEntryComponent_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function LegendEntryComponent_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
  },
  inputs: {
    color: "color",
    label: "label",
    formattedLabel: "formattedLabel",
    isActive: "isActive"
  },
  outputs: {
    select: "select",
    activate: "activate",
    deactivate: "deactivate",
    toggle: "toggle"
  },
  decls: 4,
  vars: 6,
  consts: [["tabindex", "-1", 3, "click", "title"], [1, "legend-label-color", 3, "click"], [1, "legend-label-text"]],
  template: function LegendEntryComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "span", 0);
      ɵɵlistener("click", function LegendEntryComponent_Template_span_click_0_listener() {
        return ctx.select.emit(ctx.formattedLabel);
      });
      ɵɵelementStart(1, "span", 1);
      ɵɵlistener("click", function LegendEntryComponent_Template_span_click_1_listener() {
        return ctx.toggle.emit(ctx.formattedLabel);
      });
      ɵɵelementEnd();
      ɵɵelementStart(2, "span", 2);
      ɵɵtext(3);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassProp("active", ctx.isActive);
      ɵɵproperty("title", ctx.formattedLabel);
      ɵɵadvance();
      ɵɵstyleProp("background-color", ctx.color);
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.trimmedLabel, " ");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LegendEntryComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-legend-entry",
      template: `
    <span [title]="formattedLabel" tabindex="-1" [class.active]="isActive" (click)="select.emit(formattedLabel)">
      <span class="legend-label-color" [style.background-color]="color" (click)="toggle.emit(formattedLabel)"> </span>
      <span class="legend-label-text">
        {{ trimmedLabel }}
      </span>
    </span>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    color: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    formattedLabel: [{
      type: Input
    }],
    isActive: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    toggle: [{
      type: Output
    }],
    onMouseEnter: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    onMouseLeave: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  });
})();
var LegendComponent = class {
  constructor(cd) {
    this.cd = cd;
    this.horizontal = false;
    this.labelClick = new EventEmitter();
    this.labelActivate = new EventEmitter();
    this.labelDeactivate = new EventEmitter();
    this.legendEntries = [];
  }
  ngOnChanges(changes) {
    this.update();
  }
  update() {
    this.cd.markForCheck();
    this.legendEntries = this.getLegendEntries();
  }
  getLegendEntries() {
    const items = [];
    for (const label of this.data) {
      const formattedLabel = formatLabel(label);
      const idx = items.findIndex((i) => {
        return i.label === formattedLabel;
      });
      if (idx === -1) {
        items.push({
          label,
          formattedLabel,
          color: this.colors.getColor(label)
        });
      }
    }
    return items;
  }
  isActive(entry) {
    if (!this.activeEntries) return false;
    const item = this.activeEntries.find((d) => {
      return entry.label === d.name;
    });
    return item !== void 0;
  }
  activate(item) {
    this.labelActivate.emit(item);
  }
  deactivate(item) {
    this.labelDeactivate.emit(item);
  }
  trackBy(index2, item) {
    return item.label;
  }
};
LegendComponent.ɵfac = function LegendComponent_Factory(t) {
  return new (t || LegendComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
LegendComponent.ɵcmp = ɵɵdefineComponent({
  type: LegendComponent,
  selectors: [["ngx-charts-legend"]],
  inputs: {
    data: "data",
    title: "title",
    colors: "colors",
    height: "height",
    width: "width",
    activeEntries: "activeEntries",
    horizontal: "horizontal"
  },
  outputs: {
    labelClick: "labelClick",
    labelActivate: "labelActivate",
    labelDeactivate: "labelDeactivate"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 5,
  vars: 9,
  consts: [["class", "legend-title", 4, "ngIf"], [1, "legend-wrap"], [1, "legend-labels"], ["class", "legend-label", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "legend-title"], [1, "legend-title-text"], [1, "legend-label"], [3, "select", "activate", "deactivate", "label", "formattedLabel", "color", "isActive"]],
  template: function LegendComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div");
      ɵɵtemplate(1, LegendComponent_header_1_Template, 3, 1, "header", 0);
      ɵɵelementStart(2, "div", 1)(3, "ul", 2);
      ɵɵtemplate(4, LegendComponent_li_4_Template, 2, 4, "li", 3);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵstyleProp("width", ctx.width, "px");
      ɵɵadvance();
      ɵɵproperty("ngIf", (ctx.title == null ? null : ctx.title.length) > 0);
      ɵɵadvance(2);
      ɵɵstyleProp("max-height", ctx.height - 45, "px");
      ɵɵclassProp("horizontal-legend", ctx.horizontal);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.legendEntries)("ngForTrackBy", ctx.trackBy);
    }
  },
  dependencies: [LegendEntryComponent, NgIf, NgForOf],
  styles: [".chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .legend-title{white-space:nowrap;overflow:hidden;margin-left:10px;margin-bottom:5px;font-size:14px;font-weight:700}.chart-legend ul,.chart-legend li{padding:0;margin:0;list-style:none}.chart-legend .horizontal-legend li{display:inline-block}.chart-legend .legend-wrap{width:calc(100% - 10px)}.chart-legend .legend-labels{line-height:85%;list-style:none;text-align:left;float:left;width:100%;border-radius:3px;overflow-y:auto;overflow-x:hidden;white-space:nowrap;background:rgba(0,0,0,.05)}.chart-legend .legend-label{cursor:pointer;font-size:90%;margin:8px;color:#afb7c8}.chart-legend .legend-label:hover{color:#000;transition:.2s}.chart-legend .legend-label .active .legend-label-text{color:#000}.chart-legend .legend-label-color{display:inline-block;height:15px;width:15px;margin-right:5px;color:#5b646b;border-radius:3px}.chart-legend .legend-label-text{display:inline-block;vertical-align:top;line-height:15px;font-size:12px;width:calc(100% - 20px);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chart-legend .legend-title-text{vertical-align:bottom;display:inline-block;line-height:16px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LegendComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-legend",
      template: `
    <div [style.width.px]="width">
      <header class="legend-title" *ngIf="title?.length > 0">
        <span class="legend-title-text">{{ title }}</span>
      </header>
      <div class="legend-wrap">
        <ul class="legend-labels" [class.horizontal-legend]="horizontal" [style.max-height.px]="height - 45">
          <li *ngFor="let entry of legendEntries; trackBy: trackBy" class="legend-label">
            <ngx-charts-legend-entry
              [label]="entry.label"
              [formattedLabel]="entry.formattedLabel"
              [color]="entry.color"
              [isActive]="isActive(entry)"
              (select)="labelClick.emit($event)"
              (activate)="activate($event)"
              (deactivate)="deactivate($event)"
            >
            </ngx-charts-legend-entry>
          </li>
        </ul>
      </div>
    </div>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .legend-title{white-space:nowrap;overflow:hidden;margin-left:10px;margin-bottom:5px;font-size:14px;font-weight:700}.chart-legend ul,.chart-legend li{padding:0;margin:0;list-style:none}.chart-legend .horizontal-legend li{display:inline-block}.chart-legend .legend-wrap{width:calc(100% - 10px)}.chart-legend .legend-labels{line-height:85%;list-style:none;text-align:left;float:left;width:100%;border-radius:3px;overflow-y:auto;overflow-x:hidden;white-space:nowrap;background:rgba(0,0,0,.05)}.chart-legend .legend-label{cursor:pointer;font-size:90%;margin:8px;color:#afb7c8}.chart-legend .legend-label:hover{color:#000;transition:.2s}.chart-legend .legend-label .active .legend-label-text{color:#000}.chart-legend .legend-label-color{display:inline-block;height:15px;width:15px;margin-right:5px;color:#5b646b;border-radius:3px}.chart-legend .legend-label-text{display:inline-block;vertical-align:top;line-height:15px;font-size:12px;width:calc(100% - 20px);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chart-legend .legend-title-text{vertical-align:bottom;display:inline-block;line-height:16px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }];
  }, {
    data: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    horizontal: [{
      type: Input
    }],
    labelClick: [{
      type: Output
    }],
    labelActivate: [{
      type: Output
    }],
    labelDeactivate: [{
      type: Output
    }]
  });
})();
var ChartComponent = class {
  constructor() {
    this.showLegend = false;
    this.animations = true;
    this.legendLabelClick = new EventEmitter();
    this.legendLabelActivate = new EventEmitter();
    this.legendLabelDeactivate = new EventEmitter();
    this.LegendPosition = LegendPosition;
    this.LegendType = LegendType;
  }
  ngOnChanges(changes) {
    this.update();
  }
  update() {
    let legendColumns = 0;
    if (this.showLegend) {
      this.legendType = this.getLegendType();
      if (!this.legendOptions || this.legendOptions.position === LegendPosition.Right) {
        if (this.legendType === LegendType.ScaleLegend) {
          legendColumns = 1;
        } else {
          legendColumns = 2;
        }
      }
    }
    const chartColumns = 12 - legendColumns;
    this.chartWidth = Math.floor(this.view[0] * chartColumns / 12);
    this.legendWidth = !this.legendOptions || this.legendOptions.position === LegendPosition.Right ? Math.floor(this.view[0] * legendColumns / 12) : this.chartWidth;
  }
  getLegendType() {
    return this.legendOptions.scaleType === ScaleType.Linear ? LegendType.ScaleLegend : LegendType.Legend;
  }
};
ChartComponent.ɵfac = function ChartComponent_Factory(t) {
  return new (t || ChartComponent)();
};
ChartComponent.ɵcmp = ɵɵdefineComponent({
  type: ChartComponent,
  selectors: [["ngx-charts-chart"]],
  inputs: {
    view: "view",
    showLegend: "showLegend",
    legendOptions: "legendOptions",
    legendType: "legendType",
    activeEntries: "activeEntries",
    animations: "animations"
  },
  outputs: {
    legendLabelClick: "legendLabelClick",
    legendLabelActivate: "legendLabelActivate",
    legendLabelDeactivate: "legendLabelDeactivate"
  },
  features: [ɵɵProvidersFeature([TooltipService]), ɵɵNgOnChangesFeature],
  ngContentSelectors: _c2,
  decls: 5,
  vars: 8,
  consts: [[1, "ngx-charts-outer"], [1, "ngx-charts"], ["class", "chart-legend", 3, "horizontal", "valueRange", "colors", "height", "width", 4, "ngIf"], ["class", "chart-legend", 3, "horizontal", "data", "title", "colors", "height", "width", "activeEntries", "labelClick", "labelActivate", "labelDeactivate", 4, "ngIf"], [1, "chart-legend", 3, "horizontal", "valueRange", "colors", "height", "width"], [1, "chart-legend", 3, "labelClick", "labelActivate", "labelDeactivate", "horizontal", "data", "title", "colors", "height", "width", "activeEntries"]],
  template: function ChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "svg", 1);
      ɵɵprojection(2);
      ɵɵelementEnd();
      ɵɵtemplate(3, ChartComponent_ngx_charts_scale_legend_3_Template, 1, 5, "ngx-charts-scale-legend", 2)(4, ChartComponent_ngx_charts_legend_4_Template, 1, 7, "ngx-charts-legend", 3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵstyleProp("width", ctx.view[0], "px")("height", ctx.view[1], "px");
      ɵɵadvance();
      ɵɵattribute("width", ctx.chartWidth)("height", ctx.view[1]);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showLegend && ctx.legendType === ctx.LegendType.ScaleLegend);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showLegend && ctx.legendType === ctx.LegendType.Legend);
    }
  },
  dependencies: [ScaleLegendComponent, LegendComponent, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartComponent, [{
    type: Component,
    args: [{
      providers: [TooltipService],
      selector: "ngx-charts-chart",
      template: `
    <div class="ngx-charts-outer" [style.width.px]="view[0]" [style.height.px]="view[1]">
      <svg class="ngx-charts" [attr.width]="chartWidth" [attr.height]="view[1]">
        <ng-content></ng-content>
      </svg>
      <ngx-charts-scale-legend
        *ngIf="showLegend && legendType === LegendType.ScaleLegend"
        class="chart-legend"
        [horizontal]="legendOptions && legendOptions.position === LegendPosition.Below"
        [valueRange]="legendOptions.domain"
        [colors]="legendOptions.colors"
        [height]="view[1]"
        [width]="legendWidth"
      >
      </ngx-charts-scale-legend>
      <ngx-charts-legend
        *ngIf="showLegend && legendType === LegendType.Legend"
        class="chart-legend"
        [horizontal]="legendOptions && legendOptions.position === LegendPosition.Below"
        [data]="legendOptions.domain"
        [title]="legendOptions.title"
        [colors]="legendOptions.colors"
        [height]="view[1]"
        [width]="legendWidth"
        [activeEntries]="activeEntries"
        (labelClick)="legendLabelClick.emit($event)"
        (labelActivate)="legendLabelActivate.emit($event)"
        (labelDeactivate)="legendLabelDeactivate.emit($event)"
      >
      </ngx-charts-legend>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    view: [{
      type: Input
    }],
    showLegend: [{
      type: Input
    }],
    legendOptions: [{
      type: Input
    }],
    legendType: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    legendLabelClick: [{
      type: Output
    }],
    legendLabelActivate: [{
      type: Output
    }],
    legendLabelDeactivate: [{
      type: Output
    }]
  });
})();
var VisibilityObserver = class {
  constructor(element, zone) {
    this.element = element;
    this.zone = zone;
    this.visible = new EventEmitter();
    this.isVisible = false;
    this.runCheck();
  }
  destroy() {
    clearTimeout(this.timeout);
  }
  onVisibilityChange() {
    this.zone.run(() => {
      this.isVisible = true;
      this.visible.emit(true);
    });
  }
  runCheck() {
    const check = () => {
      if (!this.element) {
        return;
      }
      const {
        offsetHeight,
        offsetWidth
      } = this.element.nativeElement;
      if (offsetHeight && offsetWidth) {
        clearTimeout(this.timeout);
        this.onVisibilityChange();
      } else {
        clearTimeout(this.timeout);
        this.zone.runOutsideAngular(() => {
          this.timeout = setTimeout(() => check(), 100);
        });
      }
    };
    this.zone.runOutsideAngular(() => {
      this.timeout = setTimeout(() => check());
    });
  }
};
VisibilityObserver.ɵfac = function VisibilityObserver_Factory(t) {
  return new (t || VisibilityObserver)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
VisibilityObserver.ɵdir = ɵɵdefineDirective({
  type: VisibilityObserver,
  selectors: [["visibility-observer"]],
  outputs: {
    visible: "visible"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisibilityObserver, [{
    type: Directive,
    args: [{
      selector: "visibility-observer"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    visible: [{
      type: Output
    }]
  });
})();
function isDate(value2) {
  return toString.call(value2) === "[object Date]";
}
function isNumber(value2) {
  return typeof value2 === "number";
}
var BaseChartComponent = class {
  constructor(chartElement, zone, cd, platformId) {
    this.chartElement = chartElement;
    this.zone = zone;
    this.cd = cd;
    this.platformId = platformId;
    this.scheme = "cool";
    this.schemeType = ScaleType.Ordinal;
    this.animations = true;
    this.select = new EventEmitter();
  }
  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.animations = false;
    }
  }
  ngAfterViewInit() {
    this.bindWindowResizeEvent();
    this.visibilityObserver = new VisibilityObserver(this.chartElement, this.zone);
    this.visibilityObserver.visible.subscribe(this.update.bind(this));
  }
  ngOnDestroy() {
    this.unbindEvents();
    if (this.visibilityObserver) {
      this.visibilityObserver.visible.unsubscribe();
      this.visibilityObserver.destroy();
    }
  }
  ngOnChanges(changes) {
    this.update();
  }
  update() {
    if (this.results) {
      this.results = this.cloneData(this.results);
    } else {
      this.results = [];
    }
    if (this.view) {
      this.width = this.view[0];
      this.height = this.view[1];
    } else {
      const dims = this.getContainerDims();
      if (dims) {
        this.width = dims.width;
        this.height = dims.height;
      }
    }
    if (!this.width) {
      this.width = 600;
    }
    if (!this.height) {
      this.height = 400;
    }
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    if (this.cd) {
      this.cd.markForCheck();
    }
  }
  getContainerDims() {
    let width;
    let height;
    const hostElem = this.chartElement.nativeElement;
    if (isPlatformBrowser(this.platformId) && hostElem.parentNode !== null) {
      const dims = hostElem.parentNode.getBoundingClientRect();
      width = dims.width;
      height = dims.height;
    }
    if (width && height) {
      return {
        width,
        height
      };
    }
    return null;
  }
  /**
   * Converts all date objects that appear as name
   * into formatted date strings
   */
  formatDates() {
    for (let i = 0; i < this.results.length; i++) {
      const g = this.results[i];
      g.label = g.name;
      if (isDate(g.label)) {
        g.label = g.label.toLocaleDateString();
      }
      if (g.series) {
        for (let j = 0; j < g.series.length; j++) {
          const d = g.series[j];
          d.label = d.name;
          if (isDate(d.label)) {
            d.label = d.label.toLocaleDateString();
          }
        }
      }
    }
  }
  unbindEvents() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
  bindWindowResizeEvent() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const source = fromEvent(window, "resize");
    const subscription = source.pipe(debounceTime(200)).subscribe((e) => {
      this.update();
      if (this.cd) {
        this.cd.markForCheck();
      }
    });
    this.resizeSubscription = subscription;
  }
  /**
   * Clones the data into a new object
   *
   * @memberOf BaseChart
   */
  cloneData(data) {
    const results = [];
    for (const item of data) {
      const copy = {};
      if (item["name"] !== void 0) {
        copy["name"] = item["name"];
      }
      if (item["value"] !== void 0) {
        copy["value"] = item["value"];
      }
      if (item["series"] !== void 0) {
        copy["series"] = [];
        for (const seriesItem of item["series"]) {
          const seriesItemCopy = Object.assign({}, seriesItem);
          copy["series"].push(seriesItemCopy);
        }
      }
      if (item["extra"] !== void 0) {
        copy["extra"] = JSON.parse(JSON.stringify(item["extra"]));
      }
      if (item["source"] !== void 0) {
        copy["source"] = item["source"];
      }
      if (item["target"] !== void 0) {
        copy["target"] = item["target"];
      }
      results.push(copy);
    }
    return results;
  }
};
BaseChartComponent.ɵfac = function BaseChartComponent_Factory(t) {
  return new (t || BaseChartComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PLATFORM_ID));
};
BaseChartComponent.ɵcmp = ɵɵdefineComponent({
  type: BaseChartComponent,
  selectors: [["base-chart"]],
  inputs: {
    results: "results",
    view: "view",
    scheme: "scheme",
    schemeType: "schemeType",
    customColors: "customColors",
    animations: "animations"
  },
  outputs: {
    select: "select"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 0,
  template: function BaseChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div");
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseChartComponent, [{
    type: Component,
    args: [{
      selector: "base-chart",
      template: ` <div></div> `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    results: [{
      type: Input
    }],
    view: [{
      type: Input
    }],
    scheme: [{
      type: Input
    }],
    schemeType: [{
      type: Input
    }],
    customColors: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    select: [{
      type: Output
    }]
  });
})();
var Orientation;
(function(Orientation2) {
  Orientation2["Top"] = "top";
  Orientation2["Bottom"] = "bottom";
  Orientation2["Left"] = "left";
  Orientation2["Right"] = "right";
})(Orientation || (Orientation = {}));
var AxisLabelComponent = class {
  constructor(element) {
    this.textHeight = 25;
    this.margin = 5;
    this.element = element.nativeElement;
  }
  ngOnChanges(changes) {
    this.update();
  }
  update() {
    this.strokeWidth = "0.01";
    this.textAnchor = "middle";
    this.transform = "";
    switch (this.orient) {
      case Orientation.Top:
        this.y = this.offset;
        this.x = this.width / 2;
        break;
      case Orientation.Bottom:
        this.y = this.offset;
        this.x = this.width / 2;
        break;
      case Orientation.Left:
        this.y = -(this.offset + this.textHeight + this.margin);
        this.x = -this.height / 2;
        this.transform = "rotate(270)";
        break;
      case Orientation.Right:
        this.y = this.offset + this.margin;
        this.x = -this.height / 2;
        this.transform = "rotate(270)";
        break;
      default:
    }
  }
};
AxisLabelComponent.ɵfac = function AxisLabelComponent_Factory(t) {
  return new (t || AxisLabelComponent)(ɵɵdirectiveInject(ElementRef));
};
AxisLabelComponent.ɵcmp = ɵɵdefineComponent({
  type: AxisLabelComponent,
  selectors: [["g", "ngx-charts-axis-label", ""]],
  inputs: {
    orient: "orient",
    label: "label",
    offset: "offset",
    width: "width",
    height: "height"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c3,
  decls: 2,
  vars: 6,
  template: function AxisLabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "text");
      ɵɵtext(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵattribute("stroke-width", ctx.strokeWidth)("x", ctx.x)("y", ctx.y)("text-anchor", ctx.textAnchor)("transform", ctx.transform);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.label, " ");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AxisLabelComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-axis-label]",
      template: `
    <svg:text
      [attr.stroke-width]="strokeWidth"
      [attr.x]="x"
      [attr.y]="y"
      [attr.text-anchor]="textAnchor"
      [attr.transform]="transform"
    >
      {{ label }}
    </svg:text>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    orient: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }]
  });
})();
function trimLabel(s2, max4 = 16) {
  if (typeof s2 !== "string") {
    if (typeof s2 === "number") {
      return s2 + "";
    } else {
      return "";
    }
  }
  s2 = s2.trim();
  if (s2.length <= max4) {
    return s2;
  } else {
    return `${s2.slice(0, max4)}...`;
  }
}
function reduceTicks(ticks, maxTicks) {
  if (ticks.length > maxTicks) {
    const reduced = [];
    const modulus = Math.floor(ticks.length / maxTicks);
    for (let i = 0; i < ticks.length; i++) {
      if (i % modulus === 0) {
        reduced.push(ticks[i]);
      }
    }
    ticks = reduced;
  }
  return ticks;
}
function getTickLines(label, maxLength, maxLines) {
  const labelString = (label || "").toString();
  let totalLines = [];
  if (/\s/.test(labelString)) {
    totalLines = labelString.split(/\s+/).reduce((lines, line) => {
      const last = (lines.pop() || "") + " ";
      return last.length + line.length > maxLength ? [...lines, last.trim(), line.trim()] : [...lines, last + line];
    }, []);
  } else {
    let startIndex = 0;
    while (startIndex < labelString.length) {
      totalLines.push(labelString.substring(startIndex, startIndex + maxLength));
      startIndex += maxLength;
    }
  }
  if (totalLines.length > maxLines) {
    totalLines = totalLines.splice(0, maxLines);
    totalLines[totalLines.length - 1] += "...";
  }
  return totalLines;
}
var TextAnchor;
(function(TextAnchor2) {
  TextAnchor2["Start"] = "start";
  TextAnchor2["Middle"] = "middle";
  TextAnchor2["End"] = "end";
})(TextAnchor || (TextAnchor = {}));
var XAxisTicksComponent = class {
  constructor(platformId) {
    this.platformId = platformId;
    this.tickArguments = [5];
    this.tickStroke = "#ccc";
    this.trimTicks = true;
    this.maxTickLength = 16;
    this.showGridLines = false;
    this.rotateTicks = true;
    this.wrapTicks = false;
    this.dimensionsChanged = new EventEmitter();
    this.verticalSpacing = 20;
    this.rotateLabels = false;
    this.innerTickSize = 6;
    this.outerTickSize = 6;
    this.tickPadding = 3;
    this.textAnchor = TextAnchor.Middle;
    this.maxTicksLength = 0;
    this.maxAllowedLength = 16;
    this.height = 0;
    this.approxHeight = 10;
    this.maxPossibleLengthForTickIfWrapped = 16;
  }
  get isWrapTicksSupported() {
    return this.wrapTicks && this.scale.step;
  }
  ngOnChanges(changes) {
    this.update();
  }
  ngAfterViewInit() {
    setTimeout(() => this.updateDims());
  }
  updateDims() {
    if (!isPlatformBrowser(this.platformId)) {
      this.dimensionsChanged.emit({
        height: this.approxHeight
      });
      return;
    }
    const height = parseInt(this.ticksElement.nativeElement.getBoundingClientRect().height, 10);
    if (height !== this.height) {
      this.height = height;
      this.dimensionsChanged.emit({
        height: this.height
      });
      setTimeout(() => this.updateDims());
    }
  }
  update() {
    const scale = this.scale;
    this.ticks = this.getTicks();
    if (this.tickFormatting) {
      this.tickFormat = this.tickFormatting;
    } else if (scale.tickFormat) {
      this.tickFormat = scale.tickFormat.apply(scale, this.tickArguments);
    } else {
      this.tickFormat = function(d) {
        if (d.constructor.name === "Date") {
          return d.toLocaleDateString();
        }
        return d.toLocaleString();
      };
    }
    const angle = this.rotateTicks ? this.getRotationAngle(this.ticks) : null;
    this.adjustedScale = this.scale.bandwidth ? function(d) {
      return this.scale(d) + this.scale.bandwidth() * 0.5;
    } : this.scale;
    this.textTransform = "";
    if (angle && angle !== 0) {
      this.textTransform = `rotate(${angle})`;
      this.textAnchor = TextAnchor.End;
      this.verticalSpacing = 10;
    } else {
      this.textAnchor = TextAnchor.Middle;
    }
    setTimeout(() => this.updateDims());
  }
  getRotationAngle(ticks) {
    let angle = 0;
    this.maxTicksLength = 0;
    for (let i = 0; i < ticks.length; i++) {
      const tick = this.tickFormat(ticks[i]).toString();
      let tickLength = tick.length;
      if (this.trimTicks) {
        tickLength = this.tickTrim(tick).length;
      }
      if (tickLength > this.maxTicksLength) {
        this.maxTicksLength = tickLength;
      }
    }
    const len = Math.min(this.maxTicksLength, this.maxAllowedLength);
    const charWidth = 7;
    const wordWidth = len * charWidth;
    let baseWidth = wordWidth;
    const maxBaseWidth = Math.floor(this.width / ticks.length);
    while (baseWidth > maxBaseWidth && angle > -90) {
      angle -= 30;
      baseWidth = Math.cos(angle * (Math.PI / 180)) * wordWidth;
    }
    let labelHeight = 14;
    if (this.isWrapTicksSupported) {
      const longestTick = this.ticks.reduce((earlier, current) => current.length > earlier.length ? current : earlier, "");
      const tickLines = this.tickChunks(longestTick);
      labelHeight = 14 * (tickLines.length || 1);
      this.maxPossibleLengthForTickIfWrapped = this.getMaxPossibleLengthForTick(longestTick);
    }
    const requiredHeight = angle !== 0 ? Math.max(Math.abs(Math.sin(angle * Math.PI / 180)) * this.maxTickLength * charWidth, 10) : labelHeight;
    this.approxHeight = Math.min(requiredHeight, 200);
    return angle;
  }
  getTicks() {
    let ticks;
    const maxTicks = this.getMaxTicks(20);
    const maxScaleTicks = this.getMaxTicks(100);
    if (this.tickValues) {
      ticks = this.tickValues;
    } else if (this.scale.ticks) {
      ticks = this.scale.ticks.apply(this.scale, [maxScaleTicks]);
    } else {
      ticks = this.scale.domain();
      ticks = reduceTicks(ticks, maxTicks);
    }
    return ticks;
  }
  getMaxTicks(tickWidth) {
    return Math.floor(this.width / tickWidth);
  }
  tickTransform(tick) {
    return "translate(" + this.adjustedScale(tick) + "," + this.verticalSpacing + ")";
  }
  gridLineTransform() {
    return `translate(0,${-this.verticalSpacing - 5})`;
  }
  tickTrim(label) {
    return this.trimTicks ? trimLabel(label, this.maxTickLength) : label;
  }
  getMaxPossibleLengthForTick(longestLabel) {
    if (this.scale.bandwidth) {
      const averageCharacterWidth = 7;
      const maxCharacters = Math.floor(this.scale.bandwidth() / averageCharacterWidth);
      const truncatedText = longestLabel.slice(0, maxCharacters);
      return Math.max(truncatedText.length, this.maxTickLength);
    }
    return this.maxTickLength;
  }
  tickChunks(label) {
    if (label.toString().length > this.maxTickLength && this.scale.bandwidth) {
      const maxAllowedLines = 5;
      let maxLines = this.rotateTicks ? Math.floor(this.scale.step() / 14) : maxAllowedLines;
      if (maxLines <= 1) {
        return [this.tickTrim(label)];
      }
      let possibleStringLength = Math.max(this.maxPossibleLengthForTickIfWrapped, this.maxTickLength);
      if (!isPlatformBrowser(this.platformId)) {
        possibleStringLength = Math.floor(Math.min(this.approxHeight / maxAllowedLines, Math.max(this.maxPossibleLengthForTickIfWrapped, this.maxTickLength)));
      }
      maxLines = Math.min(maxLines, maxAllowedLines);
      const lines = getTickLines(label, possibleStringLength, maxLines < 1 ? 1 : maxLines);
      return lines;
    }
    return [this.tickTrim(label)];
  }
};
XAxisTicksComponent.ɵfac = function XAxisTicksComponent_Factory(t) {
  return new (t || XAxisTicksComponent)(ɵɵdirectiveInject(PLATFORM_ID));
};
XAxisTicksComponent.ɵcmp = ɵɵdefineComponent({
  type: XAxisTicksComponent,
  selectors: [["g", "ngx-charts-x-axis-ticks", ""]],
  viewQuery: function XAxisTicksComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ticksElement = _t.first);
    }
  },
  inputs: {
    scale: "scale",
    orient: "orient",
    tickArguments: "tickArguments",
    tickValues: "tickValues",
    tickStroke: "tickStroke",
    trimTicks: "trimTicks",
    maxTickLength: "maxTickLength",
    tickFormatting: "tickFormatting",
    showGridLines: "showGridLines",
    gridLineHeight: "gridLineHeight",
    width: "width",
    rotateTicks: "rotateTicks",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    dimensionsChanged: "dimensionsChanged"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c5,
  decls: 4,
  vars: 2,
  consts: [["ticksel", ""], ["tmplMultilineTick", ""], ["tmplSinglelineTick", ""], ["class", "tick", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "tick"], [4, "ngIf"], ["stroke-width", "0.01", "font-size", "12px"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["x", "0", 4, "ngFor", "ngForOf"], ["x", "0"], ["y2", "0", 1, "gridline-path", "gridline-path-vertical"]],
  template: function XAxisTicksComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "g", null, 0);
      ɵɵtemplate(2, XAxisTicksComponent__svg_g_2_Template, 2, 2, "g", 3);
      ɵɵelementEnd();
      ɵɵtemplate(3, XAxisTicksComponent__svg_g_3_Template, 2, 2, "g", 4);
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.ticks);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.ticks);
    }
  },
  dependencies: [NgForOf, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(XAxisTicksComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-x-axis-ticks]",
      template: `
    <svg:g #ticksel>
      <svg:g *ngFor="let tick of ticks" class="tick" [attr.transform]="tickTransform(tick)">
        <ng-container *ngIf="tickFormat(tick) as tickFormatted">
          <title>{{ tickFormatted }}</title>
          <svg:text
            stroke-width="0.01"
            font-size="12px"
            [attr.text-anchor]="textAnchor"
            [attr.transform]="textTransform"
          >
            <ng-container *ngIf="isWrapTicksSupported; then tmplMultilineTick; else tmplSinglelineTick"></ng-container>
          </svg:text>

          <ng-template #tmplMultilineTick>
            <ng-container *ngIf="tickChunks(tick) as tickLines">
              <svg:tspan *ngFor="let tickLine of tickLines; let i = index" x="0" [attr.y]="i * 12">
                {{ tickLine }}
              </svg:tspan>
            </ng-container>
          </ng-template>

          <ng-template #tmplSinglelineTick>
            {{ tickTrim(tickFormatted) }}
          </ng-template>
        </ng-container>
      </svg:g>
    </svg:g>

    <svg:g *ngFor="let tick of ticks" [attr.transform]="tickTransform(tick)">
      <svg:g *ngIf="showGridLines" [attr.transform]="gridLineTransform()">
        <svg:line class="gridline-path gridline-path-vertical" [attr.y1]="-gridLineHeight" y2="0" />
      </svg:g>
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    scale: [{
      type: Input
    }],
    orient: [{
      type: Input
    }],
    tickArguments: [{
      type: Input
    }],
    tickValues: [{
      type: Input
    }],
    tickStroke: [{
      type: Input
    }],
    trimTicks: [{
      type: Input
    }],
    maxTickLength: [{
      type: Input
    }],
    tickFormatting: [{
      type: Input
    }],
    showGridLines: [{
      type: Input
    }],
    gridLineHeight: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    rotateTicks: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    dimensionsChanged: [{
      type: Output
    }],
    ticksElement: [{
      type: ViewChild,
      args: ["ticksel"]
    }]
  });
})();
var XAxisComponent = class {
  constructor() {
    this.rotateTicks = true;
    this.showGridLines = false;
    this.xOrient = Orientation.Bottom;
    this.xAxisOffset = 0;
    this.wrapTicks = false;
    this.dimensionsChanged = new EventEmitter();
    this.xAxisClassName = "x axis";
    this.labelOffset = 0;
    this.fill = "none";
    this.stroke = "stroke";
    this.tickStroke = "#ccc";
    this.strokeWidth = "none";
    this.padding = 5;
    this.orientation = Orientation;
  }
  ngOnChanges(changes) {
    this.update();
  }
  update() {
    this.transform = `translate(0,${this.xAxisOffset + this.padding + this.dims.height})`;
    if (typeof this.xAxisTickCount !== "undefined") {
      this.tickArguments = [this.xAxisTickCount];
    }
  }
  emitTicksHeight({
    height
  }) {
    const newLabelOffset = height + 25 + 5;
    if (newLabelOffset !== this.labelOffset) {
      this.labelOffset = newLabelOffset;
      setTimeout(() => {
        this.dimensionsChanged.emit({
          height
        });
      }, 0);
    }
  }
};
XAxisComponent.ɵfac = function XAxisComponent_Factory(t) {
  return new (t || XAxisComponent)();
};
XAxisComponent.ɵcmp = ɵɵdefineComponent({
  type: XAxisComponent,
  selectors: [["g", "ngx-charts-x-axis", ""]],
  viewQuery: function XAxisComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(XAxisTicksComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ticksComponent = _t.first);
    }
  },
  inputs: {
    xScale: "xScale",
    dims: "dims",
    trimTicks: "trimTicks",
    rotateTicks: "rotateTicks",
    maxTickLength: "maxTickLength",
    tickFormatting: "tickFormatting",
    showGridLines: "showGridLines",
    showLabel: "showLabel",
    labelText: "labelText",
    ticks: "ticks",
    xAxisTickCount: "xAxisTickCount",
    xOrient: "xOrient",
    xAxisOffset: "xAxisOffset",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    dimensionsChanged: "dimensionsChanged"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c6,
  decls: 3,
  vars: 4,
  consts: [["ngx-charts-x-axis-ticks", "", 3, "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "tickArguments", "tickStroke", "scale", "orient", "showGridLines", "gridLineHeight", "width", "tickValues", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width", 4, "ngIf"], ["ngx-charts-x-axis-ticks", "", 3, "dimensionsChanged", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "tickArguments", "tickStroke", "scale", "orient", "showGridLines", "gridLineHeight", "width", "tickValues", "wrapTicks"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width"]],
  template: function XAxisComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "g");
      ɵɵtemplate(1, XAxisComponent__svg_g_1_Template, 1, 13, "g", 0)(2, XAxisComponent__svg_g_2_Template, 1, 5, "g", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵattribute("class", ctx.xAxisClassName)("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.xScale);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showLabel);
    }
  },
  dependencies: [XAxisTicksComponent, AxisLabelComponent, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(XAxisComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-x-axis]",
      template: `
    <svg:g [attr.class]="xAxisClassName" [attr.transform]="transform">
      <svg:g
        ngx-charts-x-axis-ticks
        *ngIf="xScale"
        [trimTicks]="trimTicks"
        [rotateTicks]="rotateTicks"
        [maxTickLength]="maxTickLength"
        [tickFormatting]="tickFormatting"
        [tickArguments]="tickArguments"
        [tickStroke]="tickStroke"
        [scale]="xScale"
        [orient]="xOrient"
        [showGridLines]="showGridLines"
        [gridLineHeight]="dims.height"
        [width]="dims.width"
        [tickValues]="ticks"
        [wrapTicks]="wrapTicks"
        (dimensionsChanged)="emitTicksHeight($event)"
      />
      <svg:g
        ngx-charts-axis-label
        *ngIf="showLabel"
        [label]="labelText"
        [offset]="labelOffset"
        [orient]="orientation.Bottom"
        [height]="dims.height"
        [width]="dims.width"
      ></svg:g>
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    xScale: [{
      type: Input
    }],
    dims: [{
      type: Input
    }],
    trimTicks: [{
      type: Input
    }],
    rotateTicks: [{
      type: Input
    }],
    maxTickLength: [{
      type: Input
    }],
    tickFormatting: [{
      type: Input
    }],
    showGridLines: [{
      type: Input
    }],
    showLabel: [{
      type: Input
    }],
    labelText: [{
      type: Input
    }],
    ticks: [{
      type: Input
    }],
    xAxisTickCount: [{
      type: Input
    }],
    xOrient: [{
      type: Input
    }],
    xAxisOffset: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    dimensionsChanged: [{
      type: Output
    }],
    ticksComponent: [{
      type: ViewChild,
      args: [XAxisTicksComponent]
    }]
  });
})();
function roundedRect(x2, y2, w, h, r, [tl, tr, bl, br]) {
  let retval = "";
  w = Math.floor(w);
  h = Math.floor(h);
  w = w === 0 ? 1 : w;
  h = h === 0 ? 1 : h;
  retval = `M${[x2 + r, y2]}`;
  retval += `h${w - 2 * r}`;
  if (tr) {
    retval += `a${[r, r]} 0 0 1 ${[r, r]}`;
  } else {
    retval += `h${r}v${r}`;
  }
  retval += `v${h - 2 * r}`;
  if (br) {
    retval += `a${[r, r]} 0 0 1 ${[-r, r]}`;
  } else {
    retval += `v${r}h${-r}`;
  }
  retval += `h${2 * r - w}`;
  if (bl) {
    retval += `a${[r, r]} 0 0 1 ${[-r, -r]}`;
  } else {
    retval += `h${-r}v${-r}`;
  }
  retval += `v${2 * r - h}`;
  if (tl) {
    retval += `a${[r, r]} 0 0 1 ${[r, -r]}`;
  } else {
    retval += `v${-r}h${r}`;
  }
  retval += `z`;
  return retval;
}
var YAxisTicksComponent = class {
  constructor(platformId) {
    this.platformId = platformId;
    this.tickArguments = [5];
    this.tickStroke = "#ccc";
    this.trimTicks = true;
    this.maxTickLength = 16;
    this.showGridLines = false;
    this.showRefLabels = false;
    this.showRefLines = false;
    this.wrapTicks = false;
    this.dimensionsChanged = new EventEmitter();
    this.innerTickSize = 6;
    this.tickPadding = 3;
    this.verticalSpacing = 20;
    this.textAnchor = TextAnchor.Middle;
    this.width = 0;
    this.outerTickSize = 6;
    this.rotateLabels = false;
    this.referenceLineLength = 0;
    this.Orientation = Orientation;
  }
  ngOnChanges(changes) {
    this.update();
  }
  ngAfterViewInit() {
    setTimeout(() => this.updateDims());
  }
  updateDims() {
    if (!isPlatformBrowser(this.platformId)) {
      this.width = this.getApproximateAxisWidth();
      this.dimensionsChanged.emit({
        width: this.width
      });
      return;
    }
    const width = parseInt(this.ticksElement.nativeElement.getBoundingClientRect().width, 10);
    if (width !== this.width) {
      this.width = width;
      this.dimensionsChanged.emit({
        width
      });
      setTimeout(() => this.updateDims());
    }
  }
  update() {
    const scale = this.scale;
    const sign2 = this.orient === Orientation.Top || this.orient === Orientation.Right ? -1 : 1;
    this.tickSpacing = Math.max(this.innerTickSize, 0) + this.tickPadding;
    this.ticks = this.getTicks();
    if (this.tickFormatting) {
      this.tickFormat = this.tickFormatting;
    } else if (scale.tickFormat) {
      this.tickFormat = scale.tickFormat.apply(scale, this.tickArguments);
    } else {
      this.tickFormat = function(d) {
        if (d.constructor.name === "Date") {
          return d.toLocaleDateString();
        }
        return d.toLocaleString();
      };
    }
    this.adjustedScale = scale.bandwidth ? (d) => {
      const positionMiddle = scale(d) + scale.bandwidth() * 0.5;
      if (this.wrapTicks && d.toString().length > this.maxTickLength) {
        const chunksLength = this.tickChunks(d).length;
        if (chunksLength === 1) {
          return positionMiddle;
        }
        const bandWidth = scale.bandwidth();
        const heightOfLines = chunksLength * 8;
        const availableFreeSpace = bandWidth * 0.5 - heightOfLines * 0.5;
        return scale(d) + availableFreeSpace;
      }
      return positionMiddle;
    } : scale;
    if (this.showRefLines && this.referenceLines) {
      this.setReferencelines();
    }
    switch (this.orient) {
      case Orientation.Top:
        this.transform = function(tick) {
          return "translate(" + this.adjustedScale(tick) + ",0)";
        };
        this.textAnchor = TextAnchor.Middle;
        this.y2 = this.innerTickSize * sign2;
        this.y1 = this.tickSpacing * sign2;
        this.dy = sign2 < 0 ? "0em" : ".71em";
        break;
      case Orientation.Bottom:
        this.transform = function(tick) {
          return "translate(" + this.adjustedScale(tick) + ",0)";
        };
        this.textAnchor = TextAnchor.Middle;
        this.y2 = this.innerTickSize * sign2;
        this.y1 = this.tickSpacing * sign2;
        this.dy = sign2 < 0 ? "0em" : ".71em";
        break;
      case Orientation.Left:
        this.transform = function(tick) {
          return "translate(0," + this.adjustedScale(tick) + ")";
        };
        this.textAnchor = TextAnchor.End;
        this.x2 = this.innerTickSize * -sign2;
        this.x1 = this.tickSpacing * -sign2;
        this.dy = ".32em";
        break;
      case Orientation.Right:
        this.transform = function(tick) {
          return "translate(0," + this.adjustedScale(tick) + ")";
        };
        this.textAnchor = TextAnchor.Start;
        this.x2 = this.innerTickSize * -sign2;
        this.x1 = this.tickSpacing * -sign2;
        this.dy = ".32em";
        break;
      default:
    }
    setTimeout(() => this.updateDims());
  }
  setReferencelines() {
    this.refMin = this.adjustedScale(Math.min.apply(null, this.referenceLines.map((item) => item.value)));
    this.refMax = this.adjustedScale(Math.max.apply(null, this.referenceLines.map((item) => item.value)));
    this.referenceLineLength = this.referenceLines.length;
    this.referenceAreaPath = roundedRect(0, this.refMax, this.gridLineWidth, this.refMin - this.refMax, 0, [false, false, false, false]);
  }
  getTicks() {
    let ticks;
    const maxTicks = this.getMaxTicks(20);
    const maxScaleTicks = this.getMaxTicks(50);
    if (this.tickValues) {
      ticks = this.tickValues;
    } else if (this.scale.ticks) {
      ticks = this.scale.ticks.apply(this.scale, [maxScaleTicks]);
    } else {
      ticks = this.scale.domain();
      ticks = reduceTicks(ticks, maxTicks);
    }
    return ticks;
  }
  getMaxTicks(tickHeight) {
    return Math.floor(this.height / tickHeight);
  }
  tickTransform(tick) {
    return `translate(${this.adjustedScale(tick)},${this.verticalSpacing})`;
  }
  gridLineTransform() {
    return `translate(5,0)`;
  }
  tickTrim(label) {
    return this.trimTicks ? trimLabel(label, this.maxTickLength) : label;
  }
  getApproximateAxisWidth() {
    const maxChars = Math.max(...this.ticks.map((t) => this.tickTrim(this.tickFormat(t)).length));
    const charWidth = 7;
    return maxChars * charWidth;
  }
  tickChunks(label) {
    if (label.toString().length > this.maxTickLength && this.scale.bandwidth) {
      const preferredWidth = this.maxTickLength;
      const maxLines = Math.floor(this.scale.bandwidth() / 15);
      if (maxLines <= 1) {
        return [this.tickTrim(label)];
      }
      return getTickLines(label, preferredWidth, Math.min(maxLines, 5));
    }
    return [this.tickFormat(label)];
  }
};
YAxisTicksComponent.ɵfac = function YAxisTicksComponent_Factory(t) {
  return new (t || YAxisTicksComponent)(ɵɵdirectiveInject(PLATFORM_ID));
};
YAxisTicksComponent.ɵcmp = ɵɵdefineComponent({
  type: YAxisTicksComponent,
  selectors: [["g", "ngx-charts-y-axis-ticks", ""]],
  viewQuery: function YAxisTicksComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ticksElement = _t.first);
    }
  },
  inputs: {
    scale: "scale",
    orient: "orient",
    tickArguments: "tickArguments",
    tickValues: "tickValues",
    tickStroke: "tickStroke",
    trimTicks: "trimTicks",
    maxTickLength: "maxTickLength",
    tickFormatting: "tickFormatting",
    showGridLines: "showGridLines",
    gridLineWidth: "gridLineWidth",
    height: "height",
    referenceLines: "referenceLines",
    showRefLabels: "showRefLabels",
    showRefLines: "showRefLines",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    dimensionsChanged: "dimensionsChanged"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c7,
  decls: 6,
  vars: 4,
  consts: [["ticksel", ""], ["tmplMultilineTick", ""], ["tmplSinglelineTick", ""], ["class", "tick", 4, "ngFor", "ngForOf"], ["class", "reference-area", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "tick"], [4, "ngIf"], ["stroke-width", "0.01"], [4, "ngIf", "ngIfThen", "ngIfElse"], [4, "ngIf", "ngIfElse"], ["x", "0", 4, "ngFor", "ngForOf"], ["x", "0"], [1, "reference-area"], ["class", "gridline-path gridline-path-horizontal", "x1", "0", 4, "ngIf"], ["x1", "0", 1, "gridline-path", "gridline-path-horizontal"], ["x1", "0", 1, "refline-path", "gridline-path-horizontal"], [1, "refline-label"]],
  template: function YAxisTicksComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "g", null, 0);
      ɵɵtemplate(2, YAxisTicksComponent__svg_g_2_Template, 2, 2, "g", 3);
      ɵɵelementEnd();
      ɵɵtemplate(3, YAxisTicksComponent__svg_path_3_Template, 1, 2, "path", 4)(4, YAxisTicksComponent__svg_g_4_Template, 2, 2, "g", 5)(5, YAxisTicksComponent__svg_g_5_Template, 2, 1, "g", 5);
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.ticks);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.referenceLineLength > 1 && ctx.refMax && ctx.refMin && ctx.showRefLines);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.ticks);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.referenceLines);
    }
  },
  dependencies: [NgForOf, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YAxisTicksComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-y-axis-ticks]",
      template: `
    <svg:g #ticksel>
      <svg:g *ngFor="let tick of ticks" class="tick" [attr.transform]="transform(tick)">
        <ng-container *ngIf="tickFormat(tick) as tickFormatted">
          <title>{{ tickFormatted }}</title>
          <svg:text
            stroke-width="0.01"
            [attr.dy]="dy"
            [attr.x]="x1"
            [attr.y]="y1"
            [attr.text-anchor]="textAnchor"
            [style.font-size]="'12px'"
          >
            <ng-container *ngIf="wrapTicks; then tmplMultilineTick; else tmplSinglelineTick"></ng-container>
          </svg:text>

          <ng-template #tmplMultilineTick>
            <ng-container *ngIf="tickChunks(tick) as tickLines">
              <ng-container *ngIf="tickLines.length > 1; else tmplSinglelineTick">
                <svg:tspan *ngFor="let tickLine of tickLines; let i = index" x="0" [attr.y]="i * (8 + tickSpacing)">
                  {{ tickLine }}
                </svg:tspan>
              </ng-container>
            </ng-container>
          </ng-template>

          <ng-template #tmplSinglelineTick>
            {{ tickTrim(tickFormatted) }}
          </ng-template>
        </ng-container>
      </svg:g>
    </svg:g>

    <svg:path
      *ngIf="referenceLineLength > 1 && refMax && refMin && showRefLines"
      class="reference-area"
      [attr.d]="referenceAreaPath"
      [attr.transform]="gridLineTransform()"
    />
    <svg:g *ngFor="let tick of ticks" [attr.transform]="transform(tick)">
      <svg:g *ngIf="showGridLines" [attr.transform]="gridLineTransform()">
        <svg:line
          *ngIf="orient === Orientation.Left"
          class="gridline-path gridline-path-horizontal"
          x1="0"
          [attr.x2]="gridLineWidth"
        />
        <svg:line
          *ngIf="orient === Orientation.Right"
          class="gridline-path gridline-path-horizontal"
          x1="0"
          [attr.x2]="-gridLineWidth"
        />
      </svg:g>
    </svg:g>

    <svg:g *ngFor="let refLine of referenceLines">
      <svg:g *ngIf="showRefLines" [attr.transform]="transform(refLine.value)">
        <svg:line
          class="refline-path gridline-path-horizontal"
          x1="0"
          [attr.x2]="gridLineWidth"
          [attr.transform]="gridLineTransform()"
        />
        <svg:g *ngIf="showRefLabels">
          <title>{{ tickTrim(tickFormat(refLine.value)) }}</title>
          <svg:text
            class="refline-label"
            [attr.dy]="dy"
            [attr.y]="-6"
            [attr.x]="gridLineWidth"
            [attr.text-anchor]="textAnchor"
          >
            {{ refLine.name }}
          </svg:text>
        </svg:g>
      </svg:g>
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    scale: [{
      type: Input
    }],
    orient: [{
      type: Input
    }],
    tickArguments: [{
      type: Input
    }],
    tickValues: [{
      type: Input
    }],
    tickStroke: [{
      type: Input
    }],
    trimTicks: [{
      type: Input
    }],
    maxTickLength: [{
      type: Input
    }],
    tickFormatting: [{
      type: Input
    }],
    showGridLines: [{
      type: Input
    }],
    gridLineWidth: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    referenceLines: [{
      type: Input
    }],
    showRefLabels: [{
      type: Input
    }],
    showRefLines: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    dimensionsChanged: [{
      type: Output
    }],
    ticksElement: [{
      type: ViewChild,
      args: ["ticksel"]
    }]
  });
})();
var YAxisComponent = class {
  constructor() {
    this.showGridLines = false;
    this.yOrient = Orientation.Left;
    this.yAxisOffset = 0;
    this.wrapTicks = false;
    this.dimensionsChanged = new EventEmitter();
    this.yAxisClassName = "y axis";
    this.labelOffset = 15;
    this.fill = "none";
    this.stroke = "#CCC";
    this.tickStroke = "#CCC";
    this.strokeWidth = 1;
    this.padding = 5;
  }
  ngOnChanges(changes) {
    this.update();
  }
  update() {
    this.offset = -(this.yAxisOffset + this.padding);
    if (this.yOrient === Orientation.Right) {
      this.labelOffset = 65;
      this.transform = `translate(${this.offset + this.dims.width} , 0)`;
    } else {
      this.transform = `translate(${this.offset} , 0)`;
    }
    if (this.yAxisTickCount !== void 0) {
      this.tickArguments = [this.yAxisTickCount];
    }
  }
  emitTicksWidth({
    width
  }) {
    if (width !== this.labelOffset && this.yOrient === Orientation.Right) {
      this.labelOffset = width + this.labelOffset;
      setTimeout(() => {
        this.dimensionsChanged.emit({
          width
        });
      }, 0);
    } else if (width !== this.labelOffset) {
      this.labelOffset = width;
      setTimeout(() => {
        this.dimensionsChanged.emit({
          width
        });
      }, 0);
    }
  }
};
YAxisComponent.ɵfac = function YAxisComponent_Factory(t) {
  return new (t || YAxisComponent)();
};
YAxisComponent.ɵcmp = ɵɵdefineComponent({
  type: YAxisComponent,
  selectors: [["g", "ngx-charts-y-axis", ""]],
  viewQuery: function YAxisComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(YAxisTicksComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ticksComponent = _t.first);
    }
  },
  inputs: {
    yScale: "yScale",
    dims: "dims",
    trimTicks: "trimTicks",
    maxTickLength: "maxTickLength",
    tickFormatting: "tickFormatting",
    ticks: "ticks",
    showGridLines: "showGridLines",
    showLabel: "showLabel",
    labelText: "labelText",
    yAxisTickCount: "yAxisTickCount",
    yOrient: "yOrient",
    referenceLines: "referenceLines",
    showRefLines: "showRefLines",
    showRefLabels: "showRefLabels",
    yAxisOffset: "yAxisOffset",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    dimensionsChanged: "dimensionsChanged"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c8,
  decls: 3,
  vars: 4,
  consts: [["ngx-charts-y-axis-ticks", "", 3, "trimTicks", "maxTickLength", "tickFormatting", "tickArguments", "tickValues", "tickStroke", "scale", "orient", "showGridLines", "gridLineWidth", "referenceLines", "showRefLines", "showRefLabels", "height", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width", 4, "ngIf"], ["ngx-charts-y-axis-ticks", "", 3, "dimensionsChanged", "trimTicks", "maxTickLength", "tickFormatting", "tickArguments", "tickValues", "tickStroke", "scale", "orient", "showGridLines", "gridLineWidth", "referenceLines", "showRefLines", "showRefLabels", "height", "wrapTicks"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width"]],
  template: function YAxisComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "g");
      ɵɵtemplate(1, YAxisComponent__svg_g_1_Template, 1, 15, "g", 0)(2, YAxisComponent__svg_g_2_Template, 1, 5, "g", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵattribute("class", ctx.yAxisClassName)("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.yScale);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showLabel);
    }
  },
  dependencies: [YAxisTicksComponent, AxisLabelComponent, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YAxisComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-y-axis]",
      template: `
    <svg:g [attr.class]="yAxisClassName" [attr.transform]="transform">
      <svg:g
        ngx-charts-y-axis-ticks
        *ngIf="yScale"
        [trimTicks]="trimTicks"
        [maxTickLength]="maxTickLength"
        [tickFormatting]="tickFormatting"
        [tickArguments]="tickArguments"
        [tickValues]="ticks"
        [tickStroke]="tickStroke"
        [scale]="yScale"
        [orient]="yOrient"
        [showGridLines]="showGridLines"
        [gridLineWidth]="dims.width"
        [referenceLines]="referenceLines"
        [showRefLines]="showRefLines"
        [showRefLabels]="showRefLabels"
        [height]="dims.height"
        [wrapTicks]="wrapTicks"
        (dimensionsChanged)="emitTicksWidth($event)"
      />

      <svg:g
        ngx-charts-axis-label
        *ngIf="showLabel"
        [label]="labelText"
        [offset]="labelOffset"
        [orient]="yOrient"
        [height]="dims.height"
        [width]="dims.width"
      ></svg:g>
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    yScale: [{
      type: Input
    }],
    dims: [{
      type: Input
    }],
    trimTicks: [{
      type: Input
    }],
    maxTickLength: [{
      type: Input
    }],
    tickFormatting: [{
      type: Input
    }],
    ticks: [{
      type: Input
    }],
    showGridLines: [{
      type: Input
    }],
    showLabel: [{
      type: Input
    }],
    labelText: [{
      type: Input
    }],
    yAxisTickCount: [{
      type: Input
    }],
    yOrient: [{
      type: Input
    }],
    referenceLines: [{
      type: Input
    }],
    showRefLines: [{
      type: Input
    }],
    showRefLabels: [{
      type: Input
    }],
    yAxisOffset: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    dimensionsChanged: [{
      type: Output
    }],
    ticksComponent: [{
      type: ViewChild,
      args: [YAxisTicksComponent]
    }]
  });
})();
var AxesModule = class {
};
AxesModule.ɵfac = function AxesModule_Factory(t) {
  return new (t || AxesModule)();
};
AxesModule.ɵmod = ɵɵdefineNgModule({
  type: AxesModule,
  declarations: [AxisLabelComponent, XAxisComponent, XAxisTicksComponent, YAxisComponent, YAxisTicksComponent],
  imports: [CommonModule],
  exports: [AxisLabelComponent, XAxisComponent, XAxisTicksComponent, YAxisComponent, YAxisTicksComponent]
});
AxesModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AxesModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [AxisLabelComponent, XAxisComponent, XAxisTicksComponent, YAxisComponent, YAxisTicksComponent],
      exports: [AxisLabelComponent, XAxisComponent, XAxisTicksComponent, YAxisComponent, YAxisTicksComponent]
    }]
  }], null, null);
})();
var StyleTypes;
(function(StyleTypes2) {
  StyleTypes2["popover"] = "popover";
  StyleTypes2["tooltip"] = "tooltip";
})(StyleTypes || (StyleTypes = {}));
var ShowTypes;
(function(ShowTypes2) {
  ShowTypes2[ShowTypes2["all"] = "all"] = "all";
  ShowTypes2[ShowTypes2["focus"] = "focus"] = "focus";
  ShowTypes2[ShowTypes2["mouseover"] = "mouseover"] = "mouseover";
})(ShowTypes || (ShowTypes = {}));
var TooltipDirective = class {
  constructor(tooltipService, viewContainerRef, renderer) {
    this.tooltipService = tooltipService;
    this.viewContainerRef = viewContainerRef;
    this.renderer = renderer;
    this.tooltipCssClass = "";
    this.tooltipAppendToBody = true;
    this.tooltipSpacing = 10;
    this.tooltipDisabled = false;
    this.tooltipShowCaret = true;
    this.tooltipPlacement = PlacementTypes.Top;
    this.tooltipAlignment = PlacementTypes.Center;
    this.tooltipType = StyleTypes.popover;
    this.tooltipCloseOnClickOutside = true;
    this.tooltipCloseOnMouseLeave = true;
    this.tooltipHideTimeout = 300;
    this.tooltipShowTimeout = 100;
    this.tooltipShowEvent = ShowTypes.all;
    this.tooltipImmediateExit = false;
    this.show = new EventEmitter();
    this.hide = new EventEmitter();
  }
  get listensForFocus() {
    return this.tooltipShowEvent === ShowTypes.all || this.tooltipShowEvent === ShowTypes.focus;
  }
  get listensForHover() {
    return this.tooltipShowEvent === ShowTypes.all || this.tooltipShowEvent === ShowTypes.mouseover;
  }
  ngOnDestroy() {
    this.hideTooltip(true);
  }
  onFocus() {
    if (this.listensForFocus) {
      this.showTooltip();
    }
  }
  onBlur() {
    if (this.listensForFocus) {
      this.hideTooltip(true);
    }
  }
  onMouseEnter() {
    if (this.listensForHover) {
      this.showTooltip();
    }
  }
  onMouseLeave(target) {
    if (this.listensForHover && this.tooltipCloseOnMouseLeave) {
      clearTimeout(this.timeout);
      if (this.component) {
        const contentDom = this.component.instance.element.nativeElement;
        const contains = contentDom.contains(target);
        if (contains) return;
      }
      this.hideTooltip(this.tooltipImmediateExit);
    }
  }
  onMouseClick() {
    if (this.listensForHover) {
      this.hideTooltip(true);
    }
  }
  showTooltip(immediate) {
    if (this.component || this.tooltipDisabled) return;
    const time2 = immediate ? 0 : this.tooltipShowTimeout + (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? 400 : 0);
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.tooltipService.destroyAll();
      const options = this.createBoundOptions();
      this.component = this.tooltipService.create(options);
      setTimeout(() => {
        if (this.component) {
          this.addHideListeners(this.component.instance.element.nativeElement);
        }
      }, 10);
      this.show.emit(true);
    }, time2);
  }
  addHideListeners(tooltip) {
    this.mouseEnterContentEvent = this.renderer.listen(tooltip, "mouseenter", () => {
      clearTimeout(this.timeout);
    });
    if (this.tooltipCloseOnMouseLeave) {
      this.mouseLeaveContentEvent = this.renderer.listen(tooltip, "mouseleave", () => {
        this.hideTooltip(this.tooltipImmediateExit);
      });
    }
    if (this.tooltipCloseOnClickOutside) {
      this.documentClickEvent = this.renderer.listen("window", "click", (event) => {
        const contains = tooltip.contains(event.target);
        if (!contains) this.hideTooltip();
      });
    }
  }
  hideTooltip(immediate = false) {
    if (!this.component) return;
    const destroyFn = () => {
      if (this.mouseLeaveContentEvent) this.mouseLeaveContentEvent();
      if (this.mouseEnterContentEvent) this.mouseEnterContentEvent();
      if (this.documentClickEvent) this.documentClickEvent();
      this.hide.emit(true);
      this.tooltipService.destroy(this.component);
      this.component = void 0;
    };
    clearTimeout(this.timeout);
    if (!immediate) {
      this.timeout = setTimeout(destroyFn, this.tooltipHideTimeout);
    } else {
      destroyFn();
    }
  }
  createBoundOptions() {
    return {
      title: this.tooltipTitle,
      template: this.tooltipTemplate,
      host: this.viewContainerRef.element,
      placement: this.tooltipPlacement,
      alignment: this.tooltipAlignment,
      type: this.tooltipType,
      showCaret: this.tooltipShowCaret,
      cssClass: this.tooltipCssClass,
      spacing: this.tooltipSpacing,
      context: this.tooltipContext
    };
  }
};
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) {
  return new (t || TooltipDirective)(ɵɵdirectiveInject(TooltipService), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Renderer2));
};
TooltipDirective.ɵdir = ɵɵdefineDirective({
  type: TooltipDirective,
  selectors: [["", "ngx-tooltip", ""]],
  hostBindings: function TooltipDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focusin", function TooltipDirective_focusin_HostBindingHandler() {
        return ctx.onFocus();
      })("blur", function TooltipDirective_blur_HostBindingHandler() {
        return ctx.onBlur();
      })("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler($event) {
        return ctx.onMouseLeave($event.target);
      })("click", function TooltipDirective_click_HostBindingHandler() {
        return ctx.onMouseClick();
      });
    }
  },
  inputs: {
    tooltipCssClass: "tooltipCssClass",
    tooltipTitle: "tooltipTitle",
    tooltipAppendToBody: "tooltipAppendToBody",
    tooltipSpacing: "tooltipSpacing",
    tooltipDisabled: "tooltipDisabled",
    tooltipShowCaret: "tooltipShowCaret",
    tooltipPlacement: "tooltipPlacement",
    tooltipAlignment: "tooltipAlignment",
    tooltipType: "tooltipType",
    tooltipCloseOnClickOutside: "tooltipCloseOnClickOutside",
    tooltipCloseOnMouseLeave: "tooltipCloseOnMouseLeave",
    tooltipHideTimeout: "tooltipHideTimeout",
    tooltipShowTimeout: "tooltipShowTimeout",
    tooltipTemplate: "tooltipTemplate",
    tooltipShowEvent: "tooltipShowEvent",
    tooltipContext: "tooltipContext",
    tooltipImmediateExit: "tooltipImmediateExit"
  },
  outputs: {
    show: "show",
    hide: "hide"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipDirective, [{
    type: Directive,
    args: [{
      selector: "[ngx-tooltip]"
    }]
  }], function() {
    return [{
      type: TooltipService
    }, {
      type: ViewContainerRef
    }, {
      type: Renderer2
    }];
  }, {
    tooltipCssClass: [{
      type: Input
    }],
    tooltipTitle: [{
      type: Input
    }],
    tooltipAppendToBody: [{
      type: Input
    }],
    tooltipSpacing: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    tooltipShowCaret: [{
      type: Input
    }],
    tooltipPlacement: [{
      type: Input
    }],
    tooltipAlignment: [{
      type: Input
    }],
    tooltipType: [{
      type: Input
    }],
    tooltipCloseOnClickOutside: [{
      type: Input
    }],
    tooltipCloseOnMouseLeave: [{
      type: Input
    }],
    tooltipHideTimeout: [{
      type: Input
    }],
    tooltipShowTimeout: [{
      type: Input
    }],
    tooltipTemplate: [{
      type: Input
    }],
    tooltipShowEvent: [{
      type: Input
    }],
    tooltipContext: [{
      type: Input
    }],
    tooltipImmediateExit: [{
      type: Input
    }],
    show: [{
      type: Output
    }],
    hide: [{
      type: Output
    }],
    onFocus: [{
      type: HostListener,
      args: ["focusin"]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    onMouseEnter: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    onMouseLeave: [{
      type: HostListener,
      args: ["mouseleave", ["$event.target"]]
    }],
    onMouseClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var TooltipModule = class {
};
TooltipModule.ɵfac = function TooltipModule_Factory(t) {
  return new (t || TooltipModule)();
};
TooltipModule.ɵmod = ɵɵdefineNgModule({
  type: TooltipModule,
  declarations: [TooltipContentComponent, TooltipDirective],
  imports: [CommonModule],
  exports: [TooltipContentComponent, TooltipDirective]
});
TooltipModule.ɵinj = ɵɵdefineInjector({
  providers: [InjectionService, TooltipService],
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      declarations: [TooltipContentComponent, TooltipDirective],
      providers: [InjectionService, TooltipService],
      exports: [TooltipContentComponent, TooltipDirective],
      imports: [CommonModule],
      entryComponents: [TooltipContentComponent]
    }]
  }], null, null);
})();
var cache = {};
function id() {
  let newId = ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
  newId = `a${newId}`;
  if (!cache[newId]) {
    cache[newId] = true;
    return newId;
  }
  return id();
}
var BarOrientation;
(function(BarOrientation2) {
  BarOrientation2["Vertical"] = "vertical";
  BarOrientation2["Horizontal"] = "horizontal";
})(BarOrientation || (BarOrientation = {}));
var SvgLinearGradientComponent = class {
  constructor() {
    this.orientation = BarOrientation.Vertical;
  }
  ngOnChanges(changes) {
    this.x1 = "0%";
    this.x2 = "0%";
    this.y1 = "0%";
    this.y2 = "0%";
    if (this.orientation === BarOrientation.Horizontal) {
      this.x2 = "100%";
    } else if (this.orientation === BarOrientation.Vertical) {
      this.y1 = "100%";
    }
  }
};
SvgLinearGradientComponent.ɵfac = function SvgLinearGradientComponent_Factory(t) {
  return new (t || SvgLinearGradientComponent)();
};
SvgLinearGradientComponent.ɵcmp = ɵɵdefineComponent({
  type: SvgLinearGradientComponent,
  selectors: [["g", "ngx-charts-svg-linear-gradient", ""]],
  inputs: {
    orientation: "orientation",
    name: "name",
    stops: "stops"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c9,
  decls: 2,
  vars: 6,
  consts: [[3, "id"], [3, "stop-color", "stop-opacity", 4, "ngFor", "ngForOf"]],
  template: function SvgLinearGradientComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "linearGradient", 0);
      ɵɵtemplate(1, SvgLinearGradientComponent__svg_stop_1_Template, 1, 5, "stop", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("id", ctx.name);
      ɵɵattribute("x1", ctx.x1)("y1", ctx.y1)("x2", ctx.x2)("y2", ctx.y2);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.stops);
    }
  },
  dependencies: [NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SvgLinearGradientComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-svg-linear-gradient]",
      template: `
    <svg:linearGradient [id]="name" [attr.x1]="x1" [attr.y1]="y1" [attr.x2]="x2" [attr.y2]="y2">
      <svg:stop
        *ngFor="let stop of stops"
        [attr.offset]="stop.offset + '%'"
        [style.stop-color]="stop.color"
        [style.stop-opacity]="stop.opacity"
      />
    </svg:linearGradient>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    orientation: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    stops: [{
      type: Input
    }]
  });
})();
var CircleComponent = class {
  constructor() {
    this.select = new EventEmitter();
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
  }
  onClick() {
    this.select.emit(this.data);
  }
  onMouseEnter() {
    this.activate.emit(this.data);
  }
  onMouseLeave() {
    this.deactivate.emit(this.data);
  }
  ngOnChanges(changes) {
    this.classNames = Array.isArray(this.classNames) ? this.classNames.join(" ") : "";
    this.classNames += "circle";
  }
};
CircleComponent.ɵfac = function CircleComponent_Factory(t) {
  return new (t || CircleComponent)();
};
CircleComponent.ɵcmp = ɵɵdefineComponent({
  type: CircleComponent,
  selectors: [["g", "ngx-charts-circle", ""]],
  hostBindings: function CircleComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function CircleComponent_click_HostBindingHandler() {
        return ctx.onClick();
      })("mouseenter", function CircleComponent_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function CircleComponent_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
  },
  inputs: {
    cx: "cx",
    cy: "cy",
    r: "r",
    fill: "fill",
    stroke: "stroke",
    data: "data",
    classNames: "classNames",
    circleOpacity: "circleOpacity",
    pointerEvents: "pointerEvents"
  },
  outputs: {
    select: "select",
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c10,
  decls: 1,
  vars: 8,
  template: function CircleComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelement(0, "circle");
    }
    if (rf & 2) {
      ɵɵattribute("cx", ctx.cx)("cy", ctx.cy)("r", ctx.r)("fill", ctx.fill)("stroke", ctx.stroke)("opacity", ctx.circleOpacity)("class", ctx.classNames)("pointer-events", ctx.pointerEvents);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircleComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-circle]",
      template: `
    <svg:circle
      [attr.cx]="cx"
      [attr.cy]="cy"
      [attr.r]="r"
      [attr.fill]="fill"
      [attr.stroke]="stroke"
      [attr.opacity]="circleOpacity"
      [attr.class]="classNames"
      [attr.pointer-events]="pointerEvents"
    />
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    cx: [{
      type: Input
    }],
    cy: [{
      type: Input
    }],
    r: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    stroke: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    classNames: [{
      type: Input
    }],
    circleOpacity: [{
      type: Input
    }],
    pointerEvents: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }],
    onMouseEnter: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    onMouseLeave: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  });
})();
var SeriesType;
(function(SeriesType2) {
  SeriesType2["Standard"] = "standard";
  SeriesType2["Stacked"] = "stacked";
})(SeriesType || (SeriesType = {}));
var CircleSeriesComponent = class {
  constructor(platformId) {
    this.platformId = platformId;
    this.type = SeriesType.Standard;
    this.tooltipDisabled = false;
    this.select = new EventEmitter();
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.barVisible = false;
    this.barOrientation = BarOrientation;
    this.placementTypes = PlacementTypes;
    this.styleTypes = StyleTypes;
    this.isSSR = false;
  }
  ngOnInit() {
    this.gradientId = "grad" + id().toString();
    this.gradientFill = `url(#${this.gradientId})`;
    if (isPlatformServer(this.platformId)) {
      this.isSSR = true;
    }
  }
  ngOnChanges() {
    this.update();
  }
  update() {
    this.circle = this.getActiveCircle();
  }
  getActiveCircle() {
    const indexActiveDataPoint = this.data.series.findIndex((d) => {
      const label = d.name;
      return label && this.visibleValue && label.toString() === this.visibleValue.toString() && d.value !== void 0;
    });
    if (indexActiveDataPoint === -1) {
      return void 0;
    }
    return this.mapDataPointToCircle(this.data.series[indexActiveDataPoint], indexActiveDataPoint);
  }
  mapDataPointToCircle(d, i) {
    const seriesName = this.data.name;
    const value2 = d.value;
    const label = d.name;
    const tooltipLabel = formatLabel(label);
    let cx;
    if (this.scaleType === ScaleType.Time) {
      cx = this.xScale(label);
    } else if (this.scaleType === ScaleType.Linear) {
      cx = this.xScale(Number(label));
    } else {
      cx = this.xScale(label);
    }
    const cy = this.yScale(this.type === SeriesType.Standard ? value2 : d.d1);
    const radius = 5;
    const height = this.yScale.range()[0] - cy;
    const opacity = 1;
    let color;
    if (this.colors.scaleType === ScaleType.Linear) {
      if (this.type === SeriesType.Standard) {
        color = this.colors.getColor(value2);
      } else {
        color = this.colors.getColor(d.d1);
      }
    } else {
      color = this.colors.getColor(seriesName);
    }
    const data = Object.assign({}, d, {
      series: seriesName,
      value: value2,
      name: label
    });
    return {
      classNames: [`circle-data-${i}`],
      value: value2,
      label,
      data,
      cx,
      cy,
      radius,
      height,
      tooltipLabel,
      color,
      opacity,
      seriesName,
      gradientStops: this.getGradientStops(color),
      min: d.min,
      max: d.max
    };
  }
  getTooltipText({
    tooltipLabel,
    value: value2,
    seriesName,
    min: min4,
    max: max4
  }) {
    return `
      <span class="tooltip-label">${escapeLabel(seriesName)} • ${escapeLabel(tooltipLabel)}</span>
      <span class="tooltip-val">${value2.toLocaleString()}${this.getTooltipMinMaxText(min4, max4)}</span>
    `;
  }
  getTooltipMinMaxText(min4, max4) {
    if (min4 !== void 0 || max4 !== void 0) {
      let result = " (";
      if (min4 !== void 0) {
        if (max4 === void 0) {
          result += "≥";
        }
        result += min4.toLocaleString();
        if (max4 !== void 0) {
          result += " - ";
        }
      } else if (max4 !== void 0) {
        result += "≤";
      }
      if (max4 !== void 0) {
        result += max4.toLocaleString();
      }
      result += ")";
      return result;
    } else {
      return "";
    }
  }
  getGradientStops(color) {
    return [{
      offset: 0,
      color,
      opacity: 0.2
    }, {
      offset: 100,
      color,
      opacity: 1
    }];
  }
  onClick(data) {
    this.select.emit(data);
  }
  isActive(entry) {
    if (!this.activeEntries) return false;
    const item = this.activeEntries.find((d) => {
      return entry.name === d.name;
    });
    return item !== void 0;
  }
  activateCircle() {
    this.barVisible = true;
    this.activate.emit({
      name: this.data.name
    });
  }
  deactivateCircle() {
    this.barVisible = false;
    this.circle.opacity = 0;
    this.deactivate.emit({
      name: this.data.name
    });
  }
};
CircleSeriesComponent.ɵfac = function CircleSeriesComponent_Factory(t) {
  return new (t || CircleSeriesComponent)(ɵɵdirectiveInject(PLATFORM_ID));
};
CircleSeriesComponent.ɵcmp = ɵɵdefineComponent({
  type: CircleSeriesComponent,
  selectors: [["g", "ngx-charts-circle-series", ""]],
  inputs: {
    data: "data",
    type: "type",
    xScale: "xScale",
    yScale: "yScale",
    colors: "colors",
    scaleType: "scaleType",
    visibleValue: "visibleValue",
    activeEntries: "activeEntries",
    tooltipDisabled: "tooltipDisabled",
    tooltipTemplate: "tooltipTemplate"
  },
  outputs: {
    select: "select",
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c11,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], ["ngx-charts-svg-linear-gradient", "", 3, "orientation", "name", "stops"], ["class", "tooltip-bar", 4, "ngIf"], ["ngx-charts-circle", "", "ngx-tooltip", "", 1, "circle", 3, "select", "activate", "deactivate", "cx", "cy", "r", "fill", "pointerEvents", "data", "classNames", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext"], [1, "tooltip-bar"]],
  template: function CircleSeriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CircleSeriesComponent__svg_g_0_Template, 6, 22, "g", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.circle);
    }
  },
  dependencies: [SvgLinearGradientComponent, CircleComponent, NgIf, TooltipDirective],
  encapsulation: 2,
  data: {
    animation: [trigger("animationState", [transition(":enter", [style({
      opacity: 0
    }), animate(250, style({
      opacity: 1
    }))])])]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircleSeriesComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-circle-series]",
      template: `
    <svg:g *ngIf="circle">
      <defs>
        <svg:g
          ngx-charts-svg-linear-gradient
          [orientation]="barOrientation.Vertical"
          [name]="gradientId"
          [stops]="circle.gradientStops"
        />
      </defs>
      <svg:rect
        *ngIf="!isSSR && barVisible && type === 'standard'"
        [@animationState]="'active'"
        [attr.x]="circle.cx - circle.radius"
        [attr.y]="circle.cy"
        [attr.width]="circle.radius * 2"
        [attr.height]="circle.height"
        [attr.fill]="gradientFill"
        class="tooltip-bar"
      />
      <svg:rect
        *ngIf="isSSR && barVisible && type === 'standard'"
        [attr.x]="circle.cx - circle.radius"
        [attr.y]="circle.cy"
        [attr.width]="circle.radius * 2"
        [attr.height]="circle.height"
        [attr.fill]="gradientFill"
        class="tooltip-bar"
      />
      <svg:g
        ngx-charts-circle
        class="circle"
        [cx]="circle.cx"
        [cy]="circle.cy"
        [r]="circle.radius"
        [fill]="circle.color"
        [class.active]="isActive({ name: circle.seriesName })"
        [pointerEvents]="circle.value === 0 ? 'none' : 'all'"
        [data]="circle.value"
        [classNames]="circle.classNames"
        (select)="onClick(circle.data)"
        (activate)="activateCircle()"
        (deactivate)="deactivateCircle()"
        ngx-tooltip
        [tooltipDisabled]="tooltipDisabled"
        [tooltipPlacement]="placementTypes.Top"
        [tooltipType]="styleTypes.tooltip"
        [tooltipTitle]="tooltipTemplate ? undefined : getTooltipText(circle)"
        [tooltipTemplate]="tooltipTemplate"
        [tooltipContext]="circle.data"
      />
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("animationState", [transition(":enter", [style({
        opacity: 0
      }), animate(250, style({
        opacity: 1
      }))])])]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    data: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    xScale: [{
      type: Input
    }],
    yScale: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    scaleType: [{
      type: Input
    }],
    visibleValue: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    tooltipTemplate: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }]
  });
})();
var GridPanelComponent = class {
};
GridPanelComponent.ɵfac = function GridPanelComponent_Factory(t) {
  return new (t || GridPanelComponent)();
};
GridPanelComponent.ɵcmp = ɵɵdefineComponent({
  type: GridPanelComponent,
  selectors: [["g", "ngx-charts-grid-panel", ""]],
  inputs: {
    width: "width",
    height: "height",
    x: "x",
    y: "y"
  },
  attrs: _c13,
  decls: 1,
  vars: 4,
  consts: [["stroke", "none", 1, "gridpanel"]],
  template: function GridPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelement(0, "rect", 0);
    }
    if (rf & 2) {
      ɵɵattribute("height", ctx.height)("width", ctx.width)("x", ctx.x)("y", ctx.y);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridPanelComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-grid-panel]",
      template: `
    <svg:rect [attr.height]="height" [attr.width]="width" [attr.x]="x" [attr.y]="y" stroke="none" class="gridpanel" />
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    x: [{
      type: Input
    }],
    y: [{
      type: Input
    }]
  });
})();
var ClassEnum;
(function(ClassEnum2) {
  ClassEnum2["Odd"] = "odd";
  ClassEnum2["Even"] = "even";
})(ClassEnum || (ClassEnum = {}));
var GridPanelSeriesComponent = class {
  ngOnChanges(changes) {
    this.update();
  }
  update() {
    this.gridPanels = this.getGridPanels();
  }
  getGridPanels() {
    return this.data.map((d) => {
      let offset;
      let width;
      let height;
      let x2;
      let y2;
      let className = ClassEnum.Odd;
      if (this.orient === BarOrientation.Vertical) {
        const position = this.xScale(d.name);
        const positionIndex = Number.parseInt((position / this.xScale.step()).toString(), 10);
        if (positionIndex % 2 === 1) {
          className = ClassEnum.Even;
        }
        offset = this.xScale.bandwidth() * this.xScale.paddingInner();
        width = this.xScale.bandwidth() + offset;
        height = this.dims.height;
        x2 = this.xScale(d.name) - offset / 2;
        y2 = 0;
      } else if (this.orient === BarOrientation.Horizontal) {
        const position = this.yScale(d.name);
        const positionIndex = Number.parseInt((position / this.yScale.step()).toString(), 10);
        if (positionIndex % 2 === 1) {
          className = ClassEnum.Even;
        }
        offset = this.yScale.bandwidth() * this.yScale.paddingInner();
        width = this.dims.width;
        height = this.yScale.bandwidth() + offset;
        x2 = 0;
        y2 = this.yScale(d.name) - offset / 2;
      }
      return {
        name: d.name,
        class: className,
        height,
        width,
        x: x2,
        y: y2
      };
    });
  }
};
GridPanelSeriesComponent.ɵfac = function GridPanelSeriesComponent_Factory(t) {
  return new (t || GridPanelSeriesComponent)();
};
GridPanelSeriesComponent.ɵcmp = ɵɵdefineComponent({
  type: GridPanelSeriesComponent,
  selectors: [["g", "ngx-charts-grid-panel-series", ""]],
  inputs: {
    data: "data",
    dims: "dims",
    xScale: "xScale",
    yScale: "yScale",
    orient: "orient"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c14,
  decls: 1,
  vars: 1,
  consts: [["ngx-charts-grid-panel", "", 3, "height", "width", "x", "y", "grid-panel", "odd", "even", 4, "ngFor", "ngForOf"], ["ngx-charts-grid-panel", "", 3, "height", "width", "x", "y"]],
  template: function GridPanelSeriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, GridPanelSeriesComponent__svg_g_0_Template, 1, 10, "g", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.gridPanels);
    }
  },
  dependencies: [GridPanelComponent, NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridPanelSeriesComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-grid-panel-series]",
      template: `
    <svg:g
      ngx-charts-grid-panel
      *ngFor="let gridPanel of gridPanels"
      [height]="gridPanel.height"
      [width]="gridPanel.width"
      [x]="gridPanel.x"
      [y]="gridPanel.y"
      [class.grid-panel]="true"
      [class.odd]="gridPanel.class === 'odd'"
      [class.even]="gridPanel.class === 'even'"
    ></svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    data: [{
      type: Input
    }],
    dims: [{
      type: Input
    }],
    xScale: [{
      type: Input
    }],
    yScale: [{
      type: Input
    }],
    orient: [{
      type: Input
    }]
  });
})();
var SvgRadialGradientComponent = class {
  constructor() {
    this.endOpacity = 1;
    this.cx = 0;
    this.cy = 0;
  }
  get stops() {
    return this.stopsInput || this.stopsDefault;
  }
  set stops(value2) {
    this.stopsInput = value2;
  }
  ngOnChanges(changes) {
    this.r = "30%";
    if ("color" in changes || "startOpacity" in changes || "endOpacity" in changes) {
      this.stopsDefault = [{
        offset: 0,
        color: this.color,
        opacity: this.startOpacity
      }, {
        offset: 100,
        color: this.color,
        opacity: this.endOpacity
      }];
    }
  }
};
SvgRadialGradientComponent.ɵfac = function SvgRadialGradientComponent_Factory(t) {
  return new (t || SvgRadialGradientComponent)();
};
SvgRadialGradientComponent.ɵcmp = ɵɵdefineComponent({
  type: SvgRadialGradientComponent,
  selectors: [["g", "ngx-charts-svg-radial-gradient", ""]],
  inputs: {
    color: "color",
    name: "name",
    startOpacity: "startOpacity",
    endOpacity: "endOpacity",
    cx: "cx",
    cy: "cy",
    stops: "stops"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c15,
  decls: 2,
  vars: 5,
  consts: [["gradientUnits", "userSpaceOnUse", 3, "id"], [3, "stop-color", "stop-opacity", 4, "ngFor", "ngForOf"]],
  template: function SvgRadialGradientComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "radialGradient", 0);
      ɵɵtemplate(1, SvgRadialGradientComponent__svg_stop_1_Template, 1, 5, "stop", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("id", ctx.name);
      ɵɵattribute("cx", ctx.cx)("cy", ctx.cy)("r", ctx.r);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.stops);
    }
  },
  dependencies: [NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SvgRadialGradientComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-svg-radial-gradient]",
      template: `
    <svg:radialGradient [id]="name" [attr.cx]="cx" [attr.cy]="cy" [attr.r]="r" gradientUnits="userSpaceOnUse">
      <svg:stop
        *ngFor="let stop of stops"
        [attr.offset]="stop.offset + '%'"
        [style.stop-color]="stop.color"
        [style.stop-opacity]="stop.opacity"
      />
    </svg:radialGradient>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    color: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    startOpacity: [{
      type: Input
    }],
    endOpacity: [{
      type: Input
    }],
    cx: [{
      type: Input
    }],
    cy: [{
      type: Input
    }],
    stops: [{
      type: Input
    }]
  });
})();
var AreaComponent = class {
  constructor(element) {
    this.opacity = 1;
    this.startOpacity = 0.5;
    this.endOpacity = 1;
    this.gradient = false;
    this.animations = true;
    this.select = new EventEmitter();
    this.animationsLoaded = false;
    this.hasGradient = false;
    this.barOrientation = BarOrientation;
    this.element = element.nativeElement;
  }
  ngOnChanges() {
    this.update();
    if (!this.animationsLoaded) {
      this.loadAnimation();
      this.animationsLoaded = true;
    }
  }
  update() {
    this.gradientId = "grad" + id().toString();
    this.gradientFill = `url(#${this.gradientId})`;
    if (this.gradient || this.stops) {
      this.gradientStops = this.getGradient();
      this.hasGradient = true;
    } else {
      this.hasGradient = false;
    }
    this.updatePathEl();
  }
  loadAnimation() {
    this.areaPath = this.startingPath;
    setTimeout(this.updatePathEl.bind(this), 100);
  }
  updatePathEl() {
    const node = select_default(this.element).select(".area");
    if (this.animations) {
      node.transition().duration(750).attr("d", this.path);
    } else {
      node.attr("d", this.path);
    }
  }
  getGradient() {
    if (this.stops) {
      return this.stops;
    }
    return [{
      offset: 0,
      color: this.fill,
      opacity: this.startOpacity
    }, {
      offset: 100,
      color: this.fill,
      opacity: this.endOpacity
    }];
  }
};
AreaComponent.ɵfac = function AreaComponent_Factory(t) {
  return new (t || AreaComponent)(ɵɵdirectiveInject(ElementRef));
};
AreaComponent.ɵcmp = ɵɵdefineComponent({
  type: AreaComponent,
  selectors: [["g", "ngx-charts-area", ""]],
  inputs: {
    data: "data",
    path: "path",
    startingPath: "startingPath",
    fill: "fill",
    opacity: "opacity",
    startOpacity: "startOpacity",
    endOpacity: "endOpacity",
    gradient: "gradient",
    stops: "stops",
    animations: "animations"
  },
  outputs: {
    select: "select"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c16,
  decls: 2,
  vars: 5,
  consts: [[4, "ngIf"], [1, "area"], ["ngx-charts-svg-linear-gradient", "", 3, "orientation", "name", "stops"]],
  template: function AreaComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, AreaComponent__svg_defs_0_Template, 2, 3, "defs", 0);
      ɵɵnamespaceSVG();
      ɵɵelement(1, "path", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.gradient);
      ɵɵadvance();
      ɵɵstyleProp("opacity", ctx.opacity);
      ɵɵattribute("d", ctx.areaPath)("fill", ctx.gradient ? ctx.gradientFill : ctx.fill);
    }
  },
  dependencies: [SvgLinearGradientComponent, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AreaComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-area]",
      template: `
    <svg:defs *ngIf="gradient">
      <svg:g
        ngx-charts-svg-linear-gradient
        [orientation]="barOrientation.Vertical"
        [name]="gradientId"
        [stops]="gradientStops"
      />
    </svg:defs>
    <svg:path class="area" [attr.d]="areaPath" [attr.fill]="gradient ? gradientFill : fill" [style.opacity]="opacity" />
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    data: [{
      type: Input
    }],
    path: [{
      type: Input
    }],
    startingPath: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    startOpacity: [{
      type: Input
    }],
    endOpacity: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    stops: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    select: [{
      type: Output
    }]
  });
})();
function easeOutExpo(t, b, c, d) {
  return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
}
function count2(countFrom, countTo, countDecimals, countDuration, callback) {
  const startVal = Number(countFrom);
  const endVal = Number(countTo);
  const countDown = startVal > endVal;
  const decimals = Math.max(0, countDecimals);
  const dec = Math.pow(10, decimals);
  const duration = Number(countDuration) * 1e3;
  let startTime;
  function runCount(timestamp) {
    let frameVal;
    const progress = timestamp - startTime;
    if (countDown) {
      frameVal = startVal - easeOutExpo(progress, 0, startVal - endVal, duration);
    } else {
      frameVal = easeOutExpo(progress, startVal, endVal - startVal, duration);
    }
    if (countDown) {
      frameVal = frameVal < endVal ? endVal : frameVal;
    } else {
      frameVal = frameVal > endVal ? endVal : frameVal;
    }
    frameVal = Math.round(frameVal * dec) / dec;
    const tick = progress < duration;
    callback({
      value: frameVal,
      progress,
      timestamp,
      finished: !tick
    });
    if (tick) {
      return requestAnimationFrame((val) => runCount(val));
    }
  }
  return requestAnimationFrame((timestamp) => {
    startTime = timestamp;
    return runCount(timestamp);
  });
}
function decimalChecker(countTo) {
  const endVal = Number(countTo);
  if (endVal % 1 !== 0 && Math.abs(endVal) <= 10) {
    return 2;
  }
  return 0;
}
var CountUpDirective = class {
  constructor(cd, element) {
    this.cd = cd;
    this.countDuration = 1;
    this.countPrefix = "";
    this.countSuffix = "";
    this.countChange = new EventEmitter();
    this.countFinish = new EventEmitter();
    this.value = "";
    this._countDecimals = 0;
    this._countTo = 0;
    this._countFrom = 0;
    this.nativeElement = element.nativeElement;
  }
  set countDecimals(val) {
    this._countDecimals = val;
  }
  get countDecimals() {
    if (this._countDecimals) return this._countDecimals;
    return decimalChecker(this.countTo);
  }
  set countTo(val) {
    this._countTo = parseFloat(val);
    this.start();
  }
  get countTo() {
    return this._countTo;
  }
  set countFrom(val) {
    this._countFrom = parseFloat(val);
    this.start();
  }
  get countFrom() {
    return this._countFrom;
  }
  ngOnDestroy() {
    cancelAnimationFrame(this.animationReq);
  }
  start() {
    cancelAnimationFrame(this.animationReq);
    const valueFormatting = this.valueFormatting || ((value2) => `${this.countPrefix}${value2.toLocaleString()}${this.countSuffix}`);
    const callback = ({
      value: value2,
      progress,
      finished
    }) => {
      this.value = valueFormatting(value2);
      this.cd.markForCheck();
      if (!finished) this.countChange.emit({
        value: this.value,
        progress
      });
      if (finished) this.countFinish.emit({
        value: this.value,
        progress
      });
    };
    this.animationReq = count2(this.countFrom, this.countTo, this.countDecimals, this.countDuration, callback);
  }
};
CountUpDirective.ɵfac = function CountUpDirective_Factory(t) {
  return new (t || CountUpDirective)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef));
};
CountUpDirective.ɵcmp = ɵɵdefineComponent({
  type: CountUpDirective,
  selectors: [["", "ngx-charts-count-up", ""]],
  inputs: {
    countDuration: "countDuration",
    countPrefix: "countPrefix",
    countSuffix: "countSuffix",
    valueFormatting: "valueFormatting",
    countDecimals: "countDecimals",
    countTo: "countTo",
    countFrom: "countFrom"
  },
  outputs: {
    countChange: "countChange",
    countFinish: "countFinish"
  },
  attrs: _c17,
  decls: 1,
  vars: 1,
  template: function CountUpDirective_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtext(0);
    }
    if (rf & 2) {
      ɵɵtextInterpolate1(" ", ctx.value, " ");
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountUpDirective, [{
    type: Component,
    args: [{
      selector: "[ngx-charts-count-up]",
      template: ` {{ value }} `
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }];
  }, {
    countDuration: [{
      type: Input
    }],
    countPrefix: [{
      type: Input
    }],
    countSuffix: [{
      type: Input
    }],
    valueFormatting: [{
      type: Input
    }],
    countDecimals: [{
      type: Input
    }],
    countTo: [{
      type: Input
    }],
    countFrom: [{
      type: Input
    }],
    countChange: [{
      type: Output
    }],
    countFinish: [{
      type: Output
    }]
  });
})();
var root;
if (typeof window !== "undefined") {
  root = window;
} else if (typeof global !== "undefined") {
  root = global;
}
var MouseEvent = root.MouseEvent;
function createMouseEvent(name, bubbles = false, cancelable = true) {
  if (typeof MouseEvent === "function") {
    return new MouseEvent(name, {
      bubbles,
      cancelable
    });
  } else {
    const event = document.createEvent("MouseEvent");
    event.initEvent(name, bubbles, cancelable);
    return event;
  }
}
var TooltipArea = class {
  constructor(platformId) {
    this.platformId = platformId;
    this.anchorOpacity = 0;
    this.anchorPos = -1;
    this.anchorValues = [];
    this.placementTypes = PlacementTypes;
    this.styleTypes = StyleTypes;
    this.showPercentage = false;
    this.tooltipDisabled = false;
    this.hover = new EventEmitter();
  }
  getValues(xVal) {
    const results = [];
    for (const group2 of this.results) {
      const item = group2.series.find((d) => d.name.toString() === xVal.toString());
      let groupName = group2.name;
      if (groupName instanceof Date) {
        groupName = groupName.toLocaleDateString();
      }
      if (item) {
        const label = item.name;
        let val = item.value;
        if (this.showPercentage) {
          val = (item.d1 - item.d0).toFixed(2) + "%";
        }
        let color;
        if (this.colors.scaleType === ScaleType.Linear) {
          let v = val;
          if (item.d1) {
            v = item.d1;
          }
          color = this.colors.getColor(v);
        } else {
          color = this.colors.getColor(group2.name);
        }
        const data = Object.assign({}, item, {
          value: val,
          name: label,
          series: groupName,
          min: item.min,
          max: item.max,
          color
        });
        results.push(data);
      }
    }
    return results;
  }
  mouseMove(event) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const xPos = event.pageX - event.target.getBoundingClientRect().left;
    const closestIndex = this.findClosestPointIndex(xPos);
    const closestPoint = this.xSet[closestIndex];
    this.anchorPos = this.xScale(closestPoint);
    this.anchorPos = Math.max(0, this.anchorPos);
    this.anchorPos = Math.min(this.dims.width, this.anchorPos);
    this.anchorValues = this.getValues(closestPoint);
    if (this.anchorPos !== this.lastAnchorPos) {
      const ev = createMouseEvent("mouseleave");
      this.tooltipAnchor.nativeElement.dispatchEvent(ev);
      this.anchorOpacity = 0.7;
      this.hover.emit({
        value: closestPoint
      });
      this.showTooltip();
      this.lastAnchorPos = this.anchorPos;
    }
  }
  findClosestPointIndex(xPos) {
    let minIndex2 = 0;
    let maxIndex2 = this.xSet.length - 1;
    let minDiff = Number.MAX_VALUE;
    let closestIndex = 0;
    while (minIndex2 <= maxIndex2) {
      const currentIndex = (minIndex2 + maxIndex2) / 2 | 0;
      const currentElement = this.xScale(this.xSet[currentIndex]);
      const curDiff = Math.abs(currentElement - xPos);
      if (curDiff < minDiff) {
        minDiff = curDiff;
        closestIndex = currentIndex;
      }
      if (currentElement < xPos) {
        minIndex2 = currentIndex + 1;
      } else if (currentElement > xPos) {
        maxIndex2 = currentIndex - 1;
      } else {
        minDiff = 0;
        closestIndex = currentIndex;
        break;
      }
    }
    return closestIndex;
  }
  showTooltip() {
    const event = createMouseEvent("mouseenter");
    this.tooltipAnchor.nativeElement.dispatchEvent(event);
  }
  hideTooltip() {
    const event = createMouseEvent("mouseleave");
    this.tooltipAnchor.nativeElement.dispatchEvent(event);
    this.anchorOpacity = 0;
    this.lastAnchorPos = -1;
  }
  getToolTipText(tooltipItem) {
    let result = "";
    if (tooltipItem.series !== void 0) {
      result += tooltipItem.series;
    } else {
      result += "???";
    }
    result += ": ";
    if (tooltipItem.value !== void 0) {
      result += tooltipItem.value.toLocaleString();
    }
    if (tooltipItem.min !== void 0 || tooltipItem.max !== void 0) {
      result += " (";
      if (tooltipItem.min !== void 0) {
        if (tooltipItem.max === void 0) {
          result += "≥";
        }
        result += tooltipItem.min.toLocaleString();
        if (tooltipItem.max !== void 0) {
          result += " - ";
        }
      } else if (tooltipItem.max !== void 0) {
        result += "≤";
      }
      if (tooltipItem.max !== void 0) {
        result += tooltipItem.max.toLocaleString();
      }
      result += ")";
    }
    return result;
  }
};
TooltipArea.ɵfac = function TooltipArea_Factory(t) {
  return new (t || TooltipArea)(ɵɵdirectiveInject(PLATFORM_ID));
};
TooltipArea.ɵcmp = ɵɵdefineComponent({
  type: TooltipArea,
  selectors: [["g", "ngx-charts-tooltip-area", ""]],
  viewQuery: function TooltipArea_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c18, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipAnchor = _t.first);
    }
  },
  inputs: {
    dims: "dims",
    xSet: "xSet",
    xScale: "xScale",
    yScale: "yScale",
    results: "results",
    colors: "colors",
    showPercentage: "showPercentage",
    tooltipDisabled: "tooltipDisabled",
    tooltipTemplate: "tooltipTemplate"
  },
  outputs: {
    hover: "hover"
  },
  attrs: _c19,
  decls: 6,
  vars: 18,
  consts: [["defaultTooltipTemplate", ""], ["tooltipAnchor", ""], ["y", "0", 1, "tooltip-area", 2, "opacity", "0", "cursor", "'auto'", 3, "mousemove", "mouseleave"], ["y", "0", "ngx-tooltip", "", 1, "tooltip-anchor", 3, "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipSpacing", "tooltipTemplate", "tooltipContext", "tooltipImmediateExit"], [1, "area-tooltip-container"], ["class", "tooltip-item", 4, "ngFor", "ngForOf"], [1, "tooltip-item"], [1, "tooltip-item-color"]],
  template: function TooltipArea_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "g")(1, "rect", 2);
      ɵɵlistener("mousemove", function TooltipArea_Template_rect_mousemove_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.mouseMove($event));
      })("mouseleave", function TooltipArea_Template_rect_mouseleave_1_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.hideTooltip());
      });
      ɵɵelementEnd();
      ɵɵtemplate(2, TooltipArea__svg_ng_template_2_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      ɵɵelement(4, "rect", 3, 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      const defaultTooltipTemplate_r5 = ɵɵreference(3);
      ɵɵadvance();
      ɵɵattribute("x", 0)("width", ctx.dims.width)("height", ctx.dims.height);
      ɵɵadvance(3);
      ɵɵstyleProp("opacity", ctx.anchorOpacity)("pointer-events", "none");
      ɵɵproperty("@animationState", ctx.anchorOpacity !== 0 ? "active" : "inactive")("tooltipDisabled", ctx.tooltipDisabled)("tooltipPlacement", ctx.placementTypes.Right)("tooltipType", ctx.styleTypes.tooltip)("tooltipSpacing", 15)("tooltipTemplate", ctx.tooltipTemplate ? ctx.tooltipTemplate : defaultTooltipTemplate_r5)("tooltipContext", ctx.anchorValues)("tooltipImmediateExit", true);
      ɵɵattribute("x", ctx.anchorPos)("width", 1)("height", ctx.dims.height);
    }
  },
  dependencies: [NgForOf, TooltipDirective],
  encapsulation: 2,
  data: {
    animation: [trigger("animationState", [transition("inactive => active", [style({
      opacity: 0
    }), animate(250, style({
      opacity: 0.7
    }))]), transition("active => inactive", [style({
      opacity: 0.7
    }), animate(250, style({
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipArea, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-tooltip-area]",
      template: `
    <svg:g>
      <svg:rect
        class="tooltip-area"
        [attr.x]="0"
        y="0"
        [attr.width]="dims.width"
        [attr.height]="dims.height"
        style="opacity: 0; cursor: 'auto';"
        (mousemove)="mouseMove($event)"
        (mouseleave)="hideTooltip()"
      />
      <ng-template #defaultTooltipTemplate let-model="model">
        <xhtml:div class="area-tooltip-container">
          <xhtml:div *ngFor="let tooltipItem of model" class="tooltip-item">
            <xhtml:span class="tooltip-item-color" [style.background-color]="tooltipItem.color"></xhtml:span>
            {{ getToolTipText(tooltipItem) }}
          </xhtml:div>
        </xhtml:div>
      </ng-template>
      <svg:rect
        #tooltipAnchor
        [@animationState]="anchorOpacity !== 0 ? 'active' : 'inactive'"
        class="tooltip-anchor"
        [attr.x]="anchorPos"
        y="0"
        [attr.width]="1"
        [attr.height]="dims.height"
        [style.opacity]="anchorOpacity"
        [style.pointer-events]="'none'"
        ngx-tooltip
        [tooltipDisabled]="tooltipDisabled"
        [tooltipPlacement]="placementTypes.Right"
        [tooltipType]="styleTypes.tooltip"
        [tooltipSpacing]="15"
        [tooltipTemplate]="tooltipTemplate ? tooltipTemplate : defaultTooltipTemplate"
        [tooltipContext]="anchorValues"
        [tooltipImmediateExit]="true"
      />
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("animationState", [transition("inactive => active", [style({
        opacity: 0
      }), animate(250, style({
        opacity: 0.7
      }))]), transition("active => inactive", [style({
        opacity: 0.7
      }), animate(250, style({
        opacity: 0
      }))])])]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    dims: [{
      type: Input
    }],
    xSet: [{
      type: Input
    }],
    xScale: [{
      type: Input
    }],
    yScale: [{
      type: Input
    }],
    results: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    showPercentage: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    tooltipTemplate: [{
      type: Input
    }],
    hover: [{
      type: Output
    }],
    tooltipAnchor: [{
      type: ViewChild,
      args: ["tooltipAnchor", {
        static: false
      }]
    }]
  });
})();
var Timeline = class {
  constructor(element, cd) {
    this.cd = cd;
    this.height = 50;
    this.select = new EventEmitter();
    this.onDomainChange = new EventEmitter();
    this.initialized = false;
    this.element = element.nativeElement;
  }
  ngOnChanges(changes) {
    this.update();
    if (!this.initialized) {
      this.addBrush();
      this.initialized = true;
    }
  }
  update() {
    this.dims = this.getDims();
    this.height = this.dims.height;
    const offsetY = this.view[1] - this.height;
    this.xDomain = this.getXDomain();
    this.xScale = this.getXScale();
    if (this.brush) {
      this.updateBrush();
    }
    this.transform = `translate(0 , ${offsetY})`;
    this.filterId = "filter" + id().toString();
    this.filter = `url(#${this.filterId})`;
    this.cd.markForCheck();
  }
  getXDomain() {
    let values = [];
    for (const results of this.results) {
      for (const d of results.series) {
        if (!values.includes(d.name)) {
          values.push(d.name);
        }
      }
    }
    let domain = [];
    if (this.scaleType === ScaleType.Time) {
      const min4 = Math.min(...values);
      const max4 = Math.max(...values);
      domain = [min4, max4];
    } else if (this.scaleType === ScaleType.Linear) {
      values = values.map((v) => Number(v));
      const min4 = Math.min(...values);
      const max4 = Math.max(...values);
      domain = [min4, max4];
    } else {
      domain = values;
    }
    return domain;
  }
  getXScale() {
    let scale;
    if (this.scaleType === ScaleType.Time) {
      scale = time().range([0, this.dims.width]).domain(this.xDomain);
    } else if (this.scaleType === ScaleType.Linear) {
      scale = linear().range([0, this.dims.width]).domain(this.xDomain);
    } else if (this.scaleType === ScaleType.Ordinal) {
      scale = point().range([0, this.dims.width]).padding(0.1).domain(this.xDomain);
    }
    return scale;
  }
  addBrush() {
    if (this.brush) return;
    const height = this.height;
    const width = this.view[0];
    this.brush = brushX().extent([[0, 0], [width, height]]).on("brush end", ({
      selection
    }) => {
      const newSelection = selection || this.xScale.range();
      const newDomain = newSelection.map(this.xScale.invert);
      this.onDomainChange.emit(newDomain);
      this.cd.markForCheck();
    });
    select_default(this.element).select(".brush").call(this.brush);
  }
  updateBrush() {
    if (!this.brush) return;
    const height = this.height;
    const width = this.view[0];
    this.brush.extent([[0, 0], [width, height]]);
    select_default(this.element).select(".brush").call(this.brush);
    select_default(this.element).select(".selection").attr("fill", void 0).attr("stroke", void 0).attr("fill-opacity", void 0);
    this.cd.markForCheck();
  }
  getDims() {
    const width = this.view[0];
    const dims = {
      width,
      height: this.height
    };
    return dims;
  }
};
Timeline.ɵfac = function Timeline_Factory(t) {
  return new (t || Timeline)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
};
Timeline.ɵcmp = ɵɵdefineComponent({
  type: Timeline,
  selectors: [["g", "ngx-charts-timeline", ""]],
  inputs: {
    view: "view",
    results: "results",
    scheme: "scheme",
    customColors: "customColors",
    legend: "legend",
    autoScale: "autoScale",
    scaleType: "scaleType",
    height: "height"
  },
  outputs: {
    select: "select",
    onDomainChange: "onDomainChange"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c20,
  ngContentSelectors: _c2,
  decls: 7,
  vars: 4,
  consts: [[1, "timeline"], ["in", "SourceGraphic", "type", "matrix", "values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"], [1, "embedded-chart"], ["x", "0", "y", "0", 1, "brush-background"], [1, "brush"]],
  template: function Timeline_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "g", 0)(1, "filter");
      ɵɵelement(2, "feColorMatrix", 1);
      ɵɵelementEnd();
      ɵɵelementStart(3, "g", 2);
      ɵɵprojection(4);
      ɵɵelementEnd();
      ɵɵelement(5, "rect", 3)(6, "g", 4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵattribute("id", ctx.filterId);
      ɵɵadvance(4);
      ɵɵattribute("width", ctx.view[0])("height", ctx.height);
    }
  },
  styles: [".timeline .brush-background{fill:#0000000d}.timeline .brush .selection{fill:#0000001a;stroke-width:1px;stroke:#888}.timeline .brush .handle{fill-opacity:0}.timeline .embedded-chart{opacity:.6}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Timeline, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-timeline]",
      template: `
    <svg:g class="timeline" [attr.transform]="transform">
      <svg:filter [attr.id]="filterId">
        <svg:feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
        />
      </svg:filter>
      <svg:g class="embedded-chart">
        <ng-content></ng-content>
      </svg:g>
      <svg:rect x="0" [attr.width]="view[0]" y="0" [attr.height]="height" class="brush-background" />
      <svg:g class="brush"></svg:g>
    </svg:g>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".timeline .brush-background{fill:#0000000d}.timeline .brush .selection{fill:#0000001a;stroke-width:1px;stroke:#888}.timeline .brush .handle{fill-opacity:0}.timeline .embedded-chart{opacity:.6}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    view: [{
      type: Input
    }],
    results: [{
      type: Input
    }],
    scheme: [{
      type: Input
    }],
    customColors: [{
      type: Input
    }],
    legend: [{
      type: Input
    }],
    autoScale: [{
      type: Input
    }],
    scaleType: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    onDomainChange: [{
      type: Output
    }]
  });
})();
var AdvancedLegendComponent = class {
  constructor() {
    this.label = "Total";
    this.animations = true;
    this.select = new EventEmitter();
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.legendItems = [];
    this.labelFormatting = (label) => label;
    this.percentageFormatting = (percentage) => percentage;
    this.defaultValueFormatting = (value2) => value2.toLocaleString();
  }
  ngOnChanges(changes) {
    this.update();
  }
  getTotal() {
    return this.data.map((d) => Number(d.value)).reduce((sum3, d) => sum3 + d, 0);
  }
  update() {
    this.total = this.getTotal();
    this.roundedTotal = this.total;
    this.legendItems = this.getLegendItems();
  }
  getLegendItems() {
    return this.data.map((d) => {
      const label = formatLabel(d.name);
      const value2 = d.value;
      const color = this.colors.getColor(label);
      const percentage = this.total > 0 ? value2 / this.total * 100 : 0;
      const formattedLabel = typeof this.labelFormatting === "function" ? this.labelFormatting(label) : label;
      return {
        _value: value2,
        data: d,
        value: value2,
        color,
        label: formattedLabel,
        displayLabel: trimLabel(formattedLabel, 20),
        origialLabel: d.name,
        percentage: this.percentageFormatting ? this.percentageFormatting(percentage) : percentage.toLocaleString()
      };
    });
  }
  trackBy(index2, item) {
    return item.label;
  }
};
AdvancedLegendComponent.ɵfac = function AdvancedLegendComponent_Factory(t) {
  return new (t || AdvancedLegendComponent)();
};
AdvancedLegendComponent.ɵcmp = ɵɵdefineComponent({
  type: AdvancedLegendComponent,
  selectors: [["ngx-charts-advanced-legend"]],
  inputs: {
    width: "width",
    data: "data",
    colors: "colors",
    label: "label",
    animations: "animations",
    valueFormatting: "valueFormatting",
    labelFormatting: "labelFormatting",
    percentageFormatting: "percentageFormatting"
  },
  outputs: {
    select: "select",
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 8,
  vars: 7,
  consts: [[1, "advanced-pie-legend"], ["class", "total-value", "ngx-charts-count-up", "", 3, "countTo", "valueFormatting", 4, "ngIf"], ["class", "total-value", 4, "ngIf"], [1, "total-label"], [1, "legend-items-container"], [1, "legend-items"], ["tabindex", "-1", "class", "legend-item", 3, "mouseenter", "mouseleave", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-count-up", "", 1, "total-value", 3, "countTo", "valueFormatting"], [1, "total-value"], ["tabindex", "-1", 1, "legend-item", 3, "mouseenter", "mouseleave", "click"], [1, "item-color"], ["class", "item-value", "ngx-charts-count-up", "", 3, "countTo", "valueFormatting", 4, "ngIf"], ["class", "item-value", 4, "ngIf"], [1, "item-label"], ["class", "item-percent", "ngx-charts-count-up", "", 3, "countTo", "countSuffix", 4, "ngIf"], ["class", "item-percent", 4, "ngIf"], ["ngx-charts-count-up", "", 1, "item-value", 3, "countTo", "valueFormatting"], [1, "item-value"], ["ngx-charts-count-up", "", 1, "item-percent", 3, "countTo", "countSuffix"], [1, "item-percent"]],
  template: function AdvancedLegendComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, AdvancedLegendComponent_div_1_Template, 1, 2, "div", 1)(2, AdvancedLegendComponent_div_2_Template, 2, 1, "div", 2);
      ɵɵelementStart(3, "div", 3);
      ɵɵtext(4);
      ɵɵelementEnd();
      ɵɵelementStart(5, "div", 4)(6, "div", 5);
      ɵɵtemplate(7, AdvancedLegendComponent_div_7_Template, 8, 7, "div", 6);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵstyleProp("width", ctx.width, "px");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.animations);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.animations);
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.label, " ");
      ɵɵadvance(3);
      ɵɵproperty("ngForOf", ctx.legendItems)("ngForTrackBy", ctx.trackBy);
    }
  },
  dependencies: [CountUpDirective, NgIf, NgForOf],
  styles: [".advanced-pie-legend{float:left;position:relative;top:50%;transform:translateY(-50%)}.advanced-pie-legend .total-value{font-size:36px}.advanced-pie-legend .total-label{font-size:24px;margin-bottom:19px}.advanced-pie-legend .legend-items-container{width:100%}.advanced-pie-legend .legend-items-container .legend-items{white-space:nowrap;overflow:auto}.advanced-pie-legend .legend-items-container .legend-items .legend-item{margin-right:20px;display:inline-block;cursor:pointer}.advanced-pie-legend .legend-items-container .legend-items .legend-item:focus{outline:none}.advanced-pie-legend .legend-items-container .legend-items .legend-item:hover{color:#000;transition:.2s}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-value{font-size:24px;margin-top:-6px;margin-left:11px}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-label{font-size:14px;opacity:.7;margin-left:11px;margin-top:-6px}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-percent{font-size:24px;opacity:.7;margin-left:11px}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-color{border-left:4px solid;width:4px;height:42px;float:left;margin-right:7px}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdvancedLegendComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-advanced-legend",
      template: `
    <div class="advanced-pie-legend" [style.width.px]="width">
      <div
        *ngIf="animations"
        class="total-value"
        ngx-charts-count-up
        [countTo]="roundedTotal"
        [valueFormatting]="valueFormatting"
      ></div>
      <div class="total-value" *ngIf="!animations">
        {{ valueFormatting ? valueFormatting(roundedTotal) : defaultValueFormatting(roundedTotal) }}
      </div>
      <div class="total-label">
        {{ label }}
      </div>
      <div class="legend-items-container">
        <div class="legend-items">
          <div
            *ngFor="let legendItem of legendItems; trackBy: trackBy"
            tabindex="-1"
            class="legend-item"
            (mouseenter)="activate.emit(legendItem.data)"
            (mouseleave)="deactivate.emit(legendItem.data)"
            (click)="select.emit(legendItem.data)"
          >
            <div class="item-color" [style.border-left-color]="legendItem.color"></div>
            <div
              *ngIf="animations"
              class="item-value"
              ngx-charts-count-up
              [countTo]="legendItem._value"
              [valueFormatting]="valueFormatting"
            ></div>
            <div *ngIf="!animations" class="item-value">
              {{ valueFormatting ? valueFormatting(legendItem.value) : defaultValueFormatting(legendItem.value) }}
            </div>
            <div class="item-label">{{ legendItem.displayLabel }}</div>
            <div
              *ngIf="animations"
              class="item-percent"
              ngx-charts-count-up
              [countTo]="legendItem.percentage"
              [countSuffix]="'%'"
            ></div>
            <div *ngIf="!animations" class="item-percent">{{ legendItem.percentage.toLocaleString() }}%</div>
          </div>
        </div>
      </div>
    </div>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".advanced-pie-legend{float:left;position:relative;top:50%;transform:translateY(-50%)}.advanced-pie-legend .total-value{font-size:36px}.advanced-pie-legend .total-label{font-size:24px;margin-bottom:19px}.advanced-pie-legend .legend-items-container{width:100%}.advanced-pie-legend .legend-items-container .legend-items{white-space:nowrap;overflow:auto}.advanced-pie-legend .legend-items-container .legend-items .legend-item{margin-right:20px;display:inline-block;cursor:pointer}.advanced-pie-legend .legend-items-container .legend-items .legend-item:focus{outline:none}.advanced-pie-legend .legend-items-container .legend-items .legend-item:hover{color:#000;transition:.2s}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-value{font-size:24px;margin-top:-6px;margin-left:11px}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-label{font-size:14px;opacity:.7;margin-left:11px;margin-top:-6px}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-percent{font-size:24px;opacity:.7;margin-left:11px}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-color{border-left:4px solid;width:4px;height:42px;float:left;margin-right:7px}\n"]
    }]
  }], null, {
    width: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    valueFormatting: [{
      type: Input
    }],
    labelFormatting: [{
      type: Input
    }],
    percentageFormatting: [{
      type: Input
    }]
  });
})();
var COMPONENTS = [AreaComponent, BaseChartComponent, CountUpDirective, TooltipArea, ChartComponent, LegendComponent, LegendEntryComponent, ScaleLegendComponent, CircleComponent, CircleSeriesComponent, GridPanelComponent, GridPanelSeriesComponent, SvgLinearGradientComponent, SvgRadialGradientComponent, Timeline, AdvancedLegendComponent];
var ChartCommonModule = class {
};
ChartCommonModule.ɵfac = function ChartCommonModule_Factory(t) {
  return new (t || ChartCommonModule)();
};
ChartCommonModule.ɵmod = ɵɵdefineNgModule({
  type: ChartCommonModule,
  declarations: [AreaComponent, BaseChartComponent, CountUpDirective, TooltipArea, ChartComponent, LegendComponent, LegendEntryComponent, ScaleLegendComponent, CircleComponent, CircleSeriesComponent, GridPanelComponent, GridPanelSeriesComponent, SvgLinearGradientComponent, SvgRadialGradientComponent, Timeline, AdvancedLegendComponent, VisibilityObserver],
  imports: [CommonModule, AxesModule, TooltipModule],
  exports: [CommonModule, AxesModule, TooltipModule, AreaComponent, BaseChartComponent, CountUpDirective, TooltipArea, ChartComponent, LegendComponent, LegendEntryComponent, ScaleLegendComponent, CircleComponent, CircleSeriesComponent, GridPanelComponent, GridPanelSeriesComponent, SvgLinearGradientComponent, SvgRadialGradientComponent, Timeline, AdvancedLegendComponent, VisibilityObserver]
});
ChartCommonModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, AxesModule, TooltipModule], CommonModule, AxesModule, TooltipModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartCommonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AxesModule, TooltipModule],
      declarations: [...COMPONENTS, VisibilityObserver],
      exports: [CommonModule, AxesModule, TooltipModule, ...COMPONENTS, VisibilityObserver]
    }]
  }], null, null);
})();
function calculateViewDimensions({
  width,
  height,
  margins,
  showXAxis = false,
  showYAxis = false,
  xAxisHeight = 0,
  yAxisWidth = 0,
  showXLabel = false,
  showYLabel = false,
  showLegend = false,
  legendType = ScaleType.Ordinal,
  legendPosition = LegendPosition.Right,
  columns = 12
}) {
  let xOffset = margins[3];
  let chartWidth = width;
  let chartHeight = height - margins[0] - margins[2];
  if (showLegend && legendPosition === LegendPosition.Right) {
    if (legendType === ScaleType.Ordinal) {
      columns -= 2;
    } else {
      columns -= 1;
    }
  }
  chartWidth = chartWidth * columns / 12;
  chartWidth = chartWidth - margins[1] - margins[3];
  if (showXAxis) {
    chartHeight -= 5;
    chartHeight -= xAxisHeight;
    if (showXLabel) {
      const offset = 25 + 5;
      chartHeight -= offset;
    }
  }
  if (showYAxis) {
    chartWidth -= 5;
    chartWidth -= yAxisWidth;
    xOffset += yAxisWidth;
    xOffset += 10;
    if (showYLabel) {
      const offset = 25 + 5;
      chartWidth -= offset;
      xOffset += offset;
    }
  }
  chartWidth = Math.max(0, chartWidth);
  chartHeight = Math.max(0, chartHeight);
  return {
    width: Math.floor(chartWidth),
    height: Math.floor(chartHeight),
    xOffset: Math.floor(xOffset)
  };
}
var colorSets = [{
  name: "vivid",
  selectable: true,
  group: ScaleType.Ordinal,
  domain: ["#647c8a", "#3f51b5", "#2196f3", "#00b862", "#afdf0a", "#a7b61a", "#f3e562", "#ff9800", "#ff5722", "#ff4514"]
}, {
  name: "natural",
  selectable: true,
  group: ScaleType.Ordinal,
  domain: ["#bf9d76", "#e99450", "#d89f59", "#f2dfa7", "#a5d7c6", "#7794b1", "#afafaf", "#707160", "#ba9383", "#d9d5c3"]
}, {
  name: "cool",
  selectable: true,
  group: ScaleType.Ordinal,
  domain: ["#a8385d", "#7aa3e5", "#a27ea8", "#aae3f5", "#adcded", "#a95963", "#8796c0", "#7ed3ed", "#50abcc", "#ad6886"]
}, {
  name: "fire",
  selectable: true,
  group: ScaleType.Ordinal,
  domain: ["#ff3d00", "#bf360c", "#ff8f00", "#ff6f00", "#ff5722", "#e65100", "#ffca28", "#ffab00"]
}, {
  name: "solar",
  selectable: true,
  group: ScaleType.Linear,
  domain: ["#fff8e1", "#ffecb3", "#ffe082", "#ffd54f", "#ffca28", "#ffc107", "#ffb300", "#ffa000", "#ff8f00", "#ff6f00"]
}, {
  name: "air",
  selectable: true,
  group: ScaleType.Linear,
  domain: ["#e1f5fe", "#b3e5fc", "#81d4fa", "#4fc3f7", "#29b6f6", "#03a9f4", "#039be5", "#0288d1", "#0277bd", "#01579b"]
}, {
  name: "aqua",
  selectable: true,
  group: ScaleType.Linear,
  domain: ["#e0f7fa", "#b2ebf2", "#80deea", "#4dd0e1", "#26c6da", "#00bcd4", "#00acc1", "#0097a7", "#00838f", "#006064"]
}, {
  name: "flame",
  selectable: false,
  group: ScaleType.Ordinal,
  domain: ["#A10A28", "#D3342D", "#EF6D49", "#FAAD67", "#FDDE90", "#DBED91", "#A9D770", "#6CBA67", "#2C9653", "#146738"]
}, {
  name: "ocean",
  selectable: false,
  group: ScaleType.Ordinal,
  domain: ["#1D68FB", "#33C0FC", "#4AFFFE", "#AFFFFF", "#FFFC63", "#FDBD2D", "#FC8A25", "#FA4F1E", "#FA141B", "#BA38D1"]
}, {
  name: "forest",
  selectable: false,
  group: ScaleType.Ordinal,
  domain: ["#55C22D", "#C1F33D", "#3CC099", "#AFFFFF", "#8CFC9D", "#76CFFA", "#BA60FB", "#EE6490", "#C42A1C", "#FC9F32"]
}, {
  name: "horizon",
  selectable: false,
  group: ScaleType.Ordinal,
  domain: ["#2597FB", "#65EBFD", "#99FDD0", "#FCEE4B", "#FEFCFA", "#FDD6E3", "#FCB1A8", "#EF6F7B", "#CB96E8", "#EFDEE0"]
}, {
  name: "neons",
  selectable: false,
  group: ScaleType.Ordinal,
  domain: ["#FF3333", "#FF33FF", "#CC33FF", "#0000FF", "#33CCFF", "#33FFFF", "#33FF66", "#CCFF33", "#FFCC00", "#FF6600"]
}, {
  name: "picnic",
  selectable: false,
  group: ScaleType.Ordinal,
  domain: ["#FAC51D", "#66BD6D", "#FAA026", "#29BB9C", "#E96B56", "#55ACD2", "#B7332F", "#2C83C9", "#9166B8", "#92E7E8"]
}, {
  name: "night",
  selectable: false,
  group: ScaleType.Ordinal,
  domain: ["#2B1B5A", "#501356", "#183356", "#28203F", "#391B3C", "#1E2B3C", "#120634", "#2D0432", "#051932", "#453080", "#75267D", "#2C507D", "#4B3880", "#752F7D", "#35547D"]
}, {
  name: "nightLights",
  selectable: false,
  group: ScaleType.Ordinal,
  domain: ["#4e31a5", "#9c25a7", "#3065ab", "#57468b", "#904497", "#46648b", "#32118d", "#a00fb3", "#1052a2", "#6e51bd", "#b63cc3", "#6c97cb", "#8671c1", "#b455be", "#7496c3"]
}];
var ColorHelper = class {
  constructor(scheme, type, domain, customColors) {
    if (typeof scheme === "string") {
      scheme = colorSets.find((cs) => {
        return cs.name === scheme;
      });
    }
    this.colorDomain = scheme.domain;
    this.scaleType = type;
    this.domain = domain;
    this.customColors = customColors;
    this.scale = this.generateColorScheme(scheme, type, this.domain);
  }
  generateColorScheme(scheme, type, domain) {
    if (typeof scheme === "string") {
      scheme = colorSets.find((cs) => {
        return cs.name === scheme;
      });
    }
    let colorScale;
    switch (type) {
      case ScaleType.Quantile:
        colorScale = quantile2().range(scheme.domain).domain(domain);
        break;
      case ScaleType.Ordinal:
        colorScale = ordinal().range(scheme.domain).domain(domain);
        break;
      case ScaleType.Linear:
        {
          const colorDomain = [...scheme.domain];
          if (colorDomain.length === 1) {
            colorDomain.push(colorDomain[0]);
            this.colorDomain = colorDomain;
          }
          const points = range(0, 1, 1 / colorDomain.length);
          colorScale = linear().range(colorDomain).domain(points);
        }
        break;
      default:
        break;
    }
    return colorScale;
  }
  getColor(value2) {
    if (value2 === void 0 || value2 === null) {
      throw new Error("Value can not be null");
    }
    if (this.scaleType === ScaleType.Linear) {
      const valueScale = linear().domain(this.domain).range([0, 1]);
      return this.scale(valueScale(value2));
    } else {
      if (typeof this.customColors === "function") {
        return this.customColors(value2);
      }
      const formattedValue = value2.toString();
      let found;
      if (this.customColors && this.customColors.length > 0) {
        found = this.customColors.find((mapping) => {
          return mapping.name.toLowerCase() === formattedValue.toLowerCase();
        });
      }
      if (found) {
        return found.value;
      } else {
        return this.scale(value2);
      }
    }
  }
  getLinearGradientStops(value2, start) {
    if (start === void 0) {
      start = this.domain[0];
    }
    const valueScale = linear().domain(this.domain).range([0, 1]);
    const colorValueScale = band().domain(this.colorDomain).range([0, 1]);
    const endColor = this.getColor(value2);
    const startVal = valueScale(start);
    const startColor = this.getColor(start);
    const endVal = valueScale(value2);
    let i = 1;
    let currentVal = startVal;
    const stops = [];
    stops.push({
      color: startColor,
      offset: startVal,
      originalOffset: startVal,
      opacity: 1
    });
    while (currentVal < endVal && i < this.colorDomain.length) {
      const color = this.colorDomain[i];
      const offset = colorValueScale(color);
      if (offset <= startVal) {
        i++;
        continue;
      }
      if (offset.toFixed(4) >= (endVal - colorValueScale.bandwidth()).toFixed(4)) {
        break;
      }
      stops.push({
        color,
        offset,
        opacity: 1
      });
      currentVal = offset;
      i++;
    }
    if (stops[stops.length - 1].offset < 100) {
      stops.push({
        color: endColor,
        offset: endVal,
        opacity: 1
      });
    }
    if (endVal === startVal) {
      stops[0].offset = 0;
      stops[1].offset = 100;
    } else {
      if (stops[stops.length - 1].offset !== 100) {
        for (const s2 of stops) {
          s2.offset = (s2.offset - startVal) / (endVal - startVal) * 100;
        }
      }
    }
    return stops;
  }
};
function getUniqueXDomainValues(results) {
  const valueSet = /* @__PURE__ */ new Set();
  for (const result of results) {
    for (const d of result.series) {
      valueSet.add(d.name);
    }
  }
  return Array.from(valueSet);
}
function getScaleType(values, checkDateType = true) {
  if (checkDateType) {
    const allDates = values.every((value2) => value2 instanceof Date);
    if (allDates) {
      return ScaleType.Time;
    }
  }
  const allNumbers = values.every((value2) => typeof value2 === "number");
  if (allNumbers) {
    return ScaleType.Linear;
  }
  return ScaleType.Ordinal;
}
function getXDomainArray(values, xScaleMin, xScaleMax) {
  const scaleType = getScaleType(values);
  let xSet = [];
  let domain = [];
  if (scaleType === ScaleType.Linear) {
    values = values.map((v) => Number(v));
  }
  let min4;
  let max4;
  if (scaleType === ScaleType.Time || scaleType === ScaleType.Linear) {
    const mappedValues = values.map((v) => Number(v));
    min4 = xScaleMin ? xScaleMin : Math.min(...mappedValues);
    max4 = xScaleMax ? xScaleMax : Math.max(...mappedValues);
  }
  if (scaleType === ScaleType.Time) {
    domain = [new Date(min4), new Date(max4)];
    xSet = [...values].sort((a2, b) => {
      const aDate = a2.getTime();
      const bDate = b.getTime();
      if (aDate > bDate) return 1;
      if (bDate > aDate) return -1;
      return 0;
    });
  } else if (scaleType === ScaleType.Linear) {
    domain = [min4, max4];
    xSet = [...values].sort((a2, b) => a2 - b);
  } else {
    domain = values;
    xSet = values;
  }
  return {
    domain,
    xSet,
    scaleType
  };
}
function sortLinear(data, property, direction = "asc") {
  return data.sort((a2, b) => {
    if (direction === "asc") {
      return a2[property] - b[property];
    } else {
      return b[property] - a2[property];
    }
  });
}
function sortByDomain(data, property, direction = "asc", domain) {
  return data.sort((a2, b) => {
    const aVal = a2[property];
    const bVal = b[property];
    const aIdx = domain.indexOf(aVal);
    const bIdx = domain.indexOf(bVal);
    if (direction === "asc") {
      return aIdx - bIdx;
    } else {
      return bIdx - aIdx;
    }
  });
}
function sortByTime(data, property, direction = "asc") {
  return data.sort((a2, b) => {
    const aDate = a2[property].getTime();
    const bDate = b[property].getTime();
    if (direction === "asc") {
      if (aDate > bDate) return 1;
      if (bDate > aDate) return -1;
      return 0;
    } else {
      if (aDate > bDate) return -1;
      if (bDate > aDate) return 1;
      return 0;
    }
  });
}
var AreaSeriesComponent = class {
  constructor() {
    this.baseValue = "auto";
    this.stacked = false;
    this.normalized = false;
    this.animations = true;
    this.select = new EventEmitter();
  }
  ngOnChanges(changes) {
    this.update();
  }
  update() {
    this.updateGradient();
    let currentArea;
    let startingArea;
    const xProperty = (d) => {
      const label = d.name;
      return this.xScale(label);
    };
    if (this.stacked || this.normalized) {
      currentArea = area_default().x(xProperty).y0((d, i) => this.yScale(d.d0)).y1((d, i) => this.yScale(d.d1));
      startingArea = area_default().x(xProperty).y0((d) => this.yScale.range()[0]).y1((d) => this.yScale.range()[0]);
    } else {
      currentArea = area_default().x(xProperty).y0(() => this.baseValue === "auto" ? this.yScale.range()[0] : this.yScale(this.baseValue)).y1((d) => this.yScale(d.value));
      startingArea = area_default().x(xProperty).y0((d) => this.baseValue === "auto" ? this.yScale.range()[0] : this.yScale(this.baseValue)).y1((d) => this.baseValue === "auto" ? this.yScale.range()[0] : this.yScale(this.baseValue));
    }
    currentArea.curve(this.curve);
    startingArea.curve(this.curve);
    this.opacity = 0.8;
    let data = this.data.series;
    if (this.scaleType === ScaleType.Linear) {
      data = sortLinear(data, "name");
    } else if (this.scaleType === ScaleType.Time) {
      data = sortByTime(data, "name");
    } else {
      data = sortByDomain(data, "name", "asc", this.xScale.domain());
    }
    this.path = currentArea(data);
    this.startingPath = startingArea(data);
  }
  updateGradient() {
    if (this.colors.scaleType === ScaleType.Linear) {
      this.hasGradient = true;
      if (this.stacked || this.normalized) {
        const d0values = this.data.series.map((d) => d.d0);
        const d1values = this.data.series.map((d) => d.d1);
        const max4 = Math.max(...d1values);
        const min4 = Math.min(...d0values);
        this.gradientStops = this.colors.getLinearGradientStops(max4, min4);
      } else {
        const values = this.data.series.map((d) => d.value);
        const max4 = Math.max(...values);
        this.gradientStops = this.colors.getLinearGradientStops(max4);
      }
    } else {
      this.hasGradient = false;
      this.gradientStops = void 0;
    }
  }
  isActive(entry) {
    if (!this.activeEntries) return false;
    const item = this.activeEntries.find((d) => {
      return entry.name === d.name;
    });
    return item !== void 0;
  }
  isInactive(entry) {
    if (!this.activeEntries || this.activeEntries.length === 0) return false;
    const item = this.activeEntries.find((d) => {
      return entry.name === d.name;
    });
    return item === void 0;
  }
};
AreaSeriesComponent.ɵfac = function AreaSeriesComponent_Factory(t) {
  return new (t || AreaSeriesComponent)();
};
AreaSeriesComponent.ɵcmp = ɵɵdefineComponent({
  type: AreaSeriesComponent,
  selectors: [["g", "ngx-charts-area-series", ""]],
  inputs: {
    data: "data",
    xScale: "xScale",
    yScale: "yScale",
    baseValue: "baseValue",
    colors: "colors",
    scaleType: "scaleType",
    stacked: "stacked",
    normalized: "normalized",
    gradient: "gradient",
    curve: "curve",
    activeEntries: "activeEntries",
    animations: "animations"
  },
  outputs: {
    select: "select"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c21,
  decls: 1,
  vars: 12,
  consts: [["ngx-charts-area", "", 1, "area-series", 3, "data", "path", "fill", "stops", "startingPath", "opacity", "gradient", "animations"]],
  template: function AreaSeriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelement(0, "g", 0);
    }
    if (rf & 2) {
      ɵɵclassProp("active", ctx.isActive(ctx.data))("inactive", ctx.isInactive(ctx.data));
      ɵɵproperty("data", ctx.data)("path", ctx.path)("fill", ctx.colors.getColor(ctx.data.name))("stops", ctx.gradientStops)("startingPath", ctx.startingPath)("opacity", ctx.opacity)("gradient", ctx.gradient || ctx.hasGradient)("animations", ctx.animations);
    }
  },
  dependencies: [AreaComponent],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AreaSeriesComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-area-series]",
      template: `
    <svg:g
      ngx-charts-area
      class="area-series"
      [data]="data"
      [path]="path"
      [fill]="colors.getColor(data.name)"
      [stops]="gradientStops"
      [startingPath]="startingPath"
      [opacity]="opacity"
      [gradient]="gradient || hasGradient"
      [animations]="animations"
      [class.active]="isActive(data)"
      [class.inactive]="isInactive(data)"
    />
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    data: [{
      type: Input
    }],
    xScale: [{
      type: Input
    }],
    yScale: [{
      type: Input
    }],
    baseValue: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    scaleType: [{
      type: Input
    }],
    stacked: [{
      type: Input
    }],
    normalized: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    curve: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    select: [{
      type: Output
    }]
  });
})();
var AreaChartComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.legend = false;
    this.legendTitle = "Legend";
    this.legendPosition = LegendPosition.Right;
    this.xAxis = false;
    this.yAxis = false;
    this.baseValue = "auto";
    this.autoScale = false;
    this.timeline = false;
    this.showGridLines = true;
    this.curve = linear_default;
    this.activeEntries = [];
    this.trimXAxisTicks = true;
    this.trimYAxisTicks = true;
    this.rotateXAxisTicks = true;
    this.maxXAxisTickLength = 16;
    this.maxYAxisTickLength = 16;
    this.roundDomains = false;
    this.tooltipDisabled = false;
    this.wrapTicks = false;
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.margin = [10, 20, 10, 20];
    this.xAxisHeight = 0;
    this.yAxisWidth = 0;
    this.timelineHeight = 50;
    this.timelinePadding = 10;
    this.trackBy = (index2, item) => {
      return item.name;
    };
  }
  update() {
    super.update();
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
      showXAxis: this.xAxis,
      showYAxis: this.yAxis,
      xAxisHeight: this.xAxisHeight,
      yAxisWidth: this.yAxisWidth,
      showXLabel: this.showXAxisLabel,
      showYLabel: this.showYAxisLabel,
      showLegend: this.legend,
      legendType: this.schemeType,
      legendPosition: this.legendPosition
    });
    if (this.timeline) {
      this.dims.height -= this.timelineHeight + this.margin[2] + this.timelinePadding;
    }
    this.xDomain = this.getXDomain();
    if (this.filteredDomain) {
      this.xDomain = this.filteredDomain;
    }
    this.yDomain = this.getYDomain();
    this.seriesDomain = this.getSeriesDomain();
    this.xScale = this.getXScale(this.xDomain, this.dims.width);
    this.yScale = this.getYScale(this.yDomain, this.dims.height);
    this.updateTimeline();
    this.setColors();
    this.legendOptions = this.getLegendOptions();
    this.transform = `translate(${this.dims.xOffset}, ${this.margin[0]})`;
    this.clipPathId = "clip" + id().toString();
    this.clipPath = `url(#${this.clipPathId})`;
  }
  updateTimeline() {
    if (this.timeline) {
      this.timelineWidth = this.dims.width;
      this.timelineXDomain = this.getXDomain();
      this.timelineXScale = this.getXScale(this.timelineXDomain, this.timelineWidth);
      this.timelineYScale = this.getYScale(this.yDomain, this.timelineHeight);
      this.timelineTransform = `translate(${this.dims.xOffset}, ${-this.margin[2]})`;
    }
  }
  getXDomain() {
    let values = getUniqueXDomainValues(this.results);
    this.scaleType = getScaleType(values);
    let domain = [];
    if (this.scaleType === ScaleType.Linear) {
      values = values.map((v) => Number(v));
    }
    let min4;
    let max4;
    if (this.scaleType === ScaleType.Time || this.scaleType === ScaleType.Linear) {
      min4 = this.xScaleMin ? this.xScaleMin : Math.min(...values);
      max4 = this.xScaleMax ? this.xScaleMax : Math.max(...values);
    }
    if (this.scaleType === ScaleType.Time) {
      domain = [new Date(min4), new Date(max4)];
      this.xSet = [...values].sort((a2, b) => {
        const aDate = a2.getTime();
        const bDate = b.getTime();
        if (aDate > bDate) return 1;
        if (bDate > aDate) return -1;
        return 0;
      });
    } else if (this.scaleType === ScaleType.Linear) {
      domain = [min4, max4];
      this.xSet = [...values].sort((a2, b) => a2 - b);
    } else {
      domain = values;
      this.xSet = values;
    }
    return domain;
  }
  getYDomain() {
    const domain = [];
    for (const results of this.results) {
      for (const d of results.series) {
        if (!domain.includes(d.value)) {
          domain.push(d.value);
        }
      }
    }
    const values = [...domain];
    if (!this.autoScale) {
      values.push(0);
    }
    if (this.baseValue !== "auto") {
      values.push(this.baseValue);
    }
    const min4 = this.yScaleMin ? this.yScaleMin : Math.min(...values);
    const max4 = this.yScaleMax ? this.yScaleMax : Math.max(...values);
    return [min4, max4];
  }
  getSeriesDomain() {
    return this.results.map((d) => d.name);
  }
  getXScale(domain, width) {
    let scale;
    if (this.scaleType === ScaleType.Time) {
      scale = time();
    } else if (this.scaleType === ScaleType.Linear) {
      scale = linear();
    } else if (this.scaleType === ScaleType.Ordinal) {
      scale = point().padding(0.1);
    }
    scale.range([0, width]).domain(domain);
    return this.roundDomains ? scale.nice() : scale;
  }
  getYScale(domain, height) {
    const scale = linear().range([height, 0]).domain(domain);
    return this.roundDomains ? scale.nice() : scale;
  }
  getScaleType(values) {
    let date = true;
    let num = true;
    for (const value2 of values) {
      if (isDate(value2)) {
        date = false;
      }
      if (isNumber(value2)) {
        num = false;
      }
    }
    if (date) {
      return ScaleType.Time;
    }
    if (num) {
      return ScaleType.Linear;
    }
    return ScaleType.Ordinal;
  }
  updateDomain(domain) {
    this.filteredDomain = domain;
    this.xDomain = this.filteredDomain;
    this.xScale = this.getXScale(this.xDomain, this.dims.width);
  }
  updateHoveredVertical(item) {
    this.hoveredVertical = item.value;
    this.deactivateAll();
  }
  hideCircles() {
    this.hoveredVertical = null;
    this.deactivateAll();
  }
  onClick(data, series) {
    if (series) {
      data.series = series.name;
    }
    this.select.emit(data);
  }
  setColors() {
    let domain;
    if (this.schemeType === ScaleType.Ordinal) {
      domain = this.seriesDomain;
    } else {
      domain = this.yDomain;
    }
    this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
  }
  getLegendOptions() {
    const opts = {
      scaleType: this.schemeType,
      colors: void 0,
      domain: [],
      title: void 0,
      position: this.legendPosition
    };
    if (opts.scaleType === ScaleType.Ordinal) {
      opts.domain = this.seriesDomain;
      opts.colors = this.colors;
      opts.title = this.legendTitle;
    } else {
      opts.domain = this.yDomain;
      opts.colors = this.colors.scale;
    }
    return opts;
  }
  updateYAxisWidth({
    width
  }) {
    this.yAxisWidth = width;
    this.update();
  }
  updateXAxisHeight({
    height
  }) {
    this.xAxisHeight = height;
    this.update();
  }
  onActivate(item) {
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value;
    });
    if (idx > -1) {
      return;
    }
    this.activeEntries = [item, ...this.activeEntries];
    this.activate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  onDeactivate(item) {
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value;
    });
    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];
    this.deactivate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  deactivateAll() {
    this.activeEntries = [...this.activeEntries];
    for (const entry of this.activeEntries) {
      this.deactivate.emit({
        value: entry,
        entries: []
      });
    }
    this.activeEntries = [];
  }
};
AreaChartComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵAreaChartComponent_BaseFactory;
  return function AreaChartComponent_Factory(t) {
    return (ɵAreaChartComponent_BaseFactory || (ɵAreaChartComponent_BaseFactory = ɵɵgetInheritedFactory(AreaChartComponent)))(t || AreaChartComponent);
  };
})();
AreaChartComponent.ɵcmp = ɵɵdefineComponent({
  type: AreaChartComponent,
  selectors: [["ngx-charts-area-chart"]],
  contentQueries: function AreaChartComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
      ɵɵcontentQuery(dirIndex, _c23, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.seriesTooltipTemplate = _t.first);
    }
  },
  hostBindings: function AreaChartComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mouseleave", function AreaChartComponent_mouseleave_HostBindingHandler() {
        return ctx.hideCircles();
      });
    }
  },
  inputs: {
    legend: "legend",
    legendTitle: "legendTitle",
    legendPosition: "legendPosition",
    xAxis: "xAxis",
    yAxis: "yAxis",
    baseValue: "baseValue",
    autoScale: "autoScale",
    showXAxisLabel: "showXAxisLabel",
    showYAxisLabel: "showYAxisLabel",
    xAxisLabel: "xAxisLabel",
    yAxisLabel: "yAxisLabel",
    timeline: "timeline",
    gradient: "gradient",
    showGridLines: "showGridLines",
    curve: "curve",
    activeEntries: "activeEntries",
    schemeType: "schemeType",
    trimXAxisTicks: "trimXAxisTicks",
    trimYAxisTicks: "trimYAxisTicks",
    rotateXAxisTicks: "rotateXAxisTicks",
    maxXAxisTickLength: "maxXAxisTickLength",
    maxYAxisTickLength: "maxYAxisTickLength",
    xAxisTickFormatting: "xAxisTickFormatting",
    yAxisTickFormatting: "yAxisTickFormatting",
    xAxisTicks: "xAxisTicks",
    yAxisTicks: "yAxisTicks",
    roundDomains: "roundDomains",
    tooltipDisabled: "tooltipDisabled",
    xScaleMin: "xScaleMin",
    xScaleMax: "xScaleMax",
    yScaleMin: "yScaleMin",
    yScaleMax: "yScaleMax",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 11,
  vars: 20,
  consts: [[3, "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate", "view", "showLegend", "legendOptions", "activeEntries", "animations"], [1, "area-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "mouseleave", 4, "ngIf"], ["ngx-charts-timeline", "", 3, "results", "view", "height", "scheme", "customColors", "legend", "scaleType", "onDomainChange", 4, "ngIf"], ["ngx-charts-x-axis", "", 3, "dimensionsChanged", "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"], ["ngx-charts-y-axis", "", 3, "dimensionsChanged", "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"], ["ngx-charts-area-series", "", 3, "xScale", "yScale", "baseValue", "colors", "data", "activeEntries", "scaleType", "gradient", "curve", "animations"], [3, "mouseleave"], ["ngx-charts-tooltip-area", "", 3, "hover", "dims", "xSet", "xScale", "yScale", "results", "colors", "tooltipDisabled", "tooltipTemplate"], [4, "ngFor", "ngForOf"], ["ngx-charts-circle-series", "", 3, "select", "activate", "deactivate", "xScale", "yScale", "colors", "activeEntries", "data", "scaleType", "visibleValue", "tooltipDisabled", "tooltipTemplate"], ["ngx-charts-timeline", "", 3, "onDomainChange", "results", "view", "height", "scheme", "customColors", "legend", "scaleType"], ["ngx-charts-area-series", "", 3, "xScale", "yScale", "baseValue", "colors", "data", "scaleType", "gradient", "curve", "animations"]],
  template: function AreaChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵlistener("legendLabelClick", function AreaChartComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) {
        return ctx.onClick($event);
      })("legendLabelActivate", function AreaChartComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) {
        return ctx.onActivate($event);
      })("legendLabelDeactivate", function AreaChartComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) {
        return ctx.onDeactivate($event);
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "defs")(2, "clipPath");
      ɵɵelement(3, "rect");
      ɵɵelementEnd()();
      ɵɵelementStart(4, "g", 1);
      ɵɵtemplate(5, AreaChartComponent__svg_g_5_Template, 1, 11, "g", 2)(6, AreaChartComponent__svg_g_6_Template, 1, 10, "g", 3);
      ɵɵelementStart(7, "g");
      ɵɵtemplate(8, AreaChartComponent__svg_g_8_Template, 2, 10, "g", 4)(9, AreaChartComponent__svg_g_9_Template, 3, 9, "g", 5);
      ɵɵelementEnd()();
      ɵɵtemplate(10, AreaChartComponent__svg_g_10_Template, 2, 13, "g", 6);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(17, _c24, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
      ɵɵadvance(2);
      ɵɵattribute("id", ctx.clipPathId);
      ɵɵadvance();
      ɵɵattribute("width", ctx.dims.width + 10)("height", ctx.dims.height + 10)("transform", "translate(-5, -5)");
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.xAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.yAxis);
      ɵɵadvance();
      ɵɵattribute("clip-path", ctx.clipPath);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.tooltipDisabled);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.timeline && ctx.scaleType != "ordinal");
    }
  },
  dependencies: [ChartComponent, XAxisComponent, YAxisComponent, AreaSeriesComponent, TooltipArea, CircleSeriesComponent, Timeline, NgIf, NgForOf],
  styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AreaChartComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-area-chart",
      template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
    >
      <svg:defs>
        <svg:clipPath [attr.id]="clipPathId">
          <svg:rect
            [attr.width]="dims.width + 10"
            [attr.height]="dims.height + 10"
            [attr.transform]="'translate(-5, -5)'"
          />
        </svg:clipPath>
      </svg:defs>
      <svg:g [attr.transform]="transform" class="area-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g [attr.clip-path]="clipPath">
          <svg:g *ngFor="let series of results; trackBy: trackBy">
            <svg:g
              ngx-charts-area-series
              [xScale]="xScale"
              [yScale]="yScale"
              [baseValue]="baseValue"
              [colors]="colors"
              [data]="series"
              [activeEntries]="activeEntries"
              [scaleType]="scaleType"
              [gradient]="gradient"
              [curve]="curve"
              [animations]="animations"
            />
          </svg:g>

          <svg:g *ngIf="!tooltipDisabled" (mouseleave)="hideCircles()">
            <svg:g
              ngx-charts-tooltip-area
              [dims]="dims"
              [xSet]="xSet"
              [xScale]="xScale"
              [yScale]="yScale"
              [results]="results"
              [colors]="colors"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="seriesTooltipTemplate"
              (hover)="updateHoveredVertical($event)"
            />

            <svg:g *ngFor="let series of results">
              <svg:g
                ngx-charts-circle-series
                [xScale]="xScale"
                [yScale]="yScale"
                [colors]="colors"
                [activeEntries]="activeEntries"
                [data]="series"
                [scaleType]="scaleType"
                [visibleValue]="hoveredVertical"
                [tooltipDisabled]="tooltipDisabled"
                [tooltipTemplate]="tooltipTemplate"
                (select)="onClick($event, series)"
                (activate)="onActivate($event)"
                (deactivate)="onDeactivate($event)"
              />
            </svg:g>
          </svg:g>
        </svg:g>
      </svg:g>
      <svg:g
        ngx-charts-timeline
        *ngIf="timeline && scaleType != 'ordinal'"
        [attr.transform]="timelineTransform"
        [results]="results"
        [view]="[timelineWidth, height]"
        [height]="timelineHeight"
        [scheme]="scheme"
        [customColors]="customColors"
        [legend]="legend"
        [scaleType]="scaleType"
        (onDomainChange)="updateDomain($event)"
      >
        <svg:g *ngFor="let series of results; trackBy: trackBy">
          <svg:g
            ngx-charts-area-series
            [xScale]="timelineXScale"
            [yScale]="timelineYScale"
            [baseValue]="baseValue"
            [colors]="colors"
            [data]="series"
            [scaleType]="scaleType"
            [gradient]="gradient"
            [curve]="curve"
            [animations]="animations"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"]
    }]
  }], null, {
    legend: [{
      type: Input
    }],
    legendTitle: [{
      type: Input
    }],
    legendPosition: [{
      type: Input
    }],
    xAxis: [{
      type: Input
    }],
    yAxis: [{
      type: Input
    }],
    baseValue: [{
      type: Input
    }],
    autoScale: [{
      type: Input
    }],
    showXAxisLabel: [{
      type: Input
    }],
    showYAxisLabel: [{
      type: Input
    }],
    xAxisLabel: [{
      type: Input
    }],
    yAxisLabel: [{
      type: Input
    }],
    timeline: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    showGridLines: [{
      type: Input
    }],
    curve: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    schemeType: [{
      type: Input
    }],
    trimXAxisTicks: [{
      type: Input
    }],
    trimYAxisTicks: [{
      type: Input
    }],
    rotateXAxisTicks: [{
      type: Input
    }],
    maxXAxisTickLength: [{
      type: Input
    }],
    maxYAxisTickLength: [{
      type: Input
    }],
    xAxisTickFormatting: [{
      type: Input
    }],
    yAxisTickFormatting: [{
      type: Input
    }],
    xAxisTicks: [{
      type: Input
    }],
    yAxisTicks: [{
      type: Input
    }],
    roundDomains: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    xScaleMin: [{
      type: Input
    }],
    xScaleMax: [{
      type: Input
    }],
    yScaleMin: [{
      type: Input
    }],
    yScaleMax: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }],
    seriesTooltipTemplate: [{
      type: ContentChild,
      args: ["seriesTooltipTemplate"]
    }],
    hideCircles: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  });
})();
var AreaChartNormalizedComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.legend = false;
    this.legendTitle = "Legend";
    this.legendPosition = LegendPosition.Right;
    this.showXAxisLabel = false;
    this.showYAxisLabel = false;
    this.showGridLines = true;
    this.curve = linear_default;
    this.activeEntries = [];
    this.trimXAxisTicks = true;
    this.trimYAxisTicks = true;
    this.rotateXAxisTicks = true;
    this.maxXAxisTickLength = 16;
    this.maxYAxisTickLength = 16;
    this.roundDomains = false;
    this.tooltipDisabled = false;
    this.wrapTicks = false;
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.yDomain = [0, 100];
    this.margin = [10, 20, 10, 20];
    this.xAxisHeight = 0;
    this.yAxisWidth = 0;
    this.seriesType = SeriesType;
    this.timelineHeight = 50;
    this.timelinePadding = 10;
    this.trackBy = (index2, item) => {
      return item.name;
    };
  }
  update() {
    super.update();
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
      showXAxis: this.xAxis,
      showYAxis: this.yAxis,
      xAxisHeight: this.xAxisHeight,
      yAxisWidth: this.yAxisWidth,
      showXLabel: this.showXAxisLabel,
      showYLabel: this.showYAxisLabel,
      showLegend: this.legend,
      legendType: this.schemeType,
      legendPosition: this.legendPosition
    });
    if (this.timeline) {
      this.dims.height -= this.timelineHeight + this.margin[2] + this.timelinePadding;
    }
    this.xDomain = this.getXDomain();
    if (this.filteredDomain) {
      this.xDomain = this.filteredDomain;
    }
    this.seriesDomain = this.getSeriesDomain();
    this.xScale = this.getXScale(this.xDomain, this.dims.width);
    this.yScale = this.getYScale(this.yDomain, this.dims.height);
    for (let i = 0; i < this.xSet.length; i++) {
      const val = this.xSet[i];
      let d0 = 0;
      let total = 0;
      for (const group2 of this.results) {
        const d = group2.series.find((item) => {
          let a2 = item.name;
          let b = val;
          if (this.scaleType === ScaleType.Time) {
            a2 = a2.valueOf();
            b = b.valueOf();
          }
          return a2 === b;
        });
        if (d) {
          total += d.value;
        }
      }
      for (const group2 of this.results) {
        let d = group2.series.find((item) => {
          let a2 = item.name;
          let b = val;
          if (this.scaleType === ScaleType.Time) {
            a2 = a2.valueOf();
            b = b.valueOf();
          }
          return a2 === b;
        });
        if (d) {
          d.d0 = d0;
          d.d1 = d0 + d.value;
          d0 += d.value;
        } else {
          d = {
            name: val,
            value: 0,
            d0,
            d1: d0
          };
          group2.series.push(d);
        }
        if (total > 0) {
          d.d0 = d.d0 * 100 / total;
          d.d1 = d.d1 * 100 / total;
        } else {
          d.d0 = 0;
          d.d1 = 0;
        }
      }
    }
    this.updateTimeline();
    this.setColors();
    this.legendOptions = this.getLegendOptions();
    this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
    this.clipPathId = "clip" + id().toString();
    this.clipPath = `url(#${this.clipPathId})`;
  }
  updateTimeline() {
    if (this.timeline) {
      this.timelineWidth = this.dims.width;
      this.timelineXDomain = this.getXDomain();
      this.timelineXScale = this.getXScale(this.timelineXDomain, this.timelineWidth);
      this.timelineYScale = this.getYScale(this.yDomain, this.timelineHeight);
      this.timelineTransform = `translate(${this.dims.xOffset}, ${-this.margin[2]})`;
    }
  }
  getXDomain() {
    let values = getUniqueXDomainValues(this.results);
    this.scaleType = getScaleType(values);
    let domain = [];
    if (this.scaleType === ScaleType.Time) {
      const min4 = Math.min(...values);
      const max4 = Math.max(...values);
      domain = [new Date(min4), new Date(max4)];
      this.xSet = [...values].sort((a2, b) => {
        const aDate = a2.getTime();
        const bDate = b.getTime();
        if (aDate > bDate) return 1;
        if (bDate > aDate) return -1;
        return 0;
      });
    } else if (this.scaleType === ScaleType.Linear) {
      values = values.map((v) => Number(v));
      const min4 = Math.min(...values);
      const max4 = Math.max(...values);
      domain = [min4, max4];
      this.xSet = [...values].sort((a2, b) => a2 - b);
    } else {
      domain = values;
      this.xSet = values;
    }
    return domain;
  }
  getSeriesDomain() {
    return this.results.map((d) => d.name);
  }
  getXScale(domain, width) {
    let scale;
    if (this.scaleType === ScaleType.Time) {
      scale = time();
    } else if (this.scaleType === ScaleType.Linear) {
      scale = linear();
    } else if (this.scaleType === ScaleType.Ordinal) {
      scale = point().padding(0.1);
    }
    scale.range([0, width]).domain(domain);
    return this.roundDomains ? scale.nice() : scale;
  }
  getYScale(domain, height) {
    const scale = linear().range([height, 0]).domain(domain);
    return this.roundDomains ? scale.nice() : scale;
  }
  updateDomain(domain) {
    this.filteredDomain = domain;
    this.xDomain = this.filteredDomain;
    this.xScale = this.getXScale(this.xDomain, this.dims.width);
  }
  updateHoveredVertical(item) {
    this.hoveredVertical = item.value;
    this.deactivateAll();
  }
  hideCircles() {
    this.hoveredVertical = null;
    this.deactivateAll();
  }
  onClick(data, series) {
    if (series) {
      data.series = series.name;
    }
    this.select.emit(data);
  }
  setColors() {
    let domain;
    if (this.schemeType === ScaleType.Ordinal) {
      domain = this.seriesDomain;
    } else {
      domain = this.yDomain;
    }
    this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
  }
  getLegendOptions() {
    const opts = {
      scaleType: this.schemeType,
      colors: void 0,
      domain: [],
      title: void 0,
      position: this.legendPosition
    };
    if (opts.scaleType === ScaleType.Ordinal) {
      opts.domain = this.seriesDomain;
      opts.colors = this.colors;
      opts.title = this.legendTitle;
    } else {
      opts.domain = this.yDomain;
      opts.colors = this.colors.scale;
    }
    return opts;
  }
  updateYAxisWidth({
    width
  }) {
    this.yAxisWidth = width;
    this.update();
  }
  updateXAxisHeight({
    height
  }) {
    this.xAxisHeight = height;
    this.update();
  }
  onActivate(item) {
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value;
    });
    if (idx > -1) {
      return;
    }
    this.activeEntries = [item, ...this.activeEntries];
    this.activate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  onDeactivate(item) {
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value;
    });
    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];
    this.deactivate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  deactivateAll() {
    this.activeEntries = [...this.activeEntries];
    for (const entry of this.activeEntries) {
      this.deactivate.emit({
        value: entry,
        entries: []
      });
    }
    this.activeEntries = [];
  }
};
AreaChartNormalizedComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵAreaChartNormalizedComponent_BaseFactory;
  return function AreaChartNormalizedComponent_Factory(t) {
    return (ɵAreaChartNormalizedComponent_BaseFactory || (ɵAreaChartNormalizedComponent_BaseFactory = ɵɵgetInheritedFactory(AreaChartNormalizedComponent)))(t || AreaChartNormalizedComponent);
  };
})();
AreaChartNormalizedComponent.ɵcmp = ɵɵdefineComponent({
  type: AreaChartNormalizedComponent,
  selectors: [["ngx-charts-area-chart-normalized"]],
  contentQueries: function AreaChartNormalizedComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
      ɵɵcontentQuery(dirIndex, _c23, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.seriesTooltipTemplate = _t.first);
    }
  },
  hostBindings: function AreaChartNormalizedComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mouseleave", function AreaChartNormalizedComponent_mouseleave_HostBindingHandler() {
        return ctx.hideCircles();
      });
    }
  },
  inputs: {
    legend: "legend",
    legendTitle: "legendTitle",
    legendPosition: "legendPosition",
    xAxis: "xAxis",
    yAxis: "yAxis",
    showXAxisLabel: "showXAxisLabel",
    showYAxisLabel: "showYAxisLabel",
    xAxisLabel: "xAxisLabel",
    yAxisLabel: "yAxisLabel",
    timeline: "timeline",
    gradient: "gradient",
    showGridLines: "showGridLines",
    curve: "curve",
    activeEntries: "activeEntries",
    schemeType: "schemeType",
    trimXAxisTicks: "trimXAxisTicks",
    trimYAxisTicks: "trimYAxisTicks",
    rotateXAxisTicks: "rotateXAxisTicks",
    maxXAxisTickLength: "maxXAxisTickLength",
    maxYAxisTickLength: "maxYAxisTickLength",
    xAxisTickFormatting: "xAxisTickFormatting",
    yAxisTickFormatting: "yAxisTickFormatting",
    xAxisTicks: "xAxisTicks",
    yAxisTicks: "yAxisTicks",
    roundDomains: "roundDomains",
    tooltipDisabled: "tooltipDisabled",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 11,
  vars: 20,
  consts: [[3, "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate", "view", "showLegend", "legendOptions", "activeEntries", "animations"], [1, "area-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "mouseleave", 4, "ngIf"], ["ngx-charts-timeline", "", 3, "results", "view", "height", "scheme", "customColors", "legend", "scaleType", "onDomainChange", 4, "ngIf"], ["ngx-charts-x-axis", "", 3, "dimensionsChanged", "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"], ["ngx-charts-y-axis", "", 3, "dimensionsChanged", "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"], ["ngx-charts-area-series", "", 3, "xScale", "yScale", "colors", "data", "scaleType", "activeEntries", "gradient", "normalized", "curve", "animations"], [3, "mouseleave"], ["ngx-charts-tooltip-area", "", 3, "hover", "dims", "xSet", "xScale", "yScale", "results", "colors", "showPercentage", "tooltipDisabled", "tooltipTemplate"], [4, "ngFor", "ngForOf"], ["ngx-charts-circle-series", "", 3, "select", "activate", "deactivate", "type", "xScale", "yScale", "colors", "activeEntries", "data", "scaleType", "visibleValue", "tooltipDisabled", "tooltipTemplate"], ["ngx-charts-timeline", "", 3, "onDomainChange", "results", "view", "height", "scheme", "customColors", "legend", "scaleType"], ["ngx-charts-area-series", "", 3, "xScale", "yScale", "colors", "data", "scaleType", "gradient", "normalized", "curve", "animations"]],
  template: function AreaChartNormalizedComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵlistener("legendLabelClick", function AreaChartNormalizedComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) {
        return ctx.onClick($event);
      })("legendLabelActivate", function AreaChartNormalizedComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) {
        return ctx.onActivate($event);
      })("legendLabelDeactivate", function AreaChartNormalizedComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) {
        return ctx.onDeactivate($event);
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "defs")(2, "clipPath");
      ɵɵelement(3, "rect");
      ɵɵelementEnd()();
      ɵɵelementStart(4, "g", 1);
      ɵɵtemplate(5, AreaChartNormalizedComponent__svg_g_5_Template, 1, 11, "g", 2)(6, AreaChartNormalizedComponent__svg_g_6_Template, 1, 10, "g", 3);
      ɵɵelementStart(7, "g");
      ɵɵtemplate(8, AreaChartNormalizedComponent__svg_g_8_Template, 2, 10, "g", 4)(9, AreaChartNormalizedComponent__svg_g_9_Template, 3, 10, "g", 5);
      ɵɵelementEnd()();
      ɵɵtemplate(10, AreaChartNormalizedComponent__svg_g_10_Template, 2, 13, "g", 6);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(17, _c24, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
      ɵɵadvance(2);
      ɵɵattribute("id", ctx.clipPathId);
      ɵɵadvance();
      ɵɵattribute("width", ctx.dims.width + 10)("height", ctx.dims.height + 10)("transform", "translate(-5, -5)");
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.xAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.yAxis);
      ɵɵadvance();
      ɵɵattribute("clip-path", ctx.clipPath);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.tooltipDisabled);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.timeline && ctx.scaleType != "ordinal");
    }
  },
  dependencies: [ChartComponent, XAxisComponent, YAxisComponent, AreaSeriesComponent, TooltipArea, CircleSeriesComponent, Timeline, NgIf, NgForOf],
  styles: [_c25],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AreaChartNormalizedComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-area-chart-normalized",
      template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
    >
      <svg:defs>
        <svg:clipPath [attr.id]="clipPathId">
          <svg:rect
            [attr.width]="dims.width + 10"
            [attr.height]="dims.height + 10"
            [attr.transform]="'translate(-5, -5)'"
          />
        </svg:clipPath>
      </svg:defs>
      <svg:g [attr.transform]="transform" class="area-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g [attr.clip-path]="clipPath">
          <svg:g *ngFor="let series of results; trackBy: trackBy">
            <svg:g
              ngx-charts-area-series
              [xScale]="xScale"
              [yScale]="yScale"
              [colors]="colors"
              [data]="series"
              [scaleType]="scaleType"
              [activeEntries]="activeEntries"
              [gradient]="gradient"
              [normalized]="true"
              [curve]="curve"
              [animations]="animations"
            />
          </svg:g>

          <svg:g *ngIf="!tooltipDisabled" (mouseleave)="hideCircles()">
            <svg:g
              ngx-charts-tooltip-area
              [dims]="dims"
              [xSet]="xSet"
              [xScale]="xScale"
              [yScale]="yScale"
              [results]="results"
              [colors]="colors"
              [showPercentage]="true"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="seriesTooltipTemplate"
              (hover)="updateHoveredVertical($event)"
            />

            <svg:g *ngFor="let series of results">
              <svg:g
                ngx-charts-circle-series
                [type]="seriesType.Stacked"
                [xScale]="xScale"
                [yScale]="yScale"
                [colors]="colors"
                [activeEntries]="activeEntries"
                [data]="series"
                [scaleType]="scaleType"
                [visibleValue]="hoveredVertical"
                [tooltipDisabled]="tooltipDisabled"
                [tooltipTemplate]="tooltipTemplate"
                (select)="onClick($event, series)"
                (activate)="onActivate($event)"
                (deactivate)="onDeactivate($event)"
              />
            </svg:g>
          </svg:g>
        </svg:g>
      </svg:g>
      <svg:g
        ngx-charts-timeline
        *ngIf="timeline && scaleType != 'ordinal'"
        [attr.transform]="timelineTransform"
        [results]="results"
        [view]="[timelineWidth, height]"
        [height]="timelineHeight"
        [scheme]="scheme"
        [customColors]="customColors"
        [legend]="legend"
        [scaleType]="scaleType"
        (onDomainChange)="updateDomain($event)"
      >
        <svg:g *ngFor="let series of results; trackBy: trackBy">
          <svg:g
            ngx-charts-area-series
            [xScale]="timelineXScale"
            [yScale]="timelineYScale"
            [colors]="colors"
            [data]="series"
            [scaleType]="scaleType"
            [gradient]="gradient"
            [normalized]="true"
            [curve]="curve"
            [animations]="animations"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"]
    }]
  }], null, {
    legend: [{
      type: Input
    }],
    legendTitle: [{
      type: Input
    }],
    legendPosition: [{
      type: Input
    }],
    xAxis: [{
      type: Input
    }],
    yAxis: [{
      type: Input
    }],
    showXAxisLabel: [{
      type: Input
    }],
    showYAxisLabel: [{
      type: Input
    }],
    xAxisLabel: [{
      type: Input
    }],
    yAxisLabel: [{
      type: Input
    }],
    timeline: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    showGridLines: [{
      type: Input
    }],
    curve: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    schemeType: [{
      type: Input
    }],
    trimXAxisTicks: [{
      type: Input
    }],
    trimYAxisTicks: [{
      type: Input
    }],
    rotateXAxisTicks: [{
      type: Input
    }],
    maxXAxisTickLength: [{
      type: Input
    }],
    maxYAxisTickLength: [{
      type: Input
    }],
    xAxisTickFormatting: [{
      type: Input
    }],
    yAxisTickFormatting: [{
      type: Input
    }],
    xAxisTicks: [{
      type: Input
    }],
    yAxisTicks: [{
      type: Input
    }],
    roundDomains: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }],
    seriesTooltipTemplate: [{
      type: ContentChild,
      args: ["seriesTooltipTemplate"]
    }],
    hideCircles: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  });
})();
var AreaChartStackedComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.legend = false;
    this.legendTitle = "Legend";
    this.legendPosition = LegendPosition.Right;
    this.xAxis = false;
    this.yAxis = false;
    this.timeline = false;
    this.showGridLines = true;
    this.curve = linear_default;
    this.activeEntries = [];
    this.trimXAxisTicks = true;
    this.trimYAxisTicks = true;
    this.rotateXAxisTicks = true;
    this.maxXAxisTickLength = 16;
    this.maxYAxisTickLength = 16;
    this.roundDomains = false;
    this.tooltipDisabled = false;
    this.wrapTicks = false;
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.margin = [10, 20, 10, 20];
    this.xAxisHeight = 0;
    this.yAxisWidth = 0;
    this.timelineHeight = 50;
    this.timelinePadding = 10;
    this.seriesType = SeriesType;
  }
  update() {
    super.update();
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
      showXAxis: this.xAxis,
      showYAxis: this.yAxis,
      xAxisHeight: this.xAxisHeight,
      yAxisWidth: this.yAxisWidth,
      showXLabel: this.showXAxisLabel,
      showYLabel: this.showYAxisLabel,
      showLegend: this.legend,
      legendType: this.schemeType,
      legendPosition: this.legendPosition
    });
    if (this.timeline) {
      this.dims.height -= this.timelineHeight + this.margin[2] + this.timelinePadding;
    }
    this.xDomain = this.getXDomain();
    if (this.filteredDomain) {
      this.xDomain = this.filteredDomain;
    }
    this.yDomain = this.getYDomain();
    this.seriesDomain = this.getSeriesDomain();
    this.xScale = this.getXScale(this.xDomain, this.dims.width);
    this.yScale = this.getYScale(this.yDomain, this.dims.height);
    for (let i = 0; i < this.xSet.length; i++) {
      const val = this.xSet[i];
      let d0 = 0;
      for (const group2 of this.results) {
        let d = group2.series.find((item) => {
          let a2 = item.name;
          let b = val;
          if (this.scaleType === ScaleType.Time) {
            a2 = a2.valueOf();
            b = b.valueOf();
          }
          return a2 === b;
        });
        if (d) {
          d.d0 = d0;
          d.d1 = d0 + d.value;
          d0 += d.value;
        } else {
          d = {
            name: val,
            value: 0,
            d0,
            d1: d0
          };
          group2.series.push(d);
        }
      }
    }
    this.updateTimeline();
    this.setColors();
    this.legendOptions = this.getLegendOptions();
    this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
    this.clipPathId = "clip" + id().toString();
    this.clipPath = `url(#${this.clipPathId})`;
  }
  updateTimeline() {
    if (this.timeline) {
      this.timelineWidth = this.dims.width;
      this.timelineXDomain = this.getXDomain();
      this.timelineXScale = this.getXScale(this.timelineXDomain, this.timelineWidth);
      this.timelineYScale = this.getYScale(this.yDomain, this.timelineHeight);
      this.timelineTransform = `translate(${this.dims.xOffset}, ${-this.margin[2]})`;
    }
  }
  getXDomain() {
    let values = getUniqueXDomainValues(this.results);
    this.scaleType = getScaleType(values);
    let domain = [];
    if (this.scaleType === ScaleType.Linear) {
      values = values.map((v) => Number(v));
    }
    let min4;
    let max4;
    if (this.scaleType === ScaleType.Time || this.scaleType === ScaleType.Linear) {
      min4 = this.xScaleMin ? this.xScaleMin : Math.min(...values);
      max4 = this.xScaleMax ? this.xScaleMax : Math.max(...values);
    }
    if (this.scaleType === ScaleType.Time) {
      domain = [new Date(min4), new Date(max4)];
      this.xSet = [...values].sort((a2, b) => {
        const aDate = a2.getTime();
        const bDate = b.getTime();
        if (aDate > bDate) return 1;
        if (bDate > aDate) return -1;
        return 0;
      });
    } else if (this.scaleType === ScaleType.Linear) {
      domain = [min4, max4];
      this.xSet = [...values].sort((a2, b) => a2 - b);
    } else {
      domain = values;
      this.xSet = values;
    }
    return domain;
  }
  getYDomain() {
    const domain = [];
    for (let i = 0; i < this.xSet.length; i++) {
      const val = this.xSet[i];
      let sum3 = 0;
      for (const group2 of this.results) {
        const d = group2.series.find((item) => {
          let a2 = item.name;
          let b = val;
          if (this.scaleType === ScaleType.Time) {
            a2 = a2.valueOf();
            b = b.valueOf();
          }
          return a2 === b;
        });
        if (d) {
          sum3 += d.value;
        }
      }
      domain.push(sum3);
    }
    const min4 = this.yScaleMin ? this.yScaleMin : Math.min(0, ...domain);
    const max4 = this.yScaleMax ? this.yScaleMax : Math.max(...domain);
    return [min4, max4];
  }
  getSeriesDomain() {
    return this.results.map((d) => d.name);
  }
  getXScale(domain, width) {
    let scale;
    if (this.scaleType === ScaleType.Time) {
      scale = time();
    } else if (this.scaleType === ScaleType.Linear) {
      scale = linear();
    } else if (this.scaleType === ScaleType.Ordinal) {
      scale = point().padding(0.1);
    }
    scale.range([0, width]).domain(domain);
    return this.roundDomains ? scale.nice() : scale;
  }
  getYScale(domain, height) {
    const scale = linear().range([height, 0]).domain(domain);
    return this.roundDomains ? scale.nice() : scale;
  }
  updateDomain(domain) {
    this.filteredDomain = domain;
    this.xDomain = this.filteredDomain;
    this.xScale = this.getXScale(this.xDomain, this.dims.width);
  }
  updateHoveredVertical(item) {
    this.hoveredVertical = item.value;
    this.deactivateAll();
  }
  hideCircles() {
    this.hoveredVertical = null;
    this.deactivateAll();
  }
  onClick(data, series) {
    if (series) {
      data.series = series.name;
    }
    this.select.emit(data);
  }
  trackBy(index2, item) {
    return `${item.name}`;
  }
  setColors() {
    let domain;
    if (this.schemeType === ScaleType.Ordinal) {
      domain = this.seriesDomain;
    } else {
      domain = this.yDomain;
    }
    this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
  }
  getLegendOptions() {
    const opts = {
      scaleType: this.schemeType,
      colors: void 0,
      domain: [],
      title: void 0,
      position: this.legendPosition
    };
    if (opts.scaleType === ScaleType.Ordinal) {
      opts.domain = this.seriesDomain;
      opts.colors = this.colors;
      opts.title = this.legendTitle;
    } else {
      opts.domain = this.yDomain;
      opts.colors = this.colors.scale;
    }
    return opts;
  }
  updateYAxisWidth({
    width
  }) {
    this.yAxisWidth = width;
    this.update();
  }
  updateXAxisHeight({
    height
  }) {
    this.xAxisHeight = height;
    this.update();
  }
  onActivate(item) {
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value;
    });
    if (idx > -1) {
      return;
    }
    this.activeEntries = [item, ...this.activeEntries];
    this.activate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  onDeactivate(item) {
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value;
    });
    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];
    this.deactivate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  deactivateAll() {
    this.activeEntries = [...this.activeEntries];
    for (const entry of this.activeEntries) {
      this.deactivate.emit({
        value: entry,
        entries: []
      });
    }
    this.activeEntries = [];
  }
};
AreaChartStackedComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵAreaChartStackedComponent_BaseFactory;
  return function AreaChartStackedComponent_Factory(t) {
    return (ɵAreaChartStackedComponent_BaseFactory || (ɵAreaChartStackedComponent_BaseFactory = ɵɵgetInheritedFactory(AreaChartStackedComponent)))(t || AreaChartStackedComponent);
  };
})();
AreaChartStackedComponent.ɵcmp = ɵɵdefineComponent({
  type: AreaChartStackedComponent,
  selectors: [["ngx-charts-area-chart-stacked"]],
  contentQueries: function AreaChartStackedComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
      ɵɵcontentQuery(dirIndex, _c23, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.seriesTooltipTemplate = _t.first);
    }
  },
  hostBindings: function AreaChartStackedComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mouseleave", function AreaChartStackedComponent_mouseleave_HostBindingHandler() {
        return ctx.hideCircles();
      });
    }
  },
  inputs: {
    legend: "legend",
    legendTitle: "legendTitle",
    legendPosition: "legendPosition",
    xAxis: "xAxis",
    yAxis: "yAxis",
    showXAxisLabel: "showXAxisLabel",
    showYAxisLabel: "showYAxisLabel",
    xAxisLabel: "xAxisLabel",
    yAxisLabel: "yAxisLabel",
    timeline: "timeline",
    gradient: "gradient",
    showGridLines: "showGridLines",
    curve: "curve",
    activeEntries: "activeEntries",
    schemeType: "schemeType",
    trimXAxisTicks: "trimXAxisTicks",
    trimYAxisTicks: "trimYAxisTicks",
    rotateXAxisTicks: "rotateXAxisTicks",
    maxXAxisTickLength: "maxXAxisTickLength",
    maxYAxisTickLength: "maxYAxisTickLength",
    xAxisTickFormatting: "xAxisTickFormatting",
    yAxisTickFormatting: "yAxisTickFormatting",
    xAxisTicks: "xAxisTicks",
    yAxisTicks: "yAxisTicks",
    roundDomains: "roundDomains",
    tooltipDisabled: "tooltipDisabled",
    xScaleMin: "xScaleMin",
    xScaleMax: "xScaleMax",
    yScaleMin: "yScaleMin",
    yScaleMax: "yScaleMax",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 11,
  vars: 20,
  consts: [[3, "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate", "view", "showLegend", "legendOptions", "activeEntries", "animations"], [1, "area-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "mouseleave", 4, "ngIf"], ["ngx-charts-timeline", "", 3, "results", "view", "height", "scheme", "customColors", "legend", "scaleType", "onDomainChange", 4, "ngIf"], ["ngx-charts-x-axis", "", 3, "dimensionsChanged", "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"], ["ngx-charts-y-axis", "", 3, "dimensionsChanged", "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"], ["ngx-charts-area-series", "", 3, "xScale", "yScale", "colors", "data", "scaleType", "gradient", "activeEntries", "stacked", "curve", "animations"], [3, "mouseleave"], ["ngx-charts-tooltip-area", "", 3, "hover", "dims", "xSet", "xScale", "yScale", "results", "colors", "tooltipDisabled", "tooltipTemplate"], ["ngx-charts-circle-series", "", 3, "select", "activate", "deactivate", "type", "xScale", "yScale", "colors", "activeEntries", "data", "scaleType", "visibleValue", "tooltipDisabled", "tooltipTemplate"], ["ngx-charts-timeline", "", 3, "onDomainChange", "results", "view", "height", "scheme", "customColors", "legend", "scaleType"], ["ngx-charts-area-series", "", 3, "xScale", "yScale", "colors", "data", "scaleType", "gradient", "stacked", "curve", "animations"]],
  template: function AreaChartStackedComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵlistener("legendLabelClick", function AreaChartStackedComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) {
        return ctx.onClick($event);
      })("legendLabelActivate", function AreaChartStackedComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) {
        return ctx.onActivate($event);
      })("legendLabelDeactivate", function AreaChartStackedComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) {
        return ctx.onDeactivate($event);
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "defs")(2, "clipPath");
      ɵɵelement(3, "rect");
      ɵɵelementEnd()();
      ɵɵelementStart(4, "g", 1);
      ɵɵtemplate(5, AreaChartStackedComponent__svg_g_5_Template, 1, 11, "g", 2)(6, AreaChartStackedComponent__svg_g_6_Template, 1, 10, "g", 3);
      ɵɵelementStart(7, "g");
      ɵɵtemplate(8, AreaChartStackedComponent__svg_g_8_Template, 2, 10, "g", 4)(9, AreaChartStackedComponent__svg_g_9_Template, 3, 10, "g", 5);
      ɵɵelementEnd()();
      ɵɵtemplate(10, AreaChartStackedComponent__svg_g_10_Template, 2, 13, "g", 6);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(17, _c24, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
      ɵɵadvance(2);
      ɵɵattribute("id", ctx.clipPathId);
      ɵɵadvance();
      ɵɵattribute("width", ctx.dims.width + 10)("height", ctx.dims.height + 10)("transform", "translate(-5, -5)");
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.xAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.yAxis);
      ɵɵadvance();
      ɵɵattribute("clip-path", ctx.clipPath);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.tooltipDisabled);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.timeline && ctx.scaleType != "ordinal");
    }
  },
  dependencies: [ChartComponent, XAxisComponent, YAxisComponent, AreaSeriesComponent, TooltipArea, CircleSeriesComponent, Timeline, NgIf, NgForOf],
  styles: [_c25],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AreaChartStackedComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-area-chart-stacked",
      template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
    >
      <svg:defs>
        <svg:clipPath [attr.id]="clipPathId">
          <svg:rect
            [attr.width]="dims.width + 10"
            [attr.height]="dims.height + 10"
            [attr.transform]="'translate(-5, -5)'"
          />
        </svg:clipPath>
      </svg:defs>
      <svg:g [attr.transform]="transform" class="area-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g [attr.clip-path]="clipPath">
          <svg:g *ngFor="let series of results; trackBy: trackBy">
            <svg:g
              ngx-charts-area-series
              [xScale]="xScale"
              [yScale]="yScale"
              [colors]="colors"
              [data]="series"
              [scaleType]="scaleType"
              [gradient]="gradient"
              [activeEntries]="activeEntries"
              [stacked]="true"
              [curve]="curve"
              [animations]="animations"
            />
          </svg:g>

          <svg:g *ngIf="!tooltipDisabled" (mouseleave)="hideCircles()">
            <svg:g
              ngx-charts-tooltip-area
              [dims]="dims"
              [xSet]="xSet"
              [xScale]="xScale"
              [yScale]="yScale"
              [results]="results"
              [colors]="colors"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="seriesTooltipTemplate"
              (hover)="updateHoveredVertical($event)"
            />

            <svg:g *ngFor="let series of results; trackBy: trackBy">
              <svg:g
                ngx-charts-circle-series
                [type]="seriesType.Stacked"
                [xScale]="xScale"
                [yScale]="yScale"
                [colors]="colors"
                [activeEntries]="activeEntries"
                [data]="series"
                [scaleType]="scaleType"
                [visibleValue]="hoveredVertical"
                [tooltipDisabled]="tooltipDisabled"
                [tooltipTemplate]="tooltipTemplate"
                (select)="onClick($event, series)"
                (activate)="onActivate($event)"
                (deactivate)="onDeactivate($event)"
              />
            </svg:g>
          </svg:g>
        </svg:g>
      </svg:g>
      <svg:g
        ngx-charts-timeline
        *ngIf="timeline && scaleType != 'ordinal'"
        [attr.transform]="timelineTransform"
        [results]="results"
        [view]="[timelineWidth, height]"
        [height]="timelineHeight"
        [scheme]="scheme"
        [customColors]="customColors"
        [legend]="legend"
        [scaleType]="scaleType"
        (onDomainChange)="updateDomain($event)"
      >
        <svg:g *ngFor="let series of results; trackBy: trackBy">
          <svg:g
            ngx-charts-area-series
            [xScale]="timelineXScale"
            [yScale]="timelineYScale"
            [colors]="colors"
            [data]="series"
            [scaleType]="scaleType"
            [gradient]="gradient"
            [stacked]="true"
            [curve]="curve"
            [animations]="animations"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"]
    }]
  }], null, {
    legend: [{
      type: Input
    }],
    legendTitle: [{
      type: Input
    }],
    legendPosition: [{
      type: Input
    }],
    xAxis: [{
      type: Input
    }],
    yAxis: [{
      type: Input
    }],
    showXAxisLabel: [{
      type: Input
    }],
    showYAxisLabel: [{
      type: Input
    }],
    xAxisLabel: [{
      type: Input
    }],
    yAxisLabel: [{
      type: Input
    }],
    timeline: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    showGridLines: [{
      type: Input
    }],
    curve: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    schemeType: [{
      type: Input
    }],
    trimXAxisTicks: [{
      type: Input
    }],
    trimYAxisTicks: [{
      type: Input
    }],
    rotateXAxisTicks: [{
      type: Input
    }],
    maxXAxisTickLength: [{
      type: Input
    }],
    maxYAxisTickLength: [{
      type: Input
    }],
    xAxisTickFormatting: [{
      type: Input
    }],
    yAxisTickFormatting: [{
      type: Input
    }],
    xAxisTicks: [{
      type: Input
    }],
    yAxisTicks: [{
      type: Input
    }],
    roundDomains: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    xScaleMin: [{
      type: Input
    }],
    xScaleMax: [{
      type: Input
    }],
    yScaleMin: [{
      type: Input
    }],
    yScaleMax: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }],
    seriesTooltipTemplate: [{
      type: ContentChild,
      args: ["seriesTooltipTemplate"]
    }],
    hideCircles: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  });
})();
var AreaChartModule = class {
};
AreaChartModule.ɵfac = function AreaChartModule_Factory(t) {
  return new (t || AreaChartModule)();
};
AreaChartModule.ɵmod = ɵɵdefineNgModule({
  type: AreaChartModule,
  declarations: [AreaChartComponent, AreaChartNormalizedComponent, AreaChartStackedComponent, AreaSeriesComponent],
  imports: [ChartCommonModule],
  exports: [AreaChartComponent, AreaChartNormalizedComponent, AreaChartStackedComponent, AreaSeriesComponent]
});
AreaChartModule.ɵinj = ɵɵdefineInjector({
  imports: [[ChartCommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AreaChartModule, [{
    type: NgModule,
    args: [{
      imports: [ChartCommonModule],
      declarations: [AreaChartComponent, AreaChartNormalizedComponent, AreaChartStackedComponent, AreaSeriesComponent],
      exports: [AreaChartComponent, AreaChartNormalizedComponent, AreaChartStackedComponent, AreaSeriesComponent]
    }]
  }], null, null);
})();
var BarComponent = class {
  constructor(element) {
    this.roundEdges = true;
    this.gradient = false;
    this.offset = 0;
    this.isActive = false;
    this.animations = true;
    this.noBarWhenZero = true;
    this.select = new EventEmitter();
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.hasGradient = false;
    this.hideBar = false;
    this.element = element.nativeElement;
  }
  ngOnChanges(changes) {
    if (changes.roundEdges) {
      this.loadAnimation();
    }
    this.update();
  }
  update() {
    this.gradientId = "grad" + id().toString();
    this.gradientFill = `url(#${this.gradientId})`;
    if (this.gradient || this.stops) {
      this.gradientStops = this.getGradient();
      this.hasGradient = true;
    } else {
      this.hasGradient = false;
    }
    this.updatePathEl();
    this.checkToHideBar();
  }
  loadAnimation() {
    this.path = this.getStartingPath();
    setTimeout(this.update.bind(this), 100);
  }
  updatePathEl() {
    const node = select_default(this.element).select(".bar");
    const path2 = this.getPath();
    if (this.animations) {
      node.transition().duration(500).attr("d", path2);
    } else {
      node.attr("d", path2);
    }
  }
  getGradient() {
    if (this.stops) {
      return this.stops;
    }
    return [{
      offset: 0,
      color: this.fill,
      opacity: this.getStartOpacity()
    }, {
      offset: 100,
      color: this.fill,
      opacity: 1
    }];
  }
  getStartingPath() {
    if (!this.animations) {
      return this.getPath();
    }
    let radius = this.getRadius();
    let path2;
    if (this.roundEdges) {
      if (this.orientation === BarOrientation.Vertical) {
        radius = Math.min(this.height, radius);
        path2 = roundedRect(this.x, this.y + this.height, this.width, 1, 0, this.edges);
      } else if (this.orientation === BarOrientation.Horizontal) {
        radius = Math.min(this.width, radius);
        path2 = roundedRect(this.x, this.y, 1, this.height, 0, this.edges);
      }
    } else {
      if (this.orientation === BarOrientation.Vertical) {
        path2 = roundedRect(this.x, this.y + this.height, this.width, 1, 0, this.edges);
      } else if (this.orientation === BarOrientation.Horizontal) {
        path2 = roundedRect(this.x, this.y, 1, this.height, 0, this.edges);
      }
    }
    return path2;
  }
  getPath() {
    let radius = this.getRadius();
    let path2;
    if (this.roundEdges) {
      if (this.orientation === BarOrientation.Vertical) {
        radius = Math.min(this.height, radius);
        path2 = roundedRect(this.x, this.y, this.width, this.height, radius, this.edges);
      } else if (this.orientation === BarOrientation.Horizontal) {
        radius = Math.min(this.width, radius);
        path2 = roundedRect(this.x, this.y, this.width, this.height, radius, this.edges);
      }
    } else {
      path2 = roundedRect(this.x, this.y, this.width, this.height, radius, this.edges);
    }
    return path2;
  }
  getRadius() {
    let radius = 0;
    if (this.roundEdges && this.height > 5 && this.width > 5) {
      radius = Math.floor(Math.min(5, this.height / 2, this.width / 2));
    }
    return radius;
  }
  getStartOpacity() {
    if (this.roundEdges) {
      return 0.2;
    } else {
      return 0.5;
    }
  }
  get edges() {
    let edges = [false, false, false, false];
    if (this.roundEdges) {
      if (this.orientation === BarOrientation.Vertical) {
        if (this.data.value > 0) {
          edges = [true, true, false, false];
        } else {
          edges = [false, false, true, true];
        }
      } else if (this.orientation === BarOrientation.Horizontal) {
        if (this.data.value > 0) {
          edges = [false, true, false, true];
        } else {
          edges = [true, false, true, false];
        }
      }
    }
    return edges;
  }
  onMouseEnter() {
    this.activate.emit(this.data);
  }
  onMouseLeave() {
    this.deactivate.emit(this.data);
  }
  checkToHideBar() {
    this.hideBar = this.noBarWhenZero && (this.orientation === BarOrientation.Vertical && this.height === 0 || this.orientation === BarOrientation.Horizontal && this.width === 0);
  }
};
BarComponent.ɵfac = function BarComponent_Factory(t) {
  return new (t || BarComponent)(ɵɵdirectiveInject(ElementRef));
};
BarComponent.ɵcmp = ɵɵdefineComponent({
  type: BarComponent,
  selectors: [["g", "ngx-charts-bar", ""]],
  hostBindings: function BarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mouseenter", function BarComponent_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function BarComponent_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
  },
  inputs: {
    fill: "fill",
    data: "data",
    width: "width",
    height: "height",
    x: "x",
    y: "y",
    orientation: "orientation",
    roundEdges: "roundEdges",
    gradient: "gradient",
    offset: "offset",
    isActive: "isActive",
    stops: "stops",
    animations: "animations",
    ariaLabel: "ariaLabel",
    noBarWhenZero: "noBarWhenZero"
  },
  outputs: {
    select: "select",
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c26,
  decls: 2,
  vars: 8,
  consts: [[4, "ngIf"], ["stroke", "none", "role", "img", "tabIndex", "-1", 1, "bar", 3, "click"], ["ngx-charts-svg-linear-gradient", "", 3, "orientation", "name", "stops"]],
  template: function BarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, BarComponent__svg_defs_0_Template, 2, 3, "defs", 0);
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "path", 1);
      ɵɵlistener("click", function BarComponent_Template_path_click_1_listener() {
        return ctx.select.emit(ctx.data);
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.hasGradient);
      ɵɵadvance();
      ɵɵclassProp("active", ctx.isActive)("hidden", ctx.hideBar);
      ɵɵattribute("d", ctx.path)("aria-label", ctx.ariaLabel)("fill", ctx.hasGradient ? ctx.gradientFill : ctx.fill);
    }
  },
  dependencies: [SvgLinearGradientComponent, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-bar]",
      template: `
    <svg:defs *ngIf="hasGradient">
      <svg:g ngx-charts-svg-linear-gradient [orientation]="orientation" [name]="gradientId" [stops]="gradientStops" />
    </svg:defs>
    <svg:path
      class="bar"
      stroke="none"
      role="img"
      tabIndex="-1"
      [class.active]="isActive"
      [class.hidden]="hideBar"
      [attr.d]="path"
      [attr.aria-label]="ariaLabel"
      [attr.fill]="hasGradient ? gradientFill : fill"
      (click)="select.emit(data)"
    />
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    fill: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    x: [{
      type: Input
    }],
    y: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    roundEdges: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    isActive: [{
      type: Input
    }],
    stops: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    noBarWhenZero: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    onMouseEnter: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    onMouseLeave: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  });
})();
var BarChartType;
(function(BarChartType2) {
  BarChartType2["Standard"] = "standard";
  BarChartType2["Normalized"] = "normalized";
  BarChartType2["Stacked"] = "stacked";
})(BarChartType || (BarChartType = {}));
var D0Types;
(function(D0Types2) {
  D0Types2["positive"] = "positive";
  D0Types2["negative"] = "negative";
})(D0Types || (D0Types = {}));
var BarLabelComponent = class {
  constructor(element) {
    this.dimensionsChanged = new EventEmitter();
    this.horizontalPadding = 2;
    this.verticalPadding = 5;
    this.element = element.nativeElement;
  }
  ngOnChanges(changes) {
    this.update();
  }
  getSize() {
    const h = this.element.getBoundingClientRect().height;
    const w = this.element.getBoundingClientRect().width;
    return {
      height: h,
      width: w,
      negative: this.value < 0
    };
  }
  ngAfterViewInit() {
    this.dimensionsChanged.emit(this.getSize());
  }
  update() {
    if (this.valueFormatting) {
      this.formatedValue = this.valueFormatting(this.value);
    } else {
      this.formatedValue = formatLabel(this.value);
    }
    if (this.orientation === "horizontal") {
      this.x = this.barX + this.barWidth;
      if (this.value < 0) {
        this.x = this.x - this.horizontalPadding;
        this.textAnchor = "end";
      } else {
        this.x = this.x + this.horizontalPadding;
        this.textAnchor = "start";
      }
      this.y = this.barY + this.barHeight / 2;
    } else {
      this.x = this.barX + this.barWidth / 2;
      this.y = this.barY + this.barHeight;
      if (this.value < 0) {
        this.y = this.y + this.verticalPadding;
        this.textAnchor = "end";
      } else {
        this.y = this.y - this.verticalPadding;
        this.textAnchor = "start";
      }
      this.transform = `rotate(-45, ${this.x} , ${this.y})`;
    }
  }
};
BarLabelComponent.ɵfac = function BarLabelComponent_Factory(t) {
  return new (t || BarLabelComponent)(ɵɵdirectiveInject(ElementRef));
};
BarLabelComponent.ɵcmp = ɵɵdefineComponent({
  type: BarLabelComponent,
  selectors: [["g", "ngx-charts-bar-label", ""]],
  inputs: {
    value: "value",
    valueFormatting: "valueFormatting",
    barX: "barX",
    barY: "barY",
    barWidth: "barWidth",
    barHeight: "barHeight",
    orientation: "orientation"
  },
  outputs: {
    dimensionsChanged: "dimensionsChanged"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c27,
  decls: 2,
  vars: 5,
  consts: [["alignment-baseline", "middle", 1, "textDataLabel"]],
  template: function BarLabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "text", 0);
      ɵɵtext(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵattribute("text-anchor", ctx.textAnchor)("transform", ctx.transform)("x", ctx.x)("y", ctx.y);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.formatedValue, " ");
    }
  },
  styles: [".textDataLabel[_ngcontent-%COMP%]{font-size:11px}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarLabelComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-bar-label]",
      template: `
    <svg:text
      class="textDataLabel"
      alignment-baseline="middle"
      [attr.text-anchor]="textAnchor"
      [attr.transform]="transform"
      [attr.x]="x"
      [attr.y]="y"
    >
      {{ formatedValue }}
    </svg:text>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".textDataLabel{font-size:11px}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    value: [{
      type: Input
    }],
    valueFormatting: [{
      type: Input
    }],
    barX: [{
      type: Input
    }],
    barY: [{
      type: Input
    }],
    barWidth: [{
      type: Input
    }],
    barHeight: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    dimensionsChanged: [{
      type: Output
    }]
  });
})();
var SeriesHorizontal = class {
  constructor() {
    this.type = BarChartType.Standard;
    this.tooltipDisabled = false;
    this.animations = true;
    this.showDataLabel = false;
    this.noBarWhenZero = true;
    this.select = new EventEmitter();
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.dataLabelWidthChanged = new EventEmitter();
    this.barsForDataLabels = [];
    this.barOrientation = BarOrientation;
  }
  ngOnChanges(changes) {
    this.update();
  }
  update() {
    this.updateTooltipSettings();
    const d0 = {
      [D0Types.positive]: 0,
      [D0Types.negative]: 0
    };
    let d0Type;
    d0Type = D0Types.positive;
    let total;
    if (this.type === BarChartType.Normalized) {
      total = this.series.map((d) => d.value).reduce((sum3, d) => sum3 + d, 0);
    }
    const xScaleMin = Math.max(this.xScale.domain()[0], 0);
    this.bars = this.series.map((d) => {
      let value2 = d.value;
      const label = this.getLabel(d);
      const formattedLabel = formatLabel(label);
      const roundEdges = this.roundEdges;
      d0Type = value2 > 0 ? D0Types.positive : D0Types.negative;
      const bar = {
        value: value2,
        label,
        roundEdges,
        data: d,
        formattedLabel
      };
      bar.height = this.yScale.bandwidth();
      if (this.type === BarChartType.Standard) {
        bar.width = Math.abs(this.xScale(value2) - this.xScale(xScaleMin));
        if (value2 < 0) {
          bar.x = this.xScale(value2);
        } else {
          bar.x = this.xScale(xScaleMin);
        }
        bar.y = this.yScale(label);
      } else if (this.type === BarChartType.Stacked) {
        const offset0 = d0[d0Type];
        const offset1 = offset0 + value2;
        d0[d0Type] += value2;
        bar.width = this.xScale(offset1) - this.xScale(offset0);
        bar.x = this.xScale(offset0);
        bar.y = 0;
        bar.offset0 = offset0;
        bar.offset1 = offset1;
      } else if (this.type === BarChartType.Normalized) {
        let offset0 = d0[d0Type];
        let offset1 = offset0 + value2;
        d0[d0Type] += value2;
        if (total > 0) {
          offset0 = offset0 * 100 / total;
          offset1 = offset1 * 100 / total;
        } else {
          offset0 = 0;
          offset1 = 0;
        }
        bar.width = this.xScale(offset1) - this.xScale(offset0);
        bar.x = this.xScale(offset0);
        bar.y = 0;
        bar.offset0 = offset0;
        bar.offset1 = offset1;
        value2 = (offset1 - offset0).toFixed(2) + "%";
      }
      if (this.colors.scaleType === ScaleType.Ordinal) {
        bar.color = this.colors.getColor(label);
      } else {
        if (this.type === BarChartType.Standard) {
          bar.color = this.colors.getColor(value2);
          bar.gradientStops = this.colors.getLinearGradientStops(value2);
        } else {
          bar.color = this.colors.getColor(bar.offset1);
          bar.gradientStops = this.colors.getLinearGradientStops(bar.offset1, bar.offset0);
        }
      }
      let tooltipLabel = formattedLabel;
      bar.ariaLabel = formattedLabel + " " + value2.toLocaleString();
      if (this.seriesName !== null && this.seriesName !== void 0) {
        tooltipLabel = `${this.seriesName} • ${formattedLabel}`;
        bar.data.series = this.seriesName;
        bar.ariaLabel = this.seriesName + " " + bar.ariaLabel;
      }
      bar.tooltipText = this.tooltipDisabled ? void 0 : `
        <span class="tooltip-label">${escapeLabel(tooltipLabel)}</span>
        <span class="tooltip-val">${this.dataLabelFormatting ? this.dataLabelFormatting(value2) : value2.toLocaleString()}</span>
      `;
      return bar;
    });
    this.updateDataLabels();
  }
  updateDataLabels() {
    if (this.type === BarChartType.Stacked) {
      this.barsForDataLabels = [];
      const section = {};
      section.series = this.seriesName;
      const totalPositive = this.series.map((d) => d.value).reduce((sum3, d) => d > 0 ? sum3 + d : sum3, 0);
      const totalNegative = this.series.map((d) => d.value).reduce((sum3, d) => d < 0 ? sum3 + d : sum3, 0);
      section.total = totalPositive + totalNegative;
      section.x = 0;
      section.y = 0;
      if (section.total > 0) {
        section.width = this.xScale(totalPositive);
      } else {
        section.width = this.xScale(totalNegative);
      }
      section.height = this.yScale.bandwidth();
      this.barsForDataLabels.push(section);
    } else {
      this.barsForDataLabels = this.series.map((d) => {
        const section = {};
        section.series = this.seriesName ?? d.label;
        section.total = d.value;
        section.x = this.xScale(0);
        section.y = this.yScale(d.label);
        section.width = this.xScale(section.total) - this.xScale(0);
        section.height = this.yScale.bandwidth();
        return section;
      });
    }
  }
  updateTooltipSettings() {
    this.tooltipPlacement = this.tooltipDisabled ? void 0 : PlacementTypes.Top;
    this.tooltipType = this.tooltipDisabled ? void 0 : StyleTypes.tooltip;
  }
  isActive(entry) {
    if (!this.activeEntries) return false;
    const item = this.activeEntries.find((active) => {
      return entry.name === active.name && entry.value === active.value;
    });
    return item !== void 0;
  }
  getLabel(dataItem) {
    if (dataItem.label) {
      return dataItem.label;
    }
    return dataItem.name;
  }
  trackBy(index2, bar) {
    return bar.label;
  }
  trackDataLabelBy(index2, barLabel) {
    return index2 + "#" + barLabel.series + "#" + barLabel.total;
  }
  click(data) {
    this.select.emit(data);
  }
};
SeriesHorizontal.ɵfac = function SeriesHorizontal_Factory(t) {
  return new (t || SeriesHorizontal)();
};
SeriesHorizontal.ɵcmp = ɵɵdefineComponent({
  type: SeriesHorizontal,
  selectors: [["g", "ngx-charts-series-horizontal", ""]],
  inputs: {
    dims: "dims",
    type: "type",
    series: "series",
    xScale: "xScale",
    yScale: "yScale",
    colors: "colors",
    tooltipDisabled: "tooltipDisabled",
    gradient: "gradient",
    activeEntries: "activeEntries",
    seriesName: "seriesName",
    tooltipTemplate: "tooltipTemplate",
    roundEdges: "roundEdges",
    animations: "animations",
    showDataLabel: "showDataLabel",
    dataLabelFormatting: "dataLabelFormatting",
    noBarWhenZero: "noBarWhenZero"
  },
  outputs: {
    select: "select",
    activate: "activate",
    deactivate: "deactivate",
    dataLabelWidthChanged: "dataLabelWidthChanged"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c28,
  decls: 2,
  vars: 3,
  consts: [["ngx-charts-bar", "", "ngx-tooltip", "", 3, "width", "height", "x", "y", "fill", "stops", "data", "orientation", "roundEdges", "gradient", "isActive", "ariaLabel", "animations", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "noBarWhenZero", "select", "activate", "deactivate", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["ngx-charts-bar", "", "ngx-tooltip", "", 3, "select", "activate", "deactivate", "width", "height", "x", "y", "fill", "stops", "data", "orientation", "roundEdges", "gradient", "isActive", "ariaLabel", "animations", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "noBarWhenZero"], ["ngx-charts-bar-label", "", 3, "barX", "barY", "barWidth", "barHeight", "value", "valueFormatting", "orientation", "dimensionsChanged", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-bar-label", "", 3, "dimensionsChanged", "barX", "barY", "barWidth", "barHeight", "value", "valueFormatting", "orientation"]],
  template: function SeriesHorizontal_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SeriesHorizontal__svg_g_0_Template, 1, 21, "g", 0)(1, SeriesHorizontal__svg_g_1_Template, 2, 2, "g", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.bars)("ngForTrackBy", ctx.trackBy);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showDataLabel);
    }
  },
  dependencies: [BarComponent, BarLabelComponent, NgForOf, TooltipDirective, NgIf],
  encapsulation: 2,
  data: {
    animation: [trigger("animationState", [transition(":leave", [style({
      opacity: 1
    }), animate(500, style({
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesHorizontal, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-series-horizontal]",
      template: `
    <svg:g
      ngx-charts-bar
      *ngFor="let bar of bars; trackBy: trackBy"
      [@animationState]="'active'"
      [width]="bar.width"
      [height]="bar.height"
      [x]="bar.x"
      [y]="bar.y"
      [fill]="bar.color"
      [stops]="bar.gradientStops"
      [data]="bar.data"
      [orientation]="barOrientation.Horizontal"
      [roundEdges]="bar.roundEdges"
      (select)="click($event)"
      [gradient]="gradient"
      [isActive]="isActive(bar.data)"
      [ariaLabel]="bar.ariaLabel"
      [animations]="animations"
      (activate)="activate.emit($event)"
      (deactivate)="deactivate.emit($event)"
      ngx-tooltip
      [tooltipDisabled]="tooltipDisabled"
      [tooltipPlacement]="tooltipPlacement"
      [tooltipType]="tooltipType"
      [tooltipTitle]="tooltipTemplate ? undefined : bar.tooltipText"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipContext]="bar.data"
      [noBarWhenZero]="noBarWhenZero"
    ></svg:g>
    <svg:g *ngIf="showDataLabel">
      <svg:g
        ngx-charts-bar-label
        *ngFor="let b of barsForDataLabels; let i = index; trackBy: trackDataLabelBy"
        [barX]="b.x"
        [barY]="b.y"
        [barWidth]="b.width"
        [barHeight]="b.height"
        [value]="b.total"
        [valueFormatting]="dataLabelFormatting"
        [orientation]="barOrientation.Horizontal"
        (dimensionsChanged)="dataLabelWidthChanged.emit({ size: $event, index: i })"
      />
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("animationState", [transition(":leave", [style({
        opacity: 1
      }), animate(500, style({
        opacity: 0
      }))])])]
    }]
  }], null, {
    dims: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    series: [{
      type: Input
    }],
    xScale: [{
      type: Input
    }],
    yScale: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    seriesName: [{
      type: Input
    }],
    tooltipTemplate: [{
      type: Input
    }],
    roundEdges: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    showDataLabel: [{
      type: Input
    }],
    dataLabelFormatting: [{
      type: Input
    }],
    noBarWhenZero: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    dataLabelWidthChanged: [{
      type: Output
    }]
  });
})();
var BarHorizontalComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.legend = false;
    this.legendTitle = "Legend";
    this.legendPosition = LegendPosition.Right;
    this.tooltipDisabled = false;
    this.showGridLines = true;
    this.activeEntries = [];
    this.trimXAxisTicks = true;
    this.trimYAxisTicks = true;
    this.rotateXAxisTicks = true;
    this.maxXAxisTickLength = 16;
    this.maxYAxisTickLength = 16;
    this.barPadding = 8;
    this.roundDomains = false;
    this.roundEdges = true;
    this.showDataLabel = false;
    this.noBarWhenZero = true;
    this.wrapTicks = false;
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.margin = [10, 20, 10, 20];
    this.xAxisHeight = 0;
    this.yAxisWidth = 0;
    this.dataLabelMaxWidth = {
      negative: 0,
      positive: 0
    };
  }
  update() {
    super.update();
    if (!this.showDataLabel) {
      this.dataLabelMaxWidth = {
        negative: 0,
        positive: 0
      };
    }
    this.margin = [10, 20 + this.dataLabelMaxWidth.positive, 10, 20 + this.dataLabelMaxWidth.negative];
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
      showXAxis: this.xAxis,
      showYAxis: this.yAxis,
      xAxisHeight: this.xAxisHeight,
      yAxisWidth: this.yAxisWidth,
      showXLabel: this.showXAxisLabel,
      showYLabel: this.showYAxisLabel,
      showLegend: this.legend,
      legendType: this.schemeType,
      legendPosition: this.legendPosition
    });
    this.formatDates();
    this.xScale = this.getXScale();
    this.yScale = this.getYScale();
    this.setColors();
    this.legendOptions = this.getLegendOptions();
    this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
  }
  getXScale() {
    this.xDomain = this.getXDomain();
    const scale = linear().range([0, this.dims.width]).domain(this.xDomain);
    return this.roundDomains ? scale.nice() : scale;
  }
  getYScale() {
    this.yDomain = this.getYDomain();
    const spacing = this.yDomain.length / (this.dims.height / this.barPadding + 1);
    return band().rangeRound([0, this.dims.height]).paddingInner(spacing).domain(this.yDomain);
  }
  getXDomain() {
    const values = this.results.map((d) => d.value);
    const min4 = this.xScaleMin ? Math.min(this.xScaleMin, ...values) : Math.min(0, ...values);
    const max4 = this.xScaleMax ? Math.max(this.xScaleMax, ...values) : Math.max(0, ...values);
    return [min4, max4];
  }
  getYDomain() {
    return this.results.map((d) => d.label);
  }
  onClick(data) {
    this.select.emit(data);
  }
  setColors() {
    let domain;
    if (this.schemeType === ScaleType.Ordinal) {
      domain = this.yDomain;
    } else {
      domain = this.xDomain;
    }
    this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
  }
  getLegendOptions() {
    const opts = {
      scaleType: this.schemeType,
      colors: void 0,
      domain: [],
      title: void 0,
      position: this.legendPosition
    };
    if (opts.scaleType === "ordinal") {
      opts.domain = this.yDomain;
      opts.colors = this.colors;
      opts.title = this.legendTitle;
    } else {
      opts.domain = this.xDomain;
      opts.colors = this.colors.scale;
    }
    return opts;
  }
  updateYAxisWidth({
    width
  }) {
    this.yAxisWidth = width;
    this.update();
  }
  updateXAxisHeight({
    height
  }) {
    this.xAxisHeight = height;
    this.update();
  }
  onDataLabelMaxWidthChanged(event) {
    if (event.size.negative) {
      this.dataLabelMaxWidth.negative = Math.max(this.dataLabelMaxWidth.negative, event.size.width);
    } else {
      this.dataLabelMaxWidth.positive = Math.max(this.dataLabelMaxWidth.positive, event.size.width);
    }
    if (event.index === this.results.length - 1) {
      setTimeout(() => this.update());
    }
  }
  onActivate(item, fromLegend = false) {
    item = this.results.find((d) => {
      if (fromLegend) {
        return d.label === item.name;
      } else {
        return d.name === item.name;
      }
    });
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value && d.series === item.series;
    });
    if (idx > -1) {
      return;
    }
    this.activeEntries = [item, ...this.activeEntries];
    this.activate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  onDeactivate(item, fromLegend = false) {
    item = this.results.find((d) => {
      if (fromLegend) {
        return d.label === item.name;
      } else {
        return d.name === item.name;
      }
    });
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value && d.series === item.series;
    });
    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];
    this.deactivate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
};
BarHorizontalComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵBarHorizontalComponent_BaseFactory;
  return function BarHorizontalComponent_Factory(t) {
    return (ɵBarHorizontalComponent_BaseFactory || (ɵBarHorizontalComponent_BaseFactory = ɵɵgetInheritedFactory(BarHorizontalComponent)))(t || BarHorizontalComponent);
  };
})();
BarHorizontalComponent.ɵcmp = ɵɵdefineComponent({
  type: BarHorizontalComponent,
  selectors: [["ngx-charts-bar-horizontal"]],
  contentQueries: function BarHorizontalComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    }
  },
  inputs: {
    legend: "legend",
    legendTitle: "legendTitle",
    legendPosition: "legendPosition",
    xAxis: "xAxis",
    yAxis: "yAxis",
    showXAxisLabel: "showXAxisLabel",
    showYAxisLabel: "showYAxisLabel",
    xAxisLabel: "xAxisLabel",
    yAxisLabel: "yAxisLabel",
    tooltipDisabled: "tooltipDisabled",
    gradient: "gradient",
    showGridLines: "showGridLines",
    activeEntries: "activeEntries",
    schemeType: "schemeType",
    trimXAxisTicks: "trimXAxisTicks",
    trimYAxisTicks: "trimYAxisTicks",
    rotateXAxisTicks: "rotateXAxisTicks",
    maxXAxisTickLength: "maxXAxisTickLength",
    maxYAxisTickLength: "maxYAxisTickLength",
    xAxisTickFormatting: "xAxisTickFormatting",
    yAxisTickFormatting: "yAxisTickFormatting",
    xAxisTicks: "xAxisTicks",
    yAxisTicks: "yAxisTicks",
    barPadding: "barPadding",
    roundDomains: "roundDomains",
    roundEdges: "roundEdges",
    xScaleMax: "xScaleMax",
    xScaleMin: "xScaleMin",
    showDataLabel: "showDataLabel",
    dataLabelFormatting: "dataLabelFormatting",
    noBarWhenZero: "noBarWhenZero",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 5,
  vars: 25,
  consts: [[3, "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate", "view", "showLegend", "legendOptions", "activeEntries", "animations"], [1, "bar-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "yAxisOffset", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-series-horizontal", "", 3, "select", "activate", "deactivate", "dataLabelWidthChanged", "xScale", "yScale", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "activeEntries", "roundEdges", "animations", "showDataLabel", "dataLabelFormatting", "noBarWhenZero"], ["ngx-charts-x-axis", "", 3, "dimensionsChanged", "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"], ["ngx-charts-y-axis", "", 3, "dimensionsChanged", "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "yAxisOffset", "wrapTicks"]],
  template: function BarHorizontalComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵlistener("legendLabelClick", function BarHorizontalComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) {
        return ctx.onClick($event);
      })("legendLabelActivate", function BarHorizontalComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) {
        return ctx.onActivate($event, true);
      })("legendLabelDeactivate", function BarHorizontalComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) {
        return ctx.onDeactivate($event, true);
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "g", 1);
      ɵɵtemplate(2, BarHorizontalComponent__svg_g_2_Template, 1, 11, "g", 2)(3, BarHorizontalComponent__svg_g_3_Template, 1, 10, "g", 3);
      ɵɵelementStart(4, "g", 4);
      ɵɵlistener("select", function BarHorizontalComponent_Template_g_select_4_listener($event) {
        return ctx.onClick($event);
      })("activate", function BarHorizontalComponent_Template_g_activate_4_listener($event) {
        return ctx.onActivate($event);
      })("deactivate", function BarHorizontalComponent_Template_g_deactivate_4_listener($event) {
        return ctx.onDeactivate($event);
      })("dataLabelWidthChanged", function BarHorizontalComponent_Template_g_dataLabelWidthChanged_4_listener($event) {
        return ctx.onDataLabelMaxWidthChanged($event);
      });
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(22, _c24, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.xAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.yAxis);
      ɵɵadvance();
      ɵɵproperty("xScale", ctx.xScale)("yScale", ctx.yScale)("colors", ctx.colors)("series", ctx.results)("dims", ctx.dims)("gradient", ctx.gradient)("tooltipDisabled", ctx.tooltipDisabled)("tooltipTemplate", ctx.tooltipTemplate)("activeEntries", ctx.activeEntries)("roundEdges", ctx.roundEdges)("animations", ctx.animations)("showDataLabel", ctx.showDataLabel)("dataLabelFormatting", ctx.dataLabelFormatting)("noBarWhenZero", ctx.noBarWhenZero);
    }
  },
  dependencies: [ChartComponent, XAxisComponent, YAxisComponent, SeriesHorizontal, NgIf],
  styles: [_c25],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarHorizontalComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-bar-horizontal",
      template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event, true)"
      (legendLabelDeactivate)="onDeactivate($event, true)"
    >
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          [yAxisOffset]="dataLabelMaxWidth.negative"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g
          ngx-charts-series-horizontal
          [xScale]="xScale"
          [yScale]="yScale"
          [colors]="colors"
          [series]="results"
          [dims]="dims"
          [gradient]="gradient"
          [tooltipDisabled]="tooltipDisabled"
          [tooltipTemplate]="tooltipTemplate"
          [activeEntries]="activeEntries"
          [roundEdges]="roundEdges"
          [animations]="animations"
          [showDataLabel]="showDataLabel"
          [dataLabelFormatting]="dataLabelFormatting"
          [noBarWhenZero]="noBarWhenZero"
          (select)="onClick($event)"
          (activate)="onActivate($event)"
          (deactivate)="onDeactivate($event)"
          (dataLabelWidthChanged)="onDataLabelMaxWidthChanged($event)"
        ></svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"]
    }]
  }], null, {
    legend: [{
      type: Input
    }],
    legendTitle: [{
      type: Input
    }],
    legendPosition: [{
      type: Input
    }],
    xAxis: [{
      type: Input
    }],
    yAxis: [{
      type: Input
    }],
    showXAxisLabel: [{
      type: Input
    }],
    showYAxisLabel: [{
      type: Input
    }],
    xAxisLabel: [{
      type: Input
    }],
    yAxisLabel: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    showGridLines: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    schemeType: [{
      type: Input
    }],
    trimXAxisTicks: [{
      type: Input
    }],
    trimYAxisTicks: [{
      type: Input
    }],
    rotateXAxisTicks: [{
      type: Input
    }],
    maxXAxisTickLength: [{
      type: Input
    }],
    maxYAxisTickLength: [{
      type: Input
    }],
    xAxisTickFormatting: [{
      type: Input
    }],
    yAxisTickFormatting: [{
      type: Input
    }],
    xAxisTicks: [{
      type: Input
    }],
    yAxisTicks: [{
      type: Input
    }],
    barPadding: [{
      type: Input
    }],
    roundDomains: [{
      type: Input
    }],
    roundEdges: [{
      type: Input
    }],
    xScaleMax: [{
      type: Input
    }],
    xScaleMin: [{
      type: Input
    }],
    showDataLabel: [{
      type: Input
    }],
    dataLabelFormatting: [{
      type: Input
    }],
    noBarWhenZero: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }]
  });
})();
var BarHorizontal2DComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.legend = false;
    this.legendTitle = "Legend";
    this.legendPosition = LegendPosition.Right;
    this.tooltipDisabled = false;
    this.showGridLines = true;
    this.activeEntries = [];
    this.trimXAxisTicks = true;
    this.trimYAxisTicks = true;
    this.rotateXAxisTicks = true;
    this.maxXAxisTickLength = 16;
    this.maxYAxisTickLength = 16;
    this.groupPadding = 16;
    this.barPadding = 8;
    this.roundDomains = false;
    this.roundEdges = true;
    this.showDataLabel = false;
    this.noBarWhenZero = true;
    this.wrapTicks = false;
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.margin = [10, 20, 10, 20];
    this.xAxisHeight = 0;
    this.yAxisWidth = 0;
    this.dataLabelMaxWidth = {
      negative: 0,
      positive: 0
    };
    this.isSSR = false;
    this.barOrientation = BarOrientation;
    this.trackBy = (index2, item) => {
      return item.name;
    };
  }
  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.isSSR = true;
    }
  }
  update() {
    super.update();
    if (!this.showDataLabel) {
      this.dataLabelMaxWidth = {
        negative: 0,
        positive: 0
      };
    }
    this.margin = [10, 20 + this.dataLabelMaxWidth.positive, 10, 20 + this.dataLabelMaxWidth.negative];
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
      showXAxis: this.xAxis,
      showYAxis: this.yAxis,
      xAxisHeight: this.xAxisHeight,
      yAxisWidth: this.yAxisWidth,
      showXLabel: this.showXAxisLabel,
      showYLabel: this.showYAxisLabel,
      showLegend: this.legend,
      legendType: this.schemeType,
      legendPosition: this.legendPosition
    });
    this.formatDates();
    this.groupDomain = this.getGroupDomain();
    this.innerDomain = this.getInnerDomain();
    this.valueDomain = this.getValueDomain();
    this.groupScale = this.getGroupScale();
    this.innerScale = this.getInnerScale();
    this.valueScale = this.getValueScale();
    this.setColors();
    this.legendOptions = this.getLegendOptions();
    this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
  }
  getGroupScale() {
    const spacing = this.groupDomain.length / (this.dims.height / this.groupPadding + 1);
    return band().rangeRound([0, this.dims.height]).paddingInner(spacing).paddingOuter(spacing / 2).domain(this.groupDomain);
  }
  getInnerScale() {
    const height = this.groupScale.bandwidth();
    const spacing = this.innerDomain.length / (height / this.barPadding + 1);
    return band().rangeRound([0, height]).paddingInner(spacing).domain(this.innerDomain);
  }
  getValueScale() {
    const scale = linear().range([0, this.dims.width]).domain(this.valueDomain);
    return this.roundDomains ? scale.nice() : scale;
  }
  getGroupDomain() {
    const domain = [];
    for (const group2 of this.results) {
      if (!domain.includes(group2.label)) {
        domain.push(group2.label);
      }
    }
    return domain;
  }
  getInnerDomain() {
    const domain = [];
    for (const group2 of this.results) {
      for (const d of group2.series) {
        if (!domain.includes(d.label)) {
          domain.push(d.label);
        }
      }
    }
    return domain;
  }
  getValueDomain() {
    const domain = [];
    for (const group2 of this.results) {
      for (const d of group2.series) {
        if (!domain.includes(d.value)) {
          domain.push(d.value);
        }
      }
    }
    const min4 = Math.min(0, ...domain);
    const max4 = this.xScaleMax ? Math.max(this.xScaleMax, ...domain) : Math.max(0, ...domain);
    return [min4, max4];
  }
  groupTransform(group2) {
    return `translate(0, ${this.groupScale(group2.label)})`;
  }
  onClick(data, group2) {
    if (group2) {
      data.series = group2.name;
    }
    this.select.emit(data);
  }
  setColors() {
    let domain;
    if (this.schemeType === ScaleType.Ordinal) {
      domain = this.innerDomain;
    } else {
      domain = this.valueDomain;
    }
    this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
  }
  getLegendOptions() {
    const opts = {
      scaleType: this.schemeType,
      colors: void 0,
      domain: [],
      title: void 0,
      position: this.legendPosition
    };
    if (opts.scaleType === ScaleType.Ordinal) {
      opts.domain = this.innerDomain;
      opts.colors = this.colors;
      opts.title = this.legendTitle;
    } else {
      opts.domain = this.valueDomain;
      opts.colors = this.colors.scale;
    }
    return opts;
  }
  updateYAxisWidth({
    width
  }) {
    this.yAxisWidth = width;
    this.update();
  }
  updateXAxisHeight({
    height
  }) {
    this.xAxisHeight = height;
    this.update();
  }
  onDataLabelMaxWidthChanged(event, groupIndex) {
    if (event.size.negative) {
      this.dataLabelMaxWidth.negative = Math.max(this.dataLabelMaxWidth.negative, event.size.width);
    } else {
      this.dataLabelMaxWidth.positive = Math.max(this.dataLabelMaxWidth.positive, event.size.width);
    }
    if (groupIndex === this.results.length - 1) {
      setTimeout(() => this.update());
    }
  }
  onActivate(event, group2, fromLegend = false) {
    const item = Object.assign({}, event);
    if (group2) {
      item.series = group2.name;
    }
    const items = this.results.map((g) => g.series).flat().filter((i) => {
      if (fromLegend) {
        return i.label === item.name;
      } else {
        return i.name === item.name && i.series === item.series;
      }
    });
    this.activeEntries = [...items];
    this.activate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  onDeactivate(event, group2, fromLegend = false) {
    const item = Object.assign({}, event);
    if (group2) {
      item.series = group2.name;
    }
    this.activeEntries = this.activeEntries.filter((i) => {
      if (fromLegend) {
        return i.label !== item.name;
      } else {
        return !(i.name === item.name && i.series === item.series);
      }
    });
    this.deactivate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
};
BarHorizontal2DComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵBarHorizontal2DComponent_BaseFactory;
  return function BarHorizontal2DComponent_Factory(t) {
    return (ɵBarHorizontal2DComponent_BaseFactory || (ɵBarHorizontal2DComponent_BaseFactory = ɵɵgetInheritedFactory(BarHorizontal2DComponent)))(t || BarHorizontal2DComponent);
  };
})();
BarHorizontal2DComponent.ɵcmp = ɵɵdefineComponent({
  type: BarHorizontal2DComponent,
  selectors: [["ngx-charts-bar-horizontal-2d"]],
  contentQueries: function BarHorizontal2DComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    }
  },
  inputs: {
    legend: "legend",
    legendTitle: "legendTitle",
    legendPosition: "legendPosition",
    xAxis: "xAxis",
    yAxis: "yAxis",
    showXAxisLabel: "showXAxisLabel",
    showYAxisLabel: "showYAxisLabel",
    xAxisLabel: "xAxisLabel",
    yAxisLabel: "yAxisLabel",
    tooltipDisabled: "tooltipDisabled",
    gradient: "gradient",
    showGridLines: "showGridLines",
    activeEntries: "activeEntries",
    schemeType: "schemeType",
    trimXAxisTicks: "trimXAxisTicks",
    trimYAxisTicks: "trimYAxisTicks",
    rotateXAxisTicks: "rotateXAxisTicks",
    maxXAxisTickLength: "maxXAxisTickLength",
    maxYAxisTickLength: "maxYAxisTickLength",
    xAxisTickFormatting: "xAxisTickFormatting",
    yAxisTickFormatting: "yAxisTickFormatting",
    xAxisTicks: "xAxisTicks",
    yAxisTicks: "yAxisTicks",
    groupPadding: "groupPadding",
    barPadding: "barPadding",
    roundDomains: "roundDomains",
    roundEdges: "roundEdges",
    xScaleMax: "xScaleMax",
    showDataLabel: "showDataLabel",
    dataLabelFormatting: "dataLabelFormatting",
    noBarWhenZero: "noBarWhenZero",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 7,
  vars: 18,
  consts: [[3, "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick", "view", "showLegend", "legendOptions", "activeEntries", "animations"], [1, "bar-chart", "chart"], ["ngx-charts-grid-panel-series", "", 3, "xScale", "yScale", "data", "dims", "orient"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "yAxisOffset", "wrapTicks", "dimensionsChanged", 4, "ngIf"], [4, "ngIf"], ["ngx-charts-x-axis", "", 3, "dimensionsChanged", "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"], ["ngx-charts-y-axis", "", 3, "dimensionsChanged", "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "yAxisOffset", "wrapTicks"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-series-horizontal", "", 3, "select", "activate", "deactivate", "dataLabelWidthChanged", "xScale", "activeEntries", "yScale", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "seriesName", "roundEdges", "animations", "showDataLabel", "dataLabelFormatting", "noBarWhenZero"]],
  template: function BarHorizontal2DComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵlistener("legendLabelActivate", function BarHorizontal2DComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) {
        return ctx.onActivate($event, void 0, true);
      })("legendLabelDeactivate", function BarHorizontal2DComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) {
        return ctx.onDeactivate($event, void 0, true);
      })("legendLabelClick", function BarHorizontal2DComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) {
        return ctx.onClick($event);
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "g", 1);
      ɵɵelement(2, "g", 2);
      ɵɵtemplate(3, BarHorizontal2DComponent__svg_g_3_Template, 1, 11, "g", 3)(4, BarHorizontal2DComponent__svg_g_4_Template, 1, 10, "g", 4)(5, BarHorizontal2DComponent__svg_g_5_Template, 2, 2, "g", 5)(6, BarHorizontal2DComponent__svg_g_6_Template, 2, 2, "g", 5);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(15, _c24, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("xScale", ctx.valueScale)("yScale", ctx.groupScale)("data", ctx.results)("dims", ctx.dims)("orient", ctx.barOrientation.Horizontal);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.xAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.yAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.isSSR);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isSSR);
    }
  },
  dependencies: [ChartComponent, GridPanelSeriesComponent, XAxisComponent, YAxisComponent, SeriesHorizontal, NgIf, NgForOf],
  styles: [_c25],
  encapsulation: 2,
  data: {
    animation: [trigger("animationState", [transition(":leave", [style({
      opacity: 1,
      transform: "*"
    }), animate(500, style({
      opacity: 0,
      transform: "scale(0)"
    }))])])]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarHorizontal2DComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-bar-horizontal-2d",
      template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelActivate)="onActivate($event, undefined, true)"
      (legendLabelDeactivate)="onDeactivate($event, undefined, true)"
      (legendLabelClick)="onClick($event)"
    >
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g
          ngx-charts-grid-panel-series
          [xScale]="valueScale"
          [yScale]="groupScale"
          [data]="results"
          [dims]="dims"
          [orient]="barOrientation.Horizontal"
        ></svg:g>
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="valueScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="groupScale"
          [dims]="dims"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          [yAxisOffset]="dataLabelMaxWidth.negative"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>

        <svg:g *ngIf="!isSSR">
          <svg:g
            *ngFor="let group of results; let index = index; trackBy: trackBy"
            [@animationState]="'active'"
            [attr.transform]="groupTransform(group)"
          >
            <svg:g
              ngx-charts-series-horizontal
              [xScale]="valueScale"
              [activeEntries]="activeEntries"
              [yScale]="innerScale"
              [colors]="colors"
              [series]="group.series"
              [dims]="dims"
              [gradient]="gradient"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="tooltipTemplate"
              [seriesName]="group.name"
              [roundEdges]="roundEdges"
              [animations]="animations"
              [showDataLabel]="showDataLabel"
              [dataLabelFormatting]="dataLabelFormatting"
              [noBarWhenZero]="noBarWhenZero"
              (select)="onClick($event, group)"
              (activate)="onActivate($event, group)"
              (deactivate)="onDeactivate($event, group)"
              (dataLabelWidthChanged)="onDataLabelMaxWidthChanged($event, index)"
            />
          </svg:g>
        </svg:g>
        <svg:g *ngIf="isSSR">
          <svg:g
            *ngFor="let group of results; let index = index; trackBy: trackBy"
            [attr.transform]="groupTransform(group)"
          >
            <svg:g
              ngx-charts-series-horizontal
              [xScale]="valueScale"
              [activeEntries]="activeEntries"
              [yScale]="innerScale"
              [colors]="colors"
              [series]="group.series"
              [dims]="dims"
              [gradient]="gradient"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="tooltipTemplate"
              [seriesName]="group.name"
              [roundEdges]="roundEdges"
              [animations]="animations"
              [showDataLabel]="showDataLabel"
              [dataLabelFormatting]="dataLabelFormatting"
              [noBarWhenZero]="noBarWhenZero"
              (select)="onClick($event, group)"
              (activate)="onActivate($event, group)"
              (deactivate)="onDeactivate($event, group)"
              (dataLabelWidthChanged)="onDataLabelMaxWidthChanged($event, index)"
            />
          </svg:g>
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      animations: [trigger("animationState", [transition(":leave", [style({
        opacity: 1,
        transform: "*"
      }), animate(500, style({
        opacity: 0,
        transform: "scale(0)"
      }))])])],
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"]
    }]
  }], null, {
    legend: [{
      type: Input
    }],
    legendTitle: [{
      type: Input
    }],
    legendPosition: [{
      type: Input
    }],
    xAxis: [{
      type: Input
    }],
    yAxis: [{
      type: Input
    }],
    showXAxisLabel: [{
      type: Input
    }],
    showYAxisLabel: [{
      type: Input
    }],
    xAxisLabel: [{
      type: Input
    }],
    yAxisLabel: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    showGridLines: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    schemeType: [{
      type: Input
    }],
    trimXAxisTicks: [{
      type: Input
    }],
    trimYAxisTicks: [{
      type: Input
    }],
    rotateXAxisTicks: [{
      type: Input
    }],
    maxXAxisTickLength: [{
      type: Input
    }],
    maxYAxisTickLength: [{
      type: Input
    }],
    xAxisTickFormatting: [{
      type: Input
    }],
    yAxisTickFormatting: [{
      type: Input
    }],
    xAxisTicks: [{
      type: Input
    }],
    yAxisTicks: [{
      type: Input
    }],
    groupPadding: [{
      type: Input
    }],
    barPadding: [{
      type: Input
    }],
    roundDomains: [{
      type: Input
    }],
    roundEdges: [{
      type: Input
    }],
    xScaleMax: [{
      type: Input
    }],
    showDataLabel: [{
      type: Input
    }],
    dataLabelFormatting: [{
      type: Input
    }],
    noBarWhenZero: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }]
  });
})();
var BarHorizontalNormalizedComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.legend = false;
    this.legendTitle = "Legend";
    this.legendPosition = LegendPosition.Right;
    this.tooltipDisabled = false;
    this.showGridLines = true;
    this.activeEntries = [];
    this.trimXAxisTicks = true;
    this.trimYAxisTicks = true;
    this.rotateXAxisTicks = true;
    this.maxXAxisTickLength = 16;
    this.maxYAxisTickLength = 16;
    this.barPadding = 8;
    this.roundDomains = false;
    this.noBarWhenZero = true;
    this.wrapTicks = false;
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.valueDomain = [0, 100];
    this.margin = [10, 20, 10, 20];
    this.xAxisHeight = 0;
    this.yAxisWidth = 0;
    this.barChartType = BarChartType;
    this.isSSR = false;
    this.trackBy = (index2, item) => {
      return item.name;
    };
  }
  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.isSSR = true;
    }
  }
  update() {
    super.update();
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
      showXAxis: this.xAxis,
      showYAxis: this.yAxis,
      xAxisHeight: this.xAxisHeight,
      yAxisWidth: this.yAxisWidth,
      showXLabel: this.showXAxisLabel,
      showYLabel: this.showYAxisLabel,
      showLegend: this.legend,
      legendType: this.schemeType,
      legendPosition: this.legendPosition
    });
    this.formatDates();
    this.groupDomain = this.getGroupDomain();
    this.innerDomain = this.getInnerDomain();
    this.xScale = this.getXScale();
    this.yScale = this.getYScale();
    this.setColors();
    this.legendOptions = this.getLegendOptions();
    this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
  }
  getGroupDomain() {
    const domain = [];
    for (const group2 of this.results) {
      if (!domain.includes(group2.label)) {
        domain.push(group2.label);
      }
    }
    return domain;
  }
  getInnerDomain() {
    const domain = [];
    for (const group2 of this.results) {
      for (const d of group2.series) {
        if (!domain.includes(d.label)) {
          domain.push(d.label);
        }
      }
    }
    return domain;
  }
  getYScale() {
    const spacing = this.groupDomain.length / (this.dims.height / this.barPadding + 1);
    return band().rangeRound([0, this.dims.height]).paddingInner(spacing).domain(this.groupDomain);
  }
  getXScale() {
    const scale = linear().range([0, this.dims.width]).domain(this.valueDomain);
    return this.roundDomains ? scale.nice() : scale;
  }
  groupTransform(group2) {
    return `translate(0, ${this.yScale(group2.name)})`;
  }
  onClick(data, group2) {
    if (group2) {
      data.series = group2.name;
    }
    this.select.emit(data);
  }
  setColors() {
    let domain;
    if (this.schemeType === ScaleType.Ordinal) {
      domain = this.innerDomain;
    } else {
      domain = this.valueDomain;
    }
    this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
  }
  getLegendOptions() {
    const opts = {
      scaleType: this.schemeType,
      colors: void 0,
      domain: [],
      title: void 0,
      position: this.legendPosition
    };
    if (opts.scaleType === ScaleType.Ordinal) {
      opts.domain = this.innerDomain;
      opts.colors = this.colors;
      opts.title = this.legendTitle;
    } else {
      opts.domain = this.valueDomain;
      opts.colors = this.colors.scale;
    }
    return opts;
  }
  updateYAxisWidth({
    width
  }) {
    this.yAxisWidth = width;
    this.update();
  }
  updateXAxisHeight({
    height
  }) {
    this.xAxisHeight = height;
    this.update();
  }
  onActivate(event, group2, fromLegend = false) {
    const item = Object.assign({}, event);
    if (group2) {
      item.series = group2.name;
    }
    const items = this.results.map((g) => g.series).flat().filter((i) => {
      if (fromLegend) {
        return i.label === item.name;
      } else {
        return i.name === item.name && i.series === item.series;
      }
    });
    this.activeEntries = [...items];
    this.activate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  onDeactivate(event, group2, fromLegend = false) {
    const item = Object.assign({}, event);
    if (group2) {
      item.series = group2.name;
    }
    this.activeEntries = this.activeEntries.filter((i) => {
      if (fromLegend) {
        return i.label !== item.name;
      } else {
        return !(i.name === item.name && i.series === item.series);
      }
    });
    this.deactivate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
};
BarHorizontalNormalizedComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵBarHorizontalNormalizedComponent_BaseFactory;
  return function BarHorizontalNormalizedComponent_Factory(t) {
    return (ɵBarHorizontalNormalizedComponent_BaseFactory || (ɵBarHorizontalNormalizedComponent_BaseFactory = ɵɵgetInheritedFactory(BarHorizontalNormalizedComponent)))(t || BarHorizontalNormalizedComponent);
  };
})();
BarHorizontalNormalizedComponent.ɵcmp = ɵɵdefineComponent({
  type: BarHorizontalNormalizedComponent,
  selectors: [["ngx-charts-bar-horizontal-normalized"]],
  contentQueries: function BarHorizontalNormalizedComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    }
  },
  inputs: {
    legend: "legend",
    legendTitle: "legendTitle",
    legendPosition: "legendPosition",
    xAxis: "xAxis",
    yAxis: "yAxis",
    showXAxisLabel: "showXAxisLabel",
    showYAxisLabel: "showYAxisLabel",
    xAxisLabel: "xAxisLabel",
    yAxisLabel: "yAxisLabel",
    tooltipDisabled: "tooltipDisabled",
    gradient: "gradient",
    showGridLines: "showGridLines",
    activeEntries: "activeEntries",
    schemeType: "schemeType",
    trimXAxisTicks: "trimXAxisTicks",
    trimYAxisTicks: "trimYAxisTicks",
    rotateXAxisTicks: "rotateXAxisTicks",
    maxXAxisTickLength: "maxXAxisTickLength",
    maxYAxisTickLength: "maxYAxisTickLength",
    xAxisTickFormatting: "xAxisTickFormatting",
    yAxisTickFormatting: "yAxisTickFormatting",
    xAxisTicks: "xAxisTicks",
    yAxisTicks: "yAxisTicks",
    barPadding: "barPadding",
    roundDomains: "roundDomains",
    noBarWhenZero: "noBarWhenZero",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 6,
  vars: 13,
  consts: [[3, "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick", "view", "showLegend", "legendOptions", "activeEntries", "animations"], [1, "bar-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], [4, "ngIf"], ["ngx-charts-x-axis", "", 3, "dimensionsChanged", "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"], ["ngx-charts-y-axis", "", 3, "dimensionsChanged", "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-series-horizontal", "", 3, "select", "activate", "deactivate", "type", "xScale", "yScale", "activeEntries", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "seriesName", "animations", "noBarWhenZero"]],
  template: function BarHorizontalNormalizedComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵlistener("legendLabelActivate", function BarHorizontalNormalizedComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) {
        return ctx.onActivate($event, void 0, true);
      })("legendLabelDeactivate", function BarHorizontalNormalizedComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) {
        return ctx.onDeactivate($event, void 0, true);
      })("legendLabelClick", function BarHorizontalNormalizedComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) {
        return ctx.onClick($event);
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "g", 1);
      ɵɵtemplate(2, BarHorizontalNormalizedComponent__svg_g_2_Template, 1, 11, "g", 2)(3, BarHorizontalNormalizedComponent__svg_g_3_Template, 1, 9, "g", 3)(4, BarHorizontalNormalizedComponent__svg_g_4_Template, 2, 2, "g", 4)(5, BarHorizontalNormalizedComponent__svg_g_5_Template, 2, 2, "g", 4);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(10, _c24, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.xAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.yAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.isSSR);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isSSR);
    }
  },
  dependencies: [ChartComponent, XAxisComponent, YAxisComponent, SeriesHorizontal, NgIf, NgForOf],
  styles: [_c25],
  encapsulation: 2,
  data: {
    animation: [trigger("animationState", [transition(":leave", [style({
      opacity: 1,
      transform: "*"
    }), animate(500, style({
      opacity: 0,
      transform: "scale(0)"
    }))])])]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarHorizontalNormalizedComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-bar-horizontal-normalized",
      template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelActivate)="onActivate($event, undefined, true)"
      (legendLabelDeactivate)="onDeactivate($event, undefined, true)"
      (legendLabelClick)="onClick($event)"
    >
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g *ngIf="!isSSR">
          <svg:g
            *ngFor="let group of results; trackBy: trackBy"
            [@animationState]="'active'"
            [attr.transform]="groupTransform(group)"
          >
            <svg:g
              ngx-charts-series-horizontal
              [type]="barChartType.Normalized"
              [xScale]="xScale"
              [yScale]="yScale"
              [activeEntries]="activeEntries"
              [colors]="colors"
              [series]="group.series"
              [dims]="dims"
              [gradient]="gradient"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="tooltipTemplate"
              [seriesName]="group.name"
              [animations]="animations"
              (select)="onClick($event, group)"
              (activate)="onActivate($event, group)"
              (deactivate)="onDeactivate($event, group)"
              [noBarWhenZero]="noBarWhenZero"
            />
          </svg:g>
        </svg:g>
        <svg:g *ngIf="isSSR">
          <svg:g *ngFor="let group of results; trackBy: trackBy" [attr.transform]="groupTransform(group)">
            <svg:g
              ngx-charts-series-horizontal
              [type]="barChartType.Normalized"
              [xScale]="xScale"
              [yScale]="yScale"
              [activeEntries]="activeEntries"
              [colors]="colors"
              [series]="group.series"
              [dims]="dims"
              [gradient]="gradient"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="tooltipTemplate"
              [seriesName]="group.name"
              [animations]="animations"
              (select)="onClick($event, group)"
              (activate)="onActivate($event, group)"
              (deactivate)="onDeactivate($event, group)"
              [noBarWhenZero]="noBarWhenZero"
            />
          </svg:g>
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      animations: [trigger("animationState", [transition(":leave", [style({
        opacity: 1,
        transform: "*"
      }), animate(500, style({
        opacity: 0,
        transform: "scale(0)"
      }))])])],
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"]
    }]
  }], null, {
    legend: [{
      type: Input
    }],
    legendTitle: [{
      type: Input
    }],
    legendPosition: [{
      type: Input
    }],
    xAxis: [{
      type: Input
    }],
    yAxis: [{
      type: Input
    }],
    showXAxisLabel: [{
      type: Input
    }],
    showYAxisLabel: [{
      type: Input
    }],
    xAxisLabel: [{
      type: Input
    }],
    yAxisLabel: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    showGridLines: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    schemeType: [{
      type: Input
    }],
    trimXAxisTicks: [{
      type: Input
    }],
    trimYAxisTicks: [{
      type: Input
    }],
    rotateXAxisTicks: [{
      type: Input
    }],
    maxXAxisTickLength: [{
      type: Input
    }],
    maxYAxisTickLength: [{
      type: Input
    }],
    xAxisTickFormatting: [{
      type: Input
    }],
    yAxisTickFormatting: [{
      type: Input
    }],
    xAxisTicks: [{
      type: Input
    }],
    yAxisTicks: [{
      type: Input
    }],
    barPadding: [{
      type: Input
    }],
    roundDomains: [{
      type: Input
    }],
    noBarWhenZero: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }]
  });
})();
var BarHorizontalStackedComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.legend = false;
    this.legendTitle = "Legend";
    this.legendPosition = LegendPosition.Right;
    this.tooltipDisabled = false;
    this.showGridLines = true;
    this.activeEntries = [];
    this.trimXAxisTicks = true;
    this.trimYAxisTicks = true;
    this.rotateXAxisTicks = true;
    this.maxXAxisTickLength = 16;
    this.maxYAxisTickLength = 16;
    this.barPadding = 8;
    this.roundDomains = false;
    this.showDataLabel = false;
    this.noBarWhenZero = true;
    this.wrapTicks = false;
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.margin = [10, 20, 10, 20];
    this.xAxisHeight = 0;
    this.yAxisWidth = 0;
    this.dataLabelMaxWidth = {
      negative: 0,
      positive: 0
    };
    this.barChartType = BarChartType;
    this.isSSR = false;
    this.trackBy = (index2, item) => {
      return item.name;
    };
  }
  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.isSSR = true;
    }
  }
  update() {
    super.update();
    if (!this.showDataLabel) {
      this.dataLabelMaxWidth = {
        negative: 0,
        positive: 0
      };
    }
    this.margin = [10, 20 + this.dataLabelMaxWidth.positive, 10, 20 + this.dataLabelMaxWidth.negative];
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
      showXAxis: this.xAxis,
      showYAxis: this.yAxis,
      xAxisHeight: this.xAxisHeight,
      yAxisWidth: this.yAxisWidth,
      showXLabel: this.showXAxisLabel,
      showYLabel: this.showYAxisLabel,
      showLegend: this.legend,
      legendType: this.schemeType,
      legendPosition: this.legendPosition
    });
    this.formatDates();
    this.groupDomain = this.getGroupDomain();
    this.innerDomain = this.getInnerDomain();
    this.valueDomain = this.getValueDomain();
    this.xScale = this.getXScale();
    this.yScale = this.getYScale();
    this.setColors();
    this.legendOptions = this.getLegendOptions();
    this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
  }
  getGroupDomain() {
    const domain = [];
    for (const group2 of this.results) {
      if (!domain.includes(group2.label)) {
        domain.push(group2.label);
      }
    }
    return domain;
  }
  getInnerDomain() {
    const domain = [];
    for (const group2 of this.results) {
      for (const d of group2.series) {
        if (!domain.includes(d.label)) {
          domain.push(d.label);
        }
      }
    }
    return domain;
  }
  getValueDomain() {
    const domain = [];
    let smallest = 0;
    let biggest = 0;
    for (const group2 of this.results) {
      let smallestSum = 0;
      let biggestSum = 0;
      for (const d of group2.series) {
        if (d.value < 0) {
          smallestSum += d.value;
        } else {
          biggestSum += d.value;
        }
        smallest = d.value < smallest ? d.value : smallest;
        biggest = d.value > biggest ? d.value : biggest;
      }
      domain.push(smallestSum);
      domain.push(biggestSum);
    }
    domain.push(smallest);
    domain.push(biggest);
    const min4 = Math.min(0, ...domain);
    const max4 = this.xScaleMax ? Math.max(this.xScaleMax, ...domain) : Math.max(...domain);
    return [min4, max4];
  }
  getYScale() {
    const spacing = this.groupDomain.length / (this.dims.height / this.barPadding + 1);
    return band().rangeRound([0, this.dims.height]).paddingInner(spacing).domain(this.groupDomain);
  }
  getXScale() {
    const scale = linear().range([0, this.dims.width]).domain(this.valueDomain);
    return this.roundDomains ? scale.nice() : scale;
  }
  groupTransform(group2) {
    return `translate(0, ${this.yScale(group2.name)})`;
  }
  onClick(data, group2) {
    if (group2) {
      data.series = group2.name;
    }
    this.select.emit(data);
  }
  setColors() {
    let domain;
    if (this.schemeType === ScaleType.Ordinal) {
      domain = this.innerDomain;
    } else {
      domain = this.valueDomain;
    }
    this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
  }
  getLegendOptions() {
    const opts = {
      scaleType: this.schemeType,
      colors: void 0,
      domain: [],
      title: void 0,
      position: this.legendPosition
    };
    if (opts.scaleType === ScaleType.Ordinal) {
      opts.domain = this.innerDomain;
      opts.colors = this.colors;
      opts.title = this.legendTitle;
    } else {
      opts.domain = this.valueDomain;
      opts.colors = this.colors.scale;
    }
    return opts;
  }
  updateYAxisWidth({
    width
  }) {
    this.yAxisWidth = width;
    this.update();
  }
  updateXAxisHeight({
    height
  }) {
    this.xAxisHeight = height;
    this.update();
  }
  onDataLabelMaxWidthChanged(event, groupIndex) {
    if (event.size.negative) {
      this.dataLabelMaxWidth.negative = Math.max(this.dataLabelMaxWidth.negative, event.size.width);
    } else {
      this.dataLabelMaxWidth.positive = Math.max(this.dataLabelMaxWidth.positive, event.size.width);
    }
    if (groupIndex === this.results.length - 1) {
      setTimeout(() => this.update());
    }
  }
  onActivate(event, group2, fromLegend = false) {
    const item = Object.assign({}, event);
    if (group2) {
      item.series = group2.name;
    }
    const items = this.results.map((g) => g.series).flat().filter((i) => {
      if (fromLegend) {
        return i.label === item.name;
      } else {
        return i.name === item.name && i.series === item.series;
      }
    });
    this.activeEntries = [...items];
    this.activate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  onDeactivate(event, group2, fromLegend = false) {
    const item = Object.assign({}, event);
    if (group2) {
      item.series = group2.name;
    }
    this.activeEntries = this.activeEntries.filter((i) => {
      if (fromLegend) {
        return i.label !== item.name;
      } else {
        return !(i.name === item.name && i.series === item.series);
      }
    });
    this.deactivate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
};
BarHorizontalStackedComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵBarHorizontalStackedComponent_BaseFactory;
  return function BarHorizontalStackedComponent_Factory(t) {
    return (ɵBarHorizontalStackedComponent_BaseFactory || (ɵBarHorizontalStackedComponent_BaseFactory = ɵɵgetInheritedFactory(BarHorizontalStackedComponent)))(t || BarHorizontalStackedComponent);
  };
})();
BarHorizontalStackedComponent.ɵcmp = ɵɵdefineComponent({
  type: BarHorizontalStackedComponent,
  selectors: [["ngx-charts-bar-horizontal-stacked"]],
  contentQueries: function BarHorizontalStackedComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    }
  },
  inputs: {
    legend: "legend",
    legendTitle: "legendTitle",
    legendPosition: "legendPosition",
    xAxis: "xAxis",
    yAxis: "yAxis",
    showXAxisLabel: "showXAxisLabel",
    showYAxisLabel: "showYAxisLabel",
    xAxisLabel: "xAxisLabel",
    yAxisLabel: "yAxisLabel",
    tooltipDisabled: "tooltipDisabled",
    gradient: "gradient",
    showGridLines: "showGridLines",
    activeEntries: "activeEntries",
    schemeType: "schemeType",
    trimXAxisTicks: "trimXAxisTicks",
    trimYAxisTicks: "trimYAxisTicks",
    rotateXAxisTicks: "rotateXAxisTicks",
    maxXAxisTickLength: "maxXAxisTickLength",
    maxYAxisTickLength: "maxYAxisTickLength",
    xAxisTickFormatting: "xAxisTickFormatting",
    yAxisTickFormatting: "yAxisTickFormatting",
    xAxisTicks: "xAxisTicks",
    yAxisTicks: "yAxisTicks",
    barPadding: "barPadding",
    roundDomains: "roundDomains",
    xScaleMax: "xScaleMax",
    showDataLabel: "showDataLabel",
    dataLabelFormatting: "dataLabelFormatting",
    noBarWhenZero: "noBarWhenZero",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 6,
  vars: 13,
  consts: [[3, "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick", "view", "showLegend", "legendOptions", "activeEntries", "animations"], [1, "bar-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "yAxisOffset", "wrapTicks", "dimensionsChanged", 4, "ngIf"], [4, "ngIf"], ["ngx-charts-x-axis", "", 3, "dimensionsChanged", "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"], ["ngx-charts-y-axis", "", 3, "dimensionsChanged", "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "yAxisOffset", "wrapTicks"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-series-horizontal", "", 3, "select", "activate", "deactivate", "dataLabelWidthChanged", "type", "xScale", "yScale", "colors", "series", "activeEntries", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "seriesName", "animations", "showDataLabel", "dataLabelFormatting", "noBarWhenZero"]],
  template: function BarHorizontalStackedComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵlistener("legendLabelActivate", function BarHorizontalStackedComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) {
        return ctx.onActivate($event, void 0, true);
      })("legendLabelDeactivate", function BarHorizontalStackedComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) {
        return ctx.onDeactivate($event, void 0, true);
      })("legendLabelClick", function BarHorizontalStackedComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) {
        return ctx.onClick($event);
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "g", 1);
      ɵɵtemplate(2, BarHorizontalStackedComponent__svg_g_2_Template, 1, 11, "g", 2)(3, BarHorizontalStackedComponent__svg_g_3_Template, 1, 10, "g", 3)(4, BarHorizontalStackedComponent__svg_g_4_Template, 2, 2, "g", 4)(5, BarHorizontalStackedComponent__svg_g_5_Template, 2, 2, "g", 4);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(10, _c24, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.xAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.yAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.isSSR);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isSSR);
    }
  },
  dependencies: [ChartComponent, XAxisComponent, YAxisComponent, SeriesHorizontal, NgIf, NgForOf],
  styles: [_c25],
  encapsulation: 2,
  data: {
    animation: [trigger("animationState", [transition(":leave", [style({
      opacity: 1,
      transform: "*"
    }), animate(500, style({
      opacity: 0,
      transform: "scale(0)"
    }))])])]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarHorizontalStackedComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-bar-horizontal-stacked",
      template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelActivate)="onActivate($event, undefined, true)"
      (legendLabelDeactivate)="onDeactivate($event, undefined, true)"
      (legendLabelClick)="onClick($event)"
    >
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          [yAxisOffset]="dataLabelMaxWidth.negative"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g *ngIf="!isSSR">
          <svg:g
            *ngFor="let group of results; let index = index; trackBy: trackBy"
            [@animationState]="'active'"
            [attr.transform]="groupTransform(group)"
          >
            <svg:g
              ngx-charts-series-horizontal
              [type]="barChartType.Stacked"
              [xScale]="xScale"
              [yScale]="yScale"
              [colors]="colors"
              [series]="group.series"
              [activeEntries]="activeEntries"
              [dims]="dims"
              [gradient]="gradient"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="tooltipTemplate"
              [seriesName]="group.name"
              [animations]="animations"
              [showDataLabel]="showDataLabel"
              [dataLabelFormatting]="dataLabelFormatting"
              [noBarWhenZero]="noBarWhenZero"
              (select)="onClick($event, group)"
              (activate)="onActivate($event, group)"
              (deactivate)="onDeactivate($event, group)"
              (dataLabelWidthChanged)="onDataLabelMaxWidthChanged($event, index)"
            />
          </svg:g>
        </svg:g>
        <svg:g *ngIf="isSSR">
          <svg:g
            *ngFor="let group of results; let index = index; trackBy: trackBy"
            [attr.transform]="groupTransform(group)"
          >
            <svg:g
              ngx-charts-series-horizontal
              [type]="barChartType.Stacked"
              [xScale]="xScale"
              [yScale]="yScale"
              [colors]="colors"
              [series]="group.series"
              [activeEntries]="activeEntries"
              [dims]="dims"
              [gradient]="gradient"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="tooltipTemplate"
              [seriesName]="group.name"
              [animations]="animations"
              [showDataLabel]="showDataLabel"
              [dataLabelFormatting]="dataLabelFormatting"
              [noBarWhenZero]="noBarWhenZero"
              (select)="onClick($event, group)"
              (activate)="onActivate($event, group)"
              (deactivate)="onDeactivate($event, group)"
              (dataLabelWidthChanged)="onDataLabelMaxWidthChanged($event, index)"
            />
          </svg:g>
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      animations: [trigger("animationState", [transition(":leave", [style({
        opacity: 1,
        transform: "*"
      }), animate(500, style({
        opacity: 0,
        transform: "scale(0)"
      }))])])],
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"]
    }]
  }], null, {
    legend: [{
      type: Input
    }],
    legendTitle: [{
      type: Input
    }],
    legendPosition: [{
      type: Input
    }],
    xAxis: [{
      type: Input
    }],
    yAxis: [{
      type: Input
    }],
    showXAxisLabel: [{
      type: Input
    }],
    showYAxisLabel: [{
      type: Input
    }],
    xAxisLabel: [{
      type: Input
    }],
    yAxisLabel: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    showGridLines: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    schemeType: [{
      type: Input
    }],
    trimXAxisTicks: [{
      type: Input
    }],
    trimYAxisTicks: [{
      type: Input
    }],
    rotateXAxisTicks: [{
      type: Input
    }],
    maxXAxisTickLength: [{
      type: Input
    }],
    maxYAxisTickLength: [{
      type: Input
    }],
    xAxisTickFormatting: [{
      type: Input
    }],
    yAxisTickFormatting: [{
      type: Input
    }],
    xAxisTicks: [{
      type: Input
    }],
    yAxisTicks: [{
      type: Input
    }],
    barPadding: [{
      type: Input
    }],
    roundDomains: [{
      type: Input
    }],
    xScaleMax: [{
      type: Input
    }],
    showDataLabel: [{
      type: Input
    }],
    dataLabelFormatting: [{
      type: Input
    }],
    noBarWhenZero: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }]
  });
})();
var SeriesVerticalComponent = class {
  constructor(platformId) {
    this.platformId = platformId;
    this.type = BarChartType.Standard;
    this.tooltipDisabled = false;
    this.animations = true;
    this.showDataLabel = false;
    this.noBarWhenZero = true;
    this.select = new EventEmitter();
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.dataLabelHeightChanged = new EventEmitter();
    this.barsForDataLabels = [];
    this.barOrientation = BarOrientation;
    this.isSSR = false;
  }
  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.isSSR = true;
    }
  }
  ngOnChanges(changes) {
    this.update();
  }
  update() {
    this.updateTooltipSettings();
    let width;
    if (this.series.length) {
      width = this.xScale.bandwidth();
    }
    width = Math.round(width);
    const yScaleMin = Math.max(this.yScale.domain()[0], 0);
    const d0 = {
      [D0Types.positive]: 0,
      [D0Types.negative]: 0
    };
    let d0Type = D0Types.positive;
    let total;
    if (this.type === BarChartType.Normalized) {
      total = this.series.map((d) => d.value).reduce((sum3, d) => sum3 + d, 0);
    }
    this.bars = this.series.map((d, index2) => {
      let value2 = d.value;
      const label = this.getLabel(d);
      const formattedLabel = formatLabel(label);
      const roundEdges = this.roundEdges;
      d0Type = value2 > 0 ? D0Types.positive : D0Types.negative;
      const bar = {
        value: value2,
        label,
        roundEdges,
        data: d,
        width,
        formattedLabel,
        height: 0,
        x: 0,
        y: 0
      };
      if (this.type === BarChartType.Standard) {
        bar.height = Math.abs(this.yScale(value2) - this.yScale(yScaleMin));
        bar.x = this.xScale(label);
        if (value2 < 0) {
          bar.y = this.yScale(0);
        } else {
          bar.y = this.yScale(value2);
        }
      } else if (this.type === BarChartType.Stacked) {
        const offset0 = d0[d0Type];
        const offset1 = offset0 + value2;
        d0[d0Type] += value2;
        bar.height = this.yScale(offset0) - this.yScale(offset1);
        bar.x = 0;
        bar.y = this.yScale(offset1);
        bar.offset0 = offset0;
        bar.offset1 = offset1;
      } else if (this.type === BarChartType.Normalized) {
        let offset0 = d0[d0Type];
        let offset1 = offset0 + value2;
        d0[d0Type] += value2;
        if (total > 0) {
          offset0 = offset0 * 100 / total;
          offset1 = offset1 * 100 / total;
        } else {
          offset0 = 0;
          offset1 = 0;
        }
        bar.height = this.yScale(offset0) - this.yScale(offset1);
        bar.x = 0;
        bar.y = this.yScale(offset1);
        bar.offset0 = offset0;
        bar.offset1 = offset1;
        value2 = (offset1 - offset0).toFixed(2) + "%";
      }
      if (this.colors.scaleType === ScaleType.Ordinal) {
        bar.color = this.colors.getColor(label);
      } else {
        if (this.type === BarChartType.Standard) {
          bar.color = this.colors.getColor(value2);
          bar.gradientStops = this.colors.getLinearGradientStops(value2);
        } else {
          bar.color = this.colors.getColor(bar.offset1);
          bar.gradientStops = this.colors.getLinearGradientStops(bar.offset1, bar.offset0);
        }
      }
      let tooltipLabel = formattedLabel;
      bar.ariaLabel = formattedLabel + " " + value2.toLocaleString();
      if (this.seriesName !== null && this.seriesName !== void 0) {
        tooltipLabel = `${this.seriesName} • ${formattedLabel}`;
        bar.data.series = this.seriesName;
        bar.ariaLabel = this.seriesName + " " + bar.ariaLabel;
      }
      bar.tooltipText = this.tooltipDisabled ? void 0 : `
        <span class="tooltip-label">${escapeLabel(tooltipLabel)}</span>
        <span class="tooltip-val">${this.dataLabelFormatting ? this.dataLabelFormatting(value2) : value2.toLocaleString()}</span>
      `;
      return bar;
    });
    this.updateDataLabels();
  }
  updateDataLabels() {
    if (this.type === BarChartType.Stacked) {
      this.barsForDataLabels = [];
      const section = {};
      section.series = this.seriesName;
      const totalPositive = this.series.map((d) => d.value).reduce((sum3, d) => d > 0 ? sum3 + d : sum3, 0);
      const totalNegative = this.series.map((d) => d.value).reduce((sum3, d) => d < 0 ? sum3 + d : sum3, 0);
      section.total = totalPositive + totalNegative;
      section.x = 0;
      section.y = 0;
      if (section.total > 0) {
        section.height = this.yScale(totalPositive);
      } else {
        section.height = this.yScale(totalNegative);
      }
      section.width = this.xScale.bandwidth();
      this.barsForDataLabels.push(section);
    } else {
      this.barsForDataLabels = this.series.map((d) => {
        const section = {};
        section.series = this.seriesName ?? d.label;
        section.total = d.value;
        section.x = this.xScale(d.label);
        section.y = this.yScale(0);
        section.height = this.yScale(section.total) - this.yScale(0);
        section.width = this.xScale.bandwidth();
        return section;
      });
    }
  }
  updateTooltipSettings() {
    this.tooltipPlacement = this.tooltipDisabled ? void 0 : PlacementTypes.Top;
    this.tooltipType = this.tooltipDisabled ? void 0 : StyleTypes.tooltip;
  }
  isActive(entry) {
    if (!this.activeEntries) return false;
    const item = this.activeEntries.find((active) => {
      return entry.name === active.name && entry.value === active.value;
    });
    return item !== void 0;
  }
  onClick(data) {
    this.select.emit(data);
  }
  getLabel(dataItem) {
    if (dataItem.label) {
      return dataItem.label;
    }
    return dataItem.name;
  }
  trackBy(index2, bar) {
    return bar.label;
  }
  trackDataLabelBy(index2, barLabel) {
    return index2 + "#" + barLabel.series + "#" + barLabel.total;
  }
};
SeriesVerticalComponent.ɵfac = function SeriesVerticalComponent_Factory(t) {
  return new (t || SeriesVerticalComponent)(ɵɵdirectiveInject(PLATFORM_ID));
};
SeriesVerticalComponent.ɵcmp = ɵɵdefineComponent({
  type: SeriesVerticalComponent,
  selectors: [["g", "ngx-charts-series-vertical", ""]],
  inputs: {
    dims: "dims",
    type: "type",
    series: "series",
    xScale: "xScale",
    yScale: "yScale",
    colors: "colors",
    gradient: "gradient",
    activeEntries: "activeEntries",
    seriesName: "seriesName",
    tooltipDisabled: "tooltipDisabled",
    tooltipTemplate: "tooltipTemplate",
    roundEdges: "roundEdges",
    animations: "animations",
    showDataLabel: "showDataLabel",
    dataLabelFormatting: "dataLabelFormatting",
    noBarWhenZero: "noBarWhenZero"
  },
  outputs: {
    select: "select",
    activate: "activate",
    deactivate: "deactivate",
    dataLabelHeightChanged: "dataLabelHeightChanged"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c29,
  decls: 3,
  vars: 3,
  consts: [[4, "ngIf"], ["ngx-charts-bar", "", "ngx-tooltip", "", 3, "width", "height", "x", "y", "fill", "stops", "data", "orientation", "roundEdges", "gradient", "ariaLabel", "isActive", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "noBarWhenZero", "animations", "select", "activate", "deactivate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-bar", "", "ngx-tooltip", "", 3, "select", "activate", "deactivate", "width", "height", "x", "y", "fill", "stops", "data", "orientation", "roundEdges", "gradient", "ariaLabel", "isActive", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "noBarWhenZero", "animations"], ["ngx-charts-bar-label", "", 3, "barX", "barY", "barWidth", "barHeight", "value", "valueFormatting", "orientation", "dimensionsChanged", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-bar-label", "", 3, "dimensionsChanged", "barX", "barY", "barWidth", "barHeight", "value", "valueFormatting", "orientation"]],
  template: function SeriesVerticalComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SeriesVerticalComponent__svg_g_0_Template, 2, 2, "g", 0)(1, SeriesVerticalComponent__svg_g_1_Template, 2, 2, "g", 0)(2, SeriesVerticalComponent__svg_g_2_Template, 2, 2, "g", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.isSSR);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isSSR);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showDataLabel);
    }
  },
  dependencies: [BarComponent, BarLabelComponent, NgIf, NgForOf, TooltipDirective],
  encapsulation: 2,
  data: {
    animation: [trigger("animationState", [transition(":leave", [style({
      opacity: 1
    }), animate(500, style({
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesVerticalComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-series-vertical]",
      template: `
    <svg:g *ngIf="!isSSR">
      <svg:g
        ngx-charts-bar
        *ngFor="let bar of bars; trackBy: trackBy"
        [@animationState]="'active'"
        [@.disabled]="!animations"
        [width]="bar.width"
        [height]="bar.height"
        [x]="bar.x"
        [y]="bar.y"
        [fill]="bar.color"
        [stops]="bar.gradientStops"
        [data]="bar.data"
        [orientation]="barOrientation.Vertical"
        [roundEdges]="bar.roundEdges"
        [gradient]="gradient"
        [ariaLabel]="bar.ariaLabel"
        [isActive]="isActive(bar.data)"
        (select)="onClick($event)"
        (activate)="activate.emit($event)"
        (deactivate)="deactivate.emit($event)"
        ngx-tooltip
        [tooltipDisabled]="tooltipDisabled"
        [tooltipPlacement]="tooltipPlacement"
        [tooltipType]="tooltipType"
        [tooltipTitle]="tooltipTemplate ? undefined : bar.tooltipText"
        [tooltipTemplate]="tooltipTemplate"
        [tooltipContext]="bar.data"
        [noBarWhenZero]="noBarWhenZero"
        [animations]="animations"
      ></svg:g>
    </svg:g>
    <svg:g *ngIf="isSSR">
      <svg:g
        ngx-charts-bar
        *ngFor="let bar of bars; trackBy: trackBy"
        [width]="bar.width"
        [height]="bar.height"
        [x]="bar.x"
        [y]="bar.y"
        [fill]="bar.color"
        [stops]="bar.gradientStops"
        [data]="bar.data"
        [orientation]="barOrientation.Vertical"
        [roundEdges]="bar.roundEdges"
        [gradient]="gradient"
        [ariaLabel]="bar.ariaLabel"
        [isActive]="isActive(bar.data)"
        (select)="onClick($event)"
        (activate)="activate.emit($event)"
        (deactivate)="deactivate.emit($event)"
        ngx-tooltip
        [tooltipDisabled]="tooltipDisabled"
        [tooltipPlacement]="tooltipPlacement"
        [tooltipType]="tooltipType"
        [tooltipTitle]="tooltipTemplate ? undefined : bar.tooltipText"
        [tooltipTemplate]="tooltipTemplate"
        [tooltipContext]="bar.data"
        [noBarWhenZero]="noBarWhenZero"
        [animations]="animations"
      ></svg:g>
    </svg:g>
    <svg:g *ngIf="showDataLabel">
      <svg:g
        ngx-charts-bar-label
        *ngFor="let b of barsForDataLabels; let i = index; trackBy: trackDataLabelBy"
        [barX]="b.x"
        [barY]="b.y"
        [barWidth]="b.width"
        [barHeight]="b.height"
        [value]="b.total"
        [valueFormatting]="dataLabelFormatting"
        [orientation]="barOrientation.Vertical"
        (dimensionsChanged)="dataLabelHeightChanged.emit({ size: $event, index: i })"
      />
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("animationState", [transition(":leave", [style({
        opacity: 1
      }), animate(500, style({
        opacity: 0
      }))])])]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    dims: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    series: [{
      type: Input
    }],
    xScale: [{
      type: Input
    }],
    yScale: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    seriesName: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    tooltipTemplate: [{
      type: Input
    }],
    roundEdges: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    showDataLabel: [{
      type: Input
    }],
    dataLabelFormatting: [{
      type: Input
    }],
    noBarWhenZero: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    dataLabelHeightChanged: [{
      type: Output
    }]
  });
})();
var BarVerticalComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.legend = false;
    this.legendTitle = "Legend";
    this.legendPosition = LegendPosition.Right;
    this.tooltipDisabled = false;
    this.showGridLines = true;
    this.activeEntries = [];
    this.trimXAxisTicks = true;
    this.trimYAxisTicks = true;
    this.rotateXAxisTicks = true;
    this.maxXAxisTickLength = 16;
    this.maxYAxisTickLength = 16;
    this.barPadding = 8;
    this.roundDomains = false;
    this.roundEdges = true;
    this.showDataLabel = false;
    this.noBarWhenZero = true;
    this.wrapTicks = false;
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.margin = [10, 20, 10, 20];
    this.xAxisHeight = 0;
    this.yAxisWidth = 0;
    this.dataLabelMaxHeight = {
      negative: 0,
      positive: 0
    };
  }
  update() {
    super.update();
    if (!this.showDataLabel) {
      this.dataLabelMaxHeight = {
        negative: 0,
        positive: 0
      };
    }
    this.margin = [10 + this.dataLabelMaxHeight.positive, 20, 10 + this.dataLabelMaxHeight.negative, 20];
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
      showXAxis: this.xAxis,
      showYAxis: this.yAxis,
      xAxisHeight: this.xAxisHeight,
      yAxisWidth: this.yAxisWidth,
      showXLabel: this.showXAxisLabel,
      showYLabel: this.showYAxisLabel,
      showLegend: this.legend,
      legendType: this.schemeType,
      legendPosition: this.legendPosition
    });
    this.formatDates();
    if (this.showDataLabel) {
      this.dims.height -= this.dataLabelMaxHeight.negative;
    }
    this.xScale = this.getXScale();
    this.yScale = this.getYScale();
    this.setColors();
    this.legendOptions = this.getLegendOptions();
    this.transform = `translate(${this.dims.xOffset} , ${this.margin[0] + this.dataLabelMaxHeight.negative})`;
  }
  getXScale() {
    this.xDomain = this.getXDomain();
    const spacing = this.xDomain.length / (this.dims.width / this.barPadding + 1);
    return band().range([0, this.dims.width]).paddingInner(spacing).domain(this.xDomain);
  }
  getYScale() {
    this.yDomain = this.getYDomain();
    const scale = linear().range([this.dims.height, 0]).domain(this.yDomain);
    return this.roundDomains ? scale.nice() : scale;
  }
  getXDomain() {
    return this.results.map((d) => d.label);
  }
  getYDomain() {
    const values = this.results.map((d) => d.value);
    let min4 = this.yScaleMin ? Math.min(this.yScaleMin, ...values) : Math.min(0, ...values);
    if (this.yAxisTicks && !this.yAxisTicks.some(isNaN)) {
      min4 = Math.min(min4, ...this.yAxisTicks);
    }
    let max4 = this.yScaleMax ? Math.max(this.yScaleMax, ...values) : Math.max(0, ...values);
    if (this.yAxisTicks && !this.yAxisTicks.some(isNaN)) {
      max4 = Math.max(max4, ...this.yAxisTicks);
    }
    return [min4, max4];
  }
  onClick(data) {
    this.select.emit(data);
  }
  setColors() {
    let domain;
    if (this.schemeType === ScaleType.Ordinal) {
      domain = this.xDomain;
    } else {
      domain = this.yDomain;
    }
    this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
  }
  getLegendOptions() {
    const opts = {
      scaleType: this.schemeType,
      colors: void 0,
      domain: [],
      title: void 0,
      position: this.legendPosition
    };
    if (opts.scaleType === ScaleType.Ordinal) {
      opts.domain = this.xDomain;
      opts.colors = this.colors;
      opts.title = this.legendTitle;
    } else {
      opts.domain = this.yDomain;
      opts.colors = this.colors.scale;
    }
    return opts;
  }
  updateYAxisWidth({
    width
  }) {
    this.yAxisWidth = width;
    this.update();
  }
  updateXAxisHeight({
    height
  }) {
    this.xAxisHeight = height;
    this.update();
  }
  onDataLabelMaxHeightChanged(event) {
    if (event.size.negative) {
      this.dataLabelMaxHeight.negative = Math.max(this.dataLabelMaxHeight.negative, event.size.height);
    } else {
      this.dataLabelMaxHeight.positive = Math.max(this.dataLabelMaxHeight.positive, event.size.height);
    }
    if (event.index === this.results.length - 1) {
      setTimeout(() => this.update());
    }
  }
  onActivate(item, fromLegend = false) {
    item = this.results.find((d) => {
      if (fromLegend) {
        return d.label === item.name;
      } else {
        return d.name === item.name;
      }
    });
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value && d.series === item.series;
    });
    if (idx > -1) {
      return;
    }
    this.activeEntries = [item, ...this.activeEntries];
    this.activate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  onDeactivate(item, fromLegend = false) {
    item = this.results.find((d) => {
      if (fromLegend) {
        return d.label === item.name;
      } else {
        return d.name === item.name;
      }
    });
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value && d.series === item.series;
    });
    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];
    this.deactivate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
};
BarVerticalComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵBarVerticalComponent_BaseFactory;
  return function BarVerticalComponent_Factory(t) {
    return (ɵBarVerticalComponent_BaseFactory || (ɵBarVerticalComponent_BaseFactory = ɵɵgetInheritedFactory(BarVerticalComponent)))(t || BarVerticalComponent);
  };
})();
BarVerticalComponent.ɵcmp = ɵɵdefineComponent({
  type: BarVerticalComponent,
  selectors: [["ngx-charts-bar-vertical"]],
  contentQueries: function BarVerticalComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    }
  },
  inputs: {
    legend: "legend",
    legendTitle: "legendTitle",
    legendPosition: "legendPosition",
    xAxis: "xAxis",
    yAxis: "yAxis",
    showXAxisLabel: "showXAxisLabel",
    showYAxisLabel: "showYAxisLabel",
    xAxisLabel: "xAxisLabel",
    yAxisLabel: "yAxisLabel",
    tooltipDisabled: "tooltipDisabled",
    gradient: "gradient",
    showGridLines: "showGridLines",
    activeEntries: "activeEntries",
    schemeType: "schemeType",
    trimXAxisTicks: "trimXAxisTicks",
    trimYAxisTicks: "trimYAxisTicks",
    rotateXAxisTicks: "rotateXAxisTicks",
    maxXAxisTickLength: "maxXAxisTickLength",
    maxYAxisTickLength: "maxYAxisTickLength",
    xAxisTickFormatting: "xAxisTickFormatting",
    yAxisTickFormatting: "yAxisTickFormatting",
    xAxisTicks: "xAxisTicks",
    yAxisTicks: "yAxisTicks",
    barPadding: "barPadding",
    roundDomains: "roundDomains",
    roundEdges: "roundEdges",
    yScaleMax: "yScaleMax",
    yScaleMin: "yScaleMin",
    showDataLabel: "showDataLabel",
    dataLabelFormatting: "dataLabelFormatting",
    noBarWhenZero: "noBarWhenZero",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 5,
  vars: 25,
  consts: [[3, "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate", "view", "showLegend", "legendOptions", "activeEntries", "animations"], [1, "bar-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-series-vertical", "", 3, "activate", "deactivate", "select", "dataLabelHeightChanged", "xScale", "yScale", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "showDataLabel", "dataLabelFormatting", "activeEntries", "roundEdges", "animations", "noBarWhenZero"], ["ngx-charts-x-axis", "", 3, "dimensionsChanged", "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "wrapTicks"], ["ngx-charts-y-axis", "", 3, "dimensionsChanged", "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"]],
  template: function BarVerticalComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵlistener("legendLabelClick", function BarVerticalComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) {
        return ctx.onClick($event);
      })("legendLabelActivate", function BarVerticalComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) {
        return ctx.onActivate($event, true);
      })("legendLabelDeactivate", function BarVerticalComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) {
        return ctx.onDeactivate($event, true);
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "g", 1);
      ɵɵtemplate(2, BarVerticalComponent__svg_g_2_Template, 1, 12, "g", 2)(3, BarVerticalComponent__svg_g_3_Template, 1, 10, "g", 3);
      ɵɵelementStart(4, "g", 4);
      ɵɵlistener("activate", function BarVerticalComponent_Template_g_activate_4_listener($event) {
        return ctx.onActivate($event);
      })("deactivate", function BarVerticalComponent_Template_g_deactivate_4_listener($event) {
        return ctx.onDeactivate($event);
      })("select", function BarVerticalComponent_Template_g_select_4_listener($event) {
        return ctx.onClick($event);
      })("dataLabelHeightChanged", function BarVerticalComponent_Template_g_dataLabelHeightChanged_4_listener($event) {
        return ctx.onDataLabelMaxHeightChanged($event);
      });
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(22, _c24, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.xAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.yAxis);
      ɵɵadvance();
      ɵɵproperty("xScale", ctx.xScale)("yScale", ctx.yScale)("colors", ctx.colors)("series", ctx.results)("dims", ctx.dims)("gradient", ctx.gradient)("tooltipDisabled", ctx.tooltipDisabled)("tooltipTemplate", ctx.tooltipTemplate)("showDataLabel", ctx.showDataLabel)("dataLabelFormatting", ctx.dataLabelFormatting)("activeEntries", ctx.activeEntries)("roundEdges", ctx.roundEdges)("animations", ctx.animations)("noBarWhenZero", ctx.noBarWhenZero);
    }
  },
  dependencies: [ChartComponent, XAxisComponent, YAxisComponent, SeriesVerticalComponent, NgIf],
  styles: [_c25],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarVerticalComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-bar-vertical",
      template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event, true)"
      (legendLabelDeactivate)="onDeactivate($event, true)"
    >
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          [xAxisOffset]="dataLabelMaxHeight.negative"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g
          ngx-charts-series-vertical
          [xScale]="xScale"
          [yScale]="yScale"
          [colors]="colors"
          [series]="results"
          [dims]="dims"
          [gradient]="gradient"
          [tooltipDisabled]="tooltipDisabled"
          [tooltipTemplate]="tooltipTemplate"
          [showDataLabel]="showDataLabel"
          [dataLabelFormatting]="dataLabelFormatting"
          [activeEntries]="activeEntries"
          [roundEdges]="roundEdges"
          [animations]="animations"
          [noBarWhenZero]="noBarWhenZero"
          (activate)="onActivate($event)"
          (deactivate)="onDeactivate($event)"
          (select)="onClick($event)"
          (dataLabelHeightChanged)="onDataLabelMaxHeightChanged($event)"
        ></svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"]
    }]
  }], null, {
    legend: [{
      type: Input
    }],
    legendTitle: [{
      type: Input
    }],
    legendPosition: [{
      type: Input
    }],
    xAxis: [{
      type: Input
    }],
    yAxis: [{
      type: Input
    }],
    showXAxisLabel: [{
      type: Input
    }],
    showYAxisLabel: [{
      type: Input
    }],
    xAxisLabel: [{
      type: Input
    }],
    yAxisLabel: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    showGridLines: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    schemeType: [{
      type: Input
    }],
    trimXAxisTicks: [{
      type: Input
    }],
    trimYAxisTicks: [{
      type: Input
    }],
    rotateXAxisTicks: [{
      type: Input
    }],
    maxXAxisTickLength: [{
      type: Input
    }],
    maxYAxisTickLength: [{
      type: Input
    }],
    xAxisTickFormatting: [{
      type: Input
    }],
    yAxisTickFormatting: [{
      type: Input
    }],
    xAxisTicks: [{
      type: Input
    }],
    yAxisTicks: [{
      type: Input
    }],
    barPadding: [{
      type: Input
    }],
    roundDomains: [{
      type: Input
    }],
    roundEdges: [{
      type: Input
    }],
    yScaleMax: [{
      type: Input
    }],
    yScaleMin: [{
      type: Input
    }],
    showDataLabel: [{
      type: Input
    }],
    dataLabelFormatting: [{
      type: Input
    }],
    noBarWhenZero: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }]
  });
})();
var BarVertical2DComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.legend = false;
    this.legendTitle = "Legend";
    this.legendPosition = LegendPosition.Right;
    this.tooltipDisabled = false;
    this.scaleType = ScaleType.Ordinal;
    this.showGridLines = true;
    this.activeEntries = [];
    this.trimXAxisTicks = true;
    this.trimYAxisTicks = true;
    this.rotateXAxisTicks = true;
    this.maxXAxisTickLength = 16;
    this.maxYAxisTickLength = 16;
    this.groupPadding = 16;
    this.barPadding = 8;
    this.roundDomains = false;
    this.roundEdges = true;
    this.showDataLabel = false;
    this.noBarWhenZero = true;
    this.wrapTicks = false;
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.margin = [10, 20, 10, 20];
    this.xAxisHeight = 0;
    this.yAxisWidth = 0;
    this.dataLabelMaxHeight = {
      negative: 0,
      positive: 0
    };
    this.isSSR = false;
    this.barOrientation = BarOrientation;
    this.trackBy = (index2, item) => {
      return item.name;
    };
  }
  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.isSSR = true;
    }
  }
  update() {
    super.update();
    if (!this.showDataLabel) {
      this.dataLabelMaxHeight = {
        negative: 0,
        positive: 0
      };
    }
    this.margin = [10 + this.dataLabelMaxHeight.positive, 20, 10 + this.dataLabelMaxHeight.negative, 20];
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
      showXAxis: this.xAxis,
      showYAxis: this.yAxis,
      xAxisHeight: this.xAxisHeight,
      yAxisWidth: this.yAxisWidth,
      showXLabel: this.showXAxisLabel,
      showYLabel: this.showYAxisLabel,
      showLegend: this.legend,
      legendType: this.schemeType,
      legendPosition: this.legendPosition
    });
    if (this.showDataLabel) {
      this.dims.height -= this.dataLabelMaxHeight.negative;
    }
    this.formatDates();
    this.groupDomain = this.getGroupDomain();
    this.innerDomain = this.getInnerDomain();
    this.valueDomain = this.getValueDomain();
    this.groupScale = this.getGroupScale();
    this.innerScale = this.getInnerScale();
    this.valueScale = this.getValueScale();
    this.setColors();
    this.legendOptions = this.getLegendOptions();
    this.transform = `translate(${this.dims.xOffset} , ${this.margin[0] + this.dataLabelMaxHeight.negative})`;
  }
  onDataLabelMaxHeightChanged(event, groupIndex) {
    if (event.size.negative) {
      this.dataLabelMaxHeight.negative = Math.max(this.dataLabelMaxHeight.negative, event.size.height);
    } else {
      this.dataLabelMaxHeight.positive = Math.max(this.dataLabelMaxHeight.positive, event.size.height);
    }
    if (groupIndex === this.results.length - 1) {
      setTimeout(() => this.update());
    }
  }
  getGroupScale() {
    const spacing = this.groupDomain.length / (this.dims.height / this.groupPadding + 1);
    return band().rangeRound([0, this.dims.width]).paddingInner(spacing).paddingOuter(spacing / 2).domain(this.groupDomain);
  }
  getInnerScale() {
    const width = this.groupScale.bandwidth();
    const spacing = this.innerDomain.length / (width / this.barPadding + 1);
    return band().rangeRound([0, width]).paddingInner(spacing).domain(this.innerDomain);
  }
  getValueScale() {
    const scale = linear().range([this.dims.height, 0]).domain(this.valueDomain);
    return this.roundDomains ? scale.nice() : scale;
  }
  getGroupDomain() {
    const domain = [];
    for (const group2 of this.results) {
      if (!domain.includes(group2.label)) {
        domain.push(group2.label);
      }
    }
    return domain;
  }
  getInnerDomain() {
    const domain = [];
    for (const group2 of this.results) {
      for (const d of group2.series) {
        if (!domain.includes(d.label)) {
          domain.push(d.label);
        }
      }
    }
    return domain;
  }
  getValueDomain() {
    const domain = [];
    for (const group2 of this.results) {
      for (const d of group2.series) {
        if (!domain.includes(d.value)) {
          domain.push(d.value);
        }
      }
    }
    const min4 = Math.min(0, ...domain);
    const max4 = this.yScaleMax ? Math.max(this.yScaleMax, ...domain) : Math.max(0, ...domain);
    return [min4, max4];
  }
  groupTransform(group2) {
    return `translate(${this.groupScale(group2.label)}, 0)`;
  }
  onClick(data, group2) {
    if (group2) {
      data.series = group2.name;
    }
    this.select.emit(data);
  }
  setColors() {
    let domain;
    if (this.schemeType === ScaleType.Ordinal) {
      domain = this.innerDomain;
    } else {
      domain = this.valueDomain;
    }
    this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
  }
  getLegendOptions() {
    const opts = {
      scaleType: this.schemeType,
      colors: void 0,
      domain: [],
      title: void 0,
      position: this.legendPosition
    };
    if (opts.scaleType === ScaleType.Ordinal) {
      opts.domain = this.innerDomain;
      opts.colors = this.colors;
      opts.title = this.legendTitle;
    } else {
      opts.domain = this.valueDomain;
      opts.colors = this.colors.scale;
    }
    return opts;
  }
  updateYAxisWidth({
    width
  }) {
    this.yAxisWidth = width;
    this.update();
  }
  updateXAxisHeight({
    height
  }) {
    this.xAxisHeight = height;
    this.update();
  }
  onActivate(event, group2, fromLegend = false) {
    const item = Object.assign({}, event);
    if (group2) {
      item.series = group2.name;
    }
    const items = this.results.map((g) => g.series).flat().filter((i) => {
      if (fromLegend) {
        return i.label === item.name;
      } else {
        return i.name === item.name && i.series === item.series;
      }
    });
    this.activeEntries = [...items];
    this.activate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  onDeactivate(event, group2, fromLegend = false) {
    const item = Object.assign({}, event);
    if (group2) {
      item.series = group2.name;
    }
    this.activeEntries = this.activeEntries.filter((i) => {
      if (fromLegend) {
        return i.label !== item.name;
      } else {
        return !(i.name === item.name && i.series === item.series);
      }
    });
    this.deactivate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
};
BarVertical2DComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵBarVertical2DComponent_BaseFactory;
  return function BarVertical2DComponent_Factory(t) {
    return (ɵBarVertical2DComponent_BaseFactory || (ɵBarVertical2DComponent_BaseFactory = ɵɵgetInheritedFactory(BarVertical2DComponent)))(t || BarVertical2DComponent);
  };
})();
BarVertical2DComponent.ɵcmp = ɵɵdefineComponent({
  type: BarVertical2DComponent,
  selectors: [["ngx-charts-bar-vertical-2d"]],
  contentQueries: function BarVertical2DComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    }
  },
  inputs: {
    legend: "legend",
    legendTitle: "legendTitle",
    legendPosition: "legendPosition",
    xAxis: "xAxis",
    yAxis: "yAxis",
    showXAxisLabel: "showXAxisLabel",
    showYAxisLabel: "showYAxisLabel",
    xAxisLabel: "xAxisLabel",
    yAxisLabel: "yAxisLabel",
    tooltipDisabled: "tooltipDisabled",
    scaleType: "scaleType",
    gradient: "gradient",
    showGridLines: "showGridLines",
    activeEntries: "activeEntries",
    schemeType: "schemeType",
    trimXAxisTicks: "trimXAxisTicks",
    trimYAxisTicks: "trimYAxisTicks",
    rotateXAxisTicks: "rotateXAxisTicks",
    maxXAxisTickLength: "maxXAxisTickLength",
    maxYAxisTickLength: "maxYAxisTickLength",
    xAxisTickFormatting: "xAxisTickFormatting",
    yAxisTickFormatting: "yAxisTickFormatting",
    xAxisTicks: "xAxisTicks",
    yAxisTicks: "yAxisTicks",
    groupPadding: "groupPadding",
    barPadding: "barPadding",
    roundDomains: "roundDomains",
    roundEdges: "roundEdges",
    yScaleMax: "yScaleMax",
    showDataLabel: "showDataLabel",
    dataLabelFormatting: "dataLabelFormatting",
    noBarWhenZero: "noBarWhenZero",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 7,
  vars: 18,
  consts: [[3, "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick", "view", "showLegend", "legendOptions", "activeEntries", "animations"], [1, "bar-chart", "chart"], ["ngx-charts-grid-panel-series", "", 3, "xScale", "yScale", "data", "dims", "orient"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], [4, "ngIf"], ["ngx-charts-x-axis", "", 3, "dimensionsChanged", "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "wrapTicks"], ["ngx-charts-y-axis", "", 3, "dimensionsChanged", "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"], ["ngx-charts-series-vertical", "", 3, "activeEntries", "xScale", "yScale", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "showDataLabel", "dataLabelFormatting", "seriesName", "roundEdges", "animations", "noBarWhenZero", "select", "activate", "deactivate", "dataLabelHeightChanged", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-series-vertical", "", 3, "select", "activate", "deactivate", "dataLabelHeightChanged", "activeEntries", "xScale", "yScale", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "showDataLabel", "dataLabelFormatting", "seriesName", "roundEdges", "animations", "noBarWhenZero"]],
  template: function BarVertical2DComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵlistener("legendLabelActivate", function BarVertical2DComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) {
        return ctx.onActivate($event, void 0, true);
      })("legendLabelDeactivate", function BarVertical2DComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) {
        return ctx.onDeactivate($event, void 0, true);
      })("legendLabelClick", function BarVertical2DComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) {
        return ctx.onClick($event);
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "g", 1);
      ɵɵelement(2, "g", 2);
      ɵɵtemplate(3, BarVertical2DComponent__svg_g_3_Template, 1, 11, "g", 3)(4, BarVertical2DComponent__svg_g_4_Template, 1, 10, "g", 4)(5, BarVertical2DComponent__svg_g_5_Template, 2, 2, "g", 5);
      ɵɵelementEnd();
      ɵɵtemplate(6, BarVertical2DComponent__svg_g_6_Template, 2, 2, "g", 5);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(15, _c24, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("xScale", ctx.groupScale)("yScale", ctx.valueScale)("data", ctx.results)("dims", ctx.dims)("orient", ctx.barOrientation.Vertical);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.xAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.yAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.isSSR);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isSSR);
    }
  },
  dependencies: [ChartComponent, GridPanelSeriesComponent, XAxisComponent, YAxisComponent, SeriesVerticalComponent, NgIf, NgForOf],
  styles: [_c25],
  encapsulation: 2,
  data: {
    animation: [trigger("animationState", [transition(":leave", [style({
      opacity: 1,
      transform: "*"
    }), animate(500, style({
      opacity: 0,
      transform: "scale(0)"
    }))])])]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarVertical2DComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-bar-vertical-2d",
      template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelActivate)="onActivate($event, undefined, true)"
      (legendLabelDeactivate)="onDeactivate($event, undefined, true)"
      (legendLabelClick)="onClick($event)"
    >
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g
          ngx-charts-grid-panel-series
          [xScale]="groupScale"
          [yScale]="valueScale"
          [data]="results"
          [dims]="dims"
          [orient]="barOrientation.Vertical"
        ></svg:g>
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="groupScale"
          [dims]="dims"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          [xAxisOffset]="dataLabelMaxHeight.negative"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="valueScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g *ngIf="!isSSR">
          <svg:g
            ngx-charts-series-vertical
            *ngFor="let group of results; let index = index; trackBy: trackBy"
            [@animationState]="'active'"
            [attr.transform]="groupTransform(group)"
            [activeEntries]="activeEntries"
            [xScale]="innerScale"
            [yScale]="valueScale"
            [colors]="colors"
            [series]="group.series"
            [dims]="dims"
            [gradient]="gradient"
            [tooltipDisabled]="tooltipDisabled"
            [tooltipTemplate]="tooltipTemplate"
            [showDataLabel]="showDataLabel"
            [dataLabelFormatting]="dataLabelFormatting"
            [seriesName]="group.name"
            [roundEdges]="roundEdges"
            [animations]="animations"
            [noBarWhenZero]="noBarWhenZero"
            (select)="onClick($event, group)"
            (activate)="onActivate($event, group)"
            (deactivate)="onDeactivate($event, group)"
            (dataLabelHeightChanged)="onDataLabelMaxHeightChanged($event, index)"
          />
        </svg:g>
      </svg:g>
      <svg:g *ngIf="isSSR">
        <svg:g
          ngx-charts-series-vertical
          *ngFor="let group of results; let index = index; trackBy: trackBy"
          [attr.transform]="groupTransform(group)"
          [activeEntries]="activeEntries"
          [xScale]="innerScale"
          [yScale]="valueScale"
          [colors]="colors"
          [series]="group.series"
          [dims]="dims"
          [gradient]="gradient"
          [tooltipDisabled]="tooltipDisabled"
          [tooltipTemplate]="tooltipTemplate"
          [showDataLabel]="showDataLabel"
          [dataLabelFormatting]="dataLabelFormatting"
          [seriesName]="group.name"
          [roundEdges]="roundEdges"
          [animations]="animations"
          [noBarWhenZero]="noBarWhenZero"
          (select)="onClick($event, group)"
          (activate)="onActivate($event, group)"
          (deactivate)="onDeactivate($event, group)"
          (dataLabelHeightChanged)="onDataLabelMaxHeightChanged($event, index)"
        />
      </svg:g>
    </ngx-charts-chart>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("animationState", [transition(":leave", [style({
        opacity: 1,
        transform: "*"
      }), animate(500, style({
        opacity: 0,
        transform: "scale(0)"
      }))])])],
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"]
    }]
  }], null, {
    legend: [{
      type: Input
    }],
    legendTitle: [{
      type: Input
    }],
    legendPosition: [{
      type: Input
    }],
    xAxis: [{
      type: Input
    }],
    yAxis: [{
      type: Input
    }],
    showXAxisLabel: [{
      type: Input
    }],
    showYAxisLabel: [{
      type: Input
    }],
    xAxisLabel: [{
      type: Input
    }],
    yAxisLabel: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    scaleType: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    showGridLines: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    schemeType: [{
      type: Input
    }],
    trimXAxisTicks: [{
      type: Input
    }],
    trimYAxisTicks: [{
      type: Input
    }],
    rotateXAxisTicks: [{
      type: Input
    }],
    maxXAxisTickLength: [{
      type: Input
    }],
    maxYAxisTickLength: [{
      type: Input
    }],
    xAxisTickFormatting: [{
      type: Input
    }],
    yAxisTickFormatting: [{
      type: Input
    }],
    xAxisTicks: [{
      type: Input
    }],
    yAxisTicks: [{
      type: Input
    }],
    groupPadding: [{
      type: Input
    }],
    barPadding: [{
      type: Input
    }],
    roundDomains: [{
      type: Input
    }],
    roundEdges: [{
      type: Input
    }],
    yScaleMax: [{
      type: Input
    }],
    showDataLabel: [{
      type: Input
    }],
    dataLabelFormatting: [{
      type: Input
    }],
    noBarWhenZero: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }]
  });
})();
var BarVerticalNormalizedComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.legend = false;
    this.legendTitle = "Legend";
    this.legendPosition = LegendPosition.Right;
    this.tooltipDisabled = false;
    this.showGridLines = true;
    this.activeEntries = [];
    this.trimXAxisTicks = true;
    this.trimYAxisTicks = true;
    this.rotateXAxisTicks = true;
    this.maxXAxisTickLength = 16;
    this.maxYAxisTickLength = 16;
    this.barPadding = 8;
    this.roundDomains = false;
    this.noBarWhenZero = true;
    this.wrapTicks = false;
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.valueDomain = [0, 100];
    this.margin = [10, 20, 10, 20];
    this.xAxisHeight = 0;
    this.yAxisWidth = 0;
    this.isSSR = false;
    this.barChartType = BarChartType;
    this.trackBy = (index2, item) => {
      return item.name;
    };
  }
  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.isSSR = true;
    }
  }
  update() {
    super.update();
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
      showXAxis: this.xAxis,
      showYAxis: this.yAxis,
      xAxisHeight: this.xAxisHeight,
      yAxisWidth: this.yAxisWidth,
      showXLabel: this.showXAxisLabel,
      showYLabel: this.showYAxisLabel,
      showLegend: this.legend,
      legendType: this.schemeType,
      legendPosition: this.legendPosition
    });
    this.formatDates();
    this.groupDomain = this.getGroupDomain();
    this.innerDomain = this.getInnerDomain();
    this.xScale = this.getXScale();
    this.yScale = this.getYScale();
    this.setColors();
    this.legendOptions = this.getLegendOptions();
    this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
  }
  getGroupDomain() {
    const domain = [];
    for (const group2 of this.results) {
      if (!domain.includes(group2.label)) {
        domain.push(group2.label);
      }
    }
    return domain;
  }
  getInnerDomain() {
    const domain = [];
    for (const group2 of this.results) {
      for (const d of group2.series) {
        if (!domain.includes(d.label)) {
          domain.push(d.label);
        }
      }
    }
    return domain;
  }
  getXScale() {
    const spacing = this.groupDomain.length / (this.dims.width / this.barPadding + 1);
    return band().rangeRound([0, this.dims.width]).paddingInner(spacing).domain(this.groupDomain);
  }
  getYScale() {
    const scale = linear().range([this.dims.height, 0]).domain(this.valueDomain);
    return this.roundDomains ? scale.nice() : scale;
  }
  groupTransform(group2) {
    return `translate(${this.xScale(group2.name)}, 0)`;
  }
  onClick(data, group2) {
    if (group2) {
      data.series = group2.name;
    }
    this.select.emit(data);
  }
  setColors() {
    let domain;
    if (this.schemeType === ScaleType.Ordinal) {
      domain = this.innerDomain;
    } else {
      domain = this.valueDomain;
    }
    this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
  }
  getLegendOptions() {
    const opts = {
      scaleType: this.schemeType,
      colors: void 0,
      domain: [],
      title: void 0,
      position: this.legendPosition
    };
    if (opts.scaleType === ScaleType.Ordinal) {
      opts.domain = this.innerDomain;
      opts.colors = this.colors;
      opts.title = this.legendTitle;
    } else {
      opts.domain = this.valueDomain;
      opts.colors = this.colors.scale;
    }
    return opts;
  }
  updateYAxisWidth({
    width
  }) {
    this.yAxisWidth = width;
    this.update();
  }
  updateXAxisHeight({
    height
  }) {
    this.xAxisHeight = height;
    this.update();
  }
  onActivate(event, group2, fromLegend = false) {
    const item = Object.assign({}, event);
    if (group2) {
      item.series = group2.name;
    }
    const items = this.results.map((g) => g.series).flat().filter((i) => {
      if (fromLegend) {
        return i.label === item.name;
      } else {
        return i.name === item.name && i.series === item.series;
      }
    });
    this.activeEntries = [...items];
    this.activate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  onDeactivate(event, group2, fromLegend = false) {
    const item = Object.assign({}, event);
    if (group2) {
      item.series = group2.name;
    }
    this.activeEntries = this.activeEntries.filter((i) => {
      if (fromLegend) {
        return i.label !== item.name;
      } else {
        return !(i.name === item.name && i.series === item.series);
      }
    });
    this.deactivate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
};
BarVerticalNormalizedComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵBarVerticalNormalizedComponent_BaseFactory;
  return function BarVerticalNormalizedComponent_Factory(t) {
    return (ɵBarVerticalNormalizedComponent_BaseFactory || (ɵBarVerticalNormalizedComponent_BaseFactory = ɵɵgetInheritedFactory(BarVerticalNormalizedComponent)))(t || BarVerticalNormalizedComponent);
  };
})();
BarVerticalNormalizedComponent.ɵcmp = ɵɵdefineComponent({
  type: BarVerticalNormalizedComponent,
  selectors: [["ngx-charts-bar-vertical-normalized"]],
  contentQueries: function BarVerticalNormalizedComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    }
  },
  inputs: {
    legend: "legend",
    legendTitle: "legendTitle",
    legendPosition: "legendPosition",
    xAxis: "xAxis",
    yAxis: "yAxis",
    showXAxisLabel: "showXAxisLabel",
    showYAxisLabel: "showYAxisLabel",
    xAxisLabel: "xAxisLabel",
    yAxisLabel: "yAxisLabel",
    tooltipDisabled: "tooltipDisabled",
    gradient: "gradient",
    showGridLines: "showGridLines",
    activeEntries: "activeEntries",
    schemeType: "schemeType",
    trimXAxisTicks: "trimXAxisTicks",
    trimYAxisTicks: "trimYAxisTicks",
    rotateXAxisTicks: "rotateXAxisTicks",
    maxXAxisTickLength: "maxXAxisTickLength",
    maxYAxisTickLength: "maxYAxisTickLength",
    xAxisTickFormatting: "xAxisTickFormatting",
    yAxisTickFormatting: "yAxisTickFormatting",
    xAxisTicks: "xAxisTicks",
    yAxisTicks: "yAxisTicks",
    barPadding: "barPadding",
    roundDomains: "roundDomains",
    noBarWhenZero: "noBarWhenZero",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 6,
  vars: 13,
  consts: [[3, "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick", "view", "showLegend", "legendOptions", "activeEntries", "animations"], [1, "bar-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], [4, "ngIf"], ["ngx-charts-x-axis", "", 3, "dimensionsChanged", "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"], ["ngx-charts-y-axis", "", 3, "dimensionsChanged", "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-series-vertical", "", 3, "select", "activate", "deactivate", "type", "xScale", "yScale", "activeEntries", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "seriesName", "animations", "noBarWhenZero"]],
  template: function BarVerticalNormalizedComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵlistener("legendLabelActivate", function BarVerticalNormalizedComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) {
        return ctx.onActivate($event, void 0, true);
      })("legendLabelDeactivate", function BarVerticalNormalizedComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) {
        return ctx.onDeactivate($event, void 0, true);
      })("legendLabelClick", function BarVerticalNormalizedComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) {
        return ctx.onClick($event);
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "g", 1);
      ɵɵtemplate(2, BarVerticalNormalizedComponent__svg_g_2_Template, 1, 10, "g", 2)(3, BarVerticalNormalizedComponent__svg_g_3_Template, 1, 10, "g", 3)(4, BarVerticalNormalizedComponent__svg_g_4_Template, 2, 2, "g", 4)(5, BarVerticalNormalizedComponent__svg_g_5_Template, 2, 2, "g", 4);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(10, _c24, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.xAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.yAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.isSSR);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isSSR);
    }
  },
  dependencies: [ChartComponent, XAxisComponent, YAxisComponent, SeriesVerticalComponent, NgIf, NgForOf],
  styles: [_c25],
  encapsulation: 2,
  data: {
    animation: [trigger("animationState", [transition(":leave", [style({
      opacity: 1,
      transform: "*"
    }), animate(500, style({
      opacity: 0,
      transform: "scale(0)"
    }))])])]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarVerticalNormalizedComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-bar-vertical-normalized",
      template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelActivate)="onActivate($event, undefined, true)"
      (legendLabelDeactivate)="onDeactivate($event, undefined, true)"
      (legendLabelClick)="onClick($event)"
    >
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g *ngIf="!isSSR">
          <svg:g
            *ngFor="let group of results; trackBy: trackBy"
            [@animationState]="'active'"
            [attr.transform]="groupTransform(group)"
          >
            <svg:g
              ngx-charts-series-vertical
              [type]="barChartType.Normalized"
              [xScale]="xScale"
              [yScale]="yScale"
              [activeEntries]="activeEntries"
              [colors]="colors"
              [series]="group.series"
              [dims]="dims"
              [gradient]="gradient"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="tooltipTemplate"
              [seriesName]="group.name"
              [animations]="animations"
              [noBarWhenZero]="noBarWhenZero"
              (select)="onClick($event, group)"
              (activate)="onActivate($event, group)"
              (deactivate)="onDeactivate($event, group)"
            />
          </svg:g>
        </svg:g>
        <svg:g *ngIf="isSSR">
          <svg:g *ngFor="let group of results; trackBy: trackBy" [attr.transform]="groupTransform(group)">
            <svg:g
              ngx-charts-series-vertical
              [type]="barChartType.Normalized"
              [xScale]="xScale"
              [yScale]="yScale"
              [activeEntries]="activeEntries"
              [colors]="colors"
              [series]="group.series"
              [dims]="dims"
              [gradient]="gradient"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="tooltipTemplate"
              [seriesName]="group.name"
              [animations]="animations"
              [noBarWhenZero]="noBarWhenZero"
              (select)="onClick($event, group)"
              (activate)="onActivate($event, group)"
              (deactivate)="onDeactivate($event, group)"
            />
          </svg:g>
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("animationState", [transition(":leave", [style({
        opacity: 1,
        transform: "*"
      }), animate(500, style({
        opacity: 0,
        transform: "scale(0)"
      }))])])],
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"]
    }]
  }], null, {
    legend: [{
      type: Input
    }],
    legendTitle: [{
      type: Input
    }],
    legendPosition: [{
      type: Input
    }],
    xAxis: [{
      type: Input
    }],
    yAxis: [{
      type: Input
    }],
    showXAxisLabel: [{
      type: Input
    }],
    showYAxisLabel: [{
      type: Input
    }],
    xAxisLabel: [{
      type: Input
    }],
    yAxisLabel: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    showGridLines: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    schemeType: [{
      type: Input
    }],
    trimXAxisTicks: [{
      type: Input
    }],
    trimYAxisTicks: [{
      type: Input
    }],
    rotateXAxisTicks: [{
      type: Input
    }],
    maxXAxisTickLength: [{
      type: Input
    }],
    maxYAxisTickLength: [{
      type: Input
    }],
    xAxisTickFormatting: [{
      type: Input
    }],
    yAxisTickFormatting: [{
      type: Input
    }],
    xAxisTicks: [{
      type: Input
    }],
    yAxisTicks: [{
      type: Input
    }],
    barPadding: [{
      type: Input
    }],
    roundDomains: [{
      type: Input
    }],
    noBarWhenZero: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }]
  });
})();
var BarVerticalStackedComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.legend = false;
    this.legendTitle = "Legend";
    this.legendPosition = LegendPosition.Right;
    this.tooltipDisabled = false;
    this.showGridLines = true;
    this.activeEntries = [];
    this.trimXAxisTicks = true;
    this.trimYAxisTicks = true;
    this.rotateXAxisTicks = true;
    this.maxXAxisTickLength = 16;
    this.maxYAxisTickLength = 16;
    this.barPadding = 8;
    this.roundDomains = false;
    this.showDataLabel = false;
    this.noBarWhenZero = true;
    this.wrapTicks = false;
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.margin = [10, 20, 10, 20];
    this.xAxisHeight = 0;
    this.yAxisWidth = 0;
    this.dataLabelMaxHeight = {
      negative: 0,
      positive: 0
    };
    this.isSSR = false;
    this.barChartType = BarChartType;
    this.trackBy = (index2, item) => {
      return item.name;
    };
  }
  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.isSSR = true;
    }
  }
  update() {
    super.update();
    if (!this.showDataLabel) {
      this.dataLabelMaxHeight = {
        negative: 0,
        positive: 0
      };
    }
    this.margin = [10 + this.dataLabelMaxHeight.positive, 20, 10 + this.dataLabelMaxHeight.negative, 20];
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
      showXAxis: this.xAxis,
      showYAxis: this.yAxis,
      xAxisHeight: this.xAxisHeight,
      yAxisWidth: this.yAxisWidth,
      showXLabel: this.showXAxisLabel,
      showYLabel: this.showYAxisLabel,
      showLegend: this.legend,
      legendType: this.schemeType,
      legendPosition: this.legendPosition
    });
    if (this.showDataLabel) {
      this.dims.height -= this.dataLabelMaxHeight.negative;
    }
    this.formatDates();
    this.groupDomain = this.getGroupDomain();
    this.innerDomain = this.getInnerDomain();
    this.valueDomain = this.getValueDomain();
    this.xScale = this.getXScale();
    this.yScale = this.getYScale();
    this.setColors();
    this.legendOptions = this.getLegendOptions();
    this.transform = `translate(${this.dims.xOffset} , ${this.margin[0] + this.dataLabelMaxHeight.negative})`;
  }
  getGroupDomain() {
    const domain = [];
    for (const group2 of this.results) {
      if (!domain.includes(group2.label)) {
        domain.push(group2.label);
      }
    }
    return domain;
  }
  getInnerDomain() {
    const domain = [];
    for (const group2 of this.results) {
      for (const d of group2.series) {
        if (!domain.includes(d.label)) {
          domain.push(d.label);
        }
      }
    }
    return domain;
  }
  getValueDomain() {
    const domain = [];
    let smallest = 0;
    let biggest = 0;
    for (const group2 of this.results) {
      let smallestSum = 0;
      let biggestSum = 0;
      for (const d of group2.series) {
        if (d.value < 0) {
          smallestSum += d.value;
        } else {
          biggestSum += d.value;
        }
        smallest = d.value < smallest ? d.value : smallest;
        biggest = d.value > biggest ? d.value : biggest;
      }
      domain.push(smallestSum);
      domain.push(biggestSum);
    }
    domain.push(smallest);
    domain.push(biggest);
    const min4 = Math.min(0, ...domain);
    const max4 = this.yScaleMax ? Math.max(this.yScaleMax, ...domain) : Math.max(...domain);
    return [min4, max4];
  }
  getXScale() {
    const spacing = this.groupDomain.length / (this.dims.width / this.barPadding + 1);
    return band().rangeRound([0, this.dims.width]).paddingInner(spacing).domain(this.groupDomain);
  }
  getYScale() {
    const scale = linear().range([this.dims.height, 0]).domain(this.valueDomain);
    return this.roundDomains ? scale.nice() : scale;
  }
  onDataLabelMaxHeightChanged(event, groupIndex) {
    if (event.size.negative) {
      this.dataLabelMaxHeight.negative = Math.max(this.dataLabelMaxHeight.negative, event.size.height);
    } else {
      this.dataLabelMaxHeight.positive = Math.max(this.dataLabelMaxHeight.positive, event.size.height);
    }
    if (groupIndex === this.results.length - 1) {
      setTimeout(() => this.update());
    }
  }
  groupTransform(group2) {
    return `translate(${this.xScale(group2.name) || 0}, 0)`;
  }
  onClick(data, group2) {
    if (group2) {
      data.series = group2.name;
    }
    this.select.emit(data);
  }
  setColors() {
    let domain;
    if (this.schemeType === ScaleType.Ordinal) {
      domain = this.innerDomain;
    } else {
      domain = this.valueDomain;
    }
    this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
  }
  getLegendOptions() {
    const opts = {
      scaleType: this.schemeType,
      colors: void 0,
      domain: [],
      title: void 0,
      position: this.legendPosition
    };
    if (opts.scaleType === ScaleType.Ordinal) {
      opts.domain = this.innerDomain;
      opts.colors = this.colors;
      opts.title = this.legendTitle;
    } else {
      opts.domain = this.valueDomain;
      opts.colors = this.colors.scale;
    }
    return opts;
  }
  updateYAxisWidth({
    width
  }) {
    this.yAxisWidth = width;
    this.update();
  }
  updateXAxisHeight({
    height
  }) {
    this.xAxisHeight = height;
    this.update();
  }
  onActivate(event, group2, fromLegend = false) {
    const item = Object.assign({}, event);
    if (group2) {
      item.series = group2.name;
    }
    const items = this.results.map((g) => g.series).flat().filter((i) => {
      if (fromLegend) {
        return i.label === item.name;
      } else {
        return i.name === item.name && i.series === item.series;
      }
    });
    this.activeEntries = [...items];
    this.activate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  onDeactivate(event, group2, fromLegend = false) {
    const item = Object.assign({}, event);
    if (group2) {
      item.series = group2.name;
    }
    this.activeEntries = this.activeEntries.filter((i) => {
      if (fromLegend) {
        return i.label !== item.name;
      } else {
        return !(i.name === item.name && i.series === item.series);
      }
    });
    this.deactivate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
};
BarVerticalStackedComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵBarVerticalStackedComponent_BaseFactory;
  return function BarVerticalStackedComponent_Factory(t) {
    return (ɵBarVerticalStackedComponent_BaseFactory || (ɵBarVerticalStackedComponent_BaseFactory = ɵɵgetInheritedFactory(BarVerticalStackedComponent)))(t || BarVerticalStackedComponent);
  };
})();
BarVerticalStackedComponent.ɵcmp = ɵɵdefineComponent({
  type: BarVerticalStackedComponent,
  selectors: [["ngx-charts-bar-vertical-stacked"]],
  contentQueries: function BarVerticalStackedComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    }
  },
  inputs: {
    legend: "legend",
    legendTitle: "legendTitle",
    legendPosition: "legendPosition",
    xAxis: "xAxis",
    yAxis: "yAxis",
    showXAxisLabel: "showXAxisLabel",
    showYAxisLabel: "showYAxisLabel",
    xAxisLabel: "xAxisLabel",
    yAxisLabel: "yAxisLabel",
    tooltipDisabled: "tooltipDisabled",
    gradient: "gradient",
    showGridLines: "showGridLines",
    activeEntries: "activeEntries",
    schemeType: "schemeType",
    trimXAxisTicks: "trimXAxisTicks",
    trimYAxisTicks: "trimYAxisTicks",
    rotateXAxisTicks: "rotateXAxisTicks",
    maxXAxisTickLength: "maxXAxisTickLength",
    maxYAxisTickLength: "maxYAxisTickLength",
    xAxisTickFormatting: "xAxisTickFormatting",
    yAxisTickFormatting: "yAxisTickFormatting",
    xAxisTicks: "xAxisTicks",
    yAxisTicks: "yAxisTicks",
    barPadding: "barPadding",
    roundDomains: "roundDomains",
    yScaleMax: "yScaleMax",
    showDataLabel: "showDataLabel",
    dataLabelFormatting: "dataLabelFormatting",
    noBarWhenZero: "noBarWhenZero",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 6,
  vars: 13,
  consts: [[3, "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick", "view", "showLegend", "legendOptions", "activeEntries", "animations"], [1, "bar-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], [4, "ngIf"], ["ngx-charts-x-axis", "", 3, "dimensionsChanged", "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "wrapTicks"], ["ngx-charts-y-axis", "", 3, "dimensionsChanged", "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-series-vertical", "", 3, "select", "activate", "deactivate", "dataLabelHeightChanged", "type", "xScale", "yScale", "activeEntries", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "showDataLabel", "dataLabelFormatting", "seriesName", "animations", "noBarWhenZero"]],
  template: function BarVerticalStackedComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵlistener("legendLabelActivate", function BarVerticalStackedComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) {
        return ctx.onActivate($event, void 0, true);
      })("legendLabelDeactivate", function BarVerticalStackedComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) {
        return ctx.onDeactivate($event, void 0, true);
      })("legendLabelClick", function BarVerticalStackedComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) {
        return ctx.onClick($event);
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "g", 1);
      ɵɵtemplate(2, BarVerticalStackedComponent__svg_g_2_Template, 1, 11, "g", 2)(3, BarVerticalStackedComponent__svg_g_3_Template, 1, 10, "g", 3)(4, BarVerticalStackedComponent__svg_g_4_Template, 2, 2, "g", 4);
      ɵɵelementEnd();
      ɵɵtemplate(5, BarVerticalStackedComponent__svg_g_5_Template, 2, 2, "g", 4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(10, _c24, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.xAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.yAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.isSSR);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isSSR);
    }
  },
  dependencies: [ChartComponent, XAxisComponent, YAxisComponent, SeriesVerticalComponent, NgIf, NgForOf],
  styles: [_c25],
  encapsulation: 2,
  data: {
    animation: [trigger("animationState", [transition(":leave", [style({
      opacity: 1,
      transform: "*"
    }), animate(500, style({
      opacity: 0,
      transform: "scale(0)"
    }))])])]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarVerticalStackedComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-bar-vertical-stacked",
      template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelActivate)="onActivate($event, undefined, true)"
      (legendLabelDeactivate)="onDeactivate($event, undefined, true)"
      (legendLabelClick)="onClick($event)"
    >
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          [xAxisOffset]="dataLabelMaxHeight.negative"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g *ngIf="!isSSR">
          <svg:g
            *ngFor="let group of results; let index = index; trackBy: trackBy"
            [@animationState]="'active'"
            [attr.transform]="groupTransform(group)"
          >
            <svg:g
              ngx-charts-series-vertical
              [type]="barChartType.Stacked"
              [xScale]="xScale"
              [yScale]="yScale"
              [activeEntries]="activeEntries"
              [colors]="colors"
              [series]="group.series"
              [dims]="dims"
              [gradient]="gradient"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="tooltipTemplate"
              [showDataLabel]="showDataLabel"
              [dataLabelFormatting]="dataLabelFormatting"
              [seriesName]="group.name"
              [animations]="animations"
              [noBarWhenZero]="noBarWhenZero"
              (select)="onClick($event, group)"
              (activate)="onActivate($event, group)"
              (deactivate)="onDeactivate($event, group)"
              (dataLabelHeightChanged)="onDataLabelMaxHeightChanged($event, index)"
            />
          </svg:g>
        </svg:g>
      </svg:g>
      <svg:g *ngIf="isSSR">
        <svg:g
          *ngFor="let group of results; let index = index; trackBy: trackBy"
          [attr.transform]="groupTransform(group)"
        >
          <svg:g
            ngx-charts-series-vertical
            [type]="barChartType.Stacked"
            [xScale]="xScale"
            [yScale]="yScale"
            [activeEntries]="activeEntries"
            [colors]="colors"
            [series]="group.series"
            [dims]="dims"
            [gradient]="gradient"
            [tooltipDisabled]="tooltipDisabled"
            [tooltipTemplate]="tooltipTemplate"
            [showDataLabel]="showDataLabel"
            [dataLabelFormatting]="dataLabelFormatting"
            [seriesName]="group.name"
            [animations]="animations"
            [noBarWhenZero]="noBarWhenZero"
            (select)="onClick($event, group)"
            (activate)="onActivate($event, group)"
            (deactivate)="onDeactivate($event, group)"
            (dataLabelHeightChanged)="onDataLabelMaxHeightChanged($event, index)"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("animationState", [transition(":leave", [style({
        opacity: 1,
        transform: "*"
      }), animate(500, style({
        opacity: 0,
        transform: "scale(0)"
      }))])])],
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"]
    }]
  }], null, {
    legend: [{
      type: Input
    }],
    legendTitle: [{
      type: Input
    }],
    legendPosition: [{
      type: Input
    }],
    xAxis: [{
      type: Input
    }],
    yAxis: [{
      type: Input
    }],
    showXAxisLabel: [{
      type: Input
    }],
    showYAxisLabel: [{
      type: Input
    }],
    xAxisLabel: [{
      type: Input
    }],
    yAxisLabel: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    showGridLines: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    schemeType: [{
      type: Input
    }],
    trimXAxisTicks: [{
      type: Input
    }],
    trimYAxisTicks: [{
      type: Input
    }],
    rotateXAxisTicks: [{
      type: Input
    }],
    maxXAxisTickLength: [{
      type: Input
    }],
    maxYAxisTickLength: [{
      type: Input
    }],
    xAxisTickFormatting: [{
      type: Input
    }],
    yAxisTickFormatting: [{
      type: Input
    }],
    xAxisTicks: [{
      type: Input
    }],
    yAxisTicks: [{
      type: Input
    }],
    barPadding: [{
      type: Input
    }],
    roundDomains: [{
      type: Input
    }],
    yScaleMax: [{
      type: Input
    }],
    showDataLabel: [{
      type: Input
    }],
    dataLabelFormatting: [{
      type: Input
    }],
    noBarWhenZero: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }]
  });
})();
var BarChartModule = class {
};
BarChartModule.ɵfac = function BarChartModule_Factory(t) {
  return new (t || BarChartModule)();
};
BarChartModule.ɵmod = ɵɵdefineNgModule({
  type: BarChartModule,
  declarations: [BarComponent, BarHorizontalComponent, BarHorizontal2DComponent, BarHorizontalNormalizedComponent, BarHorizontalStackedComponent, BarVerticalComponent, BarVertical2DComponent, BarVerticalNormalizedComponent, BarVerticalStackedComponent, BarLabelComponent, SeriesHorizontal, SeriesVerticalComponent],
  imports: [ChartCommonModule],
  exports: [BarComponent, BarHorizontalComponent, BarHorizontal2DComponent, BarHorizontalNormalizedComponent, BarHorizontalStackedComponent, BarVerticalComponent, BarVertical2DComponent, BarVerticalNormalizedComponent, BarVerticalStackedComponent, BarLabelComponent, SeriesHorizontal, SeriesVerticalComponent]
});
BarChartModule.ɵinj = ɵɵdefineInjector({
  imports: [[ChartCommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarChartModule, [{
    type: NgModule,
    args: [{
      imports: [ChartCommonModule],
      declarations: [BarComponent, BarHorizontalComponent, BarHorizontal2DComponent, BarHorizontalNormalizedComponent, BarHorizontalStackedComponent, BarVerticalComponent, BarVertical2DComponent, BarVerticalNormalizedComponent, BarVerticalStackedComponent, BarLabelComponent, SeriesHorizontal, SeriesVerticalComponent],
      exports: [BarComponent, BarHorizontalComponent, BarHorizontal2DComponent, BarHorizontalNormalizedComponent, BarHorizontalStackedComponent, BarVerticalComponent, BarVertical2DComponent, BarVerticalNormalizedComponent, BarVerticalStackedComponent, BarLabelComponent, SeriesHorizontal, SeriesVerticalComponent]
    }]
  }], null, null);
})();
var cloneDeep = (0, import_rfdc.default)();
var BoxComponent = class {
  constructor(element, cd) {
    this.cd = cd;
    this.roundEdges = true;
    this.gradient = false;
    this.offset = 0;
    this.isActive = false;
    this.animations = true;
    this.noBarWhenZero = true;
    this.select = new EventEmitter();
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.BarOrientation = BarOrientation;
    this.initialized = false;
    this.hasGradient = false;
    this.hideBar = false;
    this.nativeElm = element.nativeElement;
  }
  ngOnChanges(changes) {
    if (!this.initialized) {
      this.loadAnimation();
      this.initialized = true;
    } else {
      this.update();
    }
  }
  update() {
    this.boxStrokeWidth = Math.max(this.strokeWidth, 1);
    this.whiskerStrokeWidth = Math.max(this.strokeWidth / 2, 1);
    this.medianLineWidth = 1.5 * this.strokeWidth;
    this.gradientId = "grad" + id().toString();
    this.gradientFill = `url(#${this.gradientId})`;
    if (this.gradient) {
      this.gradientStops = this.getGradient();
      this.hasGradient = true;
    } else {
      this.hasGradient = false;
    }
    this.updateLineEl();
    this.updatePathEl();
    this.checkToHideBar();
    this.maskLineId = "mask" + id().toString();
    this.maskLine = `url(#${this.maskLineId})`;
    if (this.cd) {
      this.cd.markForCheck();
    }
  }
  loadAnimation() {
    this.boxPath = this.oldPath = this.getStartingPath();
    this.oldLineCoordinates = this.getStartingLineCoordinates();
    setTimeout(this.update.bind(this), 100);
  }
  updatePathEl() {
    const nodeBar = select_default(this.nativeElm).selectAll(".bar");
    const path2 = this.getPath();
    if (this.animations) {
      nodeBar.attr("d", this.oldPath).transition().ease(sinInOut).duration(500).attrTween("d", this.pathTween(path2, 4));
    } else {
      nodeBar.attr("d", path2);
    }
    this.oldPath = path2;
  }
  updateLineEl() {
    const lineEl = select_default(this.nativeElm).selectAll(".bar-line");
    const lineCoordinates = this.lineCoordinates;
    const oldLineCoordinates = this.oldLineCoordinates;
    if (this.animations) {
      lineEl.attr("x1", (_, index2) => oldLineCoordinates[index2].v1.x).attr("y1", (_, index2) => oldLineCoordinates[index2].v1.y).attr("x2", (_, index2) => oldLineCoordinates[index2].v2.x).attr("y2", (_, index2) => oldLineCoordinates[index2].v2.y).transition().ease(sinInOut).duration(500).attr("x1", (_, index2) => lineCoordinates[index2].v1.x).attr("y1", (_, index2) => lineCoordinates[index2].v1.y).attr("x2", (_, index2) => lineCoordinates[index2].v2.x).attr("y2", (_, index2) => lineCoordinates[index2].v2.y);
    } else {
      lineEl.attr("x1", (_, index2) => lineCoordinates[index2].v1.x).attr("y1", (_, index2) => lineCoordinates[index2].v1.y).attr("x2", (_, index2) => lineCoordinates[index2].v2.x).attr("y2", (_, index2) => lineCoordinates[index2].v2.y);
    }
    this.oldLineCoordinates = [...lineCoordinates];
  }
  /**
   * See [D3 Selections](https://www.d3indepth.com/selections/)
   * @param d The joined data.
   * @param index The index of the element within the selection
   * @param node The node element (Line).
   */
  lineTween(attr, d, index2, node) {
    const nodeLineEl = node[index2];
    return nodeLineEl[attr].baseVal.value;
  }
  // TODO: Refactor into another .ts file if https://github.com/swimlane/ngx-charts/pull/1179 gets merged.
  pathTween(d1, precision) {
    return function() {
      const path0 = this;
      const path1 = this.cloneNode();
      path1.setAttribute("d", d1);
      const n0 = path0?.getTotalLength();
      const n1 = path1?.getTotalLength();
      const distances = [0];
      let i = 0;
      const dt = precision / Math.max(n0, n1);
      while (i < 1) {
        distances.push(i);
        i += dt;
      }
      distances.push(1);
      const points = distances.map((t) => {
        const p0 = path0.getPointAtLength(t * n0);
        const p1 = path1.getPointAtLength(t * n1);
        return value_default([p0.x, p0.y], [p1.x, p1.y]);
      });
      return (t) => {
        return t < 1 ? "M" + points.map((p) => p(t)).join("L") : d1;
      };
    };
  }
  getStartingPath() {
    if (!this.animations) {
      return this.getPath();
    }
    const radius = this.roundEdges ? 1 : 0;
    const {
      x: x2,
      y: y2
    } = this.lineCoordinates[2].v1;
    return roundedRect(x2 - this.width, y2 - 1, this.width, 2, radius, this.edges);
  }
  getPath() {
    const radius = this.getRadius();
    let path2 = "";
    path2 = roundedRect(this.x, this.y, this.width, this.height, Math.min(this.height, radius), this.edges);
    return path2;
  }
  getStartingLineCoordinates() {
    if (!this.animations) {
      return [...this.lineCoordinates];
    }
    const lineCoordinates = cloneDeep(this.lineCoordinates);
    lineCoordinates[1].v1.y = lineCoordinates[1].v2.y = lineCoordinates[3].v1.y = lineCoordinates[3].v2.y = lineCoordinates[0].v1.y = lineCoordinates[0].v2.y = lineCoordinates[2].v1.y;
    return lineCoordinates;
  }
  getRadius() {
    let radius = 0;
    if (this.roundEdges && this.height > 5 && this.width > 5) {
      radius = Math.floor(Math.min(5, this.height / 2, this.width / 2));
    }
    return radius;
  }
  getGradient() {
    return [{
      offset: 0,
      color: this.fill,
      opacity: this.getStartOpacity()
    }, {
      offset: 100,
      color: this.fill,
      opacity: 1
    }];
  }
  getStartOpacity() {
    if (this.roundEdges) {
      return 0.2;
    } else {
      return 0.5;
    }
  }
  get edges() {
    let edges = [false, false, false, false];
    if (this.roundEdges) {
      edges = [true, true, true, true];
    }
    return edges;
  }
  onMouseEnter() {
    this.activate.emit(this.data);
  }
  onMouseLeave() {
    this.deactivate.emit(this.data);
  }
  checkToHideBar() {
    this.hideBar = this.noBarWhenZero && this.height === 0;
  }
};
BoxComponent.ɵfac = function BoxComponent_Factory(t) {
  return new (t || BoxComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
};
BoxComponent.ɵcmp = ɵɵdefineComponent({
  type: BoxComponent,
  selectors: [["g", "ngx-charts-box", ""]],
  hostBindings: function BoxComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mouseenter", function BoxComponent_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function BoxComponent_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
  },
  inputs: {
    strokeColor: "strokeColor",
    strokeWidth: "strokeWidth",
    fill: "fill",
    data: "data",
    width: "width",
    height: "height",
    x: "x",
    y: "y",
    lineCoordinates: "lineCoordinates",
    roundEdges: "roundEdges",
    gradient: "gradient",
    gradientStops: "gradientStops",
    offset: "offset",
    isActive: "isActive",
    animations: "animations",
    ariaLabel: "ariaLabel",
    noBarWhenZero: "noBarWhenZero"
  },
  outputs: {
    select: "select",
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c30,
  decls: 9,
  vars: 13,
  consts: [["ngx-charts-svg-linear-gradient", "", 3, "orientation", "name", "stops", 4, "ngIf"], ["height", "100%", "width", "100%", "fill", "white", "fill-opacity", "1"], ["fill", "black", "fill-opacity", "1", 1, "bar"], ["role", "img", "tabIndex", "-1", 1, "bar", 3, "click"], ["class", "bar-line", "fill", "none", 3, "hidden", 4, "ngFor", "ngForOf"], ["ngx-charts-svg-linear-gradient", "", 3, "orientation", "name", "stops"], ["fill", "none", 1, "bar-line"]],
  template: function BoxComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "defs");
      ɵɵtemplate(1, BoxComponent__svg_g_1_Template, 1, 3, "g", 0);
      ɵɵelementStart(2, "mask")(3, "g");
      ɵɵelement(4, "rect", 1)(5, "path", 2);
      ɵɵelementEnd()()();
      ɵɵelementStart(6, "g")(7, "path", 3);
      ɵɵlistener("click", function BoxComponent_Template_path_click_7_listener() {
        return ctx.select.emit(ctx.data);
      });
      ɵɵelementEnd();
      ɵɵtemplate(8, BoxComponent__svg_line_8_Template, 1, 9, "line", 4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.hasGradient);
      ɵɵadvance();
      ɵɵattribute("id", ctx.maskLineId);
      ɵɵadvance(3);
      ɵɵattribute("d", ctx.boxPath);
      ɵɵadvance(2);
      ɵɵclassProp("active", ctx.isActive)("hidden", ctx.hideBar);
      ɵɵattribute("d", ctx.boxPath)("stroke", ctx.strokeColor)("stroke-width", ctx.boxStrokeWidth)("aria-label", ctx.ariaLabel)("fill", ctx.hasGradient ? ctx.gradientFill : ctx.fill);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.lineCoordinates);
    }
  },
  dependencies: [SvgLinearGradientComponent, NgIf, NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BoxComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-box]",
      template: `
    <svg:defs>
      <svg:g
        *ngIf="hasGradient"
        ngx-charts-svg-linear-gradient
        [orientation]="BarOrientation.Vertical"
        [name]="gradientId"
        [stops]="gradientStops"
      />
      <svg:mask [attr.id]="maskLineId">
        <svg:g>
          <rect height="100%" width="100%" fill="white" fill-opacity="1" />
          <path class="bar" [attr.d]="boxPath" fill="black" fill-opacity="1" />
        </svg:g>
      </svg:mask>
    </svg:defs>
    <svg:g>
      <svg:path
        class="bar"
        role="img"
        tabIndex="-1"
        [class.active]="isActive"
        [class.hidden]="hideBar"
        [attr.d]="boxPath"
        [attr.stroke]="strokeColor"
        [attr.stroke-width]="boxStrokeWidth"
        [attr.aria-label]="ariaLabel"
        [attr.fill]="hasGradient ? gradientFill : fill"
        (click)="select.emit(data)"
      />
      <svg:line
        *ngFor="let line of lineCoordinates; let i = index"
        class="bar-line"
        [class.hidden]="hideBar"
        [attr.x1]="line.v1.x"
        [attr.y1]="line.v1.y"
        [attr.x2]="line.v2.x"
        [attr.y2]="line.v2.y"
        [attr.stroke]="strokeColor"
        [attr.stroke-width]="i === 2 ? medianLineWidth : whiskerStrokeWidth"
        [attr.mask]="i ? undefined : maskLine"
        fill="none"
      />
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    strokeColor: [{
      type: Input
    }],
    strokeWidth: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    x: [{
      type: Input
    }],
    y: [{
      type: Input
    }],
    lineCoordinates: [{
      type: Input
    }],
    roundEdges: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    gradientStops: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    isActive: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    noBarWhenZero: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    onMouseEnter: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    onMouseLeave: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  });
})();
var BoxSeriesComponent = class {
  constructor() {
    this.animations = true;
    this.tooltipDisabled = false;
    this.gradient = false;
    this.select = new EventEmitter();
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
  }
  ngOnChanges(changes) {
    this.update();
  }
  onClick(data) {
    this.select.emit(data);
  }
  update() {
    this.updateTooltipSettings();
    const width = this.series && this.series.series.length ? Math.round(this.xScale.bandwidth()) : null;
    const seriesName = this.series.name;
    this.counts = this.series.series;
    const mappedCounts = this.counts.map((serie) => Number(serie.value));
    this.whiskers = [min(mappedCounts), max(mappedCounts)];
    const groupCounts = this.counts.map((item) => item.value).sort((a2, b) => Number(a2) - Number(b));
    this.quartiles = this.getBoxQuantiles(groupCounts);
    this.lineCoordinates = this.getLinesCoordinates(seriesName.toString(), this.whiskers, this.quartiles, width);
    const value2 = this.quartiles[1];
    const formattedLabel = formatLabel(seriesName);
    const box = {
      value: value2,
      data: this.counts,
      label: seriesName,
      formattedLabel,
      width,
      height: 0,
      x: 0,
      y: 0,
      roundEdges: this.roundEdges,
      quartiles: this.quartiles,
      lineCoordinates: this.lineCoordinates
    };
    box.height = Math.abs(this.yScale(this.quartiles[0]) - this.yScale(this.quartiles[2]));
    box.x = this.xScale(seriesName.toString());
    box.y = this.yScale(this.quartiles[2]);
    box.ariaLabel = formattedLabel + " - Median: " + value2.toLocaleString();
    if (this.colors.scaleType === ScaleType.Ordinal) {
      box.color = this.colors.getColor(seriesName);
    } else {
      box.color = this.colors.getColor(this.quartiles[1]);
      box.gradientStops = this.colors.getLinearGradientStops(this.quartiles[0], this.quartiles[2]);
    }
    const tooltipLabel = formattedLabel;
    const formattedTooltipLabel = `
    <span class="tooltip-label">${escapeLabel(tooltipLabel)}</span>
    <span class="tooltip-val">
      • Q1: ${this.quartiles[0]} • Q2: ${this.quartiles[1]} • Q3: ${this.quartiles[2]}<br>
      • Min: ${this.whiskers[0]} • Max: ${this.whiskers[1]}
    </span>`;
    box.tooltipText = this.tooltipDisabled ? void 0 : formattedTooltipLabel;
    this.tooltipTitle = this.tooltipDisabled ? void 0 : box.tooltipText;
    this.box = box;
  }
  getBoxQuantiles(inputData) {
    return [quantile(inputData, 0.25), quantile(inputData, 0.5), quantile(inputData, 0.75)];
  }
  getLinesCoordinates(seriesName, whiskers, quartiles, barWidth) {
    const commonX = this.xScale(seriesName);
    const offsetX = commonX + barWidth / 2;
    const medianLineWidth = Math.max(barWidth + 4 * this.strokeWidth, 1);
    const whiskerLineWidth = Math.max(barWidth / 3, 1);
    const whiskerZero = this.yScale(whiskers[0]);
    const whiskerOne = this.yScale(whiskers[1]);
    const median = this.yScale(quartiles[1]);
    const topLine = {
      v1: {
        x: offsetX + whiskerLineWidth / 2,
        y: whiskerZero
      },
      v2: {
        x: offsetX - whiskerLineWidth / 2,
        y: whiskerZero
      }
    };
    const medianLine = {
      v1: {
        x: offsetX + medianLineWidth / 2,
        y: median
      },
      v2: {
        x: offsetX - medianLineWidth / 2,
        y: median
      }
    };
    const bottomLine = {
      v1: {
        x: offsetX + whiskerLineWidth / 2,
        y: whiskerOne
      },
      v2: {
        x: offsetX - whiskerLineWidth / 2,
        y: whiskerOne
      }
    };
    const verticalLine = {
      v1: {
        x: offsetX,
        y: whiskerZero
      },
      v2: {
        x: offsetX,
        y: whiskerOne
      }
    };
    return [verticalLine, topLine, medianLine, bottomLine];
  }
  updateTooltipSettings() {
    if (this.tooltipDisabled) {
      this.tooltipPlacement = void 0;
      this.tooltipType = void 0;
    } else {
      if (!this.tooltipPlacement) {
        this.tooltipPlacement = PlacementTypes.Top;
      }
      if (!this.tooltipType) {
        this.tooltipType = StyleTypes.tooltip;
      }
    }
  }
};
BoxSeriesComponent.ɵfac = function BoxSeriesComponent_Factory(t) {
  return new (t || BoxSeriesComponent)();
};
BoxSeriesComponent.ɵcmp = ɵɵdefineComponent({
  type: BoxSeriesComponent,
  selectors: [["g", "ngx-charts-box-series", ""]],
  inputs: {
    dims: "dims",
    series: "series",
    xScale: "xScale",
    yScale: "yScale",
    colors: "colors",
    animations: "animations",
    strokeColor: "strokeColor",
    strokeWidth: "strokeWidth",
    tooltipDisabled: "tooltipDisabled",
    tooltipTemplate: "tooltipTemplate",
    tooltipPlacement: "tooltipPlacement",
    tooltipType: "tooltipType",
    roundEdges: "roundEdges",
    gradient: "gradient"
  },
  outputs: {
    select: "select",
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c31,
  decls: 1,
  vars: 22,
  consts: [["ngx-charts-box", "", "ngx-tooltip", "", 3, "select", "activate", "deactivate", "width", "height", "x", "y", "roundEdges", "fill", "gradientStops", "strokeColor", "strokeWidth", "data", "lineCoordinates", "gradient", "ariaLabel", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "animations"]],
  template: function BoxSeriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "g", 0);
      ɵɵlistener("select", function BoxSeriesComponent_Template_g_select_0_listener($event) {
        return ctx.onClick($event);
      })("activate", function BoxSeriesComponent_Template_g_activate_0_listener($event) {
        return ctx.activate.emit($event);
      })("deactivate", function BoxSeriesComponent_Template_g_deactivate_0_listener($event) {
        return ctx.deactivate.emit($event);
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("@animationState", "active")("@.disabled", !ctx.animations)("width", ctx.box.width)("height", ctx.box.height)("x", ctx.box.x)("y", ctx.box.y)("roundEdges", ctx.box.roundEdges)("fill", ctx.box.color)("gradientStops", ctx.box.gradientStops)("strokeColor", ctx.strokeColor)("strokeWidth", ctx.strokeWidth)("data", ctx.box.data)("lineCoordinates", ctx.box.lineCoordinates)("gradient", ctx.gradient)("ariaLabel", ctx.box.ariaLabel)("tooltipDisabled", ctx.tooltipDisabled)("tooltipPlacement", ctx.tooltipPlacement)("tooltipType", ctx.tooltipType)("tooltipTitle", ctx.tooltipTitle)("tooltipTemplate", ctx.tooltipTemplate)("tooltipContext", ctx.box.data)("animations", ctx.animations);
    }
  },
  dependencies: [BoxComponent, TooltipDirective],
  encapsulation: 2,
  data: {
    animation: [trigger("animationState", [transition(":leave", [style({
      opacity: 1
    }), animate(500, style({
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BoxSeriesComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-box-series]",
      template: `
    <svg:g
      ngx-charts-box
      [@animationState]="'active'"
      [@.disabled]="!animations"
      [width]="box.width"
      [height]="box.height"
      [x]="box.x"
      [y]="box.y"
      [roundEdges]="box.roundEdges"
      [fill]="box.color"
      [gradientStops]="box.gradientStops"
      [strokeColor]="strokeColor"
      [strokeWidth]="strokeWidth"
      [data]="box.data"
      [lineCoordinates]="box.lineCoordinates"
      [gradient]="gradient"
      [ariaLabel]="box.ariaLabel"
      (select)="onClick($event)"
      (activate)="activate.emit($event)"
      (deactivate)="deactivate.emit($event)"
      ngx-tooltip
      [tooltipDisabled]="tooltipDisabled"
      [tooltipPlacement]="tooltipPlacement"
      [tooltipType]="tooltipType"
      [tooltipTitle]="tooltipTitle"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipContext]="box.data"
      [animations]="animations"
    ></svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("animationState", [transition(":leave", [style({
        opacity: 1
      }), animate(500, style({
        opacity: 0
      }))])])]
    }]
  }], null, {
    dims: [{
      type: Input
    }],
    series: [{
      type: Input
    }],
    xScale: [{
      type: Input
    }],
    yScale: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    strokeColor: [{
      type: Input
    }],
    strokeWidth: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    tooltipTemplate: [{
      type: Input
    }],
    tooltipPlacement: [{
      type: Input
    }],
    tooltipType: [{
      type: Input
    }],
    roundEdges: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }]
  });
})();
var BoxChartComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.legend = false;
    this.legendPosition = LegendPosition.Right;
    this.legendTitle = "Legend";
    this.showGridLines = true;
    this.xAxis = true;
    this.yAxis = true;
    this.showXAxisLabel = true;
    this.showYAxisLabel = true;
    this.roundDomains = false;
    this.roundEdges = true;
    this.strokeColor = "#FFFFFF";
    this.strokeWidth = 2;
    this.tooltipDisabled = false;
    this.wrapTicks = false;
    this.select = new EventEmitter();
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.margin = [10, 20, 10, 20];
    this.xAxisHeight = 0;
    this.yAxisWidth = 0;
  }
  trackBy(index2, item) {
    return item.name;
  }
  update() {
    super.update();
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
      showXAxis: this.xAxis,
      showYAxis: this.yAxis,
      xAxisHeight: this.xAxisHeight,
      yAxisWidth: this.yAxisWidth,
      showXLabel: this.showXAxisLabel,
      showYLabel: this.showYAxisLabel,
      showLegend: this.legend,
      legendPosition: this.legendPosition
    });
    this.xDomain = this.getXDomain();
    this.yDomain = this.getYDomain();
    this.seriesDomain = this.getSeriesDomain();
    this.setScales();
    this.setColors();
    this.legendOptions = this.getLegendOptions();
    this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
  }
  setColors() {
    let domain = [];
    if (this.schemeType === ScaleType.Ordinal) {
      domain = this.seriesDomain;
    } else {
      domain = this.yDomain;
    }
    this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
  }
  setScales() {
    this.xScale = this.getXScale(this.xDomain, this.dims.width);
    this.yScale = this.getYScale(this.yDomain, this.dims.height);
  }
  getXScale(domain, width) {
    const scale = band().domain(domain.map((d) => d.toString())).rangeRound([0, width]).padding(0.5);
    return scale;
  }
  getYScale(domain, height) {
    const scale = linear().domain(domain).range([height, 0]);
    return this.roundDomains ? scale.nice() : scale;
  }
  getUniqueBoxChartXDomainValues(results) {
    const valueSet = /* @__PURE__ */ new Set();
    for (const result of results) {
      valueSet.add(result.name);
    }
    return Array.from(valueSet);
  }
  getXDomain() {
    let domain = [];
    const values = this.getUniqueBoxChartXDomainValues(this.results);
    let min4;
    let max4;
    if (typeof values[0] === "string") {
      domain = values.map((val) => val.toString());
    } else if (typeof values[0] === "number") {
      const mappedValues = values.map((v) => Number(v));
      min4 = Math.min(...mappedValues);
      max4 = Math.max(...mappedValues);
      domain = [min4, max4];
    } else {
      const mappedValues = values.map((v) => Number(new Date(v)));
      min4 = Math.min(...mappedValues);
      max4 = Math.max(...mappedValues);
      domain = [new Date(min4), new Date(max4)];
    }
    return domain;
  }
  getYDomain() {
    const domain = [];
    for (const results of this.results) {
      for (const d of results.series) {
        if (domain.indexOf(d.value) < 0) {
          domain.push(d.value);
        }
      }
    }
    const values = [...domain];
    const mappedValues = values.map((v) => Number(v));
    const min4 = Math.min(...mappedValues);
    const max4 = Math.max(...mappedValues);
    return [min4, max4];
  }
  getSeriesDomain() {
    return this.results.map((d) => `${d.name}`);
  }
  updateYAxisWidth({
    width
  }) {
    this.yAxisWidth = width;
    this.update();
  }
  updateXAxisHeight({
    height
  }) {
    this.xAxisHeight = height;
    this.update();
  }
  onClick(data) {
    this.select.emit(data);
  }
  onActivate(data) {
    this.activate.emit(data);
  }
  onDeactivate(data) {
    this.deactivate.emit(data);
  }
  getLegendOptions() {
    const legendOpts = {
      scaleType: this.schemeType,
      colors: this.colors,
      domain: [],
      position: this.legendPosition,
      title: this.legendTitle
    };
    if (this.schemeType === ScaleType.Ordinal) {
      legendOpts.domain = this.xDomain;
      legendOpts.colors = this.colors;
    } else {
      legendOpts.domain = this.yDomain;
      legendOpts.colors = this.colors.scale;
    }
    return legendOpts;
  }
};
BoxChartComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵBoxChartComponent_BaseFactory;
  return function BoxChartComponent_Factory(t) {
    return (ɵBoxChartComponent_BaseFactory || (ɵBoxChartComponent_BaseFactory = ɵɵgetInheritedFactory(BoxChartComponent)))(t || BoxChartComponent);
  };
})();
BoxChartComponent.ɵcmp = ɵɵdefineComponent({
  type: BoxChartComponent,
  selectors: [["ngx-charts-box-chart"]],
  contentQueries: function BoxChartComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    }
  },
  inputs: {
    legend: "legend",
    legendPosition: "legendPosition",
    legendTitle: "legendTitle",
    legendOptionsConfig: "legendOptionsConfig",
    showGridLines: "showGridLines",
    xAxis: "xAxis",
    yAxis: "yAxis",
    showXAxisLabel: "showXAxisLabel",
    showYAxisLabel: "showYAxisLabel",
    roundDomains: "roundDomains",
    xAxisLabel: "xAxisLabel",
    yAxisLabel: "yAxisLabel",
    roundEdges: "roundEdges",
    strokeColor: "strokeColor",
    strokeWidth: "strokeWidth",
    tooltipDisabled: "tooltipDisabled",
    gradient: "gradient",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    select: "select",
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 6,
  vars: 23,
  consts: [[3, "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate", "view", "showLegend", "legendOptions", "animations"], [1, "box-chart", "chart"], ["ngx-charts-x-axis", "", 3, "dimensionsChanged", "showGridLines", "dims", "xScale", "showLabel", "labelText", "wrapTicks"], ["ngx-charts-y-axis", "", 3, "dimensionsChanged", "showGridLines", "dims", "yScale", "showLabel", "labelText", "wrapTicks"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-box-series", "", 3, "activate", "deactivate", "select", "xScale", "yScale", "colors", "roundEdges", "strokeColor", "strokeWidth", "tooltipDisabled", "tooltipTemplate", "series", "dims", "animations", "gradient"]],
  template: function BoxChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵlistener("legendLabelClick", function BoxChartComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) {
        return ctx.onClick($event);
      })("legendLabelActivate", function BoxChartComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) {
        return ctx.onActivate($event);
      })("legendLabelDeactivate", function BoxChartComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) {
        return ctx.onDeactivate($event);
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "g", 1)(2, "g", 2);
      ɵɵlistener("dimensionsChanged", function BoxChartComponent_Template_g_dimensionsChanged_2_listener($event) {
        return ctx.updateXAxisHeight($event);
      });
      ɵɵelementEnd();
      ɵɵelementStart(3, "g", 3);
      ɵɵlistener("dimensionsChanged", function BoxChartComponent_Template_g_dimensionsChanged_3_listener($event) {
        return ctx.updateYAxisWidth($event);
      });
      ɵɵelementEnd()();
      ɵɵelementStart(4, "g");
      ɵɵtemplate(5, BoxChartComponent__svg_g_5_Template, 2, 12, "g", 4);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(20, _c24, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("showGridLines", ctx.showGridLines)("dims", ctx.dims)("xScale", ctx.xScale)("showLabel", ctx.showXAxisLabel)("labelText", ctx.xAxisLabel)("wrapTicks", ctx.wrapTicks);
      ɵɵadvance();
      ɵɵproperty("showGridLines", ctx.showGridLines)("dims", ctx.dims)("yScale", ctx.yScale)("showLabel", ctx.showYAxisLabel)("labelText", ctx.yAxisLabel)("wrapTicks", ctx.wrapTicks);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
    }
  },
  dependencies: [ChartComponent, XAxisComponent, YAxisComponent, BoxSeriesComponent, NgForOf],
  styles: [_c25],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BoxChartComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-box-chart",
      template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
    >
      <svg:g [attr.transform]="transform" class="box-chart chart">
        <svg:g
          ngx-charts-x-axis
          [showGridLines]="showGridLines"
          [dims]="dims"
          [xScale]="xScale"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        />
        <svg:g
          ngx-charts-y-axis
          [showGridLines]="showGridLines"
          [dims]="dims"
          [yScale]="yScale"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        />
      </svg:g>
      <svg:g [attr.transform]="transform">
        <svg:g *ngFor="let result of results; trackBy: trackBy">
          <svg:g
            ngx-charts-box-series
            [xScale]="xScale"
            [yScale]="yScale"
            [colors]="colors"
            [roundEdges]="roundEdges"
            [strokeColor]="strokeColor"
            [strokeWidth]="strokeWidth"
            [tooltipDisabled]="tooltipDisabled"
            [tooltipTemplate]="tooltipTemplate"
            [series]="result"
            [dims]="dims"
            [animations]="animations"
            [gradient]="gradient"
            (activate)="onActivate($event)"
            (deactivate)="onDeactivate($event)"
            (select)="onClick($event)"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"]
    }]
  }], null, {
    legend: [{
      type: Input
    }],
    legendPosition: [{
      type: Input
    }],
    legendTitle: [{
      type: Input
    }],
    legendOptionsConfig: [{
      type: Input
    }],
    showGridLines: [{
      type: Input
    }],
    xAxis: [{
      type: Input
    }],
    yAxis: [{
      type: Input
    }],
    showXAxisLabel: [{
      type: Input
    }],
    showYAxisLabel: [{
      type: Input
    }],
    roundDomains: [{
      type: Input
    }],
    xAxisLabel: [{
      type: Input
    }],
    yAxisLabel: [{
      type: Input
    }],
    roundEdges: [{
      type: Input
    }],
    strokeColor: [{
      type: Input
    }],
    strokeWidth: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate", {
        static: false
      }]
    }]
  });
})();
var BoxChartModule = class {
};
BoxChartModule.ɵfac = function BoxChartModule_Factory(t) {
  return new (t || BoxChartModule)();
};
BoxChartModule.ɵmod = ɵɵdefineNgModule({
  type: BoxChartModule,
  declarations: [BoxChartComponent, BoxSeriesComponent, BoxComponent],
  imports: [ChartCommonModule],
  exports: [BoxChartComponent, BoxSeriesComponent, BoxComponent]
});
BoxChartModule.ɵinj = ɵɵdefineInjector({
  imports: [[ChartCommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BoxChartModule, [{
    type: NgModule,
    args: [{
      imports: [ChartCommonModule],
      declarations: [BoxChartComponent, BoxSeriesComponent, BoxComponent],
      exports: [BoxChartComponent, BoxSeriesComponent, BoxComponent]
    }]
  }], null, null);
})();
function getDomain(values, scaleType, autoScale, minVal, maxVal) {
  let domain = [];
  if (scaleType === ScaleType.Linear) {
    values = values.map((v) => Number(v));
    if (!autoScale) {
      values.push(0);
    }
  }
  if (scaleType === ScaleType.Time || scaleType === ScaleType.Linear) {
    const min4 = minVal || minVal === 0 ? minVal : Math.min(...values);
    const max4 = maxVal ? maxVal : Math.max(...values);
    domain = [min4, max4];
  } else {
    domain = values;
  }
  return domain;
}
function getScale(domain, range2, scaleType, roundDomains) {
  switch (scaleType) {
    case ScaleType.Time:
      return time().range(range2).domain(domain);
    case ScaleType.Linear: {
      const scale = linear().range(range2).domain(domain);
      if (roundDomains) {
        return scale.nice();
      }
      return scale;
    }
    case ScaleType.Ordinal:
      return point().range([range2[0], range2[1]]).domain(domain.map((r) => r.toString()));
    default:
      return void 0;
  }
}
var BubbleSeriesComponent = class {
  constructor(platformId) {
    this.platformId = platformId;
    this.tooltipDisabled = false;
    this.select = new EventEmitter();
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.placementTypes = PlacementTypes;
    this.styleTypes = StyleTypes;
    this.isSSR = false;
  }
  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.isSSR = true;
    }
  }
  ngOnChanges(changes) {
    this.update();
  }
  update() {
    this.circles = this.getCircles();
  }
  getCircles() {
    const seriesName = this.data.name;
    return this.data.series.map((d, i) => {
      if (typeof d.y !== "undefined" && typeof d.x !== "undefined") {
        const y2 = d.y;
        const x2 = d.x;
        const r = d.r;
        const radius = this.rScale(r || 1);
        const tooltipLabel = formatLabel(d.name);
        const cx = this.xScaleType === ScaleType.Linear ? this.xScale(Number(x2)) : this.xScale(x2);
        const cy = this.yScaleType === ScaleType.Linear ? this.yScale(Number(y2)) : this.yScale(y2);
        const color = this.colors.scaleType === ScaleType.Linear ? this.colors.getColor(r) : this.colors.getColor(seriesName);
        const isActive = !this.activeEntries.length ? true : this.isActive({
          name: seriesName
        });
        const opacity = isActive ? 1 : 0.3;
        const data = Object.assign({}, d, {
          series: seriesName,
          name: d.name,
          value: d.y,
          x: d.x,
          radius: d.r
        });
        return {
          data,
          x: x2,
          y: y2,
          r,
          classNames: [`circle-data-${i}`],
          value: y2,
          label: x2,
          cx,
          cy,
          radius,
          tooltipLabel,
          color,
          opacity,
          seriesName,
          isActive,
          transform: `translate(${cx},${cy})`
        };
      }
    }).filter((circle) => circle !== void 0);
  }
  getTooltipText(circle) {
    const hasRadius = typeof circle.r !== "undefined";
    const hasTooltipLabel = circle.tooltipLabel && circle.tooltipLabel.length;
    const hasSeriesName = circle.seriesName && circle.seriesName.length;
    const radiusValue = hasRadius ? formatLabel(circle.r) : "";
    const xAxisLabel = this.xAxisLabel && this.xAxisLabel !== "" ? `${this.xAxisLabel}:` : "";
    const yAxisLabel = this.yAxisLabel && this.yAxisLabel !== "" ? `${this.yAxisLabel}:` : "";
    const x2 = formatLabel(circle.x);
    const y2 = formatLabel(circle.y);
    const name = hasSeriesName && hasTooltipLabel ? `${circle.seriesName} • ${circle.tooltipLabel}` : circle.seriesName + circle.tooltipLabel;
    const tooltipTitle = hasSeriesName || hasTooltipLabel ? `<span class="tooltip-label">${escapeLabel(name)}</span>` : "";
    return `
      ${tooltipTitle}
      <span class="tooltip-label">
        <label>${escapeLabel(xAxisLabel)}</label> ${escapeLabel(x2)}<br />
        <label>${escapeLabel(yAxisLabel)}</label> ${escapeLabel(y2)}
      </span>
      <span class="tooltip-val">
        ${escapeLabel(radiusValue)}
      </span>
    `;
  }
  onClick(data) {
    this.select.emit(data);
  }
  isActive(entry) {
    if (!this.activeEntries) return false;
    const item = this.activeEntries.find((d) => {
      return entry.name === d.name;
    });
    return item !== void 0;
  }
  isVisible(circle) {
    if (this.activeEntries.length > 0) {
      return this.isActive({
        name: circle.seriesName
      });
    }
    return circle.opacity !== 0;
  }
  activateCircle(circle) {
    circle.barVisible = true;
    this.activate.emit({
      name: this.data.name
    });
  }
  deactivateCircle(circle) {
    circle.barVisible = false;
    this.deactivate.emit({
      name: this.data.name
    });
  }
  trackBy(index2, circle) {
    return `${circle.data.series} ${circle.data.name}`;
  }
};
BubbleSeriesComponent.ɵfac = function BubbleSeriesComponent_Factory(t) {
  return new (t || BubbleSeriesComponent)(ɵɵdirectiveInject(PLATFORM_ID));
};
BubbleSeriesComponent.ɵcmp = ɵɵdefineComponent({
  type: BubbleSeriesComponent,
  selectors: [["g", "ngx-charts-bubble-series", ""]],
  inputs: {
    data: "data",
    xScale: "xScale",
    yScale: "yScale",
    rScale: "rScale",
    xScaleType: "xScaleType",
    yScaleType: "yScaleType",
    colors: "colors",
    visibleValue: "visibleValue",
    activeEntries: "activeEntries",
    xAxisLabel: "xAxisLabel",
    yAxisLabel: "yAxisLabel",
    tooltipDisabled: "tooltipDisabled",
    tooltipTemplate: "tooltipTemplate"
  },
  outputs: {
    select: "select",
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c32,
  decls: 1,
  vars: 2,
  consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-circle", "", "class", "circle", "ngx-tooltip", "", 3, "cx", "cy", "r", "fill", "opacity", "active", "pointerEvents", "data", "classNames", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate", 4, "ngIf"], ["ngx-charts-circle", "", "ngx-tooltip", "", 1, "circle", 3, "select", "activate", "deactivate", "cx", "cy", "r", "fill", "pointerEvents", "data", "classNames", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext"]],
  template: function BubbleSeriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, BubbleSeriesComponent__svg_g_0_Template, 4, 3, "g", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.circles)("ngForTrackBy", ctx.trackBy);
    }
  },
  dependencies: [CircleComponent, NgForOf, NgIf, TooltipDirective],
  encapsulation: 2,
  data: {
    animation: [trigger("animationState", [transition(":enter", [style({
      opacity: 0,
      transform: "scale(0)"
    }), animate(250, style({
      opacity: 1,
      transform: "scale(1)"
    }))])])]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BubbleSeriesComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-bubble-series]",
      template: `
    <svg:g *ngFor="let circle of circles; trackBy: trackBy">
      <svg:g [attr.transform]="circle.transform">
        <svg:g
          *ngIf="!isSSR"
          ngx-charts-circle
          [@animationState]="'active'"
          class="circle"
          [cx]="0"
          [cy]="0"
          [r]="circle.radius"
          [fill]="circle.color"
          [style.opacity]="circle.opacity"
          [class.active]="circle.isActive"
          [pointerEvents]="'all'"
          [data]="circle.value"
          [classNames]="circle.classNames"
          (select)="onClick(circle.data)"
          (activate)="activateCircle(circle)"
          (deactivate)="deactivateCircle(circle)"
          ngx-tooltip
          [tooltipDisabled]="tooltipDisabled"
          [tooltipPlacement]="placementTypes.Top"
          [tooltipType]="styleTypes.tooltip"
          [tooltipTitle]="tooltipTemplate ? undefined : getTooltipText(circle)"
          [tooltipTemplate]="tooltipTemplate"
          [tooltipContext]="circle.data"
        />
        <svg:g
          *ngIf="isSSR"
          ngx-charts-circle
          class="circle"
          [cx]="0"
          [cy]="0"
          [r]="circle.radius"
          [fill]="circle.color"
          [style.opacity]="circle.opacity"
          [class.active]="circle.isActive"
          [pointerEvents]="'all'"
          [data]="circle.value"
          [classNames]="circle.classNames"
          (select)="onClick(circle.data)"
          (activate)="activateCircle(circle)"
          (deactivate)="deactivateCircle(circle)"
          ngx-tooltip
          [tooltipDisabled]="tooltipDisabled"
          [tooltipPlacement]="placementTypes.Top"
          [tooltipType]="styleTypes.tooltip"
          [tooltipTitle]="tooltipTemplate ? undefined : getTooltipText(circle)"
          [tooltipTemplate]="tooltipTemplate"
          [tooltipContext]="circle.data"
        />
      </svg:g>
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("animationState", [transition(":enter", [style({
        opacity: 0,
        transform: "scale(0)"
      }), animate(250, style({
        opacity: 1,
        transform: "scale(1)"
      }))])])]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    data: [{
      type: Input
    }],
    xScale: [{
      type: Input
    }],
    yScale: [{
      type: Input
    }],
    rScale: [{
      type: Input
    }],
    xScaleType: [{
      type: Input
    }],
    yScaleType: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    visibleValue: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    xAxisLabel: [{
      type: Input
    }],
    yAxisLabel: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    tooltipTemplate: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }]
  });
})();
var BubbleChartComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.showGridLines = true;
    this.legend = false;
    this.legendTitle = "Legend";
    this.legendPosition = LegendPosition.Right;
    this.xAxis = true;
    this.yAxis = true;
    this.trimXAxisTicks = true;
    this.trimYAxisTicks = true;
    this.rotateXAxisTicks = true;
    this.maxXAxisTickLength = 16;
    this.maxYAxisTickLength = 16;
    this.roundDomains = false;
    this.maxRadius = 10;
    this.minRadius = 3;
    this.schemeType = ScaleType.Ordinal;
    this.tooltipDisabled = false;
    this.wrapTicks = false;
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.scaleType = ScaleType.Linear;
    this.margin = [10, 20, 10, 20];
    this.bubblePadding = [0, 0, 0, 0];
    this.xAxisHeight = 0;
    this.yAxisWidth = 0;
    this.activeEntries = [];
    this.isSSR = false;
  }
  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.isSSR = true;
    }
  }
  update() {
    super.update();
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
      showXAxis: this.xAxis,
      showYAxis: this.yAxis,
      xAxisHeight: this.xAxisHeight,
      yAxisWidth: this.yAxisWidth,
      showXLabel: this.showXAxisLabel,
      showYLabel: this.showYAxisLabel,
      showLegend: this.legend,
      legendType: this.schemeType,
      legendPosition: this.legendPosition
    });
    this.seriesDomain = this.results.map((d) => d.name);
    this.rDomain = this.getRDomain();
    this.xDomain = this.getXDomain();
    this.yDomain = this.getYDomain();
    this.transform = `translate(${this.dims.xOffset},${this.margin[0]})`;
    const colorDomain = this.schemeType === ScaleType.Ordinal ? this.seriesDomain : this.rDomain;
    this.colors = new ColorHelper(this.scheme, this.schemeType, colorDomain, this.customColors);
    this.data = this.results;
    this.minRadius = Math.max(this.minRadius, 1);
    this.maxRadius = Math.max(this.maxRadius, 1);
    this.rScale = this.getRScale(this.rDomain, [this.minRadius, this.maxRadius]);
    this.bubblePadding = [0, 0, 0, 0];
    this.setScales();
    this.bubblePadding = this.getBubblePadding();
    this.setScales();
    this.legendOptions = this.getLegendOptions();
    this.clipPathId = "clip" + id().toString();
    this.clipPath = `url(#${this.clipPathId})`;
  }
  hideCircles() {
    this.deactivateAll();
  }
  onClick(data, series) {
    if (series) {
      data.series = series.name;
    }
    this.select.emit(data);
  }
  getBubblePadding() {
    let yMin = 0;
    let xMin = 0;
    let yMax = this.dims.height;
    let xMax = this.dims.width;
    for (const s2 of this.data) {
      for (const d of s2.series) {
        const r = this.rScale(d.r);
        const cx = this.xScaleType === ScaleType.Linear ? this.xScale(Number(d.x)) : this.xScale(d.x);
        const cy = this.yScaleType === ScaleType.Linear ? this.yScale(Number(d.y)) : this.yScale(d.y);
        xMin = Math.max(r - cx, xMin);
        yMin = Math.max(r - cy, yMin);
        yMax = Math.max(cy + r, yMax);
        xMax = Math.max(cx + r, xMax);
      }
    }
    xMax = Math.max(xMax - this.dims.width, 0);
    yMax = Math.max(yMax - this.dims.height, 0);
    return [yMin, xMax, yMax, xMin];
  }
  setScales() {
    let width = this.dims.width;
    if (this.xScaleMin === void 0 && this.xScaleMax === void 0) {
      width = width - this.bubblePadding[1];
    }
    let height = this.dims.height;
    if (this.yScaleMin === void 0 && this.yScaleMax === void 0) {
      height = height - this.bubblePadding[2];
    }
    this.xScale = this.getXScale(this.xDomain, width);
    this.yScale = this.getYScale(this.yDomain, height);
  }
  getYScale(domain, height) {
    return getScale(domain, [height, this.bubblePadding[0]], this.yScaleType, this.roundDomains);
  }
  getXScale(domain, width) {
    return getScale(domain, [this.bubblePadding[3], width], this.xScaleType, this.roundDomains);
  }
  getRScale(domain, range2) {
    const scale = linear().range(range2).domain(domain);
    return this.roundDomains ? scale.nice() : scale;
  }
  getLegendOptions() {
    const opts = {
      scaleType: this.schemeType,
      colors: void 0,
      domain: [],
      position: this.legendPosition,
      title: void 0
    };
    if (opts.scaleType === ScaleType.Ordinal) {
      opts.domain = this.seriesDomain;
      opts.colors = this.colors;
      opts.title = this.legendTitle;
    } else {
      opts.domain = this.rDomain;
      opts.colors = this.colors.scale;
    }
    return opts;
  }
  getXDomain() {
    const values = [];
    for (const results of this.results) {
      for (const d of results.series) {
        if (!values.includes(d.x)) {
          values.push(d.x);
        }
      }
    }
    this.xScaleType = getScaleType(values);
    return getDomain(values, this.xScaleType, this.autoScale, this.xScaleMin, this.xScaleMax);
  }
  getYDomain() {
    const values = [];
    for (const results of this.results) {
      for (const d of results.series) {
        if (!values.includes(d.y)) {
          values.push(d.y);
        }
      }
    }
    this.yScaleType = getScaleType(values);
    return getDomain(values, this.yScaleType, this.autoScale, this.yScaleMin, this.yScaleMax);
  }
  getRDomain() {
    let min4 = Infinity;
    let max4 = -Infinity;
    for (const results of this.results) {
      for (const d of results.series) {
        const value2 = Number(d.r) || 1;
        min4 = Math.min(min4, value2);
        max4 = Math.max(max4, value2);
      }
    }
    return [min4, max4];
  }
  updateYAxisWidth({
    width
  }) {
    this.yAxisWidth = width;
    this.update();
  }
  updateXAxisHeight({
    height
  }) {
    this.xAxisHeight = height;
    this.update();
  }
  onActivate(item) {
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name;
    });
    if (idx > -1) {
      return;
    }
    this.activeEntries = [item, ...this.activeEntries];
    this.activate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  onDeactivate(item) {
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name;
    });
    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];
    this.deactivate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  deactivateAll() {
    this.activeEntries = [...this.activeEntries];
    for (const entry of this.activeEntries) {
      this.deactivate.emit({
        value: entry,
        entries: []
      });
    }
    this.activeEntries = [];
  }
  trackBy(index2, item) {
    return `${item.name}`;
  }
};
BubbleChartComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵBubbleChartComponent_BaseFactory;
  return function BubbleChartComponent_Factory(t) {
    return (ɵBubbleChartComponent_BaseFactory || (ɵBubbleChartComponent_BaseFactory = ɵɵgetInheritedFactory(BubbleChartComponent)))(t || BubbleChartComponent);
  };
})();
BubbleChartComponent.ɵcmp = ɵɵdefineComponent({
  type: BubbleChartComponent,
  selectors: [["ngx-charts-bubble-chart"]],
  contentQueries: function BubbleChartComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    }
  },
  hostBindings: function BubbleChartComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mouseleave", function BubbleChartComponent_mouseleave_HostBindingHandler() {
        return ctx.hideCircles();
      });
    }
  },
  inputs: {
    showGridLines: "showGridLines",
    legend: "legend",
    legendTitle: "legendTitle",
    legendPosition: "legendPosition",
    xAxis: "xAxis",
    yAxis: "yAxis",
    showXAxisLabel: "showXAxisLabel",
    showYAxisLabel: "showYAxisLabel",
    xAxisLabel: "xAxisLabel",
    yAxisLabel: "yAxisLabel",
    trimXAxisTicks: "trimXAxisTicks",
    trimYAxisTicks: "trimYAxisTicks",
    rotateXAxisTicks: "rotateXAxisTicks",
    maxXAxisTickLength: "maxXAxisTickLength",
    maxYAxisTickLength: "maxYAxisTickLength",
    xAxisTickFormatting: "xAxisTickFormatting",
    yAxisTickFormatting: "yAxisTickFormatting",
    xAxisTicks: "xAxisTicks",
    yAxisTicks: "yAxisTicks",
    roundDomains: "roundDomains",
    maxRadius: "maxRadius",
    minRadius: "minRadius",
    autoScale: "autoScale",
    schemeType: "schemeType",
    tooltipDisabled: "tooltipDisabled",
    xScaleMin: "xScaleMin",
    xScaleMax: "xScaleMax",
    yScaleMin: "yScaleMin",
    yScaleMax: "yScaleMax",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 10,
  vars: 19,
  consts: [[3, "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate", "view", "showLegend", "activeEntries", "legendOptions", "animations"], [1, "bubble-chart", "chart"], ["ngx-charts-x-axis", "", 3, "showGridLines", "dims", "xScale", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "showGridLines", "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["x", "0", "y", "0", 1, "bubble-chart-area", 2, "fill", "rgb(255, 0, 0)", "opacity", "0", "cursor", "'auto'", 3, "mouseenter"], [4, "ngIf"], ["ngx-charts-x-axis", "", 3, "dimensionsChanged", "showGridLines", "dims", "xScale", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"], ["ngx-charts-y-axis", "", 3, "dimensionsChanged", "showGridLines", "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-bubble-series", "", 3, "select", "activate", "deactivate", "xScale", "yScale", "rScale", "xScaleType", "yScaleType", "xAxisLabel", "yAxisLabel", "colors", "data", "activeEntries", "tooltipDisabled", "tooltipTemplate"]],
  template: function BubbleChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵlistener("legendLabelClick", function BubbleChartComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) {
        return ctx.onClick($event);
      })("legendLabelActivate", function BubbleChartComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) {
        return ctx.onActivate($event);
      })("legendLabelDeactivate", function BubbleChartComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) {
        return ctx.onDeactivate($event);
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "defs")(2, "clipPath");
      ɵɵelement(3, "rect");
      ɵɵelementEnd()();
      ɵɵelementStart(4, "g", 1);
      ɵɵtemplate(5, BubbleChartComponent__svg_g_5_Template, 1, 11, "g", 2)(6, BubbleChartComponent__svg_g_6_Template, 1, 10, "g", 3);
      ɵɵelementStart(7, "rect", 4);
      ɵɵlistener("mouseenter", function BubbleChartComponent_Template_rect_mouseenter_7_listener() {
        return ctx.deactivateAll();
      });
      ɵɵelementEnd();
      ɵɵtemplate(8, BubbleChartComponent__svg_g_8_Template, 2, 3, "g", 5)(9, BubbleChartComponent__svg_g_9_Template, 2, 3, "g", 5);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(16, _c24, ctx.width, ctx.height))("showLegend", ctx.legend)("activeEntries", ctx.activeEntries)("legendOptions", ctx.legendOptions)("animations", ctx.animations);
      ɵɵadvance(2);
      ɵɵattribute("id", ctx.clipPathId);
      ɵɵadvance();
      ɵɵattribute("width", ctx.dims.width + 10)("height", ctx.dims.height + 10)("transform", "translate(-5, -5)");
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.xAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.yAxis);
      ɵɵadvance();
      ɵɵattribute("width", ctx.dims.width)("height", ctx.dims.height);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.isSSR);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isSSR);
    }
  },
  dependencies: [ChartComponent, XAxisComponent, YAxisComponent, BubbleSeriesComponent, NgIf, NgForOf],
  styles: [_c25],
  encapsulation: 2,
  data: {
    animation: [trigger("animationState", [transition(":leave", [style({
      opacity: 1
    }), animate(500, style({
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BubbleChartComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-bubble-chart",
      template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [activeEntries]="activeEntries"
      [legendOptions]="legendOptions"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
    >
      <svg:defs>
        <svg:clipPath [attr.id]="clipPathId">
          <svg:rect
            [attr.width]="dims.width + 10"
            [attr.height]="dims.height + 10"
            [attr.transform]="'translate(-5, -5)'"
          />
        </svg:clipPath>
      </svg:defs>
      <svg:g [attr.transform]="transform" class="bubble-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [showGridLines]="showGridLines"
          [dims]="dims"
          [xScale]="xScale"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        />
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [showGridLines]="showGridLines"
          [yScale]="yScale"
          [dims]="dims"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        />
        <svg:rect
          class="bubble-chart-area"
          x="0"
          y="0"
          [attr.width]="dims.width"
          [attr.height]="dims.height"
          style="fill: rgb(255, 0, 0); opacity: 0; cursor: 'auto';"
          (mouseenter)="deactivateAll()"
        />
        <svg:g *ngIf="!isSSR" [attr.clip-path]="clipPath">
          <svg:g *ngFor="let series of data; trackBy: trackBy" [@animationState]="'active'">
            <svg:g
              ngx-charts-bubble-series
              [xScale]="xScale"
              [yScale]="yScale"
              [rScale]="rScale"
              [xScaleType]="xScaleType"
              [yScaleType]="yScaleType"
              [xAxisLabel]="xAxisLabel"
              [yAxisLabel]="yAxisLabel"
              [colors]="colors"
              [data]="series"
              [activeEntries]="activeEntries"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="tooltipTemplate"
              (select)="onClick($event, series)"
              (activate)="onActivate($event)"
              (deactivate)="onDeactivate($event)"
            />
          </svg:g>
        </svg:g>
        <svg:g *ngIf="isSSR" [attr.clip-path]="clipPath">
          <svg:g *ngFor="let series of data; trackBy: trackBy">
            <svg:g
              ngx-charts-bubble-series
              [xScale]="xScale"
              [yScale]="yScale"
              [rScale]="rScale"
              [xScaleType]="xScaleType"
              [yScaleType]="yScaleType"
              [xAxisLabel]="xAxisLabel"
              [yAxisLabel]="yAxisLabel"
              [colors]="colors"
              [data]="series"
              [activeEntries]="activeEntries"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="tooltipTemplate"
              (select)="onClick($event, series)"
              (activate)="onActivate($event)"
              (deactivate)="onDeactivate($event)"
            />
          </svg:g>
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      animations: [trigger("animationState", [transition(":leave", [style({
        opacity: 1
      }), animate(500, style({
        opacity: 0
      }))])])],
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"]
    }]
  }], null, {
    showGridLines: [{
      type: Input
    }],
    legend: [{
      type: Input
    }],
    legendTitle: [{
      type: Input
    }],
    legendPosition: [{
      type: Input
    }],
    xAxis: [{
      type: Input
    }],
    yAxis: [{
      type: Input
    }],
    showXAxisLabel: [{
      type: Input
    }],
    showYAxisLabel: [{
      type: Input
    }],
    xAxisLabel: [{
      type: Input
    }],
    yAxisLabel: [{
      type: Input
    }],
    trimXAxisTicks: [{
      type: Input
    }],
    trimYAxisTicks: [{
      type: Input
    }],
    rotateXAxisTicks: [{
      type: Input
    }],
    maxXAxisTickLength: [{
      type: Input
    }],
    maxYAxisTickLength: [{
      type: Input
    }],
    xAxisTickFormatting: [{
      type: Input
    }],
    yAxisTickFormatting: [{
      type: Input
    }],
    xAxisTicks: [{
      type: Input
    }],
    yAxisTicks: [{
      type: Input
    }],
    roundDomains: [{
      type: Input
    }],
    maxRadius: [{
      type: Input
    }],
    minRadius: [{
      type: Input
    }],
    autoScale: [{
      type: Input
    }],
    schemeType: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    xScaleMin: [{
      type: Input
    }],
    xScaleMax: [{
      type: Input
    }],
    yScaleMin: [{
      type: Input
    }],
    yScaleMax: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }],
    hideCircles: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  });
})();
var BubbleChartModule = class {
};
BubbleChartModule.ɵfac = function BubbleChartModule_Factory(t) {
  return new (t || BubbleChartModule)();
};
BubbleChartModule.ɵmod = ɵɵdefineNgModule({
  type: BubbleChartModule,
  declarations: [BubbleChartComponent, BubbleSeriesComponent],
  imports: [ChartCommonModule],
  exports: [BubbleChartComponent, BubbleSeriesComponent]
});
BubbleChartModule.ɵinj = ɵɵdefineInjector({
  imports: [[ChartCommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BubbleChartModule, [{
    type: NgModule,
    args: [{
      imports: [ChartCommonModule],
      declarations: [BubbleChartComponent, BubbleSeriesComponent],
      exports: [BubbleChartComponent, BubbleSeriesComponent]
    }]
  }], null, null);
})();
var HeatMapCellComponent = class {
  constructor(element) {
    this.gradient = false;
    this.animations = true;
    this.select = new EventEmitter();
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.barOrientation = BarOrientation;
    this.element = element.nativeElement;
  }
  ngOnChanges(changes) {
    this.transform = `translate(${this.x} , ${this.y})`;
    this.startOpacity = 0.3;
    this.gradientId = "grad" + id().toString();
    this.gradientUrl = `url(#${this.gradientId})`;
    this.gradientStops = this.getGradientStops();
    if (this.animations) {
      this.loadAnimation();
    }
  }
  getGradientStops() {
    return [{
      offset: 0,
      color: this.fill,
      opacity: this.startOpacity
    }, {
      offset: 100,
      color: this.fill,
      opacity: 1
    }];
  }
  loadAnimation() {
    const node = select_default(this.element).select(".cell");
    node.attr("opacity", 0);
    this.animateToCurrentForm();
  }
  animateToCurrentForm() {
    const node = select_default(this.element).select(".cell");
    node.transition().duration(750).attr("opacity", 1);
  }
  onClick() {
    this.select.emit(this.data);
  }
  onMouseEnter() {
    this.activate.emit(this.data);
  }
  onMouseLeave() {
    this.deactivate.emit(this.data);
  }
};
HeatMapCellComponent.ɵfac = function HeatMapCellComponent_Factory(t) {
  return new (t || HeatMapCellComponent)(ɵɵdirectiveInject(ElementRef));
};
HeatMapCellComponent.ɵcmp = ɵɵdefineComponent({
  type: HeatMapCellComponent,
  selectors: [["g", "ngx-charts-heat-map-cell", ""]],
  hostBindings: function HeatMapCellComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mouseenter", function HeatMapCellComponent_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function HeatMapCellComponent_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
  },
  inputs: {
    fill: "fill",
    x: "x",
    y: "y",
    width: "width",
    height: "height",
    data: "data",
    gradient: "gradient",
    animations: "animations"
  },
  outputs: {
    select: "select",
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c33,
  decls: 3,
  vars: 5,
  consts: [[1, "cell"], [4, "ngIf"], ["rx", "3", 1, "cell", 3, "click"], ["ngx-charts-svg-linear-gradient", "", 3, "orientation", "name", "stops"]],
  template: function HeatMapCellComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "g", 0);
      ɵɵtemplate(1, HeatMapCellComponent__svg_defs_1_Template, 2, 3, "defs", 1);
      ɵɵelementStart(2, "rect", 2);
      ɵɵlistener("click", function HeatMapCellComponent_Template_rect_click_2_listener() {
        return ctx.onClick();
      });
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.gradient);
      ɵɵadvance();
      ɵɵattribute("fill", ctx.gradient ? ctx.gradientUrl : ctx.fill)("width", ctx.width)("height", ctx.height);
    }
  },
  dependencies: [SvgLinearGradientComponent, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeatMapCellComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-heat-map-cell]",
      template: `
    <svg:g [attr.transform]="transform" class="cell">
      <defs *ngIf="gradient">
        <svg:g
          ngx-charts-svg-linear-gradient
          [orientation]="barOrientation.Vertical"
          [name]="gradientId"
          [stops]="gradientStops"
        />
      </defs>
      <svg:rect
        [attr.fill]="gradient ? gradientUrl : fill"
        rx="3"
        [attr.width]="width"
        [attr.height]="height"
        class="cell"
        (click)="onClick()"
      />
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    fill: [{
      type: Input
    }],
    x: [{
      type: Input
    }],
    y: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    onMouseEnter: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    onMouseLeave: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  });
})();
var HeatCellSeriesComponent = class {
  constructor() {
    this.tooltipDisabled = false;
    this.animations = true;
    this.select = new EventEmitter();
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.placementTypes = PlacementTypes;
    this.styleTypes = StyleTypes;
  }
  ngOnInit() {
    if (!this.tooltipText) {
      this.tooltipText = this.getTooltipText;
    }
  }
  ngOnChanges(changes) {
    this.update();
  }
  update() {
    this.cells = this.getCells();
  }
  getCells() {
    const cells = [];
    this.data.map((row) => {
      row.series.map((cell) => {
        const value2 = cell.value;
        cell.series = row.name;
        cells.push({
          row,
          cell,
          x: this.xScale(row.name),
          y: this.yScale(cell.name),
          width: this.xScale.bandwidth(),
          height: this.yScale.bandwidth(),
          fill: this.colors.getColor(value2),
          data: value2,
          label: formatLabel(cell.name),
          series: row.name
        });
      });
    });
    return cells;
  }
  getTooltipText({
    label,
    data,
    series
  }) {
    return `
      <span class="tooltip-label">${escapeLabel(series)} • ${escapeLabel(label)}</span>
      <span class="tooltip-val">${data.toLocaleString()}</span>
    `;
  }
  trackBy(index2, item) {
    return item.label;
  }
  onClick(data) {
    this.select.emit(data);
  }
};
HeatCellSeriesComponent.ɵfac = function HeatCellSeriesComponent_Factory(t) {
  return new (t || HeatCellSeriesComponent)();
};
HeatCellSeriesComponent.ɵcmp = ɵɵdefineComponent({
  type: HeatCellSeriesComponent,
  selectors: [["g", "ngx-charts-heat-map-cell-series", ""]],
  inputs: {
    data: "data",
    colors: "colors",
    xScale: "xScale",
    yScale: "yScale",
    gradient: "gradient",
    tooltipDisabled: "tooltipDisabled",
    tooltipText: "tooltipText",
    tooltipTemplate: "tooltipTemplate",
    animations: "animations"
  },
  outputs: {
    select: "select",
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c34,
  decls: 1,
  vars: 2,
  consts: [["ngx-charts-heat-map-cell", "", "ngx-tooltip", "", 3, "x", "y", "width", "height", "fill", "data", "gradient", "animations", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-heat-map-cell", "", "ngx-tooltip", "", 3, "select", "activate", "deactivate", "x", "y", "width", "height", "fill", "data", "gradient", "animations", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext"]],
  template: function HeatCellSeriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, HeatCellSeriesComponent__svg_g_0_Template, 1, 18, "g", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.cells)("ngForTrackBy", ctx.trackBy);
    }
  },
  dependencies: [HeatMapCellComponent, NgForOf, TooltipDirective],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeatCellSeriesComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-heat-map-cell-series]",
      template: `
    <svg:g
      ngx-charts-heat-map-cell
      *ngFor="let c of cells; trackBy: trackBy"
      [x]="c.x"
      [y]="c.y"
      [width]="c.width"
      [height]="c.height"
      [fill]="c.fill"
      [data]="c.data"
      (select)="onClick(c.cell)"
      (activate)="activate.emit(c.cell)"
      (deactivate)="deactivate.emit(c.cell)"
      [gradient]="gradient"
      [animations]="animations"
      ngx-tooltip
      [tooltipDisabled]="tooltipDisabled"
      [tooltipPlacement]="placementTypes.Top"
      [tooltipType]="styleTypes.tooltip"
      [tooltipTitle]="tooltipTemplate ? undefined : tooltipText(c)"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipContext]="{ series: c.series, name: c.label, value: c.data }"
    ></svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    data: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    xScale: [{
      type: Input
    }],
    yScale: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    tooltipText: [{
      type: Input
    }],
    tooltipTemplate: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }]
  });
})();
var HeatMapComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.legendTitle = "Legend";
    this.legendPosition = LegendPosition.Right;
    this.innerPadding = 8;
    this.trimXAxisTicks = true;
    this.trimYAxisTicks = true;
    this.rotateXAxisTicks = true;
    this.maxXAxisTickLength = 16;
    this.maxYAxisTickLength = 16;
    this.tooltipDisabled = false;
    this.activeEntries = [];
    this.wrapTicks = false;
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.margin = [10, 20, 10, 20];
    this.xAxisHeight = 0;
    this.yAxisWidth = 0;
    this.scaleType = ScaleType.Linear;
  }
  update() {
    super.update();
    this.formatDates();
    this.xDomain = this.getXDomain();
    this.yDomain = this.getYDomain();
    this.valueDomain = this.getValueDomain();
    this.scaleType = getScaleType(this.valueDomain, false);
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
      showXAxis: this.xAxis,
      showYAxis: this.yAxis,
      xAxisHeight: this.xAxisHeight,
      yAxisWidth: this.yAxisWidth,
      showXLabel: this.showXAxisLabel,
      showYLabel: this.showYAxisLabel,
      showLegend: this.legend,
      legendType: this.scaleType,
      legendPosition: this.legendPosition
    });
    if (this.scaleType === ScaleType.Linear) {
      let min4 = this.min;
      let max4 = this.max;
      if (!this.min) {
        min4 = Math.min(0, ...this.valueDomain);
      }
      if (!this.max) {
        max4 = Math.max(...this.valueDomain);
      }
      this.valueDomain = [min4, max4];
    }
    this.xScale = this.getXScale();
    this.yScale = this.getYScale();
    this.setColors();
    this.legendOptions = this.getLegendOptions();
    this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
    this.rects = this.getRects();
  }
  getXDomain() {
    const domain = [];
    for (const group2 of this.results) {
      if (!domain.includes(group2.name)) {
        domain.push(group2.name);
      }
    }
    return domain;
  }
  getYDomain() {
    const domain = [];
    for (const group2 of this.results) {
      for (const d of group2.series) {
        if (!domain.includes(d.name)) {
          domain.push(d.name);
        }
      }
    }
    return domain;
  }
  getValueDomain() {
    const domain = [];
    for (const group2 of this.results) {
      for (const d of group2.series) {
        if (!domain.includes(d.value)) {
          domain.push(d.value);
        }
      }
    }
    return domain;
  }
  /**
   * Converts the input to gap paddingInner in fraction
   * Supports the following inputs:
   *    Numbers: 8
   *    Strings: "8", "8px", "8%"
   *    Arrays: [8,2], "8,2", "[8,2]"
   *    Mixed: [8,"2%"], ["8px","2%"], "8,2%", "[8,2%]"
   *
   * @memberOf HeatMapComponent
   */
  getDimension(value2, index2 = 0, N, L) {
    if (typeof value2 === "string") {
      value2 = value2.replace("[", "").replace("]", "").replace("px", "").replace("'", "");
      if (value2.includes(",")) {
        value2 = value2.split(",");
      }
    }
    if (Array.isArray(value2) && typeof index2 === "number") {
      return this.getDimension(value2[index2], null, N, L);
    }
    if (typeof value2 === "string" && value2.includes("%")) {
      return +value2.replace("%", "") / 100;
    }
    return N / (L / +value2 + 1);
  }
  getXScale() {
    const f = this.getDimension(this.innerPadding, 0, this.xDomain.length, this.dims.width);
    return band().rangeRound([0, this.dims.width]).domain(this.xDomain).paddingInner(f);
  }
  getYScale() {
    const f = this.getDimension(this.innerPadding, 1, this.yDomain.length, this.dims.height);
    return band().rangeRound([this.dims.height, 0]).domain(this.yDomain).paddingInner(f);
  }
  getRects() {
    const rects = [];
    this.xDomain.map((xVal) => {
      this.yDomain.map((yVal) => {
        rects.push({
          x: this.xScale(xVal),
          y: this.yScale(yVal),
          rx: 3,
          width: this.xScale.bandwidth(),
          height: this.yScale.bandwidth(),
          fill: "rgba(200,200,200,0.03)"
        });
      });
    });
    return rects;
  }
  onClick(data) {
    this.select.emit(data);
  }
  setColors() {
    this.colors = new ColorHelper(this.scheme, this.scaleType, this.valueDomain);
  }
  getLegendOptions() {
    return {
      scaleType: this.scaleType,
      domain: this.valueDomain,
      colors: this.scaleType === ScaleType.Ordinal ? this.colors : this.colors.scale,
      title: this.scaleType === ScaleType.Ordinal ? this.legendTitle : void 0,
      position: this.legendPosition
    };
  }
  updateYAxisWidth({
    width
  }) {
    this.yAxisWidth = width;
    this.update();
  }
  updateXAxisHeight({
    height
  }) {
    this.xAxisHeight = height;
    this.update();
  }
  onActivate(event, group2, fromLegend = false) {
    const item = Object.assign({}, event);
    if (group2) {
      item.series = group2.name;
    }
    const items = this.results.map((g) => g.series).flat().filter((i) => {
      if (fromLegend) {
        return i.label === item.name;
      } else {
        return i.name === item.name && i.series === item.series;
      }
    });
    this.activeEntries = [...items];
    this.activate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  onDeactivate(event, group2, fromLegend = false) {
    const item = Object.assign({}, event);
    if (group2) {
      item.series = group2.name;
    }
    this.activeEntries = this.activeEntries.filter((i) => {
      if (fromLegend) {
        return i.label !== item.name;
      } else {
        return !(i.name === item.name && i.series === item.series);
      }
    });
    this.deactivate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
};
HeatMapComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵHeatMapComponent_BaseFactory;
  return function HeatMapComponent_Factory(t) {
    return (ɵHeatMapComponent_BaseFactory || (ɵHeatMapComponent_BaseFactory = ɵɵgetInheritedFactory(HeatMapComponent)))(t || HeatMapComponent);
  };
})();
HeatMapComponent.ɵcmp = ɵɵdefineComponent({
  type: HeatMapComponent,
  selectors: [["ngx-charts-heat-map"]],
  contentQueries: function HeatMapComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    }
  },
  inputs: {
    legend: "legend",
    legendTitle: "legendTitle",
    legendPosition: "legendPosition",
    xAxis: "xAxis",
    yAxis: "yAxis",
    showXAxisLabel: "showXAxisLabel",
    showYAxisLabel: "showYAxisLabel",
    xAxisLabel: "xAxisLabel",
    yAxisLabel: "yAxisLabel",
    gradient: "gradient",
    innerPadding: "innerPadding",
    trimXAxisTicks: "trimXAxisTicks",
    trimYAxisTicks: "trimYAxisTicks",
    rotateXAxisTicks: "rotateXAxisTicks",
    maxXAxisTickLength: "maxXAxisTickLength",
    maxYAxisTickLength: "maxYAxisTickLength",
    xAxisTickFormatting: "xAxisTickFormatting",
    yAxisTickFormatting: "yAxisTickFormatting",
    xAxisTicks: "xAxisTicks",
    yAxisTicks: "yAxisTicks",
    tooltipDisabled: "tooltipDisabled",
    tooltipText: "tooltipText",
    min: "min",
    max: "max",
    activeEntries: "activeEntries",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 6,
  vars: 20,
  consts: [[3, "legendLabelClick", "view", "showLegend", "animations", "legendOptions"], [1, "heat-map", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngx-charts-heat-map-cell-series", "", 3, "select", "activate", "deactivate", "xScale", "yScale", "colors", "data", "gradient", "animations", "tooltipDisabled", "tooltipTemplate", "tooltipText"], ["ngx-charts-x-axis", "", 3, "dimensionsChanged", "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"], ["ngx-charts-y-axis", "", 3, "dimensionsChanged", "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"]],
  template: function HeatMapComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵlistener("legendLabelClick", function HeatMapComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) {
        return ctx.onClick($event);
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "g", 1);
      ɵɵtemplate(2, HeatMapComponent__svg_g_2_Template, 1, 10, "g", 2)(3, HeatMapComponent__svg_g_3_Template, 1, 9, "g", 3)(4, HeatMapComponent__svg_rect_4_Template, 1, 6, "rect", 4);
      ɵɵelementStart(5, "g", 5);
      ɵɵlistener("select", function HeatMapComponent_Template_g_select_5_listener($event) {
        return ctx.onClick($event);
      })("activate", function HeatMapComponent_Template_g_activate_5_listener($event) {
        return ctx.onActivate($event, void 0);
      })("deactivate", function HeatMapComponent_Template_g_deactivate_5_listener($event) {
        return ctx.onDeactivate($event, void 0);
      });
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(17, _c24, ctx.width, ctx.height))("showLegend", ctx.legend)("animations", ctx.animations)("legendOptions", ctx.legendOptions);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.xAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.yAxis);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.rects);
      ɵɵadvance();
      ɵɵproperty("xScale", ctx.xScale)("yScale", ctx.yScale)("colors", ctx.colors)("data", ctx.results)("gradient", ctx.gradient)("animations", ctx.animations)("tooltipDisabled", ctx.tooltipDisabled)("tooltipTemplate", ctx.tooltipTemplate)("tooltipText", ctx.tooltipText);
    }
  },
  dependencies: [ChartComponent, XAxisComponent, YAxisComponent, HeatCellSeriesComponent, NgIf, NgForOf],
  styles: [_c25],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeatMapComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-heat-map",
      template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [animations]="animations"
      [legendOptions]="legendOptions"
      (legendLabelClick)="onClick($event)"
    >
      <svg:g [attr.transform]="transform" class="heat-map chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:rect
          *ngFor="let rect of rects"
          [attr.x]="rect.x"
          [attr.y]="rect.y"
          [attr.rx]="rect.rx"
          [attr.width]="rect.width"
          [attr.height]="rect.height"
          [attr.fill]="rect.fill"
        />
        <svg:g
          ngx-charts-heat-map-cell-series
          [xScale]="xScale"
          [yScale]="yScale"
          [colors]="colors"
          [data]="results"
          [gradient]="gradient"
          [animations]="animations"
          [tooltipDisabled]="tooltipDisabled"
          [tooltipTemplate]="tooltipTemplate"
          [tooltipText]="tooltipText"
          (select)="onClick($event)"
          (activate)="onActivate($event, undefined)"
          (deactivate)="onDeactivate($event, undefined)"
        />
      </svg:g>
    </ngx-charts-chart>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"]
    }]
  }], null, {
    legend: [{
      type: Input
    }],
    legendTitle: [{
      type: Input
    }],
    legendPosition: [{
      type: Input
    }],
    xAxis: [{
      type: Input
    }],
    yAxis: [{
      type: Input
    }],
    showXAxisLabel: [{
      type: Input
    }],
    showYAxisLabel: [{
      type: Input
    }],
    xAxisLabel: [{
      type: Input
    }],
    yAxisLabel: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    innerPadding: [{
      type: Input
    }],
    trimXAxisTicks: [{
      type: Input
    }],
    trimYAxisTicks: [{
      type: Input
    }],
    rotateXAxisTicks: [{
      type: Input
    }],
    maxXAxisTickLength: [{
      type: Input
    }],
    maxYAxisTickLength: [{
      type: Input
    }],
    xAxisTickFormatting: [{
      type: Input
    }],
    yAxisTickFormatting: [{
      type: Input
    }],
    xAxisTicks: [{
      type: Input
    }],
    yAxisTicks: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    tooltipText: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }]
  });
})();
var HeatMapModule = class {
};
HeatMapModule.ɵfac = function HeatMapModule_Factory(t) {
  return new (t || HeatMapModule)();
};
HeatMapModule.ɵmod = ɵɵdefineNgModule({
  type: HeatMapModule,
  declarations: [HeatMapCellComponent, HeatCellSeriesComponent, HeatMapComponent],
  imports: [ChartCommonModule],
  exports: [HeatMapCellComponent, HeatCellSeriesComponent, HeatMapComponent]
});
HeatMapModule.ɵinj = ɵɵdefineInjector({
  imports: [[ChartCommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeatMapModule, [{
    type: NgModule,
    args: [{
      imports: [ChartCommonModule],
      declarations: [HeatMapCellComponent, HeatCellSeriesComponent, HeatMapComponent],
      exports: [HeatMapCellComponent, HeatCellSeriesComponent, HeatMapComponent]
    }]
  }], null, null);
})();
var LineComponent = class {
  constructor(element, platformId) {
    this.element = element;
    this.platformId = platformId;
    this.fill = "none";
    this.animations = true;
    this.initialized = false;
    this.isSSR = false;
  }
  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.isSSR = true;
    }
  }
  ngOnChanges(changes) {
    if (!this.initialized) {
      this.initialized = true;
      this.initialPath = this.path;
    } else {
      this.updatePathEl();
    }
  }
  updatePathEl() {
    const node = select_default(this.element.nativeElement).select(".line");
    if (this.animations) {
      node.transition().duration(750).attr("d", this.path);
    } else {
      node.attr("d", this.path);
    }
  }
};
LineComponent.ɵfac = function LineComponent_Factory(t) {
  return new (t || LineComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(PLATFORM_ID));
};
LineComponent.ɵcmp = ɵɵdefineComponent({
  type: LineComponent,
  selectors: [["g", "ngx-charts-line", ""]],
  inputs: {
    path: "path",
    stroke: "stroke",
    data: "data",
    fill: "fill",
    animations: "animations"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c36,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], ["stroke-width", "1.5px", 1, "line"]],
  template: function LineComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, LineComponent__svg_g_0_Template, 2, 4, "g", 0)(1, LineComponent__svg_g_1_Template, 2, 3, "g", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.isSSR);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isSSR);
    }
  },
  dependencies: [NgIf],
  encapsulation: 2,
  data: {
    animation: [trigger("animationState", [transition(":enter", [style({
      strokeDasharray: 2e3,
      strokeDashoffset: 2e3
    }), animate(1e3, style({
      strokeDashoffset: 0
    }))])])]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LineComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-line]",
      template: `
    <svg:g *ngIf="!isSSR">
      <svg:path
        [@animationState]="'active'"
        class="line"
        [attr.d]="initialPath"
        [attr.fill]="fill"
        [attr.stroke]="stroke"
        stroke-width="1.5px"
      />
    </svg:g>
    <svg:g *ngIf="isSSR">
      <svg:path class="line" [attr.d]="initialPath" [attr.fill]="fill" [attr.stroke]="stroke" stroke-width="1.5px" />
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("animationState", [transition(":enter", [style({
        strokeDasharray: 2e3,
        strokeDashoffset: 2e3
      }), animate(1e3, style({
        strokeDashoffset: 0
      }))])])]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    path: [{
      type: Input
    }],
    stroke: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    animations: [{
      type: Input
    }]
  });
})();
var LineSeriesComponent = class {
  constructor() {
    this.animations = true;
    this.barOrientation = BarOrientation;
  }
  ngOnChanges(changes) {
    this.update();
  }
  update() {
    this.updateGradients();
    const data = this.sortData(this.data.series);
    const lineGen = this.getLineGenerator();
    this.path = lineGen(data) || "";
    const areaGen = this.getAreaGenerator();
    this.areaPath = areaGen(data) || "";
    if (this.hasRange) {
      const range2 = this.getRangeGenerator();
      this.outerPath = range2(data) || "";
    }
    if (this.hasGradient) {
      this.stroke = this.gradientUrl;
      const values = this.data.series.map((d) => d.value);
      const max4 = Math.max(...values);
      const min4 = Math.min(...values);
      if (max4 === min4) {
        this.stroke = this.colors.getColor(max4);
      }
    } else {
      this.stroke = this.colors.getColor(this.data.name);
    }
  }
  getLineGenerator() {
    return line_default().x((d) => {
      const label = d.name;
      let value2;
      if (this.scaleType === ScaleType.Time) {
        value2 = this.xScale(label);
      } else if (this.scaleType === ScaleType.Linear) {
        value2 = this.xScale(Number(label));
      } else {
        value2 = this.xScale(label);
      }
      return value2;
    }).y((d) => this.yScale(d.value)).curve(this.curve);
  }
  getRangeGenerator() {
    return area_default().x((d) => {
      const label = d.name;
      let value2;
      if (this.scaleType === ScaleType.Time) {
        value2 = this.xScale(label);
      } else if (this.scaleType === ScaleType.Linear) {
        value2 = this.xScale(Number(label));
      } else {
        value2 = this.xScale(label);
      }
      return value2;
    }).y0((d) => this.yScale(typeof d.min === "number" ? d.min : d.value)).y1((d) => this.yScale(typeof d.max === "number" ? d.max : d.value)).curve(this.curve);
  }
  getAreaGenerator() {
    const xProperty = (d) => {
      const label = d.name;
      return this.xScale(label);
    };
    return area_default().x(xProperty).y0(() => this.yScale.range()[0]).y1((d) => this.yScale(d.value)).curve(this.curve);
  }
  sortData(data) {
    if (this.scaleType === ScaleType.Linear) {
      data = sortLinear(data, "name");
    } else if (this.scaleType === ScaleType.Time) {
      data = sortByTime(data, "name");
    } else {
      data = sortByDomain(data, "name", "asc", this.xScale.domain());
    }
    return data;
  }
  updateGradients() {
    if (this.colors.scaleType === ScaleType.Linear) {
      this.hasGradient = true;
      this.gradientId = "grad" + id().toString();
      this.gradientUrl = `url(#${this.gradientId})`;
      const values = this.data.series.map((d) => d.value);
      const max4 = Math.max(...values);
      const min4 = Math.min(...values);
      this.gradientStops = this.colors.getLinearGradientStops(max4, min4);
      this.areaGradientStops = this.colors.getLinearGradientStops(max4);
    } else {
      this.hasGradient = false;
      this.gradientStops = void 0;
      this.areaGradientStops = void 0;
    }
  }
  isActive(entry) {
    if (!this.activeEntries) return false;
    const item = this.activeEntries.find((d) => {
      return entry.name === d.name;
    });
    return item !== void 0;
  }
  isInactive(entry) {
    if (!this.activeEntries || this.activeEntries.length === 0) return false;
    const item = this.activeEntries.find((d) => {
      return entry.name === d.name;
    });
    return item === void 0;
  }
};
LineSeriesComponent.ɵfac = function LineSeriesComponent_Factory(t) {
  return new (t || LineSeriesComponent)();
};
LineSeriesComponent.ɵcmp = ɵɵdefineComponent({
  type: LineSeriesComponent,
  selectors: [["g", "ngx-charts-line-series", ""]],
  inputs: {
    data: "data",
    xScale: "xScale",
    yScale: "yScale",
    colors: "colors",
    scaleType: "scaleType",
    curve: "curve",
    activeEntries: "activeEntries",
    rangeFillOpacity: "rangeFillOpacity",
    hasRange: "hasRange",
    animations: "animations"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c37,
  decls: 6,
  vars: 22,
  consts: [["ngx-charts-svg-linear-gradient", "", 3, "orientation", "name", "stops", 4, "ngIf"], ["ngx-charts-area", "", 1, "line-highlight", 3, "data", "path", "fill", "opacity", "startOpacity", "gradient", "stops", "animations"], ["ngx-charts-line", "", 1, "line-series", 3, "data", "path", "stroke", "animations"], ["ngx-charts-area", "", "class", "line-series-range", 3, "data", "path", "fill", "active", "inactive", "opacity", "animations", 4, "ngIf"], ["ngx-charts-svg-linear-gradient", "", 3, "orientation", "name", "stops"], ["ngx-charts-area", "", 1, "line-series-range", 3, "data", "path", "fill", "opacity", "animations"]],
  template: function LineSeriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "g")(1, "defs");
      ɵɵtemplate(2, LineSeriesComponent__svg_g_2_Template, 1, 3, "g", 0);
      ɵɵelementEnd();
      ɵɵelement(3, "g", 1)(4, "g", 2);
      ɵɵtemplate(5, LineSeriesComponent__svg_g_5_Template, 1, 9, "g", 3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.hasGradient);
      ɵɵadvance();
      ɵɵclassProp("active", ctx.isActive(ctx.data))("inactive", ctx.isInactive(ctx.data));
      ɵɵproperty("data", ctx.data)("path", ctx.areaPath)("fill", ctx.hasGradient ? ctx.gradientUrl : ctx.colors.getColor(ctx.data.name))("opacity", 0.25)("startOpacity", 0)("gradient", true)("stops", ctx.areaGradientStops)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵclassProp("active", ctx.isActive(ctx.data))("inactive", ctx.isInactive(ctx.data));
      ɵɵproperty("data", ctx.data)("path", ctx.path)("stroke", ctx.stroke)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.hasRange);
    }
  },
  dependencies: [SvgLinearGradientComponent, AreaComponent, LineComponent, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LineSeriesComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-line-series]",
      template: `
    <svg:g>
      <defs>
        <svg:g
          ngx-charts-svg-linear-gradient
          *ngIf="hasGradient"
          [orientation]="barOrientation.Vertical"
          [name]="gradientId"
          [stops]="gradientStops"
        />
      </defs>
      <svg:g
        ngx-charts-area
        class="line-highlight"
        [data]="data"
        [path]="areaPath"
        [fill]="hasGradient ? gradientUrl : colors.getColor(data.name)"
        [opacity]="0.25"
        [startOpacity]="0"
        [gradient]="true"
        [stops]="areaGradientStops"
        [class.active]="isActive(data)"
        [class.inactive]="isInactive(data)"
        [animations]="animations"
      />
      <svg:g
        ngx-charts-line
        class="line-series"
        [data]="data"
        [path]="path"
        [stroke]="stroke"
        [animations]="animations"
        [class.active]="isActive(data)"
        [class.inactive]="isInactive(data)"
      />
      <svg:g
        ngx-charts-area
        *ngIf="hasRange"
        class="line-series-range"
        [data]="data"
        [path]="outerPath"
        [fill]="hasGradient ? gradientUrl : colors.getColor(data.name)"
        [class.active]="isActive(data)"
        [class.inactive]="isInactive(data)"
        [opacity]="rangeFillOpacity"
        [animations]="animations"
      />
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    data: [{
      type: Input
    }],
    xScale: [{
      type: Input
    }],
    yScale: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    scaleType: [{
      type: Input
    }],
    curve: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    rangeFillOpacity: [{
      type: Input
    }],
    hasRange: [{
      type: Input
    }],
    animations: [{
      type: Input
    }]
  });
})();
var LineChartComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.legendTitle = "Legend";
    this.legendPosition = LegendPosition.Right;
    this.showGridLines = true;
    this.curve = linear_default;
    this.activeEntries = [];
    this.trimXAxisTicks = true;
    this.trimYAxisTicks = true;
    this.rotateXAxisTicks = true;
    this.maxXAxisTickLength = 16;
    this.maxYAxisTickLength = 16;
    this.roundDomains = false;
    this.tooltipDisabled = false;
    this.showRefLines = false;
    this.showRefLabels = true;
    this.wrapTicks = false;
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.margin = [10, 20, 10, 20];
    this.xAxisHeight = 0;
    this.yAxisWidth = 0;
    this.timelineHeight = 50;
    this.timelinePadding = 10;
    this.isSSR = false;
  }
  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.isSSR = true;
    }
  }
  update() {
    super.update();
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
      showXAxis: this.xAxis,
      showYAxis: this.yAxis,
      xAxisHeight: this.xAxisHeight,
      yAxisWidth: this.yAxisWidth,
      showXLabel: this.showXAxisLabel,
      showYLabel: this.showYAxisLabel,
      showLegend: this.legend,
      legendType: this.schemeType,
      legendPosition: this.legendPosition
    });
    if (this.timeline) {
      this.dims.height -= this.timelineHeight + this.margin[2] + this.timelinePadding;
    }
    this.xDomain = this.getXDomain();
    if (this.filteredDomain) {
      this.xDomain = this.filteredDomain;
    }
    this.yDomain = this.getYDomain();
    this.seriesDomain = this.getSeriesDomain();
    this.xScale = this.getXScale(this.xDomain, this.dims.width);
    this.yScale = this.getYScale(this.yDomain, this.dims.height);
    this.updateTimeline();
    this.setColors();
    this.legendOptions = this.getLegendOptions();
    this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
    this.clipPathId = "clip" + id().toString();
    this.clipPath = `url(#${this.clipPathId})`;
  }
  updateTimeline() {
    if (this.timeline) {
      this.timelineWidth = this.dims.width;
      this.timelineXDomain = this.getXDomain();
      this.timelineXScale = this.getXScale(this.timelineXDomain, this.timelineWidth);
      this.timelineYScale = this.getYScale(this.yDomain, this.timelineHeight);
      this.timelineTransform = `translate(${this.dims.xOffset}, ${-this.margin[2]})`;
    }
  }
  getXDomain() {
    let values = getUniqueXDomainValues(this.results);
    this.scaleType = getScaleType(values);
    let domain = [];
    if (this.scaleType === ScaleType.Linear) {
      values = values.map((v) => Number(v));
    }
    let min4;
    let max4;
    if (this.scaleType === ScaleType.Time || this.scaleType === ScaleType.Linear) {
      min4 = this.xScaleMin ? this.xScaleMin : Math.min(...values);
      max4 = this.xScaleMax ? this.xScaleMax : Math.max(...values);
    }
    if (this.scaleType === ScaleType.Time) {
      domain = [new Date(min4), new Date(max4)];
      this.xSet = [...values].sort((a2, b) => {
        const aDate = a2.getTime();
        const bDate = b.getTime();
        if (aDate > bDate) return 1;
        if (bDate > aDate) return -1;
        return 0;
      });
    } else if (this.scaleType === ScaleType.Linear) {
      domain = [min4, max4];
      this.xSet = [...values].sort((a2, b) => a2 - b);
    } else {
      domain = values;
      this.xSet = values;
    }
    return domain;
  }
  getYDomain() {
    const domain = [];
    for (const results of this.results) {
      for (const d of results.series) {
        if (domain.indexOf(d.value) < 0) {
          domain.push(d.value);
        }
        if (d.min !== void 0) {
          this.hasRange = true;
          if (domain.indexOf(d.min) < 0) {
            domain.push(d.min);
          }
        }
        if (d.max !== void 0) {
          this.hasRange = true;
          if (domain.indexOf(d.max) < 0) {
            domain.push(d.max);
          }
        }
      }
    }
    const values = [...domain];
    if (!this.autoScale) {
      values.push(0);
    }
    const min4 = this.yScaleMin ? this.yScaleMin : Math.min(...values);
    const max4 = this.yScaleMax ? this.yScaleMax : Math.max(...values);
    return [min4, max4];
  }
  getSeriesDomain() {
    return this.results.map((d) => d.name);
  }
  getXScale(domain, width) {
    let scale;
    if (this.scaleType === ScaleType.Time) {
      scale = time().range([0, width]).domain(domain);
    } else if (this.scaleType === ScaleType.Linear) {
      scale = linear().range([0, width]).domain(domain);
      if (this.roundDomains) {
        scale = scale.nice();
      }
    } else if (this.scaleType === ScaleType.Ordinal) {
      scale = point().range([0, width]).padding(0.1).domain(domain);
    }
    return scale;
  }
  getYScale(domain, height) {
    const scale = linear().range([height, 0]).domain(domain);
    return this.roundDomains ? scale.nice() : scale;
  }
  updateDomain(domain) {
    this.filteredDomain = domain;
    this.xDomain = this.filteredDomain;
    this.xScale = this.getXScale(this.xDomain, this.dims.width);
  }
  updateHoveredVertical(item) {
    this.hoveredVertical = item.value;
    this.deactivateAll();
  }
  hideCircles() {
    this.hoveredVertical = null;
    this.deactivateAll();
  }
  onClick(data) {
    this.select.emit(data);
  }
  trackBy(index2, item) {
    return `${item.name}`;
  }
  setColors() {
    let domain;
    if (this.schemeType === ScaleType.Ordinal) {
      domain = this.seriesDomain;
    } else {
      domain = this.yDomain;
    }
    this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
  }
  getLegendOptions() {
    const opts = {
      scaleType: this.schemeType,
      colors: void 0,
      domain: [],
      title: void 0,
      position: this.legendPosition
    };
    if (opts.scaleType === ScaleType.Ordinal) {
      opts.domain = this.seriesDomain;
      opts.colors = this.colors;
      opts.title = this.legendTitle;
    } else {
      opts.domain = this.yDomain;
      opts.colors = this.colors.scale;
    }
    return opts;
  }
  updateYAxisWidth({
    width
  }) {
    this.yAxisWidth = width;
    this.update();
  }
  updateXAxisHeight({
    height
  }) {
    this.xAxisHeight = height;
    this.update();
  }
  onActivate(item) {
    this.deactivateAll();
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value;
    });
    if (idx > -1) {
      return;
    }
    this.activeEntries = [item];
    this.activate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  onDeactivate(item) {
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value;
    });
    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];
    this.deactivate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  deactivateAll() {
    this.activeEntries = [...this.activeEntries];
    for (const entry of this.activeEntries) {
      this.deactivate.emit({
        value: entry,
        entries: []
      });
    }
    this.activeEntries = [];
  }
};
LineChartComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵLineChartComponent_BaseFactory;
  return function LineChartComponent_Factory(t) {
    return (ɵLineChartComponent_BaseFactory || (ɵLineChartComponent_BaseFactory = ɵɵgetInheritedFactory(LineChartComponent)))(t || LineChartComponent);
  };
})();
LineChartComponent.ɵcmp = ɵɵdefineComponent({
  type: LineChartComponent,
  selectors: [["ngx-charts-line-chart"]],
  contentQueries: function LineChartComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
      ɵɵcontentQuery(dirIndex, _c23, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.seriesTooltipTemplate = _t.first);
    }
  },
  hostBindings: function LineChartComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mouseleave", function LineChartComponent_mouseleave_HostBindingHandler() {
        return ctx.hideCircles();
      });
    }
  },
  inputs: {
    legend: "legend",
    legendTitle: "legendTitle",
    legendPosition: "legendPosition",
    xAxis: "xAxis",
    yAxis: "yAxis",
    showXAxisLabel: "showXAxisLabel",
    showYAxisLabel: "showYAxisLabel",
    xAxisLabel: "xAxisLabel",
    yAxisLabel: "yAxisLabel",
    autoScale: "autoScale",
    timeline: "timeline",
    gradient: "gradient",
    showGridLines: "showGridLines",
    curve: "curve",
    activeEntries: "activeEntries",
    schemeType: "schemeType",
    rangeFillOpacity: "rangeFillOpacity",
    trimXAxisTicks: "trimXAxisTicks",
    trimYAxisTicks: "trimYAxisTicks",
    rotateXAxisTicks: "rotateXAxisTicks",
    maxXAxisTickLength: "maxXAxisTickLength",
    maxYAxisTickLength: "maxYAxisTickLength",
    xAxisTickFormatting: "xAxisTickFormatting",
    yAxisTickFormatting: "yAxisTickFormatting",
    xAxisTicks: "xAxisTicks",
    yAxisTicks: "yAxisTicks",
    roundDomains: "roundDomains",
    tooltipDisabled: "tooltipDisabled",
    showRefLines: "showRefLines",
    referenceLines: "referenceLines",
    showRefLabels: "showRefLabels",
    xScaleMin: "xScaleMin",
    xScaleMax: "xScaleMax",
    yScaleMin: "yScaleMin",
    yScaleMax: "yScaleMax",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 12,
  vars: 20,
  consts: [[3, "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate", "view", "showLegend", "legendOptions", "activeEntries", "animations"], [1, "line-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "referenceLines", "showRefLines", "showRefLabels", "wrapTicks", "dimensionsChanged", 4, "ngIf"], [4, "ngIf"], [3, "mouseleave", 4, "ngIf"], ["ngx-charts-timeline", "", 3, "results", "view", "height", "scheme", "customColors", "scaleType", "legend", "onDomainChange", 4, "ngIf"], ["ngx-charts-x-axis", "", 3, "dimensionsChanged", "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "wrapTicks"], ["ngx-charts-y-axis", "", 3, "dimensionsChanged", "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "referenceLines", "showRefLines", "showRefLabels", "wrapTicks"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-line-series", "", 3, "xScale", "yScale", "colors", "data", "activeEntries", "scaleType", "curve", "rangeFillOpacity", "hasRange", "animations"], [3, "mouseleave"], ["ngx-charts-tooltip-area", "", 3, "hover", "dims", "xSet", "xScale", "yScale", "results", "colors", "tooltipDisabled", "tooltipTemplate"], [4, "ngFor", "ngForOf"], ["ngx-charts-circle-series", "", 3, "select", "activate", "deactivate", "xScale", "yScale", "colors", "data", "scaleType", "visibleValue", "activeEntries", "tooltipDisabled", "tooltipTemplate"], ["ngx-charts-timeline", "", 3, "onDomainChange", "results", "view", "height", "scheme", "customColors", "scaleType", "legend"], ["ngx-charts-line-series", "", 3, "xScale", "yScale", "colors", "data", "scaleType", "curve", "hasRange", "animations"]],
  template: function LineChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵlistener("legendLabelClick", function LineChartComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) {
        return ctx.onClick($event);
      })("legendLabelActivate", function LineChartComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) {
        return ctx.onActivate($event);
      })("legendLabelDeactivate", function LineChartComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) {
        return ctx.onDeactivate($event);
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "defs")(2, "clipPath");
      ɵɵelement(3, "rect");
      ɵɵelementEnd()();
      ɵɵelementStart(4, "g", 1);
      ɵɵtemplate(5, LineChartComponent__svg_g_5_Template, 1, 11, "g", 2)(6, LineChartComponent__svg_g_6_Template, 1, 13, "g", 3);
      ɵɵelementStart(7, "g");
      ɵɵtemplate(8, LineChartComponent__svg_g_8_Template, 2, 2, "g", 4)(9, LineChartComponent__svg_g_9_Template, 2, 2, "g", 4)(10, LineChartComponent__svg_g_10_Template, 3, 9, "g", 5);
      ɵɵelementEnd()();
      ɵɵtemplate(11, LineChartComponent__svg_g_11_Template, 2, 13, "g", 6);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(17, _c24, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
      ɵɵadvance(2);
      ɵɵattribute("id", ctx.clipPathId);
      ɵɵadvance();
      ɵɵattribute("width", ctx.dims.width + 10)("height", ctx.dims.height + 10)("transform", "translate(-5, -5)");
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.xAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.yAxis);
      ɵɵadvance();
      ɵɵattribute("clip-path", ctx.clipPath);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.isSSR);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isSSR);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.tooltipDisabled);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.timeline && ctx.scaleType != "ordinal");
    }
  },
  dependencies: [ChartComponent, XAxisComponent, YAxisComponent, LineSeriesComponent, TooltipArea, CircleSeriesComponent, Timeline, NgIf, NgForOf],
  styles: [_c25],
  encapsulation: 2,
  data: {
    animation: [trigger("animationState", [transition(":leave", [style({
      opacity: 1
    }), animate(500, style({
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LineChartComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-line-chart",
      template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
    >
      <svg:defs>
        <svg:clipPath [attr.id]="clipPathId">
          <svg:rect
            [attr.width]="dims.width + 10"
            [attr.height]="dims.height + 10"
            [attr.transform]="'translate(-5, -5)'"
          />
        </svg:clipPath>
      </svg:defs>
      <svg:g [attr.transform]="transform" class="line-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          [referenceLines]="referenceLines"
          [showRefLines]="showRefLines"
          [showRefLabels]="showRefLabels"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g [attr.clip-path]="clipPath">
          <svg:g *ngIf="!isSSR">
            <svg:g *ngFor="let series of results; trackBy: trackBy" [@animationState]="'active'">
              <svg:g
                ngx-charts-line-series
                [xScale]="xScale"
                [yScale]="yScale"
                [colors]="colors"
                [data]="series"
                [activeEntries]="activeEntries"
                [scaleType]="scaleType"
                [curve]="curve"
                [rangeFillOpacity]="rangeFillOpacity"
                [hasRange]="hasRange"
                [animations]="animations"
              />
            </svg:g>
          </svg:g>
          <svg:g *ngIf="isSSR">
            <svg:g *ngFor="let series of results; trackBy: trackBy">
              <svg:g
                ngx-charts-line-series
                [xScale]="xScale"
                [yScale]="yScale"
                [colors]="colors"
                [data]="series"
                [activeEntries]="activeEntries"
                [scaleType]="scaleType"
                [curve]="curve"
                [rangeFillOpacity]="rangeFillOpacity"
                [hasRange]="hasRange"
                [animations]="animations"
              />
            </svg:g>
          </svg:g>

          <svg:g *ngIf="!tooltipDisabled" (mouseleave)="hideCircles()">
            <svg:g
              ngx-charts-tooltip-area
              [dims]="dims"
              [xSet]="xSet"
              [xScale]="xScale"
              [yScale]="yScale"
              [results]="results"
              [colors]="colors"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="seriesTooltipTemplate"
              (hover)="updateHoveredVertical($event)"
            />

            <svg:g *ngFor="let series of results">
              <svg:g
                ngx-charts-circle-series
                [xScale]="xScale"
                [yScale]="yScale"
                [colors]="colors"
                [data]="series"
                [scaleType]="scaleType"
                [visibleValue]="hoveredVertical"
                [activeEntries]="activeEntries"
                [tooltipDisabled]="tooltipDisabled"
                [tooltipTemplate]="tooltipTemplate"
                (select)="onClick($event)"
                (activate)="onActivate($event)"
                (deactivate)="onDeactivate($event)"
              />
            </svg:g>
          </svg:g>
        </svg:g>
      </svg:g>
      <svg:g
        ngx-charts-timeline
        *ngIf="timeline && scaleType != 'ordinal'"
        [attr.transform]="timelineTransform"
        [results]="results"
        [view]="[timelineWidth, height]"
        [height]="timelineHeight"
        [scheme]="scheme"
        [customColors]="customColors"
        [scaleType]="scaleType"
        [legend]="legend"
        (onDomainChange)="updateDomain($event)"
      >
        <svg:g *ngFor="let series of results; trackBy: trackBy">
          <svg:g
            ngx-charts-line-series
            [xScale]="timelineXScale"
            [yScale]="timelineYScale"
            [colors]="colors"
            [data]="series"
            [scaleType]="scaleType"
            [curve]="curve"
            [hasRange]="hasRange"
            [animations]="animations"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("animationState", [transition(":leave", [style({
        opacity: 1
      }), animate(500, style({
        opacity: 0
      }))])])],
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"]
    }]
  }], null, {
    legend: [{
      type: Input
    }],
    legendTitle: [{
      type: Input
    }],
    legendPosition: [{
      type: Input
    }],
    xAxis: [{
      type: Input
    }],
    yAxis: [{
      type: Input
    }],
    showXAxisLabel: [{
      type: Input
    }],
    showYAxisLabel: [{
      type: Input
    }],
    xAxisLabel: [{
      type: Input
    }],
    yAxisLabel: [{
      type: Input
    }],
    autoScale: [{
      type: Input
    }],
    timeline: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    showGridLines: [{
      type: Input
    }],
    curve: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    schemeType: [{
      type: Input
    }],
    rangeFillOpacity: [{
      type: Input
    }],
    trimXAxisTicks: [{
      type: Input
    }],
    trimYAxisTicks: [{
      type: Input
    }],
    rotateXAxisTicks: [{
      type: Input
    }],
    maxXAxisTickLength: [{
      type: Input
    }],
    maxYAxisTickLength: [{
      type: Input
    }],
    xAxisTickFormatting: [{
      type: Input
    }],
    yAxisTickFormatting: [{
      type: Input
    }],
    xAxisTicks: [{
      type: Input
    }],
    yAxisTicks: [{
      type: Input
    }],
    roundDomains: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    showRefLines: [{
      type: Input
    }],
    referenceLines: [{
      type: Input
    }],
    showRefLabels: [{
      type: Input
    }],
    xScaleMin: [{
      type: Input
    }],
    xScaleMax: [{
      type: Input
    }],
    yScaleMin: [{
      type: Input
    }],
    yScaleMax: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }],
    seriesTooltipTemplate: [{
      type: ContentChild,
      args: ["seriesTooltipTemplate"]
    }],
    hideCircles: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  });
})();
var LineChartModule = class {
};
LineChartModule.ɵfac = function LineChartModule_Factory(t) {
  return new (t || LineChartModule)();
};
LineChartModule.ɵmod = ɵɵdefineNgModule({
  type: LineChartModule,
  declarations: [LineComponent, LineChartComponent, LineSeriesComponent],
  imports: [ChartCommonModule],
  exports: [LineComponent, LineChartComponent, LineSeriesComponent]
});
LineChartModule.ɵinj = ɵɵdefineInjector({
  imports: [[ChartCommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LineChartModule, [{
    type: NgModule,
    args: [{
      imports: [ChartCommonModule],
      declarations: [LineComponent, LineChartComponent, LineSeriesComponent],
      exports: [LineComponent, LineChartComponent, LineSeriesComponent]
    }]
  }], null, null);
})();
var PieLabelComponent = class {
  constructor(platformId) {
    this.platformId = platformId;
    this.animations = true;
    this.labelTrim = true;
    this.labelTrimSize = 10;
    this.trimLabel = trimLabel;
  }
  ngOnChanges(changes) {
    this.setTransforms();
    this.update();
  }
  setTransforms() {
    if (isPlatformServer(this.platformId)) {
      this.styleTransform = `translate3d(${this.textX}px,${this.textY}px, 0)`;
      this.attrTransform = `translate(${this.textX},${this.textY})`;
      this.textTransition = !this.animations ? null : "transform 0.75s";
    } else {
      const isIE = /(edge|msie|trident)/i.test(navigator.userAgent);
      this.styleTransform = isIE ? null : `translate3d(${this.textX}px,${this.textY}px, 0)`;
      this.attrTransform = !isIE ? null : `translate(${this.textX},${this.textY})`;
      this.textTransition = isIE || !this.animations ? null : "transform 0.75s";
    }
  }
  update() {
    let startRadius = this.radius;
    if (this.explodeSlices) {
      startRadius = this.radius * this.value / this.max;
    }
    const innerArc = arc_default().innerRadius(startRadius).outerRadius(startRadius);
    const innerPos = innerArc.centroid(this.data);
    let scale = this.data.pos[1] / innerPos[1];
    if (this.data.pos[1] === 0 || innerPos[1] === 0) {
      scale = 1;
    }
    const outerPos = [scale * innerPos[0], scale * innerPos[1]];
    this.line = `M${innerPos}L${outerPos}L${this.data.pos}`;
  }
  get textX() {
    return this.data.pos[0];
  }
  get textY() {
    return this.data.pos[1];
  }
  textAnchor() {
    return this.midAngle(this.data) < Math.PI ? TextAnchor.Start : TextAnchor.End;
  }
  midAngle(d) {
    return d.startAngle + (d.endAngle - d.startAngle) / 2;
  }
};
PieLabelComponent.ɵfac = function PieLabelComponent_Factory(t) {
  return new (t || PieLabelComponent)(ɵɵdirectiveInject(PLATFORM_ID));
};
PieLabelComponent.ɵcmp = ɵɵdefineComponent({
  type: PieLabelComponent,
  selectors: [["g", "ngx-charts-pie-label", ""]],
  inputs: {
    data: "data",
    radius: "radius",
    label: "label",
    color: "color",
    max: "max",
    value: "value",
    explodeSlices: "explodeSlices",
    animations: "animations",
    labelTrim: "labelTrim",
    labelTrimSize: "labelTrimSize"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c38,
  decls: 6,
  vars: 17,
  consts: [["dy", ".35em", 1, "pie-label"], ["fill", "none", 1, "pie-label-line", "line"]],
  template: function PieLabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "title");
      ɵɵtext(1);
      ɵɵelementEnd();
      ɵɵnamespaceSVG();
      ɵɵelementStart(2, "g")(3, "text", 0);
      ɵɵtext(4);
      ɵɵelementEnd()();
      ɵɵelement(5, "path", 1);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.label);
      ɵɵadvance();
      ɵɵstyleProp("transform", ctx.styleTransform)("transition", ctx.textTransition);
      ɵɵattribute("transform", ctx.attrTransform);
      ɵɵadvance();
      ɵɵstyleProp("text-anchor", ctx.textAnchor())("shape-rendering", "crispEdges");
      ɵɵclassProp("animation", ctx.animations);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.labelTrim ? ctx.trimLabel(ctx.label, ctx.labelTrimSize) : ctx.label, " ");
      ɵɵadvance();
      ɵɵclassProp("animation", ctx.animations);
      ɵɵattribute("d", ctx.line)("stroke", ctx.color);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PieLabelComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-pie-label]",
      template: `
    <title>{{ label }}</title>
    <svg:g [attr.transform]="attrTransform" [style.transform]="styleTransform" [style.transition]="textTransition">
      <svg:text
        class="pie-label"
        [class.animation]="animations"
        dy=".35em"
        [style.textAnchor]="textAnchor()"
        [style.shapeRendering]="'crispEdges'"
      >
        {{ labelTrim ? trimLabel(label, labelTrimSize) : label }}
      </svg:text>
    </svg:g>
    <svg:path
      [attr.d]="line"
      [attr.stroke]="color"
      fill="none"
      class="pie-label-line line"
      [class.animation]="animations"
    ></svg:path>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    data: [{
      type: Input
    }],
    radius: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    explodeSlices: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    labelTrim: [{
      type: Input
    }],
    labelTrimSize: [{
      type: Input
    }]
  });
})();
var PolarSeriesComponent = class {
  constructor() {
    this.tooltipDisabled = false;
    this.gradient = false;
    this.animations = true;
    this.select = new EventEmitter();
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.circleRadius = 3;
    this.barOrientation = BarOrientation;
    this.placementTypes = PlacementTypes;
    this.styleTypes = StyleTypes;
  }
  ngOnChanges(changes) {
    this.update();
  }
  update() {
    this.updateGradients();
    const line = this.getLineGenerator();
    const data = this.sortData(this.data.series);
    const seriesName = this.data.name;
    const linearScaleType = this.colors.scaleType === ScaleType.Linear;
    const min4 = this.yScale.domain()[0];
    this.seriesColor = this.colors.getColor(linearScaleType ? min4 : seriesName);
    this.path = line(data) || "";
    this.circles = data.map((d) => {
      const a2 = this.getAngle(d);
      const r = this.getRadius(d);
      const value2 = d.value;
      const color = this.colors.getColor(linearScaleType ? Math.abs(value2) : seriesName);
      const cData = Object.assign({}, d, {
        series: seriesName,
        value: value2,
        name: d.name
      });
      return {
        data: cData,
        cx: r * Math.sin(a2),
        cy: -r * Math.cos(a2),
        value: value2,
        color,
        label: d.name
      };
    });
    this.active = this.isActive(this.data);
    this.inactive = this.isInactive(this.data);
    this.tooltipText = this.tooltipText || ((c) => this.defaultTooltipText(c));
  }
  getAngle(d) {
    const label = d.name;
    if (this.scaleType === ScaleType.Time) {
      return this.xScale(label);
    } else if (this.scaleType === ScaleType.Linear) {
      return this.xScale(Number(label));
    }
    return this.xScale(label);
  }
  getRadius(d) {
    return this.yScale(d.value);
  }
  getLineGenerator() {
    return lineRadial_default().angle((d) => this.getAngle(d)).radius((d) => this.getRadius(d)).curve(this.curve);
  }
  sortData(data) {
    if (this.scaleType === ScaleType.Linear) {
      return sortLinear(data, "name");
    } else if (this.scaleType === ScaleType.Time) {
      return sortByTime(data, "name");
    }
    return sortByDomain(data, "name", "asc", this.xScale.domain());
  }
  isActive(entry) {
    if (!this.activeEntries) return false;
    const item = this.activeEntries.find((d) => {
      return entry.name === d.name;
    });
    return item !== void 0;
  }
  isInactive(entry) {
    if (!this.activeEntries || this.activeEntries.length === 0) return false;
    const item = this.activeEntries.find((d) => {
      return entry.name === d.name;
    });
    return item === void 0;
  }
  defaultTooltipText({
    label,
    value: value2
  }) {
    return `
      <span class="tooltip-label">${escapeLabel(this.data.name)} • ${escapeLabel(label)}</span>
      <span class="tooltip-val">${value2.toLocaleString()}</span>
    `;
  }
  updateGradients() {
    this.hasGradient = this.gradient || this.colors.scaleType === ScaleType.Linear;
    if (!this.hasGradient) {
      return;
    }
    this.gradientId = "grad" + id().toString();
    this.gradientUrl = `url(#${this.gradientId})`;
    if (this.colors.scaleType === ScaleType.Linear) {
      const values = this.data.series.map((d) => d.value);
      const max4 = Math.max(...values);
      const min4 = Math.min(...values);
      this.gradientStops = this.colors.getLinearGradientStops(max4, min4);
    } else {
      this.gradientStops = void 0;
    }
  }
};
PolarSeriesComponent.ɵfac = function PolarSeriesComponent_Factory(t) {
  return new (t || PolarSeriesComponent)();
};
PolarSeriesComponent.ɵcmp = ɵɵdefineComponent({
  type: PolarSeriesComponent,
  selectors: [["g", "ngx-charts-polar-series", ""]],
  inputs: {
    name: "name",
    data: "data",
    xScale: "xScale",
    yScale: "yScale",
    colors: "colors",
    scaleType: "scaleType",
    curve: "curve",
    activeEntries: "activeEntries",
    rangeFillOpacity: "rangeFillOpacity",
    tooltipDisabled: "tooltipDisabled",
    tooltipText: "tooltipText",
    gradient: "gradient",
    tooltipTemplate: "tooltipTemplate",
    animations: "animations"
  },
  outputs: {
    select: "select",
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c39,
  decls: 5,
  vars: 11,
  consts: [[1, "polar-charts-series"], ["ngx-charts-svg-radial-gradient", "", 3, "color", "name", "startOpacity", "endOpacity", "stops", 4, "ngIf"], ["ngx-charts-line", "", 1, "polar-series-path", 3, "path", "stroke", "fill", "animations"], ["ngx-charts-circle", "", "class", "circle", "ngx-tooltip", "", 3, "cx", "cy", "r", "fill", "opacity", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate", 4, "ngFor", "ngForOf"], ["ngx-charts-svg-radial-gradient", "", 3, "color", "name", "startOpacity", "endOpacity", "stops"], ["ngx-charts-circle", "", "ngx-tooltip", "", 1, "circle", 3, "select", "activate", "deactivate", "cx", "cy", "r", "fill", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext"]],
  template: function PolarSeriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "g", 0)(1, "defs");
      ɵɵtemplate(2, PolarSeriesComponent__svg_g_2_Template, 1, 5, "g", 1);
      ɵɵelementEnd();
      ɵɵelement(3, "g", 2);
      ɵɵtemplate(4, PolarSeriesComponent__svg_g_4_Template, 1, 12, "g", 3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.hasGradient);
      ɵɵadvance();
      ɵɵclassProp("active", ctx.active)("inactive", ctx.inactive);
      ɵɵproperty("path", ctx.path)("stroke", ctx.hasGradient ? ctx.gradientUrl : ctx.seriesColor)("fill", ctx.hasGradient ? ctx.gradientUrl : ctx.seriesColor)("animations", ctx.animations);
      ɵɵattribute("fill-opacity", ctx.rangeFillOpacity);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.circles);
    }
  },
  dependencies: [SvgRadialGradientComponent, LineComponent, CircleComponent, NgIf, NgForOf, TooltipDirective],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolarSeriesComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-polar-series]",
      template: `
    <svg:g class="polar-charts-series">
      <defs>
        <svg:g
          ngx-charts-svg-radial-gradient
          *ngIf="hasGradient"
          [color]="seriesColor"
          [name]="gradientId"
          [startOpacity]="0.25"
          [endOpacity]="1"
          [stops]="gradientStops"
        />
      </defs>
      <svg:g
        ngx-charts-line
        class="polar-series-path"
        [path]="path"
        [stroke]="hasGradient ? gradientUrl : seriesColor"
        [class.active]="active"
        [class.inactive]="inactive"
        [attr.fill-opacity]="rangeFillOpacity"
        [fill]="hasGradient ? gradientUrl : seriesColor"
        [animations]="animations"
      />
      <svg:g
        ngx-charts-circle
        *ngFor="let circle of circles"
        class="circle"
        [cx]="circle.cx"
        [cy]="circle.cy"
        [r]="circleRadius"
        [fill]="circle.color"
        [style.opacity]="inactive ? 0.2 : 1"
        ngx-tooltip
        [tooltipDisabled]="tooltipDisabled"
        [tooltipPlacement]="placementTypes.Top"
        [tooltipType]="styleTypes.tooltip"
        [tooltipTitle]="tooltipTemplate ? undefined : tooltipText(circle)"
        [tooltipTemplate]="tooltipTemplate"
        [tooltipContext]="circle.data"
        (select)="select.emit(circle.data)"
        (activate)="activate.emit({ name: circle.data.series })"
        (deactivate)="deactivate.emit({ name: circle.data.series })"
      ></svg:g>
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    name: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    xScale: [{
      type: Input
    }],
    yScale: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    scaleType: [{
      type: Input
    }],
    curve: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    rangeFillOpacity: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    tooltipText: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    tooltipTemplate: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }]
  });
})();
var twoPI = 2 * Math.PI;
var PolarChartComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.legendTitle = "Legend";
    this.legendPosition = LegendPosition.Right;
    this.showGridLines = true;
    this.curve = cardinalClosed_default;
    this.activeEntries = [];
    this.rangeFillOpacity = 0.15;
    this.trimYAxisTicks = true;
    this.maxYAxisTickLength = 16;
    this.roundDomains = false;
    this.tooltipDisabled = false;
    this.showSeriesOnHover = true;
    this.gradient = false;
    this.yAxisMinScale = 0;
    this.labelTrim = true;
    this.labelTrimSize = 10;
    this.wrapTicks = false;
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.margin = [10, 20, 10, 20];
    this.xAxisHeight = 0;
    this.yAxisWidth = 0;
    this.orientation = Orientation;
    this.isSSR = false;
  }
  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.isSSR = true;
    }
  }
  update() {
    super.update();
    this.setDims();
    this.setScales();
    this.setColors();
    this.legendOptions = this.getLegendOptions();
    this.setTicks();
  }
  setDims() {
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
      showXAxis: this.xAxis,
      showYAxis: this.yAxis,
      xAxisHeight: this.xAxisHeight,
      yAxisWidth: this.yAxisWidth,
      showXLabel: this.showXAxisLabel,
      showYLabel: this.showYAxisLabel,
      showLegend: this.legend,
      legendType: this.schemeType,
      legendPosition: this.legendPosition
    });
    const halfWidth = Math.floor(this.dims.width / 2);
    const halfHeight = Math.floor(this.dims.height / 2);
    const outerRadius = this.outerRadius = Math.min(halfHeight / 1.5, halfWidth / 1.5);
    const yOffset = Math.max(0, halfHeight - outerRadius);
    this.yAxisDims = __spreadProps(__spreadValues({}, this.dims), {
      width: halfWidth
    });
    this.transform = `translate(${this.dims.xOffset}, ${this.margin[0]})`;
    this.transformYAxis = `translate(0, ${yOffset})`;
    this.labelOffset = this.dims.height + 40;
    this.transformPlot = `translate(${halfWidth}, ${halfHeight})`;
  }
  setScales() {
    const xValues = this.getXValues();
    this.scaleType = getScaleType(xValues);
    this.xDomain = this.filteredDomain || this.getXDomain(xValues);
    this.yDomain = this.getYDomain();
    this.seriesDomain = this.getSeriesDomain();
    this.xScale = this.getXScale(this.xDomain, twoPI);
    this.yScale = this.getYScale(this.yDomain, this.outerRadius);
    this.yAxisScale = this.getYScale(this.yDomain.reverse(), this.outerRadius);
  }
  setTicks() {
    let tickFormat2;
    if (this.xAxisTickFormatting) {
      tickFormat2 = this.xAxisTickFormatting;
    } else if (this.xScale.tickFormat) {
      tickFormat2 = this.xScale.tickFormat.apply(this.xScale, [5]);
    } else {
      tickFormat2 = (d) => {
        if (isDate(d)) {
          return d.toLocaleDateString();
        }
        return d.toLocaleString();
      };
    }
    const outerRadius = this.outerRadius;
    const s2 = 1.1;
    this.thetaTicks = this.xDomain.map((d) => {
      const startAngle = this.xScale(d);
      const dd = s2 * outerRadius * (startAngle > Math.PI ? -1 : 1);
      const label = tickFormat2(d);
      const startPos = [outerRadius * Math.sin(startAngle), -outerRadius * Math.cos(startAngle)];
      const pos = [dd, s2 * startPos[1]];
      return {
        innerRadius: 0,
        outerRadius,
        startAngle,
        endAngle: startAngle,
        value: outerRadius,
        label,
        startPos,
        pos
      };
    });
    const minDistance = 10;
    for (let i = 0; i < this.thetaTicks.length - 1; i++) {
      const a2 = this.thetaTicks[i];
      for (let j = i + 1; j < this.thetaTicks.length; j++) {
        const b = this.thetaTicks[j];
        if (b.pos[0] * a2.pos[0] > 0) {
          const o = minDistance - Math.abs(b.pos[1] - a2.pos[1]);
          if (o > 0) {
            b.pos[1] += Math.sign(b.pos[0]) * o;
          }
        }
      }
    }
    this.radiusTicks = this.yAxisScale.ticks(Math.floor(this.dims.height / 50)).map((d) => this.yScale(d));
  }
  getXValues() {
    const values = [];
    for (const results of this.results) {
      for (const d of results.series) {
        if (!values.includes(d.name)) {
          values.push(d.name);
        }
      }
    }
    return values;
  }
  getXDomain(values = this.getXValues()) {
    if (this.scaleType === ScaleType.Time) {
      const min4 = Math.min(...values);
      const max4 = Math.max(...values);
      return [min4, max4];
    } else if (this.scaleType === ScaleType.Linear) {
      values = values.map((v) => Number(v));
      const min4 = Math.min(...values);
      const max4 = Math.max(...values);
      return [min4, max4];
    }
    return values;
  }
  getYValues() {
    const domain = [];
    for (const results of this.results) {
      for (const d of results.series) {
        if (domain.indexOf(d.value) < 0) {
          domain.push(d.value);
        }
        if (d.min !== void 0) {
          if (domain.indexOf(d.min) < 0) {
            domain.push(d.min);
          }
        }
        if (d.max !== void 0) {
          if (domain.indexOf(d.max) < 0) {
            domain.push(d.max);
          }
        }
      }
    }
    return domain;
  }
  getYDomain(domain = this.getYValues()) {
    let min4 = Math.min(...domain);
    const max4 = Math.max(this.yAxisMinScale, ...domain);
    min4 = Math.max(0, min4);
    if (!this.autoScale) {
      min4 = Math.min(0, min4);
    }
    return [min4, max4];
  }
  getSeriesDomain() {
    return this.results.map((d) => d.name);
  }
  getXScale(domain, width) {
    switch (this.scaleType) {
      case ScaleType.Time:
        return time().range([0, width]).domain(domain);
      case ScaleType.Linear: {
        const scale = linear().range([0, width]).domain(domain);
        return this.roundDomains ? scale.nice() : scale;
      }
      default:
        return point().range([0, width - twoPI / domain.length]).padding(0).domain(domain);
    }
  }
  getYScale(domain, height) {
    const scale = linear().range([0, height]).domain(domain);
    return this.roundDomains ? scale.nice() : scale;
  }
  onClick(data, series) {
    if (series) {
      data.series = series.name;
    }
    this.select.emit(data);
  }
  setColors() {
    const domain = this.schemeType === ScaleType.Ordinal ? this.seriesDomain : this.yDomain.reverse();
    this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
  }
  getLegendOptions() {
    if (this.schemeType === ScaleType.Ordinal) {
      return {
        scaleType: this.schemeType,
        colors: this.colors,
        domain: this.seriesDomain,
        title: this.legendTitle,
        position: this.legendPosition
      };
    }
    return {
      scaleType: this.schemeType,
      colors: this.colors.scale,
      domain: this.yDomain,
      title: void 0,
      position: this.legendPosition
    };
  }
  updateYAxisWidth({
    width
  }) {
    this.yAxisWidth = width;
    this.update();
  }
  updateXAxisHeight({
    height
  }) {
    this.xAxisHeight = height;
    this.update();
  }
  onActivate(item) {
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value;
    });
    if (idx > -1) {
      return;
    }
    this.activeEntries = this.showSeriesOnHover ? [item, ...this.activeEntries] : this.activeEntries;
    this.activate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  onDeactivate(item) {
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value;
    });
    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];
    this.deactivate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  deactivateAll() {
    this.activeEntries = [...this.activeEntries];
    for (const entry of this.activeEntries) {
      this.deactivate.emit({
        value: entry,
        entries: []
      });
    }
    this.activeEntries = [];
  }
  trackBy(index2, item) {
    return `${item.name}`;
  }
};
PolarChartComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵPolarChartComponent_BaseFactory;
  return function PolarChartComponent_Factory(t) {
    return (ɵPolarChartComponent_BaseFactory || (ɵPolarChartComponent_BaseFactory = ɵɵgetInheritedFactory(PolarChartComponent)))(t || PolarChartComponent);
  };
})();
PolarChartComponent.ɵcmp = ɵɵdefineComponent({
  type: PolarChartComponent,
  selectors: [["ngx-charts-polar-chart"]],
  contentQueries: function PolarChartComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    }
  },
  inputs: {
    legend: "legend",
    legendTitle: "legendTitle",
    legendPosition: "legendPosition",
    xAxis: "xAxis",
    yAxis: "yAxis",
    showXAxisLabel: "showXAxisLabel",
    showYAxisLabel: "showYAxisLabel",
    xAxisLabel: "xAxisLabel",
    yAxisLabel: "yAxisLabel",
    autoScale: "autoScale",
    showGridLines: "showGridLines",
    curve: "curve",
    activeEntries: "activeEntries",
    schemeType: "schemeType",
    rangeFillOpacity: "rangeFillOpacity",
    trimYAxisTicks: "trimYAxisTicks",
    maxYAxisTickLength: "maxYAxisTickLength",
    xAxisTickFormatting: "xAxisTickFormatting",
    yAxisTickFormatting: "yAxisTickFormatting",
    roundDomains: "roundDomains",
    tooltipDisabled: "tooltipDisabled",
    showSeriesOnHover: "showSeriesOnHover",
    gradient: "gradient",
    yAxisMinScale: "yAxisMinScale",
    labelTrim: "labelTrim",
    labelTrimSize: "labelTrimSize",
    wrapTicks: "wrapTicks"
  },
  outputs: {
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 10,
  vars: 17,
  consts: [[3, "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate", "view", "showLegend", "legendOptions", "activeEntries", "animations"], [1, "polar-chart", "chart"], ["cx", "0", "cy", "0", 1, "polar-chart-background"], [4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "wrapTicks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width", 4, "ngIf"], ["class", "gridline-path radial-gridline-path", "cx", "0", "cy", "0", 4, "ngFor", "ngForOf"], ["cx", "0", "cy", "0", 1, "gridline-path", "radial-gridline-path"], ["ngx-charts-pie-label", "", 3, "data", "radius", "label", "max", "value", "explodeSlices", "animations", "labelTrim", "labelTrimSize", 4, "ngFor", "ngForOf"], ["ngx-charts-pie-label", "", 3, "data", "radius", "label", "max", "value", "explodeSlices", "animations", "labelTrim", "labelTrimSize"], ["ngx-charts-y-axis", "", 3, "dimensionsChanged", "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "wrapTicks"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-polar-series", "", 3, "select", "activate", "deactivate", "gradient", "xScale", "yScale", "colors", "data", "activeEntries", "scaleType", "curve", "rangeFillOpacity", "animations", "tooltipDisabled", "tooltipTemplate"]],
  template: function PolarChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵlistener("legendLabelClick", function PolarChartComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) {
        return ctx.onClick($event);
      })("legendLabelActivate", function PolarChartComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) {
        return ctx.onActivate($event);
      })("legendLabelDeactivate", function PolarChartComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) {
        return ctx.onDeactivate($event);
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "g", 1)(2, "g");
      ɵɵelement(3, "circle", 2);
      ɵɵtemplate(4, PolarChartComponent__svg_g_4_Template, 2, 1, "g", 3)(5, PolarChartComponent__svg_g_5_Template, 2, 1, "g", 3);
      ɵɵelementEnd();
      ɵɵtemplate(6, PolarChartComponent__svg_g_6_Template, 1, 10, "g", 4)(7, PolarChartComponent__svg_g_7_Template, 1, 5, "g", 5)(8, PolarChartComponent__svg_g_8_Template, 2, 3, "g", 3)(9, PolarChartComponent__svg_g_9_Template, 2, 3, "g", 3);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(14, _c24, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transformPlot);
      ɵɵadvance();
      ɵɵattribute("r", ctx.outerRadius);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showGridLines);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.xAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.yAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.xAxis && ctx.showXAxisLabel);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.isSSR);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isSSR);
    }
  },
  dependencies: [ChartComponent, PieLabelComponent, YAxisComponent, AxisLabelComponent, PolarSeriesComponent, NgIf, NgForOf],
  styles: [_c25, ".pie-label{font-size:11px}.pie-label.animation{animation:.75s ease-in fadeIn}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.pie-label-line{stroke-dasharray:100%}.pie-label-line.animation{animation:3s linear drawOut;transition:d .75s}@keyframes drawOut{0%{stroke-dashoffset:100%}to{stroke-dashoffset:0}}\n", ".polar-chart .polar-chart-background{fill:none}.polar-chart .radial-gridline-path{stroke-dasharray:10 10;fill:none}.polar-chart .pie-label-line{stroke:#2f3646}.polar-charts-series .polar-series-area,.polar-series-path{pointer-events:none}\n"],
  encapsulation: 2,
  data: {
    animation: [trigger("animationState", [transition(":leave", [style({
      opacity: 1
    }), animate(500, style({
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolarChartComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-polar-chart",
      template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
    >
      <svg:g class="polar-chart chart" [attr.transform]="transform">
        <svg:g [attr.transform]="transformPlot">
          <svg:circle class="polar-chart-background" cx="0" cy="0" [attr.r]="this.outerRadius" />
          <svg:g *ngIf="showGridLines">
            <svg:circle
              *ngFor="let r of radiusTicks"
              class="gridline-path radial-gridline-path"
              cx="0"
              cy="0"
              [attr.r]="r"
            />
          </svg:g>
          <svg:g *ngIf="xAxis">
            <svg:g
              ngx-charts-pie-label
              *ngFor="let tick of thetaTicks"
              [data]="tick"
              [radius]="outerRadius"
              [label]="tick.label"
              [max]="outerRadius"
              [value]="showGridLines ? 1 : outerRadius"
              [explodeSlices]="true"
              [animations]="animations"
              [labelTrim]="labelTrim"
              [labelTrimSize]="labelTrimSize"
            ></svg:g>
          </svg:g>
        </svg:g>
        <svg:g
          ngx-charts-y-axis
          [attr.transform]="transformYAxis"
          *ngIf="yAxis"
          [yScale]="yAxisScale"
          [dims]="yAxisDims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [wrapTicks]="wrapTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g
          ngx-charts-axis-label
          *ngIf="xAxis && showXAxisLabel"
          [label]="xAxisLabel"
          [offset]="labelOffset"
          [orient]="orientation.Bottom"
          [height]="dims.height"
          [width]="dims.width"
        ></svg:g>
        <svg:g *ngIf="!isSSR" [attr.transform]="transformPlot">
          <svg:g *ngFor="let series of results; trackBy: trackBy" [@animationState]="'active'">
            <svg:g
              ngx-charts-polar-series
              [gradient]="gradient"
              [xScale]="xScale"
              [yScale]="yScale"
              [colors]="colors"
              [data]="series"
              [activeEntries]="activeEntries"
              [scaleType]="scaleType"
              [curve]="curve"
              [rangeFillOpacity]="rangeFillOpacity"
              [animations]="animations"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="tooltipTemplate"
              (select)="onClick($event)"
              (activate)="onActivate($event)"
              (deactivate)="onDeactivate($event)"
            />
          </svg:g>
        </svg:g>
        <svg:g *ngIf="isSSR" [attr.transform]="transformPlot">
          <svg:g *ngFor="let series of results; trackBy: trackBy">
            <svg:g
              ngx-charts-polar-series
              [gradient]="gradient"
              [xScale]="xScale"
              [yScale]="yScale"
              [colors]="colors"
              [data]="series"
              [activeEntries]="activeEntries"
              [scaleType]="scaleType"
              [curve]="curve"
              [rangeFillOpacity]="rangeFillOpacity"
              [animations]="animations"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="tooltipTemplate"
              (select)="onClick($event)"
              (activate)="onActivate($event)"
              (deactivate)="onDeactivate($event)"
            />
          </svg:g>
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("animationState", [transition(":leave", [style({
        opacity: 1
      }), animate(500, style({
        opacity: 0
      }))])])],
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n", ".pie-label{font-size:11px}.pie-label.animation{animation:.75s ease-in fadeIn}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.pie-label-line{stroke-dasharray:100%}.pie-label-line.animation{animation:3s linear drawOut;transition:d .75s}@keyframes drawOut{0%{stroke-dashoffset:100%}to{stroke-dashoffset:0}}\n", ".polar-chart .polar-chart-background{fill:none}.polar-chart .radial-gridline-path{stroke-dasharray:10 10;fill:none}.polar-chart .pie-label-line{stroke:#2f3646}.polar-charts-series .polar-series-area,.polar-series-path{pointer-events:none}\n"]
    }]
  }], null, {
    legend: [{
      type: Input
    }],
    legendTitle: [{
      type: Input
    }],
    legendPosition: [{
      type: Input
    }],
    xAxis: [{
      type: Input
    }],
    yAxis: [{
      type: Input
    }],
    showXAxisLabel: [{
      type: Input
    }],
    showYAxisLabel: [{
      type: Input
    }],
    xAxisLabel: [{
      type: Input
    }],
    yAxisLabel: [{
      type: Input
    }],
    autoScale: [{
      type: Input
    }],
    showGridLines: [{
      type: Input
    }],
    curve: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    schemeType: [{
      type: Input
    }],
    rangeFillOpacity: [{
      type: Input
    }],
    trimYAxisTicks: [{
      type: Input
    }],
    maxYAxisTickLength: [{
      type: Input
    }],
    xAxisTickFormatting: [{
      type: Input
    }],
    yAxisTickFormatting: [{
      type: Input
    }],
    roundDomains: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    showSeriesOnHover: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    yAxisMinScale: [{
      type: Input
    }],
    labelTrim: [{
      type: Input
    }],
    labelTrimSize: [{
      type: Input
    }],
    wrapTicks: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }]
  });
})();
var PieArcComponent = class {
  constructor(element) {
    this.startAngle = 0;
    this.endAngle = Math.PI * 2;
    this.cornerRadius = 0;
    this.explodeSlices = false;
    this.gradient = false;
    this.animate = true;
    this.pointerEvents = true;
    this.isActive = false;
    this.select = new EventEmitter();
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.dblclick = new EventEmitter();
    this.barOrientation = BarOrientation;
    this.initialized = false;
    this.element = element.nativeElement;
  }
  ngOnChanges(changes) {
    this.update();
  }
  getGradient() {
    return this.gradient ? this.gradientFill : this.fill;
  }
  getPointerEvents() {
    return this.pointerEvents ? "auto" : "none";
  }
  update() {
    const calc = this.calculateArc();
    this.startOpacity = 0.5;
    this.radialGradientId = "linearGrad" + id().toString();
    this.gradientFill = `url(#${this.radialGradientId})`;
    if (this.animate) {
      if (this.initialized) {
        this.updateAnimation();
      } else {
        this.loadAnimation();
        this.initialized = true;
      }
    } else {
      this.path = calc.startAngle(this.startAngle).endAngle(this.endAngle)();
    }
  }
  calculateArc() {
    let outerRadius = this.outerRadius;
    if (this.explodeSlices && this.innerRadius === 0) {
      outerRadius = this.outerRadius * this.value / this.max;
    }
    return arc_default().innerRadius(this.innerRadius).outerRadius(outerRadius).cornerRadius(this.cornerRadius);
  }
  loadAnimation() {
    const node = select_default(this.element).selectAll(".arc").data([{
      startAngle: this.startAngle,
      endAngle: this.endAngle
    }]);
    const calc = this.calculateArc();
    node.transition().attrTween("d", function(d) {
      this._current = this._current || d;
      const copyOfD = Object.assign({}, d);
      copyOfD.endAngle = copyOfD.startAngle;
      const interpolater = value_default(copyOfD, copyOfD);
      this._current = interpolater(0);
      return function(t) {
        return calc(interpolater(t));
      };
    }).transition().duration(750).attrTween("d", function(d) {
      this._current = this._current || d;
      const interpolater = value_default(this._current, d);
      this._current = interpolater(0);
      return function(t) {
        return calc(interpolater(t));
      };
    });
  }
  updateAnimation() {
    const node = select_default(this.element).selectAll(".arc").data([{
      startAngle: this.startAngle,
      endAngle: this.endAngle
    }]);
    const calc = this.calculateArc();
    node.transition().duration(750).attrTween("d", function(d) {
      this._current = this._current || d;
      const interpolater = value_default(this._current, d);
      this._current = interpolater(0);
      return function(t) {
        return calc(interpolater(t));
      };
    });
  }
  onClick() {
    clearTimeout(this._timeout);
    this._timeout = setTimeout(() => this.select.emit(this.data), 200);
  }
  onDblClick(event) {
    event.preventDefault();
    event.stopPropagation();
    clearTimeout(this._timeout);
    this.dblclick.emit({
      data: this.data,
      nativeEvent: event
    });
  }
};
PieArcComponent.ɵfac = function PieArcComponent_Factory(t) {
  return new (t || PieArcComponent)(ɵɵdirectiveInject(ElementRef));
};
PieArcComponent.ɵcmp = ɵɵdefineComponent({
  type: PieArcComponent,
  selectors: [["g", "ngx-charts-pie-arc", ""]],
  inputs: {
    fill: "fill",
    startAngle: "startAngle",
    endAngle: "endAngle",
    innerRadius: "innerRadius",
    outerRadius: "outerRadius",
    cornerRadius: "cornerRadius",
    value: "value",
    max: "max",
    data: "data",
    explodeSlices: "explodeSlices",
    gradient: "gradient",
    animate: "animate",
    pointerEvents: "pointerEvents",
    isActive: "isActive"
  },
  outputs: {
    select: "select",
    activate: "activate",
    deactivate: "deactivate",
    dblclick: "dblclick"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c40,
  decls: 3,
  vars: 7,
  consts: [[1, "arc-group"], [4, "ngIf"], [1, "arc", 3, "click", "dblclick", "mouseenter", "mouseleave"], ["ngx-charts-svg-radial-gradient", "", 3, "color", "name", "startOpacity"]],
  template: function PieArcComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "g", 0);
      ɵɵtemplate(1, PieArcComponent__svg_defs_1_Template, 2, 3, "defs", 1);
      ɵɵelementStart(2, "path", 2);
      ɵɵlistener("click", function PieArcComponent_Template_path_click_2_listener() {
        return ctx.onClick();
      })("dblclick", function PieArcComponent_Template_path_dblclick_2_listener($event) {
        return ctx.onDblClick($event);
      })("mouseenter", function PieArcComponent_Template_path_mouseenter_2_listener() {
        return ctx.activate.emit(ctx.data);
      })("mouseleave", function PieArcComponent_Template_path_mouseleave_2_listener() {
        return ctx.deactivate.emit(ctx.data);
      });
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.gradient);
      ɵɵadvance();
      ɵɵstyleProp("pointer-events", ctx.getPointerEvents());
      ɵɵclassProp("active", ctx.isActive);
      ɵɵattribute("d", ctx.path)("fill", ctx.getGradient());
    }
  },
  dependencies: [SvgRadialGradientComponent, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PieArcComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-pie-arc]",
      template: `
    <svg:g class="arc-group">
      <svg:defs *ngIf="gradient">
        <svg:g ngx-charts-svg-radial-gradient [color]="fill" [name]="radialGradientId" [startOpacity]="startOpacity" />
      </svg:defs>
      <svg:path
        [attr.d]="path"
        class="arc"
        [class.active]="isActive"
        [attr.fill]="getGradient()"
        (click)="onClick()"
        (dblclick)="onDblClick($event)"
        (mouseenter)="activate.emit(data)"
        (mouseleave)="deactivate.emit(data)"
        [style.pointer-events]="getPointerEvents()"
      />
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    fill: [{
      type: Input
    }],
    startAngle: [{
      type: Input
    }],
    endAngle: [{
      type: Input
    }],
    innerRadius: [{
      type: Input
    }],
    outerRadius: [{
      type: Input
    }],
    cornerRadius: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    explodeSlices: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    animate: [{
      type: Input
    }],
    pointerEvents: [{
      type: Input
    }],
    isActive: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    dblclick: [{
      type: Output
    }]
  });
})();
var PieSeriesComponent = class {
  constructor() {
    this.series = [];
    this.innerRadius = 60;
    this.outerRadius = 80;
    this.trimLabels = true;
    this.maxLabelLength = 10;
    this.tooltipDisabled = false;
    this.animations = true;
    this.select = new EventEmitter();
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.dblclick = new EventEmitter();
    this.placementTypes = PlacementTypes;
    this.styleTypes = StyleTypes;
  }
  ngOnChanges(changes) {
    this.update();
  }
  update() {
    const pieGenerator = pie_default().value((d) => d.value).sort(null);
    const arcData = pieGenerator(this.series);
    this.max = max(arcData, (d) => {
      return d.value;
    });
    this.data = this.calculateLabelPositions(arcData);
    this.tooltipText = this.tooltipText || this.defaultTooltipText;
  }
  midAngle(d) {
    return d.startAngle + (d.endAngle - d.startAngle) / 2;
  }
  outerArc() {
    const factor = 1.5;
    return arc_default().innerRadius(this.outerRadius * factor).outerRadius(this.outerRadius * factor);
  }
  calculateLabelPositions(pieData) {
    const factor = 1.5;
    const minDistance = 10;
    const labelPositions = pieData;
    labelPositions.forEach((d) => {
      d.pos = this.outerArc().centroid(d);
      d.pos[0] = factor * this.outerRadius * (this.midAngle(d) < Math.PI ? 1 : -1);
    });
    for (let i = 0; i < labelPositions.length - 1; i++) {
      const a2 = labelPositions[i];
      if (!this.labelVisible(a2)) {
        continue;
      }
      for (let j = i + 1; j < labelPositions.length; j++) {
        const b = labelPositions[j];
        if (!this.labelVisible(b)) {
          continue;
        }
        if (b.pos[0] * a2.pos[0] > 0) {
          const o = minDistance - Math.abs(b.pos[1] - a2.pos[1]);
          if (o > 0) {
            b.pos[1] += Math.sign(b.pos[0]) * o;
          }
        }
      }
    }
    return labelPositions;
  }
  labelVisible(myArc) {
    return this.showLabels && myArc.endAngle - myArc.startAngle > Math.PI / 30;
  }
  getTooltipTitle(a2) {
    return this.tooltipTemplate ? void 0 : this.tooltipText(a2);
  }
  labelText(myArc) {
    if (this.labelFormatting) {
      return this.labelFormatting(myArc.data.name);
    }
    return this.label(myArc);
  }
  label(myArc) {
    return formatLabel(myArc.data.name);
  }
  defaultTooltipText(myArc) {
    const label = this.label(myArc);
    const val = formatLabel(myArc.data.value);
    return `
      <span class="tooltip-label">${escapeLabel(label)}</span>
      <span class="tooltip-val">${val}</span>
    `;
  }
  color(myArc) {
    return this.colors.getColor(this.label(myArc));
  }
  trackBy(index2, item) {
    return item.data.name;
  }
  onClick(data) {
    this.select.emit(data);
  }
  isActive(entry) {
    if (!this.activeEntries) return false;
    const item = this.activeEntries.find((d) => {
      return entry.name === d.name && entry.series === d.series;
    });
    return item !== void 0;
  }
};
PieSeriesComponent.ɵfac = function PieSeriesComponent_Factory(t) {
  return new (t || PieSeriesComponent)();
};
PieSeriesComponent.ɵcmp = ɵɵdefineComponent({
  type: PieSeriesComponent,
  selectors: [["g", "ngx-charts-pie-series", ""]],
  inputs: {
    colors: "colors",
    series: "series",
    dims: "dims",
    innerRadius: "innerRadius",
    outerRadius: "outerRadius",
    explodeSlices: "explodeSlices",
    showLabels: "showLabels",
    gradient: "gradient",
    activeEntries: "activeEntries",
    labelFormatting: "labelFormatting",
    trimLabels: "trimLabels",
    maxLabelLength: "maxLabelLength",
    tooltipText: "tooltipText",
    tooltipDisabled: "tooltipDisabled",
    tooltipTemplate: "tooltipTemplate",
    animations: "animations"
  },
  outputs: {
    select: "select",
    activate: "activate",
    deactivate: "deactivate",
    dblclick: "dblclick"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c41,
  decls: 1,
  vars: 2,
  consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-pie-label", "", 3, "data", "radius", "color", "label", "labelTrim", "labelTrimSize", "max", "value", "explodeSlices", "animations", 4, "ngIf"], ["ngx-charts-pie-arc", "", "ngx-tooltip", "", 3, "select", "activate", "deactivate", "dblclick", "startAngle", "endAngle", "innerRadius", "outerRadius", "fill", "value", "gradient", "data", "max", "explodeSlices", "isActive", "animate", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext"], ["ngx-charts-pie-label", "", 3, "data", "radius", "color", "label", "labelTrim", "labelTrimSize", "max", "value", "explodeSlices", "animations"]],
  template: function PieSeriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, PieSeriesComponent__svg_g_0_Template, 3, 19, "g", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.data)("ngForTrackBy", ctx.trackBy);
    }
  },
  dependencies: [PieLabelComponent, PieArcComponent, NgForOf, NgIf, TooltipDirective],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PieSeriesComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-pie-series]",
      template: `
    <svg:g *ngFor="let arc of data; trackBy: trackBy">
      <svg:g
        ngx-charts-pie-label
        *ngIf="labelVisible(arc)"
        [data]="arc"
        [radius]="outerRadius"
        [color]="color(arc)"
        [label]="labelText(arc)"
        [labelTrim]="trimLabels"
        [labelTrimSize]="maxLabelLength"
        [max]="max"
        [value]="arc.value"
        [explodeSlices]="explodeSlices"
        [animations]="animations"
      ></svg:g>
      <svg:g
        ngx-charts-pie-arc
        [startAngle]="arc.startAngle"
        [endAngle]="arc.endAngle"
        [innerRadius]="innerRadius"
        [outerRadius]="outerRadius"
        [fill]="color(arc)"
        [value]="arc.data.value"
        [gradient]="gradient"
        [data]="arc.data"
        [max]="max"
        [explodeSlices]="explodeSlices"
        [isActive]="isActive(arc.data)"
        [animate]="animations"
        (select)="onClick($event)"
        (activate)="activate.emit($event)"
        (deactivate)="deactivate.emit($event)"
        (dblclick)="dblclick.emit($event)"
        ngx-tooltip
        [tooltipDisabled]="tooltipDisabled"
        [tooltipPlacement]="placementTypes.Top"
        [tooltipType]="styleTypes.tooltip"
        [tooltipTitle]="getTooltipTitle(arc)"
        [tooltipTemplate]="tooltipTemplate"
        [tooltipContext]="arc.data"
      ></svg:g>
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    colors: [{
      type: Input
    }],
    series: [{
      type: Input
    }],
    dims: [{
      type: Input
    }],
    innerRadius: [{
      type: Input
    }],
    outerRadius: [{
      type: Input
    }],
    explodeSlices: [{
      type: Input
    }],
    showLabels: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    labelFormatting: [{
      type: Input
    }],
    trimLabels: [{
      type: Input
    }],
    maxLabelLength: [{
      type: Input
    }],
    tooltipText: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    tooltipTemplate: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    dblclick: [{
      type: Output
    }]
  });
})();
var AdvancedPieChartComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.activeEntries = [];
    this.tooltipDisabled = false;
    this.label = "Total";
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.margin = [20, 20, 20, 20];
  }
  update() {
    super.update();
    this.dims = calculateViewDimensions({
      width: this.width * 4 / 12,
      height: this.height,
      margins: this.margin
    });
    this.formatDates();
    this.domain = this.getDomain();
    this.setColors();
    const xOffset = this.dims.width / 2;
    const yOffset = this.margin[0] + this.dims.height / 2;
    this.legendWidth = this.width - this.dims.width - this.margin[1];
    this.outerRadius = Math.min(this.dims.width, this.dims.height) / 2.5;
    this.innerRadius = this.outerRadius * 0.75;
    this.transform = `translate(${xOffset} , ${yOffset})`;
  }
  getDomain() {
    return this.results.map((d) => d.label);
  }
  onClick(data) {
    this.select.emit(data);
  }
  setColors() {
    this.colors = new ColorHelper(this.scheme, ScaleType.Ordinal, this.domain, this.customColors);
  }
  onActivate(item, fromLegend = false) {
    item = this.results.find((d) => {
      if (fromLegend) {
        return d.label === item.name;
      } else {
        return d.name === item.name;
      }
    });
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value && d.series === item.series;
    });
    if (idx > -1) {
      return;
    }
    this.activeEntries = [item, ...this.activeEntries];
    this.activate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  onDeactivate(item, fromLegend = false) {
    item = this.results.find((d) => {
      if (fromLegend) {
        return d.label === item.name;
      } else {
        return d.name === item.name;
      }
    });
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value && d.series === item.series;
    });
    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];
    this.deactivate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
};
AdvancedPieChartComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵAdvancedPieChartComponent_BaseFactory;
  return function AdvancedPieChartComponent_Factory(t) {
    return (ɵAdvancedPieChartComponent_BaseFactory || (ɵAdvancedPieChartComponent_BaseFactory = ɵɵgetInheritedFactory(AdvancedPieChartComponent)))(t || AdvancedPieChartComponent);
  };
})();
AdvancedPieChartComponent.ɵcmp = ɵɵdefineComponent({
  type: AdvancedPieChartComponent,
  selectors: [["ngx-charts-advanced-pie-chart"]],
  contentQueries: function AdvancedPieChartComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    }
  },
  inputs: {
    gradient: "gradient",
    activeEntries: "activeEntries",
    tooltipDisabled: "tooltipDisabled",
    tooltipText: "tooltipText",
    label: "label",
    valueFormatting: "valueFormatting",
    nameFormatting: "nameFormatting",
    percentageFormatting: "percentageFormatting"
  },
  outputs: {
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 7,
  vars: 37,
  consts: [[1, "advanced-pie", "chart"], [3, "view", "showLegend", "animations"], [1, "pie", "chart"], ["ngx-charts-pie-series", "", 3, "select", "activate", "deactivate", "colors", "series", "innerRadius", "activeEntries", "outerRadius", "gradient", "tooltipDisabled", "tooltipTemplate", "tooltipText", "animations"], [1, "advanced-pie-legend-wrapper"], [3, "select", "activate", "deactivate", "data", "colors", "width", "label", "animations", "valueFormatting", "labelFormatting", "percentageFormatting"]],
  template: function AdvancedPieChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div")(1, "div", 0)(2, "ngx-charts-chart", 1);
      ɵɵnamespaceSVG();
      ɵɵelementStart(3, "g", 2)(4, "g", 3);
      ɵɵlistener("select", function AdvancedPieChartComponent_Template_g_select_4_listener($event) {
        return ctx.onClick($event);
      })("activate", function AdvancedPieChartComponent_Template_g_activate_4_listener($event) {
        return ctx.onActivate($event);
      })("deactivate", function AdvancedPieChartComponent_Template_g_deactivate_4_listener($event) {
        return ctx.onDeactivate($event);
      });
      ɵɵelementEnd()()()();
      ɵɵnamespaceHTML();
      ɵɵelementStart(5, "div", 4)(6, "ngx-charts-advanced-legend", 5);
      ɵɵlistener("select", function AdvancedPieChartComponent_Template_ngx_charts_advanced_legend_select_6_listener($event) {
        return ctx.onClick($event);
      })("activate", function AdvancedPieChartComponent_Template_ngx_charts_advanced_legend_activate_6_listener($event) {
        return ctx.onActivate($event, true);
      })("deactivate", function AdvancedPieChartComponent_Template_ngx_charts_advanced_legend_deactivate_6_listener($event) {
        return ctx.onDeactivate($event, true);
      });
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵstyleProp("width", ctx.width, "px")("height", ctx.height, "px");
      ɵɵadvance();
      ɵɵstyleProp("width", ctx.dims.width, "px")("height", ctx.dims.height, "px");
      ɵɵadvance();
      ɵɵproperty("view", ɵɵpureFunction2(34, _c24, ctx.width, ctx.height))("showLegend", false)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("colors", ctx.colors)("series", ctx.results)("innerRadius", ctx.innerRadius)("activeEntries", ctx.activeEntries)("outerRadius", ctx.outerRadius)("gradient", ctx.gradient)("tooltipDisabled", ctx.tooltipDisabled)("tooltipTemplate", ctx.tooltipTemplate)("tooltipText", ctx.tooltipText)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵstyleProp("width", ctx.width - ctx.dims.width, "px")("height", ctx.height, "px");
      ɵɵadvance();
      ɵɵproperty("data", ctx.results)("colors", ctx.colors)("width", ctx.width - ctx.dims.width - ctx.margin[1])("label", ctx.label)("animations", ctx.animations)("valueFormatting", ctx.valueFormatting)("labelFormatting", ctx.nameFormatting)("percentageFormatting", ctx.percentageFormatting);
    }
  },
  dependencies: [ChartComponent, PieSeriesComponent, AdvancedLegendComponent],
  styles: [_c25, ".advanced-pie{display:inline-block;float:left}.advanced-pie-legend-wrapper{display:inline-block}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdvancedPieChartComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-advanced-pie-chart",
      template: `
    <div [style.width.px]="width" [style.height.px]="height">
      <div class="advanced-pie chart" [style.width.px]="dims.width" [style.height.px]="dims.height">
        <ngx-charts-chart [view]="[width, height]" [showLegend]="false" [animations]="animations">
          <svg:g [attr.transform]="transform" class="pie chart">
            <svg:g
              ngx-charts-pie-series
              [colors]="colors"
              [series]="results"
              [innerRadius]="innerRadius"
              [activeEntries]="activeEntries"
              [outerRadius]="outerRadius"
              [gradient]="gradient"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="tooltipTemplate"
              [tooltipText]="tooltipText"
              (select)="onClick($event)"
              (activate)="onActivate($event)"
              (deactivate)="onDeactivate($event)"
              [animations]="animations"
            ></svg:g>
          </svg:g>
        </ngx-charts-chart>
      </div>
      <div class="advanced-pie-legend-wrapper" [style.width.px]="width - dims.width" [style.height.px]="height">
        <ngx-charts-advanced-legend
          [data]="results"
          [colors]="colors"
          [width]="width - dims.width - margin[1]"
          [label]="label"
          [animations]="animations"
          [valueFormatting]="valueFormatting"
          [labelFormatting]="nameFormatting"
          [percentageFormatting]="percentageFormatting"
          (select)="onClick($event)"
          (activate)="onActivate($event, true)"
          (deactivate)="onDeactivate($event, true)"
        >
        </ngx-charts-advanced-legend>
      </div>
    </div>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n", ".advanced-pie{display:inline-block;float:left}.advanced-pie-legend-wrapper{display:inline-block}\n"]
    }]
  }], null, {
    gradient: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    tooltipText: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }],
    valueFormatting: [{
      type: Input
    }],
    nameFormatting: [{
      type: Input
    }],
    percentageFormatting: [{
      type: Input
    }]
  });
})();
var PieChartComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.labels = false;
    this.legend = false;
    this.legendTitle = "Legend";
    this.legendPosition = LegendPosition.Right;
    this.explodeSlices = false;
    this.doughnut = false;
    this.arcWidth = 0.25;
    this.activeEntries = [];
    this.tooltipDisabled = false;
    this.trimLabels = true;
    this.maxLabelLength = 10;
    this.dblclick = new EventEmitter();
    this.select = new EventEmitter();
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
  }
  update() {
    super.update();
    if (this.labels && this.hasNoOptionalMarginsSet()) {
      this.margins = [30, 80, 30, 80];
    } else if (!this.labels && this.hasNoOptionalMarginsSet()) {
      this.margins = [20, 20, 20, 20];
    }
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margins,
      showLegend: this.legend,
      legendPosition: this.legendPosition
    });
    this.formatDates();
    const xOffset = this.margins[3] + this.dims.width / 2;
    const yOffset = this.margins[0] + this.dims.height / 2;
    this.translation = `translate(${xOffset}, ${yOffset})`;
    this.outerRadius = Math.min(this.dims.width, this.dims.height);
    if (this.labels) {
      this.outerRadius /= 3;
    } else {
      this.outerRadius /= 2;
    }
    this.innerRadius = 0;
    if (this.doughnut) {
      this.innerRadius = this.outerRadius * (1 - this.arcWidth);
    }
    this.domain = this.getDomain();
    this.data = this.results.sort((a2, b) => {
      return this.domain.indexOf(a2.name) - this.domain.indexOf(b.name);
    });
    this.setColors();
    this.legendOptions = this.getLegendOptions();
  }
  getDomain() {
    return this.results.map((d) => d.label);
  }
  onClick(data) {
    this.select.emit(data);
  }
  setColors() {
    this.colors = new ColorHelper(this.scheme, ScaleType.Ordinal, this.domain, this.customColors);
  }
  getLegendOptions() {
    return {
      scaleType: ScaleType.Ordinal,
      domain: this.domain,
      colors: this.colors,
      title: this.legendTitle,
      position: this.legendPosition
    };
  }
  onActivate(item, fromLegend = false) {
    item = this.results.find((d) => {
      if (fromLegend) {
        return d.label === item.name;
      } else {
        return d.name === item.name;
      }
    });
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value && d.series === item.series;
    });
    if (idx > -1) {
      return;
    }
    this.activeEntries = [item, ...this.activeEntries];
    this.activate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  onDeactivate(item, fromLegend = false) {
    item = this.results.find((d) => {
      if (fromLegend) {
        return d.label === item.name;
      } else {
        return d.name === item.name;
      }
    });
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value && d.series === item.series;
    });
    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];
    this.deactivate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  hasNoOptionalMarginsSet() {
    return !this.margins || this.margins.length <= 0;
  }
};
PieChartComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵPieChartComponent_BaseFactory;
  return function PieChartComponent_Factory(t) {
    return (ɵPieChartComponent_BaseFactory || (ɵPieChartComponent_BaseFactory = ɵɵgetInheritedFactory(PieChartComponent)))(t || PieChartComponent);
  };
})();
PieChartComponent.ɵcmp = ɵɵdefineComponent({
  type: PieChartComponent,
  selectors: [["ngx-charts-pie-chart"]],
  contentQueries: function PieChartComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    }
  },
  inputs: {
    labels: "labels",
    legend: "legend",
    legendTitle: "legendTitle",
    legendPosition: "legendPosition",
    explodeSlices: "explodeSlices",
    doughnut: "doughnut",
    arcWidth: "arcWidth",
    gradient: "gradient",
    activeEntries: "activeEntries",
    tooltipDisabled: "tooltipDisabled",
    labelFormatting: "labelFormatting",
    trimLabels: "trimLabels",
    maxLabelLength: "maxLabelLength",
    tooltipText: "tooltipText",
    margins: "margins"
  },
  outputs: {
    dblclick: "dblclick",
    select: "select",
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 3,
  vars: 24,
  consts: [[3, "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick", "view", "showLegend", "legendOptions", "activeEntries", "animations"], [1, "pie-chart", "chart"], ["ngx-charts-pie-series", "", 3, "dblclick", "select", "activate", "deactivate", "colors", "series", "showLabels", "labelFormatting", "trimLabels", "maxLabelLength", "activeEntries", "innerRadius", "outerRadius", "explodeSlices", "gradient", "animations", "tooltipDisabled", "tooltipTemplate", "tooltipText"]],
  template: function PieChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵlistener("legendLabelActivate", function PieChartComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) {
        return ctx.onActivate($event, true);
      })("legendLabelDeactivate", function PieChartComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) {
        return ctx.onDeactivate($event, true);
      })("legendLabelClick", function PieChartComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) {
        return ctx.onClick($event);
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "g", 1)(2, "g", 2);
      ɵɵlistener("dblclick", function PieChartComponent_Template_g_dblclick_2_listener($event) {
        return ctx.dblclick.emit($event);
      })("select", function PieChartComponent_Template_g_select_2_listener($event) {
        return ctx.onClick($event);
      })("activate", function PieChartComponent_Template_g_activate_2_listener($event) {
        return ctx.onActivate($event);
      })("deactivate", function PieChartComponent_Template_g_deactivate_2_listener($event) {
        return ctx.onDeactivate($event);
      });
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(21, _c24, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.translation);
      ɵɵadvance();
      ɵɵproperty("colors", ctx.colors)("series", ctx.data)("showLabels", ctx.labels)("labelFormatting", ctx.labelFormatting)("trimLabels", ctx.trimLabels)("maxLabelLength", ctx.maxLabelLength)("activeEntries", ctx.activeEntries)("innerRadius", ctx.innerRadius)("outerRadius", ctx.outerRadius)("explodeSlices", ctx.explodeSlices)("gradient", ctx.gradient)("animations", ctx.animations)("tooltipDisabled", ctx.tooltipDisabled)("tooltipTemplate", ctx.tooltipTemplate)("tooltipText", ctx.tooltipText);
    }
  },
  dependencies: [ChartComponent, PieSeriesComponent],
  styles: [_c25, _c42],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PieChartComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-pie-chart",
      template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelActivate)="onActivate($event, true)"
      (legendLabelDeactivate)="onDeactivate($event, true)"
      (legendLabelClick)="onClick($event)"
    >
      <svg:g [attr.transform]="translation" class="pie-chart chart">
        <svg:g
          ngx-charts-pie-series
          [colors]="colors"
          [series]="data"
          [showLabels]="labels"
          [labelFormatting]="labelFormatting"
          [trimLabels]="trimLabels"
          [maxLabelLength]="maxLabelLength"
          [activeEntries]="activeEntries"
          [innerRadius]="innerRadius"
          [outerRadius]="outerRadius"
          [explodeSlices]="explodeSlices"
          [gradient]="gradient"
          [animations]="animations"
          [tooltipDisabled]="tooltipDisabled"
          [tooltipTemplate]="tooltipTemplate"
          [tooltipText]="tooltipText"
          (dblclick)="dblclick.emit($event)"
          (select)="onClick($event)"
          (activate)="onActivate($event)"
          (deactivate)="onDeactivate($event)"
        />
      </svg:g>
    </ngx-charts-chart>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n", ".pie-label{font-size:11px}.pie-label.animation{animation:.75s ease-in fadeIn}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.pie-label-line{stroke-dasharray:100%}.pie-label-line.animation{animation:3s linear drawOut;transition:d .75s}@keyframes drawOut{0%{stroke-dashoffset:100%}to{stroke-dashoffset:0}}\n"]
    }]
  }], null, {
    labels: [{
      type: Input
    }],
    legend: [{
      type: Input
    }],
    legendTitle: [{
      type: Input
    }],
    legendPosition: [{
      type: Input
    }],
    explodeSlices: [{
      type: Input
    }],
    doughnut: [{
      type: Input
    }],
    arcWidth: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    labelFormatting: [{
      type: Input
    }],
    trimLabels: [{
      type: Input
    }],
    maxLabelLength: [{
      type: Input
    }],
    tooltipText: [{
      type: Input
    }],
    dblclick: [{
      type: Output
    }],
    margins: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }]
  });
})();
function gridSize(dims, len, minWidth) {
  let rows = 1;
  let cols = len;
  const width = dims.width;
  if (width > minWidth) {
    while (width / cols < minWidth) {
      rows += 1;
      cols = Math.ceil(len / rows);
    }
  }
  return [cols, rows];
}
function gridLayout(dims, data, minWidth, designatedTotal) {
  const xScale = band();
  const yScale = band();
  const width = dims.width;
  const height = dims.height;
  const [columns, rows] = gridSize(dims, data.length, minWidth);
  const xDomain = [];
  const yDomain = [];
  for (let i = 0; i < rows; i++) {
    yDomain.push(i);
  }
  for (let i = 0; i < columns; i++) {
    xDomain.push(i);
  }
  xScale.domain(xDomain);
  yScale.domain(yDomain);
  xScale.rangeRound([0, width], 0.1);
  yScale.rangeRound([0, height], 0.1);
  const res = [];
  const total = designatedTotal ? designatedTotal : getTotal(data);
  const cardWidth = xScale.bandwidth();
  const cardHeight = yScale.bandwidth();
  for (let i = 0; i < data.length; i++) {
    res[i] = {};
    res[i].data = {
      name: data[i] ? data[i].name : "",
      value: data[i] ? data[i].value : void 0,
      extra: data[i] ? data[i].extra : void 0,
      label: data[i] ? data[i].label : ""
    };
    res[i].x = xScale(i % columns);
    res[i].y = yScale(Math.floor(i / columns));
    res[i].width = cardWidth;
    res[i].height = cardHeight;
    res[i].data.percent = total > 0 ? res[i].data.value / total : 0;
    res[i].data.total = total;
  }
  return res;
}
function getTotal(results) {
  return results.map((d) => d ? d.value : 0).reduce((sum3, val) => sum3 + val, 0);
}
var PieGridSeriesComponent = class {
  constructor(element) {
    this.innerRadius = 70;
    this.outerRadius = 80;
    this.animations = true;
    this.select = new EventEmitter();
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.element = element.nativeElement;
  }
  ngOnChanges(changes) {
    this.update();
  }
  update() {
    this.layout = pie_default().value((d) => d.data.value).sort(null);
    this.arcs = this.getArcs();
  }
  getArcs() {
    return this.layout(this.data).map((arc, index2) => {
      const label = arc.data.data.name;
      const other = arc.data.data.other;
      if (index2 === 0) {
        arc.startAngle = 0;
      }
      const color = this.colors(label);
      return {
        data: arc.data.data,
        class: "arc arc" + index2,
        fill: color,
        startAngle: other ? 0 : arc.startAngle,
        endAngle: arc.endAngle,
        animate: this.animations && !other,
        pointerEvents: !other
      };
    });
  }
  onClick(data) {
    this.select.emit(this.data[0].data);
  }
  trackBy(index2, item) {
    return item.data.name;
  }
  label(arc) {
    return arc.data.name;
  }
  color(arc) {
    return this.colors(this.label(arc));
  }
};
PieGridSeriesComponent.ɵfac = function PieGridSeriesComponent_Factory(t) {
  return new (t || PieGridSeriesComponent)(ɵɵdirectiveInject(ElementRef));
};
PieGridSeriesComponent.ɵcmp = ɵɵdefineComponent({
  type: PieGridSeriesComponent,
  selectors: [["g", "ngx-charts-pie-grid-series", ""]],
  inputs: {
    colors: "colors",
    data: "data",
    innerRadius: "innerRadius",
    outerRadius: "outerRadius",
    animations: "animations"
  },
  outputs: {
    select: "select",
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c43,
  decls: 2,
  vars: 2,
  consts: [[1, "pie-grid-arcs"], ["ngx-charts-pie-arc", "", 3, "startAngle", "endAngle", "innerRadius", "outerRadius", "fill", "value", "data", "gradient", "pointerEvents", "animate", "select", "activate", "deactivate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-pie-arc", "", 3, "select", "activate", "deactivate", "startAngle", "endAngle", "innerRadius", "outerRadius", "fill", "value", "data", "gradient", "pointerEvents", "animate"]],
  template: function PieGridSeriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "g", 0);
      ɵɵtemplate(1, PieGridSeriesComponent__svg_g_1_Template, 1, 11, "g", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.arcs)("ngForTrackBy", ctx.trackBy);
    }
  },
  dependencies: [PieArcComponent, NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PieGridSeriesComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-pie-grid-series]",
      template: `
    <svg:g class="pie-grid-arcs">
      <svg:g
        ngx-charts-pie-arc
        *ngFor="let arc of arcs; trackBy: trackBy"
        [attr.class]="arc.class"
        [startAngle]="arc.startAngle"
        [endAngle]="arc.endAngle"
        [innerRadius]="innerRadius"
        [outerRadius]="outerRadius"
        [fill]="color(arc)"
        [value]="arc.data.value"
        [data]="arc.data"
        [gradient]="false"
        [pointerEvents]="arc.pointerEvents"
        [animate]="arc.animate"
        (select)="onClick($event)"
        (activate)="activate.emit($event)"
        (deactivate)="deactivate.emit($event)"
      ></svg:g>
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    colors: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    innerRadius: [{
      type: Input
    }],
    outerRadius: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }]
  });
})();
var PieGridComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.tooltipDisabled = false;
    this.label = "Total";
    this.minWidth = 150;
    this.activeEntries = [];
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.margin = [20, 20, 20, 20];
    this.placementTypes = PlacementTypes;
    this.styleTypes = StyleTypes;
  }
  update() {
    super.update();
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin
    });
    this.formatDates();
    this.domain = this.getDomain();
    this.data = gridLayout(this.dims, this.results, this.minWidth, this.designatedTotal);
    this.transform = `translate(${this.margin[3]} , ${this.margin[0]})`;
    this.series = this.getSeries();
    this.setColors();
    this.tooltipText = this.tooltipText || this.defaultTooltipText;
  }
  defaultTooltipText({
    data
  }) {
    const label = trimLabel(formatLabel(data.name));
    const val = data.value.toLocaleString();
    return `
      <span class="tooltip-label">${label}</span>
      <span class="tooltip-val">${val}</span>
    `;
  }
  getDomain() {
    return this.results.map((d) => d.label);
  }
  getSeries() {
    const total = this.designatedTotal ? this.designatedTotal : this.getTotal();
    return this.data.map((d) => {
      const baselineLabelHeight = 20;
      const padding = 10;
      const name = d.data.name;
      const label = formatLabel(name);
      const value2 = d.data.value;
      const radius = min([d.width - padding, d.height - baselineLabelHeight]) / 2 - 5;
      const innerRadius = radius * 0.9;
      let count3 = 0;
      const colors = () => {
        count3 += 1;
        if (count3 === 1) {
          return "rgba(100,100,100,0.3)";
        } else {
          return this.colorScale.getColor(label);
        }
      };
      const xPos = d.x + (d.width - padding) / 2;
      const yPos = d.y + (d.height - baselineLabelHeight) / 2;
      return {
        transform: `translate(${xPos}, ${yPos})`,
        colors,
        innerRadius,
        outerRadius: radius,
        name,
        label: trimLabel(label),
        total: value2,
        value: value2,
        percent: format(".1%")(d.data.percent),
        data: [d, {
          data: {
            other: true,
            value: total - value2,
            name: d.data.name
          }
        }]
      };
    });
  }
  getTotal() {
    return this.results.map((d) => d.value).reduce((sum3, d) => sum3 + d, 0);
  }
  onClick(data) {
    this.select.emit(data);
  }
  setColors() {
    this.colorScale = new ColorHelper(this.scheme, ScaleType.Ordinal, this.domain, this.customColors);
  }
  onActivate(item, fromLegend = false) {
    item = this.results.find((d) => {
      if (fromLegend) {
        return d.label === item.name;
      } else {
        return d.name === item.name;
      }
    });
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value && d.series === item.series;
    });
    if (idx > -1) {
      return;
    }
    this.activeEntries = [item, ...this.activeEntries];
    this.activate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  onDeactivate(item, fromLegend = false) {
    item = this.results.find((d) => {
      if (fromLegend) {
        return d.label === item.name;
      } else {
        return d.name === item.name;
      }
    });
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value && d.series === item.series;
    });
    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];
    this.deactivate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
};
PieGridComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵPieGridComponent_BaseFactory;
  return function PieGridComponent_Factory(t) {
    return (ɵPieGridComponent_BaseFactory || (ɵPieGridComponent_BaseFactory = ɵɵgetInheritedFactory(PieGridComponent)))(t || PieGridComponent);
  };
})();
PieGridComponent.ɵcmp = ɵɵdefineComponent({
  type: PieGridComponent,
  selectors: [["ngx-charts-pie-grid"]],
  contentQueries: function PieGridComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    }
  },
  inputs: {
    designatedTotal: "designatedTotal",
    tooltipDisabled: "tooltipDisabled",
    tooltipText: "tooltipText",
    label: "label",
    minWidth: "minWidth",
    activeEntries: "activeEntries"
  },
  outputs: {
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 3,
  vars: 8,
  consts: [[3, "view", "showLegend", "animations"], [1, "pie-grid", "chart"], ["class", "pie-grid-item", 4, "ngFor", "ngForOf"], [1, "pie-grid-item"], ["ngx-charts-pie-grid-series", "", "ngx-tooltip", "", 3, "select", "activate", "deactivate", "colors", "data", "innerRadius", "outerRadius", "animations", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext"], ["class", "label percent-label", "dy", "-0.5em", "x", "0", "y", "5", "ngx-charts-count-up", "", "text-anchor", "middle", 3, "countTo", "countSuffix", 4, "ngIf"], ["class", "label percent-label", "dy", "-0.5em", "x", "0", "y", "5", "text-anchor", "middle", 4, "ngIf"], ["dy", "0.5em", "x", "0", "y", "5", "text-anchor", "middle", 1, "label"], ["class", "label", "dy", "1.23em", "x", "0", "text-anchor", "middle", "ngx-charts-count-up", "", 3, "countTo", "countPrefix", 4, "ngIf"], ["class", "label", "dy", "1.23em", "x", "0", "text-anchor", "middle", 4, "ngIf"], ["dy", "-0.5em", "x", "0", "y", "5", "ngx-charts-count-up", "", "text-anchor", "middle", 1, "label", "percent-label", 3, "countTo", "countSuffix"], ["dy", "-0.5em", "x", "0", "y", "5", "text-anchor", "middle", 1, "label", "percent-label"], ["dy", "1.23em", "x", "0", "text-anchor", "middle", "ngx-charts-count-up", "", 1, "label", 3, "countTo", "countPrefix"], ["dy", "1.23em", "x", "0", "text-anchor", "middle", 1, "label"]],
  template: function PieGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "g", 1);
      ɵɵtemplate(2, PieGridComponent__svg_g_2_Template, 8, 19, "g", 2);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(5, _c24, ctx.width, ctx.height))("showLegend", false)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.series);
    }
  },
  dependencies: [ChartComponent, PieGridSeriesComponent, CountUpDirective, NgForOf, TooltipDirective, NgIf],
  styles: [_c25, ".pie-grid .arc1{opacity:.4}.pie-grid .percent-label{font-size:16px;font-weight:400}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PieGridComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-pie-grid",
      template: `
    <ngx-charts-chart [view]="[width, height]" [showLegend]="false" [animations]="animations">
      <svg:g [attr.transform]="transform" class="pie-grid chart">
        <svg:g *ngFor="let series of series" class="pie-grid-item" [attr.transform]="series.transform">
          <svg:g
            ngx-charts-pie-grid-series
            [colors]="series.colors"
            [data]="series.data"
            [innerRadius]="series.innerRadius"
            [outerRadius]="series.outerRadius"
            [animations]="animations"
            (select)="onClick($event)"
            ngx-tooltip
            [tooltipDisabled]="tooltipDisabled"
            [tooltipPlacement]="placementTypes.Top"
            [tooltipType]="styleTypes.tooltip"
            [tooltipTitle]="tooltipTemplate ? undefined : tooltipText({ data: series })"
            [tooltipTemplate]="tooltipTemplate"
            [tooltipContext]="series.data[0].data"
            (activate)="onActivate($event)"
            (deactivate)="onDeactivate($event)"
          />
          <svg:text
            *ngIf="animations"
            class="label percent-label"
            dy="-0.5em"
            x="0"
            y="5"
            ngx-charts-count-up
            [countTo]="series.percent"
            [countSuffix]="'%'"
            text-anchor="middle"
          ></svg:text>
          <svg:text *ngIf="!animations" class="label percent-label" dy="-0.5em" x="0" y="5" text-anchor="middle">
            {{ series.percent.toLocaleString() }}
          </svg:text>
          <svg:text class="label" dy="0.5em" x="0" y="5" text-anchor="middle">
            {{ series.label }}
          </svg:text>
          <svg:text
            *ngIf="animations"
            class="label"
            dy="1.23em"
            x="0"
            [attr.y]="series.outerRadius"
            text-anchor="middle"
            ngx-charts-count-up
            [countTo]="series.total"
            [countPrefix]="label + ': '"
          ></svg:text>
          <svg:text
            *ngIf="!animations"
            class="label"
            dy="1.23em"
            x="0"
            [attr.y]="series.outerRadius"
            text-anchor="middle"
          >
            {{ label }}: {{ series.total.toLocaleString() }}
          </svg:text>
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n", ".pie-grid .arc1{opacity:.4}.pie-grid .percent-label{font-size:16px;font-weight:400}\n"]
    }]
  }], null, {
    designatedTotal: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    tooltipText: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    minWidth: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }]
  });
})();
var PieChartModule = class {
};
PieChartModule.ɵfac = function PieChartModule_Factory(t) {
  return new (t || PieChartModule)();
};
PieChartModule.ɵmod = ɵɵdefineNgModule({
  type: PieChartModule,
  declarations: [AdvancedPieChartComponent, PieLabelComponent, PieArcComponent, PieChartComponent, PieGridComponent, PieGridSeriesComponent, PieSeriesComponent],
  imports: [ChartCommonModule],
  exports: [AdvancedPieChartComponent, PieLabelComponent, PieArcComponent, PieChartComponent, PieGridComponent, PieGridSeriesComponent, PieSeriesComponent]
});
PieChartModule.ɵinj = ɵɵdefineInjector({
  imports: [[ChartCommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PieChartModule, [{
    type: NgModule,
    args: [{
      imports: [ChartCommonModule],
      declarations: [AdvancedPieChartComponent, PieLabelComponent, PieArcComponent, PieChartComponent, PieGridComponent, PieGridSeriesComponent, PieSeriesComponent],
      exports: [AdvancedPieChartComponent, PieLabelComponent, PieArcComponent, PieChartComponent, PieGridComponent, PieGridSeriesComponent, PieSeriesComponent]
    }]
  }], null, null);
})();
var PolarChartModule = class {
};
PolarChartModule.ɵfac = function PolarChartModule_Factory(t) {
  return new (t || PolarChartModule)();
};
PolarChartModule.ɵmod = ɵɵdefineNgModule({
  type: PolarChartModule,
  declarations: [PolarChartComponent, PolarSeriesComponent],
  imports: [ChartCommonModule, PieChartModule, LineChartModule],
  exports: [PolarChartComponent, PolarSeriesComponent]
});
PolarChartModule.ɵinj = ɵɵdefineInjector({
  imports: [[ChartCommonModule, PieChartModule, LineChartModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolarChartModule, [{
    type: NgModule,
    args: [{
      imports: [ChartCommonModule, PieChartModule, LineChartModule],
      declarations: [PolarChartComponent, PolarSeriesComponent],
      exports: [PolarChartComponent, PolarSeriesComponent]
    }]
  }], null, null);
})();
function calculateTextWidth(fontFamilyKey, text, defaultWidth = 8) {
  return text.split("").reduce((acc, curr) => {
    const width = fontFamilyKey[curr] || defaultWidth;
    return acc + width;
  }, 0);
}
var VERDANA_FONT_WIDTHS_16_PX = {
  "0": 10,
  "1": 10,
  "2": 10,
  "3": 10,
  "4": 10,
  "5": 10,
  "6": 10,
  "7": 10,
  "8": 10,
  "9": 10,
  A: 11,
  B: 11,
  C: 11,
  D: 12,
  E: 10,
  F: 9,
  G: 12,
  H: 12,
  I: 7,
  J: 7,
  K: 11,
  L: 9,
  M: 13,
  N: 12,
  O: 13,
  P: 10,
  Q: 13,
  R: 11,
  S: 11,
  T: 10,
  U: 12,
  V: 11,
  W: 16,
  X: 11,
  Y: 10,
  Z: 11,
  a: 10,
  b: 10,
  c: 8,
  d: 10,
  e: 10,
  f: 6,
  g: 10,
  h: 10,
  i: 4,
  j: 6,
  k: 9,
  l: 4,
  m: 16,
  n: 10,
  o: 10,
  p: 10,
  q: 10,
  r: 7,
  s: 8,
  t: 6,
  u: 10,
  v: 9,
  w: 13,
  x: 9,
  y: 9,
  z: 8,
  "!": 6,
  "@": 16,
  "#": 13,
  $: 10,
  "%": 17,
  "^": 13,
  "&": 12,
  "*": 10,
  "(": 7,
  ")": 7,
  _: 10,
  "-": 7,
  "+": 13,
  "=": 13,
  ",": 6,
  ".": 6,
  "/": 7,
  "'": 4,
  ":": 7,
  "|": 7,
  "?": 9,
  ";": 7,
  "<": 13,
  ">": 13
};
var CardComponent = class {
  constructor(element, cd, zone, platformId) {
    this.cd = cd;
    this.zone = zone;
    this.platformId = platformId;
    this.animations = true;
    this.select = new EventEmitter();
    this.value = "";
    this.textFontSize = 12;
    this.textTransform = "";
    this.initialized = false;
    this.bandHeight = 10;
    this.textPadding = [10, 20, 5, 20];
    this.labelFontSize = 15;
    this.element = element.nativeElement;
  }
  ngOnChanges(changes) {
    this.update();
  }
  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.scaleTextSSR();
    }
  }
  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      cancelAnimationFrame(this.animationReq);
    }
  }
  update() {
    this.zone.run(() => {
      const hasValue = this.data && typeof this.data.value !== "undefined";
      const valueFormatting = this.valueFormatting || ((card) => card.value.toLocaleString());
      const labelFormatting = this.labelFormatting || ((card) => escapeLabel(trimLabel(card.label, 55)));
      this.transform = `translate(${this.x} , ${this.y})`;
      this.textWidth = Math.max(0, this.width) - this.textPadding[1] - this.textPadding[3];
      this.cardWidth = Math.max(0, this.width);
      this.cardHeight = Math.max(0, this.height);
      this.label = this.label ? this.label : this.data.name;
      const cardData = {
        label: this.label,
        data: this.data,
        value: this.data.value
      };
      this.formattedLabel = labelFormatting(cardData);
      this.transformBand = `translate(0 , ${this.cardHeight - this.bandHeight})`;
      const value2 = hasValue ? valueFormatting(cardData) : "";
      this.value = this.paddedValue(value2);
      this.setPadding();
      this.bandPath = roundedRect(0, 0, this.cardWidth, this.bandHeight, 3, [false, false, true, true]);
      setTimeout(() => {
        if (isPlatformBrowser(this.platformId)) {
          this.scaleText();
        }
        this.value = value2;
        if (hasValue && !this.initialized) {
          setTimeout(() => this.startCount(), 20);
        }
      }, 8);
    });
  }
  paddedValue(value2) {
    if (this.medianSize && this.medianSize > value2.length) {
      value2 += " ".repeat(this.medianSize - value2.length);
    }
    return value2;
  }
  startCount() {
    if (!this.initialized && this.animations) {
      cancelAnimationFrame(this.animationReq);
      const val = this.data.value;
      const decs = decimalChecker(val);
      const valueFormatting = this.valueFormatting || ((card) => card.value.toLocaleString());
      const callback = ({
        value: value2,
        finished
      }) => {
        this.zone.run(() => {
          value2 = finished ? val : value2;
          this.value = valueFormatting({
            label: this.label,
            data: this.data,
            value: value2
          });
          if (!finished) {
            this.value = this.paddedValue(this.value);
          }
          this.cd.markForCheck();
        });
      };
      this.animationReq = count2(0, val, decs, 1, callback);
      this.initialized = true;
    }
  }
  scaleText() {
    this.zone.run(() => {
      const {
        width,
        height
      } = this.textEl.nativeElement.getBoundingClientRect();
      if (width === 0 || height === 0) {
        return;
      }
      const textPadding = this.textPadding[1] = this.textPadding[3] = this.cardWidth / 8;
      const availableWidth = this.cardWidth - 2 * textPadding;
      const availableHeight = this.cardHeight / 3;
      const resizeScale = Math.min(availableWidth / width, availableHeight / height);
      this.textFontSize = Math.floor(this.textFontSize * resizeScale);
      this.labelFontSize = Math.min(this.textFontSize, 15);
      this.setPadding();
      this.cd.markForCheck();
    });
  }
  scaleTextSSR() {
    const width = calculateTextWidth(VERDANA_FONT_WIDTHS_16_PX, this.value, 10);
    const height = 18;
    const textPadding = this.textPadding[1] = this.textPadding[3] = this.cardWidth / 8;
    const availableWidth = this.cardWidth - 2 * textPadding;
    const availableHeight = this.cardHeight / 3;
    const resizeScale = Math.min(availableWidth / width, availableHeight / height);
    this.textFontSize = Math.floor(this.textFontSize * resizeScale);
    this.labelFontSize = Math.min(this.textFontSize, 15);
    this.setPadding();
  }
  setPadding() {
    this.textPadding[1] = this.textPadding[3] = this.cardWidth / 8;
    const padding = this.cardHeight / 2;
    this.textPadding[0] = padding - this.textFontSize - this.labelFontSize / 2;
    this.textPadding[2] = padding - this.labelFontSize;
  }
  onClick() {
    this.select.emit(this.data);
  }
};
CardComponent.ɵfac = function CardComponent_Factory(t) {
  return new (t || CardComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PLATFORM_ID));
};
CardComponent.ɵcmp = ɵɵdefineComponent({
  type: CardComponent,
  selectors: [["g", "ngx-charts-card", ""]],
  viewQuery: function CardComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c45, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textEl = _t.first);
    }
  },
  inputs: {
    color: "color",
    bandColor: "bandColor",
    textColor: "textColor",
    x: "x",
    y: "y",
    width: "width",
    height: "height",
    label: "label",
    data: "data",
    medianSize: "medianSize",
    valueFormatting: "valueFormatting",
    labelFormatting: "labelFormatting",
    animations: "animations"
  },
  outputs: {
    select: "select"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c46,
  decls: 10,
  vars: 25,
  consts: [["textEl", ""], [1, "cell", 3, "click"], ["rx", "3", "ry", "3", 1, "card"], ["class", "card-band", "stroke", "none", 4, "ngIf"], ["x", "5", "alignment-baseline", "hanging", 1, "trimmed-label"], [3, "innerHTML"], ["text-anchor", "start", "alignment-baseline", "hanging", 1, "value-text"], ["stroke", "none", 1, "card-band"]],
  template: function CardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "g", 1);
      ɵɵlistener("click", function CardComponent_Template_g_click_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onClick());
      });
      ɵɵelement(1, "rect", 2);
      ɵɵtemplate(2, CardComponent__svg_path_2_Template, 1, 3, "path", 3);
      ɵɵelementStart(3, "title");
      ɵɵtext(4);
      ɵɵelementEnd();
      ɵɵelementStart(5, "foreignObject", 4);
      ɵɵnamespaceHTML();
      ɵɵelement(6, "p", 5);
      ɵɵelementEnd();
      ɵɵnamespaceSVG();
      ɵɵelementStart(7, "text", 6, 0);
      ɵɵtext(9);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵstyleProp("fill", ctx.color);
      ɵɵattribute("width", ctx.cardWidth)("height", ctx.cardHeight);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.bandColor && ctx.bandColor !== ctx.color);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.label);
      ɵɵadvance();
      ɵɵattribute("x", ctx.textPadding[3])("y", ctx.cardHeight - ctx.textPadding[2])("width", ctx.textWidth)("height", ctx.labelFontSize + ctx.textPadding[2]);
      ɵɵadvance();
      ɵɵstyleProp("color", ctx.textColor)("font-size", ctx.labelFontSize, "px")("line-height", ctx.labelFontSize, "px");
      ɵɵproperty("innerHTML", ctx.formattedLabel, ɵɵsanitizeHtml);
      ɵɵadvance();
      ɵɵstyleProp("fill", ctx.textColor)("font-size", ctx.textFontSize, "pt");
      ɵɵattribute("x", ctx.textPadding[3])("y", ctx.textPadding[0]);
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.value, " ");
    }
  },
  dependencies: [NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-card]",
      template: `
    <svg:g [attr.transform]="transform" class="cell" (click)="onClick()">
      <svg:rect class="card" [style.fill]="color" [attr.width]="cardWidth" [attr.height]="cardHeight" rx="3" ry="3" />
      <svg:path
        *ngIf="bandColor && bandColor !== color"
        class="card-band"
        [attr.fill]="bandColor"
        [attr.transform]="transformBand"
        stroke="none"
        [attr.d]="bandPath"
      />
      <title>{{ label }}</title>
      <svg:foreignObject
        class="trimmed-label"
        x="5"
        [attr.x]="textPadding[3]"
        [attr.y]="cardHeight - textPadding[2]"
        [attr.width]="textWidth"
        [attr.height]="labelFontSize + textPadding[2]"
        alignment-baseline="hanging"
      >
        <xhtml:p
          [style.color]="textColor"
          [style.fontSize.px]="labelFontSize"
          [style.lineHeight.px]="labelFontSize"
          [innerHTML]="formattedLabel"
        >
        </xhtml:p>
      </svg:foreignObject>
      <svg:text
        #textEl
        class="value-text"
        [attr.x]="textPadding[3]"
        [attr.y]="textPadding[0]"
        [style.fill]="textColor"
        text-anchor="start"
        alignment-baseline="hanging"
        [style.font-size.pt]="textFontSize"
      >
        {{ value }}
      </svg:text>
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }, {
      type: NgZone
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    color: [{
      type: Input
    }],
    bandColor: [{
      type: Input
    }],
    textColor: [{
      type: Input
    }],
    x: [{
      type: Input
    }],
    y: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    medianSize: [{
      type: Input
    }],
    valueFormatting: [{
      type: Input
    }],
    labelFormatting: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    textEl: [{
      type: ViewChild,
      args: ["textEl", {
        static: false
      }]
    }]
  });
})();
function hexToRgb(value2) {
  return rgb(value2);
}
function invertColor(value2) {
  const color = rgb(value2);
  const {
    r,
    g,
    b,
    opacity
  } = color;
  if (opacity === 0) {
    return color.toString();
  }
  const yiq = (r * 299 + g * 587 + b * 114) / 1e3;
  const depth = yiq >= 128 ? -0.8 : 0.8;
  return shadeRGBColor(color, depth);
}
function shadeRGBColor({
  r,
  g,
  b
}, percent) {
  const t = percent < 0 ? 0 : 255;
  const p = percent < 0 ? percent * -1 : percent;
  r = Math.round((t - r) * p) + r;
  g = Math.round((t - g) * p) + g;
  b = Math.round((t - b) * p) + b;
  return `rgb(${r}, ${g}, ${b})`;
}
var CardSeriesComponent = class {
  constructor() {
    this.innerPadding = 15;
    this.emptyColor = "rgba(0, 0, 0, 0)";
    this.animations = true;
    this.select = new EventEmitter();
  }
  ngOnChanges(changes) {
    this.update();
  }
  update() {
    if (this.data.length > 2) {
      const valueFormatting = this.valueFormatting || ((card) => card.value.toLocaleString());
      const sortedLengths = this.data.map((d) => {
        const hasValue = d && d.data && typeof d.data.value !== "undefined" && d.data.value !== null;
        return hasValue ? valueFormatting({
          data: d.data,
          label: d ? d.data.name : "",
          value: d && d.data ? d.data.value : ""
        }).length : 0;
      }).sort((a2, b) => b - a2);
      const idx = Math.ceil(this.data.length / 2);
      this.medianSize = sortedLengths[idx];
    }
    const cards = this.getCards();
    this.cards = cards.filter((d) => d.data.value !== null);
    this.emptySlots = cards.filter((d) => d.data.value === null);
  }
  getCards() {
    const yPadding = typeof this.innerPadding === "number" ? this.innerPadding : this.innerPadding[0] + this.innerPadding[2];
    const xPadding = typeof this.innerPadding === "number" ? this.innerPadding : this.innerPadding[1] + this.innerPadding[3];
    return this.data.map((d, index2) => {
      let label = d.data.name;
      if (label && label.constructor.name === "Date") {
        label = label.toLocaleDateString();
      } else {
        label = label ? label.toLocaleString() : label;
      }
      const value2 = d.data.value;
      const valueColor = label ? this.colors.getColor(label) : this.emptyColor;
      const color = this.cardColor || valueColor || "#000";
      return {
        x: d.x,
        y: d.y,
        width: d.width - xPadding,
        height: d.height - yPadding,
        color,
        bandColor: this.bandColor || valueColor,
        textColor: this.textColor || invertColor(color),
        label,
        data: d.data,
        tooltipText: `${label}: ${value2}`
      };
    });
  }
  trackBy(index2, card) {
    return card.label;
  }
  onClick(data) {
    this.select.emit(data);
  }
};
CardSeriesComponent.ɵfac = function CardSeriesComponent_Factory(t) {
  return new (t || CardSeriesComponent)();
};
CardSeriesComponent.ɵcmp = ɵɵdefineComponent({
  type: CardSeriesComponent,
  selectors: [["g", "ngx-charts-card-series", ""]],
  inputs: {
    data: "data",
    dims: "dims",
    colors: "colors",
    innerPadding: "innerPadding",
    cardColor: "cardColor",
    bandColor: "bandColor",
    emptyColor: "emptyColor",
    textColor: "textColor",
    valueFormatting: "valueFormatting",
    labelFormatting: "labelFormatting",
    animations: "animations"
  },
  outputs: {
    select: "select"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c47,
  decls: 2,
  vars: 4,
  consts: [["class", "card-empty", "rx", "3", "ry", "3", 3, "fill", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-card", "", 3, "x", "y", "width", "height", "color", "bandColor", "textColor", "data", "label", "medianSize", "valueFormatting", "labelFormatting", "animations", "select", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["rx", "3", "ry", "3", 1, "card-empty"], ["ngx-charts-card", "", 3, "select", "x", "y", "width", "height", "color", "bandColor", "textColor", "data", "label", "medianSize", "valueFormatting", "labelFormatting", "animations"]],
  template: function CardSeriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CardSeriesComponent__svg_rect_0_Template, 1, 6, "rect", 0)(1, CardSeriesComponent__svg_g_1_Template, 1, 13, "g", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.emptySlots)("ngForTrackBy", ctx.trackBy);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.cards)("ngForTrackBy", ctx.trackBy);
    }
  },
  dependencies: [CardComponent, NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardSeriesComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-card-series]",
      template: `
    <svg:rect
      *ngFor="let c of emptySlots; trackBy: trackBy"
      class="card-empty"
      [attr.x]="c.x"
      [attr.y]="c.y"
      [style.fill]="emptyColor"
      [attr.width]="c.width"
      [attr.height]="c.height"
      rx="3"
      ry="3"
    />
    <svg:g
      ngx-charts-card
      *ngFor="let c of cards; trackBy: trackBy"
      [x]="c.x"
      [y]="c.y"
      [width]="c.width"
      [height]="c.height"
      [color]="c.color"
      [bandColor]="c.bandColor"
      [textColor]="c.textColor"
      [data]="c.data"
      [label]="c.label"
      [medianSize]="medianSize"
      [valueFormatting]="valueFormatting"
      [labelFormatting]="labelFormatting"
      [animations]="animations"
      (select)="onClick($event)"
    />
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    data: [{
      type: Input
    }],
    dims: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    innerPadding: [{
      type: Input
    }],
    cardColor: [{
      type: Input
    }],
    bandColor: [{
      type: Input
    }],
    emptyColor: [{
      type: Input
    }],
    textColor: [{
      type: Input
    }],
    valueFormatting: [{
      type: Input
    }],
    labelFormatting: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    select: [{
      type: Output
    }]
  });
})();
var NumberCardComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.emptyColor = "rgba(0, 0, 0, 0)";
    this.innerPadding = 15;
    this.margin = [10, 10, 10, 10];
  }
  get clickable() {
    return !!this.select.observers.length;
  }
  update() {
    super.update();
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin
    });
    this.formatDates();
    this.domain = this.getDomain();
    this.setColors();
    this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
    const size = gridSize(this.dims, this.results.length, 150);
    const N = size[0] * size[1];
    const data = this.results.slice();
    while (data.length < N) {
      data.push({
        value: null
      });
    }
    this.data = gridLayout(this.dims, data, 150, this.designatedTotal);
  }
  getDomain() {
    return this.results.map((d) => d.label);
  }
  onClick(data) {
    this.select.emit(data);
  }
  setColors() {
    this.colors = new ColorHelper(this.scheme, ScaleType.Ordinal, this.domain, this.customColors);
  }
};
NumberCardComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵNumberCardComponent_BaseFactory;
  return function NumberCardComponent_Factory(t) {
    return (ɵNumberCardComponent_BaseFactory || (ɵNumberCardComponent_BaseFactory = ɵɵgetInheritedFactory(NumberCardComponent)))(t || NumberCardComponent);
  };
})();
NumberCardComponent.ɵcmp = ɵɵdefineComponent({
  type: NumberCardComponent,
  selectors: [["ngx-charts-number-card"]],
  inputs: {
    cardColor: "cardColor",
    bandColor: "bandColor",
    emptyColor: "emptyColor",
    innerPadding: "innerPadding",
    textColor: "textColor",
    valueFormatting: "valueFormatting",
    labelFormatting: "labelFormatting",
    designatedTotal: "designatedTotal"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 3,
  vars: 20,
  consts: [[3, "view", "showLegend", "animations"], [1, "number-card", "chart"], ["ngx-charts-card-series", "", 3, "select", "colors", "cardColor", "bandColor", "textColor", "emptyColor", "data", "dims", "innerPadding", "valueFormatting", "labelFormatting", "animations"]],
  template: function NumberCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "g", 1)(2, "g", 2);
      ɵɵlistener("select", function NumberCardComponent_Template_g_select_2_listener($event) {
        return ctx.onClick($event);
      });
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(17, _c24, ctx.width, ctx.height))("showLegend", false)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵclassProp("clickable", ctx.clickable);
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("colors", ctx.colors)("cardColor", ctx.cardColor)("bandColor", ctx.bandColor)("textColor", ctx.textColor)("emptyColor", ctx.emptyColor)("data", ctx.data)("dims", ctx.dims)("innerPadding", ctx.innerPadding)("valueFormatting", ctx.valueFormatting)("labelFormatting", ctx.labelFormatting)("animations", ctx.animations);
    }
  },
  dependencies: [ChartComponent, CardSeriesComponent],
  styles: [_c25, "ngx-charts-number-card .cell .trimmed-label{font-size:12px;pointer-events:none;overflow:hidden;text-align:left;line-height:1em}ngx-charts-number-card .cell .trimmed-label p{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:100%;padding:0;margin:0}ngx-charts-number-card .cell .value-text{pointer-events:none}ngx-charts-number-card .number-card.clickable .cell .card,ngx-charts-number-card .number-card.clickable .cell .card-band{cursor:pointer}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberCardComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-number-card",
      template: `
    <ngx-charts-chart [view]="[width, height]" [showLegend]="false" [animations]="animations">
      <svg:g [attr.transform]="transform" class="number-card chart" [class.clickable]="clickable">
        <svg:g
          ngx-charts-card-series
          [colors]="colors"
          [cardColor]="cardColor"
          [bandColor]="bandColor"
          [textColor]="textColor"
          [emptyColor]="emptyColor"
          [data]="data"
          [dims]="dims"
          [innerPadding]="innerPadding"
          [valueFormatting]="valueFormatting"
          [labelFormatting]="labelFormatting"
          [animations]="animations"
          (select)="onClick($event)"
        />
      </svg:g>
    </ngx-charts-chart>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n", "ngx-charts-number-card .cell .trimmed-label{font-size:12px;pointer-events:none;overflow:hidden;text-align:left;line-height:1em}ngx-charts-number-card .cell .trimmed-label p{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:100%;padding:0;margin:0}ngx-charts-number-card .cell .value-text{pointer-events:none}ngx-charts-number-card .number-card.clickable .cell .card,ngx-charts-number-card .number-card.clickable .cell .card-band{cursor:pointer}\n"]
    }]
  }], null, {
    cardColor: [{
      type: Input
    }],
    bandColor: [{
      type: Input
    }],
    emptyColor: [{
      type: Input
    }],
    innerPadding: [{
      type: Input
    }],
    textColor: [{
      type: Input
    }],
    valueFormatting: [{
      type: Input
    }],
    labelFormatting: [{
      type: Input
    }],
    designatedTotal: [{
      type: Input
    }]
  });
})();
var NumberCardModule = class {
};
NumberCardModule.ɵfac = function NumberCardModule_Factory(t) {
  return new (t || NumberCardModule)();
};
NumberCardModule.ɵmod = ɵɵdefineNgModule({
  type: NumberCardModule,
  declarations: [CardComponent, CardSeriesComponent, NumberCardComponent],
  imports: [ChartCommonModule],
  exports: [CardComponent, CardSeriesComponent, NumberCardComponent]
});
NumberCardModule.ɵinj = ɵɵdefineInjector({
  imports: [[ChartCommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberCardModule, [{
    type: NgModule,
    args: [{
      imports: [ChartCommonModule],
      declarations: [CardComponent, CardSeriesComponent, NumberCardComponent],
      exports: [CardComponent, CardSeriesComponent, NumberCardComponent]
    }]
  }], null, null);
})();
var TreeMapCellComponent = class {
  constructor(element) {
    this.gradient = false;
    this.animations = true;
    this.select = new EventEmitter();
    this.initialized = false;
    this.orientation = BarOrientation;
    this.element = element.nativeElement;
  }
  ngOnChanges() {
    this.update();
    this.valueFormatting = this.valueFormatting || ((value2) => value2.toLocaleString());
    const labelFormatting = this.labelFormatting || ((cell) => escapeLabel(trimLabel(cell.label, 55)));
    const cellData = {
      data: this.data,
      label: this.label,
      value: this.value
    };
    this.formattedValue = this.valueFormatting(cellData.value);
    this.formattedLabel = labelFormatting(cellData);
    this.gradientId = "grad" + id().toString();
    this.gradientUrl = `url(#${this.gradientId})`;
    this.gradientStops = this.getGradientStops();
  }
  update() {
    if (this.initialized) {
      this.animateToCurrentForm();
    } else {
      if (this.animations) {
        this.loadAnimation();
      }
      this.initialized = true;
    }
  }
  loadAnimation() {
    const node = select_default(this.element).select(".cell");
    node.attr("opacity", 0).attr("x", this.x).attr("y", this.y);
    this.animateToCurrentForm();
  }
  getTextColor() {
    return invertColor(this.fill);
  }
  animateToCurrentForm() {
    const node = select_default(this.element).select(".cell");
    if (this.animations) {
      node.transition().duration(750).attr("opacity", 1).attr("x", this.x).attr("y", this.y).attr("width", this.width).attr("height", this.height);
    } else {
      node.attr("opacity", 1).attr("x", this.x).attr("y", this.y).attr("width", this.width).attr("height", this.height);
    }
  }
  onClick() {
    this.select.emit(this.data);
  }
  getGradientStops() {
    return [{
      offset: 0,
      color: this.fill,
      opacity: 0.3
    }, {
      offset: 100,
      color: this.fill,
      opacity: 1
    }];
  }
};
TreeMapCellComponent.ɵfac = function TreeMapCellComponent_Factory(t) {
  return new (t || TreeMapCellComponent)(ɵɵdirectiveInject(ElementRef));
};
TreeMapCellComponent.ɵcmp = ɵɵdefineComponent({
  type: TreeMapCellComponent,
  selectors: [["g", "ngx-charts-tree-map-cell", ""]],
  inputs: {
    data: "data",
    fill: "fill",
    x: "x",
    y: "y",
    width: "width",
    height: "height",
    label: "label",
    value: "value",
    valueFormatting: "valueFormatting",
    labelFormatting: "labelFormatting",
    gradient: "gradient",
    animations: "animations"
  },
  outputs: {
    select: "select"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c48,
  decls: 4,
  vars: 7,
  consts: [[4, "ngIf"], [1, "cell", 3, "click"], ["class", "treemap-label", 3, "pointer-events", 4, "ngIf"], ["ngx-charts-svg-linear-gradient", "", 3, "orientation", "name", "stops"], [1, "treemap-label"], [1, "treemap-label", 3, "innerHTML"], ["class", "treemap-val", "ngx-charts-count-up", "", 3, "countTo", "valueFormatting", 4, "ngIf"], ["class", "treemap-val", 4, "ngIf"], ["ngx-charts-count-up", "", 1, "treemap-val", 3, "countTo", "valueFormatting"], [1, "treemap-val"]],
  template: function TreeMapCellComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "g");
      ɵɵtemplate(1, TreeMapCellComponent__svg_defs_1_Template, 2, 3, "defs", 0);
      ɵɵelementStart(2, "rect", 1);
      ɵɵlistener("click", function TreeMapCellComponent_Template_rect_click_2_listener() {
        return ctx.onClick();
      });
      ɵɵelementEnd();
      ɵɵtemplate(3, TreeMapCellComponent__svg_foreignObject_3_Template, 6, 15, "foreignObject", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.gradient);
      ɵɵadvance();
      ɵɵattribute("fill", ctx.gradient ? ctx.gradientUrl : ctx.fill)("width", ctx.width)("height", ctx.height)("x", ctx.x)("y", ctx.y);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.width >= 70 && ctx.height >= 35);
    }
  },
  dependencies: [SvgLinearGradientComponent, CountUpDirective, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeMapCellComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-tree-map-cell]",
      template: `
    <svg:g>
      <defs *ngIf="gradient">
        <svg:g
          ngx-charts-svg-linear-gradient
          [orientation]="orientation.Vertical"
          [name]="gradientId"
          [stops]="gradientStops"
        />
      </defs>
      <svg:rect
        [attr.fill]="gradient ? gradientUrl : fill"
        [attr.width]="width"
        [attr.height]="height"
        [attr.x]="x"
        [attr.y]="y"
        class="cell"
        (click)="onClick()"
      />
      <svg:foreignObject
        *ngIf="width >= 70 && height >= 35"
        [attr.x]="x"
        [attr.y]="y"
        [attr.width]="width"
        [attr.height]="height"
        class="treemap-label"
        [style.pointer-events]="'none'"
      >
        <xhtml:p [style.color]="getTextColor()" [style.height]="height + 'px'" [style.width]="width + 'px'">
          <xhtml:span class="treemap-label" [innerHTML]="formattedLabel"> </xhtml:span>
          <xhtml:br />
          <xhtml:span
            *ngIf="animations"
            class="treemap-val"
            ngx-charts-count-up
            [countTo]="value"
            [valueFormatting]="valueFormatting"
          >
          </xhtml:span>
          <xhtml:span *ngIf="!animations" class="treemap-val">
            {{ formattedValue }}
          </xhtml:span>
        </xhtml:p>
      </svg:foreignObject>
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    data: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    x: [{
      type: Input
    }],
    y: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    valueFormatting: [{
      type: Input
    }],
    labelFormatting: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    select: [{
      type: Output
    }]
  });
})();
var TreeMapCellSeriesComponent = class {
  constructor() {
    this.gradient = false;
    this.tooltipDisabled = false;
    this.animations = true;
    this.select = new EventEmitter();
    this.styleTypes = StyleTypes;
    this.placementTypes = PlacementTypes;
  }
  ngOnChanges(changes) {
    this.cells = this.getCells();
  }
  getCells() {
    return this.data.children.filter((d) => {
      return d.depth === 1;
    }).map((d, index2) => {
      const label = d.id;
      return {
        data: d.data,
        x: d.x0,
        y: d.y0,
        width: d.x1 - d.x0,
        height: d.y1 - d.y0,
        fill: this.colors.getColor(label),
        label,
        value: d.value
      };
    });
  }
  getTooltipText({
    label,
    value: value2
  }) {
    return `
      <span class="tooltip-label">${escapeLabel(label)}</span>
      <span class="tooltip-val">${value2.toLocaleString()}</span>
    `;
  }
  onClick(data) {
    this.select.emit(data);
  }
  trackBy(index2, item) {
    return item.label;
  }
};
TreeMapCellSeriesComponent.ɵfac = function TreeMapCellSeriesComponent_Factory(t) {
  return new (t || TreeMapCellSeriesComponent)();
};
TreeMapCellSeriesComponent.ɵcmp = ɵɵdefineComponent({
  type: TreeMapCellSeriesComponent,
  selectors: [["g", "ngx-charts-tree-map-cell-series", ""]],
  inputs: {
    data: "data",
    dims: "dims",
    colors: "colors",
    valueFormatting: "valueFormatting",
    labelFormatting: "labelFormatting",
    gradient: "gradient",
    tooltipDisabled: "tooltipDisabled",
    tooltipTemplate: "tooltipTemplate",
    animations: "animations"
  },
  outputs: {
    select: "select"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c49,
  decls: 1,
  vars: 2,
  consts: [["ngx-charts-tree-map-cell", "", "ngx-tooltip", "", 3, "data", "x", "y", "width", "height", "fill", "label", "value", "valueFormatting", "labelFormatting", "gradient", "animations", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-tree-map-cell", "", "ngx-tooltip", "", 3, "select", "data", "x", "y", "width", "height", "fill", "label", "value", "valueFormatting", "labelFormatting", "gradient", "animations", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext"]],
  template: function TreeMapCellSeriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TreeMapCellSeriesComponent__svg_g_0_Template, 1, 18, "g", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.cells)("ngForTrackBy", ctx.trackBy);
    }
  },
  dependencies: [TreeMapCellComponent, NgForOf, TooltipDirective],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeMapCellSeriesComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-tree-map-cell-series]",
      template: `
    <svg:g
      ngx-charts-tree-map-cell
      *ngFor="let c of cells; trackBy: trackBy"
      [data]="c.data"
      [x]="c.x"
      [y]="c.y"
      [width]="c.width"
      [height]="c.height"
      [fill]="c.fill"
      [label]="c.label"
      [value]="c.value"
      [valueFormatting]="valueFormatting"
      [labelFormatting]="labelFormatting"
      [gradient]="gradient"
      [animations]="animations"
      (select)="onClick($event)"
      ngx-tooltip
      [tooltipDisabled]="tooltipDisabled"
      [tooltipPlacement]="placementTypes.Top"
      [tooltipType]="styleTypes.tooltip"
      [tooltipTitle]="tooltipTemplate ? undefined : getTooltipText(c)"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipContext]="c.data"
    ></svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    data: [{
      type: Input
    }],
    dims: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    valueFormatting: [{
      type: Input
    }],
    labelFormatting: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    tooltipTemplate: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    select: [{
      type: Output
    }]
  });
})();
var TreeMapComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.tooltipDisabled = false;
    this.gradient = false;
    this.select = new EventEmitter();
    this.margin = [10, 10, 10, 10];
  }
  update() {
    super.update();
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin
    });
    this.domain = this.getDomain();
    this.treemap = treemap_default().size([this.dims.width, this.dims.height]);
    const rootNode = {
      name: "root",
      value: 0,
      isRoot: true
    };
    const root2 = stratify_default().id((d) => {
      let label = d.name;
      if (label.constructor.name === "Date") {
        label = label.toLocaleDateString();
      } else {
        label = label.toLocaleString();
      }
      return label;
    }).parentId((d) => d.isRoot ? null : "root")([rootNode, ...this.results]).sum((d) => d.value);
    this.data = this.treemap(root2);
    this.setColors();
    this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
  }
  getDomain() {
    return this.results.map((d) => d.name);
  }
  onClick(data) {
    this.select.emit(data);
  }
  setColors() {
    this.colors = new ColorHelper(this.scheme, ScaleType.Ordinal, this.domain, this.customColors);
  }
};
TreeMapComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵTreeMapComponent_BaseFactory;
  return function TreeMapComponent_Factory(t) {
    return (ɵTreeMapComponent_BaseFactory || (ɵTreeMapComponent_BaseFactory = ɵɵgetInheritedFactory(TreeMapComponent)))(t || TreeMapComponent);
  };
})();
TreeMapComponent.ɵcmp = ɵɵdefineComponent({
  type: TreeMapComponent,
  selectors: [["ngx-charts-tree-map"]],
  contentQueries: function TreeMapComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    }
  },
  inputs: {
    results: "results",
    tooltipDisabled: "tooltipDisabled",
    valueFormatting: "valueFormatting",
    labelFormatting: "labelFormatting",
    gradient: "gradient"
  },
  outputs: {
    select: "select"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 3,
  vars: 16,
  consts: [[3, "view", "showLegend", "animations"], [1, "tree-map", "chart"], ["ngx-charts-tree-map-cell-series", "", 3, "select", "colors", "data", "dims", "tooltipDisabled", "tooltipTemplate", "valueFormatting", "labelFormatting", "gradient", "animations"]],
  template: function TreeMapComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "g", 1)(2, "g", 2);
      ɵɵlistener("select", function TreeMapComponent_Template_g_select_2_listener($event) {
        return ctx.onClick($event);
      });
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(13, _c24, ctx.width, ctx.height))("showLegend", false)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("colors", ctx.colors)("data", ctx.data)("dims", ctx.dims)("tooltipDisabled", ctx.tooltipDisabled)("tooltipTemplate", ctx.tooltipTemplate)("valueFormatting", ctx.valueFormatting)("labelFormatting", ctx.labelFormatting)("gradient", ctx.gradient)("animations", ctx.animations);
    }
  },
  dependencies: [ChartComponent, TreeMapCellSeriesComponent],
  styles: [".tree-map .treemap-val{font-size:1.3em;padding-top:5px;display:inline-block}.tree-map .treemap-label p{display:table-cell;text-align:center;line-height:1.2em;vertical-align:middle}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeMapComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-tree-map",
      template: `
    <ngx-charts-chart [view]="[width, height]" [showLegend]="false" [animations]="animations">
      <svg:g [attr.transform]="transform" class="tree-map chart">
        <svg:g
          ngx-charts-tree-map-cell-series
          [colors]="colors"
          [data]="data"
          [dims]="dims"
          [tooltipDisabled]="tooltipDisabled"
          [tooltipTemplate]="tooltipTemplate"
          [valueFormatting]="valueFormatting"
          [labelFormatting]="labelFormatting"
          [gradient]="gradient"
          [animations]="animations"
          (select)="onClick($event)"
        />
      </svg:g>
    </ngx-charts-chart>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".tree-map .treemap-val{font-size:1.3em;padding-top:5px;display:inline-block}.tree-map .treemap-label p{display:table-cell;text-align:center;line-height:1.2em;vertical-align:middle}\n"]
    }]
  }], null, {
    results: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    valueFormatting: [{
      type: Input
    }],
    labelFormatting: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }]
  });
})();
var TreeMapModule = class {
};
TreeMapModule.ɵfac = function TreeMapModule_Factory(t) {
  return new (t || TreeMapModule)();
};
TreeMapModule.ɵmod = ɵɵdefineNgModule({
  type: TreeMapModule,
  declarations: [TreeMapCellComponent, TreeMapCellSeriesComponent, TreeMapComponent],
  imports: [ChartCommonModule],
  exports: [TreeMapCellComponent, TreeMapCellSeriesComponent, TreeMapComponent]
});
TreeMapModule.ɵinj = ɵɵdefineInjector({
  imports: [[ChartCommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeMapModule, [{
    type: NgModule,
    args: [{
      imports: [ChartCommonModule],
      declarations: [TreeMapCellComponent, TreeMapCellSeriesComponent, TreeMapComponent],
      exports: [TreeMapCellComponent, TreeMapCellSeriesComponent, TreeMapComponent]
    }]
  }], null, null);
})();
var ElementType;
(function(ElementType2) {
  ElementType2["Value"] = "value";
  ElementType2["Units"] = "units";
})(ElementType || (ElementType = {}));
var LinearGaugeComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.min = 0;
    this.max = 100;
    this.value = 0;
    this.margin = [10, 20, 10, 20];
    this.valueResizeScale = 1;
    this.unitsResizeScale = 1;
    this.valueTextTransform = "";
    this.valueTranslate = "";
    this.unitsTextTransform = "";
    this.unitsTranslate = "";
    this.barOrientation = BarOrientation;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    setTimeout(() => {
      this.scaleText(ElementType.Value);
      this.scaleText(ElementType.Units);
    });
  }
  update() {
    super.update();
    this.hasPreviousValue = this.previousValue !== void 0;
    this.max = Math.max(this.max, this.value);
    this.min = Math.min(this.min, this.value);
    if (this.hasPreviousValue) {
      this.max = Math.max(this.max, this.previousValue);
      this.min = Math.min(this.min, this.previousValue);
    }
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin
    });
    this.valueDomain = this.getValueDomain();
    this.valueScale = this.getValueScale();
    this.displayValue = this.getDisplayValue();
    this.setColors();
    const xOffset = this.margin[3] + this.dims.width / 2;
    const yOffset = this.margin[0] + this.dims.height / 2;
    this.transform = `translate(${xOffset}, ${yOffset})`;
    this.transformLine = `translate(${this.margin[3] + this.valueScale(this.previousValue)}, ${yOffset})`;
    this.valueTranslate = `translate(0, -15)`;
    this.unitsTranslate = `translate(0, 15)`;
    if (isPlatformServer(this.platformId)) {
      this.scaleTextSSR("value");
      this.scaleTextSSR("units");
    } else {
      setTimeout(() => this.scaleText(ElementType.Value), 50);
      setTimeout(() => this.scaleText(ElementType.Units), 50);
    }
  }
  getValueDomain() {
    return [this.min, this.max];
  }
  getValueScale() {
    return linear().range([0, this.dims.width]).domain(this.valueDomain);
  }
  getDisplayValue() {
    if (this.valueFormatting) {
      return this.valueFormatting(this.value);
    }
    return this.value.toLocaleString();
  }
  scaleText(element, repeat = true) {
    let el;
    let resizeScale;
    if (element === ElementType.Value) {
      el = this.valueTextEl;
      resizeScale = this.valueResizeScale;
    } else {
      el = this.unitsTextEl;
      resizeScale = this.unitsResizeScale;
    }
    const {
      width,
      height
    } = el.nativeElement.getBoundingClientRect();
    if (width === 0 || height === 0) return;
    const oldScale = resizeScale;
    const availableWidth = this.dims.width;
    const availableHeight = Math.max(this.dims.height / 2 - 15, 0);
    const resizeScaleWidth = Math.floor(availableWidth / (width / resizeScale) * 100) / 100;
    const resizeScaleHeight = Math.floor(availableHeight / (height / resizeScale) * 100) / 100;
    resizeScale = Math.min(resizeScaleHeight, resizeScaleWidth);
    if (resizeScale !== oldScale) {
      if (element === ElementType.Value) {
        this.valueResizeScale = resizeScale;
        this.valueTextTransform = `scale(${resizeScale}, ${resizeScale})`;
      } else {
        this.unitsResizeScale = resizeScale;
        this.unitsTextTransform = `scale(${resizeScale}, ${resizeScale})`;
      }
      this.cd.markForCheck();
      if (repeat && isPlatformBrowser(this.platformId)) {
        setTimeout(() => {
          this.scaleText(element, false);
        }, 50);
      }
    }
  }
  scaleTextSSR(element) {
    let resizeScale = 1;
    const value2 = element === "value" ? this.displayValue : this.units;
    const width = calculateTextWidth(VERDANA_FONT_WIDTHS_16_PX, value2, 10);
    const height = 25;
    const availableWidth = this.dims.width;
    const availableHeight = Math.max(this.dims.height / 2 - 15, 0);
    const resizeScaleWidth = Math.floor(availableWidth / (width / resizeScale) * 100) / 100;
    const resizeScaleHeight = Math.floor(availableHeight / (height / resizeScale) * 100) / 100;
    resizeScale = Math.min(resizeScaleHeight, resizeScaleWidth);
    if (element === "value") {
      this.valueResizeScale = resizeScale;
      this.valueTextTransform = `scale(${resizeScale}, ${resizeScale})`;
    } else {
      this.unitsResizeScale = resizeScale;
      this.unitsTextTransform = `scale(${resizeScale}, ${resizeScale})`;
    }
    this.cd.markForCheck();
  }
  onClick() {
    this.select.emit({
      name: "Value",
      value: this.value
    });
  }
  setColors() {
    this.colors = new ColorHelper(this.scheme, ScaleType.Ordinal, [this.value], this.customColors);
  }
};
LinearGaugeComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵLinearGaugeComponent_BaseFactory;
  return function LinearGaugeComponent_Factory(t) {
    return (ɵLinearGaugeComponent_BaseFactory || (ɵLinearGaugeComponent_BaseFactory = ɵɵgetInheritedFactory(LinearGaugeComponent)))(t || LinearGaugeComponent);
  };
})();
LinearGaugeComponent.ɵcmp = ɵɵdefineComponent({
  type: LinearGaugeComponent,
  selectors: [["ngx-charts-linear-gauge"]],
  viewQuery: function LinearGaugeComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c50, 5);
      ɵɵviewQuery(_c51, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.valueTextEl = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.unitsTextEl = _t.first);
    }
  },
  inputs: {
    min: "min",
    max: "max",
    value: "value",
    units: "units",
    previousValue: "previousValue",
    valueFormatting: "valueFormatting"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 15,
  vars: 38,
  consts: [["valueTextEl", ""], ["unitsTextEl", ""], [3, "click", "view", "showLegend", "animations"], [1, "linear-gauge", "chart"], ["ngx-charts-bar", "", 1, "background-bar", 3, "width", "height", "x", "y", "data", "orientation", "roundEdges", "animations"], ["ngx-charts-bar", "", 3, "width", "height", "x", "y", "fill", "data", "orientation", "roundEdges", "animations"], ["x1", "0", "y1", "5", "x2", "0", "y2", "15", 4, "ngIf"], ["x1", "0", "y1", "-5", "x2", "0", "y2", "-15", 4, "ngIf"], ["alignment-baseline", "after-edge", 1, "value"], ["alignment-baseline", "before-edge", 1, "units"], ["x1", "0", "y1", "5", "x2", "0", "y2", "15"], ["x1", "0", "y1", "-5", "x2", "0", "y2", "-15"]],
  template: function LinearGaugeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "ngx-charts-chart", 2);
      ɵɵlistener("click", function LinearGaugeComponent_Template_ngx_charts_chart_click_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onClick());
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "g", 3);
      ɵɵelement(2, "g", 4)(3, "g", 5);
      ɵɵtemplate(4, LinearGaugeComponent__svg_line_4_Template, 1, 2, "line", 6)(5, LinearGaugeComponent__svg_line_5_Template, 1, 2, "line", 7);
      ɵɵelementStart(6, "g")(7, "g")(8, "text", 8, 0);
      ɵɵtext(10);
      ɵɵelementEnd()();
      ɵɵelementStart(11, "g")(12, "text", 9, 1);
      ɵɵtext(14);
      ɵɵelementEnd()()()()();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(33, _c24, ctx.width, ctx.height))("showLegend", false)("animations", ctx.animations);
      ɵɵadvance(2);
      ɵɵproperty("width", ctx.dims.width)("height", 3)("x", ctx.margin[3])("y", ctx.dims.height / 2 + ctx.margin[0] - 2)("data", ɵɵpureFunction0(36, _c52))("orientation", ctx.barOrientation.Horizontal)("roundEdges", true)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵproperty("width", ctx.valueScale(ctx.value))("height", 3)("x", ctx.margin[3])("y", ctx.dims.height / 2 + ctx.margin[0] - 2)("fill", ctx.colors.getColor(ctx.units))("data", ɵɵpureFunction0(37, _c52))("orientation", ctx.barOrientation.Horizontal)("roundEdges", true)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.hasPreviousValue);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.hasPreviousValue);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.valueTranslate);
      ɵɵadvance();
      ɵɵstyleProp("text-anchor", "middle");
      ɵɵattribute("transform", ctx.valueTextTransform);
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.displayValue, " ");
      ɵɵadvance();
      ɵɵattribute("transform", ctx.unitsTranslate);
      ɵɵadvance();
      ɵɵstyleProp("text-anchor", "middle");
      ɵɵattribute("transform", ctx.unitsTextTransform);
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.units, " ");
    }
  },
  dependencies: [ChartComponent, BarComponent, NgIf],
  styles: [_c25, ".linear-gauge{cursor:pointer}.linear-gauge .background-bar path{fill:#0000000d}.linear-gauge .units{fill:#666}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LinearGaugeComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-linear-gauge",
      template: `
    <ngx-charts-chart [view]="[width, height]" [showLegend]="false" [animations]="animations" (click)="onClick()">
      <svg:g class="linear-gauge chart">
        <svg:g
          ngx-charts-bar
          class="background-bar"
          [width]="dims.width"
          [height]="3"
          [x]="margin[3]"
          [y]="dims.height / 2 + margin[0] - 2"
          [data]="{}"
          [orientation]="barOrientation.Horizontal"
          [roundEdges]="true"
          [animations]="animations"
        ></svg:g>
        <svg:g
          ngx-charts-bar
          [width]="valueScale(value)"
          [height]="3"
          [x]="margin[3]"
          [y]="dims.height / 2 + margin[0] - 2"
          [fill]="colors.getColor(units)"
          [data]="{}"
          [orientation]="barOrientation.Horizontal"
          [roundEdges]="true"
          [animations]="animations"
        ></svg:g>

        <svg:line
          *ngIf="hasPreviousValue"
          [attr.transform]="transformLine"
          x1="0"
          y1="5"
          x2="0"
          y2="15"
          [attr.stroke]="colors.getColor(units)"
        />

        <svg:line
          *ngIf="hasPreviousValue"
          [attr.transform]="transformLine"
          x1="0"
          y1="-5"
          x2="0"
          y2="-15"
          [attr.stroke]="colors.getColor(units)"
        />

        <svg:g [attr.transform]="transform">
          <svg:g [attr.transform]="valueTranslate">
            <svg:text
              #valueTextEl
              class="value"
              [style.textAnchor]="'middle'"
              [attr.transform]="valueTextTransform"
              alignment-baseline="after-edge"
            >
              {{ displayValue }}
            </svg:text>
          </svg:g>

          <svg:g [attr.transform]="unitsTranslate">
            <svg:text
              #unitsTextEl
              class="units"
              [style.textAnchor]="'middle'"
              [attr.transform]="unitsTextTransform"
              alignment-baseline="before-edge"
            >
              {{ units }}
            </svg:text>
          </svg:g>
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n", ".linear-gauge{cursor:pointer}.linear-gauge .background-bar path{fill:#0000000d}.linear-gauge .units{fill:#666}\n"]
    }]
  }], null, {
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    units: [{
      type: Input
    }],
    previousValue: [{
      type: Input
    }],
    valueFormatting: [{
      type: Input
    }],
    valueTextEl: [{
      type: ViewChild,
      args: ["valueTextEl"]
    }],
    unitsTextEl: [{
      type: ViewChild,
      args: ["unitsTextEl"]
    }]
  });
})();
var GaugeArcComponent = class {
  constructor() {
    this.isActive = false;
    this.tooltipDisabled = false;
    this.animations = true;
    this.select = new EventEmitter();
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.placementTypes = PlacementTypes;
    this.styleTypes = StyleTypes;
  }
  tooltipText(arc) {
    const label = formatLabel(arc.data.name);
    let val;
    if (this.valueFormatting) {
      val = this.valueFormatting(arc.data.value);
    } else {
      val = formatLabel(arc.data.value);
    }
    return `
      <span class="tooltip-label">${escapeLabel(label)}</span>
      <span class="tooltip-val">${val}</span>
    `;
  }
};
GaugeArcComponent.ɵfac = function GaugeArcComponent_Factory(t) {
  return new (t || GaugeArcComponent)();
};
GaugeArcComponent.ɵcmp = ɵɵdefineComponent({
  type: GaugeArcComponent,
  selectors: [["g", "ngx-charts-gauge-arc", ""]],
  inputs: {
    backgroundArc: "backgroundArc",
    valueArc: "valueArc",
    cornerRadius: "cornerRadius",
    colors: "colors",
    isActive: "isActive",
    tooltipDisabled: "tooltipDisabled",
    valueFormatting: "valueFormatting",
    tooltipTemplate: "tooltipTemplate",
    animations: "animations"
  },
  outputs: {
    select: "select",
    activate: "activate",
    deactivate: "deactivate"
  },
  attrs: _c53,
  decls: 2,
  vars: 23,
  consts: [["ngx-charts-pie-arc", "", 1, "background-arc", 3, "startAngle", "endAngle", "innerRadius", "outerRadius", "cornerRadius", "data", "animate", "pointerEvents"], ["ngx-charts-pie-arc", "", "ngx-tooltip", "", 3, "select", "activate", "deactivate", "startAngle", "endAngle", "innerRadius", "outerRadius", "cornerRadius", "fill", "data", "animate", "isActive", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext"]],
  template: function GaugeArcComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelement(0, "g", 0);
      ɵɵelementStart(1, "g", 1);
      ɵɵlistener("select", function GaugeArcComponent_Template_g_select_1_listener($event) {
        return ctx.select.emit($event);
      })("activate", function GaugeArcComponent_Template_g_activate_1_listener($event) {
        return ctx.activate.emit($event);
      })("deactivate", function GaugeArcComponent_Template_g_deactivate_1_listener($event) {
        return ctx.deactivate.emit($event);
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("startAngle", 0)("endAngle", ctx.backgroundArc.endAngle)("innerRadius", ctx.backgroundArc.innerRadius)("outerRadius", ctx.backgroundArc.outerRadius)("cornerRadius", ctx.cornerRadius)("data", ctx.backgroundArc.data)("animate", false)("pointerEvents", false);
      ɵɵadvance();
      ɵɵproperty("startAngle", 0)("endAngle", ctx.valueArc.endAngle)("innerRadius", ctx.valueArc.innerRadius)("outerRadius", ctx.valueArc.outerRadius)("cornerRadius", ctx.cornerRadius)("fill", ctx.colors.getColor(ctx.valueArc.data.name))("data", ctx.valueArc.data)("animate", ctx.animations)("isActive", ctx.isActive)("tooltipDisabled", ctx.tooltipDisabled)("tooltipPlacement", ctx.placementTypes.Top)("tooltipType", ctx.styleTypes.tooltip)("tooltipTitle", ctx.tooltipTemplate ? void 0 : ctx.tooltipText(ctx.valueArc))("tooltipTemplate", ctx.tooltipTemplate)("tooltipContext", ctx.valueArc.data);
    }
  },
  dependencies: [PieArcComponent, TooltipDirective],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GaugeArcComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-gauge-arc]",
      template: `
    <svg:g
      ngx-charts-pie-arc
      class="background-arc"
      [startAngle]="0"
      [endAngle]="backgroundArc.endAngle"
      [innerRadius]="backgroundArc.innerRadius"
      [outerRadius]="backgroundArc.outerRadius"
      [cornerRadius]="cornerRadius"
      [data]="backgroundArc.data"
      [animate]="false"
      [pointerEvents]="false"
    ></svg:g>
    <svg:g
      ngx-charts-pie-arc
      [startAngle]="0"
      [endAngle]="valueArc.endAngle"
      [innerRadius]="valueArc.innerRadius"
      [outerRadius]="valueArc.outerRadius"
      [cornerRadius]="cornerRadius"
      [fill]="colors.getColor(valueArc.data.name)"
      [data]="valueArc.data"
      [animate]="animations"
      [isActive]="isActive"
      (select)="select.emit($event)"
      (activate)="activate.emit($event)"
      (deactivate)="deactivate.emit($event)"
      ngx-tooltip
      [tooltipDisabled]="tooltipDisabled"
      [tooltipPlacement]="placementTypes.Top"
      [tooltipType]="styleTypes.tooltip"
      [tooltipTitle]="tooltipTemplate ? undefined : tooltipText(valueArc)"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipContext]="valueArc.data"
    ></svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    backgroundArc: [{
      type: Input
    }],
    valueArc: [{
      type: Input
    }],
    cornerRadius: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    isActive: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    valueFormatting: [{
      type: Input
    }],
    tooltipTemplate: [{
      type: Input
    }],
    animations: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }]
  });
})();
var GaugeAxisComponent = class {
  constructor() {
    this.rotate = "";
  }
  ngOnChanges(changes) {
    this.update();
  }
  update() {
    this.rotationAngle = -90 + this.startAngle;
    this.rotate = `rotate(${this.rotationAngle})`;
    this.ticks = this.getTicks();
  }
  getTicks() {
    const bigTickSegment = this.angleSpan / this.bigSegments;
    const smallTickSegment = bigTickSegment / this.smallSegments;
    const tickLength = 20;
    const ticks = {
      big: [],
      small: []
    };
    const startDistance = this.radius + 10;
    const textDist = startDistance + tickLength + 10;
    for (let i = 0; i <= this.bigSegments; i++) {
      const angleDeg = i * bigTickSegment;
      const angle = angleDeg * Math.PI / 180;
      const textAnchor = this.getTextAnchor(angleDeg);
      let skip = false;
      if (i === 0 && this.angleSpan === 360) {
        skip = true;
      }
      if (!skip) {
        let text = Number.parseFloat(this.valueScale.invert(angleDeg).toString()).toLocaleString();
        if (this.tickFormatting) {
          text = this.tickFormatting(text);
        }
        ticks.big.push({
          line: this.getTickPath(startDistance, tickLength, angle),
          textAnchor,
          text,
          textTransform: `
            translate(${textDist * Math.cos(angle)}, ${textDist * Math.sin(angle)}) rotate(${-this.rotationAngle})
          `
        });
      }
      if (i === this.bigSegments) {
        continue;
      }
      for (let j = 1; j <= this.smallSegments; j++) {
        const smallAngleDeg = angleDeg + j * smallTickSegment;
        const smallAngle = smallAngleDeg * Math.PI / 180;
        ticks.small.push({
          line: this.getTickPath(startDistance, tickLength / 2, smallAngle)
        });
      }
    }
    return ticks;
  }
  getTextAnchor(angle) {
    angle = (this.startAngle + angle) % 360;
    let textAnchor = TextAnchor.Middle;
    if (angle > 45 && angle <= 135) {
      textAnchor = TextAnchor.Start;
    } else if (angle > 225 && angle <= 315) {
      textAnchor = TextAnchor.End;
    }
    return textAnchor;
  }
  getTickPath(startDistance, tickLength, angle) {
    const y1 = startDistance * Math.sin(angle);
    const y2 = (startDistance + tickLength) * Math.sin(angle);
    const x1 = startDistance * Math.cos(angle);
    const x2 = (startDistance + tickLength) * Math.cos(angle);
    const points = [{
      x: x1,
      y: y1
    }, {
      x: x2,
      y: y2
    }];
    const lineGenerator = line_default().x((d) => d.x).y((d) => d.y);
    return lineGenerator(points);
  }
};
GaugeAxisComponent.ɵfac = function GaugeAxisComponent_Factory(t) {
  return new (t || GaugeAxisComponent)();
};
GaugeAxisComponent.ɵcmp = ɵɵdefineComponent({
  type: GaugeAxisComponent,
  selectors: [["g", "ngx-charts-gauge-axis", ""]],
  inputs: {
    bigSegments: "bigSegments",
    smallSegments: "smallSegments",
    min: "min",
    max: "max",
    angleSpan: "angleSpan",
    startAngle: "startAngle",
    radius: "radius",
    valueScale: "valueScale",
    tickFormatting: "tickFormatting"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c54,
  decls: 4,
  vars: 4,
  consts: [["class", "gauge-tick gauge-tick-large", 4, "ngFor", "ngForOf"], ["class", "gauge-tick gauge-tick-small", 4, "ngFor", "ngForOf"], [1, "gauge-tick", "gauge-tick-large"], ["alignment-baseline", "central"], [1, "gauge-tick", "gauge-tick-small"]],
  template: function GaugeAxisComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "g");
      ɵɵtemplate(1, GaugeAxisComponent__svg_g_1_Template, 2, 1, "g", 0)(2, GaugeAxisComponent__svg_g_2_Template, 3, 4, "g", 0)(3, GaugeAxisComponent__svg_g_3_Template, 2, 1, "g", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵattribute("transform", ctx.rotate);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.ticks.big);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.ticks.big);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.ticks.small);
    }
  },
  dependencies: [NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GaugeAxisComponent, [{
    type: Component,
    args: [{
      selector: "g[ngx-charts-gauge-axis]",
      template: `
    <svg:g [attr.transform]="rotate">
      <svg:g *ngFor="let tick of ticks.big" class="gauge-tick gauge-tick-large">
        <svg:path [attr.d]="tick.line" />
      </svg:g>
      <svg:g *ngFor="let tick of ticks.big" class="gauge-tick gauge-tick-large">
        <svg:text
          [style.textAnchor]="tick.textAnchor"
          [attr.transform]="tick.textTransform"
          alignment-baseline="central"
        >
          {{ tick.text }}
        </svg:text>
      </svg:g>
      <svg:g *ngFor="let tick of ticks.small" class="gauge-tick gauge-tick-small">
        <svg:path [attr.d]="tick.line" />
      </svg:g>
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    bigSegments: [{
      type: Input
    }],
    smallSegments: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    angleSpan: [{
      type: Input
    }],
    startAngle: [{
      type: Input
    }],
    radius: [{
      type: Input
    }],
    valueScale: [{
      type: Input
    }],
    tickFormatting: [{
      type: Input
    }]
  });
})();
var GaugeComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.legend = false;
    this.legendTitle = "Legend";
    this.legendPosition = LegendPosition.Right;
    this.min = 0;
    this.max = 100;
    this.bigSegments = 10;
    this.smallSegments = 5;
    this.showAxis = true;
    this.startAngle = -120;
    this.angleSpan = 240;
    this.activeEntries = [];
    this.tooltipDisabled = false;
    this.showText = true;
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.resizeScale = 1;
    this.rotation = "";
    this.textTransform = "scale(1, 1)";
    this.cornerRadius = 10;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    setTimeout(() => this.scaleText());
  }
  update() {
    super.update();
    if (!this.showAxis) {
      if (!this.margin) {
        this.margin = [10, 20, 10, 20];
      }
    } else {
      if (!this.margin) {
        this.margin = [60, 100, 60, 100];
      }
    }
    if (this.startAngle < 0) {
      this.startAngle = this.startAngle % 360 + 360;
    }
    this.angleSpan = Math.min(this.angleSpan, 360);
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
      showLegend: this.legend,
      legendPosition: this.legendPosition
    });
    this.domain = this.getDomain();
    this.valueDomain = this.getValueDomain();
    this.valueScale = this.getValueScale();
    this.displayValue = this.getDisplayValue();
    this.outerRadius = Math.min(this.dims.width, this.dims.height) / 2;
    this.arcs = this.getArcs();
    this.setColors();
    this.legendOptions = this.getLegendOptions();
    const xOffset = this.margin[3] + this.dims.width / 2;
    const yOffset = this.margin[0] + this.dims.height / 2;
    this.transform = `translate(${xOffset}, ${yOffset})`;
    this.rotation = `rotate(${this.startAngle})`;
    setTimeout(() => this.scaleText(), 50);
  }
  getArcs() {
    const arcs = [];
    const availableRadius = this.outerRadius * 0.7;
    const radiusPerArc = Math.min(availableRadius / this.results.length, 10);
    const arcWidth = radiusPerArc * 0.7;
    this.textRadius = this.outerRadius - this.results.length * radiusPerArc;
    this.cornerRadius = Math.floor(arcWidth / 2);
    let i = 0;
    for (const d of this.results) {
      const outerRadius = this.outerRadius - i * radiusPerArc;
      const innerRadius = outerRadius - arcWidth;
      const backgroundArc = {
        endAngle: this.angleSpan * Math.PI / 180,
        innerRadius,
        outerRadius,
        data: {
          value: this.max,
          name: d.name
        }
      };
      const valueArc = {
        endAngle: Math.min(this.valueScale(d.value), this.angleSpan) * Math.PI / 180,
        innerRadius,
        outerRadius,
        data: {
          value: d.value,
          name: d.name
        }
      };
      const arc = {
        backgroundArc,
        valueArc
      };
      arcs.push(arc);
      i++;
    }
    return arcs;
  }
  getDomain() {
    return this.results.map((d) => d.name);
  }
  getValueDomain() {
    const values = this.results.map((d) => d.value);
    const dataMin = Math.min(...values);
    const dataMax = Math.max(...values);
    if (this.min !== void 0) {
      this.min = Math.min(this.min, dataMin);
    } else {
      this.min = dataMin;
    }
    if (this.max !== void 0) {
      this.max = Math.max(this.max, dataMax);
    } else {
      this.max = dataMax;
    }
    return [this.min, this.max];
  }
  getValueScale() {
    return linear().range([0, this.angleSpan]).nice().domain(this.valueDomain);
  }
  getDisplayValue() {
    const value2 = this.results.map((d) => d.value).reduce((a2, b) => a2 + b, 0);
    if (this.textValue && 0 !== this.textValue.length) {
      return this.textValue.toLocaleString();
    }
    if (this.valueFormatting) {
      return this.valueFormatting(value2);
    }
    return value2.toLocaleString();
  }
  scaleText(repeat = true) {
    if (!this.showText) {
      return;
    }
    const {
      width
    } = this.textEl.nativeElement.getBoundingClientRect();
    const oldScale = this.resizeScale;
    if (width === 0) {
      this.resizeScale = 1;
    } else {
      const availableSpace = this.textRadius;
      this.resizeScale = Math.floor(availableSpace / (width / this.resizeScale) * 100) / 100;
    }
    if (this.resizeScale !== oldScale) {
      this.textTransform = `scale(${this.resizeScale}, ${this.resizeScale})`;
      this.cd.markForCheck();
      if (repeat) {
        setTimeout(() => this.scaleText(false), 50);
      }
    }
  }
  onClick(data) {
    this.select.emit(data);
  }
  getLegendOptions() {
    return {
      scaleType: ScaleType.Ordinal,
      colors: this.colors,
      domain: this.domain,
      title: this.legendTitle,
      position: this.legendPosition
    };
  }
  setColors() {
    this.colors = new ColorHelper(this.scheme, ScaleType.Ordinal, this.domain, this.customColors);
  }
  onActivate(item) {
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value;
    });
    if (idx > -1) {
      return;
    }
    this.activeEntries = [item, ...this.activeEntries];
    this.activate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  onDeactivate(item) {
    const idx = this.activeEntries.findIndex((d) => {
      return d.name === item.name && d.value === item.value;
    });
    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];
    this.deactivate.emit({
      value: item,
      entries: this.activeEntries
    });
  }
  isActive(entry) {
    if (!this.activeEntries) return false;
    const item = this.activeEntries.find((d) => {
      return entry.name === d.name && entry.series === d.series;
    });
    return item !== void 0;
  }
  trackBy(index2, item) {
    return item.valueArc.data.name;
  }
};
GaugeComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵGaugeComponent_BaseFactory;
  return function GaugeComponent_Factory(t) {
    return (ɵGaugeComponent_BaseFactory || (ɵGaugeComponent_BaseFactory = ɵɵgetInheritedFactory(GaugeComponent)))(t || GaugeComponent);
  };
})();
GaugeComponent.ɵcmp = ɵɵdefineComponent({
  type: GaugeComponent,
  selectors: [["ngx-charts-gauge"]],
  contentQueries: function GaugeComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    }
  },
  viewQuery: function GaugeComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c45, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textEl = _t.first);
    }
  },
  inputs: {
    legend: "legend",
    legendTitle: "legendTitle",
    legendPosition: "legendPosition",
    min: "min",
    max: "max",
    textValue: "textValue",
    units: "units",
    bigSegments: "bigSegments",
    smallSegments: "smallSegments",
    results: "results",
    showAxis: "showAxis",
    startAngle: "startAngle",
    angleSpan: "angleSpan",
    activeEntries: "activeEntries",
    axisTickFormatting: "axisTickFormatting",
    tooltipDisabled: "tooltipDisabled",
    valueFormatting: "valueFormatting",
    showText: "showText",
    margin: "margin"
  },
  outputs: {
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 5,
  vars: 13,
  consts: [["textEl", ""], [3, "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate", "view", "showLegend", "legendOptions", "activeEntries", "animations"], [1, "gauge", "chart"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-gauge-axis", "", 3, "bigSegments", "smallSegments", "min", "max", "radius", "angleSpan", "valueScale", "startAngle", "tickFormatting", 4, "ngIf"], ["alignment-baseline", "central", 3, "textAnchor", 4, "ngIf"], ["ngx-charts-gauge-arc", "", 3, "select", "activate", "deactivate", "backgroundArc", "valueArc", "cornerRadius", "colors", "isActive", "tooltipDisabled", "tooltipTemplate", "valueFormatting", "animations"], ["ngx-charts-gauge-axis", "", 3, "bigSegments", "smallSegments", "min", "max", "radius", "angleSpan", "valueScale", "startAngle", "tickFormatting"], ["alignment-baseline", "central"], ["x", "0", "dy", "0"], ["x", "0", "dy", "1.2em"]],
  template: function GaugeComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 1);
      ɵɵlistener("legendLabelClick", function GaugeComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) {
        return ctx.onClick($event);
      })("legendLabelActivate", function GaugeComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) {
        return ctx.onActivate($event);
      })("legendLabelDeactivate", function GaugeComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) {
        return ctx.onDeactivate($event);
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "g", 2);
      ɵɵtemplate(2, GaugeComponent__svg_g_2_Template, 2, 10, "g", 3)(3, GaugeComponent__svg_g_3_Template, 1, 9, "g", 4)(4, GaugeComponent__svg_text_4_Template, 6, 5, "text", 5);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(10, _c24, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.arcs)("ngForTrackBy", ctx.trackBy);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showAxis);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showText);
    }
  },
  dependencies: [ChartComponent, GaugeArcComponent, GaugeAxisComponent, NgForOf, NgIf],
  styles: [_c25, ".gauge .background-arc path{fill:#0000000d}.gauge .gauge-tick path{stroke:#666}.gauge .gauge-tick text{font-size:12px;fill:#666;font-weight:700}.gauge .gauge-tick-large path{stroke-width:2px}.gauge .gauge-tick-small path{stroke-width:1px}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GaugeComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-gauge",
      template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
    >
      <svg:g [attr.transform]="transform" class="gauge chart">
        <svg:g *ngFor="let arc of arcs; trackBy: trackBy" [attr.transform]="rotation">
          <svg:g
            ngx-charts-gauge-arc
            [backgroundArc]="arc.backgroundArc"
            [valueArc]="arc.valueArc"
            [cornerRadius]="cornerRadius"
            [colors]="colors"
            [isActive]="isActive(arc.valueArc.data)"
            [tooltipDisabled]="tooltipDisabled"
            [tooltipTemplate]="tooltipTemplate"
            [valueFormatting]="valueFormatting"
            [animations]="animations"
            (select)="onClick($event)"
            (activate)="onActivate($event)"
            (deactivate)="onDeactivate($event)"
          ></svg:g>
        </svg:g>

        <svg:g
          ngx-charts-gauge-axis
          *ngIf="showAxis"
          [bigSegments]="bigSegments"
          [smallSegments]="smallSegments"
          [min]="min"
          [max]="max"
          [radius]="outerRadius"
          [angleSpan]="angleSpan"
          [valueScale]="valueScale"
          [startAngle]="startAngle"
          [tickFormatting]="axisTickFormatting"
        ></svg:g>

        <svg:text
          #textEl
          *ngIf="showText"
          [style.textAnchor]="'middle'"
          [attr.transform]="textTransform"
          alignment-baseline="central"
        >
          <tspan x="0" dy="0">{{ displayValue }}</tspan>
          <tspan x="0" dy="1.2em">{{ units }}</tspan>
        </svg:text>
      </svg:g>
    </ngx-charts-chart>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n", ".gauge .background-arc path{fill:#0000000d}.gauge .gauge-tick path{stroke:#666}.gauge .gauge-tick text{font-size:12px;fill:#666;font-weight:700}.gauge .gauge-tick-large path{stroke-width:2px}.gauge .gauge-tick-small path{stroke-width:1px}\n"]
    }]
  }], null, {
    legend: [{
      type: Input
    }],
    legendTitle: [{
      type: Input
    }],
    legendPosition: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    textValue: [{
      type: Input
    }],
    units: [{
      type: Input
    }],
    bigSegments: [{
      type: Input
    }],
    smallSegments: [{
      type: Input
    }],
    results: [{
      type: Input
    }],
    showAxis: [{
      type: Input
    }],
    startAngle: [{
      type: Input
    }],
    angleSpan: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    axisTickFormatting: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    valueFormatting: [{
      type: Input
    }],
    showText: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }],
    textEl: [{
      type: ViewChild,
      args: ["textEl"]
    }]
  });
})();
var GaugeModule = class {
};
GaugeModule.ɵfac = function GaugeModule_Factory(t) {
  return new (t || GaugeModule)();
};
GaugeModule.ɵmod = ɵɵdefineNgModule({
  type: GaugeModule,
  declarations: [LinearGaugeComponent, GaugeComponent, GaugeArcComponent, GaugeAxisComponent],
  imports: [ChartCommonModule, PieChartModule, BarChartModule],
  exports: [LinearGaugeComponent, GaugeComponent, GaugeArcComponent, GaugeAxisComponent]
});
GaugeModule.ɵinj = ɵɵdefineInjector({
  imports: [[ChartCommonModule, PieChartModule, BarChartModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GaugeModule, [{
    type: NgModule,
    args: [{
      imports: [ChartCommonModule, PieChartModule, BarChartModule],
      declarations: [LinearGaugeComponent, GaugeComponent, GaugeArcComponent, GaugeAxisComponent],
      exports: [LinearGaugeComponent, GaugeComponent, GaugeArcComponent, GaugeAxisComponent]
    }]
  }], null, null);
})();
function ngxChartsPolyfills() {
  if (typeof SVGElement !== "undefined" && typeof SVGElement.prototype.contains === "undefined") {
    SVGElement.prototype.contains = HTMLDivElement.prototype.contains;
  }
}
var SankeyComponent = class extends BaseChartComponent {
  constructor() {
    super(...arguments);
    this.showLabels = true;
    this.tooltipDisabled = false;
    this.activeEntries = [];
    this.activate = new EventEmitter();
    this.deactivate = new EventEmitter();
    this.margin = [10, 10, 10, 10];
    this.scaleType = ScaleType.Ordinal;
    this.styleTypes = StyleTypes;
  }
  update() {
    super.update();
    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
      legendType: this.scaleType
    });
    const linkDefs = this.results;
    const nodeDefs = Array.from(new Set(linkDefs.flatMap((l) => [l.source, l.target])), (name) => ({
      name,
      value: linkDefs.filter((l) => l.source === name).reduce((acc, l) => acc + l.value, 0)
    }));
    const sankeyGenerator = Sankey().nodeId((d) => d.name).nodeAlign(left).nodeWidth(15).nodePadding(10).extent([[1, 5], [this.dims.width - 1, this.dims.height - 5]]);
    const data = sankeyGenerator({
      nodes: nodeDefs.map((d) => Object.assign({}, d)),
      links: linkDefs.map((d) => Object.assign({}, d))
    });
    this.valueDomain = this.getValueDomain(data.nodes);
    this.setColors();
    this.nodeRects = data.nodes.map((node) => {
      const rect = {
        x: node.x0,
        y: node.y0,
        height: node.y1 - node.y0,
        width: node.x1 - node.x0,
        fill: this.colors.getColor(node.name),
        tooltip: this.getNodeTooltipText(node),
        rx: 5,
        data: {
          name: node.name,
          value: node.value
        },
        transform: "",
        label: this.labelFormatting ? this.labelFormatting(node.name) : node.name,
        labelAnchor: TextAnchor.Start
      };
      rect.labelAnchor = this.getTextAnchor(node);
      rect.transform = `translate(${rect.x},${rect.y})`;
      return rect;
    });
    this.linkPaths = data.links.map((link2) => {
      const gradientId = "mask" + id().toString();
      const linkPath = {
        path: sankeyLinkHorizontal_default()(link2),
        strokeWidth: Math.max(1, link2.width),
        tooltip: this.getLinkTooltipText(link2.source, link2.target, link2.value),
        id: gradientId,
        gradientFill: `url(#${gradientId})`,
        source: link2.source,
        target: link2.target,
        startColor: this.colors.getColor(link2.source.name),
        endColor: this.colors.getColor(link2.target.name),
        data: {
          source: link2.source.name,
          target: link2.target.name,
          value: link2.value
        }
      };
      return linkPath;
    });
    this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
  }
  getNodeTooltipText(node) {
    return `
      <span class="tooltip-label">${escapeLabel(node.name)}</span>
      <span class="tooltip-val">${node.value.toLocaleString()}</span>
    `;
  }
  getLinkTooltipText(sourceNode, targetNode, value2) {
    return `
      <span class="tooltip-label">${escapeLabel(sourceNode.name)} • ${escapeLabel(targetNode.name)}</span>
      <span class="tooltip-val">${value2.toLocaleString()} (${(value2 / sourceNode.value).toLocaleString(void 0, {
      style: "percent",
      maximumFractionDigits: 2
    })})</span>
    `;
  }
  getTextAnchor(node) {
    if (node.layer === 0) {
      return TextAnchor.Start;
    } else {
      return TextAnchor.End;
    }
  }
  onClick(data) {
    this.select.emit(data);
  }
  setColors() {
    this.colors = new ColorHelper(this.scheme, this.scaleType, this.valueDomain);
  }
  getValueDomain(nodes) {
    return nodes.map((n) => n.name);
  }
};
SankeyComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵSankeyComponent_BaseFactory;
  return function SankeyComponent_Factory(t) {
    return (ɵSankeyComponent_BaseFactory || (ɵSankeyComponent_BaseFactory = ɵɵgetInheritedFactory(SankeyComponent)))(t || SankeyComponent);
  };
})();
SankeyComponent.ɵcmp = ɵɵdefineComponent({
  type: SankeyComponent,
  selectors: [["ngx-charts-sankey"]],
  contentQueries: function SankeyComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    }
  },
  inputs: {
    showLabels: "showLabels",
    gradient: "gradient",
    tooltipDisabled: "tooltipDisabled",
    activeEntries: "activeEntries",
    labelFormatting: "labelFormatting"
  },
  outputs: {
    activate: "activate",
    deactivate: "deactivate"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 5,
  vars: 9,
  consts: [[3, "view", "animations"], [1, "sankey", "chart"], ["class", "link", "ngx-tooltip", "", 3, "tooltipDisabled", "tooltipType", "tooltipPlacement", "tooltipTitle", "tooltipTemplate", "tooltipContext", 4, "ngFor", "ngForOf"], ["class", "node", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["ngx-tooltip", "", 1, "link", 3, "tooltipDisabled", "tooltipType", "tooltipPlacement", "tooltipTitle", "tooltipTemplate", "tooltipContext"], ["gradientUnits", "userSpaceOnUse"], ["offset", "0%"], ["offset", "100%"], ["stroke-opacity", "0.5", "fill", "none", 3, "click", "mouseenter"], [1, "node"], ["ngx-tooltip", "", 3, "click", "mouseenter", "tooltipDisabled", "tooltipType", "tooltipPlacement", "tooltipTitle", "tooltipTemplate", "tooltipContext"], ["class", "label", "dy", "0.35em", 4, "ngIf"], ["dy", "0.35em", 1, "label"]],
  template: function SankeyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ngx-charts-chart", 0);
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "g", 1);
      ɵɵtemplate(2, SankeyComponent__svg_g_2_Template, 6, 14, "g", 2)(3, SankeyComponent__svg_g_3_Template, 2, 12, "g", 3)(4, SankeyComponent__svg_g_4_Template, 2, 2, "g", 4);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("view", ɵɵpureFunction2(6, _c24, ctx.width, ctx.height))("animations", ctx.animations);
      ɵɵadvance();
      ɵɵattribute("transform", ctx.transform);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.linkPaths);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.nodeRects);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.nodeRects);
    }
  },
  dependencies: [ChartComponent, NgForOf, TooltipDirective, NgIf],
  styles: [_c25],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SankeyComponent, [{
    type: Component,
    args: [{
      selector: "ngx-charts-sankey",
      template: `
    <ngx-charts-chart [view]="[width, height]" [animations]="animations">
      <svg:g [attr.transform]="transform" class="sankey chart">
        <svg:g
          *ngFor="let link of linkPaths"
          class="link"
          ngx-tooltip
          [tooltipDisabled]="tooltipDisabled"
          [tooltipType]="styleTypes.tooltip"
          [tooltipPlacement]="'top'"
          [tooltipTitle]="tooltipTemplate ? undefined : link.tooltip"
          [tooltipTemplate]="tooltipTemplate"
          [tooltipContext]="link.data"
        >
          <svg:defs>
            <svg:linearGradient
              [attr.id]="link.id"
              gradientUnits="userSpaceOnUse"
              [attr.x1]="link.source.x1"
              [attr.x2]="link.target.x0"
            >
              <svg:stop offset="0%" [attr.stop-color]="link.startColor"></svg:stop>
              <svg:stop offset="100%" [attr.stop-color]="link.endColor"></svg:stop>
            </svg:linearGradient>
          </svg:defs>
          <svg:path
            [attr.d]="link.path"
            [attr.stroke]="link.gradientFill"
            [attr.stroke-width]="link.strokeWidth"
            stroke-opacity="0.5"
            fill="none"
            (click)="select.emit(link.data)"
            (mouseenter)="activate.emit(link.data)"
          ></svg:path>
        </svg:g>

        <svg:g *ngFor="let rect of nodeRects" [attr.transform]="rect.transform" class="node">
          <svg:rect
            [attr.x]="0"
            [attr.y]="0"
            [attr.width]="rect.width"
            [attr.height]="rect.height"
            [attr.fill]="rect.fill"
            ngx-tooltip
            [tooltipDisabled]="tooltipDisabled"
            [tooltipType]="styleTypes.tooltip"
            [tooltipPlacement]="'top'"
            [tooltipTitle]="tooltipTemplate ? undefined : rect.tooltip"
            [tooltipTemplate]="tooltipTemplate"
            [tooltipContext]="rect.data"
            (click)="select.emit(rect.data)"
            (mouseenter)="activate.emit(rect.data)"
          ></svg:rect>
        </svg:g>

        <svg:g *ngFor="let rect of nodeRects" [attr.transform]="rect.transform">
          <svg:text
            *ngIf="showLabels && rect.height > 15"
            class="label"
            [attr.x]="rect.width + 5"
            [attr.y]="rect.height / 2"
            [attr.text-anchor]="rect.labelAnchor"
            dy="0.35em"
            [attr.dx]="rect.labelAnchor === 'end' ? -25 : 0"
          >
            {{ rect.label }}
          </svg:text>
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: [".ngx-charts-outer{animation:chartFadeIn linear .6s}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .node,.ngx-charts .link,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .node.active,.ngx-charts .node:hover,.ngx-charts .link.active,.ngx-charts .link:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .node:focus,.ngx-charts .link:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .node.hidden,.ngx-charts .link.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"]
    }]
  }], null, {
    showLabels: [{
      type: Input
    }],
    gradient: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    activeEntries: [{
      type: Input
    }],
    labelFormatting: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    deactivate: [{
      type: Output
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate"]
    }]
  });
})();
var SankeyModule = class {
};
SankeyModule.ɵfac = function SankeyModule_Factory(t) {
  return new (t || SankeyModule)();
};
SankeyModule.ɵmod = ɵɵdefineNgModule({
  type: SankeyModule,
  declarations: [SankeyComponent],
  imports: [ChartCommonModule],
  exports: [SankeyComponent]
});
SankeyModule.ɵinj = ɵɵdefineInjector({
  imports: [[ChartCommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SankeyModule, [{
    type: NgModule,
    args: [{
      imports: [ChartCommonModule],
      declarations: [SankeyComponent],
      exports: [SankeyComponent]
    }]
  }], null, null);
})();
var NgxChartsModule = class {
  constructor() {
    ngxChartsPolyfills();
  }
};
NgxChartsModule.ɵfac = function NgxChartsModule_Factory(t) {
  return new (t || NgxChartsModule)();
};
NgxChartsModule.ɵmod = ɵɵdefineNgModule({
  type: NgxChartsModule,
  exports: [ChartCommonModule, AreaChartModule, BarChartModule, BoxChartModule, BubbleChartModule, HeatMapModule, SankeyModule, LineChartModule, PolarChartModule, NumberCardModule, PieChartModule, TreeMapModule, GaugeModule]
});
NgxChartsModule.ɵinj = ɵɵdefineInjector({
  imports: [ChartCommonModule, AreaChartModule, BarChartModule, BoxChartModule, BubbleChartModule, HeatMapModule, SankeyModule, LineChartModule, PolarChartModule, NumberCardModule, PieChartModule, TreeMapModule, GaugeModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxChartsModule, [{
    type: NgModule,
    args: [{
      exports: [ChartCommonModule, AreaChartModule, BarChartModule, BoxChartModule, BubbleChartModule, HeatMapModule, SankeyModule, LineChartModule, PolarChartModule, NumberCardModule, PieChartModule, TreeMapModule, GaugeModule]
    }]
  }], function() {
    return [];
  }, null);
})();
function tickFormat(fieldType, groupByType) {
  return function(label) {
    if (label === "No Value" || label === "Other") {
      return label;
    }
    if (fieldType === "date" && groupByType === "groupBy") {
      const formatter = timeFormat("MM/DD/YYYY");
      return formatter(label);
    }
    return label.toString();
  };
}
export {
  AdvancedLegendComponent,
  AdvancedPieChartComponent,
  AreaChartComponent,
  AreaChartModule,
  AreaChartNormalizedComponent,
  AreaChartStackedComponent,
  AreaComponent,
  AreaSeriesComponent,
  AxesModule,
  AxisLabelComponent,
  BarChartModule,
  BarChartType,
  BarComponent,
  BarHorizontal2DComponent,
  BarHorizontalComponent,
  BarHorizontalNormalizedComponent,
  BarHorizontalStackedComponent,
  BarLabelComponent,
  BarOrientation,
  BarVertical2DComponent,
  BarVerticalComponent,
  BarVerticalNormalizedComponent,
  BarVerticalStackedComponent,
  BaseChartComponent,
  BoxChartComponent,
  BoxChartModule,
  BoxComponent,
  BoxSeriesComponent,
  BubbleChartComponent,
  BubbleChartModule,
  BubbleSeriesComponent,
  CardComponent,
  CardSeriesComponent,
  ChartCommonModule,
  ChartComponent,
  CircleComponent,
  CircleSeriesComponent,
  ColorHelper,
  CountUpDirective,
  D0Types,
  GaugeArcComponent,
  GaugeAxisComponent,
  GaugeComponent,
  GaugeModule,
  GridPanelComponent,
  GridPanelSeriesComponent,
  HeatCellSeriesComponent,
  HeatMapCellComponent,
  HeatMapComponent,
  HeatMapModule,
  LegendComponent,
  LegendEntryComponent,
  LegendPosition,
  LegendType,
  LineChartComponent,
  LineChartModule,
  LineComponent,
  LineSeriesComponent,
  LinearGaugeComponent,
  NgxChartsModule,
  NumberCardComponent,
  NumberCardModule,
  Orientation,
  PieArcComponent,
  PieChartComponent,
  PieChartModule,
  PieGridComponent,
  PieGridSeriesComponent,
  PieLabelComponent,
  PieSeriesComponent,
  PlacementTypes,
  PolarChartComponent,
  PolarChartModule,
  PolarSeriesComponent,
  SankeyComponent,
  SankeyModule,
  ScaleLegendComponent,
  ScaleType,
  SeriesHorizontal,
  SeriesType,
  SeriesVerticalComponent,
  ShowTypes,
  StyleTypes,
  SvgLinearGradientComponent,
  SvgRadialGradientComponent,
  TextAnchor,
  Timeline,
  TooltipArea,
  TooltipContentComponent,
  TooltipDirective,
  TooltipModule,
  TooltipService,
  TreeMapCellComponent,
  TreeMapCellSeriesComponent,
  TreeMapComponent,
  TreeMapModule,
  VisibilityObserver,
  XAxisComponent,
  XAxisTicksComponent,
  YAxisComponent,
  YAxisTicksComponent,
  calculateViewDimensions,
  colorSets,
  count2 as count,
  decimalChecker,
  escapeLabel,
  formatLabel,
  getDomain,
  getScale,
  getScaleType,
  getTickLines,
  getUniqueXDomainValues,
  getXDomainArray,
  gridLayout,
  gridSize,
  hexToRgb,
  id,
  invertColor,
  reduceTicks,
  shadeRGBColor,
  sortByDomain,
  sortByTime,
  sortLinear,
  throttle,
  throttleable,
  tickFormat,
  trimLabel
};
/*! Bundled license information:

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v18.1.1
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=@swimlane_ngx-charts.js.map
