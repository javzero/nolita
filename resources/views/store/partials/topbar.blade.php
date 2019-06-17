<!-- Topbar-->
<div class="topbar">
	<div class="topbar-column">
		{{-- <a class="">&nbsp;<b> Whatsapp: 11-6059-5900</b></a> --}}
		<a  class="data-top-desktop" href="mailto:venta@augustamoi.com">
			<i class="icon-mail"></i>&nbsp; info@nolita.com.ar
		</a>
		<a  class="data-top-desktop" href="https://wa.me/5491124906000" target="_blank">
			<i class="fab fa-whatsapp"></i>&nbsp; 11-2490-6000 
		</a>
		<span class="data-top-desktop">
				<i class="fa fa-home"></i> Showroom: Allende 3464. Villa Devoto. Cita previa por WhatsApp
		</span>
	</div>
	<div class="topbar-column">
		<a class="social-button sb-facebook shape-none sb-dark" href="https://www.facebook.com/nolitavos/" target="_blank">
			<i class="socicon-facebook"></i>
		</a>
		<a class="social-button sb-instagram shape-none sb-dark" href="https://www.instagram.com/nolita.com.ar/" target="_blank">
			<i class="socicon-instagram"></i>
		</a>
		@if(Auth::guard('customer')->check())
			<button onclick="checkoutSidebar('show')" class="icon-btn-small"|><i class="fas fa-shopping-cart"></i></button>
		@endif
	</div>
</div>