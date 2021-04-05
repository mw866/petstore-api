const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const app = require('../index')

const expect = chai.expect
describe('E2E tests', function () {
  it('GET /docs', function (done) {
    chai.request(app)
      .get('/docs/')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done()
      })
  })

  it('GET /store/inventory', function (done) {
    chai.request(app)
      .get('/store/inventory')
      .set('api_key', 'special_key')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done()
      })
  })
})
