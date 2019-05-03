@extends('vadmin.partials.invoice-excel')

@section('content')
<table class="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Given Name</th>
            <th>Additional Name</th>
        </tr>
    </thead>
    <tbody>
    @foreach($items as $item)
        <tr>
            <td>{{ $item->name }} {{ $item->surname }}</td>
            <td>{{ $item->name }}</td>
            <td></td>
        </tr>
    @endforeach			
    </tbody>
</table>
@endsection