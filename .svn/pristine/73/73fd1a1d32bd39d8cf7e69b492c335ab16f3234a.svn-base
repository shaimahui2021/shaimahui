//首页切换frame
var umAnalytics;

apiready = function() {

	umAnalytics = api.require('umAnalytics');
	umAnalytics.init({
		debugMode:false
	}, function(ret, err) { 
		if (ret.status) {
			console.log('友盟初始化成功');
			onPageStart();
		} else {
			console.log('友盟初始化失败');
		}
	});

	var member = $api.getStorage('userId');
	if(member){
		getMessage();
		getMessageNum();
	}
	api.parseTapmode();
	api.setStatusBarStyle({
		style: 'dark',
		// dark //状态栏字体为黑色，适用于浅色背景
		// light //状态栏字体为白色，适用于深色背景
		color: '#ffffff'
	});
	openFrame(1);
	//	api.showFloatBox({
	//	    iconPath: 'widget://app/index/img/KF-T.png',
	//	    duration: 3000
	//	});
	api.addEventListener({
		name: 'keyback'
	}, function(ret, err) { 
		api.execScript({
		    frameName: 'frame3',
		    script: "closeVideo()"
		}); 
		api.execScript({
		    frameName: 'frame3',
		    script: "closeUILoading()"
		});
		//结束友盟统计
		onPageEnd();
		return false;
	});
}
var tab = new auiTab({
	element: document.getElementById("footer")
}, function(ret) {
	if (ret) {
		openFrame(ret.index);
	}
});

function onPageStart(){
	api.addEventListener({
        name:'viewappear'
    }, function(ret, err){
        umAnalytics.onPageStart({
            pageName: '首页',
        },function(ret,err){
             if(ret.status){
                 console.log('开始统计首页');
             }else{
                 console.log(JSON.stringify(err));
             }
        });
	});
	// iOS手势关闭页面时结束自定义页面统计
	api.addEventListener({
		name:'viewdisappear'
	},function(ret,err){
		console.log('页面关闭');
		onPageEnd();
	});
}

// 结束统计
function onPageEnd(){
    umAnalytics.onPageEnd({
		pageName: '首页'
    },function(ret,err){
		if(ret.status){
			console.log('结束统计首页');
		}else{
			console.log(JSON.stringify(err));
		}
	});
}

function openFrame(index) {
//	console.log("index======>"+index);
	if(index==4){ //如果 index是4 就刷新4的页面
		api.sendEvent({
		    name:'refreshIndex4',
		});	
	}
	if(index==1){ //如果 index是1 就刷新1的页面
		api.sendEvent({
	        name:'refreshIndex1',
		});
	}
	if(index==5){ //如果 index是5 就刷新5的页面
		api.sendEvent({
		    name:'refreshIndex5',
		});	
	}
	api.openFrame({
		name: 'frame' + index + '',
		url: 'frame' + index + '.html',
		bounces: true,
		bgColor: '#f5f5f5',
		rect: {
			x: 0,
			y: 0,
			w: api.winWidth,
			h: $api.dom('#main').offsetHeight
		}
	});
};

function tabSetActive(index) {
	tab.setActive(index);
}
//获取三个消息的ID值
function getMessage(){
		$cjy.ajax({
			url: index_url+'api/News/getMessageId',
			method: 'post',
			data:{}
		}, function(ret) {
			var messageData = ret.data;
//			console.log(JSON.stringify(ret));
			//将消息保存到  本地文件里 不然退出登入就没了
			//异步返回结果：
			api.readFile({
			    path: 'fs://33'+$api.getStorage('userId')+'.txt'
			}, function(ret, err) {
			    if (ret.status) {
			        var data = ret.data;
					var obj = JSON.parse(data);
					$api.setStorage('newestId', obj);
			    } else {
			       //否则就写文件
			       $api.setStorage('newestId', messageData);
			       api.writeFile({
					    path: 'fs://33'+$api.getStorage('userId')+'.txt',
					    data: JSON.stringify(messageData)
					}, function(ret, err) {
					    if (ret.status) {
					        //成功
//					        console.log("成功写入文件");
					    } else {
					
					    }
					}); 
			    }
			});
	});

}
 //获取未读消息的数量
function getMessageNum(){
//	console.log("-----getMessageNum-----");
	var newestId = $api.getStorage('newestId');
	if(newestId){
		$cjy.ajax({
			url: index_url+'api/News/getMessageNum',
			method: 'post',
			data:{
				"like":newestId['like'],
				"comment":newestId['comment'],
				"notice":newestId['notice'],
			}
		}, function(ret) {
			$api.setStorage('newestNum', ret.data);
//			console.log("getMessageNum=======>"+JSON.stringify(ret));	
			var num = ret.data.like + ret.data.comment + ret.data.notice;
			if(num>0){
			  $("#message").html("["+num+"]");
			}else{
			 $("#message").html("");
			}
		},function(err){
//			console.log("getMessageNum=======>"+JSON.stringify(err));	
		});
		
	}else{
		getMessage();
	}
	setTimeout("getMessageNum()",2000);
	
}












