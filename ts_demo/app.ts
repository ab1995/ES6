class TypeScriptDemo{
    msg: String;

    constructor(msg:String)
    {
        this.msg=msg;
    }

    getMessage():String
    {
        return this.msg;
    }
}

let obj = new TypeScriptDemo("Hello");
console.log(obj.getMessage());