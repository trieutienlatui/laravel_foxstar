<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

use Illuminate\Support\Facades\Artisan;

Route::get('/generate-key', function () {
    Artisan::call('key:generate');
    return '✅ APP_KEY đã được tạo thành công!';
});
