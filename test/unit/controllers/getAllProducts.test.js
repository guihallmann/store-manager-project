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
      sinon.stub(productsService, 'getAll').resolves({ message: 'Product not found'});
    })

    after(() => {
      productsService.getAll.restore();
    })

    it('é retornado o metodo "status" passando o codigo 404', async () => {
      await productsController.getAll(request, response);
      console.log(response.status)
    })
  })
});