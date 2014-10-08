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

	var rem = function (count)
	{
		var unit = parseInt($('html').css('font-size'));

		if (typeof count !== 'undefined' && count > 0)
		{
			return (unit * count);
		}
		else
		{
			return unit;
		}
	}

	var openMenu = function (menu)
	{
		var nav = $('body > header').find('nav');

		nav.css({ 'height' : 'auto' });
		var height = nav.height();
		nav.css({ 'height' : 0 });

		nav.animate({
			'height' : height
		}, function () {
			nav.animate({
				'opacity' : 1
			}, 200);
		});
	}

	var closeMenu = function (menu)
	{
		var nav = $('body > header').find('nav');

		nav.animate({
			'opacity' : 0
		}, 200, function () {
			nav.animate({
				'height' : 0
			});
		});
	}

	// On click, toggle menu open/close
	$('body > header').on('click', '.menu-icon', function ()
	{
		$(this).toggleFunction(openMenu, closeMenu, $(this));
	});
});