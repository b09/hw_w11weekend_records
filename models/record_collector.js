const Collector = function (){
  this.funds = 0;
  this.records = [];
};

Collector.prototype.addFunds = function(funds){
  this.funds += funds;
};

Collector.prototype.removeFunds = function(funds){
  this.funds -= funds;
};

Collector.prototype.addRecord = function(record){
  this.records.push(record);
};

Collector.prototype.removeRecord = function(record){
  const indexOfRecord = this.records.indexOf(record);
  if (indexOfRecord == -1){
    return;
  };
  this.records.splice(indexOfRecord, 1);
};

Collector.prototype.findLPByTitle = function (recordName) {
  const foundRecord = this.records.find((record) => {
    return record.title === recordName;
  });
  return foundRecord;
}

// the above function did not work w/o fatarrow..why?

Collector.prototype.hasEnoughFunds = function (amountToCompare) {
  return this.funds >= amountToCompare ? true : false;
};

Collector.prototype.buy = function (record){
  if (this.hasEnoughFunds(record.price)) {
    this.funds -= record.price;
    this.addRecord(record);
  }
};

module.exports = Collector;
