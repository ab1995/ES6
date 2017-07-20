interface IPrintable {

     print: ()=>void 
}

let circle: IPrintable = {
      print:()=>console.log("In Circle")
}; 

let employee: IPrintable = {
      print:()=>console.log("In Employee ")
}; 

function printAll(circle, employee)
{
    circle.print();
    employee.print();
}

printAll(circle, employee);