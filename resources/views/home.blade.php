@extends('layout.app')

@section('title', 'Foxstars FPT Telecom 2024')

@section('content')

    @include('partials.header')

    @include('sections.section1')
    @include('sections.section2')
    @include('sections.section3')
    @include('sections.section4')
    @include('sections.section5')

    @include('partials.quote')

    @include('partials.footer')

@endsection