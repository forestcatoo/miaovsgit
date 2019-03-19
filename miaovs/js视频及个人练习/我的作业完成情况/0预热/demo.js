window.onload = function () {
    var oBtnSetup = document.getElementById("setup");
    var oBtnReset = document.getElementById("reset");
    var oBtnSubmit = document.getElementById("submit");
    var oDivDemo = document.getElementsByClassName("js-demo")[0];
    var oDialog = document.getElementsByClassName("dialog")[0];

    var arrChooseBGColor = document.getElementsByClassName("background-color")[0].getElementsByTagName("dd");
    var arrChooseWidth = document.getElementsByClassName("width")[0].getElementsByTagName("dd");
    var arrChooseHeight = document.getElementsByClassName("height")[0].getElementsByTagName("dd");
    for (var i = 0; i < arrChooseBGColor.length; i++) {
        switch (i) {
            case 0:
                arrChooseBGColor[i].onclick = function () {
                    oDivDemo.style.backgroundColor = 'red';
                };
                break;
            case 1:

                arrChooseBGColor[i].onclick = function () {
                    oDivDemo.style.backgroundColor = 'yellow';
                };
                break;
            case 2:
                arrChooseBGColor[i].onclick = function () {
                    oDivDemo.style.backgroundColor = 'blue';
                };
                break;
            default:
              // statements_def
              break;
        } 
    }
    for (var i = 0; i < arrChooseWidth.length; i++) {
        arrChooseWidth[i].onclick = function () {
             oDivDemo.style.width = this.innerText + "px";
        };
    }
    for (var i = 0; i < arrChooseHeight.length; i++) {
        arrChooseHeight[i].onclick = function () {
             oDivDemo.style.height = this.innerText + "px";
        }
    }
    oBtnSubmit.onclick = function () {
         oDialog.style.display = "none";
    }
    oBtnReset.onclick = function () {
         oDialog.style.display = "none";
         oDivDemo.style.width = '100px';
         oDivDemo.style.height = '100px';
         oDivDemo.style.backgroundColor = 'white';

    };
    oBtnSetup.onclick = function () {
        oDialog.style.display = "block";
    }

}