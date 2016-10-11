<?php
date_default_timezone_set('Asia/Bangkok');
use Phalcon\Loader;
use Phalcon\Db\Adapter\Pdo\Mysql as Database;
use Phalcon\Mvc\Application;
use Phalcon\Mvc\View;
use Phalcon\DI\FactoryDefault as DI;

/**
 * Very simple MVC structure
 */

$loader = new Loader();

$loader->registerDirs(array(
	'../apps/controllers/',
	'../apps/models/'
));

$loader->register();

$di = new DI();

//Registering a router
$di->set('router', 'Phalcon\Mvc\Router');

//Registering a dispatcher
$di->set('dispatcher', 'Phalcon\Mvc\Dispatcher');

//Registering a Http\Response
$di->set('response', 'Phalcon\Http\Response');

//Registering a Http\Request
$di->set('request', 'Phalcon\Http\Request');

$di->set('view', function(){
	$view = new View();
	$view->setViewsDir('../apps/views/');
	return $view;
});


$di->set('db', function(){
	return new Database(array(
		"host" => "localhost",
		"username" => "root",
		"password" => "password",
		"dbname" => "db_name",
		"options" => array( 
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
        )
	));
});

//Registering the Models-Metadata
$di->set('modelsMetadata', 'Phalcon\Mvc\Model\Metadata\Memory');

//Registering the Models Manager
$di->set('modelsManager', 'Phalcon\Mvc\Model\Manager');

try {

	$application = new Application($di);

	echo $application->handle()->getContent();

} catch (Exception $e) {
	echo $e->getMessage();
}