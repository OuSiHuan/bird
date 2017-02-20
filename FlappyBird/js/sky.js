(function ( Fly ){
//创建天空对象
var Sky = function( config ){
	this.ctx = config.ctx;
	//创建天空
	this.img = config.img;
	this.imgW = this.img.width;
	this.imgH = this.img.height;
	
	this.x = config.x || 0;
    this.y = 0;
    this.skySpeed = - 0.15;
};
Sky.prototype = {
	constructor : Sky,
	draw : function( interval ){
		this.ctx.drawImage(this.img, this.x, this.y, this.imgW, this.imgH);
		this.x += this.skySpeed * interval;

		if( this.x <= -this.imgW ){
			this.x += this.imgW * 2;
		}
	}
}
Fly.Sky = Sky;
})(Fly);