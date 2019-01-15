<div class="filter-sidebar">
    {!! Form::open(['route' => 'store', 'method' => 'GET', 'class' => 'input-group form-group search-input']) !!}
        <span class="input-group-btn">
            <button type="submit"><i class="icon-search"></i></button>
        </span>
        <input class="form-control" name="buscar" type="search" placeholder="BUSCAR...">
    {!! Form::close() !!}

    {{-- <select class="form-control item" name="order" onchange="location = this.value;">
        <option value="Orden" selected disabled>ORDENAR POR</option>
        <option value="{{ route('store', ['precio' => 'menor']) }}">Menor precio</option>
        <option value="{{ route('store', ['precio' => 'mayor']) }}">Mayor precio</option>
        <option value="{{ route('store', ['filtrar' => 'ultimos']) }}">Últimos ingresos</option>
        <option value="{{ route('store', ['filtrar' => 'ultima-chance']) }}">Última chance</option>
        <option value="{{ route('store', ['filtrar' => 'descuentos']) }}">Con Descuento</option>
        <option value="{{ route('store', ['filtrar' => 'populares']) }}">Populares</option>
    </select>  --}}
    <div class="filter-item">
        <div class="sub-title">ORDENAR POR</div>
        <ul>
            {{-- <li><a href="{{ route('store', ['precio' => 'menor']) }}">Menor precio</a></li>
            <li><a href="{{ route('store', ['precio' => 'mayor']) }}">Mayor precio</a></li> --}}
            <li><a href="{{ route('store', ['filtrar' => 'ultimos']) }}">Últimos ingresos</a></li>
            <li><a href="{{ route('store', ['filtrar' => 'descuentos']) }}">Con Descuento</a></li>
            <li><a href="{{ route('store', ['filtrar' => 'populares']) }}">Populares</a></li>
            <li><a href="{{ route('store.search.tag', 'Last Chance') }}">Last Chance</a></li>
        </ul>
    </div>


    <div class="filter-item">
        <div class="sub-title">TIPOS DE PRENDA</div>
        <ul>
            @foreach($categories as $category)
                <li><a onchange="location = this.value;" value="{{ route('store', 'categoria=').$category->id }}"> {{ $category->name }} </a></li>
            @endforeach
        </ul>
    </div>

    <div class="filter-item">
        <div class="sub-title">ETIQUETAS</div>
        <ul>
            @foreach($tags as $tag)
                @if($tag->name != 'Last Chance')
                    @if($tag->name != 'Nuevo Ingreso')
                        <span class="badge"><a href="{{ route('store.search.tag', $tag->name) }}"> {{ $tag->name }}</a></span>
                    @endif
                @endif
            @endforeach
        </ul>
    </div>

    {{-- <select class="form-control item" name="tags" onchange="location = this.value;">
        <option value="Etiquetas" selected disabled>ETIQUETAS</option>
        @foreach($tags as $tag)
            <option value="{{ route('store.search.tag', $tag->name) }}"> {{ $tag->name }} </option>
        @endforeach
    </select> --}}

    {{-- @if(isset($search) && $search == true || count($_GET) > 0 && !isset($_GET['results']))
    <div class="column">
        <div class="back-to-list-desktop">
            <a href="{{ url('tienda') }}" class="form-control filter-button" type="button"><i class="fas fa-angle-left"></i> VOLVER AL LISTADO</a>
        </div>
    </div>
    @endif --}}
</div>