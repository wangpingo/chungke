var $oMember=$('#member-list');
var $oMemberUl=$oMember.find('ul');
var $oBox=$('#member');
var $oScrollBar=$('#member-scroll-bar');
//由于li内容在前端利用ajax已经遍历出来，所以就不需要
//for(var n=0;n<50;n++)
//{
//	var li=$(
//		"<li class='cell'><img src='/images/index/memberhead2.png'><span class='member-name'>AAAAA</span></li>"
//		).appendTo($oMemberUl);
//}

var scroll=function(content,box,scrollbar){
        var bigHeight = content.height();//获取被滚动内容的高度
        var smallHeight = box.height();//获取容器的高度
        var rate = smallHeight/bigHeight;//计算内容高度相对于容器高度的百分比
        var h = Math.floor(rate*smallHeight);//根据百分比计算出滚动条的高度
        scrollbar.height(h);//设置滚动条的高度
        var offset = box.offset();//获取容器的定位变量值
        var offsetT = offset.top+1;//获取容器距离顶部的距离
        scrollbar.mousedown(function(e){//滚动条鼠标按下事件定义
          var divOffsetT = scrollbar.offset().top;//获取滚动条顶部距离
          var tempT = e.pageY-divOffsetT;//用鼠标top距离减去滚动条的高度获取一个临时的高度
          function move(e){//移动函数定义
            var newH = e.pageY-tempT-offsetT;//计算出移动的Y轴高度
            if(newH<0){//移动最小值为0
              newH=0;
            }else if(newH>(smallHeight-h)){//移动的最大值为容器高度减去滚动条的高度
              newH=smallHeight-h;
            }
            var rate2 = (newH+h)/smallHeight;//计算内容需要移动的百分比
            var contentH = Math.floor(bigHeight*rate2-smallHeight);//根据移动百分比计算内容移动的高度
            content.css("top",-contentH+"px");//让内容的也移动
            scrollbar.css("top",newH+"px");//设置滚动的移动内容
          }
          $("#idx-content-left").on("mousemove",move);//鼠标移动事件绑定
          $("#idx-content-left").mouseup(function(){//鼠标移动时间解绑
              $("#idx-content-left").off("mousemove",move);
          });
        });
      }
scroll($oMemberUl,$oBox,$oScrollBar);