require('angular/angular.min')
require('angular-mocks')
require('.')
describe('HttpAttachPromiseInterceptor', function () {
  var HttpAttachPromiseInterceptor, request
  beforeEach(angular.mock.module('angular-http-attach-promise'))
  beforeEach(inject(function ($injector) {
    HttpAttachPromiseInterceptor = $injector.get('HttpAttachPromiseInterceptor')
    request = {config: {}}
  }))

  it('sets loadingRequest property', function () {
    request = HttpAttachPromiseInterceptor.request(request)
    expect( request ).to.have.property('timeout')
    expect( request ).to.have.property('cancel')
  })
})
