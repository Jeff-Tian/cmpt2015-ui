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
            team.memberLength = team.members.length;
            if (team.memberLength < 5) {
                team.members = team.members.concat($scope.empty.slice(team.memberLength));
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
        $scope.formatDate = function(date) {
            if (!date) {
                return;
            }
            date = new Date(date);
            date = [
                date.getFullYear(),
                date.getMonth() + 1,
                date.getDate(),
                date.getHours(),
                date.getMinutes()
            ];
            date.forEach(function(val, index) {
                if (val < 10) {
                    date[index] = '0' + val;
                }
            });
            return date[0] + '年' + date[1] + '月' + date[2] + '日 ' + date[3] + ':' + date[4];
        };
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
        var timeout;

        function loadWithTime() {
            clearTimeout(timeout);
            timeout = setTimeout(searchTeams, 300);
        }

        function searchTeams() {
            if ($scope.teams) {
                $scope.teams.forEach(function(team) {
                    team.expanded = false;
                });
            }
            $http.post(cmpt2015 + '/team/recommend/', {
                epic_id: $scope.ms_epic.epic_id,
                name: $scope.teamName
            }).success(function(teams) {
                if (teams.isSuccess) {
                    $scope.teams = teams.result ? Object.keys(teams.result).map(function(team) {
                        return teams.result[team];
                    }) : [];
                    $scope.fixTeams($scope.teams);
                }
            });
        }
        $scope.sendApply = function(team) {
            $http.post(cmpt2015 + '/team/apply', {
                team_id: team.team_id
            }).success(function(json) {
                //TODO show message here.
            });
        };
        $scope.$watch('teamName', function(name) {
            if (name) {
                loadWithTime();
            }
        });
        $scope.$on('teamsCanJoin', searchTeams);
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
                    $scope.teams.splice($scope.teams.indexOf(team), 1);
                }
            });
        };
    }])
    .controller('peopleCanJoinCtrl', ['$scope', '$http', function($scope, $http) {
        var timeout;

        function loadWithTime() {
            clearTimeout(timeout);
            timeout = setTimeout(searchMember, 300);
        }

        function searchMember() {
            $http.post(cmpt2015 + '/team/membersearch', {
                name: $scope.memberName,
                epic_id: $scope.ms_epic.epic_id
            }).success(function(json) {
                if (json.isSuccess) {
                    $scope.persons = json.result || [];
                    $scope.fixMembers($scope.persons);
                }
            });
        }
        $scope.$watch('memberName', function(name) {
            if (name) {
                loadWithTime();
            }
        });
        $scope.$on('peopleCanJoin', searchMember);
        $scope.sendInvite = function(person) {
            $http.post(cmpt2015 + '/team/invite', {
                be_invited_id: person.member_id,
                team_id: $scope.ms_team.team_id
            }).success(function(json) {
                if (json.isSuccess) {
                    $scope.persons.splice($scope.persons.indexOf(person), 1);
                }
            });
        };
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
angular.module('cmpt2015').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('template/epic.html',
    "<div ng-controller=\"epicBaseCtrl\" class=\"cloak\">\n" +
    "    <epicinfo></epicinfo>\n" +
    "    <teammember></teammember>\n" +
    "    <teamjoin></teamjoin>\n" +
    "</div>"
  );


  $templateCache.put('template/epicinfo.html',
    "<div class=\"epicinfo\">\n" +
    "    <div class=\"head\">\n" +
    "        <h2>{{ms_epic.title}}</h2>\n" +
    "        <div>{{ms_epic.title}}</div>\n" +
    "        <i class=\"icon wechat\"></i>\n" +
    "    </div>\n" +
    "    <div class=\"body\">\n" +
    "        <div class=\"ui grid container\">\n" +
    "            <div class=\"sixteen wide column\">\n" +
    "                <i class=\"calendar icon\"></i>\n" +
    "                比赛时间：\n" +
    "                {{formatDate(ms_epic.game_from)}} - {{formatDate(ms_epic.game_end)}}\n" +
    "            </div>\n" +
    "            <div class=\"sixteen wide column\">\n" +
    "                <i class=\"flag icon\"></i>\n" +
    "                报名时间：\n" +
    "                {{formatDate(ms_epic.sign_from)}} - {{formatDate(ms_epic.sign_end)}}\n" +
    "            </div>\n" +
    "            <div class=\"eight wide column\">\n" +
    "                <i class=\"checkered flag icon\"></i> {{ms_epic.region}}\n" +
    "            </div>\n" +
    "            <div class=\"eight wide column\">\n" +
    "                <i class=\"user icon\"></i>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"grid\">\n" +
    "            <div class=\"sixteen wide column\">\n" +
    "                <p>规则:5人组队参赛,4-6队同场竞技,进行4轮决策(第1轮 2H/ 第2轮 2H/ 第3轮 2H/ 第4轮 2H),最后 以市场份额增量及累积净利润为指标,评判优胜。</p>\n" +
    "                <p>流程:09月30日初赛、10月16日全国复赛、10月28日全国决赛</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('template/people_can_join.html',
    "<div class=\"people-can-join list\" ng-controller=\"peopleCanJoinCtrl\">\n" +
    "    <div class=\"ui search\">\n" +
    "        <div class=\"ui left icon input\">\n" +
    "            <i class=\"icon search\"></i>\n" +
    "            <input type=\"text\" class=\"search-input\" placeholder=\"{{40016|translate}}\" ng-model=\"memberName\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"persons ui items\">\n" +
    "        <div class=\"item ui grid\">\n" +
    "            <div class=\"sixteen wide column\">\n" +
    "                <div class=\"ui five column grid\">\n" +
    "                    <div class=\"img column\" ng-repeat=\"person in persons\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"img\">\n" +
    "                                <img class=\"gender-{{person.gender.toLowerCase()}}\" ng-src=\"{{person.avatar}}-small\">\n" +
    "                            </div>\n" +
    "                            <div class=\"title\">\n" +
    "                                {{person.nick_name}}\n" +
    "                            </div>\n" +
    "                            <div class=\"description\">\n" +
    "                                <div>清华大学</div>\n" +
    "                                <div>设计系</div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <button class=\"btn\" ng-click=\"sendInvite(person)\">\n" +
    "                            <i class=\"icon plus\"></i>{{40015|translate}}\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('template/people_invited.html',
    "<div class=\"people-invited list\" ng-controller=\"peopleInvitedCtrl\">\n" +
    "    <div class=\"persons ui items\">\n" +
    "        <div class=\"item ui grid\">\n" +
    "            <div class=\"sixteen wide column\">\n" +
    "                <div class=\"ui five column grid\">\n" +
    "                    <div class=\"img column\" ng-repeat=\"person in persons\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"img\">\n" +
    "                                <img class=\"gender-{{person.gender.toLowerCase()}}\" ng-src=\"{{person.avatar}}-small\">\n" +
    "                            </div>\n" +
    "                            <div class=\"title\">\n" +
    "                                {{person.nick_name}}(CEO)\n" +
    "                            </div>\n" +
    "                            <div class=\"description\">\n" +
    "                                <div>清华大学</div>\n" +
    "                                <div>设计系</div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('template/people_want_to_join.html',
    "<div class=\"people-want-to-join list\" ng-controller=\"peopleWantToJoinCtrl\">\n" +
    "    <div class=\"persons ui items\">\n" +
    "        <div class=\"item ui grid\">\n" +
    "            <div class=\"sixteen wide column\">\n" +
    "                <div class=\"ui five column grid\">\n" +
    "                    <div class=\"img column\" ng-repeat=\"member in members\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"img\">\n" +
    "                                <img class=\"gender-{{member.gender.toLowerCase()}}\" ng-src=\"{{member.avatar}}-small\">\n" +
    "                            </div>\n" +
    "                            <div class=\"title\">\n" +
    "                                {{member.nick_name}}(CEO)\n" +
    "                            </div>\n" +
    "                            <div class=\"description\">\n" +
    "                                <div>清华大学</div>\n" +
    "                                <div>设计系</div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <button class=\"btn\" ng-click=\"acceptApply(member)\">\n" +
    "                            <i class=\"icon checkmark\"></i>{{40013|translate}}\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('template/teamjoin.html',
    "<div ng-controller=\"teamjoinCtrl\" class=\"teamjoin cloak\" ng-show=\"!share_team && ms_member\">\n" +
    "    <div class=\"actions ui grid hide\" ng-show=\"!share_team && ms_member && !ms_team\">\n" +
    "        <div class=\"six wide column\">\n" +
    "            <div class=\"toggle\">\n" +
    "                <div class=\"{{tab.name}}\" ng-repeat=\"tab in tabs\">\n" +
    "                    <button class=\"btn\" ng-class=\"{selected:selected===tab}\" ng-click=\"toggle(tab)\" ng-show=\"showTabHeader(tab)\">\n" +
    "                        {{tab.label|translate}}\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"contents\">\n" +
    "        <div class=\"{{tab.name}}\" ng-show=\"showTabContent(tab)\" ng-repeat=\"tab in tabs\">\n" +
    "            <div class=\"create-input ui form\" ng-controller=\"createTeamCtrl\" ng-if=\"tab.name=='create' && !ms_team\">\n" +
    "                <div class=\"inline fields\">\n" +
    "                    <div class=\"one wide field\">\n" +
    "                    </div>\n" +
    "                    <div class=\"label four wide field\">\n" +
    "                        {{40006|translate}}\n" +
    "                    </div>\n" +
    "                    <div class=\"eight wide field\">\n" +
    "                        <input type=\"text\" maxlength=\"100\" ng-model=\"name\">\n" +
    "                    </div>\n" +
    "                    <div class=\"four wide field\">\n" +
    "                        <button class=\"btn\" ng-click=\"createTeam()\">\n" +
    "                            {{40007|translate}}\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"tab-header ui form\" ng-show=\"tab.name!='create'||ms_team\">\n" +
    "                <div class=\"inline fields\">\n" +
    "                    <div class=\"four wide field\" ng-repeat=\"child in tab.children\">\n" +
    "                        <button class=\"btn\" ng-class=\"{selected: selectedTab===child}\" ng-click=\"selectTab(child)\">\n" +
    "                            {{child.label|translate}}\n" +
    "                            <span ng-if=\"number[child.name]\">\n" +
    "                                ({{number[child.name]}})\n" +
    "                            </span>\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"tabs\" ng-show=\"tab.name!='create'||ms_team\">\n" +
    "                <div class=\"content {{child.name}}\" ng-show=\"selectedTab === child\" ng-repeat=\"child in tab.children\">\n" +
    "                    <div ng-dynamic-directive=\"child.name\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>"
  );


  $templateCache.put('template/teammember.html',
    "<div ng-controller=\"gameteamCtrl\" class=\"teammember\" ng-show=\"share_team || ms_team\">\n" +
    "    <div class=\"head\" ng-show=\"!isSharePage && ms_team\">\n" +
    "        还差{{5-ms_team.memberLength}}位队友,赶紧邀请朋友加入!\n" +
    "        <button class=\"btn\" ng-click=\"removeMember(ms_member)\">\n" +
    "            <i class=\"icon sign out\"></i> 我要离队\n" +
    "        </button>\n" +
    "        <button class=\"btn\">\n" +
    "            <i class=\"icon wechat\"></i> 微信邀请队友\n" +
    "        </button>\n" +
    "    </div>\n" +
    "    <div class=\"body\">\n" +
    "        <div class=\"name\">\n" +
    "            队伍名称：\n" +
    "            <label ng-show=\"!edit\">{{(isSharePage? share_team : ms_team)['name']}}</label>\n" +
    "            <input type=\"text\" maxlength=\"20\" ng-model=\"(isSharePage? share_team : ms_team)['name']\" ng-show=\"edit\">\n" +
    "            <i class=\"icon write\" ng-show=\"!isSharePage && isLeader && !edit\" ng-click=\"edit=true\"></i>\n" +
    "            <i class=\"icon checkmark\" ng-show=\"!isSharePage && isLeader && edit\" ng-click=\"updateTeamName()\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"ui grid\"></div>\n" +
    "        <div class=\"ui five column grid list\">\n" +
    "            <div class=\"column item\" ng-class=\"{selected:selected===member}\" ng-repeat=\"member in (isSharePage? share_team : ms_team)['members']\">\n" +
    "                <div class=\"img\" ng-click=\"select(member)\">\n" +
    "                    <img class=\"gender-{{member.gender.toLowerCase()}}\" ng-src=\"{{member.avatar}}-small\">\n" +
    "                    <i class=\"icon remove circle\" ng-if=\"member.member_id\" ng-click=\"removeMember(member)\"></i>\n" +
    "                </div>\n" +
    "                <div class=\"title\">\n" +
    "                    {{member.nick_name||member.member_id}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('template/teams_apply_sent.html',
    "<div class=\"teams-apply-sent list\" ng-controller=\"teamsApplySentCtrl\">\n" +
    "    <div class=\"teams ui items\">\n" +
    "        <div class=\"item ui grid\" ng-repeat=\"team in teams\" ng-class=\"{expanded:team.expanded}\">\n" +
    "            <span class=\"name middle aligned content six wide column\">\n" +
    "                {{team.name}}\n" +
    "            </span>\n" +
    "            <div class=\"images ten wide column minor\" ng-show=\"!team.expanded\" ng-click=\"team.expanded=true\">\n" +
    "                <div class=\"ui five column grid\">\n" +
    "                    <div class=\"img column\" ng-repeat=\"member in team.members\">\n" +
    "                        <img class=\"gender-{{member.gender.toLowerCase()}}\" ng-src=\"{{member.avatar}}-small\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"images\" ng-show=\"team.expanded\">\n" +
    "                <div class=\"ui five column grid\">\n" +
    "                    <div class=\"img column\" ng-repeat=\"member in team.members\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"img\">\n" +
    "                                <img class=\"gender-{{member.gender.toLowerCase()}}\" ng-src=\"{{member.avatar}}-small\">\n" +
    "                            </div>\n" +
    "                            <div class=\"title\">\n" +
    "                                {{member.nick_name || '&nbsp;'}}\n" +
    "                            </div>\n" +
    "                            <div class=\"description\">\n" +
    "                                <div>清华大学</div>\n" +
    "                                <div>设计系</div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('template/teams_being_invited.html',
    "<div class=\"teams-being-invited list\" ng-controller=\"teamsBeingInvitedCtrl\">\n" +
    "    <!--<div class=\"instruction\">\n" +
    "        {{40011|translate}}{{number}}{{40012|translate}}\n" +
    "    </div>-->\n" +
    "    <div class=\"ui items\">\n" +
    "        <div class=\"item ui grid\" ng-repeat=\"team in teams\" ng-class=\"{expanded:team.expanded}\">\n" +
    "            <div class=\"middle aligned content two wide column\">\n" +
    "                <button class=\"btn\" ng-click=\"acceptInvite(team)\">\n" +
    "                    <i class=\"icon plus\"></i>{{40013|translate}}\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            <span class=\"name middle aligned content four wide column\">\n" +
    "                {{team.name}}\n" +
    "            </span>\n" +
    "            <div class=\"images ten wide column minor\" ng-show=\"!team.expanded\" ng-click=\"team.expanded=true\">\n" +
    "                <div class=\"ui five column grid\">\n" +
    "                    <div class=\"img column\" ng-repeat=\"member in team.members\">\n" +
    "                        <img class=\"gender-{{member.gender.toLowerCase()}}\" ng-src=\"{{member.avatar}}-small\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"images\" ng-show=\"team.expanded\">\n" +
    "                <div class=\"ui five column grid\">\n" +
    "                    <div class=\"img column\" ng-repeat=\"member in team.members\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"img\">\n" +
    "                                <img class=\"gender-{{member.gender.toLowerCase()}}\" ng-src=\"{{member.avatar}}-small\">\n" +
    "                            </div>\n" +
    "                            <div class=\"title\">\n" +
    "                                {{member.nick_name}}\n" +
    "                            </div>\n" +
    "                            <div class=\"description\">\n" +
    "                                <div>清华大学</div>\n" +
    "                                <div>设计系</div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('template/teams_can_join.html',
    "<div class=\"teams-can-join list\" ng-controller=\"teamsCanJoinCtrl\">\n" +
    "    <div class=\"ui search\">\n" +
    "        <div class=\"ui left icon input\">\n" +
    "            <i class=\"icon search\"></i>\n" +
    "            <input type=\"text\" class=\"search-input\" placeholder=\"{{40016|translate}}\" ng-model=\"teamName\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"ui items\">\n" +
    "        <div class=\"item ui grid\" ng-repeat=\"team in teams\" ng-class=\"{expanded:team.expanded}\">\n" +
    "            <div class=\"middle aligned content two wide column\">\n" +
    "                <button class=\"btn\" ng-click=\"sendApply(team)\">\n" +
    "                    <i class=\"icon plus\"></i>{{40017|translate}}\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            <span class=\"name middle aligned content four wide column\">\n" +
    "                {{team.name}}\n" +
    "            </span>\n" +
    "            <div class=\"images ten wide column minor\" ng-show=\"!team.expanded\" ng-click=\"team.expanded=true\">\n" +
    "                <div class=\"ui five column grid\">\n" +
    "                    <div class=\"img column\" ng-repeat=\"member in team.members\">\n" +
    "                        <img class=\"gender-{{member.gender.toLowerCase()}}\" ng-src=\"{{member.avatar}}-small\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"images\" ng-show=\"team.expanded\">\n" +
    "                <div class=\"ui five column grid\">\n" +
    "                    <div class=\"img column\" ng-repeat=\"member in team.members\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"img\">\n" +
    "                                <img class=\"gender-{{member.gender.toLowerCase()}}\" ng-src=\"{{member.avatar}}-small\">\n" +
    "                            </div>\n" +
    "                            <div class=\"title\">\n" +
    "                                {{member.nick_name || '&nbsp;'}}\n" +
    "                            </div>\n" +
    "                            <div class=\"description\">\n" +
    "                                <div>清华大学</div>\n" +
    "                                <div>设计系</div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );

}]);
