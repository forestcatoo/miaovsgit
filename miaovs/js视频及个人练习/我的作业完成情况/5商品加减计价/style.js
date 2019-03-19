window.onload = function(){

     var headline = document.getElementById("headline");
     var allSpan = headline.getElementsByTagName("span");
     var allUls = document.getElementsByTagName("ul");

     tab(allSpan,allUls,"onmouseover","active");
     for(var i=0;i<allUls.length;i++){
        var allLis = allUls[i].getElementsByTagName("li");
        fn1(i);
     }
     function fn1(n){
        for(var i=0;i<allLis.length;i++){
            allLis[i].onmouseover = function(){
                var ulLi =allUls[n].getElementsByTagName("li");
                for(var i=0;i<ulLi.length;i++){
                    var liDiv = ulLi[i].getElementsByTagName("div");
                    liDiv[0].style.display = "block";
                    liDiv[1].style.display = "none"
                }
                var thisDiv = this.getElementsByTagName("div");
                thisDiv[0].style.display = "none";
                thisDiv[1].style.display = "block"
            }
        }
     }
}


function tab(actionEle,forAction,evName,classNames){
    for(var i=0; i<actionEle.length;i++){
        actionEle[i].index = i;
        actionEle[i][evName] = function(){
            for(var i=0;i<actionEle.length;i++){
                forAction[i].style.display = "none";
                actionEle[i].className="";
            }
            this.className =classNames;
            forAction[this.index].style.display ="block";
        }
    }
}

