var PreviewGame = function (boardSelector)
{
	var self = this;
	var blackCards, board, cards, whiteCards;

	var DrawBlackCard = function ()
	{
		var newBlackCard = new BlackCard();
		var randomBlackCard = _.sample(blackCards);

		newBlackCard.id = randomBlackCard.id;
		newBlackCard.type = 'black';
		newBlackCard.numberOfAnswers = randomBlackCard.numAnswers;
		newBlackCard.text = randomBlackCard.text.replace(/_/g, '_____');

		newBlackCard.Build();
		newBlackCard.DrawTo(board);

		return newBlackCard;
	}

	var DrawWhiteCard = function ()
	{
		var newWhiteCard = new WhiteCard();
		var randomWhiteCard = _.sample(whiteCards);

		newWhiteCard.id = randomWhiteCard.id;
		newWhiteCard.type = 'white';
		newWhiteCard.text = randomWhiteCard.text;

		newWhiteCard.Build();
		newWhiteCard.DrawTo(board);

		return newWhiteCard;
	}

	var DrawCards = function ()
	{
		var blackCard = DrawBlackCard();

		blackCard.MoveTo(0, 0, 250);

		for (var i = 0; i < blackCard.numberOfAnswers; ++i)
		{
			var whiteCard = DrawWhiteCard();

			whiteCard.MoveTo((12.5 * (i+1)) + 'em', 0, 500 + (250 * i));
		}
	}

	this.Init = function ()
	{
		board = $(boardSelector);

		$.get('/assets/json/cards.json').done(function (response)
		{
			cards = response;

			blackCards = _.filter(cards, function (card)
			{
				if (card.cardType == 'Q' && (card.numAnswers == 1 || card.numAnswers == 2))
					return true;
				else
					return false;
			});

			// blackCards = _.where(cards, { 'cardType' : 'Q' });
			whiteCards = _.where(cards, { 'cardType' : 'A' });

			DrawCards();
		});
	}
}

$(document).ready(function ()
{
	var Preview = new PreviewGame('#game-preview');
	Preview.Init();
});