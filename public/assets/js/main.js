$(document).ready(function()
{
	var board = $('#game-preview');
	var blackCard = new BlackCard();

	blackCard.Build();
	blackCard.DrawTo(board);
});