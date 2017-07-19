export function testChatRoom()
{
    let u1MessageSet = [];
    u1MessageSet.push("Hi");
    u1MessageSet.push("Hello");

    let u2MessageSet=[];
    u2MessageSet.push("Hi");
    u2MessageSet.push("Hello");

    let u3MessageSet=[];
    u3MessageSet.push("Hi");
    u3MessageSet.push("Hello");

    let u4MessageSet =[];
    u4MessageSet.push("Hi");
    u4MessageSet.push("Hello");

    let u5MessageSet=[];
    u5MessageSet.push("Hi");
    u5MessageSet.push("Hello");

    let u6MessageSet=[];    
    u6MessageSet.push("Hi");
    u6MessageSet.push("Hello");

    let chatRoomMap=new Map();
    chatRoomMap.set('c1',[u1MessageSet, u2MessageSet, u3MessageSet]);
    chatRoomMap.set('c2',[u4MessageSet,u5MessageSet,u6MessageSet]);

    for (let [key, value] of chatRoomMap.entries())
    { 
        console.log(key); 
        for(let userMessage of value)
            console.log(userMessage);
    }

    //console.log(chatRoomMap.get('c1'));
}