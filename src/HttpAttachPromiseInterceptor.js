module.exports = ['$q', function HttpAttachPromiseInterceptor($q){
  return {
    request: function(config){
      var deferred = $q.defer();
      config.timeout = config.timeout || deferred.promise
      config.cancel = config.cancel || deferred
      return config
    },
  }
}]
