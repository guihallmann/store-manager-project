const { expect } = require('chai');
const sinon = require('sinon');
const productsController = require('../../../controllers/productsController');
const productsService = require('../../../services/productsService');

describe('Chamada do controller create', () => {
  describe('When creates a product', () => {
    const response = {}
    const request = {}
    
    const mock = {
      id: 1,
      name: 'produto',
      quantity: 5,
    }

    beforeEach(() => {
      request.body = {name: 'produto', quantity: 5}
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productsService, 'create').resolves(mock);
    })

    afterEach(() => {
      productsService.create.restore();
    })

    it('Should be called status 201', async () => {
      await productsController.create(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
    })
  });
});