var Card = function ()
{
	var frame;
	var self = this;

	this.type;

	this.Build = function ()
	{
		frame = $(document.createElement('div'));
		frame.addClass('card');
		frame.addClass(self.type);
	}

	this.DrawTo = function (board)
	{
		frame.appendTo(board);
	}
}

var BlackCard = function ()
{
	var self = new Card();

	self.type = 'black';
	self.Test = function () {
		console.log('this is a test');
	}

	return self;
}