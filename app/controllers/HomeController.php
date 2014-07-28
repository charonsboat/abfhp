<?php

class HomeController extends BaseController {
	/**
	 * To access this controller, simply add the route.
	 * E.g. Route::get('/', 'HomeController@showWelcome');
	 */
	public function index()
	{
		$this->layout->title = 'Home';
		$this->layout->main = View::make('index');

		$this->layout->customCss = HTML::style('assets/css/game.css');
		$this->layout->customJs = HTML::script('assets/js/game.js');

		return $this->layout;
	}

}