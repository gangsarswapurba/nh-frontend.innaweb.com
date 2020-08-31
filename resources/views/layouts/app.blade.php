<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    @include('layouts.head')

    <body>

        @include('layouts.topbar')

        @include('layouts.header')

        @yield('alert')

        <div class="container" />
            @yield('content')

            @include('layouts.social-media')

            @include('layouts.cta')

            {{-- @include('layouts.footer') --}}
        </div>

        @include('layouts.scripts')

    </body>
</html>
