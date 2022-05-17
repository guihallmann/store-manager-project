const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../models/productsModel');
const connection = require('../../../models/connection');

describe('Inserts a new product on the DB', () => {
  const name = 'Martelo do Thor';
  const quantity = 10;

  beforeEach(() => {
    const resultExec = [{ insertId: 1 }];
    sinon.stub(connection, 'execute').resolves(resultExec);
  })

  afterEach(() => {
    connection.execute.restore();
  })
  
  describe('When its successfully added', async () => {
    it('Should return an object', async () => {
      const result = await productsModel.create(name, quantity);
      expect(result).to.be.an('object');
    })

    it('Should have and Id property', async () => {
      const result = await productsModel.create(name, quantity);
      expect(result).to.have.a.property('id');
    })

  })
})