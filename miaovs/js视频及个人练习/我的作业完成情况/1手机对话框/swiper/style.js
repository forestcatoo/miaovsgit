window.onload = function (){
        var oBtn1 = document.getElementById('btn1');
        var oBtn2 = document.getElementById('btn2');
        var oP1 = document.getElementById('p1');
        var oPrev = document.getElementById('prev');
        var oNext = document.getElementById('next');
        var oText = document.getElementById('text');
        var oSpan = document.getElementById('span1');
        var oImg = document.getElementById('img1');
        var isCircle = true;

        var arrUrl = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
        var arrText = ['文字一', '文字二', '文字三', '文字四'];
        var num = 0;

        function fn(){
                oImg.src=arrUrl[num];
                oText.innerHTML = arrText[num];
                oSpan.innerHTML = (num+1)+'/'+arrUrl.length;
        }
        fn()
        oBtn1.onclick = function(){
                isCircle = true;
                oP1.innerHTML ="图片可以从最后一张跳到第一张循环切换";
        }
        oBtn2.onclick = function(){
                isCircle = false;
                oP1.innerHTML ="图片只能到达最大最小";
        }

        oPrev.onclick = function(){
                if (isCircle) {
                        if (num>0) {
                                num--;
                                fn()
                        }
                        else{
                                num=arrUrl.length-1;
                                fn()
                        }
                }       
                else{
                        if (num>0) {
                                num--;
                                fn();
                        }
                        else{
                               alert("这是最前一张了")
                        }
                } 
        }
        oNext.onclick = function(){
                if (isCircle) {
                          if (num<arrUrl.length-1) {
                                num ++;
                                fn()
                        }
                        else{
                                num=0;
                                fn()
                        }
                }
                else{
                         if (num<arrUrl.length-1) {
                                num ++;
                                fn()
                        }
                        else{
                                alert("这是最后一张了")
                        }
                }
        }

}