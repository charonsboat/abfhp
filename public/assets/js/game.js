var Board = function (boardSelector)
{
	var board = $(boardSelector);
	var self = this;
	var frame, height, id, width;

	this.getHeight = function ()
	{
		return height;
	}

	this.getWidth = function ()
	{
		return width;
	}

	this.setHeight = function (newHeight)
	{
		board = newHeight;
	}

	this.setWidth = function (newWidth)
	{
		width = newWidth;
	}
}

var Card = function ()
{
	var self = this;
	var frame;

	this.id;
	this.type;
	this.text;

	this.Build = function ()
	{
		frame = $(document.createElement('div'));
		frame.addClass('card');
		frame.addClass(self.type);

		frame.css({
			'left' : -1000,
			'position' : 'absolute',
			'top' : 500
		});

		var foundation = $(document.createElement('div'));
		foundation.addClass('foundation');

		var content = $(document.createElement('div'));
		content.addClass('contents');
		content.addClass('constraint-filler');

		content.prepend('<p>' + self.text + '</p>');
		foundation.prepend(content);
		frame.prepend(foundation);
	}

	this.DrawTo = function (board)
	{
		frame.appendTo(board);
	}

	this.MoveTo = function (x, y, speed)
	{
		if (speed === 'undefined')
		{
			speed = 500;
		}

		frame.animate(
		{
			left: x,
			top: y
		}, speed);
	}
}

var BlackCard = function ()
{
	var self = new Card();

	self.numberOfAnswers = 0;

	return self;
}

var WhiteCard = function ()
{
	var self = new Card();

	return self;
}