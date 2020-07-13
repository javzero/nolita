@extends('store.partials.main')

@section('content')

<div class="container padding-bottom-3x mb-2 marg-top-25">
	<div class="back-to-store"><a href="{{ url('tienda') }}"><i class="icon-arrow-left"></i> Volver a la tienda</a></div>
    <div class="row">
        <div class="container padding-bottom-3x mb-2">
            <div class="card text-center" style="border: 0">
                <div class="card-block padding-top-2x">
                    <h4 class="card-text">Tu pedido ya está en proceso.</h4>
                    <h2 class="card-title">Esta compra va a ser un éxito!!</h2>
                    <div class="short-divisor"><div class="inner"></div></div>
                    {{-- {{dd($cart)}} --}}
                    <p>No te olvides de agendar el número: 
                        <b>#{{ $cart['rawdata']['id'] }}</b>
                    </p>
                    <p class="card-text">Podés revisar el estado del mismo en la <b><a href="{{ route('store.customer-orders') }}">"Lista de Pedidos"</a></b> desde tu perfil.<br>
                    <p><b>Monto total: </b> $ {{ $cart['total'] }}</p>
                    
                    <div class="padding-top-1x padding-bottom-1x">
                        <a class="btn btn-primary" href="{{ url('tienda/descargar-comprobante', [$cart['rawdata']['id'], 'stream']) }}" target="_blank"><i class="icon-eye"></i> Ver Comprobante</a>
                        <a class="btn btn-primary" href="{{ url('tienda/descargar-comprobante', [$cart['rawdata'], 'download']) }}" target="_blank"><i class="icon-download"></i> Descargar Comprobante</a>
                    </div>
                </div>
            </div>
        </div>
	</div>
</div>

<div id="Error"></div>
@endsection

@section('scripts')
	@include('store.components.bladejs')
    <script>
        // Prevent using back button
        history.pushState(null, null, location.href);
        window.onpopstate = function () {
            history.go(1);
        };
    </script>
@endsection
