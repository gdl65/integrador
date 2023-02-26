


$( document ).ready(function() {
    var arr = ['bg_1.jpg'];
    
    var i = 0;
    setInterval(function(){
        if(i == arr.length - 1){
            i = 0;
        }else{
            i++;
        }
        var img = 'url(../assets/images/'+arr[i]+')';
        $(".full-bg").css('background-image',img); 
     
    }, 4000)

});



