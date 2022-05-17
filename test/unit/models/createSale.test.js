const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../models/salesModel');
const connection = require('../../../models/connection');

describe('Creates a new saleId on the DB', () => {

  before(() => {
    const resultExec = [{ insertId: 1 }];
    sinon.stub(connection, 'execute').resolves(resultExec);
  })

  after(() => {
    connection.execute.restore();
  })
  
  describe('When its successfully created', async () => {
    it('Should return an id number', async () => {
      const result = await salesModel.create();
      console.log(result)
      expect(result).to.be.equal(1);
    })
  })
})