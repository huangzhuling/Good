

var sliderData = {
    "imageList": [
        { "itemId": "first", "itemClassName": "firstanimation", "aHref": "#", "imgSrc": "images/img_1.jpg", "imgAlt": "美洲狮", "h1Content": "美洲狮" },
        { "itemId": "second", "itemClassName": "secondanimation", "aHref": "#", "imgSrc": "images/img_2.jpg", "imgAlt": "雄狮", "h1Content": "雄狮" },
        { "itemId": "third", "itemClassName": "thirdanimation", "aHref": "#", "imgSrc": "images/img_3.jpg", "imgAlt": "天行者", "h1Content": "天行者" },
        { "itemId": "fourth", "itemClassName": "fourthanimation", "aHref": "#", "imgSrc": "images/img_4.jpg", "imgAlt": "怒吼", "h1Content": "怒吼" },
        { "itemId": "fifth", "itemClassName": "fifthanimation", "aHref": "#", "imgSrc": "images/img_5.jpg", "imgAlt": "晒太阳", "h1Content": "晒太阳暖洋洋" }
    ]
}
   //动态添加轮播图列表区的列表元素
   function addImageList(imageList) {    
    var imageListNode = document.querySelector('#slider ul');    
    console.log(imageListNode);
    var str = '';
    //一条li的格式
    // <li id="first" class="firstanimation">
    // <a href="#">
    //     <img src="images/img_1.jpg" alt="Cougar">
    // </a>
    // <div class="tooltip">
    //     <h1>Cougar</h1>
    // </div>
    // </li>
    for (var i in imageList) {
        str += '<li id="' + imageList[i].itemId + '" class="' +imageList[i].itemClassName+'">'+
                '<a href="' + imageList[i].aHref + '#">' +
                     '<img src="' + imageList[i].imgSrc + '" alt="' +imageList[i].imgAlt+'">'+
                 '</a>'+
                 ' <div class="tooltip">'+
                 '<h1>'+imageList[i].h1Content+'</h1>'+
                 '</div>'+
                 '</li>';
    }
    //追加行内元素
    imageListNode.innerHTML += str;
}
//函数调用
addImageList(sliderData.imageList);;
