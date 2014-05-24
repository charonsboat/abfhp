<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>A _____ For Horrible People{{{ isset($title) ? ' | '.$title : null }}}</title>

	{{ HTML::style('/assets/css/reset.css') }}
	{{ HTML::style('/assets/css/main.css') }}
	{{ $customCss or null }}
</head>
<body>
	<header>
		<h1>A _____ For Horrible People</h1>
		<!-- <nav id="site-navigation">
			<ul>
				<li></li>
			</ul>
		</nav> -->
	</header>
	<main>
		@yield('main')
	</main>
	<footer>

	</footer>
	{{ HTML::script('/assets/js/main.js') }}
	{{ $customJs or null }}
</body>
</html>