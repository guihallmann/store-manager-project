const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsService');

describe('Lists all the products on the DB', () => {
  describe('When there is products', () => {
    
    const resultExec = [];

    before(() => {
      sinon.stub(productsModel, 'getAll').resolves(resultExec);
    })

    after(() => {
      productsModel.getAll.restore();
    })

    it('Should return false', async () => {
      const result = await productsService.getAll();
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

    before(() => {
      sinon.stub(productsModel, 'getAll').resolves(resultExec);
    })

    after(() => {
      productsModel.getAll.restore();
    })

    it('Should return an array', async () => {
      const result = await productsService.getAll();
      expect(result).to.be.an('array');
    })

    it('Should not be empty', async () => {
      const result = await productsService.getAll();
      expect(result).to.be.not.empty;
    })

    it('Should have objects inside', async () => {
      const [result] = await productsService.getAll();
      expect(result).to.be.an('object');
    })

    it('Should have the keys id, name and quantity', async () =>{
      const [result] = await productsService.getAll();
      expect(result).to.be.includes.all.keys('id', 'name', 'quantity');
    })
  })
});