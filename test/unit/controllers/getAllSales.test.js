const { expect } = require('chai');
const sinon = require('sinon');
const salesController = require('../../../controllers/salesController');
const salesService = require('../../../services/salesService');

describe('Chamada do controller getAll', () => {
  describe('When there are no sales in the DB', () => {
    const response = {}
    const request = {}

    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(salesService, 'getAll').resolves(false);
    })

    afterEach(() => {
      salesService.getAll.restore();
    })

    it('Should be called status 404', async () => {
      await salesController.getAll(request, response);
      expect(response.status.calledWith(404)).to.be.equal(true);
    })
  })

  describe('When there are sales in the DB', () => {
    const response = {}
    const request = {}

    const mock = [{
      saleId: 1,
      date: '2022-05-17T19:21:18.000Z',
      productId: 1,
      quantity: 5,
    }];

    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(salesService, 'getAll').resolves(mock);
    })

    afterEach(() => {
      salesService.getAll.restore();
    })

    it('Should be called status 200', async () => {
      await salesController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    })

    it('Should call json with an array', async () => {
      await salesController.getAll(request,response);
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    })
  })
});