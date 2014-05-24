<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>A _____ For Horrible People{{{ isset($title) ? ' | '.$title : null }}}</title>

	{{ HTML::style('./assets/css/reset.css') }}
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
</body>
</html>