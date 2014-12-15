/*
Create a ForagerBee class, in pseudoclassical style, with:
call the Bee superclass
set the prototype
set the constructor
an age property that is set to 10
a job property that is set to find pollen
a color property inhereted from bee that is set to yellow
a food property that is inhereted from grub
an eat method that is inhereted from grub
a canFly property that is set true
a treasureChest property that is set to an empty array []
a forrage method that allows the bee to add a treasure to the treasureChest
*/

var ForagerBee = function(){
    Bee.call(this);
    this.age = 10;
    this.job = "find pollen";
    this.canFly = true;
    this.treasureChest = [];
};
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.forage = function(treasure){
    this.treasureChest.push(treasure);
};


describe('ForagerBee class functionality', function() {

  verifyClass(ForagerBee).followsPattern('pseudoclassical', {}, false);

  beforeEach(function() {
    foragerBee = new ForagerBee();
  });

  /*  Overwrite methods from superclass  */

  it('should have an `age` property that is set to `10`', function() {
    expect(foragerBee.age).to.equal(10);
  });

  it('should have a `job` property that is set to `find pollen`', function() {
    expect(foragerBee.job).to.equal('find pollen');
  });

  /*  Inherited from superclass  */

  it('should have a `color` property inhereted from `bee` that is set to `yellow`', function() {
    expect(foragerBee.color).to.equal('yellow');
  });

  it('should have a `food` property that is inhereted from grub', function() {
    expect(foragerBee.food).to.equal('jelly');
  });

  it('should have an `eat` method that is inhereted from grub', function() {
    expect(foragerBee.eat).to.be.a('function');
  });

  /*  New methods and properties  */

  it('should have a `canFly` property that is set `true`', function() {
    expect(foragerBee.canFly).to.equal(true);
  });

  it('should have a `treasureChest` property that is set to an empty array `[]`', function() {
    expect(foragerBee.treasureChest).to.be.a('array');
  });

  it('should have a `forage` method that allows the bee to add a `treasure` to the `treasureChest`', function() {
    foragerBee.forage('pollen');
    foragerBee.forage('flowers');
    foragerBee.forage('gold');
    expect(foragerBee.treasureChest).to.have.length(3);
  });

});
