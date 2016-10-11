# Config API with Phalcon

## Require System
1. Php 5.6+ (best 7.0)
2. Phalcon (build with version 3.0)
3. Apache 2+ or Nghinx 1.8+
4. MySQL (v.5.5+)

## Edit Config 
- Config at: api/public/index.php
- Time zone: i'm live Hanoi-Vn using timezone Asia/Bangkok
```javascript
date_default_timezone_set('Asia/Bangkok');
```
- Folder Controller, Model.
```javascript
$loader->registerDirs(array(
	'../apps/controllers/',
	'../apps/models/'
));
```
- DB Config default with MySQL
```javascript
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
```


