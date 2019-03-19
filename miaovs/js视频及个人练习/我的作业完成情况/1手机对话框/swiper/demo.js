window.onload = function (){
        var oBtn1 = document.getElementById('btn1');
        var oBtn2 = document.getElementById('btn2');
        var oP1 = document.getElementById('p1');
        var oPrev = document.getElementById('prev');
        var oNext = document.getElementById('next');
        var oText = document.getElementById('text');
        var oSpan = document.getElementById('span1');
        var oImg = document.getElementById('img1');

        var arrUrl = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
        var arrText = ['文字一', '文字二', '文字三', '文字四'];
        var num = 0;

        //初始化状态
        function fnTab (){
            oText.innerHTML = arrText[num];
            oSpan.innerHTML = num + 1 + '/' + arrUrl.length;
            oImg.src = arrUrl[num];
        };
        fnTab();


        oBtn1.onclick = function (){
            oBtn1.style.background = 'blue';
            oPrev.onclick = function (){
            num --;
            if( num == -1 ){
                num = arrText.length - 1;
            };
            fnTab();
        };

        oNext.onclick = function (){
            num ++;
            if( num == arrText.length ){
                num = 0;
            };
            fnTab();
        };
        };
        oBtn1.onmouseout = function (){
            oBtn1.style.background = 'none';
        };

        oBtn2.onclick = function (){
            oBtn2.style.background = 'blue';
            oP1.innerHTML = '图片只能到最后一张或第一张切换';
            oPrev.onclick = function (){
                if( num > -1 ){
                    num --;
                }
            if( num == -1 ){
                alert('这已经是第一张了，不能再切换了。。');
            } else{
                fnTab();
            };
        };

        oNext.onclick = function (){
            if( num < 4 ){
                num ++;
            } 
            if( num == arrText.length ){
                alert('这是最后一张了。。');
            } else{
                fnTab();
            };
        };
        };
        oBtn2.onmouseout = function (){
            oBtn2.style.background = 'none';
        };
    };