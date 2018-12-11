<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<title>{{ APP_BUSSINESS_NAME }} | Inicio</title>
		<!-- SEO Meta Tags-->
		<meta name="description" content="{{ APP_BUSSINESS_NAME }} | Tienda">
		<meta name="keywords" content="bruna, indumentaria, ropa, vestidos, ropa interior, lenceria, bombachas, tangas">
		<meta name="author" content="Vimana Studio">
		<meta name="csrf-token" content="{{ csrf_token() }}">
		<!-- Mobile Specific Meta Tag-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<!-- Favicon and Apple Icons-->
		{{--  <link rel="icon" type="image/x-icon" href="favicon.ico">  --}}
		<link rel="icon" type="image/png" href="{{ asset('store-ui/images/favicon.png') }}">
		<link rel="apple-touch-icon" href="{{ asset('store-ui/images/favicon.png') }}">
		<link rel="apple-touch-icon" sizes="152x152" href="{{ asset('store-ui/images/favicon.png') }}">
		<link rel="apple-touch-icon" sizes="180x180" href="{{ asset('store-ui/images/favicon.png') }}">
		<link rel="apple-touch-icon" sizes="167x167" href="{{ asset('store-ui/images/favicon.png') }}">
		<!-- Vendor Styles including: Bootstrap, Font Icons, Plugins, etc.-->
		<link rel="stylesheet" media="screen" href="{{ asset('store-ui/css/vendor.min.css') }}">
		<link rel="stylesheet" media="screen" href="{{ asset('store-ui/css/iziToast.min.css') }}">
		<link rel="stylesheet" href="{{ asset('plugins/font-awesome/css/all.css') }}">
		<!-- Main Template Styles-->
		<link rel="stylesheet" media="screen" href="{{ asset('css/store-custom.css') }}">
		@yield('styles')
	</head>
	<!-- Body-->
	<body>	
		{{-- Site Content --}}
		<div class="main-container container-fluid" style="text-align: center; padding-top: 150px">
			<h1>NOLITA</h1>
			<p>Pronto...</p>
		</div>
		
	</body>
</html>