
let ans="0";
let bill=0;


function MovePointer()
{

    let input=document.querySelector('.Inputs')
    input.scrollLeft=input.scrollWidth;
    
}

function LockApp(){

    //     document.querySelector('.CalDiv').style=`display:none`;

    //     document.querySelector('.AvaSoon').style=`display: none;`;

    //     document.querySelector('.lock-screen').classList.replace('animate-lock-screen', 'active');

    //     // document.querySelector('.application-menu').style=`visibility: visible;
    //     // display:block;`;
    //     document.querySelector('.application-menu').style=`visibility: hidden;
    // display:none;`;

    //     // document.querySelector('.bs1').innerHTML=`<img class="AppleImg" src="AppleBg.jpg" alt="" />`;

    // document.querySelector('.lock-screen').style.height = '100%';
    
    // // document.querySelector('.application-menu').classList.add('active');


    //     document.querySelector('.bs1').innerHTML=`
        
    //     <img class="AppleImg" src="AppleBg.jpg" alt="" />

    //     `;
    //     bill=0;




        document.querySelector('.lock-screen').classList.replace('animate-lock-screen', 'active');
    document.querySelector('.lock-screen').style.height = '100%';
    document.querySelector('.application-menu').classList.remove('active');


        document.querySelector('.bs1').innerHTML=`
        
        <img class="AppleImg" src="AppleBg.jpg" alt="" />

        `;

        bill=0;
        


}


function DateTime() {
    const currentDateTime = new Date();
    let hours = currentDateTime.getHours();

    let minutes = currentDateTime.getMinutes();
  
    if (minutes=== 0 || minutes===1 || minutes===2 || minutes===3 || minutes===4 || minutes===5 || minutes===6 || minutes===7 || minutes===8 || minutes===9)
            minutes="0"+minutes;

    if(hours>12)
    {
        hours=hours-12;
    }
    
    const Time =  hours + ":" + minutes;
    return Time;
  }
  

  setInterval(() => {

    document.querySelector('.Time').innerHTML=`${DateTime()}`;
    document.querySelector('.Time2').innerHTML=`${DateTime()}`;
    
  }, 1000);





function left () {
    document.querySelector('.applications').classList.toggle('active-slide');
    document.querySelector('.span1').classList.add('active-screen');
    document.querySelector('.span2').classList.remove('active-screen');
    
}
function right() {
    document.querySelector('.applications').classList.toggle('active-slide');
    document.querySelector('.span1').classList.remove('active-screen');
    document.querySelector('.span2').classList.add('active-screen');
}

const openMenu = document.querySelector('.open-button');
openMenu.addEventListener("click", OpenAppScreen);
function OpenAppScreen () {
    document.querySelector('.lock-screen').classList.replace('active', 'animate-lock-screen');
    document.querySelector('.lock-screen').style.height = '0';
    document.querySelector('.application-menu').classList.add('active');


        document.querySelector('.bs1').innerHTML=`
        
        <img class="AppleImg" src="Apple2Bg.jpg" alt="" />

        `;


}


function Calculator()
{

    // document.querySelector('.application-menu').style=`visibility: hidden;
    // display:none;`;

    document.querySelector('.application-menu').classList.remove('active');

    document.querySelector('.bs1').innerHTML=``;

    document.querySelector('.iphone-frame').style=`background-color:black`;

    document.querySelector('.CalDiv').style=`display:block`;


    document.querySelector('.lock-screen').classList.remove('active');
    // document.querySelector('.lock-screen').style.height = '100%';
    


}

function Coming()
{

    // document.querySelector('.application-menu').style=`visibility: hidden;
    // display:none;`;

    document.querySelector('.application-menu').classList.remove('active');

    document.querySelector('.AvaSoon').style=`display: flex;
    justify-content: center;
    align-items: center;`;


}





function Backs()
{

    if(bill>0)
    {

        document.querySelector('.CalDiv').style=`display:none`;

        document.querySelector('.AvaSoon').style=`display: none;`;

        

        // document.querySelector('.application-menu').style=`visibility: visible;
        // display:block;`;

        document.querySelector('.application-menu').classList.add('active');

        document.querySelector('.bs1').innerHTML=`<img class="AppleImg" src="Apple2Bg.jpg" alt="" />`;

    }

}

function Checker()
{
    bill=bill+1;
    

}


document.querySelector('.Inputs').value=`${ans}`;


function One()
{
    ans=document.querySelector('.Inputs').value;
    if(ans==="0" || ans==="Error")
        ans=1
    else
    ans=ans+"1";
    document.querySelector('.Inputs').value=`${ans}`;

    MovePointer();
}

function Two()
{
    ans=document.querySelector('.Inputs').value;
    if(ans==="0" || ans==="Error")
        ans=2
    else
    ans=ans+"2";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Thr()
{
    ans=document.querySelector('.Inputs').value;
    if(ans==="0" || ans==="Error")
        ans=3
    else
    ans=ans+"3";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Fou()
{
    ans=document.querySelector('.Inputs').value;
    if(ans==="0" || ans==="Error")
        ans=4
    else
    ans=ans+"4";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Fiv()
{
    ans=document.querySelector('.Inputs').value;
    if(ans==="0" || ans==="Error")
        ans=5
    else
    ans=ans+"5";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Six()
{
    ans=document.querySelector('.Inputs').value;
    if(ans==="0" || ans==="Error")
        ans=6
    else
    ans=ans+"6";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Sev()
{
    ans=document.querySelector('.Inputs').value;
    if(ans==="0" || ans==="Error")
        ans=7
    else
    ans=ans+"7";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Eig()
{
    ans=document.querySelector('.Inputs').value;
    if(ans==="0" || ans==="Error")
        ans=8
    else
    ans=ans+"8";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Nin()
{
    ans=document.querySelector('.Inputs').value;
    if(ans==="0" || ans==="Error")
        ans=9
    else
    ans=ans+"9";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Zer()
{
    ans=document.querySelector('.Inputs').value;
    if(ans==="0" || ans==="Error")
        ans="0";
    else
    ans=ans+"0";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function AllClear()
{
    ans=document.querySelector('.Inputs').value;
    ans="0";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Back(){
    ans=document.querySelector('.Inputs').value;
    if (ans.length>0)
    ans=ans.slice(0,-1)
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();

}

function Dot()
{
    ans=document.querySelector('.Inputs').value;
    ans=ans+".";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Plus()
{
    ans=document.querySelector('.Inputs').value;
    ans=ans+"+";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Minus()
{
    ans=document.querySelector('.Inputs').value;
    ans=ans+"-";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Mul()
{
    ans=document.querySelector('.Inputs').value;
    ans=ans+"*";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Div()
{
    ans=document.querySelector('.Inputs').value;
    ans=ans+"/";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Mod()
{
    ans=document.querySelector('.Inputs').value;
    ans=ans+"%";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}
function Equal(){
    try{
        ans=document.querySelector('.Inputs').value;
        console.log(ans);
        ans=String(eval(ans));
        document.querySelector('.Inputs').value=`${ans}`;
    }
    catch(e){
        ans="Error";
        document.querySelector('.Inputs').value=`${ans}`;
    }
    MovePointer();

}


document.addEventListener("keydown",e=>{

    
    if(e.key==="Enter")
        Equal();

    if(e.key==="=")
        Equal();


})
