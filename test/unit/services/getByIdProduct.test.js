const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsService');

describe('Lists a specific product by its Id', () => {
  describe('When there is no product', () => {
    
    const resultExec = [];
    const id = 7

    before(() => {
      sinon.stub(productsModel, 'getById').resolves(resultExec);
    })

    after(() => {
      productsModel.getById.restore();
    })

    it('Should return false', async () => {
      const result = await productsService.getById(id);
      expect(result).to.be.equal(false);
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

    const id = 1;

    before(() => {
      sinon.stub(productsModel, 'getById').resolves(resultExec);
    })

    after(() => {
      productsModel.getById.restore();
    })

    it('Should return an object', async () => {
      const result = await productsService.getById(id);
      expect(result).to.be.an('object');
    })

    it('Should not be empty', async () => {
      const result = await productsService.getById(id);
      expect(result).to.be.not.empty;
    })

    it('Should have the keys id, name and quantity', async () =>{
      const result = await productsService.getById(id);
      expect(result).to.be.includes.all.keys('id', 'name', 'quantity');
    })
  })
});