function* armStrong()  { 
    try{
        let currNumber=1;

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

                        let res=yield temp;
                        if(res==="reset")
                        {
                            currNumber=0;
                        }
                     }
                    currNumber++;
                }       
    }
    catch(e)
    {
        console.log(e);
    }
}

export function getArmstrongNumber()
{
    let itr=new armStrong();
    console.log(itr.next());
    console.log(itr.next());
    console.log(itr.next());
    console.log(itr.next("reset"));
    console.log(itr.next());
    if(itr.next().value>100)
    {
       itr.throw(new Error('Number above 100'));
    }
    console.log(itr.next());

}