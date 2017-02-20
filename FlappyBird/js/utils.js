(function ( window ){

var FlyObj = {};
// 角度转弧度：
FlyObj.toRadian = function( angle ) {
	return angle / 180 * Math.PI;
};
// 弧度转角度：
FlyObj.toAngle = function( radian ) {
	return radian / Math.PI * 180;
};
//图片加载函数，当所有图片都加载完成了，调用回调函数
FlyObj.imgsLoad = function(imgList, callback){
	var 
		//计算加载完成的数量
		loadedCount = 0,
		//图片对象的个数
		len = imgList.length;
		//创建一个用于存放图片的对象
		retList = {};

	//遍历数组对象
	imgList.forEach(function(srcStr){
		var img = new Image();
		img.src = 'fy/' + srcStr + '.png';
		//监听事件
		img.addEventListener('load', function(){
			//说明加载完成一个，计数开始
			loadedCount++;
			//把加载完成的存放到创建的对象中
			retList[srcStr] = img;
			//判断，当全部加载完成
			if( loadedCount >= len ){
				//全部加载，返回函数
				callback( retList );
			}
		});
	});
};

window.Fly = FlyObj;
})( window )  