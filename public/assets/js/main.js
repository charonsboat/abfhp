var PreviewGame = function (boardSelector)
{
	var self = this;

	var board;
	var blackCards;
	var whiteCards;

	var cards = 'testing';

	var DrawBlackCard = function ()
	{
		var newBlackCard = new BlackCard();
		var randomBlackCard = _.sample(blackCards, 1);

		newBlackCard.id = randomBlackCard[0].id;
		newBlackCard.type = 'black';
		newBlackCard.numberOfAnswers = randomBlackCard[0].numAnswers;
		newBlackCard.text = randomBlackCard[0].text.replace(/_/g, '_____');

		newBlackCard.Build();
		newBlackCard.DrawTo(board);

		console.log(newBlackCard);

		return newBlackCard;
	}

	var DrawWhiteCard = function ()
	{
		var newWhiteCard = new WhiteCard();
		var randomWhiteCard = _.sample(whiteCards, 1);

		newWhiteCard.id = randomWhiteCard[0].id;
		newWhiteCard.type = 'white';
		newWhiteCard.text = randomWhiteCard[0].text;

		newWhiteCard.Build();
		newWhiteCard.DrawTo(board);

		return newWhiteCard;
	}

	var DrawCards = function ()
	{
		var blackCard = DrawBlackCard();

		for (var i = 0; i < blackCard.numberOfAnswers; ++i)
		{
			DrawWhiteCard();
		}
	}

	this.Init = function ()
	{
		board = $(boardSelector);

		$.get('/assets/json/cards.json').done(function (response)
		{
			cards = response;

			blackCards = _.where(cards, { 'cardType' : 'Q' });
			whiteCards = _.where(cards, { 'cardType' : 'A' });

			DrawCards();
		});
	}
}

$(document).ready(function ()
{
	// var blackCard = new BlackCard();

	// blackCard.Build();
	// blackCard.DrawTo(board);

	var Preview = new PreviewGame('#game-preview');
	Preview.Init();
});