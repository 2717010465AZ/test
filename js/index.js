window.onload=function(){
		var index = 0, len;
        var ima=document.querySelector('.ima');
        var imgBox = document.querySelector('.ima').querySelectorAll('img');
        var left=document.querySelector('.left');
        var right=document.querySelector('.right');
        var lis=document.querySelector('.bottom').querySelectorAll('li');
        var navitems=document.querySelector('.navitems').querySelectorAll('li');
        var navitem=document.querySelectorAll('.nav_item');
        len = imgBox.length;
        imgBox[index].style.display = 'block';
        //左箭头点击
        left.onclick=function(){
        	index--;
        	for(var i=0; i<len; i++) {
                imgBox[i].style.display = 'none';
            }
        	if(index<0){
        		imgBox[len-1].style.display = 'block';
        		index=len-1;
        	}else{
        		imgBox[index].style.display = 'block';
        	}
        	
        }
        //右箭头点击
         right.onclick=function(){
        	index++;
        	for(var i=0; i<len; i++) {
                imgBox[i].style.display = 'none';
           }
        	if(index>len-1){
        		imgBox[0].style.display = 'block';
        		index=0;
        	}else{
        		imgBox[index].style.display = 'block';
        	}

        	
        }
         //切换图片函数
        function slideShow() {
            index ++;
            if(index >= len) index = 0;
            for(var i=0; i<len; i++) {
                imgBox[i].style.display = 'none';
            }
            imgBox[index].style.display = 'block';
        }
        
        // 定时器，间隔3s切换图片
        var timer=setInterval(slideShow, 3000);
        ima.onmouseover=function(){
        	clearInterval(timer);
        }
        function set(){
        	 timer=setInterval(slideShow, 3000);
        }
        ima.onmouseout=set;
        //下标鼠标经过
       for(var i=0;i<lis.length;i++){
       	lis[i].setAttribute('data-index',i);
       	   lis[i].onmouseover=function(){
       	   		  for(var j=0; j<len; j++) {
                imgBox[j].style.display = 'none';
              }
       	   		var index= this.getAttribute('data-index');
       	   		  imgBox[index].style.display='block';
       	   }
       }
       //导航条点击
		for(var i=0;i<navitems.length;i++){
			navitems[i].setAttribute('z-index',i);
			navitems[i].onclick=function(){
				for(var i=0;i<navitems.length;i++){
					navitem[i].style.display='none';
				}
				var index=this.getAttribute('z-index');
				navitem[index].style.display='block';
			}
		}
		//echarts数据展示
	var chartDom = document.getElementById('curve');
	var chartDom2= document.getElementById('pie_chart');
	var chartDom3= document.getElementById('bar_graph');
var myChart = echarts.init(chartDom);
var myChart2 = echarts.init(chartDom2);
var myChart3 = echarts.init(chartDom3);
var option;
var option2;
var option3;

option = {
    xAxis: {
        type: 'category',
        data: ['1/26', '1/27','1/26', '1/28','1/29', '1/30','2/01', '2/02','2/03', '2/04','2/05', '2/06','2/07', '2/08','2/09']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320, 932, 901, 934, 1290, 1330, 1320, 600,900],
        type: 'line',
        smooth: true
    }]
};
option2 = {
    title: {
        text: '饼状图数据展示',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 1048, name: 'Mon'},
                {value: 735, name: 'Tue'},
                {value: 580, name: 'Wed'},
                {value: 484, name: 'Thu'},
                {value: 300, name: 'Fri'},
                {value: 400, name: 'Sat'},
                {value: 200, name: 'Sun'},
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
option3 = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [1048,735,580,484,300,400,200],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
        }
    }]
};

myChart.setOption(option);
myChart2.setOption(option2);
myChart3.setOption(option3);
}
        	
