<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('gettodaynews','PostsController@gettodaynews');
Route::get('singlepage/{id}','PostsController@singlepage');
Route::get('getfeaturednews','PostsController@getfeaturednews');
Route::get('getnewsbysource/{source}','PostsController@getnewsbysource');
Route::get('seeall/{type}','PostsController@seeall');

Route::get('category','CategoryController@show');