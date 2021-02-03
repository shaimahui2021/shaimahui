// var ip='122.51.34.176';
var ip='192.168.3.8/shejiaos';
var serverip='http://'+ip+'/public/index.php/';
var imgip='http://'+ip+'/';
var rootpath='http://'+ip+'/';
var domain='websoket.8nb16.com';//websoket.8nb16.com:80->122.51.34.176::8282
function tpl(tpl,ret){
	ret.imgip=imgip;
	var html = template(tpl, ret);
	return html;
}
function toString(json) {
	return JSON.stringify(json);
}
function closeWin() {
	api.closeWin({});
}
function closeFrame(){
	api.closeFrame();
}
function closeToRoot() {
	api.closeToWin({
		name: 'root'
	});
}
function onFocus(element) {
	$api.addCls(element.parentNode, "focus");
	$api.dom(element, 'input').focus();
}
function openWin() {
	
	var name = arguments[0] ? arguments[0] : ""; 
	api.openWin({
		name: '' + name + '',
		url: '' + name + '.html',
		bounces: false,
		delay: 0,
		reload:true,
		pageParam: arguments,
		animation:{
            type:'fade'
        }
	});
}
function closeToWin() {
	var name = arguments[0] ? arguments[0] : ""; 
	api.closeToWin({
		name: '' + name + '',
		animation:{
            type:'fade'
        }
	});
}
function openWin2() {
	var name = arguments[0] ? arguments[0] : "";
	api.openWin({
		name: '' + name + '',
		url: '' + name + '.html',
		bounces: false,
		delay: 0,
		pageParam: arguments,
		animation:{
            type:'fade'
        },
		slidBackEnabled: false
	});
}
function openWin3() {
	var name = arguments[0] ? arguments[0] : "";
	var userInfo = $api.getStorage('userInfo');
	is_free = userInfo.is_free;
	if(is_free == 1) {
		openWin('widget://html/login/html/login_win')
		return;
	}
	api.openWin({
		name: '' + name + '',
		url: '' + name + '.html',
		bounces: false,
		delay: 0,
		pageParam: arguments,
		softInputMode:'resize',
		animation:{
            type:'fade'
        }
	});
}

function openFrame() {
	var pageParam = api.pageParam;
	var str = pageParam[0];
	if(!str) {
		str = arguments[0];
	}
	var name = str.substring(0, str.length - 4);
	var arr = name.split('/');
	name = arr[arr.length - 1];
	api.parseTapmode();
	var header = $api.byId('aui-header');
	var headerPos = $api.offset(header);
	var body_h = $api.offset($api.dom('body')).h;
	api.openFrame({
		name: name,
		url: name + '_fra.html', 
		bounces: true,
		bgColor:"#f5f5f5",
		allowEdit:true,
		rect: {
			x: 0,
			y: headerPos.h,
			w: 'auto',
			h: 'auto'
		},
		pageParam: pageParam,
	})
}
function openDialog() {
	var name = arguments[0] ? arguments[0] : "";
	api.openFrame({
	    name: name,
	    historyGestureEnabled:true,
	    url: name+".html",
	    animation:{
            type:'none',
            subType:'from_left'
        },
	    bgColor:'rgba(0,0,0,0.3)',
	    rect: {
	        x: 0,
	        y: 0,
	        w: 'auto',
	        h: 'auto'
	    },
		pageParam: arguments,
	});
}
function openDialog2() {
	var name = arguments[0] ? arguments[0] : "";
	api.openFrame({
	    name: name,
	    historyGestureEnabled:true,
	    url: name+".html",
	    animation:{
            type:'none',
            subType:'from_left'
        },
	    bgColor:'rgba(0,0,0,0.3)',
	    rect: {
	        x: 0,
	        y: 0,
	        w: 'auto',
	        h: 'auto'
			// ,marginBottom: 51
	    },
		pageParam: arguments,
	});
}
function openUrl(url){
	api.parseTapmode();
	var pageParam = api.pageParam;
	var headerPos = $api.offset($api.byId('aui-header'));
	api.openFrame({
		name: 'urlname',
		url: ''+url+'',
		bounces: true,
		bgColor:"#f5f5f5",
		rect: {
			x: 0,
			y: headerPos.h,
			w: 'auto',
			h: 'auto'
		},
		pageParam: pageParam,
	})
}
function isEmptyObject(e) {
	var t;
	for(t in e)
		return !1;
	return !0
}
function isCardNo(card) {
	var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	if(reg.test(card) === false) {
		toast("身份证输入不合法");
		return false;
	}
}
function toast(msg) {
	api.toast({
		msg: msg,
		duration: 1000,
		 location: 'middle',
		 global:true
	});
}

function toast1(msg) {
	api.toast({
		msg: msg,
		duration: 1000
	});
}
function toast2(msg) {
	api.toast({
		msg: msg,
		duration: 2000
	});
}
function openfixed(url){
	api.openFrame({
	    name: url,
	    url: url+".html",
	    bgColor:'rgba(0,0,0,0)',
	    rect: {
	        x: 0,
	        y: 0,
	        w: 'auto',
	        h: 'auto'
	    },
	});
}
function formTime(utcTime) {
	var nowTime = new Date().getTime() / 1000;
	var str = "";
	if((nowTime - utcTime) < 1800) {
		str = parseInt((nowTime - utcTime) / 60) + '分钟前';
	} else {
		var nowDate = new Date(utcTime * 1000);
		str = (nowDate.getMonth() + 1) + '月' + nowDate.getDate() + '日' +
			nowDate.getHours() + ':' + nowDate.getMinutes();
	}
	return str;
}
function dateFormat(date,format){
	date = new Date(date*1000);

    var map = {
        "m": date.getMonth() + 1,
        "d": date.getDate(),
        "h": date.getHours(),
        "i": date.getMinutes(),
        "s": date.getSeconds(),
        "q": Math.floor((date.getMonth() + 3) / 3), 
        "S": date.getMilliseconds()
    };
    format = format.replace(/([ymdhisqS])+/g, function(all, t){
        var v = map[t];
        if(v !== undefined){
            if(all.length > 1){
                v = '0' + v;
                v = v.substr(v.length-2);
            }
            return v;
        }
        else if(t === 'y'){
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
    });
    return format;
}
function numFixed(num, fixnum) {
	var changenum = (parseInt(num * Math.pow(10, fixnum) + 0.5) / Math.pow(10, fixnum)).toString();
	var index = changenum.indexOf(".");
	if(index < 0 && fixnum > 0) {
		changenum = changenum + ".";
		for(i = 0; i < fixnum; i++) {
			changenum = changenum + "0";
		}
	} else {
		index = changenum.length - index;
		for(i = 0; i < (fixnum - index) + 1; i++) {
			changenum = changenum + "0";
		}
	}
	return changenum;
}
function clockon() {
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth();
	var date = now.getDate();
	var day = now.getDay();
	var hour = now.getHours();
	var minu = now.getMinutes();
	var sec = now.getSeconds();
	var week;
	month = month + 1;
	if(month < 10) month = "0" + month;
	if(date < 10) date = "0" + date;
	if(hour < 10) hour = "0" + hour;
	if(minu < 10) minu = "0" + minu;
	if(sec < 10) sec = "0" + sec;
	var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
	week = arr_week[day];
	var time = "";
	time = year + "年" + month + "月" + date + "日" + " " + hour + ":" + minu + ":" + sec + " " + week;
	return time;
}
function data2() {
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth();
	var date = now.getDate();

	month = month + 1;
	if(month < 10) month = "0" + month;
	if(date < 10) date = "0" + date;
	var time = "";
	time = year + "-" + month + "-" + date;
	return time;

}
function getTime() {
	var nowDate = new Date();
	var year = nowDate.getFullYear();
	var month = nowDate.getMonth() + 1;
	var day = nowDate.getDate();
	var hours = nowDate.getHours();
	var minute = nowDate.getMinutes();
	return year + "年" + month + "月" + day + "日 " + hours + ":" + minute;
}
function getDistance(lat, lon) {
	lat = parseFloat(lat);
	lon = parseFloat(lon);
	var now_lon = parseFloat($api.getStorage('lon'));
	var now_lat = parseFloat($api.getStorage('lat'));
	var a = Math.abs(now_lat - lat);
	var b = Math.abs(now_lon - lon);
	var c = Math.sqrt(a * a + b * b);
	c = numFixed(c / 0.009009, 2);
	return c;
}
function showDefault() {
	$api.css($api.byId("default"), "display:block");
	setTimeout(function() {
		$api.css($api.byId("default"), "display:none");
	}, 2000)
}
function fmoney(s, n){
	var symbol='';
	if(Number(s)<=0){
		s=Math.abs(s);
		if(s<=0){
			s=0;
		}else{
			symbol='-';
		}
		
	}
	n = n > 0 && n <= 20 ? n : 2;
	s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
	var l = s.split(".")[0].split("").reverse(),
		r = s.split(".")[1];
	t = "";
	for(i = 0; i < l.length; i++) {
		t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
	}
	return symbol+t.split("").reverse().join("") + "." + r;
}
function ArrayToJson(array) {
	var json = "{";
	var i = 0;
	for(var key in array) {
		json += '"' + key + '":"' + array[key] + '",';
	}
	json = json.substring(0, json.lastIndexOf(','));
	json += "}";
	return $api.strToJson(json);
}

var timeout = false; 
function time() {
	if(timeout) return;
	Method();
	setTimeout(time, 1000); 
}
function isphoneNumber(str) {
    var myreg=/^[1][3,4,5,7,8,9][0-9]{9}$/;
    if (!myreg.test(str)) {
        return false;
    } else {
        return true;
    }
}
function isPositiveNum(s) { 
	var re = /^[0-9]*[1-9][0-9]*$/;
	return re.test(s)
}

function js(ret) {
	return JSON.stringify(ret)
}
function rand(max, min) {
	return parseInt(Math.random() * (max - min + 1) + min, 10);
}

var connectionType = 'unknown';
var connectionListener = function() {
	connectionType = api.connectionType;
	api.addEventListener({
		name: 'offline'
	}, function(ret, err) {
		connectionType = 'none';
	});
	api.addEventListener({
		name: 'online'
	}, function(ret, err) {
		connectionType = ret.connectionType;
	});
};
function pshow(title) {
	if(!title) {
		var title = '数据加载中...';
	}
	api.showProgress({
		style: 'default',
		animationType: 'fade',
		title: title,
		text: '请稍等...',
		modal: true
	});
}

function phide() {
	api.hideProgress();
}
function a() {
	var str='';
	for (var i = 0; i < arguments.length; i++) {
		str+='【参数'+(i+1)+'】：'+JSON.stringify(arguments[i]);
	}
	alert(str)
}
var objectArraySort = function (keyName) {
 return function (objectN, objectM) {
  var valueN = objectN[keyName]
  var valueM = objectM[keyName]
  if (valueN < valueM) return 1
  else if (valueN > valueM) return -1
  else return 0
 }
}

var totalData = 0;
function load(number) {
	api.setRefreshHeaderInfo({
		visible: true,
		loadingImg: 'widget://image/refresh.png',
		bgColor: '#ccc',
		textColor: '#fff',
		textDown: '下拉刷新...',
		textUp: '松开刷新...',
		showTime: true
	}, function(ret, err) {
		loadData(1, true);
		api.refreshHeaderLoadDone();
	});
	api.addEventListener({
		name: 'scrolltobottom',
		extra: {
			threshold: 0
		}
	}, function(ret, err) {
		var _page = parseInt($api.getStorage("page"));
		if(totalData == number) {
			loadData(_page + 1, false);
			$api.setStorage("page", _page + 1);
		} else {
			toast('已经到底了');
		}
	});
}
function phoneShow(number) {
	var reg = /^(\d{3})\d+(\d{4})$/;
	var length = number.length;
	var str = '$1';
	for(var i = 0; i < length - 8; i++) {
		str += '*';
	}
	str += '$2';
	number = number.replace(reg, str);
	return number;
}
function encode(data){
	var deviceId = api.deviceId;
	var timestamp = Date.parse(new Date())/1000;
	var token=hex_md5('1'+deviceId+timestamp);
	data.deviceId=deviceId;
	data.timestamp=timestamp;
	data.token=token;
	if(data.member_id){
		var memberinfo=$api.getStorage('memberinfo');
		data.thispassword=memberinfo.password;
	}
	return data;
}
function choose(arr, size) {
    var allResult = [];
    (function (arr, size, result) {
        var arrLen = arr.length;
        if (size > arrLen) {
            return;
        }
        if (size == arrLen) {
            allResult.push([].concat(result, arr))
        } else {
            for (var i = 0 ; i < arrLen; i++) {
                var newResult = [].concat(result);
                newResult.push(arr[i]);

                if (size == 1) {
                    allResult.push(newResult);
                } else {
                    var newArr = [].concat(arr);
                    newArr.splice(0, i + 1);
                    arguments.callee(newArr, size - 1, newResult);
                }
            }
        }
    })(arr, size, []);
    return allResult;
}
function queue(arr, size,isreturnlength) {
    if (size > arr.length) { return; }
    var allResult = [];

    (function (arr, size, result) {
        if (result.length == size) {
            allResult.push(result);
        } else {
            for (var i = 0, len = arr.length-size+1; i < len; i++) {
                var newArr = [].concat(arr),
                    curItem = newArr.splice(i, 1);
                arguments.callee(newArr, size, [].concat(result, curItem));
            }
        }
    })(arr, size, []);
    if(isreturnlength){
    	return allResult.length;
    }else{
    	return allResult;
    }
    
}
 
function C(mArr, mLen) {
var vResult = []; 
	var mNewStr='';
	for (var i = 0; i < mArr; i++) {
		mNewStr+=1;
	}
	pCombination("", mNewStr); 
function pCombination(mLeft,mRight) { 
	if (mLeft.length >= mLen) 
	{
	  vResult.push(mLeft); 
	}
	else{ 
		for (var i = 0; i < mRight.length; i++){
			pCombination(mLeft + mRight.substr(i, 1), mRight.substr(i + 1, mRight.length)); 
		}  
	} 
}
	return vResult.length; 
} 
function chekLoginStatus(ret){
	if(ret.result==401){
		$api.rmStorage('memberinfo');
		alert(ret.msg);
		closeToRoot();
		return false;
	}else{
		return true;
	}

}
function dataSort(arys) { 
    //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
    arys.timestamp=Date.now();
    arys.deviceId=api.deviceId;
    
    var newkey = Object.keys(arys).sort();
    var appkey=$api.getStorage('appkey');
    var md5str='';　　 
    for(var i = 0; i < newkey.length; i++) {
        md5str+=newkey[i]+'='+arys[newkey[i]]+'&';
    }
    md5str+='appkey='+appkey; 
    arys.appkey=appkey;
    arys.sign=hex_md5(md5str);
    return arys; //返回排好序的新对象
}
function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}
function transEmo(msg,emoData,isIndex,nickname){
	var imgmsg=msg.split('img');
	if(imgmsg.length==3&&imgmsg[0]==imgmsg[2]){
		if(isIndex){
			return '[图片]';			
		}else{
			return '<img srcs="'+imgip+imgmsg[1]+'" class="imgmsg imgCache" onclick="photoshow(this)" >';
		}
	}
    var emoPath, transMsg;
    var reg = /\[(.*?)\]/gm;
    transMsg = msg.replace(reg, function(match) {
        for (var i = 0, len = emoData.length; i < len; i++) {
            if (emoData[i].text === match) {
                    emoPath = '../../../image/emotion/' + emoData[i].name + '.png';
                    return '<img style="display: inline-block!important;width: .9rem;height: .9rem;position: relative;top: .2rem;" src="' + emoPath + '" />'
            }
        }
        return match;
    });
    if(nickname){
    	transMsg = transMsg.replace('@'+nickname, '<span class="aui-text-danger">@'+nickname+'</span>');
    }
    transMsg=transMsg.replace(/\\n/g,"<br>");
    return transMsg;
}
function messageAddDb(message){
	var addsql="INSERT INTO tb_message20181003(id,msg_type,member_id,from_nickname,from_remark,to_talker_name,from_touxiang,to_touxiang,create_time,content,talker_id) VALUES ("+message.message_id+",1,"+message.member_id+",'"+message.from_nickname+"','"+message.from_remark+"','"+message.to_talker_name+"','"+message.from_touxiang+"','"+message.to_touxiang+"',"+message.time+", '"+message.content+"',"+message.from_talker_id+")";
    db.executeSql({
         name: 'tb_message20181003',
         sql: addsql
     },function(ret,err){
     });
}
function messageAddDbs(message){
	var val=[],messageid=[];
	for (var i in message) {
		messageid.push(message[i].id);
		val.push("("+message[i].id+",1,"+message[i].member_id+",'"+message[i].from_nickname+"','"+message[i].from_remark+"','"+message[i].to_talker_name+"','"+message[i].from_touxiang+"','"+message[i].to_touxiang+"',"+message[i].create_time+", '"+message[i].content+"',"+message[i].talker_id+")");
	}
	db.executeSql({
         name: 'tb_message20181003',
         sql: 'delete from tb_message20181003 where id in ('+(messageid.join(','))+')',
     },function(ret,err){
        var valstr=val.join(',');
		var addsql="INSERT INTO tb_message20181003(id,msg_type,member_id,from_nickname,from_remark,to_talker_name,from_touxiang,to_touxiang,create_time,content,talker_id) VALUES "+valstr;
	    db.executeSql({
	         name: 'tb_message20181003',
	         sql: addsql
	     },function(ret,err){
	        if(!ret.status){
	        	a(err);
	        }
	     });
     });
	
}
function openDatabase(isnotSelect) {
    db.openDatabase({
        name: 'tb_message20181003',
        path:'fs://tb_message20181003.db'
    }, function(ret, err) {
        if (ret.status) {
            db.selectSql({
                name: 'tb_message20181003',
                sql: 'SELECT * FROM tb_message20181003 limit 1'
            }, function(ret, err) {
                if (ret.status&&isnotSelect!=true) 
                {
                    selectDb(0,20);
                } 
                else
                {
                    db.executeSql({
                        name: 'tb_message20181003',
                        sql: 'CREATE TABLE tb_message20181003(id integer PRIMARY KEY,from_nickname varchar(50),from_remark varchar(50),to_talker_name varchar(150),from_touxiang varchar(200),to_touxiang varchar(200),msg_type tryint(3),member_id int(11),create_time bigint(15), content varchar(5000), talker_id int(11))'
                    }, function(ret, err) {
                        if (ret.status) {
                        }
                    });
                }
            });
        }
    });
}
