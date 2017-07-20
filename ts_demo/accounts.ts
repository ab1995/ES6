class Account{
    
    accid:number;
    accname:string;
    balance:number;

    constructor(accid:number, accname:string, balance:number)
    {
        this.accid=accid;
        this.accname=accname;
        this.balance=balance;
    }

    getbalance():number{
        return this.balance;
    }
    

}

class SavingAccount extends Account{

    interest:number;

    constructor(accid:number, accname:string, balance:number, interest:number)
    {
        super(accid, accname, balance);
        this.interest=interest;
    }


    getbalance():number{
        return super.getbalance()+(this.interest/100)*super.getbalance();
    }

}

class CurrentAccount extends Account{

    cash_credit:number;
    constructor(accid:number, accname:string, balance:number, cash_credit:number)
    {
        super(accid, accname, balance);
        this.cash_credit=cash_credit;
    }


    getbalance(){
        return (super.getbalance()+this.cash_credit);
    }

}



function calCash(...acs)
{
    let totalCash=0;
    let i=0;

    for( i=0;i<acs.length;i++)
    {
        totalCash+=acs[i].getbalance();
    }

    return totalCash;
}

function getTotalCashInBank(){
    let s1:SavingAccount=new SavingAccount(1,"A",1000,1);
    let s2:SavingAccount=new SavingAccount(2,"B",2000,1);

    let c1:CurrentAccount=new CurrentAccount(1,"A",1000,100);
    let c2:CurrentAccount=new CurrentAccount(2,"B",2000,100);

    let totalCash=calCash(s1,s2,c1,c2);
    console.log(totalCash);
  
}

getTotalCashInBank();