(function ( Fly ){
var Pipe = function( config ){
	this.ctx = config.ctx;
	this.imgTop = config.imgTop;
	this.imgBottom = config.imgBottom;
	this.imgW = this.imgTop.width;
	this.imgH = this.imgTop.height;
	this.ranNum = Math.random() * 200 + 50;
	this.x = config.x || 0;
	this.TopY = this.ranNum - this.imgH || 0;
	this.BottomY = this.ranNum + 150 || 0;
	
	this.speed = -0.15;
};
Pipe.prototype = {
	constructor: Pipe,
	draw: function( interval ){
		if(this.x <= -this.imgW){
			this.x += this.imgW * 6 * 3;
			this.TopY = this.ranNum - this.imgTop.height;
			this.BottomY = this.ranNum + 150;
		}

		this.ctx.drawImage(this.imgTop, this.x, this.TopY, this.imgW, this.imgH);
		this.ctx.drawImage(this.imgBottom, this.x, this.BottomY, this.imgW, this.imgH);

		this.ctx.rect(this.x, 0, this.imgW, this.ranNum);
		this.ctx.rect(this.x, this.BottomY, this.imgW, cv.height-(this.ranNum + 150));
		// this.ctx.fill();
		

		this.x += this.speed * interval;

	}
}


Fly.Pipe = Pipe;
})( Fly );