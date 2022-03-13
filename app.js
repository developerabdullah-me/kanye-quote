const lodeQut=()=>{
    fetch('https://api.kanye.rest/')
    .then(res=> res.json())
    .then(data=> qut(data))

}

//  lodeQut()

const qut=(quots)=>{
    console.log(quots);
const quo=document.getElementById('quote');

quo.textContent=''
for(const quot in quots ){
    const div=document.createElement('div')
    div.innerHTML=`
    <p>${quots.quote}</p> `
    quo.appendChild(div)
}

 
}