angular
    .module('game', [
        'pascalprecht.translate'
    ])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }])
    .config(['$translateProvider', function($translate) {
        $translate.useSanitizeValueStrategy(null);
        $translate.translations('en', {
            40001: 'Join Team',
            40002: 'Create Team',
            40003: '候选战队',
            40004: '已送出申请',
            40005: '邀请你的名单',
            40006: '队伍名称',
            40007: '确定',
            40008: '候选名单',
            40009: '已邀请名单',
            40010: '申请名单',
            40011: '有',
            40012: '战队邀请你加入',
            40013: '接受',
            40014: '拒绝',
            40015: '邀请',
            40016: '搜寻合适队友。ex.财经系女',
            40017: '申请'
        }).translations('zh', {
            40001: '加入战队',
            40002: '创建战队',
            40003: '候选战队',
            40004: '已送出申请',
            40005: '邀请你的名单',
            40006: '队伍名称',
            40007: '确定',
            40008: '候选名单',
            40009: '已邀请名单',
            40010: '申请名单',
            40011: '有',
            40012: '战队邀请你加入',
            40013: '接受',
            40014: '拒绝',
            40015: '邀请',
            40016: '搜寻合适队友。ex.财经系女',
            40017: '申请'
        });
        $translate.use('zh');
    }])
    .directive('gameteam', function() {
        return {
            restrict: "E",
            templateUrl: 'template/gameteam.html',
            link: function($scope, $element, $attrs, ngModel) {
                $element.css('opacity', 1);
            }
        };
    })
    .directive('teammember', function() {
        return {
            restrict: "E",
            templateUrl: 'template/teammember.html',
            link: function($scope, $element, $attrs, ngModel) {
                $element.css('opacity', 1);
            }
        };
    })
    .directive('teamjoin', function() {
        return {
            restrict: "E",
            templateUrl: 'template/teamjoin.html',
            link: function($scope, $element, $attrs, ngModel) {
                $element.css('opacity', 1);
            }
        };
    })
    .directive('ngDynamicDirective', ['$compile', '$parse', function($compile, $parse) {
        return {
            scope: {
                name: '=ngDynamicDirective'
            },
            restrict: 'A',
            link: function(scope, elem, attrs) {
                elem.attr(scope.name.replace(/([A-Z])/g, function(item) {
                    return '-' + item.toString().toLowerCase();
                }), '');
                elem.removeAttr('ng-dynamic-directive');
                $compile(elem)(scope);
            }
        };
    }])
    .directive('teamsCanJoin', function() {
        return {
            restrict: "A",
            templateUrl: 'template/teams_can_join.html',
            link: function($scope, $element, $attrs, ngModel) {
                $element.css('opacity', 1);
            }
        };
    })
    .directive('teamsApplySent', function() {
        return {
            restrict: "A",
            templateUrl: 'template/teams_apply_sent.html',
            link: function($scope, $element, $attrs, ngModel) {
                $element.css('opacity', 1);
            }
        };
    })
    .directive('teamsBeingInvited', function() {
        return {
            restrict: "A",
            templateUrl: 'template/teams_being_invited.html',
            compile: function($scope, $element, $attrs, ngModel) {
                //$element.css('opacity', 1);
            }
        };
    })
    .directive('peopleCanJoin', function() {
        return {
            restrict: "A",
            templateUrl: 'template/people_can_join.html',
            link: function($scope, $element, $attrs, ngModel) {
                $element.css('opacity', 1);
            }
        };
    })
    .directive('peopleWantToJoin', function() {
        return {
            restrict: "A",
            templateUrl: 'template/people_want_to_join.html',
            link: function($scope, $element, $attrs, ngModel) {
                $element.css('opacity', 1);
            }
        };
    })
    .directive('peopleInvited', function() {
        return {
            restrict: "A",
            templateUrl: 'template/people_invited.html',
            link: function($scope, $element, $attrs, ngModel) {
                $element.css('opacity', 1);
            }
        };
    })
    .controller('gameteam', function($scope, $http) {
        $scope.currentMember = {};
        $scope.select = function(item) {
            $scope.selected = item;
        };
        $scope.teamMembers = [{
            title: 'CEO'
        }, {
            title: 'CFO'
        }, {
            title: 'COO'
        }, {
            title: 'CPO'
        }, {
            title: 'CMO'
        }];
        $http.get('/member').success(function(json) {
            if (!json.isSuccess) {
                return;
            }
            $scope.currentMember = json.result;
        });
        $http.get('/team').success(function(json) {
            if (!json.isSuccess) {
                return;
            }
            //$scope.teamMembers = json.result;
        });
    })
    .controller('teamjoin', function($scope, $http) {
        $scope.number = {
            teamsApplySent: 10,
            teamsBeingInvited: 2,
            peopleInvited: 3,
            peopleWantToJoin: 5
        };
        $scope.tabs = [{
            name: 'join',
            label: 40001,
            children: [{
                name: 'teamsCanJoin',
                label: 40003
            }, {
                name: 'teamsApplySent',
                label: 40004
            }, {
                name: 'teamsBeingInvited',
                label: 40005
            }]
        }, {
            name: 'create',
            label: 40002,
            children: [{
                name: 'peopleCanJoin',
                label: 40008
            }, {
                name: 'peopleInvited',
                label: 40009
            }, {
                name: 'peopleWantToJoin',
                label: 40010
            }]
        }];
        $scope.toggle = function(tab) {
            $scope.selected = tab;
        };
        $scope.selectTab = function(tab) {
            $scope.selected.tab = tab;
        };
    })
    .controller('teamsCanJoinCtrl', function($scope, $http) {
        $scope.teams = [{
            name: '星星之火可以燎原',
            members: [{
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "M"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "M"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "M"
            }]
        }, {
            name: '星星之火可以燎原',
            members: [{
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "M"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "M"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }]
        }, {
            name: '星星之火可以燎原',
            members: [{
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "M"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "U"
            }]
        }, {
            name: '星星之火可以燎原',
            members: [{
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "U"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }]
        }, {
            name: '星星之火可以燎原',
            members: [{
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "U"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }]
        }];
    })
    .controller('teamsApplySentCtrl', function($scope, $http) {
        $scope.teams = [{
            name: '星星之火可以燎原',
            members: [{
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "M"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "M"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "M"
            }]
        }, {
            name: '星星之火可以燎原',
            members: [{
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "M"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "M"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }]
        }, {
            name: '星星之火可以燎原',
            members: [{
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "M"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "U"
            }]
        }, {
            name: '星星之火可以燎原',
            members: [{
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "U"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }]
        }, {
            name: '星星之火可以燎原',
            members: [{
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "U"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }]
        }];
    })
    .controller('teamsBeingInvitedCtrl', function($scope, $http) {
        $scope.teams = [{
            name: '星星之火可以燎原',
            members: [{
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "M"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "M"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "M"
            }]
        }, {
            name: '星星之火可以燎原',
            members: [{
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "M"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "M"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }]
        }, {
            name: '星星之火可以燎原',
            members: [{
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "M"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "U"
            }]
        }, {
            name: '星星之火可以燎原',
            members: [{
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "U"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }]
        }, {
            name: '星星之火可以燎原',
            members: [{
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "U"
            }, {
                avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                nick_name: "五花肉",
                gender: "F"
            }]
        }];
    })
    .controller('peopleCanJoinCtrl', function($scope, $http) {
        $scope.persons = [{
            avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
            nick_name: "五花肉",
            gender: "M"
        }, {
            avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
            nick_name: "五花肉",
            gender: "F"
        }, {
            avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
            nick_name: "五花肉",
            gender: "M"
        }, {
            avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
            nick_name: "五花肉",
            gender: "F"
        }, {
            avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
            nick_name: "五花肉",
            gender: "M"
        }];
    })
    .controller('peopleInvitedCtrl', function($scope, $http) {
        $scope.persons = [{
            avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
            nick_name: "五花肉",
            gender: "M"
        }, {
            avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
            nick_name: "五花肉",
            gender: "F"
        }, {
            avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
            nick_name: "五花肉",
            gender: "M"
        }, {
            avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
            nick_name: "五花肉",
            gender: "F"
        }, {
            avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
            nick_name: "五花肉",
            gender: "M"
        }];
    })
    .controller('peopleWantToJoinCtrl', function($scope, $http) {
        $scope.persons = [{
            avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
            nick_name: "五花肉",
            gender: "M"
        }, {
            avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
            nick_name: "五花肉",
            gender: "F"
        }, {
            avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
            nick_name: "五花肉",
            gender: "M"
        }, {
            avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
            nick_name: "五花肉",
            gender: "F"
        }, {
            avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
            nick_name: "五花肉",
            gender: "M"
        }];
    });