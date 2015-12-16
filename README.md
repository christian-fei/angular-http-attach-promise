angular-http-attach-promise
=======================

[![Build Status](https://travis-ci.org/christian-fei/angular-http-attach-promise.svg)](https://travis-ci.org/christian-fei/angular-http-attach-promise)

```
npm install --save angular-http-attach-promise
```

# Usage

Simply add it to your Http interceptors. A Promise will be will be attached at each request (if it doesn't specify the timeout field):

```
  /* in your angular.config phase */
  ...
  $httpProvider.interceptors.push('HttpAttachPromiseInterceptor')
  ...

```

And in your application code add some service that handles pending requests,
ideally with `$http.pendingRequests`:

```
function RequestHandler($http) {
  this.cancelPending = function(){
    angular.forEach($http.pendingRequests, function(request) {
      if (request.cancel && request.timeout) {
        request.cancel.resolve()
      }
    })
  }
}
```



# UMD

This is an [UMD](https://github.com/umdjs/umd) package.

# License

Do whatever you please with this.
