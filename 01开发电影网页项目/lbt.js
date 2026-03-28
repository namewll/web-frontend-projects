index=0
function load_image(){
    imgs=['./img/lbt1.jpg','./img/lbt2.jpg','./img/lbt3.jpg','./img/lbt4.jpg']
    img=document.getElementById('img')
    img.src=imgs[index]
    update(index)
    index=(index+1)%(imgs.length)
    setTimeout("load_image()",1000);
}
window.onload=load_image

function update(index){
    let divs=document.getElementsByClassName('div_icon')
    for(let i=0;i<divs.length;i++){
        if(i===index){
            divs[i].style.backgroundColor='yellow'
        }
        else{
            divs[i].style.backgroundColor='gray'
        }
    }
}

function change(index){
    console.log(index);
    imgs=['./img/lbt1.jpg','./img/lbt2.jpg','./img/lbt3.jpg','./img/lbt4.jpg']
    document.getElementById('img').src=imgs[index]
    console.log(document.getElementById('img'));
    update(index)
}