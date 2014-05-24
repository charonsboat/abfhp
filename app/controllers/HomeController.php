<?php

class HomeController extends BaseController {
	/**
	 * To access this controller, simply add the route.
	 * E.g. Route::get('/', 'HomeController@showWelcome');
	 */
	public function showWelcome()
	{
		$this->layout->title = 'Home';
		$this->layout->main = View::make('index');

		return $this->layout;
	}

}