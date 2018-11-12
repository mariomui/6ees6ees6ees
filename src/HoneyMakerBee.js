class HoneyMakerBee extends Bee {
    // TODO..
    constructor() {
        super();
        this.age = 10;
        this.job = 'make honey';
        this.honeyPot = 0;
    }
};

HoneyMakerBee.prototype.makeHoney = function() {
    this.honeyPot++;
}
HoneyMakerBee.prototype.giveHoney = function() {
    this.honeyPot--;
}