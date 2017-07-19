let armStrong = { 
    [Symbol.iterator]() { 
        let currNumber=parseInt(407);

        return{
            next(){
                while(true){
                    
                    let temp=currNumber;
                    let sumOfCubeofDigits=0;

                    while (temp > 0) {
                        sumOfCubeofDigits+=Math.pow((temp % 10),3);
                        temp = parseInt(temp / 10);  
                    }
                    
                    if(sumOfCubeofDigits===currNumber)
                    {   
                        temp=currNumber;
                        currNumber++;
                        return{done: false, value: temp}
                     }
                    currNumber++;
                }
            }
        }
    }
}

export function getNextArmstrongNumber()
{
    let itr=new armStrong[Symbol.iterator]();
    console.log(itr.next());
    console.log(itr.next());
    console.log(itr.next());

}