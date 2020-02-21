<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Zach Bruno's Portfolio</title>
  <meta name="description" content="Zach Bruno's portfolio site showing off projects and skills" />
  <meta name="keywords" content="software, engineer, software engineer, javascript, frontend, frontend engineer, react, laravel, php, mysql, fullstack engineer, css, mobx, three.js, ui, ux" />
  <meta name="author" content="Zach Bruno" />

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">
</head>

<body class="h-screen antialiased leading-none font-sans bg-purple-100 text-purple-800">
  @yield('content')
</body>

<script src="{{ mix('app/js/index.js') }}"></script>

</html>