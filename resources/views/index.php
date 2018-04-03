<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
    <title>CURD test</title>
    <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.css" />
    <link rel="stylesheet" href="/app/assets/css/style.css" />
    <script src="/bower_components/angular/angular.js"></script>
    <script src="/bower_components/angular-animate/angular-animate.js"></script>
    <script src="/bower_components/angular-ui-router/release/angular-ui-router.js"></script>
    <script src="/bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
    <script src="/app/app.js"></script>
    <script src="/app/app.config.js"></script>
    <script src="/app/controllers/user.js"></script>
    <script src="/app/controllers/register.js"></script>
    <script src="/app/services/User.js"></script>
    <script src="/app/directives/clickLink.js"></script>
    <script src="/app/directives/templateInclude.js"></script>
</head>
<body>

    <main role="main" class="container">
        <ui-view class="starter-template"></ui-view>
    </main>

</body>
</html>