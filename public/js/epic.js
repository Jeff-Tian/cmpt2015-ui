angular
    .module('cmpt', [
        'pascalprecht.translate'
    ])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }])
    .config(['$translateProvider', function($translate) {
        $translate.useSanitizeValueStrategy(null);
        $translate.translations('en', {
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
            40017: '申请',
            40018: '微信邀请队友',
            40019: '查看详情',
            40020: "人报名",
            40021: '我要离队',
            40022: '队伍名称：',
            40023: '比赛时间：',
            40024: '报名时间：',
            40025: '我的比赛',
            40026: '我的比赛记录',
            40027: '我的比赛排名',
            40030: '比赛已结束，结束时间',
            40031: '已开始比赛，比赛结束时间',
            40032: '已结束报名，比赛开始时间',
            40033: '已开始报名，报名结束时间',
            40034: '即将开始报名，报名开始时间',
            40050: '申请已发送成功！',
            40051: '暂时没有已提交的申请',
            40052: '暂时没有被邀请',
            40053: '成功接受邀请',
            40054: '没有候选名单',
            40055: '成功发送邀请',
            40056: '暂时没有收到加入队伍的申请',
            40057: '暂时没有邀请任何人',
            40058: '成功接受申请',
            40060: '中国',
            40061: '西北',
            40062: '华北',
            40063: '东北',
            40064: '西南',
            40065: '华中',
            40066: '华东',
            40067: '华南',
            40068: '港澳台',
            40100: '东北地区',
            40101: '华北地区',
            40102: '华东地区',
            40103: '华南地区',
            40104: '华中地区',
            40105: '西南地区',
            40106: '西北地区',
            40107: '港澳台',
            40200: '分钟',
            40201: '小时',
            40202: '天',
            40203: '月',
            40204: '年',
            70008: '该用户已经属于一个队伍，不能再被加入队伍'
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
            40017: '申请',
            40018: '微信邀请队友',
            40019: '查看详情',
            40020: "人报名",
            40021: '我要离队',
            40022: '队伍名称：',
            40023: '比赛时间：',
            40024: '报名时间：',
            40025: '我的比赛',
            40026: '我的比赛记录',
            40027: '我的比赛排名',
            40030: '比赛已结束，结束时间',
            40031: '已开始比赛，比赛结束时间',
            40032: '已结束报名，比赛开始时间',
            40033: '已开始报名，报名结束时间',
            40034: '即将开始报名，报名开始时间',
            40050: '申请已发送成功！',
            40051: '暂时没有已提交的申请',
            40052: '暂时没有被邀请',
            40053: '成功接受邀请',
            40054: '没有候选名单',
            40055: '成功发送邀请',
            40056: '暂时没有收到加入队伍的申请',
            40057: '暂时没有邀请任何人',
            40058: '成功接受申请',
            40060: '中国',
            40061: '西北',
            40062: '华北',
            40063: '东北',
            40064: '西南',
            40065: '华中',
            40066: '华东',
            40067: '华南',
            40068: '港澳台',
            40100: '东北地区',
            40101: '华北地区',
            40102: '华东地区',
            40103: '华南地区',
            40104: '华中地区',
            40105: '西南地区',
            40106: '西北地区',
            40107: '港澳台',
            40200: '分钟',
            40201: '小时',
            40202: '天',
            40203: '月',
            40204: '年',
            70008: '该用户已经属于一个队伍，不能再被加入队伍'
        });
    }])
    .directive('cloak', function() {
        return {
            restrict: "C",
            link: function($scope, $element, $attrs, ngModel) {
                $element.css('opacity', 1);
            }
        };
    })
    .directive('epic', function() {
        return {
            restrict: "E",
            templateUrl: 'template/epic.html'
        };
    })
    .directive('epicinfo', function() {
        return {
            restrict: "E",
            templateUrl: 'template/epicinfo.html'
        };
    })
    .directive('teammember', function() {
        return {
            restrict: "E",
            templateUrl: 'template/teammember.html'
        };
    })
    .directive('teamjoin', function() {
        return {
            restrict: "E",
            templateUrl: 'template/teamjoin.html'
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
            templateUrl: 'template/teams_can_join.html'
        };
    })
    .directive('teamsApplySent', function() {
        return {
            restrict: "A",
            templateUrl: 'template/teams_apply_sent.html'
        };
    })
    .directive('teamsBeingInvited', function() {
        return {
            restrict: "A",
            templateUrl: 'template/teams_being_invited.html'
        };
    })
    .directive('peopleCanJoin', function() {
        return {
            restrict: "A",
            templateUrl: 'template/people_can_join.html'
        };
    })
    .directive('peopleWantToJoin', function() {
        return {
            restrict: "A",
            templateUrl: 'template/people_want_to_join.html'
        };
    })
    .directive('peopleInvited', function() {
        return {
            restrict: "A",
            templateUrl: 'template/people_invited.html'
        };
    })
    .directive('seriesList', function() {
        return {
            restrict: "E",
            templateUrl: 'template/series-list.html'
        };
    })
    .directive('experimentList', function() {
        return {
            restrict: "E",
            templateUrl: 'template/experiment-list.html'
        };
    })
    .directive('nationalList', function() {
        return {
            restrict: "E",
            templateUrl: 'template/national-list.html'
        };
    })
    .directive('seasonList', function() {
        return {
            restrict: "E",
            templateUrl: 'template/season-list.html'
        };
    })
    .directive('gameMenu', function() {
        return {
            restrict: "E",
            templateUrl: 'template/game-menu.html'
        };
    })
    .directive('gamePersonalRecord', function() {
        return {
            restrict: "E",
            templateUrl: 'template/game-personal-record.html'
        };
    })
    .directive('gameRankingList', function() {
        return {
            restrict: "E",
            templateUrl: 'template/game-ranking-list.html'
        };
    })
    .directive('chinaMap', ['$filter', '$translate', function($filter, $translate) {
        return {
            restrict: 'AE',
            require: 'ngModel',
            template: '<div id="china-map" style="height:400px">',
            link: {
                post: function(scope, element, attrs, ngModel) {
                    require.config({
                        paths: {
                            echarts: cmpt + '/libs/echarts/build/dist'
                        }
                    });
                    require([
                        'echarts',
                        'echarts/chart/map',
                    ], function(ec) {
                        var jsonPath = cmpt + '/json/area.json';
                        require('echarts/util/mapData/params').params.area = {
                            getGeoJson: function(callback) {
                                $.getJSON(jsonPath, function(json) {
                                    json.features.forEach(function(feature) {
                                        feature.properties.name = $translate.instant(feature.properties.id);
                                    });
                                    callback(json);
                                });
                            }
                        };

                        var myChart = ec.init(element.children().get(0));
                        myChart.setOption({
                            //tooltip: {
                            //    trigger: 'item',
                            //    formatter: '{b}'
                            //},
                            series: [{
                                name: '中国',
                                type: 'map',
                                mapType: 'area',
                                itemStyle: {
                                    normal: {
                                        color: 'rgb(147,187,215)',
                                        label: {
                                            show: true
                                        }
                                    },
                                    emphasis: {
                                        color: '#ff3c42',
                                        label: {
                                            show: true,
                                            textStyle: {
                                                color: '#fff'
                                            }
                                        }
                                    }
                                },
                                data: []
                            }]
                        });
                        window.onresize = myChart.resize;

                        //myChart.on(require('echarts/config').EVENT.MAP_SELECTED, function(param) {
                        //    ngModel.$setViewValue(param.target);
                        //});
                    });
                }
            }
        };
    }])
    .controller('epicBaseCtrl', ['$scope', '$http', '$translate', function($scope, $http, $translate) {
        function updateLeader() {
            if ($scope.ms_member && $scope.ms_team) {
                $scope.isLeader = $scope.ms_team.leader == $scope.ms_member.member_id;
            }
        }

        function loadTeam() {
            if (!$scope.epic_id) {
                return;
            }
            $http.post(cmpt + '/team/memberteam', {
                epic_id: $scope.epic_id
            }).success(function(team) {
                if (team.isSuccess) {
                    $scope.ms_team = team.result;
                    if ($scope.ms_team) {
                        $scope.fixTeam($scope.ms_team);
                    }
                }
            });
        }

        var search = location.search.slice(1);
        var unknown = cmpt + '/img/unknown.png?' + (typeof buildDate == 'undefined' ? '' : buildDate);
        $scope.empty = [{}, {}, {}, {}, {}];
        $scope.isLeader = false;
        $scope.cmpt = cmpt;
        if (!$translate.preferredLanguage()) {
            $translate.use($scope.lang || 'cn');
        }
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
            members.forEach($scope.fixMember);
        };
        $scope.fixMember = function(member) {
            member.gender = member.gender || 'U';
            if (member.member_id && member.avatar) {
                member.avatar += '-small';
            } else {
                member.avatar = unknown;
            }
        };
        $scope.fixEpic = function(epic) {
            if (!epic) {
                return epic;
            }
            epic.epic_game_end = new Date(epic.epic_game_end);
            epic.epic_game_from = new Date(epic.epic_game_from);
            epic.epic_sign_end = new Date(epic.epic_sign_end);
            epic.epic_sign_from = new Date(epic.epic_sign_from);
            return epic;
        };
        $scope.fixSeries = function(series) {
            if (!series || !series.epics) {
                return series;
            }
            series.epics.forEach($scope.fixEpic);
            return series;
        };
        if (search) {
            search = search.split('&');
            search.forEach(function(query) {
                query = query.split('=');
                if (query && query.length == 2) {
                    $scope[query[0]] = query[1];
                }
            });
        }
        $scope.$watch('epic_id', function(val) {
            if (!val) {
                return;
            }
            $http.get(cmpt + '/game/epic/load/' + val).success(function(epic) {
                if (epic.isSuccess) {
                    $scope.ms_epic = $scope.fixEpic(epic.result);
                }
            });
        });
        $scope.$watch('team_id', function(val) {
            $scope.isSharePage = !!val;
            if (!val) {
                return;
            }
            $http.get(cmpt + '/team/load/' + val).success(function(team) {
                if (team.isSuccess && team.result) {
                    $scope.share_team = team.result;
                    $scope.fixTeam($scope.share_team);
                }
            });
        });
        $scope.$watch('series_id', function(val) {
            if (!val) {
                return;
            }
            $http.get(cmpt + '/game/series/load/' + val).success(function(json) {
                if (json.isSuccess) {
                    $scope.ms_series = $scope.fixSeries(json.result);
                }
            });
        });
        $http.get(cmpt + '/member').success(function(member) {
            if (member.isSuccess) {
                $scope.ms_member = member.result;
                $scope.fixMember($scope.ms_member);
            }
        });
        $http.get(cmpt + '/game/series/my/').success(function(json) {
            if (json && json.isSuccess) {
                $scope.all_series = $scope.fixSeries(json.result);
            }
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
        $scope.formatDate = function(date, onlyDate) {
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
            var day = date[0] + '年' + date[1] + '月' + date[2] + '日 ';
            return onlyDate ? day : (day + date[3] + ':' + date[4]);
        };
        var now = $scope.now = new Date;
        var hour = 3600 * 1000;
        var day = 24 * hour;
        var month = 30 * day;
        var year = 12 * month;
        $scope.getDeltaTime = function(to) {
            var delta = new Date(to) - now;
            if ((delta /= hour) < 1) {
                /*minute*/
                return Math.ceil(delta * 60);
            } else if ((delta /= 24) < 1) {
                /*hour*/
                return Math.ceil(delta * 24);
            } else if ((delta /= 30) < 1) {
                /*day*/
                return Math.ceil(delta * 30);
            } else if ((delta /= 12) < 1) {
                /*month*/
                return Math.ceil(delta * 12);
            } else {
                /*year*/
                return Math.ceil(delta);
            }
        };
        $scope.getDeltaDays = function(to) {
            var delta = new Date(to) - now;
            return Math.ceil(delta / day);
        };
        $scope.getTime = function(epic) {
            if (epic.epic_game_end < now) {
                return $translate.instant(40030) + $scope.formatDate(epic.epic_game_end);
            }
            if (epic.epic_game_from < now) {
                return $translate.instant(40031) + $scope.formatDate(epic.epic_game_end);
            }
            if (epic.epic_sign_end < now) {
                return $translate.instant(40032) + $scope.formatDate(epic.epic_game_from);
            }
            if (epic.epic_sign_from < now) {
                return $translate.instant(40033) + $scope.formatDate(epic.epic_sign_end);
            }
            return $translate.instant(40034) + $scope.formatDate(epic.epic_sign_from);
        };
        $scope.showMessage = function(message, $scope) {
            $scope.message.text = message;
            $scope.message.error = null;
            $scope.message.show = true;
        };
        $scope.showError = function(error, $scope) {
            $scope.message.text = null;
            $scope.message.error = error;
            $scope.message.show = true;
        };
        $scope.hideMessage = function(message, $scope) {
            $scope.message.show = false;
        };
        $scope.translateRegion = function(region) {
            switch (region) {
                case 'china':
                    return 40060;
                case 'xibei':
                    return 40061;
                case 'huabei':
                    return 40062;
                case 'dongbei':
                    return 40063;
                case 'xinan':
                    return 40064;
                case 'huazhong':
                    return 40065;
                case 'huadong':
                    return 40066;
                case 'huanan':
                    return 40067;
                case 'gat':
                    return 40068;
                default:
                    return 40060;
            }
        };
        //$scope.$on('updateTeamNameSuccess', loadTeam);
    }])
    .controller('gameteamCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.updateTeamName = function() {
            $http.post(cmpt + '/team/update', {
                name: $scope.ms_team.name,
                team_id: $scope.ms_team.team_id
            }).success(function(json) {
                if (json.isSuccess) {
                    $scope.$emit('updateTeamNameSuccess');
                    $scope.edit = false;
                }
            });
        };
        $scope.removeMember = function(member) {
            $http.post(cmpt + '/team/left', {
                target_id: member.member_id,
                team_id: $scope.ms_team.team_id
            }).success(function(json) {
                if (json.isSuccess) {
                    $scope.$emit('removeMemberSuccess');
                }
            });
        };
        $scope.select = function(member) {
            if ($scope.isSharePage || !$scope.isLeader || !member.member_id || (member.member_id == $scope.ms_member.member_id)) {
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
                $http.post(cmpt + '/team/create', {
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
        $scope.message = {};

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
            $http.post(cmpt + '/team/recommend/', {
                epic_id: $scope.ms_epic.epic_id,
                name: $scope.teamName
            }).success(function(teams) {
                if (teams.isSuccess) {
                    $scope.teams = teams.result ? teams.result.teams : [];
                    $scope.fixTeams($scope.teams);
                }
            });
        }
        $scope.sendApply = function(team) {
            $http.post(cmpt + '/team/apply', {
                team_id: team.team_id
            }).success(function(json) {
                if (json.isSuccess) {
                    //$scope.teams.splice($scope.teams.indexOf(team), 1);
                    $scope.message.text = 40050;
                    $scope.message.error = null;
                } else {
                    $scope.message.error = json.code;
                    $scope.message.text = null;
                }
                $scope.message.show = true;
            });
        };
        $scope.$watch('teamName', function(val) {
            if (val === undefined) {
                return;
            }
            loadWithTime();
        });
        $scope.$on('teamsCanJoin', searchTeams);
    }])
    .controller('teamsApplySentCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.message = {};
        $scope.$on('teamsApplySent', function() {
            if ($scope.teams) {
                $scope.teams.forEach(function(team) {
                    team.expanded = false;
                });
            }
            $http.get(cmpt + '/team/myapply/' + $scope.ms_member.member_id)
                .success(function(teams) {
                    if (teams.isSuccess) {
                        $scope.teams = teams.result ? Object.keys(teams.result).map(function(tid) {
                            return teams.result[tid];
                        }) : [];
                        $scope.fixTeams($scope.teams);
                        if (!$scope.teams.length) {
                            $scope.showMessage(40051, $scope);
                        } else {
                            $scope.hideMessage($scope);
                        }
                    }
                });
        });
    }])
    .controller('teamsBeingInvitedCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.message = {};
        $scope.$on('teamsBeingInvited', function() {
            if ($scope.teams) {
                $scope.teams.forEach(function(team) {
                    team.expanded = false;
                });
            }
            $http.get(cmpt + '/team/myinvition/' + $scope.ms_member.member_id)
                .success(function(teams) {
                    if (teams.isSuccess) {
                        $scope.teams = teams.result ? Object.keys(teams.result).map(function(tid) {
                            return teams.result[tid];
                        }) : [];
                        $scope.fixTeams($scope.teams);
                        if (!$scope.teams.length) {
                            $scope.showMessage(40052, $scope);
                        } else {
                            $scope.hideMessage($scope);
                        }
                    }
                });
        });
        $scope.acceptInvite = function(team) {
            $http.post(cmpt + '/team/acceptInvite', {
                team_id: team.team_id
            }).success(function(json) {
                if (json.isSuccess) {
                    $scope.showMessage(40053, $scope);
                } else {
                    $scope.showError(json.code, $scope);
                }
                if (json.isSuccess) {
                    $scope.$emit('joinTeamSuccess', team);
                    $scope.teams.splice($scope.teams.indexOf(team), 1);
                }
            });
        };
    }])
    .controller('peopleCanJoinCtrl', ['$scope', '$http', function($scope, $http) {
        var timeout;
        $scope.message = {};

        function loadWithTime() {
            clearTimeout(timeout);
            timeout = setTimeout(searchMember, 300);
        }

        function searchMember() {
            $http.post(cmpt + '/team/membersearch', {
                name: $scope.memberName,
                epic_id: $scope.ms_epic.epic_id
            }).success(function(json) {
                if (json.isSuccess) {
                    $scope.persons = json.result || [];
                    $scope.fixMembers($scope.persons);
                    if (!$scope.persons.length) {
                        $scope.showMessage(40054, $scope);
                    }
                }
            });
        }
        $scope.$watch('memberName', function(val) {
            if (val === undefined) {
                return;
            }
            loadWithTime();
        });
        $scope.$on('peopleCanJoin', searchMember);
        $scope.sendInvite = function(person) {
            $http.post(cmpt + '/team/invite', {
                be_invited_id: person.member_id,
                team_id: $scope.ms_team.team_id
            }).success(function(json) {
                if (json.isSuccess) {
                    $scope.showMessage(40055, $scope);
                    $scope.persons.splice($scope.persons.indexOf(person), 1);
                } else {
                    $scope.showError(json.code, $scope);
                }
            });
        };
    }])
    .controller('peopleInvitedCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.message = {};
        $scope.$on('peopleInvited', function() {
            $http.get(cmpt + '/team/invitefor/' + $scope.ms_member.member_id)
                .success(function(persons) {
                    if (persons.isSuccess) {
                        $scope.persons = persons.result ? persons.result.map(function(person) {
                            return person.member;
                        }) : [];
                        $scope.fixMembers($scope.persons);
                        if (!$scope.persons.length) {
                            $scope.showMessage(40057, $scope);
                        }
                    }
                });
        });
    }])
    .controller('peopleWantToJoinCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.message = {};
        $scope.$on('peopleWantToJoin', function() {
            $http.get(cmpt + '/team/applierByTeam/' + $scope.ms_team.team_id)
                .success(function(members) {
                    if (members.isSuccess) {
                        $scope.members = members.result || [];
                        $scope.fixMembers($scope.members);
                        if (!$scope.members.length) {
                            $scope.showMessage(40056, $scope);
                        }
                    }
                });
        });

        $scope.acceptApply = function(member) {
            $http.post(cmpt + '/team/acceptApply', {
                applier_id: member.member_id,
                team_id: $scope.ms_team.team_id,
            }).success(function(json) {
                $scope.$emit('acceptApplySuccess');
                if (json.isSuccess) {
                    $scope.showMessage(40058, $scope);
                    $scope.members.splice($scope.members.indexOf(member), 0, 1);
                } else {
                    $scope.showError(json.code, $scope);
                }
            });
        };
    }])
    .controller('seriesCtrl', ['$scope', '$http', function($scope, $http) {

    }])
    .controller('experimentCtrl', ['$scope', '$http', function($scope, $http) {

    }])
    .controller('seasonCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.$watch('ms_series', function(series) {
            if (!series || !series.epics) {
                return;
            }
            $scope.epics = [];
            var temp = {};
            series.epics.forEach(function(epic) {
                var date = epic.epic_game_from;
                date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                temp[date] = temp[date] || [];
                temp[date].push(epic);
            });
            Object.keys(temp).forEach(function(key) {
                $scope.epics.push({
                    date: new Date(key),
                    epics: temp[key]
                });
            });
            $scope.epics.sort(function(a, b) {
                return a.date - b.date;
            });
            temp = null;
        });
    }]);