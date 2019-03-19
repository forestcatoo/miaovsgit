/*
思路：
1、布局：导航栏，用标签ol，区分后面的ul
2、aLi 简历索引，控制对应的aUl
*/

window.onload=function(){
        var oBar=document.getElementById('bar');
        var aLi=oBar.getElementsByTagName('li');
        var aUl=document.getElementsByTagName('ul');
        var timer1=null;
        var timer2=null;
        var that = 0;

        for(var i=0; i<aLi.length; i++){
            aLi[i].index = i;
            aUl[i].index =i;
            aLi[i].onmouseover = function(){
                 that = this.index;
                 for(var i = 0;i<aUl.length;i++){
                    aUl[i].style.display = "none";
                }
                clearTimeout(timer1)
                timer1 = setTimeout(show,200)
            };
            aUl[i].onmouseover =function(){
                clearTimeout(timer2)
            };
            aLi[i].onmouseout = function(){
                timer2 = setTimeout(hide,200)
            };
            aUl[i].onmouseout =function(){
                timer2 = setTimeout(hide,200)
            };
        }

        function show(){
            aUl[that].style.display = "block";
        }

        function hide(){
            aUl[that].style.display = "none";
        }
}