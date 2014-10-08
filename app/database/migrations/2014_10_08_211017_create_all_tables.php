<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAllTables extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		//
		Schema::create('users', function ($table)
		{
			$table->increments('id');
			$table->string('alias')->unique();
			$table->string('email')->unique();
			$table->boolean('email_is_confirmed')->default(false);
			$table->string('email_confirmation_token')->nullable();
			$table->timestamp('email_confirmation_token_expiration')->nullable();
			$table->string('password');
			$table->string('password_reset_token')->nullable();
			$table->timestamp('password_reset_token_expiration')->nullable();
			$table->rememberToken();
			$table->timestamps();
			$table->boolean('is_active')->default(true);
		});

		Schema::create('games', function ($table)
		{
			$table->increments('id');
			$table->integer('user_id')->nullable()->unsigned();
			$table->foreign('user_id')->references('id')->on('users');
			$table->string('public_access_token');
			$table->timestamps();
			$table->boolean('is_active')->default(true);
		});

		Schema::create('players', function ($table)
		{
			$table->increments('id');
			$table->integer('game_id')->unsigned();
			$table->foreign('game_id')->references('id')->on('games');
			$table->integer('user_id')->nullable()->unsigned();
			$table->foreign('user_id')->references('id')->on('users');
			$table->boolean('is_czar')->default(false);
			$table->boolean('is_active')->default(true);
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		//
	}

}
