function pageTitle($rootScope, $timeout) {
    return {
        link: function (scope, element) {
            var listener = function (event, toState, toParams, fromState, fromParams) {
                // Default title
                var title = 'DIEPVIEN007 | Thiết kế website chuyên nghiệp, đẳng cấp, số 1 tại Việt Nam';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle)
                    title = 'DIEPVIEN007 | ' + toState.data.pageTitle;
                $timeout(function () {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    };
}

app.directive('pageTitle', pageTitle);