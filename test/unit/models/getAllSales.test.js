const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../models/salesModel');
const connection = require('../../../models/connection');

describe('Lists all the sales on the DB', () => {
  describe('When there are no products', () => {
    
    const resultExec = [[]];

    before(() => {
      sinon.stub(connection, 'execute').resolves(resultExec);
    })

    after(() => {
      connection.execute.restore();
    })

    it('Should return an array', async () => {
      const result = await salesModel.getAll();
      expect(result).to.be.an('array');
    })

    it('Should be empty', async () => {
      const result = await salesModel.getAll();
      expect(result).to.be.empty;
    })
  });
  
  describe('When there are sales on the DB', () => {
    const resultExec = [[
      {
        saleId: 1,
        date: '2022-05-17T11:19:49.000Z',
        productId: 1,
        quantity: 5
      }
    ]];

    before(() => {
      sinon.stub(connection, 'execute').resolves(resultExec);
    })

    after(() => {
      connection.execute.restore();
    })

    it('Should return an array', async () => {
      const result = await salesModel.getAll();
      expect(result).to.be.an('array');
    })

    it('Should not be empty', async () => {
      const result = await salesModel.getAll();
      expect(result).to.be.not.empty;
    })

    it('Should have objects inside', async () => {
      const [result] = await salesModel.getAll();
      expect(result).to.be.an('object');
    })

    it('Should have the keys saleId, date, productId and quantity', async () =>{
      const [result] = await salesModel.getAll();
      expect(result).to.be.includes.all.keys('saleId', 'date', 'productId', 'quantity');
    })
  })
});