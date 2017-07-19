let prev = Symbol('previousNo');
let curr = Symbol('CurrentNo');

class Fibonacci{

    constructor(n0,n1)
    {

        this[prev]=n0;
        this[curr]=n1;
    }

    next(){
        console.log("prev = ",this[prev]," curr = ",this[curr]);

        [this[prev], this[curr]] = [this[curr], this[prev] + this[curr]];
        return this[curr]; 
    }
}

export function getFibonacciNumeber()
{
    var obj=new Fibonacci(0,1);
    console.log(obj.next());
    console.log(obj.next());
    console.log(obj.next());
    console.log(obj.next());
    console.log(obj.next());
}