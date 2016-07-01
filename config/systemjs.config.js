System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "tsconfig": true
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },
  bundles: {
    ".dev/vendor.js": [
      "src/main.ts",
      "npm:rxjs@5.0.0-beta.4/Rx.js",
      "npm:rxjs@5.0.0-beta.4/symbol/iterator.js",
      "npm:rxjs@5.0.0-beta.4/util/root.js",
      "npm:rxjs@5.0.0-beta.4/symbol/observable.js",
      "npm:rxjs@5.0.0-beta.4/symbol/rxSubscriber.js",
      "npm:rxjs@5.0.0-beta.4/scheduler/queue.js",
      "npm:rxjs@5.0.0-beta.4/scheduler/QueueScheduler.js",
      "npm:rxjs@5.0.0-beta.4/scheduler/FutureAction.js",
      "npm:rxjs@5.0.0-beta.4/Subscription.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.2.js",
      "npm:process@0.11.2/browser.js",
      "npm:rxjs@5.0.0-beta.4/util/errorObject.js",
      "npm:rxjs@5.0.0-beta.4/util/tryCatch.js",
      "npm:rxjs@5.0.0-beta.4/util/isFunction.js",
      "npm:rxjs@5.0.0-beta.4/util/isObject.js",
      "npm:rxjs@5.0.0-beta.4/util/isArray.js",
      "npm:rxjs@5.0.0-beta.4/scheduler/QueueAction.js",
      "npm:rxjs@5.0.0-beta.4/scheduler/async.js",
      "npm:rxjs@5.0.0-beta.4/scheduler/AsyncScheduler.js",
      "npm:rxjs@5.0.0-beta.4/scheduler/asap.js",
      "npm:rxjs@5.0.0-beta.4/scheduler/AsapScheduler.js",
      "npm:rxjs@5.0.0-beta.4/scheduler/AsapAction.js",
      "npm:rxjs@5.0.0-beta.4/util/Immediate.js",
      "npm:rxjs@5.0.0-beta.4/util/ObjectUnsubscribedError.js",
      "npm:rxjs@5.0.0-beta.4/util/ArgumentOutOfRangeError.js",
      "npm:rxjs@5.0.0-beta.4/util/EmptyError.js",
      "npm:rxjs@5.0.0-beta.4/Notification.js",
      "npm:rxjs@5.0.0-beta.4/Observable.js",
      "npm:rxjs@5.0.0-beta.4/util/toSubscriber.js",
      "npm:rxjs@5.0.0-beta.4/Subscriber.js",
      "npm:rxjs@5.0.0-beta.4/Observer.js",
      "npm:rxjs@5.0.0-beta.4/observable/ConnectableObservable.js",
      "npm:rxjs@5.0.0-beta.4/subject/BehaviorSubject.js",
      "npm:rxjs@5.0.0-beta.4/util/throwError.js",
      "npm:rxjs@5.0.0-beta.4/Subject.js",
      "npm:rxjs@5.0.0-beta.4/subject/SubjectSubscription.js",
      "npm:rxjs@5.0.0-beta.4/subject/ReplaySubject.js",
      "npm:rxjs@5.0.0-beta.4/operator/observeOn.js",
      "npm:rxjs@5.0.0-beta.4/subject/AsyncSubject.js",
      "npm:rxjs@5.0.0-beta.4/Operator.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/zipAll.js",
      "npm:rxjs@5.0.0-beta.4/operator/zipAll.js",
      "npm:rxjs@5.0.0-beta.4/operator/zip.js",
      "npm:rxjs@5.0.0-beta.4/util/subscribeToResult.js",
      "npm:rxjs@5.0.0-beta.4/InnerSubscriber.js",
      "npm:rxjs@5.0.0-beta.4/util/isPromise.js",
      "npm:rxjs@5.0.0-beta.4/OuterSubscriber.js",
      "npm:rxjs@5.0.0-beta.4/observable/ArrayObservable.js",
      "npm:rxjs@5.0.0-beta.4/util/isScheduler.js",
      "npm:rxjs@5.0.0-beta.4/observable/EmptyObservable.js",
      "npm:rxjs@5.0.0-beta.4/observable/ScalarObservable.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/zip.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/withLatestFrom.js",
      "npm:rxjs@5.0.0-beta.4/operator/withLatestFrom.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/windowWhen.js",
      "npm:rxjs@5.0.0-beta.4/operator/windowWhen.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/windowToggle.js",
      "npm:rxjs@5.0.0-beta.4/operator/windowToggle.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/windowTime.js",
      "npm:rxjs@5.0.0-beta.4/operator/windowTime.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/windowCount.js",
      "npm:rxjs@5.0.0-beta.4/operator/windowCount.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/window.js",
      "npm:rxjs@5.0.0-beta.4/operator/window.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/toPromise.js",
      "npm:rxjs@5.0.0-beta.4/operator/toPromise.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/toArray.js",
      "npm:rxjs@5.0.0-beta.4/operator/toArray.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/timeoutWith.js",
      "npm:rxjs@5.0.0-beta.4/operator/timeoutWith.js",
      "npm:rxjs@5.0.0-beta.4/util/isDate.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/timeout.js",
      "npm:rxjs@5.0.0-beta.4/operator/timeout.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/throttleTime.js",
      "npm:rxjs@5.0.0-beta.4/operator/throttleTime.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/throttle.js",
      "npm:rxjs@5.0.0-beta.4/operator/throttle.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/takeWhile.js",
      "npm:rxjs@5.0.0-beta.4/operator/takeWhile.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/takeUntil.js",
      "npm:rxjs@5.0.0-beta.4/operator/takeUntil.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/takeLast.js",
      "npm:rxjs@5.0.0-beta.4/operator/takeLast.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/take.js",
      "npm:rxjs@5.0.0-beta.4/operator/take.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/switchMapTo.js",
      "npm:rxjs@5.0.0-beta.4/operator/switchMapTo.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/switchMap.js",
      "npm:rxjs@5.0.0-beta.4/operator/switchMap.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/switch.js",
      "npm:rxjs@5.0.0-beta.4/operator/switch.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/subscribeOn.js",
      "npm:rxjs@5.0.0-beta.4/operator/subscribeOn.js",
      "npm:rxjs@5.0.0-beta.4/observable/SubscribeOnObservable.js",
      "npm:rxjs@5.0.0-beta.4/util/isNumeric.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/startWith.js",
      "npm:rxjs@5.0.0-beta.4/operator/startWith.js",
      "npm:rxjs@5.0.0-beta.4/operator/concat.js",
      "npm:rxjs@5.0.0-beta.4/operator/mergeAll.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/skipWhile.js",
      "npm:rxjs@5.0.0-beta.4/operator/skipWhile.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/skipUntil.js",
      "npm:rxjs@5.0.0-beta.4/operator/skipUntil.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/skip.js",
      "npm:rxjs@5.0.0-beta.4/operator/skip.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/single.js",
      "npm:rxjs@5.0.0-beta.4/operator/single.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/share.js",
      "npm:rxjs@5.0.0-beta.4/operator/share.js",
      "npm:rxjs@5.0.0-beta.4/operator/multicast.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/scan.js",
      "npm:rxjs@5.0.0-beta.4/operator/scan.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/sampleTime.js",
      "npm:rxjs@5.0.0-beta.4/operator/sampleTime.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/sample.js",
      "npm:rxjs@5.0.0-beta.4/operator/sample.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/retryWhen.js",
      "npm:rxjs@5.0.0-beta.4/operator/retryWhen.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/retry.js",
      "npm:rxjs@5.0.0-beta.4/operator/retry.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/repeat.js",
      "npm:rxjs@5.0.0-beta.4/operator/repeat.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/reduce.js",
      "npm:rxjs@5.0.0-beta.4/operator/reduce.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/race.js",
      "npm:rxjs@5.0.0-beta.4/operator/race.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/publishLast.js",
      "npm:rxjs@5.0.0-beta.4/operator/publishLast.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/publishReplay.js",
      "npm:rxjs@5.0.0-beta.4/operator/publishReplay.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/publishBehavior.js",
      "npm:rxjs@5.0.0-beta.4/operator/publishBehavior.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/publish.js",
      "npm:rxjs@5.0.0-beta.4/operator/publish.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/pluck.js",
      "npm:rxjs@5.0.0-beta.4/operator/pluck.js",
      "npm:rxjs@5.0.0-beta.4/operator/map.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/partition.js",
      "npm:rxjs@5.0.0-beta.4/operator/partition.js",
      "npm:rxjs@5.0.0-beta.4/operator/filter.js",
      "npm:rxjs@5.0.0-beta.4/util/not.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/observeOn.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/multicast.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/mergeMapTo.js",
      "npm:rxjs@5.0.0-beta.4/operator/mergeMapTo.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/mergeMap.js",
      "npm:rxjs@5.0.0-beta.4/operator/mergeMap.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/mergeAll.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/merge.js",
      "npm:rxjs@5.0.0-beta.4/operator/merge.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/materialize.js",
      "npm:rxjs@5.0.0-beta.4/operator/materialize.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/mapTo.js",
      "npm:rxjs@5.0.0-beta.4/operator/mapTo.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/map.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/every.js",
      "npm:rxjs@5.0.0-beta.4/operator/every.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/let.js",
      "npm:rxjs@5.0.0-beta.4/operator/let.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/last.js",
      "npm:rxjs@5.0.0-beta.4/operator/last.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/auditTime.js",
      "npm:rxjs@5.0.0-beta.4/operator/auditTime.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/audit.js",
      "npm:rxjs@5.0.0-beta.4/operator/audit.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/ignoreElements.js",
      "npm:rxjs@5.0.0-beta.4/operator/ignoreElements.js",
      "npm:rxjs@5.0.0-beta.4/util/noop.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/groupBy.js",
      "npm:rxjs@5.0.0-beta.4/operator/groupBy.js",
      "npm:rxjs@5.0.0-beta.4/util/FastMap.js",
      "npm:rxjs@5.0.0-beta.4/util/Map.js",
      "npm:rxjs@5.0.0-beta.4/util/MapPolyfill.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/first.js",
      "npm:rxjs@5.0.0-beta.4/operator/first.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/finally.js",
      "npm:rxjs@5.0.0-beta.4/operator/finally.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/filter.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/expand.js",
      "npm:rxjs@5.0.0-beta.4/operator/expand.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/do.js",
      "npm:rxjs@5.0.0-beta.4/operator/do.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/distinctUntilChanged.js",
      "npm:rxjs@5.0.0-beta.4/operator/distinctUntilChanged.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/delayWhen.js",
      "npm:rxjs@5.0.0-beta.4/operator/delayWhen.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/delay.js",
      "npm:rxjs@5.0.0-beta.4/operator/delay.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/defaultIfEmpty.js",
      "npm:rxjs@5.0.0-beta.4/operator/defaultIfEmpty.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/debounceTime.js",
      "npm:rxjs@5.0.0-beta.4/operator/debounceTime.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/debounce.js",
      "npm:rxjs@5.0.0-beta.4/operator/debounce.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/dematerialize.js",
      "npm:rxjs@5.0.0-beta.4/operator/dematerialize.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/count.js",
      "npm:rxjs@5.0.0-beta.4/operator/count.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/concatMapTo.js",
      "npm:rxjs@5.0.0-beta.4/operator/concatMapTo.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/concatMap.js",
      "npm:rxjs@5.0.0-beta.4/operator/concatMap.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/concatAll.js",
      "npm:rxjs@5.0.0-beta.4/operator/concatAll.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/concat.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/combineLatest.js",
      "npm:rxjs@5.0.0-beta.4/operator/combineLatest.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/combineAll.js",
      "npm:rxjs@5.0.0-beta.4/operator/combineAll.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/catch.js",
      "npm:rxjs@5.0.0-beta.4/operator/catch.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/cache.js",
      "npm:rxjs@5.0.0-beta.4/operator/cache.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/bufferWhen.js",
      "npm:rxjs@5.0.0-beta.4/operator/bufferWhen.js",
      "github:jspm/nodelibs-buffer@0.1.0.js",
      "github:jspm/nodelibs-buffer@0.1.0/index.js",
      "npm:buffer@3.6.0.js",
      "npm:buffer@3.6.0/index.js",
      "npm:isarray@1.0.0.js",
      "npm:isarray@1.0.0/index.js",
      "npm:ieee754@1.1.6.js",
      "npm:ieee754@1.1.6/index.js",
      "npm:base64-js@0.0.8.js",
      "npm:base64-js@0.0.8/lib/b64.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/bufferToggle.js",
      "npm:rxjs@5.0.0-beta.4/operator/bufferToggle.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/bufferTime.js",
      "npm:rxjs@5.0.0-beta.4/operator/bufferTime.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/bufferCount.js",
      "npm:rxjs@5.0.0-beta.4/operator/bufferCount.js",
      "npm:rxjs@5.0.0-beta.4/add/operator/buffer.js",
      "npm:rxjs@5.0.0-beta.4/operator/buffer.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/zip.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/timer.js",
      "npm:rxjs@5.0.0-beta.4/observable/TimerObservable.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/throw.js",
      "npm:rxjs@5.0.0-beta.4/observable/ErrorObservable.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/range.js",
      "npm:rxjs@5.0.0-beta.4/observable/RangeObservable.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/of.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/never.js",
      "npm:rxjs@5.0.0-beta.4/observable/NeverObservable.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/race.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/merge.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/interval.js",
      "npm:rxjs@5.0.0-beta.4/observable/IntervalObservable.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/fromPromise.js",
      "npm:rxjs@5.0.0-beta.4/observable/PromiseObservable.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/fromEventPattern.js",
      "npm:rxjs@5.0.0-beta.4/observable/FromEventPatternObservable.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/fromEvent.js",
      "npm:rxjs@5.0.0-beta.4/observable/FromEventObservable.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/from.js",
      "npm:rxjs@5.0.0-beta.4/observable/FromObservable.js",
      "npm:rxjs@5.0.0-beta.4/observable/ArrayLikeObservable.js",
      "npm:rxjs@5.0.0-beta.4/observable/IteratorObservable.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/forkJoin.js",
      "npm:rxjs@5.0.0-beta.4/observable/ForkJoinObservable.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/empty.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/defer.js",
      "npm:rxjs@5.0.0-beta.4/observable/DeferObservable.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/concat.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/combineLatest.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/bindNodeCallback.js",
      "npm:rxjs@5.0.0-beta.4/observable/BoundNodeCallbackObservable.js",
      "npm:rxjs@5.0.0-beta.4/add/observable/bindCallback.js",
      "npm:rxjs@5.0.0-beta.4/observable/BoundCallbackObservable.js",
      "npm:angular2@2.0.0-beta.13/http.js",
      "npm:angular2@2.0.0-beta.13/src/http/url_search_params.js",
      "npm:angular2@2.0.0-beta.13/src/facade/collection.js",
      "npm:angular2@2.0.0-beta.13/src/facade/lang.js",
      "npm:angular2@2.0.0-beta.13/src/http/enums.js",
      "npm:angular2@2.0.0-beta.13/src/http/headers.js",
      "npm:angular2@2.0.0-beta.13/src/facade/exceptions.js",
      "npm:angular2@2.0.0-beta.13/src/facade/exception_handler.js",
      "npm:angular2@2.0.0-beta.13/src/facade/base_wrapped_exception.js",
      "npm:angular2@2.0.0-beta.13/src/http/interfaces.js",
      "npm:angular2@2.0.0-beta.13/src/http/static_response.js",
      "npm:angular2@2.0.0-beta.13/src/http/http_utils.js",
      "npm:angular2@2.0.0-beta.13/src/http/static_request.js",
      "npm:angular2@2.0.0-beta.13/src/http/base_response_options.js",
      "npm:angular2@2.0.0-beta.13/core.js",
      "npm:angular2@2.0.0-beta.13/src/core/reflection/reflection.js",
      "npm:angular2@2.0.0-beta.13/src/core/reflection/reflection_capabilities.js",
      "npm:angular2@2.0.0-beta.13/src/core/reflection/reflector.js",
      "npm:angular2@2.0.0-beta.13/src/core/reflection/reflector_reader.js",
      "npm:angular2@2.0.0-beta.13/src/core/application_common_providers.js",
      "npm:angular2@2.0.0-beta.13/src/core/linker/dynamic_component_loader.js",
      "npm:angular2@2.0.0-beta.13/src/core/linker/view_manager.js",
      "npm:angular2@2.0.0-beta.13/src/core/linker/view_type.js",
      "npm:angular2@2.0.0-beta.13/src/core/application_tokens.js",
      "npm:angular2@2.0.0-beta.13/src/core/di.js",
      "npm:angular2@2.0.0-beta.13/src/core/di/opaque_token.js",
      "npm:angular2@2.0.0-beta.13/src/core/di/exceptions.js",
      "npm:angular2@2.0.0-beta.13/src/core/di/key.js",
      "npm:angular2@2.0.0-beta.13/src/core/di/forward_ref.js",
      "npm:angular2@2.0.0-beta.13/src/core/di/provider.js",
      "npm:angular2@2.0.0-beta.13/src/core/di/metadata.js",
      "npm:angular2@2.0.0-beta.13/src/core/di/injector.js",
      "npm:angular2@2.0.0-beta.13/src/core/di/decorators.js",
      "npm:angular2@2.0.0-beta.13/src/core/util/decorators.js",
      "npm:angular2@2.0.0-beta.13/src/core/profile/profile.js",
      "npm:angular2@2.0.0-beta.13/src/core/profile/wtf_impl.js",
      "npm:angular2@2.0.0-beta.13/src/core/render/api.js",
      "npm:angular2@2.0.0-beta.13/src/core/linker/view.js",
      "npm:angular2@2.0.0-beta.13/src/core/render/util.js",
      "npm:angular2@2.0.0-beta.13/src/core/pipes/pipes.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/pipes.js",
      "npm:angular2@2.0.0-beta.13/src/core/linker/view_ref.js",
      "npm:angular2@2.0.0-beta.13/src/core/linker/element.js",
      "npm:angular2@2.0.0-beta.13/src/core/pipes/pipe_provider.js",
      "npm:angular2@2.0.0-beta.13/src/core/linker/query_list.js",
      "npm:angular2@2.0.0-beta.13/src/facade/async.js",
      "npm:angular2@2.0.0-beta.13/src/facade/promise.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/change_detection.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/change_detection_util.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/directive_record.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/constants.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/binding_record.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/pipe_lifecycle_reflector.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/change_detector_ref.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/dynamic_change_detector.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/proto_record.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/abstract_change_detector.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/parser/locals.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/exceptions.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/jit_proto_change_detector.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/change_detection_jit_generator.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/proto_change_detector.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/coalesce.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/event_binding.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/parser/ast.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/codegen_facade.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/codegen_logic_util.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/codegen_name_util.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/interfaces.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/parser/parser.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/parser/lexer.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/differs/default_keyvalue_differ.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/differs/keyvalue_differs.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/differs/default_iterable_differ.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection/differs/iterable_differs.js",
      "npm:angular2@2.0.0-beta.13/src/core/metadata/directives.js",
      "npm:angular2@2.0.0-beta.13/src/core/change_detection.js",
      "npm:angular2@2.0.0-beta.13/src/core/linker/template_ref.js",
      "npm:angular2@2.0.0-beta.13/src/core/linker/view_container_ref.js",
      "npm:angular2@2.0.0-beta.13/src/core/linker/element_ref.js",
      "npm:angular2@2.0.0-beta.13/src/core/metadata/di.js",
      "npm:angular2@2.0.0-beta.13/src/core/linker/compiler.js",
      "npm:angular2@2.0.0-beta.13/src/core/linker/pipe_resolver.js",
      "npm:angular2@2.0.0-beta.13/src/core/metadata.js",
      "npm:angular2@2.0.0-beta.13/src/core/metadata/view.js",
      "npm:angular2@2.0.0-beta.13/src/core/linker/directive_resolver.js",
      "npm:angular2@2.0.0-beta.13/src/core/linker/view_resolver.js",
      "npm:angular2@2.0.0-beta.13/src/core/linker/resolved_metadata_cache.js",
      "npm:angular2@2.0.0-beta.13/src/core/platform_common_providers.js",
      "npm:angular2@2.0.0-beta.13/src/core/testability/testability.js",
      "npm:angular2@2.0.0-beta.13/src/core/zone/ng_zone.js",
      "npm:angular2@2.0.0-beta.13/src/core/zone/ng_zone_impl.js",
      "npm:angular2@2.0.0-beta.13/src/core/console.js",
      "npm:angular2@2.0.0-beta.13/src/core/platform_directives_and_pipes.js",
      "npm:angular2@2.0.0-beta.13/src/core/debug/debug_node.js",
      "npm:angular2@2.0.0-beta.13/src/core/linker.js",
      "npm:angular2@2.0.0-beta.13/src/core/render.js",
      "npm:angular2@2.0.0-beta.13/src/core/zone.js",
      "npm:angular2@2.0.0-beta.13/src/core/application_ref.js",
      "npm:angular2@2.0.0-beta.13/src/facade/facade.js",
      "npm:angular2@2.0.0-beta.13/src/core/prod_mode.js",
      "npm:angular2@2.0.0-beta.13/src/core/util.js",
      "npm:angular2@2.0.0-beta.13/src/http/base_request_options.js",
      "npm:angular2@2.0.0-beta.13/src/http/backends/browser_jsonp.js",
      "npm:angular2@2.0.0-beta.13/src/http/backends/browser_xhr.js",
      "npm:angular2@2.0.0-beta.13/src/http/backends/jsonp_backend.js",
      "npm:angular2@2.0.0-beta.13/src/http/backends/xhr_backend.js",
      "npm:angular2@2.0.0-beta.13/src/http/http.js",
      "npm:angular2@2.0.0-beta.13/router.js",
      "npm:angular2@2.0.0-beta.13/src/router/router_providers.js",
      "npm:angular2@2.0.0-beta.13/src/router/location/platform_location.js",
      "npm:angular2@2.0.0-beta.13/src/router/location/browser_platform_location.js",
      "npm:angular2@2.0.0-beta.13/src/platform/dom/dom_adapter.js",
      "npm:angular2@2.0.0-beta.13/src/router/router_providers_common.js",
      "npm:angular2@2.0.0-beta.13/src/router/location/location.js",
      "npm:angular2@2.0.0-beta.13/src/router/location/location_strategy.js",
      "npm:angular2@2.0.0-beta.13/src/router/route_registry.js",
      "npm:angular2@2.0.0-beta.13/src/router/url_parser.js",
      "npm:angular2@2.0.0-beta.13/src/router/route_config/route_config_normalizer.js",
      "npm:angular2@2.0.0-beta.13/src/router/route_config/route_config_decorator.js",
      "npm:angular2@2.0.0-beta.13/src/router/route_config/route_config_impl.js",
      "npm:angular2@2.0.0-beta.13/src/router/instruction.js",
      "npm:angular2@2.0.0-beta.13/src/router/rules/rule_set.js",
      "npm:angular2@2.0.0-beta.13/src/router/rules/route_paths/regex_route_path.js",
      "npm:angular2@2.0.0-beta.13/src/router/rules/route_paths/route_path.js",
      "npm:angular2@2.0.0-beta.13/src/router/rules/route_paths/param_route_path.js",
      "npm:angular2@2.0.0-beta.13/src/router/utils.js",
      "npm:angular2@2.0.0-beta.13/src/router/rules/route_handlers/sync_route_handler.js",
      "npm:angular2@2.0.0-beta.13/src/router/rules/route_handlers/async_route_handler.js",
      "npm:angular2@2.0.0-beta.13/src/router/rules/rules.js",
      "npm:angular2@2.0.0-beta.13/src/router/router.js",
      "npm:angular2@2.0.0-beta.13/src/router/lifecycle/route_lifecycle_reflector.js",
      "npm:angular2@2.0.0-beta.13/src/router/lifecycle/lifecycle_annotations_impl.js",
      "npm:angular2@2.0.0-beta.13/src/router/location/path_location_strategy.js",
      "npm:angular2@2.0.0-beta.13/src/router/lifecycle/lifecycle_annotations.js",
      "npm:angular2@2.0.0-beta.13/src/router/route_definition.js",
      "npm:angular2@2.0.0-beta.13/src/router/location/hash_location_strategy.js",
      "npm:angular2@2.0.0-beta.13/src/router/directives/router_link.js",
      "npm:angular2@2.0.0-beta.13/src/router/directives/router_outlet.js",
      "npm:angular2@2.0.0-beta.13/platform/browser.js",
      "npm:angular2@2.0.0-beta.13/src/platform/browser/xhr_impl.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/xhr.js",
      "npm:angular2@2.0.0-beta.13/compiler.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/compiler.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/url_resolver.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/schema/dom_element_schema_registry.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/schema/element_schema_registry.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/html_tags.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/runtime_compiler.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/template_compiler.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/util.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/runtime_metadata.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/assertions.js",
      "npm:angular2@2.0.0-beta.13/src/core/linker/interfaces.js",
      "npm:angular2@2.0.0-beta.13/src/core/linker/directive_lifecycle_reflector.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/directive_metadata.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/selector.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/template_normalizer.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/template_preparser.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/html_parser.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/parse_util.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/html_lexer.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/html_ast.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/style_url_resolver.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/template_parser.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/template_ast.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/proto_view_compiler.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/source_module.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/view_compiler.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/style_compiler.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/shadow_css.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/change_detector_compiler.js",
      "npm:angular2@2.0.0-beta.13/src/transform/template_compiler/change_detector_codegen.js",
      "npm:angular2@2.0.0-beta.13/src/compiler/change_definition_factory.js",
      "npm:angular2@2.0.0-beta.13/src/platform/browser_common.js",
      "npm:angular2@2.0.0-beta.13/src/platform/browser/tools/tools.js",
      "npm:angular2@2.0.0-beta.13/src/platform/browser/tools/common_tools.js",
      "npm:angular2@2.0.0-beta.13/src/facade/browser.js",
      "npm:angular2@2.0.0-beta.13/src/platform/browser/title.js",
      "npm:angular2@2.0.0-beta.13/platform/common_dom.js",
      "npm:angular2@2.0.0-beta.13/src/platform/dom/debug/ng_probe.js",
      "npm:angular2@2.0.0-beta.13/src/core/debug/debug_renderer.js",
      "npm:angular2@2.0.0-beta.13/src/platform/dom/dom_renderer.js",
      "npm:angular2@2.0.0-beta.13/src/platform/dom/util.js",
      "npm:angular2@2.0.0-beta.13/src/platform/dom/dom_tokens.js",
      "npm:angular2@2.0.0-beta.13/src/platform/dom/events/event_manager.js",
      "npm:angular2@2.0.0-beta.13/src/platform/dom/shared_styles_host.js",
      "npm:angular2@2.0.0-beta.13/src/animate/animation_builder.js",
      "npm:angular2@2.0.0-beta.13/src/animate/browser_details.js",
      "npm:angular2@2.0.0-beta.13/src/facade/math.js",
      "npm:angular2@2.0.0-beta.13/src/animate/css_animation_builder.js",
      "npm:angular2@2.0.0-beta.13/src/animate/animation.js",
      "npm:angular2@2.0.0-beta.13/src/animate/css_animation_options.js",
      "npm:angular2@2.0.0-beta.13/src/platform/dom/debug/by.js",
      "npm:angular2@2.0.0-beta.13/src/platform/dom/events/dom_events.js",
      "npm:angular2@2.0.0-beta.13/src/core/profile/wtf_init.js",
      "npm:angular2@2.0.0-beta.13/src/platform/browser/testability.js",
      "npm:angular2@2.0.0-beta.13/src/platform/browser/browser_adapter.js",
      "npm:angular2@2.0.0-beta.13/src/platform/browser/generic_browser_adapter.js",
      "npm:angular2@2.0.0-beta.13/src/platform/dom/events/hammer_gestures.js",
      "npm:angular2@2.0.0-beta.13/src/platform/dom/events/hammer_common.js",
      "npm:angular2@2.0.0-beta.13/src/platform/dom/events/key_events.js",
      "npm:angular2@2.0.0-beta.13/common.js",
      "npm:angular2@2.0.0-beta.13/src/common/common_directives.js",
      "npm:angular2@2.0.0-beta.13/src/common/directives.js",
      "npm:angular2@2.0.0-beta.13/src/common/directives/core_directives.js",
      "npm:angular2@2.0.0-beta.13/src/common/directives/ng_plural.js",
      "npm:angular2@2.0.0-beta.13/src/common/directives/ng_switch.js",
      "npm:angular2@2.0.0-beta.13/src/common/directives/ng_style.js",
      "npm:angular2@2.0.0-beta.13/src/common/directives/ng_if.js",
      "npm:angular2@2.0.0-beta.13/src/common/directives/ng_for.js",
      "npm:angular2@2.0.0-beta.13/src/common/directives/ng_class.js",
      "npm:angular2@2.0.0-beta.13/src/common/directives/observable_list_diff.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives/radio_control_value_accessor.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives/ng_control.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives/abstract_control_directive.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives/control_value_accessor.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/form_builder.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/model.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives/validators.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/validators.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives/select_control_value_accessor.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives/ng_control_status.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives/number_value_accessor.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives/checkbox_value_accessor.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives/default_value_accessor.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives/ng_form.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives/shared.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives/normalize_validator.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives/control_container.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives/ng_form_model.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives/ng_control_group.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives/ng_model.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives/ng_form_control.js",
      "npm:angular2@2.0.0-beta.13/src/common/forms/directives/ng_control_name.js",
      "npm:angular2@2.0.0-beta.13/src/common/pipes.js",
      "npm:angular2@2.0.0-beta.13/src/common/pipes/common_pipes.js",
      "npm:angular2@2.0.0-beta.13/src/common/pipes/i18n_select_pipe.js",
      "npm:angular2@2.0.0-beta.13/src/common/pipes/invalid_pipe_argument_exception.js",
      "npm:angular2@2.0.0-beta.13/src/common/pipes/i18n_plural_pipe.js",
      "npm:angular2@2.0.0-beta.13/src/common/pipes/replace_pipe.js",
      "npm:angular2@2.0.0-beta.13/src/common/pipes/number_pipe.js",
      "npm:angular2@2.0.0-beta.13/src/facade/intl.js",
      "npm:angular2@2.0.0-beta.13/src/common/pipes/date_pipe.js",
      "npm:angular2@2.0.0-beta.13/src/common/pipes/slice_pipe.js",
      "npm:angular2@2.0.0-beta.13/src/common/pipes/json_pipe.js",
      "npm:angular2@2.0.0-beta.13/src/common/pipes/lowercase_pipe.js",
      "npm:angular2@2.0.0-beta.13/src/common/pipes/uppercase_pipe.js",
      "npm:angular2@2.0.0-beta.13/src/common/pipes/async_pipe.js",
      "npm:angular2@2.0.0-beta.13/src/core/angular_entrypoint.js",
      "npm:angular2@2.0.0-beta.13/bundles/angular2-polyfills.js"
    ]
  },

  packages: {
    "src": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        }
      }
    }
  },

  map: {
    "angular2": "npm:angular2@2.0.0-beta.13",
    "es6-shim": "github:es-shims/es6-shim@0.34.4",
    "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.5",
    "reflect-metadata": "npm:reflect-metadata@0.1.3",
    "rxjs": "npm:rxjs@5.0.0-beta.4",
    "ts": "github:frankwallis/plugin-typescript@4.0.5",
    "typescript": "npm:typescript@1.8.9",
    "typings": "npm:typings@0.6.10",
    "zone.js": "npm:zone.js@0.6.8",
    "github:frankwallis/plugin-typescript@4.0.5": {
      "typescript": "npm:typescript@1.8.9"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.3.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:abbrev@1.0.7": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:agent-base@2.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "extend": "npm:extend@3.0.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "semver": "npm:semver@5.0.3",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:angular2@2.0.0-beta.13": {
      "reflect-metadata": "npm:reflect-metadata@0.1.2",
      "rxjs": "npm:rxjs@5.0.0-beta.4",
      "zone.js": "npm:zone.js@0.6.8"
    },
    "npm:ansi-styles@2.2.0": {
      "color-convert": "npm:color-convert@1.0.0"
    },
    "npm:any-promise@1.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.5.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.11.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:asn1@0.2.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@0.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:async@1.5.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:aws-sign2@0.6.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:aws4@1.3.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "lru-cache": "npm:lru-cache@4.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:bl@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "readable-stream": "npm:readable-stream@2.0.5",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:bluebird@3.3.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.11.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:boom@2.10.1": {
      "hoek": "npm:hoek@2.16.3",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:boxen@0.3.1": {
      "chalk": "npm:chalk@1.1.1",
      "filled-array": "npm:filled-array@1.1.0",
      "object-assign": "npm:object-assign@4.0.1",
      "repeating": "npm:repeating@2.0.0",
      "string-width": "npm:string-width@1.0.1",
      "widest-line": "npm:widest-line@1.0.0"
    },
    "npm:brace-expansion@1.1.3": {
      "balanced-match": "npm:balanced-match@0.3.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.0",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.5",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:chalk@1.1.1": {
      "ansi-styles": "npm:ansi-styles@2.2.0",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:cli-cursor@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "restore-cursor": "npm:restore-cursor@1.0.1"
    },
    "npm:cli-width@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:cli-width@2.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:clone@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:code-point-at@1.0.0": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:columnify@1.5.4": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "wcwidth": "npm:wcwidth@1.0.0"
    },
    "npm:combined-stream@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "delayed-stream": "npm:delayed-stream@1.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.9.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:concat-stream@1.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@2.0.5",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:configstore@1.4.0": {
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "mkdirp": "npm:mkdirp@0.5.1",
      "object-assign": "npm:object-assign@4.0.1",
      "os-tmpdir": "npm:os-tmpdir@1.0.1",
      "osenv": "npm:osenv@0.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "uuid": "npm:uuid@2.0.1",
      "write-file-atomic": "npm:write-file-atomic@1.1.4",
      "xdg-basedir": "npm:xdg-basedir@2.0.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3"
    },
    "npm:create-error-class@2.0.1": {
      "capture-stack-trace": "npm:capture-stack-trace@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.5"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:cryptiles@2.0.5": {
      "boom": "npm:boom@2.10.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:dashdash@1.13.0": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:deep-extend@0.4.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:defaults@1.0.3": {
      "clone": "npm:clone@1.0.2"
    },
    "npm:delayed-stream@1.0.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:detect-indent@4.0.0": {
      "repeating": "npm:repeating@2.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:duplexer2@0.1.4": {
      "readable-stream": "npm:readable-stream@2.0.5"
    },
    "npm:ecc-jsbn@0.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "jsbn": "npm:jsbn@0.1.0"
    },
    "npm:elegant-spinner@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:elliptic@6.2.3": {
      "bn.js": "npm:bn.js@4.11.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:error-ex@1.3.0": {
      "is-arrayish": "npm:is-arrayish@0.2.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:exit-hook@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:extsprintf@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:figures@1.4.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:forever-agent@0.6.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:form-data@1.0.0-rc3": {
      "async": "npm:async@1.5.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime-types": "npm:mime-types@2.1.10",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:generate-function@2.0.0": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:generate-object-property@1.2.0": {
      "is-property": "npm:is-property@1.0.2"
    },
    "npm:glob@7.0.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:got@5.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-error-class": "npm:create-error-class@2.0.1",
      "duplexer2": "npm:duplexer2@0.1.4",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-plain-obj": "npm:is-plain-obj@1.1.0",
      "is-redirect": "npm:is-redirect@1.0.0",
      "is-retry-allowed": "npm:is-retry-allowed@1.0.0",
      "is-stream": "npm:is-stream@1.0.1",
      "lowercase-keys": "npm:lowercase-keys@1.0.0",
      "node-status-codes": "npm:node-status-codes@1.0.0",
      "object-assign": "npm:object-assign@4.0.1",
      "parse-json": "npm:parse-json@2.2.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "read-all-stream": "npm:read-all-stream@3.1.0",
      "readable-stream": "npm:readable-stream@2.0.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "timed-out": "npm:timed-out@2.0.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "url-parse-lax": "npm:url-parse-lax@1.0.0"
    },
    "npm:graceful-fs@4.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:har-validator@2.0.6": {
      "chalk": "npm:chalk@1.1.1",
      "commander": "npm:commander@2.9.0",
      "is-my-json-valid": "npm:is-my-json-valid@2.13.1",
      "pinkie-promise": "npm:pinkie-promise@2.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:has@1.0.1": {
      "function-bind": "npm:function-bind@1.1.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:hawk@3.1.3": {
      "boom": "npm:boom@2.10.1",
      "cryptiles": "npm:cryptiles@2.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sntp": "npm:sntp@1.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:hoek@2.16.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:http-proxy-agent@1.0.0": {
      "agent-base": "npm:agent-base@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "extend": "npm:extend@3.0.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:http-signature@1.1.1": {
      "assert-plus": "npm:assert-plus@0.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "jsprim": "npm:jsprim@1.2.2",
      "sshpk": "npm:sshpk@1.7.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:https-proxy-agent@1.0.0": {
      "agent-base": "npm:agent-base@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "extend": "npm:extend@3.0.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ini@1.3.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inquirer@0.10.1": {
      "ansi-escapes": "npm:ansi-escapes@1.2.0",
      "ansi-regex": "npm:ansi-regex@2.0.0",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "chalk": "npm:chalk@1.1.1",
      "cli-cursor": "npm:cli-cursor@1.0.2",
      "cli-width": "npm:cli-width@1.1.1",
      "figures": "npm:figures@1.4.0",
      "lodash": "npm:lodash@3.10.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readline": "github:jspm/nodelibs-readline@0.1.0",
      "readline2": "npm:readline2@1.0.1",
      "run-async": "npm:run-async@0.1.0",
      "rx-lite": "npm:rx-lite@3.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "through": "npm:through@2.3.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inquirer@0.12.0": {
      "ansi-escapes": "npm:ansi-escapes@1.2.0",
      "ansi-regex": "npm:ansi-regex@2.0.0",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "chalk": "npm:chalk@1.1.1",
      "cli-cursor": "npm:cli-cursor@1.0.2",
      "cli-width": "npm:cli-width@2.1.0",
      "figures": "npm:figures@1.4.0",
      "lodash": "npm:lodash@4.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readline2": "npm:readline2@1.0.1",
      "run-async": "npm:run-async@0.1.0",
      "rx-lite": "npm:rx-lite@3.1.2",
      "string-width": "npm:string-width@1.0.1",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "through": "npm:through@2.3.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:insight@0.7.0": {
      "async": "npm:async@1.5.2",
      "chalk": "npm:chalk@1.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "configstore": "npm:configstore@1.4.0",
      "inquirer": "npm:inquirer@0.10.1",
      "lodash.debounce": "npm:lodash.debounce@3.1.1",
      "object-assign": "npm:object-assign@4.0.1",
      "os-name": "npm:os-name@1.0.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "request": "npm:request@2.69.0",
      "tough-cookie": "npm:tough-cookie@2.2.1"
    },
    "npm:invariant@2.2.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-absolute@0.2.3": {
      "is-relative": "npm:is-relative@0.2.1",
      "is-windows": "npm:is-windows@0.1.1"
    },
    "npm:is-finite@1.0.1": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:is-my-json-valid@2.13.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "generate-function": "npm:generate-function@2.0.0",
      "generate-object-property": "npm:generate-object-property@1.2.0",
      "jsonpointer": "npm:jsonpointer@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:is-npm@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-relative@0.2.1": {
      "is-unc-path": "npm:is-unc-path@0.1.1"
    },
    "npm:is-unc-path@0.1.1": {
      "unc-path-regex": "npm:unc-path-regex@0.1.1"
    },
    "npm:is-windows@0.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:isstream@0.1.2": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jodid25519@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "jsbn": "npm:jsbn@0.1.0"
    },
    "npm:jsonpointer@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:jsprim@1.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "extsprintf": "npm:extsprintf@1.0.2",
      "json-schema": "npm:json-schema@0.2.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "verror": "npm:verror@1.3.6"
    },
    "npm:latest-version@2.0.0": {
      "package-json": "npm:package-json@2.3.1"
    },
    "npm:lockfile@1.0.1": {
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash.debounce@3.1.1": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash@4.6.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:log-update@1.0.2": {
      "ansi-escapes": "npm:ansi-escapes@1.2.0",
      "cli-cursor": "npm:cli-cursor@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lru-cache@4.0.0": {
      "pseudomap": "npm:pseudomap@1.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "yallist": "npm:yallist@2.0.0"
    },
    "npm:make-error-cause@1.0.2": {
      "make-error": "npm:make-error@1.1.1"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.22.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mime-types@2.1.10": {
      "mime-db": "npm:mime-db@1.22.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:minimatch@3.0.0": {
      "brace-expansion": "npm:brace-expansion@1.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:mute-stream@0.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:node-uuid@1.4.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:nopt@1.0.10": {
      "abbrev": "npm:abbrev@1.0.7",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:oauth-sign@0.8.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0"
    },
    "npm:once@1.3.3": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:os-homedir@1.0.1": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-name@1.0.3": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "osx-release": "npm:osx-release@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "win-release": "npm:win-release@1.1.1"
    },
    "npm:os-tmpdir@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:osenv@0.1.3": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "os-homedir": "npm:os-homedir@1.0.1",
      "os-tmpdir": "npm:os-tmpdir@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:osx-release@1.1.0": {
      "minimist": "npm:minimist@1.2.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:package-json@2.3.1": {
      "got": "npm:got@5.5.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rc": "npm:rc@1.1.6",
      "registry-url": "npm:registry-url@3.0.3",
      "semver": "npm:semver@5.1.0"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.5.2",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parse-json@2.2.0": {
      "error-ex": "npm:error-ex@1.3.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pinkie-promise@2.0.0": {
      "pinkie": "npm:pinkie@2.0.4"
    },
    "npm:popsicle-proxy-agent@1.0.0": {
      "http-proxy-agent": "npm:http-proxy-agent@1.0.0",
      "https-proxy-agent": "npm:https-proxy-agent@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:popsicle-retry@1.0.1": {
      "any-promise": "npm:any-promise@1.1.0"
    },
    "npm:popsicle@4.0.0": {
      "any-promise": "npm:any-promise@1.1.0",
      "arrify": "npm:arrify@1.0.1",
      "concat-stream": "npm:concat-stream@1.5.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "make-error-cause": "npm:make-error-cause@1.0.2",
      "methods": "npm:methods@1.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "xtend": "npm:xtend@4.0.1",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:process-nextick-args@1.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise-finally@2.1.0": {
      "any-promise": "npm:any-promise@1.1.0"
    },
    "npm:pseudomap@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.0",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rc@1.1.6": {
      "deep-extend": "npm:deep-extend@0.4.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ini": "npm:ini@1.3.4",
      "minimist": "npm:minimist@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-json-comments": "npm:strip-json-comments@1.0.4"
    },
    "npm:read-all-stream@3.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.0",
      "readable-stream": "npm:readable-stream@2.0.5",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.6",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:readline2@1.0.1": {
      "code-point-at": "npm:code-point-at@1.0.0",
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
      "mute-stream": "npm:mute-stream@0.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readline": "github:jspm/nodelibs-readline@0.1.0"
    },
    "npm:reflect-metadata@0.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:reflect-metadata@0.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:registry-url@3.0.3": {
      "rc": "npm:rc@1.1.6"
    },
    "npm:repeating@2.0.0": {
      "is-finite": "npm:is-finite@1.0.1"
    },
    "npm:request@2.69.0": {
      "aws-sign2": "npm:aws-sign2@0.6.0",
      "aws4": "npm:aws4@1.3.2",
      "bl": "npm:bl@1.0.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "caseless": "npm:caseless@0.11.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "extend": "npm:extend@3.0.0",
      "forever-agent": "npm:forever-agent@0.6.1",
      "form-data": "npm:form-data@1.0.0-rc3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "har-validator": "npm:har-validator@2.0.6",
      "hawk": "npm:hawk@3.1.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-signature": "npm:http-signature@1.1.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-typedarray": "npm:is-typedarray@1.0.0",
      "isstream": "npm:isstream@0.1.2",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
      "mime-types": "npm:mime-types@2.1.10",
      "node-uuid": "npm:node-uuid@1.4.7",
      "oauth-sign": "npm:oauth-sign@0.8.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@6.0.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.5",
      "tough-cookie": "npm:tough-cookie@2.2.1",
      "tunnel-agent": "npm:tunnel-agent@0.4.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:restore-cursor@1.0.1": {
      "exit-hook": "npm:exit-hook@1.1.1",
      "onetime": "npm:onetime@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rimraf@2.5.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@7.0.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:run-async@0.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "once": "npm:once@1.3.3"
    },
    "npm:rx-lite@3.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rxjs@5.0.0-beta.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:semver-diff@2.1.0": {
      "semver": "npm:semver@5.1.0"
    },
    "npm:semver@5.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:semver@5.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:slide@1.1.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sntp@1.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sort-keys@1.1.1": {
      "is-plain-obj": "npm:is-plain-obj@1.1.0"
    },
    "npm:sshpk@1.7.4": {
      "asn1": "npm:asn1@0.2.3",
      "assert-plus": "npm:assert-plus@0.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "dashdash": "npm:dashdash@1.13.0",
      "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
      "jodid25519": "npm:jodid25519@1.0.2",
      "jsbn": "npm:jsbn@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tweetnacl": "npm:tweetnacl@0.14.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string-width@1.0.1": {
      "code-point-at": "npm:code-point-at@1.0.0",
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
      "strip-ansi": "npm:strip-ansi@3.0.1"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:stringstream@0.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:strip-bom@2.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "is-utf8": "npm:is-utf8@0.2.1"
    },
    "npm:strip-json-comments@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:thenify@3.2.0": {
      "any-promise": "npm:any-promise@1.1.0",
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.2"
    },
    "npm:touch@1.0.0": {
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nopt": "npm:nopt@1.0.10",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:tough-cookie@2.2.1": {
      "net": "github:jspm/nodelibs-net@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:tunnel-agent@0.4.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:typescript@1.8.9": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:typings@0.6.10": {
      "any-promise": "npm:any-promise@1.1.0",
      "archy": "npm:archy@1.0.0",
      "array-uniq": "npm:array-uniq@1.0.2",
      "bluebird": "npm:bluebird@3.3.3",
      "chalk": "npm:chalk@1.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "columnify": "npm:columnify@1.5.4",
      "debug": "npm:debug@2.2.0",
      "detect-indent": "npm:detect-indent@4.0.0",
      "elegant-spinner": "npm:elegant-spinner@1.0.1",
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "has": "npm:has@1.0.1",
      "inquirer": "npm:inquirer@0.12.0",
      "insight": "npm:insight@0.7.0",
      "invariant": "npm:invariant@2.2.0",
      "is-absolute": "npm:is-absolute@0.2.3",
      "listify": "npm:listify@1.0.0",
      "lockfile": "npm:lockfile@1.0.1",
      "log-update": "npm:log-update@1.0.2",
      "make-error-cause": "npm:make-error-cause@1.0.2",
      "minimist": "npm:minimist@1.2.0",
      "mkdirp": "npm:mkdirp@0.5.1",
      "object.pick": "npm:object.pick@1.1.1",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "parse-json": "npm:parse-json@2.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "popsicle": "npm:popsicle@4.0.0",
      "popsicle-proxy-agent": "npm:popsicle-proxy-agent@1.0.0",
      "popsicle-retry": "npm:popsicle-retry@1.0.1",
      "popsicle-status": "npm:popsicle-status@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise-finally": "npm:promise-finally@2.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "rc": "npm:rc@1.1.6",
      "rimraf": "npm:rimraf@2.5.2",
      "sort-keys": "npm:sort-keys@1.1.1",
      "string-template": "npm:string-template@1.0.0",
      "strip-bom": "npm:strip-bom@2.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "thenify": "npm:thenify@3.2.0",
      "touch": "npm:touch@1.0.0",
      "typescript": "npm:typescript@1.8.7",
      "update-notifier": "npm:update-notifier@0.6.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "wordwrap": "npm:wordwrap@1.0.0",
      "xtend": "npm:xtend@4.0.1",
      "zip-object": "npm:zip-object@0.1.0"
    },
    "npm:update-notifier@0.6.1": {
      "boxen": "npm:boxen@0.3.1",
      "chalk": "npm:chalk@1.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "configstore": "npm:configstore@1.4.0",
      "is-npm": "npm:is-npm@1.0.0",
      "latest-version": "npm:latest-version@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "semver-diff": "npm:semver-diff@2.1.0"
    },
    "npm:url-parse-lax@1.0.0": {
      "prepend-http": "npm:prepend-http@1.0.3",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:uuid@2.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:verror@1.3.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "extsprintf": "npm:extsprintf@1.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:wcwidth@1.0.0": {
      "defaults": "npm:defaults@1.0.3"
    },
    "npm:widest-line@1.0.0": {
      "string-width": "npm:string-width@1.0.1"
    },
    "npm:win-release@1.1.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "semver": "npm:semver@5.1.0"
    },
    "npm:write-file-atomic@1.1.4": {
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "imurmurhash": "npm:imurmurhash@0.1.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "slide": "npm:slide@1.1.6"
    },
    "npm:xdg-basedir@2.0.0": {
      "os-homedir": "npm:os-homedir@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:zone.js@0.6.8": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
