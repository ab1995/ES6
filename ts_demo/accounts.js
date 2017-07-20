var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = (function () {
    function Account(accid, accname, balance) {
        this.accid = accid;
        this.accname = accname;
        this.balance = balance;
    }
    Account.prototype.getbalance = function () {
        return this.balance;
    };
    return Account;
}());
var SavingAccount = (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accid, accname, balance, interest) {
        var _this = _super.call(this, accid, accname, balance) || this;
        _this.interest = interest;
        return _this;
    }
    SavingAccount.prototype.getbalance = function () {
        return _super.prototype.getbalance.call(this) + (this.interest / 100) * _super.prototype.getbalance.call(this);
    };
    return SavingAccount;
}(Account));
var CurrentAccount = (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(accid, accname, balance, cash_credit) {
        var _this = _super.call(this, accid, accname, balance) || this;
        _this.cash_credit = cash_credit;
        return _this;
    }
    CurrentAccount.prototype.getbalance = function () {
        return (_super.prototype.getbalance.call(this) + this.cash_credit);
    };
    return CurrentAccount;
}(Account));
function calCash() {
    var acs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        acs[_i] = arguments[_i];
    }
    var totalCash = 0;
    var i = 0;
    for (i = 0; i < acs.length; i++) {
        totalCash += acs[i].getbalance();
    }
    return totalCash;
}
function getTotalCashInBank() {
    var s1 = new SavingAccount(1, "A", 1000, 1);
    var s2 = new SavingAccount(2, "B", 2000, 1);
    var c1 = new CurrentAccount(1, "A", 1000, 100);
    var c2 = new CurrentAccount(2, "B", 2000, 100);
    var totalCash = calCash(s1, s2, c1, c2);
    console.log(totalCash);
}
getTotalCashInBank();
