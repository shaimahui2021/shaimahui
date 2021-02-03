var TcCaptcha = {
	captcha: '',
	appid: 'appid',
	init: function(callback) {
		this.captcha = new TencentCaptcha(this.appid, function(res) {
			if(res.ret === 0) {
				if(callback) {
					callback(res);
				}
			    $api.val($api.byId('captcha_appid'), res.appid);
			    $api.val($api.byId('captcha_ticket'), res.ticket);
			    $api.val($api.byId('captcha_randstr'), res.randstr);
			}

		})
		return this.captcha;
	},
	check: function(params, callback) {
		if("function" == typeof params) {
			callback = params;
		} else {
			if("undefined" != typeof params) {
				if("undefined" != typeof params.appid) {
					this.appid = params.appid;
				}
			}
		}

		if(!this.captcha) {
			this.init(callback);
		}
		return this.captcha.show();
	}
}
window.addEventListener(
	'touchstart',
	function() {}, {
		passive: false
	}
);