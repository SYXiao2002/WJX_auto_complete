//西浦居家健康监测自动补全-JavaScript
//For XJTLUer only
//Author: Fuse

alert("此脚本仅为自动填充、方便填写为目的，您仍需真实填报相关信息!");
openCityBox(document.getElementById('q3'),3,event,3);
window.parent.setCityBox('浙江省-杭州市-滨江区');                //¡在这修改自己的省-市-县!
window.parent.PDF_close();

var radio_choosing = [1,3,6,13], checkbox_choosing = [6,7];   
var list1 = $('input[type="checkbox"]');
for (var i = 0; i < checkbox_choosing.length; i++) {
         list1[checkbox_choosing[i]].checked = true;
         list1[checkbox_choosing[i]].click();
    };

var list = $('input[type="radio"]');    
for(var i = 0; i < radio_choosing.length; i++){
    list[radio_choosing[i]].checked = true;
    list[radio_choosing[i]].click();
};

window.scrollTo(0,document.body.scrollHeight);