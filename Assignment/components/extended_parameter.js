export function add(num1=0,num2=0)
{
    console.log(num1+num2);
}

export function userFriends(username,...friends)
{
    console.log(username, "\n Friend List" );
    friends.forEach(function(element) {
        console.log(element);
    })
}

export function printCapitalNames(n1,n2,n3,n4,n5)
{
    console.log(n1.toUpperCase());
    console.log(n2.toUpperCase());
    console.log(n3.toUpperCase());
    console.log(n4.toUpperCase());
    console.log(n5.toUpperCase());
}
