/*
 * cjy-ajax.js
 * cjyboy异步请求
 */
(function(window) {
    // 这里判断window是否注册了zlk,兼容写法
    var cjy = window.$cjy ? window.$cjy : {};
    // token失效
    var _tokenOut = function() {
        // 清除全部缓存
        $api.clearStorage();
        // 主窗体退出登录
        api.execScript({
            name: 'personal',
            script: "loginOut();"
        });
        // 返回主窗体
        api.closeToWin({
            name: 'root',
            animation: {
                type: 'fade'
            }
        });
    };
    cjy.tokenOut = function() {
        _tokenOut();
    };
    cjy.ajax = function(params, successCall, errorCall) {
        var opts = {
            url: '', // 地址
            method: 'get', // 请求方法,默认get
            timeout: 6, // 请求超时时间
            data: {}, // 参数
            showProgress: false, // 显示进度加载
            isRefresh: false, // 是否下拉刷新,需要关闭掉
            toastTime: 2000, // toast显示时间,单位毫秒
            role: 'base', // 请求角色,涉及系统参数的变化
            files: {}, // 上传文件
            dataType: 'json' // 返回格式
        };
        var _init = function() {
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    opts[key] = params[key];
                }
            }
        }
        var _toast = function(msg) {
            api.toast({
                msg: msg,
                duration: opts.toastTime,
                global: true
            });
        }
        var _handle = function() {
            // 判断是否显示进度
            if (false !== opts.showProgress) {
                api.showProgress({
                    style: 'default',
                    animationType: 'fade',
                    title: opts.showProgress,
                    text: '请稍等...',
                    modal: true
                });
            }
            // 整理传递参数
            var valuesObj = opts.data;
            if ('base' == opts.role) {
                // 系统参数:用户ID
                valuesObj.memberId = $api.getStorage('userId');
                // 系统参数:访问令牌
                valuesObj.token = $api.getStorage('token');
                //	    		alert($api.getStorage('token'));
            }
            // 真正请求[后期可加入签名等优化]
            api.ajax({
                url: opts.url,
                method: opts.method,
                cache: false,
                timeout: opts.timeout,
                dataType: opts.dataType,
                data: {
                    values: valuesObj,
                    files: opts.files
                },
            }, function(ret, err) {
                if (opts.dataType == 'text') {
                    ret = $api.strToJson(ret);
                }
                //				alert(ret.result);
                if (ret && (ret.code == 0 || ret.code == 100)) {
                    successCall(ret);
                } else if (ret && ret.code == 102) {
                    _toast(ret.msg);
                    _tokenOut();
                    openWin('widget://app/login/html/login_win');
                } else if (ret && (ret.code > 0)) {
                    if (errorCall) {
                        errorCall(ret);
                    } else {
                        _toast(ret.msg);
                    }
                } else {
                    if (errorCall) {
                        errorCall(err);
                    } else {
                        console.log(JSON.stringify(err));
                        _toast('网络错误！');
                        //_toast(err.msg);
                    }
                }
                // 需要关闭进度提示
                if (false !== opts.showProgress) {
                    api.hideProgress();
                }
                // 需要关闭下拉效果
                if (false !== opts.isRefresh) {
                    api.refreshHeaderLoadDone();
                }
            });
        }
        _init();
        _handle();
    }
    window.$cjy = cjy;
})(window);
