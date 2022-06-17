define([], function () {
    var t = function (t) {
        this.meta = t, this.lostSoldiers = new BigNumber(0), this.soldiers = new BigNumber(0), this.weapons = new BigNumber(0), this.attackCountryId = null, this.state = "resting", this.actionYears = t.restingYears
    }
    return t.prototype.getAttack = function (t) {
        return this.soldiers.multiply(this.meta.soldierStrength).multiply(t.getBonuses().war.soldiersStrength).add(this.weapons.multiply(this.getWeaponsEffectiveness()).multiply(this.meta.weaponStrength).multiply(t.getBonuses().war.weaponStrength)).multiply(t.getMutation("attack").getBonus())
    }, t.prototype.getWeaponsEffectiveness = function () {
        return this.soldiers.divide(this.soldiers.add(this.lostSoldiers))
    }, t.prototype.getSoldiers = function () {
        return this.soldiers
    }, t.prototype.setLostSoldiers = function (t) {
        this.lostSoldiers = new BigNumber(t)
    }, t.prototype.getLostSoldiers = function () {
        return this.lostSoldiers
    }, t.prototype.setSoldiers = function (t) {
        this.soldiers = new BigNumber(t)
    }, t.prototype.subtractSoldiers = function (t) {
        this.soldiers = this.soldiers.subtract(t)
    }, t.prototype.getWeapons = function () {
        return this.weapons
    }, t.prototype.setWeapons = function (t) {
        this.weapons = new BigNumber(t)
    }, t.prototype.getAttackCountryId = function () {
        return this.attackCountryId
    }, t.prototype.setAttackCountryId = function (t) {
        this.attackCountryId = t
    }, t.prototype.getState = function () {
        return this.state
    }, t.prototype.setState = function (t) {
        this.state = t
    }, t.prototype.getActionYears = function () {
        return this.actionYears
    }, t.prototype.setActionYears = function (t) {
        this.actionYears = t
    }, t.prototype.subtractActionYears = function () {
        this.actionYears--, this.actionYears < 0 && (this.actionYears = 0)
    }, t.prototype.getSaveData = function () {
        return [this.soldiers.toString(), this.weapons.toString(), this.attackCountryId, this.state, this.actionYears, this.lostSoldiers]
    }, t.prototype.updateFromSaveData = function (t) {
        this.soldiers = new BigNumber(t[0]), this.weapons = new BigNumber(t[1]), this.attackCountryId = t[2], this.state = t[3], this.actionYears = t[4], this.lostSoldiers = t[5] ? new BigNumber(t[5]) : new BigNumber(0)
    }, t
})
