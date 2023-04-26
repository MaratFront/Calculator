let display=document.getElementById('screen');


const wipe=()=>{
    display.value='';
}//очищає поле вводу

const show=(n)=>{
    display.value+=n;
}

const calc=()=>{
    display.value=eval(display.value);
}
