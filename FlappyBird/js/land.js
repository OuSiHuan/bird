(function ( Fly ){

var Land = function( config ){
	this.ctx = config.ctx;

	this.img = config.img;
	this.imgW = this.img.width;
	this.imgH = this.img.height;

	this.x = config.x || 0;
	this.y = config.y || 0;
	this.speed = - 0.15;
};
Land.prototype = {
	constructor : Land,
	draw : function( interval ){

		this.ctx.drawImage(this.img, this.x, this.y, this.imgW, this.imgH);
		this.x += this.speed * interval;

		if(this.x <= -this.imgW){
			this.x += this.imgW * 4;
		};
	}
}
Fly.Land = Land;
})( Fly );