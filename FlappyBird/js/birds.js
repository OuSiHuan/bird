(function( Fly ){
var Bird = function( config ){
	this.ctx = config.ctx;
	//下落前段时间
	this.imgBird = config.img;
	this.imgW = this.imgBird.width/3;
	this.imgH = this.imgBird.height;
	//初始纵向速度
	this.v = 0;
	//初始纵向坐标
	this.y = 100;
	this.x = 100;
	//初始加速度
	this.a = 0.0009;

	this.index = 0;
	//5、小鸟头部转向问题--根据小鸟的速度，速度为正，头朝下；速度为负，头朝上
	//但是，考虑到速度越来越大，有个临界值，所以，朝下的角度最大值为45deg，
	this.maxAngle = 45;
	//指定一个最大速度时，角度为45deg
	this.maxSpeed = 0.3;
	//当前速度对应的角度
	this.currentAngle = 0;
};

Bird.prototype = {
	draw: function( interval ){
		//瞬时速度
		this.v += this.a * interval
		//下降距离
		this.y += (this.v * interval + (this.a / 2) * Math.pow(interval, 2)); 

		//计算角度
		this.currentAngle = this.v / this.maxSpeed * this.maxAngle;
		//判断
		if(this.v >= this.maxSpeed){
			this.currentAngle = this.maxAngle;
		}else if(this.v <= -this.maxSpeed){
			this.currentAngle = -this.maxAngle;
		}

		this.ctx.translate(100, this.y);
		this.ctx.rotate(Fly.toRadian(this.currentAngle));

		//旋转的时候移动原点，小鸟位置发生改变-imgW/2,-imgH/2
		this.ctx.drawImage(this.imgBird, this.index++ * this.imgW, 0, this.imgW, this.imgH, -this.imgW/2, -this.imgH/2, this.imgW, this.imgH);
		this.index %= 3;
	},
	bind: function(){
		var that = this;
		//点击事件
		that.cv.addEventListener('click',function(){
			console.log('注册上了吗？');
			that.v = -0.4;
		});
	}
}

Fly.Bird = Bird;
})( Fly );