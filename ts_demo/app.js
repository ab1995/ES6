var TypeScriptDemo = (function () {
    function TypeScriptDemo(msg) {
        this.msg = msg;
    }
    TypeScriptDemo.prototype.getMessage = function () {
        return this.msg;
    };
    return TypeScriptDemo;
}());
var obj = new TypeScriptDemo("Hello");
console.log(obj.getMessage());
