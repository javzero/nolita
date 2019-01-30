@extends('store.partials.main')

@section('header-image')
	<div class="index-header">
		
	</div>
@endsection

@section('content')
<div class="header-banner">
    <div class="desktop"><img src="{{ asset('images/web/home-banner.jpg')}}" alt=""></div>
    <div class="mobile"><img src="{{ asset('images/web/home-banner-mobile.jpg')}}" alt=""></div>
</div>
<div class="container info-container">

    <div class="row ">
        <div class="col-sm-12 item">
                <h1><b>Términos y Condiciones</b></h1>
                <p>
                    La compra mínima son 12 prendas en el surtido que quieras<br>
                    Las prendas son talle único<br>
                    El pago puede ser por transferencia bancaría, depósito o efectivo contra entrega
                    <br><br>
                    <b>Hacemos envíos al interior mediante las siguientes empresas:</b><br>
                    - Via Cargo<br>
                    - Integral  Pack<br>
                    - Flechablus<br>
                    - Buspack<br>
                    - Chevallier<br>
                    - Ecapack<br>
                    - Andresmar<br>
                    - MD Cargas<br><br>
                    <b>El envío siempre es a cuenta del comprador</b><br>
                    <br>
                    <hr>
                    <br>
                    En caso de retiro de mercadería es en la <b>zona de Palermo</b><br>
                    El tiempo de despacho será entre los próximos <b>3 días hábiles a efectuar el pago.</b><br>
                    Solo hacemos venta por catálogo. No estamos en Flores.<br>
                    No realizamos cambios. Ni aceptamos devoluciones. Únicamente por fallas.<br>
                    La exclusividad por zona será a convenir. Cada Localidad tiene sus propios mínimos.<br>
                    Las fotos de la marca solo pueden ser utilizadas tal como están en nuestras redes. No pueden agregarse textos.<br>
                    <br><br>
                </p>
                <hr><br>
                <h2><b>IMPORTANTE</b></h2>
                <p>
                    Las prendas se estampan a pedido por lo que tu orden es tomada como COMPRA EN FIRME desde el momento que las cerras en el sitio. 
                    Tus datos ingresados serán resguardados con total privacidad.
                </p>
                <hr><br>
                <h2><b>BENEFICIOS DE COMPRAR ONLINE</b></h2>
                <p>
                    - Te registras una sola vez <br>
                    - Elegis tus productos, tu forma de envío y pago y listo! <br>
                    - Las fotos podes tomarlas del mismo sitio <br>
                    - Podés hacer un seguimiento mensual de tus compras! <br>
                </p>  
        </div>
    </div>
</div>
@endsection


