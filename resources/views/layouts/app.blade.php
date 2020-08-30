<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    @include('layouts.head')

    <body>

        @include('layouts.header')

        @yield('alert')

        <main>
            @yield('content')
        </main>

        @include('layouts.social-media')

        @include('layouts.cta')

        @include('layouts.footer')

        @include('layouts.scripts')

    </body>
</html>
