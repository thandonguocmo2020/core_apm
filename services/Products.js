function Product($http) {
    this.getProduct = function () {
        return $http.get(BASEURL + 'products');
    }
    this.getProductBySlugify = function(slugify){
        return $http.get(BASEURL + 'products/getProductBySlugify?slugify=' + slugify);
    }
    this.getProductById = function(id){
		return $http.get(BASEURL + 'products/getProductById?id=' + id);
    }
}
app.service('Product', Product);