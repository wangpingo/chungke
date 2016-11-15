/**
 * Created by lizixiang on 16/5/26.
 */
$(document).ready(function(){
   $('#submit-reset').on('click',function(){
           $('#successAlert').show(1000);
                setTimeout(function(){
                    $('#successAlert').hide(1000);
                },3000);
           //$('#failAlert').show(1000);
           //setTimeout(function(){
           //    $('#failAlert').hide(1000);
           //},3000);
   });
});