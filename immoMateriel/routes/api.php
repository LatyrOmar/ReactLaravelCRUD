<?php

use App\Http\Controllers\Api\MaterielController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['namespace','App\Http\Controllers\Api'],function(){
    
    Route::apiResource('materiel',MaterielController::class);
});
