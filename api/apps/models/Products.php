<?php

// This demo connect table product

use Phalcon\Mvc\Model;

class Products extends Model
{

	public function initialize()
	{
		$this->setSource('products');
	}
}
