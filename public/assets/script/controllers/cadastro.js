const app = angular.module('loja-virtual', [])
app.controller('CreateAccountController', ($scope, $http) => {
    $scope.name = ""
    $scope.email = ""
    $scope.password = ""
    $scope.passwordConfirmation = ""
    $scope.loading = false;
    $scope.userList = [];

    $scope.handleSubmit = () => {
        
        if ($scope.password !== $scope.passwordConfirmation) {
            return
        }
        
        $scope.loading = true;
        console.log($scope.name)

        $http.post('http://localhost:3333/api/users', {
            name: $scope.name,
            email: $scope.email,
            password: $scope.password,
        }).then((response) => {
            $scope.loading = false;
            console.log(response)
            location.href = "/loja.html";
        }, () => {
            $scope.loading = false;
            console.error('Erro ao enviar solicitação POST:', error);
        })
    }
    $scope.loadUser = async () => {
        const { data } = await $http.get('http://localhost:3131/api/users', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        $scope.userList = data;
        console.log($scope.userList);
        $scope.$apply();
    }
    $scope.loadUser();
})