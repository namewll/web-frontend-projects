// 将图片存储在数组中
let image=['lbt1.jpg','lbt2.jpg','lbt3.jpg','lbt4.jpg']
// 将数组的下标作为图片的序号
let index=0

//自动轮播
function load(){
    // 设置图片的路径
    document.getElementById('lbt_img').src='img/'+image[index]
    update()
    // 0%4 1%4 2%4 3%4 4%4 5%4 6%4 7%4 8%4 .........
    //  0   1   2   3   0   1   2   3   0  .........
    // 用求余数的方式模拟循环
    index=(index+1)%image.length;
    console.log(index)

    // 定时器  自动执行函数 1000毫秒=1秒
    setTimeout('load()',1000)
}

// 圆点跟随图片轮播
function update(){
    // 通过类名获取div对象
    let up=document.getElementsByClassName('lbt_div')
    // 通过循环让圆点同步图片的轮换
    for(let i=0;i<up.length;i++){
        let d=up[i]
        if(i==index){
            d.style.backgroundColor='gold'
        }else{
            d.style.backgroundColor='grey'
        }
    }
}

//手动选择
function change(num){
    // 让参数限制在数组下标之间
    if(num>=0 && num<image.length){
        // 关联图片序号与参数值
        index=num
        // 修改图片路径
        document.getElementById('lbt_img').src='img/'+image[index]
        // 更新圆点状态
        update()
    }
}

// 在窗口加载完成后轮播
window.onload=load
