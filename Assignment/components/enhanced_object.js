var Order={
    id:100,
    title:"laptop",
    price:30000,

    printOrder:function(){
        console.log(this);
    },

    getPrice:function(){
        console.log(this.price);
    }

};


    export function testenhanced(){
         var newObj=Object.assign({},Order);
         console.log(newObj);
         console.log(newObj.getPrice());
    }