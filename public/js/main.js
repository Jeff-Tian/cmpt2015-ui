angular
    .module('cmpt2015', [
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
        }).translations('cn', {
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
        $translate.use('cn');
    }])
    .directive('epic', function() {
        return {
            restrict: "E",
            templateUrl: 'template/epic.html',
            link: function($scope, $element, $attrs, ngModel) {
                $element.css('opacity', 1);
            }
        };
    })
    .directive('epicinfo', function() {
        return {
            restrict: "E",
            templateUrl: 'template/epicinfo.html',
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
            restrict: 'A',
            link: function(scope, elem, attrs) {
                scope.$watch(elem.attr('ng-dynamic-directive'), function(val) {
                    elem.attr(val.replace(/([A-Z])/g, function(item) {
                        return '-' + item.toString().toLowerCase();
                    }), val);
                    elem.removeAttr('ng-dynamic-directive');
                    $compile(elem)(scope);
                });
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
    .controller('epicBaseCtrl', ['$scope', '$http', function($scope, $http) {
        function updateLeader() {
            if ($scope.ms_member && $scope.ms_team) {
                $scope.isLeader = $scope.ms_team.leader == $scope.ms_member.member_id;
            }
        }

        function loadTeam() {
            $http.post(cmpt2015 + '/team/memberteam', {
                epic_id: $scope.epic_id
            }).success(function(team) {
                if (team.isSuccess && team.result) {
                    $scope.ms_team = team.result;
                    $scope.fixTeam($scope.ms_team);
                    console.log($scope.ms_team);
                }
            });
        }

        var search = location.search.slice(1);
        var unknown = cmpt2015 + '/img/unknown.png?' + (typeof buildDate == 'undefined' ? '' : buildDate);
        $scope.empty = [{}, {}, {}, {}, {}];
        $scope.isLeader = false;
        $scope.fixTeams = function(teams) {
            teams.forEach($scope.fixTeam);
        };
        $scope.fixTeam = function(team) {
            if (team.members.length < 5) {
                team.members = team.members.concat($scope.empty.slice(team.members.length));
            }
            $scope.fixMembers(team.members);
        };
        $scope.fixMembers = function(members) {
            members.forEach(function(member) {
                member.gender = member.gender || 'U';
                member.avatar = member.avatar || unknown;
            });
        };
        if (search) {
            search = search.split('&');
            search.forEach(function(query) {
                query = query.split('=');
                if (query && query.length == 2) {
                    $scope[query[0]] = query[1];
                    console.log(query);
                }
            });
        }
        $scope.$watch('epic_id', function(val) {
            if (!val) {
                return;
            }
            $http.get(cmpt2015 + '/game/epic/load/' + val).success(function(epic) {
                if (epic.isSuccess) {
                    $scope.ms_epic = epic.result;
                }
            });
        });
        $scope.$watch('team_id', function(val) {
            $scope.isSharePage = !!val;
            if (!val) {
                return;
            }
            $http.get(cmpt2015 + '/team/load/' + val).success(function(team) {
                if (team.isSuccess && team.result) {
                    $scope.share_team = team.result;
                    $scope.fixTeam($scope.share_team);
                    console.log($scope.share_team);
                }
            });
        });
        $scope.$watch('member_info', function(member) {
            if (!member || !member.member_id) {
                return;
            }
            $scope.ms_member = member;
        });
        $scope.$watch('ms_team', function(ms_team) {
            updateLeader();
        });
        $scope.$watch('ms_member', function(val) {
            updateLeader();
            if (val) {
                loadTeam();
            }
        });
        $scope.$on('joinTeamSuccess', loadTeam);
        $scope.$on('acceptApplySuccess', loadTeam);
        $scope.$on('createTeamSuccess', loadTeam);
        $scope.$on('removeMemberSuccess', loadTeam);
        //$scope.$on('updateTeamNameSuccess', loadTeam);
    }])
    .controller('gameteamCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.updateTeamName = function() {
            console.log($scope.ms_team.name);
            $http.post(cmpt2015 + '/team/updateTeam', {
                name: $scope.ms_team.name
            }).success(function(json) {
                if (json.isSuccess) {
                    $scope.$emit('updateTeamNameSuccess');
                    $scope.edit = false;
                }
            });
        };
        $scope.removeMember = function(member) {
            $http.post(cmpt2015 + '/team/removeMember', {
                member_id: member.member_id,
                team_id: $scope.ms_team.team_id
            }).success(function(json) {
                if (json.isSuccess) {
                    $scope.$emit('removeMemberSuccess');
                }
            });
        };
        $scope.select = function(member) {
            if (!$scope.isLeader || !member.member_id) {
                return;
            }
            $scope.selected = $scope.selected === member ? null : member;
        };
    }])
    .controller('teamjoinCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.number = {
            teamsApplySent: 0,
            teamsBeingInvited: 0,
            peopleInvited: 0,
            peopleWantToJoin: 0
        };
        $scope.tabs = [{
            name: 'join',
            label: 40001,
            filter: 'ms_member && !ms_team',
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
            filter: 'ms_member && !ms_team',
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
        $scope.tabs.forEach(function(tab) {
            $scope.$watch(tab.filter, function(val) {
                tab.show = val;
            });
        });
        $scope.$watch('selected', function(selected) {
            if (selected && !selected.tab) {
                $scope.selectedTab = selected.children[0];
            }
        });
        //$scope.$watch('selected', function() {
        //    if (!$scope.selected) {
        //        return $scope.selected = $scope.tabs[0];
        //    }
        //    if ($scope.selected.name == 'join' && !$scope.selected.show) {
        //        $scope.selected = $scope.tabs[1];
        //    }
        //});
        $scope.toggle = function(tab) {
            $scope.selected = tab;
        };
        $scope.selectTab = function(tab) {
            $scope.selectedTab = tab;
        };
        $scope.$watch('selectedTab', function(tab) {
            if (!tab) {
                return;
            }
            $scope.$broadcast(tab.name);
        });
        $scope.showTabHeader = function(tab) {
            if (tab.name == 'join' && tab.show) {
                return true;
            }
            return tab.show;
        };
        $scope.showTabContent = function(tab) {
            if (tab.show === undefined) {
                return;
            }
            if (tab.name == 'join') {
                return $scope.selected === tab && !$scope.ms_team;
            }
            return $scope.selected === tab || $scope.ms_team;
        };
    }])
    .controller('createTeamCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.createTeam = function() {
            if ($scope.name) {
                $http.post(cmpt2015 + '/team/create', {
                    name: $scope.name,
                    epic_id: $scope.ms_epic.epic_id
                }).success(function(team) {
                    if (team.isSuccess) {
                        $scope.$emit('createTeamSuccess');
                    }
                });
            }
        };
    }])
    .controller('teamsCanJoinCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.sendApply = function(team) {
            $http.post(cmpt2015 + '/team/apply', {
                team_id: team.team_id
            }).success(function(json) {
                //TODO show message here.
            });
        };
        $scope.$on('teamsCanJoin', function() {
            $http.get(cmpt2015 + '/team/recommend/' + $scope.ms_epic.epic_id)
                .success(function(teams) {
                    if (teams.isSuccess) {
                        $scope.teams = teams.result ? Object.keys(teams.result).map(function(team) {
                            return teams.result[team];
                        }) : [];
                        $scope.fixTeams($scope.teams);
                    }
                });
        });
    }])
    .controller('teamsApplySentCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.$on('teamsApplySent', function() {
            if ($scope.teams) {
                $scope.teams.forEach(function(team) {
                    team.expanded = false;
                });
            }
            $http.get(cmpt2015 + '/team/myapply/' + $scope.ms_member.member_id)
                .success(function(teams) {
                    if (teams.isSuccess) {
                        $scope.teams = teams.result ? Object.keys(teams.result).map(function(tid) {
                            return teams.result[tid];
                        }) : [];
                        $scope.fixTeams($scope.teams);
                    }
                });
        });
    }])
    .controller('teamsBeingInvitedCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.$on('teamsBeingInvited', function() {
            if ($scope.teams) {
                $scope.teams.forEach(function(team) {
                    team.expanded = false;
                });
            }
            $http.get(cmpt2015 + '/team/myinvition/' + $scope.ms_member.member_id)
                .success(function(teams) {
                    if (teams.isSuccess) {
                        $scope.teams = teams.result ? Object.keys(teams.result).map(function(tid) {
                            return teams.result[tid];
                        }) : [];
                        $scope.fixTeams($scope.teams);
                    }
                });
        });
        $scope.acceptInvite = function(team) {
            $http.post(cmpt2015 + '/team/acceptInvite', {
                team_id: team.team_id
            }).success(function(json) {
                //TODO add message here
                $scope.$emit('joinTeamSuccess', team);
                if (json.isSuccess) {
                    $scope.teams.splice($scope.teams.indexOf(team), 0, 1);
                }
            });
        };
    }])
    .controller('peopleCanJoinCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.sendInvite = function(person) {
            $http.post(cmpt2015 + '/team/invite', {
                be_invited_id: person.id,
                team_id: $scope.ms_team.team_id
            }).success(function(json) {
                if (json.isSuccess) {
                    debugger
                }
            });
        };
        $scope.persons = [{
            avatar: "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
            nick_name: "五花肉",
            gender: "M",
            id: '5f428d5d-f7ff-457c-8647-1c44380b51a7'
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
    }])
    .controller('peopleInvitedCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.$on('peopleInvited', function() {
            $http.get(cmpt2015 + '/team/invitefor/' + $scope.ms_member.member_id)
                .success(function(persons) {
                    if (persons.isSuccess) {
                        $scope.persons = persons.result ? persons.result.map(function(person) {
                            return person.member;
                        }) : [];
                        $scope.fixMembers($scope.persons);
                    }
                });
        });
    }])
    .controller('peopleWantToJoinCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.$on('peopleWantToJoin', function() {
            $http.get(cmpt2015 + '/team/applierByTeam/' + $scope.ms_team.team_id)
                .success(function(members) {
                    if (members.isSuccess) {
                        $scope.members = members.result || [];
                        $scope.fixMembers($scope.members);
                    }
                });
        });

        $scope.acceptApply = function(member) {
            $http.post(cmpt2015 + '/team/acceptApply', {
                applier_id: member.member_id,
                team_id: $scope.ms_team.team_id,
            }).success(function(json) {
                //TODO add message here
                $scope.$emit('acceptApplySuccess');
                if (json.isSuccess) {
                    $scope.members.splice($scope.members.indexOf(member), 0, 1);
                }
            });
        };
    }]);