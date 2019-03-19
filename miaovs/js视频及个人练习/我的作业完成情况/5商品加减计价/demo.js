 /*
                需求：
                    移入到某一项的时候，让当前这一样的标题隐藏，让图片显示出来

                    可以切换到不用栏目

                步骤：
                    1. 鼠标移入到每个栏目的标题上，切换

                    2. 移入到某个栏目中的某一项的时候
                        让当前这个栏目中其他的项，图片隐藏，标题显示
                        让当前这一样的标题隐藏，让图片显示出来

            */

            function tab(actionEle,forAction,evName,classNames){
                for( var i = 0; i < actionEle.length; i++ ){
                    actionEle[i].index = i;
                    actionEle[i][evName] = function (){
                        for( var i = 0; i < actionEle.length; i++ ){
                            forAction[i].style.display = "none";
                            actionEle[i].className = "";
                        }
                        this.className = classNames;
                        forAction[this.index].style.display = "block";
                    };      
                }   
            }

            window.onload = function(){
                var headline = document.getElementById("headline");
                var allSpan = headline.getElementsByTagName("span");

                var allUls = document.getElementsByTagName("ul");

                tab(allSpan,allUls,"onmouseover","active");

                //控制的是所有的li

                //获取每一个ul下所有的li，获取到每一个li下的div

                for( var i = 0; i < allUls.length; i++ ){
                    var allLis = allUls[i].getElementsByTagName("li");
                    fn(i);
                    
                }

                function fn(n){
                    for( var i = 0; i < allLis.length; i++ ){
                        allLis[i].onmouseover = function (){
                            //控制当前栏目下的li下的div

                            //当前这个li属于哪一个ul

                            var uls_li = allUls[n].getElementsByTagName("li");

                            for( var i = 0; i < uls_li.length; i++ ){
                                var li_div = uls_li[i].getElementsByTagName("div");
                                li_div[0].style.display = "block";
                                li_div[1].style.display = "none";
                            }


                            var divs = this.getElementsByTagName("div");
                            divs[0].style.display = "none";
                            divs[1].style.display = "block";
                        };
                    }   
                }


            };