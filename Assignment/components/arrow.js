let names = ['Tom', 'Ivan', 'Jerry'];
let newNames=names.map(
    (str)=>{
        var a={name: str, length: str.length}
        return a;
    }
);


export function printNames(){
    console.log(newNames);
}