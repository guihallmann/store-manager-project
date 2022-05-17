const { expect } = require('chai');
const sinon = require('sinon');
const productsController = require('../../../controllers/productsController');
const productsService = require('../../../services/productsService');

describe('Chamada do controller getAll', () => {
  describe('When there are no products in the DB', () => {
    const response = {}
    const request = {}

    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productsService, 'getAll').resolves(false);
    })

    afterEach(() => {
      productsService.getAll.restore();
    })

    it('Should be called status 404', async () => {
      await productsController.getAll(request, response);
      expect(response.status.calledWith(404)).to.be.equal(true);
    })
  })

  describe('When there are products in the DB', () => {
    const response = {}
    const request = {}

    const mock = [{
      id: 1,
      name: 'produto',
      quantity: 10
    }];

    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productsService, 'getAll').resolves(mock);
    })

    afterEach(() => {
      productsService.getAll.restore();
    })

    it('Should be called status 200', async () => {
      await productsController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    })

    it('Should call json with an array', async () => {
      await productsController.getAll(request,response);
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    })
  })
});