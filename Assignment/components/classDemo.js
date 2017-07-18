class Account{

    constructor(id, name, balance)
    {
        this._id=id;
        this._name=name;
        this._balance=balance;
    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    get balance(){
        return this._balance;
    }
    

}

class SavingAccount extends Account{

    constructor(id, name, balance, interest)
    {
        super(id, name, balance);
        this._interest=interest;
    }

    get id(){
        return super.id;
    }

    get name(){
        return super.name;
    }

    get balance(){
        return super.balance+(this._interest/100)*super.balance;
    }

}

class CurrentAccount extends Account{

    constructor(id, name, balance, cash_credit)
    {
        super(id, name, balance);
        this._cash_credit=cash_credit;
    }

    get id(){
        return super.id;
    }

    get name(){
        return super.name;
    }

    get balance(){
        return (super.balance+this._cash_credit);
    }

}




function calCash(...acs)
{
    var totalCash=0;
    var i=0;

    for( i=0;i<acs.length;i++)
    {
        totalCash+=acs[i].balance;
    }

    return totalCash;
}

export function getTotalCashInBank(){
    var s1=new SavingAccount(1,"A",1000,1);
    var s2=new SavingAccount(2,"B",2000,1);

    var c1=new CurrentAccount(1,"A",1000,100);
    var c2=new CurrentAccount(2,"B",2000,100);

    var totalCash=calCash(s1,s2,c1,c2);
    console.log(totalCash);
  
}