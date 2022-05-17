const { expect } = require('chai');
const sinon = require('sinon');
const productsController = require('../../../controllers/productsController');
const productsService = require('../../../services/productsService');

describe('Chamada do controller getAll', () => {
  describe('When there are no movies in the DB', () => {
    const response = {}
    const request = {}

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productsService, 'getAll').resolves(false);
    })

    after(() => {
      productsService.getAll.restore();
    })

    it('status called with 404', async () => {
      await productsController.getAll(request, response);
      expect(response.status.calledWith(404).to.be.equal(true));
    })
  })
});