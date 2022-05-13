const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../models/productsModel');
const connection = require('../../../models/connection');

describe('Updates a product on the DB', () => {
  const name = 'Produto';
  const quantity = 10;
  const id = 7;
  const resultExec = [[{
    id,
    name,
    quantity
  }]]

  before(() => {
    sinon.stub(connection, 'execute').resolves(resultExec);
  })

  after(() => {
    connection.execute.restore();
  })

  it('Should return an object with the id, name and quantity keys', async () => {
    const result = await productsModel.update(id, name, quantity);
    expect(result).to.be.an('object');
    expect(result).to.be.includes.all.keys('id', 'name', 'quantity');
  })

})