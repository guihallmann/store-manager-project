const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../models/salesModel');
const salesService = require('../../../services/salesService');

describe('======================Lists a specific sale by its Id ====================', () => {
  describe('When there is no sale', () => {
    
    const resultExec = [];
    const id = 7

    before(() => {
      sinon.stub(salesModel, 'getById').resolves(resultExec);
    })

    after(() => {
      salesModel.getById.restore();
    })

    it('Should return false', async () => {
      const result = await salesService.getById(id);
      expect(result).to.be.equal(false);
    })
  });
  
  describe('When there is a specific product', () => {
    const resultExec = [[
      {
        date: '2022-05-17T11:27:08.000Z',
        productId: 1,
        quantity: 5
      }
    ]];

    const id = 1;

    before(() => {
      sinon.stub(salesModel, 'getById').resolves(resultExec);
    })

    after(() => {
      salesModel.getById.restore();
    })

    it('Should return an array', async () => {
      const result = await salesService.getById(id);
      expect(result).to.be.an('array');
    })

    it('Should not be empty', async () => {
      const result = await salesService.getById(id);
      expect(result).to.be.not.empty;
    })

    it('Should have the keys date, productId and quantity', async () =>{
      const [result] = await salesService.getById(id);
      expect(result).to.be.includes.all.keys('date', 'productId', 'quantity');
    })
  })
});