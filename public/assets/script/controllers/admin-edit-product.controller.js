app.controller('AdminEditProductController', ($scope, $http, SessionService, AdminService) => {
    $scope.name = "";
    $scope.price = "R$ 0,00";
    $scope.description = "";
    $scope.imageUrl = "";

    $scope.formatPrice = () => {
        const price = Number($scope.price.replace(/\D/g, '')).toString()
        const priceStr = price.padStart(3, '0')
        const priceArr = priceStr.split('')
        priceArr.splice(priceArr.length - 2, 0, ',')
        $scope.price = 'R$ ' + priceArr.join('');
    }

    $scope.handleSubmit = () => {
        const searchParams = new URLSearchParams(location.search)
        const productId = searchParams.get('productId')
        console.log('ID: ' + productId )

        $http.patch('http://localhost:3333/api/products/' + productId, {
            name: $scope.name,
            price: Number($scope.price.replace(/\D/g, '')) / 100,
            description: $scope.description,
            imageUrl: $scope.imageUrl,
        }, {
            headers: {
                Authorization: `Bearer ${SessionService.getToken()}`
            }
        }).then(() => {
            console.log('produto atualizado com sucesso')
            location.href = "/admin"
        })
    }


    function getProduct() {
        const searchParams = new URLSearchParams(location.search)
        const productId = searchParams.get('productId')

        $http.get('http://localhost:3333/api/products/' + productId).then(response => {
            $scope.price = response.data.price.toFixed(2)
            $scope.formatPrice();
            $scope.name = response.data.name;
            $scope.description = response.data.description;
            $scope.imageUrl = response.data.imageUrl;
        })
    }


    getProduct()
    SessionService.verifyLogin();
    SessionService.createVerifyLoginInterval();
    $scope.logout = SessionService.logout;
})