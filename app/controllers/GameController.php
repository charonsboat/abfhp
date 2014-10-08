<?php

class GameController extends BaseController {
	/**
	 * To access this controller, simply add the route.
	 * E.g. Route::get('/', 'GameController@showWelcome');
	 */
	public function index()
	{
		$this->layout->title = 'Game';
		$this->layout->main = View::make('game');

		$this->layout->customCss = HTML::style('/assets/css/game.css');
		$this->layout->customJs = HTML::script('/assets/js/game.js');

		return $this->layout;
	}

}