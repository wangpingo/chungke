var $oMember=$('#member-list');
var $oMemberUl=$oMember.find('ul');
var $oBox=$('#member');
var $oScrollBar=$('#member-scroll-bar');
//����li������ǰ������ajax�Ѿ��������������ԾͲ���Ҫ
//for(var n=0;n<50;n++)
//{
//	var li=$(
//		"<li class='cell'><img src='/images/index/memberhead2.png'><span class='member-name'>AAAAA</span></li>"
//		).appendTo($oMemberUl);
//}

var scroll=function(content,box,scrollbar){
        var bigHeight = content.height();//��ȡ���������ݵĸ߶�
        var smallHeight = box.height();//��ȡ�����ĸ߶�
        var rate = smallHeight/bigHeight;//�������ݸ߶�����������߶ȵİٷֱ�
        var h = Math.floor(rate*smallHeight);//���ݰٷֱȼ�����������ĸ߶�
        scrollbar.height(h);//���ù������ĸ߶�
        var offset = box.offset();//��ȡ�����Ķ�λ����ֵ
        var offsetT = offset.top+1;//��ȡ�������붥���ľ���
        scrollbar.mousedown(function(e){//��������갴���¼�����
          var divOffsetT = scrollbar.offset().top;//��ȡ��������������
          var tempT = e.pageY-divOffsetT;//�����top�����ȥ�������ĸ߶Ȼ�ȡһ����ʱ�ĸ߶�
          function move(e){//�ƶ���������
            var newH = e.pageY-tempT-offsetT;//������ƶ���Y��߶�
            if(newH<0){//�ƶ���СֵΪ0
              newH=0;
            }else if(newH>(smallHeight-h)){//�ƶ������ֵΪ�����߶ȼ�ȥ�������ĸ߶�
              newH=smallHeight-h;
            }
            var rate2 = (newH+h)/smallHeight;//����������Ҫ�ƶ��İٷֱ�
            var contentH = Math.floor(bigHeight*rate2-smallHeight);//�����ƶ��ٷֱȼ��������ƶ��ĸ߶�
            content.css("top",-contentH+"px");//�����ݵ�Ҳ�ƶ�
            scrollbar.css("top",newH+"px");//���ù������ƶ�����
          }
          $("#idx-content-left").on("mousemove",move);//����ƶ��¼���
          $("#idx-content-left").mouseup(function(){//����ƶ�ʱ����
              $("#idx-content-left").off("mousemove",move);
          });
        });
      }
scroll($oMemberUl,$oBox,$oScrollBar);