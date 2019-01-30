<!-- Navbar-->
<!-- Remove ".navbar-sticky" class to make navigation bar scrollable with the page.-->
<header class="navbar navbar-sticky">
	{{-- <ul class="nav navbar-nav left-nav-items">
		{{-- <li><a href="{{ url('/') }}"><img src="{{ asset('images/web/app-logo.png') }}" alt="Nolita"></a></li> 
	</ul> --}}
	<div class="site-branding">
		<!-- Site Logo-->
		<a href="{{ url('/') }}"><img src="{{ asset('images/web/app-logo.png') }}" alt="Nolita"></a>
	</div>
	<!-- Main Navigation-->
	@include('store.partials.userbar')
	<div class="under-nav-container">
			@if(!Auth::guard('customer')->check())
			<div class="login-register-btn-mobile">
				<a href="{{ route('customer.login') }}"><button class="btn btn-main-sm-black">Ingresar</button></a>
				<a href="{{ url('tienda/registro') }}"><button class="btn btn-main-sm">Registrarse</button></a>
			</div>
			@endif
		<div class="text-links">
			<a href="{{ url('terminos-y-condiciones') }}">Términos y Condiciones</a>
			<a href="{{ url('medidas') }}">Medidas</a>
		</div>
	</div>
</header>
