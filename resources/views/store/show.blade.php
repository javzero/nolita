@extends('store.partials.main')

@section('content')
{{--@if(Auth::guard('customer')->check())
 <div class="CheckoutCart checkout-cart checkout-cart-floating">
    @include('store.partials.checkout-cart')
</div> 
@endif--}}

<div class="container padding-bottom-3x mb-1 marg-top-25">
	<div class="row product-show">
		<div class="col-md-12">
			<a href="{{ url('tienda') }}">
				<button  class="btn btn-main mb-1">
					<i class="icon-arrow-left"></i>&nbsp;Volver a la tienda
				</button>
			</a>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-6 col-xs-pull-12 image">
			{{-- Title Mobile --}}
			<div class="title-mobile">
				<span class="text-medium">Categoría:&nbsp;</span>
				<a class="navi-link" href="#">{{ $article->category->name }}</a>
				{{--  Article Name  --}}
				<h2 class="text-normal"><b>{{ $article->name }}</b></h2>
			</div>
			
			<div class="row product-gallery">
				<div class="col-xs-12 col-sm-3 col-md-3 pad0">
					<ul class="product-thumbnails">
					@foreach($article->images as $image)
					<li>
						<a href="#{{ $image->id }}">
								<img src="{{ asset('webimages/catalogo/'. $image->name) }}" class="CheckCatalogImg" alt="Producto Bruna">
							</a>
						</li>
						@endforeach
					</ul>
				</div>
				<div class="col-xs-12 col-sm-9 col-md-9 images-container pad0">
					<div class="gallery-wrapper">
						@foreach($article->images as $index => $image)
						<div class="gallery-item {{ $index == 0 ? 'active' : '' }}">
						<a href="{{ asset('webimages/catalogo/'. $image->name) }}" data-hash="{{ $image->id }}" data-size="500x750"><i class="icon-zoom-in"></i></a>
					</div>
					@endforeach
					</div>
					<div class="product-carousel owl-carousel">
						@if(!$article->images->isEmpty())
						@foreach($article->images as $image)
						<div data-hash="{{ $image->id }}"><img class="CheckCatalogImg" src="{{ asset('webimages/catalogo/'. $image->name) }}" alt="Product"></div>
						@endforeach
						@else
						<img src="{{ asset($article->featuredImageName()) }}" class="CheckCatalogImg" alt="Producto del Catálogo">
						@endif
					</div>
				</div>
			</div>
		</div>

		{{-- <div class="padding-top-2x hidden-md-up"></div> --}}
		<div class="col-xs-12 col-sm-12 col-md-6 col-lg-7 col-xl-6 products-details">
			{{-- Favs --}}
			<div class="fav-container">
				@if(Auth::guard('customer')->check())
					<a class="AddToFavs fa-icon fav-icon-nofav @if($isFav) fav-icon-isfav @endif"
					data-id="{{ $article->id }}" data-toggle="tooltip" title="Agregar a Favoritos">
					</a>
					@else
					<a href="{{ url('tienda/login') }}" class="fa-icon fav-icon-nofav"></a>
				@endif
			</div>
			{{-- Title Desktop --}}
			<div class="title-desktop">
				<h4>Categoría:&nbsp; <a class="color-white" href="#"><b>{{ $article->category->name }}</b></a></h4>
				
				{{--  Article Name  --}}
				<div class="product-title"><b>{{ $article->name }}</b></div>
				<span class="product-code"> #{{ $article->code }}</span>
			</div>
			{{-- PRICE --}}
			@if(Auth::guard('customer')->check())
			<div class="prices">
				@if($article->reseller_discount > 0)
					% {{ $article->reseller_discount }} de DESCUENTO!!
					<br>
					<span class="main-price"><b>${{ calcValuePercentNeg($article->reseller_price, $article->reseller_discount) }}</b></span>
					<span class="if-discount">($ {{ $article->reseller_price }})</span>
					@else
					<span class="main-price"><b>$ {{ $article->reseller_price }}</b></span>
				@endif
			</div>
			@else
			<br>
			@endif
			{{-- Article Description --}}
			<p class="description">{{ strip_tags($article->description) }}</p>
			<h4>Tela:&nbsp; <a class="color-white" href="#"><b>{{ $article->textile }}</b></a></h4>
			<h4>Talle:&nbsp; <a class="color-white" href="#"><b>Único</b></a></h4>
			@if(Auth::guard('customer')->check())
			<div class="row">
				<div class="col-sm-12 descriptions">
					{!! Form::open(['id' => 'AddToCartForm', 'class' => 'form-group price', 'onchange' => 'checkVariantStock()', 
						'data-route' => (url('tienda/checkVariantStock')) ]) !!}
						<input type="hidden" name="article_id" value="{{ $article->id }}">
						<div class="row color-selector">
							<div class="col-md-12 pad0">
								<div class="btn-group-toggle" data-toggle="buttons">
									@foreach($colors as $id => $name)
										<label class="btn btn-main-sm-hollow">
											<input onclick="checkVariantStock()" name="color_id" value="{{ $id }}" type="radio" checked autocomplete="off"> {{ $name }}
										</label>
									@endforeach
								</div>
								<input type="hidden" name="size_id" value="{{ $article->size->first()->id }}">
							</div>
						</div>
						<div class="row">
							{{-- Display Remaining Stock --}}
							<div class="AvailableStock col-md-12"></div>
						</div>
						<div class="input-with-btn">
							<input id="MaxQuantity" class="form-control input-field short-input" name="quantity" type="number" min="1" max="{{ $article->stock }}" value="1" placeholder="1" required>
							<input type="submit" id="AddToCartFormBtn" class="btn input-btn"" value="Agregar al carro" disabled>
						</div>
						<input type="hidden" value="{{ $article->id }}" name="articleId">
					{!! Form::close() !!}
				</div>
			</div>
			@else
			<br>
			<div class="col-md-12 pad0">
				<div class="btn-group-toggle" data-toggle="buttons">
					@foreach($colors as $id => $name)
						<label class="btn btn-main-sm-hollow">
							<input onclick="checkVariantStock()" name="color_id" value="{{ $id }}" type="radio" checked autocomplete="off"> {{ $name }}
						</label>
					@endforeach
				</div>
				<input type="hidden" name="size_id" value="{{ $article->size->first()->id }}">
			</div>
			@endif
		</div>
	</div>
</div>
	
<!-- Photoswipe container // This Shows Big Image Preview -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="pswp__bg"></div>
	<div class="pswp__scroll-wrap">
		<div class="pswp__container">
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
		</div>
		<div class="pswp__ui pswp__ui--hidden">
			<div class="pswp__top-bar">
				<div class="pswp__counter"></div>
				<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
				<button class="pswp__button pswp__button--share" title="Share"></button>
				<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
				<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
				<div class="pswp__preloader">
					<div class="pswp__preloader__icn">
						<div class="pswp__preloader__cut">
							<div class="pswp__preloader__donut"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
				<div class="pswp__share-tooltip"></div>
			</div>
			<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
			<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
			<div class="pswp__caption">
				<div class="pswp__caption__center"></div>
			</div>
		</div>
	</div>
</div>
<div id="Error"></div>
@endsection

@section('scripts')
	@include('store.components.bladejs')
@endsection