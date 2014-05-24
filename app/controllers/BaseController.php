<?php

class BaseController extends Controller {

	/**
	 * This will be the default/fallback layout. Overwrite this 
	 * variable to change the layout.
	 */
	protected $layout = 'layouts.master';

	/**
	 * Setup the layout used by the controller.
	 *
	 * @return void
	 */
	protected function setupLayout()
	{
		if ( ! is_null($this->layout))
		{
			$this->layout = View::make($this->layout);
		}
	}

}
