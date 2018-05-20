const Record = require('../record.js');
const assert = require('assert');
const Collector = require('../record_collector.js');

describe('Collector', function(){
  let collector;

  beforeEach(function (){
    collector = new Collector();
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


    it('should be able to add funds', function () {
      collector.addFunds(2000);
      const actual = collector.funds;
      assert.strictEqual(actual, 2000);
    });

    it('should be able to remove funds', function () {
      collector.addFunds(2000);
      collector.removeFunds(1200);
      assert.strictEqual(collector.funds, 800);
    });

    it('should start with an empty collection of records', function () {
      assert.strictEqual(collector.records.length, 0);
    });

    it('should be able to add a record to its collection', function () {
      collector.addRecord(record1);
      assert.strictEqual(collector.records.length, 1);

    });

    it('should be able to find a record by title', function () {
      collector.addRecord(record2);
      const actual = collector.findLPByTitle('Sgt. Peppers');
      assert.strictEqual(actual, record2);

    });

    it('should be able to remove a record from its collection', function () {
      collector.addRecord(record1);
      collector.addRecord(record2);
      collector.removeRecord(record1);
      const actual = collector.records.length;
      assert.strictEqual(actual, 1);
    });

    it('has enough funds', function () {
      // const actual = collector.hasEnoughFunds(10);
      // assert.strictEqual(actual, false);
      collector.addFunds(2000);
      const actual = collector.hasEnoughFunds(10);
      assert.strictEqual(actual, true);
    });

    it('should be able to buy a record if it has enough funds', function () {
      collector.addFunds(2000);
      collector.buy(record1);
      assert.strictEqual(collector.records.length, 1)
    });

    xit('should be able to sell a record if it has the record', function () {
      collector.addRecord(record1);
      collector.addRecord(record2);
      collecter.
    });




});
