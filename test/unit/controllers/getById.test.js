const { expect } = require('chai');
const sinon = require('sinon');
const productsController = require('../../../controllers/productsController');
const productsService = require('../../../services/productsService');

describe.only('Chamada do controller getById', () => {
  describe('When there is no movie in the DB', () => {
    const response = {}
    const request = {}

    before(() => {
      request.params = {id: 7}
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productsService, 'getById').resolves(false);
    })

    after(() => {
      productsService.getById.restore();
    })

    it('Should be called status 404', async () => {
      await productsController.getById(request, response);
      expect(response.status.calledWith(404)).to.be.equal(true);
    })
  })

  describe('When there are movies in the DB', () => {
    const response = {}
    const request = {}

    const mock = {
      id: 1,
      name: 'produto',
      quantity: 5,
    }

    before(() => {
      request.params = {id: 1}
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productsService, 'getById').resolves(mock);
    })

    after(() => {
      productsService.getById.restore();
    })

    it('Should be called status 200', async () => {
      await productsController.getById(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    })

    it('Should call json with an object', async () => {
      await productsController.getAll(request,response);
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    })
  })
});