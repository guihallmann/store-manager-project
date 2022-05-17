const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../models/salesModel');
const connection = require('../../../models/connection');

describe('Lists a specific sale by its Id', () => {
  describe('When there is no sale', () => {
    const resultExec = [[]];
    const id = 7

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(resultExec);
    })

    afterEach(() => {
      connection.execute.restore();
    })

    it('Should return an array', async () => {
      const result = await salesModel.getById(id);
      expect(result).to.be.an('array');
    })

    it('Should be empty', async () => {
      const result = await salesModel.getById(id);
      expect(result).to.be.empty;
    })
  })
  
  describe('When there is a specific sale', async () => {
    const resultExec = [[
      {
        date: '2022-05-17T11:27:08.000Z',
        productId: 1,
        quantity: 5
      }
    ]];

    const id = 1;

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(resultExec);
    })

    afterEach(() => {
      connection.execute.restore();
    })

    it('Should return an array', async () => {
      const result = await salesModel.getById(id);
      expect(result).to.be.an('array');
    })

    it('Should not be empty', async () => {
      const result = await salesModel.getById(id);
      expect(result).to.be.not.empty;
    })

    it('Should have objects inside', async () => {
      const [result] = await salesModel.getById(id);
      expect(result).to.be.an('object');
    })

    it('Should have the keys date, productId and quantity', async () =>{
      const [result] = await salesModel.getById(id);
      expect(result).to.be.includes.all.keys('date', 'productId', 'quantity');
    })
  })
})