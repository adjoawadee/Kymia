/**
 * Application
 */
var app = angular.module('kymiaShopApp', ['ui.bootstrap']);

/**
 * Config
 */
app.config(function($locationProvider) { $locationProvider.html5Mode(true); });