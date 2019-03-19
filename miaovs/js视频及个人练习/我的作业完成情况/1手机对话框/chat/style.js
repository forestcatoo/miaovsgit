 window.onload = function (){
        var oDiv = document.getElementById('div1');
        var oImg = document.getElementById('img1');
        var oText = document.getElementById('btn1');
        var oBtn = document.getElementById('btn2');
        var arr = [ 'img/5.jpg' , 'img/6.jpg' ];
        var num = 1 ;

        oImg.onclick = function(){
                if (num) {
                        num=0;
                        oImg.src = arr[1];
                }
                else{
                        num=1;
                        oImg.src = arr[0];
                }
        }


        oBtn.onclick = function(){
                if (oText.value=="") {
                        alert("请输入数字")
                }else if(num==1){
                        oDiv.innerHTML = '<div class="left"><img src="img/5.jpg" alt=""><p>'+oText.value+'</p></div>'+oDiv.innerHTML;
                        oText.value = '';
                }else{
                        oDiv.innerHTML = '<div class="right"><img src="img/6.jpg" alt=""><p>'+oText.value+'</p></div>'+oDiv.innerHTML;
                        oText.value ='';
                }

                 
             
        }
        //  oBtn.onclick = function (){

        //     if( oText.value == '' ){
        //         alert('请输入');
        //     } else if( num ){
        //         oDiv.innerHTML = '<div class="left"><img src="img/5.jpg"><p>' + oText.value + '</p></div>' + oDiv.innerHTML;
        //         oText.value = '';
        //     } else {
        //         oDiv.innerHTML = '<div class="right"><img src="img/6.jpg"><p>' + oText.value + '</P></div>' + oDiv.innerHTML;
        //         oText.value = '';
        //     };
        // };
}