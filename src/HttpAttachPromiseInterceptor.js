module.exports = ['$q', function HttpAttachPromiseInterceptor($q){
  return {
    request: function(config){
      var deferred = $q.defer();
      config.timeout = config.timeout || deferred.promise
      return config
    },
  }
}]
