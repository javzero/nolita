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
    <div class="row">
        <div class="col-xm-12 col-lg-12">
            <h1><b>Medidas</b></h1>
        </div>
        <div class="col-xs-6 col-lg-6">
            <img src="{{ asset('images/web/geometrales1.jpg') }}" class="img-fluid" alt="Nolita Geometrales">
        </div>
        <div class="col-md-6 col-lg-6">
            <img src="{{ asset('images/web/geometrales2.jpg') }}" class="img-fluid" alt="Nolita Geometrales">
        </div>
    </div>
</div>
@endsection


