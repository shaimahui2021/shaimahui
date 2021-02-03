# 功能描述
    
	生成图形验证码。

# 依赖的模块

	无

# 快速使用

```
	var zknightCode = null;
	window.onload = function(){
		//zknightH5imagecaptcha方法接受参数
		//{ 
		//	id: "", //容器Id
		//	canvasId: "zknightH5imageCaptcha", //canvas的ID
		//	width: "100", //默认canvas宽度
		//	height: "30", //默认canvas高度
		//	type: "blend" //图形验证码默认类型blend:数字字母混合类型、number:纯数字、letter:纯字母
		//}
		//传入展示图形验证码位置的ID,若只传ID，则其他参数使用默认值
		zknightCode = new zknightH5imagecaptcha("zknight-h5imagecaptcha-show");
	};
	

	/**
	 * 验证 
	 */
	function zknightVerification(){
		//文本框输入的验证码
		var zknightInputCode = document.getElementById("zknight-h5imagecaptcha-inputcode").value;
		//传入输入的验证码，返回验证结果
		var result = zknightCode.validate(zknightInputCode);
		if(result){
			alert("success");
		}else{
			alert("error");
		}
	}

```

# 特别说明
    需支持canvas