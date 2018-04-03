<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return view('index');
});

$app->group(['prefix' => 'api', 'namespace' => 'App\Http\Controllers\Api'], function (Laravel\Lumen\Application $app) {
    $app->get('users', 'UserController@index');
    $app->get('users/{id:\\d+}', ['uses' => 'UserController@show']);
    $app->post('users', ['uses' => 'UserController@store']);
    $app->delete('users/{id:\\d+}', ['uses' => 'UserController@delete']);
    $app->put('users/{id:\\d+}', ['uses' => 'UserController@update']);
});