window.onload = function(){
    // var oSet = document.getElementById("setup"); //点击出现弹层
    // var oReset = document.getElementById("reset"); //点击关闭弹层并且重置样式
    // var oSubmit = document.getElementById("submit"); //点击关闭弹层并且重置样式

     var oBtnSetup = document.getElementById("setup");
    var oBtnReset = document.getElementById("reset");
    var oBtnSubmit = document.getElementById("submit");
    var oDivDemo = document.getElementsByClassName("js-demo")[0];
    var oDialog = document.getElementsByClassName("dialog")[0];

    var arrChooseBGColor = document.getElementsByClassName("background-color")[0].getElementsByTagName("dd");
    var arrChooseWidth = document.getElementsByClassName("width")[0].getElementsByTagName("dd");
    var arrChooseHeight = document.getElementsByClassName("height")[0].getElementsByTagName("dd");
    
    var arrColor = ["red","yellow","blue"];
    var arrWidth= [200,300,400];
    var arrHeight = [200,300,400];

    var oW = oDivDemo.style.width;
    var oH = oDivDemo.style.height;
    var oBg =oDivDemo.style.background;

    oBtnSetup.onclick = function(){
        oDialog.style.display = "block";
    }
    oBtnSubmit.onclick = function(){
        oDialog.style.display = "";
    }
    oBtnReset.onclick = function(){
        oDialog.style.display = "";
        oDivDemo.style.width = oW;
        oDivDemo.style.height = oH;
        oDivDemo.style.background = oBg;
    }
    for(var i =0;i<arrChooseWidth.length; i++){
        arrChooseWidth[i].index = i;
        arrChooseWidth[i].onclick = function(){
            oDivDemo.style.width = arrWidth[this.index]+'px';
        }
    }

    for(var i =0;i<arrChooseHeight.length; i++){
        arrChooseHeight[i].index = i;
        arrChooseHeight[i].onclick = function(){
            oDivDemo.style.height = arrHeight[this.index]+'px';
        }
    }

    for(var i =0;i<arrChooseBGColor.length; i++){
        arrChooseBGColor[i].index = i;
        arrChooseBGColor[i].onclick = function(){
            oDivDemo.style.background = arrColor[this.index];
        }
    }

    function change(obj,arr,pro){
        for(var i=0; i<obj.length;i++){
            obj[i].index =i ;
            obj[i].onclick = function(){
                if (pro=='width'||pro=='height') {
                    oDivDemo.style[pro] = arr[this.index]+'px';
                }
                oDivDemo.style[pro] = arr[this.index];
            }
        }
    }

    change(arrChooseBGColor,arrColor,'backgroundColor');
    change(arrChooseWidth,arrWidth,'width');


}