<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>A _____ For Horrible People{{{ isset($title) ? ' | '.$title : null }}}</title>

	{{ HTML::style('assets/css/reset.css') }}
	{{ HTML::style('assets/css/main.css') }}
	{{ $customCss or null }}
</head>
<body>
	<header>
		<div class="head">
			<h1>{{ HTML::link('dev', 'A _____ For Horrible People') }}</h1>
			<div class="menu-icon">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
		<nav>
			<ul>
				<li>{{ HTML::link('game', 'Play Game') }}</li>
				<li>{{ HTML::link('sign-up', 'Sign Up') }}</li>
				<li>{{ HTML::link('log-in', 'Log In') }}</li>
			</ul>
		</nav>
		<div class="divider"></div>
	</header>
	<main>
		@yield('main')
	</main>
	<footer>
		<div class="foot">
			<p>Based on, but neither affiliated with, nor endorsed by {{ HTML::link('http://cardsagainsthumanity.com', 'Cards Against Humanity&trade;') }}</p>
		</div>
	</footer>
	{{ HTML::script('assets/js/lib/jquery-2.1.1.min.js') }}
	{{ HTML::script('assets/js/lib/underscore-1.6.0.min.js') }}
	{{ HTML::script('assets/js/plugins.js') }}
	{{ HTML::script('assets/js/main.js') }}
	{{ $customJs or null }}
</body>
</html>