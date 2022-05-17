const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../models/salesModel');
const salesService = require('../../../services/salesService');

describe('Lists all the sales on the DB', () => {
  describe('When there are no sales', () => {
    
    const resultExec = [];

    beforeEach(() => {
      sinon.stub(salesModel, 'getAll').resolves(resultExec);
    })

    afterEach(() => {
      salesModel.getAll.restore();
    })

    it('Should return false', async () => {
      const result = await salesService.getAll();
      expect(result).to.be.equal(false);
    })
  });
  
  describe('When there are sales', () => {
    const resultExec = [
      {
        saleId: 1,
        date: '2022-05-17T12:47:03.000Z',
        productId: 1,
        quantity: 5
      }
    ];

    beforeEach(() => {
      sinon.stub(salesModel, 'getAll').resolves(resultExec);
    })

    afterEach(() => {
      salesModel.getAll.restore();
    })

    it('Should return an array', async () => {
      const result = await salesService.getAll();
      expect(result).to.be.an('array');
    })

    it('Should not be empty', async () => {
      const result = await salesService.getAll();
      expect(result).to.be.not.empty;
    })

    it('Should have objects inside', async () => {
      const [result] = await salesService.getAll();
      expect(result).to.be.an('object');
    })

    it('Should have the keys saleId, date, productId and quantity', async () =>{
      const [result] = await salesService.getAll();
      expect(result).to.be.includes.all.keys('saleId', 'date', 'productId', 'quantity');
    })
  })
});

