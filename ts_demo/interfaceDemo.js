var circle = {
    print: function () { return console.log("In Circle"); }
};
var employee = {
    print: function () { return console.log("In Employee "); }
};
function printAll(circle, employee) {
    circle.print();
    employee.print();
}
printAll(circle, employee);
