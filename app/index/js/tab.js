apiready = function() {
	api.parseTapmode();
	var tab = new auiTab({
		element: document.getElementById("tab"),
	}, function(ret) {
		console.log(JSON.stringify(ret));
		// 点击tab，切换framegroup到对应的页面
		api.setFrameGroupIndex({
			name: 'frame_group1',
			index: ret.index - 1,
			scroll: true, //是否带动画效果
			reload: true
		});
	});
	// 左右滚动framegroup时，监听并执行回调
	api.addEventListener({
		name: 'frameGroupChangeEvent'
	}, function(ret, err) {
		if (ret) {
			//  alert( JSON.stringify( ret ) );
			// console.log("framegroup当前index:" + ret.value.id);
			tab.setActive(ret.value.id + 1);
		} else {
			alert(JSON.stringify(err));
		}
	});
	//切换底部导航栏时 (切换Frame时，openFrameGroup不显示)
	api.addEventListener({
		name: 'openFrameGroup1'
	}, function(ret, err) {
		openFrameGroup();
	});
};

function openFrameGroup() {
	// 计算y坐标
	// var tabHeight = $api.offset($api.dom('#aui-header')).h; //tab切换栏高度 
	api.openFrameGroup({
		name: 'frame_group1',
		scrollEnabled: true,
		rect: {
			x: 0,
			// y: tabHeight, 
			y: 0,
			w: 'auto',
			// h: api.frameHeight - parseInt(tabHeight)
			h: api.frameHeight
		},
		index: 0,
		frames: [{
			name: 'frame1_red',
			url: 'frame1_red.html',
			bgColor: '#fff'
		}, {
			name: 'frame1_green',
			url: 'frame1_green.html',
			bgColor: '#fff'
		}, {
			name: 'frame1_blue',
			url: 'frame1_blue.html',
			bgColor: '#fff'
		}]
	}, function(ret, err) {
		if (ret) {
			api.sendEvent({
				name: 'frameGroupChangeEvent',
				extra: {
					id: ret.index
				}
			});
		}
	});
};
