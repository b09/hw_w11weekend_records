const assert = require('assert');
const store = require('../record_store.js');
const record = require('../record.js');

describe('Store', function(){
  let store;

  beforeEach(function(){
    store = new Store('The Store');
    record1 = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    record2 = new Record({
      title: 'Sgt. Peppers',
      artist: 'The Beatles',
      genre: 'rock',
      price: 1200
    });
  });

  it('should have a name', function(){
    const actual = store.name;
    assert.strictEqual(actual, 'The Store');
  });

  it('should start with no funds', function(){
    const actual = store.funds;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add funds', function(){
    store.addFunds(3000);
    const actual = store.funds;
    assert.strictEqual(actual, 3000);
  });

  it('should start with an empty collection of records', function(){
    const actual = store.records.lenth;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a record to its stock', function(){
    store.addRecord(record1);
    const actual = store.records.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to report if it has a record', function(){
    const actual = store.checkIfStocked(record1);
    assert.strictEqual(actual, false);
    store.addRecord(record1);
    assert.strictEqual(actual, true);
  });

  it('should be able to remove a record from stock', function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.removeRecord(record1);
    const actual = store.records;
    assert.strictEqual(actual, record2);
  });

  it('should not be able to sell a record if it does not have a record', function(){

  });

  it('should be able to match all records that match a given genre', function(){

  });

  it('should be able to match all records by title', function(){

  });

  it('should match all records by an artist', function(){

  });

  it('should be able to match all records on multiple attributes', function(){
    
  });



});
