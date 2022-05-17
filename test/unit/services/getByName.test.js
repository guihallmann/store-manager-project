const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsService');

describe('Lists a specific product by its name', () => {
  describe('When there is no product', () => {
    
    const resultExec = [];
    const name = 'xablablau'

    before(() => {
      sinon.stub(productsModel, 'getByName').resolves(resultExec);
    })

    after(() => {
      productsModel.getByName.restore();
    })

    it('Should return true', async () => {
      const result = await productsService.getByName(name);
      expect(result).to.be.equal(true);
    })
  });
  
  describe('When there is a specific product', () => {
    const resultExec = [
      {
        id: 1,
        name: 'Martelo do Thor',
        quantity: 10
      }
    ];
    const name = 'Martelo do Thor'

    before(() => {
      sinon.stub(productsModel, 'getByName').resolves(resultExec);
    })

    after(() => {
      productsModel.getByName.restore();
    })

    it('Should return false', async () => {
      const result = await productsService.getByName(name);
      expect(result).to.be.equal(false);
    })
  })
});