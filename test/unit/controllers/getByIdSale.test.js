const { expect } = require('chai');
const sinon = require('sinon');
const salesController = require('../../../controllers/salesController');
const salesService = require('../../../services/salesService');

describe('Chamada do controller getById', () => {
  describe('When there is no specific sale in the DB', () => {
    const response = {}
    const request = {}

    beforeEach(() => {
      request.params = {id: 7}
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(salesService, 'getById').resolves(false);
    })

    afterEach(() => {
      salesService.getById.restore();
    })

    it('Should be called status 404', async () => {
      await salesController.getById(request, response);
      expect(response.status.calledWith(404)).to.be.equal(true);
    })
  })

  describe('When there are products in the DB', () => {
    const response = {}
    const request = {}

    const mock = [{
      date: '2022-05-17T19:25:55.000Z',
      productId: 1,
      quantity: 10,
    }];

    beforeEach(() => {
      request.params = {id: 1}
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(salesService, 'getById').resolves(mock);
    })

    afterEach(() => {
      salesService.getById.restore();
    })

    it('Should be called status 200', async () => {
      await salesController.getById(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    })

    it('Should call json with an array', async () => {
      await salesController.getById(request, response);
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    })
  })
});