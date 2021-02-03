/*
 接口地址配置文件
 * */

   var index_url = "https://server.xsls666.com/";
//    var index_url = "http://smhserver.xmcode.top/";
   var img_url = "http://images.5649h.com/"
   var head_path = "http://images.5649h.com/";
   var video = "http://images.5649h.com/";


var configIndex = {
	getConvertRecord : index_url + 'api/member/exchangeRecord',	//兑换记录
	indexNotice		 : index_url + 'api/index/indexNotice'  ,       //首页公告
	isMemberId		 : index_url + 'api/index/isMemberId'  ,        //获取TOEKN
	indexGallery	 : index_url + 'api/index/indexGallery'  ,      //首页图库
	indexAdvertising : index_url + 'api/index/indexAdvertising'  ,  //首页广告
	indexWnData		 : index_url + 'api/index/indexWnData'  ,       //首页开奖数据
    wndata 			 : index_url + 'api/index/Wndata'  ,    	    //开奖历史
	kjTime 			 : index_url + 'api/index/kjTime'  ,    	    //开奖时间
	wnDataTail 		 : index_url + 'api/index/wnDataTail'  ,    	//开奖详情
	gallerySearch  	 : index_url + 'api/index/gallerySort'  ,    	//图库搜索
	galleryDetails 	 : index_url + 'api/index/galleryDetails'  ,    //图库详情
	like		 	 : index_url + 'api/index/like'  , 			    //图库详情点赞取消
	reward		 	 : index_url + 'api/index/reward'  , 			//图库详情打赏操作
	rewardRecord	 : index_url + 'api/index/rewardRecord'  , 		//图库详情打赏记录
	phtodetail		 : index_url + 'api/Space/index'  ,    			//晒马汇首页
	postLike		 : index_url + 'api/Space/like'  ,    			//晒马汇点赞
	spaceDetails	 : index_url + 'api/Space/spaceDetails'  ,    	//晒马汇详情
	commentList		 : index_url + 'api/Space/commentList'  ,    	//晒马汇评论列表
	isAttention		 : index_url + 'api/Space/attention'  ,    		//晒马汇关注/取消
	forwardList		 : index_url + 'api/Space/forwardList'  ,    	//晒马汇转发页面
	forwarding		 : index_url + 'api/Space/forwarding'  ,    	//晒马汇转发
	personal		 : index_url + 'api/Space/personal'  ,    		//晒马汇个人中心
	postComment		 : index_url + 'api/Space/comment'  ,    		//晒马汇详情评论
	reply			 : index_url + 'api/Space/reply'  ,    			//晒马汇详情回复列表
	upload			 : head_path + 'api/Upload/upload' 	,			//图片上传
	uploadPost		 : index_url + 'api/Space/uploadPost' 	,		//图片上传
	postCommentList  : index_url + 'api/index/commentList',			//图库详情评论列表
	galleryComment 	 : index_url + 'api/index/comment',				//图库评论
	memberEdit 		 : index_url + 'api/login/memberEdit',			//忘记密码获取用户是否存在
	problem 		 : index_url + 'api/login/problem',				//忘记密码密保问题
	delPost 		 : index_url + 'api/Member/dellRecord',				//删除帖子
	record 			 : index_url + 'api/Member/pointsRecord',		//积分记录
	kefu			 : index_url + 'api/Member/kefu',				//获取客服
	uploadSystem	 : head_path + 'api/Upload/uploadSystem' ,		//头像上传
	yearsInfo		 : index_url + 'api/index/yearsInfo' ,			//年份信息
	DetailsInfo		 : index_url + 'api/index/DetailsInfo' ,		//图片详情
	qishu		 	 : index_url + 'api/index/qishu' ,				//期数
}
