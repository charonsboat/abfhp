var Card = function ()
{
	var frame;
	var self = this;

	this.id;
	this.type;
	this.text;

	this.Build = function ()
	{
		frame = $(document.createElement('div'));
		frame.addClass('card');
		frame.addClass(self.type);

		frame.prepend('<p>' + self.text + '</p>');
	}

	this.DrawTo = function (board)
	{
		frame.appendTo(board);
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