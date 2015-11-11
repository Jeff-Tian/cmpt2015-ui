angular
    .module('cmpt', [
        'pascalprecht.translate'
    ])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }])
    .config(['$translateProvider', function($translate) {
        $translate.useSanitizeValueStrategy(null);
        var translation = {
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
            40059: '没有候选战队',
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
            40108: "辽宁、吉林、黑龙江",
            40109: "北京、天津、河北</br>山西、内蒙古",
            40110: "山东、江苏、安徽、</br>浙江、福建、上海",
            40111: "广东、广西、海南",
            40112: "湖北、湖南、河南、江西",
            40113: "四川、云南、贵州、</br>西藏、重庆",
            40114: "宁夏、新疆、青海、</br>陕西、甘肃",
            40115: "香港、澳门、台湾",
            40200: '分钟',
            40201: '小时',
            40202: '天',
            40203: '月',
            40204: '年',
            40210: '微信邀请朋友观赛',
            40211: '换一批',
            70006: '该用户无权限加入此队伍',
            70008: '该用户已经属于一个队伍，不能再被加入队伍'
        };
        $translate
            .translations('en', translation)
            .translations('cn', translation)
            .translations('zh', translation);
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
            template: '<div id="china-map" style="height:400px">',
            link: {
                post: function($scope, element, attrs, ngModel) {
                    require.config({
                        paths: {
                            echarts: cmpt + '/libs/echarts/build/dist'
                        }
                    });
                    require([
                        'echarts',
                        'echarts/chart/map',
                    ], function(ec) {
                        var translations = {};
                        var jsonPath = cmpt + '/json/area.json';
                        require('echarts/util/mapData/params').params.area = {
                            getGeoJson: function(callback) {
                                $.getJSON(jsonPath, function(json) {
                                    json.features.forEach(function(feature) {
                                        var text = $translate.instant(feature.properties.id);
                                        feature.properties.name = text;
                                        translations[text] = feature.properties.id;
                                    });
                                    callback(json);
                                });
                            }
                        };

                        var myChart = ec.init(element.children().get(0));
                        myChart.setOption({
                            tooltip: {
                                trigger: 'item',
                                formatter: function(params, ticket, callback) {
                                    return $translate.instant((translations[params[1]] | 0) + 8);
                                }
                            },
                            series: [{
                                name: '中国',
                                type: 'map',
                                mapType: 'area',
                                selectedMode: 'single',
                                itemStyle: {
                                    normal: {
                                        color: '#93BBD7',
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

                        myChart.on(require('echarts/config').EVENT.MAP_SELECTED, function(param) {
                            //console.log(translations[param.target]);
                            $scope.$emit('area/choose', translations[param.target]);
                            //ngModel.$setViewValue(translations[param.target]);
                        });
                    });
                }
            }
        };
    }])
    .directive('pop', ['$compile', function($compile) {
        return {
            restrict: "A",
            scope: {
                content: '@',
                klass: '@'
            },
            link: function(scope, element, attrs) {
                var $pop = $('<div class="pop"></div>').addClass(scope.klass).appendTo('body');
                var dom = $(scope.content);
                $compile(dom[0])(scope.$parent);
                $pop.append(dom);
                var timeout;
                $(element)
                    .on('mouseenter', function() {
                        var offset = $(element).offset(),
                            width = $(this).width(),
                            height = $(this).height();
                        clearTimeout(timeout);
                        $pop.removeClass('animate').css({
                            'top': offset.top + height / 2,
                            'left': offset.left
                        }).addClass('show');
                        timeout = setTimeout(function() {
                            $pop.addClass('animate');
                        }, 100);
                    })
                    .on('mouseleave', function() {
                        clearTimeout(timeout);
                        $pop.removeClass('animate');
                        timeout = setTimeout(function() {
                            $pop.removeClass('show');
                        }, 500);
                    });
            }
        }
    }])
    .directive('qrcode', function($document) {
        return {
            restrict: "A",
            scope: {
                src: '='
            },
            link: function($scope, element, attrs) {
                if (!$scope.src) {
                    return;
                }
                $(element).qrcode({
                    text: $scope.src,
                    width: 120,
                    height: 120
                });
            }
        }
    })
    .directive('additional', function() {
        return {
            restrict: "E",
            templateUrl: 'template/additional.html'
        };
    })
    .directive('countdown', function() {
        return {
            restrict: "E",
            templateUrl: 'template/countdown.html'
        };
    })
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
            epic.epic_game_end = new Date(epic.epic_game_end || epic.game_end);
            epic.epic_game_from = new Date(epic.epic_game_from || epic.game_from);
            epic.epic_sign_end = new Date(epic.epic_sign_end || epic.sign_end);
            epic.epic_sign_from = new Date(epic.epic_sign_from || epic.sign_from);
            return epic;
        };
        $scope.fixSeries = function(series) {
            if (!series || !series.epics) {
                return series;
            }
            series.epics.forEach($scope.fixEpic);
            return series;
        };
        var protocol = location.protocol;
        var host = location.host;
        $scope.QRCode = function(epic_id, team_id) {
            if (!(epic_id && team_id)) {
                return;
            }
            return protocol + '//' + host + '/' + $scope.lang + cmpt + '/epic?epic_id=' + epic_id + '&team_id=' + team_id;
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
                json.result.forEach($scope.fixSeries);
                $scope.all_series = json.result;
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
        var day = $scope.day = 24 * hour;
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
        $scope.hideMessage = function($scope) {
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
        $scope.message = {};
        $scope.createTeam = function() {
            if ($scope.name) {
                $http.post(cmpt + '/team/create', {
                    name: $scope.name,
                    epic_id: $scope.ms_epic.epic_id
                }).success(function(json) {
                    if (json.isSuccess) {
                        $scope.$emit('createTeamSuccess');
                        $scope.hideMessage($scope);
                    } else {
                        $scope.showError(json.code, $scope);
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
            $http.post(cmpt + '/team/search/', {
                epic_id: $scope.ms_epic.epic_id,
                name: $scope.teamName
            }).success(function(json) {
                if (json.isSuccess) {
                    $scope.teams = (json.result && json.result.teams) ? json.result.teams : [];
                    $scope.fixTeams($scope.teams);
                    if (!$scope.teams.length) {
                        $scope.showMessage(40059, $scope);
                    } else {
                        $scope.hideMessage($scope);
                    }
                }
            });
        }
        $scope.sendApply = function(team) {
            $http.post(cmpt + '/team/apply', {
                team_id: team.team_id
            }).success(function(json) {
                if (json.isSuccess) {
                    $scope.teams.splice($scope.teams.indexOf(team), 1);
                    $scope.showMessage(40050, $scope);
                } else {
                    $scope.showError(json.code, $scope);
                }
            });
        };
        $scope.$watch('teamName', function(val) {
            if (val === undefined) {
                return;
            }
            loadWithTime();
        });
        $scope.$on('teamsCanJoin', searchTeams);
        $scope.searchTeam = searchTeams;
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
                    } else {
                        $scope.hideMessage($scope);
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
        $scope.searchMember = searchMember;
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
                        } else {
                            $scope.hideMessage($scope);
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
                        } else {
                            $scope.hideMessage($scope);
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
                    $scope.members.splice($scope.members.indexOf(member), 1);
                } else {
                    $scope.showError(json.code, $scope);
                }
            });
        };
    }])
    .controller('seriesCtrl', ['$scope', '$http', function($scope, $http) {}])
    .controller('experimentCtrl', ['$scope', '$http', function($scope, $http) {

    }])
    .controller('nationalCtrl', ['$scope', '$http', function($scope, $http) {
        var isNational;

        $scope.$watch('ms_series.epics', function(val) {
            if (!val) {
                return;
            }
            val.forEach(function(epic) {
                if (epic.region) {
                    epic.regionCode = $scope.translateRegion(epic.region);
                }
                if (epic.regionCode == 40060) {
                    isNational = true;
                }
            });
            if (isNational) {
                $scope.nationalEpics = val;
            }
        });
        $scope.$on('area/choose', function(e, areaCode) {
            if (isNational) {
                return;
            }
            $scope.nationalEpics = $scope.ms_series.epics.map(function(epic) {
                return epic.regionCode = areaCode;
            });
        });
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
    }])
    .controller('countdownCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.countdownMsg = '';
        var now = $scope.ms_epic.epic_game_from;
        var hours, minutes, seconds;
        var timestamp;
        var second = 1000;
        var minute = 60 * second;
        var hour = 60 * minute;

        function countdown() {
            timestamp = now - Date.now();
            if (timestamp < 0) {
                $scope.showStart = true;
                return;
            }
            timestamp /= second;
            timestamp |= 0;
            seconds = timestamp % 60;
            timestamp /= 60;
            timestamp |= 0;
            minutes = timestamp % 60;
            timestamp /= 60;
            timestamp |= 0;
            hours = timestamp % 60;
            $scope.countdownMsg = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
            $timeout(countdown, 1000);
        }
        $timeout(countdown, 1000);
    }])
    .filter('trusted', ['$sce', function($sce) {
        return function(text) {
            return $sce.trustAsHtml(text);
        }
    }]);
angular.module('cmpt').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('template/additional.html',
    "<div class=\"additional\" ng-if=\"!share_team && !ms_team && ms_epic && ms_member\">\n" +
    "    <div ng-show=\"ms_epic.max_team_member_count <= ms_epic.memberCount\">\n" +
    "        报名已满\n" +
    "        <p>已有{{ms_epic.memberCount}}人报名完成。\n" +
    "            <br/> 真可惜错过了这场比赛,赶紧抢先报名其他的比赛吧。!</p>\n" +
    "    </div>\n" +
    "    <div ng-show=\"ms_epic.game_from > now\">\n" +
    "        报名尚未开始\n" +
    "        <p>看看其他可以报名的比赛吧!</p>\n" +
    "    </div>\n" +
    "    <div ng-show=\"ms_epic.game_end < now\">\n" +
    "        报名已经结束\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('template/countdown.html',
    "<div class=\"countdown\" ng-if=\"((ms_epic.max_team_member_count|| 5) == ms_team.memberLength) && ms_epic.epic_game_from > (now + day)\" ng-controller=\"countdownCtrl\">\n" +
    "    <div ng-show=\"!showStart\">\n" +
    "        <span class=\"timestamp\">\n" +
    "            {{countdownMsg}}\n" +
    "        </span> 比赛即将开始\n" +
    "    </div>\n" +
    "    <div ng-show=\"showStart\">\n" +
    "        <a href=\"/\" class=\"btn\">开始比赛</a>\n" +
    "    </div>\n" +
    "    <button class=\"btn invite-btn\" ng-if=\"ms_epic.epic_id && ms_team.team_id\" pop klass=\"qrpop\" content=\"<div class='qrcode' qrcode src='QRCode(ms_epic.epic_id, ms_team.team_id)'></div>\">\n" +
    "        <i class=\"icon wechat\"></i> {{40210|translate}}\n" +
    "    </button>\n" +
    "    <div>\n" +
    "        请召集所有队员，准备比赛\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('template/epic.html',
    "<div>\n" +
    "    <epicinfo></epicinfo>\n" +
    "    <teammember></teammember>\n" +
    "    <teamjoin></teamjoin>\n" +
    "    <additional></additional>\n" +
    "    <countdown></countdown>\n" +
    "    <gameroom></gameroom>\n" +
    "</div>"
  );


  $templateCache.put('template/epicinfo.html',
    "<div class=\"epicinfo\">\n" +
    "    <div class=\"head\">\n" +
    "        <h2>{{ms_epic.title}}</h2>\n" +
    "        <div>{{ms_epic.subtitle}}</div>\n" +
    "        <div ng-if=\"ms_epic.epic_id && ms_team.team_id\">\n" +
    "            <i class=\"big wechat icon home-wechat-share\" pop klass=\"qrpop\" content=\"<div class='qrcode' qrcode src='QRCode(ms_epic.epic_id, ms_team.team_id)'></div>\"></i>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"body\">\n" +
    "        <div class=\"ui grid container\">\n" +
    "            <div class=\"sixteen wide column\">\n" +
    "                <i class=\"calendar icon\"></i> {{40023|translate}} {{formatDate(ms_epic.game_from)}} - {{formatDate(ms_epic.game_end)}}\n" +
    "            </div>\n" +
    "            <div class=\"sixteen wide column\">\n" +
    "                <i class=\"flag icon\"></i> {{40024|translate}} {{formatDate(ms_epic.sign_from)}} - {{formatDate(ms_epic.sign_end)}}\n" +
    "            </div>\n" +
    "            <div class=\"eight wide column\">\n" +
    "                <i class=\"checkered flag icon\"></i> {{translateRegion(ms_epic.region)|translate}}\n" +
    "            </div>\n" +
    "            <div class=\"eight wide column\">\n" +
    "                <i class=\"user icon\"></i> {{ms_epic.memberCount}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"grid\">\n" +
    "            <div class=\"sixteen wide column\" ng-bind-html=\"epic.description|trusted\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('template/experiment-list.html',
    "<div class=\"series_banner\">\n" +
    "    <img ng-src=\"{{cmpt}}/img/banner_experiment.gif\">\n" +
    "</div>\n" +
    "<div class=\"experiment-content\" ng-controller=\"experimentCtrl\">\n" +
    "    <div class=\"ui three column grid\">\n" +
    "        <div class=\"column\" ng-repeat=\"epic in ms_series.epics\">\n" +
    "            <div class=\"ui card experiment-card available\" ng-class=\"{available: now > epic.epic_sign_end}\" ng-click=\"epic.show=!epic.show\">\n" +
    "                <div class=\"content experiment-name\">\n" +
    "                    <div class=\"epic_header\">\n" +
    "                        {{epic.title}}\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"content\">\n" +
    "                    <div class=\"description\">\n" +
    "                        <div>\n" +
    "                            <i class=\"calendar icon\"></i> {{formatDate(epic.epic_game_from, true)}}\n" +
    "                        </div>\n" +
    "                        <div>\n" +
    "                            <i class=\"user icon\"></i> {{epic.memberCount||0}} {{40020 | translate}}\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"extra content\">\n" +
    "                    <div class=\"text-right\">\n" +
    "                        {{getTime(epic)}}\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"dimmer experiment-dimmer\" ng-class=\"{active: epic.show}\">\n" +
    "                    <div class=\"content\">\n" +
    "                        <div class=\"center\">\n" +
    "                            <p ng-bind-html=\"epic.description|trusted\">\n" +
    "                            </p>\n" +
    "                            <div class=\"label\">\n" +
    "                                <a ng-href=\"/{{lang}}{{cmpt}}/epic?epic_id={{epic.epic_id}}\">\n" +
    "                                    {{40019|translate}}\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('template/game-menu.html',
    "<div class=\"ui fluid large vertical menu cloak\">\n" +
    "    <div class=\"profile-box\" ng-if=\"ms_member\">\n" +
    "        <img class=\"image\" ng-src=\"{{ms_member.avatar}}\">\n" +
    "        <span>\n" +
    "            {{ms_member.nick_name||ms_member.real_name}}\n" +
    "        </span>\n" +
    "    </div>\n" +
    "    <a ng-href=\"/{{lang}}{{cmpt}}/\" class=\"item\" ng-class=\"{'active':page==='index'}\">\n" +
    "        <i class=\"b-home icon\"></i> {{40025|translate}}\n" +
    "    </a>\n" +
    "    <a ng-repeat=\"series in all_series\" ng-href=\"/{{lang}}{{cmpt}}/{{series.series_type}}?series_id={{series.series_id}}\" class=\"item\" ng-class=\"{'active':page===series.series_type}\">\n" +
    "        <i class=\"icon b-{{series.series_type}}\"></i> {{series.title}}\n" +
    "    </a>\n" +
    "    <a ng-if=\"ms_member\" ng-href=\"/{{lang}}{{cmpt}}/record\" class=\"item\" ng-class=\"{'active':page==='record'}\">\n" +
    "        <i class=\"b-record icon\"></i> {{40026|translate}}\n" +
    "    </a>\n" +
    "    <a ng-if=\"ms_member\" ng-href=\"/{{lang}}{{cmpt}}/rank\" class=\"item\" ng-class=\"{'active':page==='rank'}\">\n" +
    "        <i class=\"b-rank icon\"></i> {{40027|translate}}\n" +
    "    </a>\n" +
    "</div>"
  );


  $templateCache.put('template/game-personal-record.html',
    "<div class=\"record-content\">\n" +
    "\n" +
    "    <div class=\"ui grid\">\n" +
    "        <div class=\"six wide column\">\n" +
    "            <div class=\"profile-box\">\n" +
    "                <img class=\"ui middle aligned image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                <h3>陈大民</h3>\n" +
    "                <div class=\"ui two column grid\">\n" +
    "                    <div class=\"column\" ng-cloak>\n" +
    "                        <i class=\"dollar big icon\"></i>\n" +
    "                        {{'MapHomeBridgeCoins' | translate}}：99\n" +
    "                    </div>\n" +
    "                    <div class=\"column\" ng-cloak>\n" +
    "                        <i class=\"configure big icon\"></i>\n" +
    "                        {{'MapHomeSkills' | translate}}：5\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"three wide column\">\n" +
    "            <div class=\"target-list\">\n" +
    "                <h5>{{'MapRecordTarget' | translate}}</h5>\n" +
    "                <div class=\"ui list\">\n" +
    "                    <div class=\"item\">\n" +
    "                        <div class=\"ui b-secondary button target-button\">CEO</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"item\">\n" +
    "                        <div class=\"ui b-secondary button target-button\">CFO</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"item\">\n" +
    "                        <div class=\"ui b-secondary button target-button\">COO</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"item\">\n" +
    "                        <div class=\"ui b-secondary button target-button\">CPO</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"item\">\n" +
    "                        <div class=\"ui b-secondary button target-button\">CMO</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"seven wide column\">\n" +
    "            <div radar-map class=\"large-rader\" data=\"data\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"record-list\">\n" +
    "    <div class=\"ui grid\">\n" +
    "        <div class=\"ui card record-card\">\n" +
    "            <div class=\"content record-name\">\n" +
    "                <img src=\"/img/icon/national-big.png\" class=\"national\">\n" +
    "                <div class=\"epic_header\">全国大赛华东赛区</div>\n" +
    "                <div class=\"meta\">\n" +
    "                    <div class=\"ui horizontal list\">\n" +
    "                        <div class=\"item\">\n" +
    "                            <i class=\"calendar icon\"></i>\n" +
    "                            2015年09月30日\n" +
    "                        </div>\n" +
    "                        <div class=\"item\">\n" +
    "                            共有24对\n" +
    "                        </div>\n" +
    "                        <div class=\"item\">\n" +
    "                            分为个4战区\n" +
    "                        </div>\n" +
    "                        <div class=\"item\">\n" +
    "                            <i class=\"dollar icon\"></i>\n" +
    "                            桥币+8\n" +
    "                        </div>\n" +
    "                        <div class=\"item\">\n" +
    "                            <i class=\"configure icon\"></i>\n" +
    "                            技能+5\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"content\">\n" +
    "                <div class=\"sesson-content\">\n" +
    "                    <h2>战区3</h2>\n" +
    "                    <div class=\"ui button\" ng-cloak>{{'MapRecordMoreInfo' | translate}}</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"extra content\">\n" +
    "                <div class=\"info-content\">\n" +
    "                    <h2>第2名</h2>\n" +
    "                    <h5>公司B 陈大民的团队</h5>\n" +
    "                    <div class=\"team-list\">\n" +
    "                        <img class=\"ui image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"ui image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"ui image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"ui image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"ui image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"ui grid\">\n" +
    "        <div class=\"ui card record-card\">\n" +
    "            <div class=\"content record-name\">\n" +
    "                <img src=\"/img/icon/experiment-big.png\" class=\"experiment\">\n" +
    "                <div class=\"epic_header\">官方体验赛华北赛区</div>\n" +
    "                <div class=\"meta\">\n" +
    "                    <div class=\"ui horizontal list\">\n" +
    "                        <div class=\"item\">\n" +
    "                            <i class=\"calendar icon\"></i>\n" +
    "                            2015年09月30日\n" +
    "                        </div>\n" +
    "                        <div class=\"item\">\n" +
    "                            共有24对\n" +
    "                        </div>\n" +
    "                        <div class=\"item\">\n" +
    "                            分为个4战区\n" +
    "                        </div>\n" +
    "                        <div class=\"item\">\n" +
    "                            <i class=\"dollar icon\"></i>\n" +
    "                            桥币+8\n" +
    "                        </div>\n" +
    "                        <div class=\"item\">\n" +
    "                            <i class=\"configure icon\"></i>\n" +
    "                            技能+5\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"content\">\n" +
    "                <div class=\"sesson-content\">\n" +
    "                    <h2>战区1</h2>\n" +
    "                    <div class=\"ui button\" ng-cloak>{{'MapRecordMoreInfo' | translate}}</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"extra content\">\n" +
    "                <div class=\"info-content\">\n" +
    "                    <h2>第1名</h2>\n" +
    "                    <h5>公司B 陈大民的团队</h5>\n" +
    "                    <div class=\"team-list\">\n" +
    "                        <img class=\"ui image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"ui image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"ui image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"ui image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"ui image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('template/game-ranking-list.html',
    "<div class=\"rank-content\">\n" +
    "    <div class=\"ui top attached tabular menu rank-menu\">\n" +
    "        <a class=\"item active\" data-tab=\"first\">{{'MapRankingList' | translate}}</a>\n" +
    "        <a class=\"item\" data-tab=\"second\">\n" +
    "            <div class=\"content\">\n" +
    "\n" +
    "                <div class=\"ui inline dropdown\">\n" +
    "                    <div class=\"text\">{{'RankDongBeiDivision' | translate}}</div>\n" +
    "                    <i class=\"dropdown icon\"></i>\n" +
    "                    <div class=\"menu rank-drop-menu\">\n" +
    "                        <div class=\"item\" ng-class=\"{'active':c.value===selectCategory}\" ng-repeat=\"c in catetories\" data-text=\"{{c.title | translate}}\" data-value=\"{{c.value}}\">{{c.title | translate}} <i class=\"checkmark icon\" ng-show=\"c.value===selectCategory\"></i></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </a>\n" +
    "        <div class=\"ui basic button wechat-button rank-wechat-share\" data-html=\"<img src='/img/b-wechat.jpg' class='ui large image'>\" data-position=\"bottom center\">\n" +
    "            <i class=\"wechat icon\"></i>{{'MapRankWechatShare' | translate}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"ui bottom attached tab segment rank-segment active\" data-tab=\"first\">\n" +
    "        <table class=\"ui table center aligned rank-table\" ng-cloak>\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th class=\"bottom aligned\">{{'MapRankRank' | translate}}</th>\n" +
    "                    <th class=\"bottom aligned\">{{'MapRankPalyer' | translate}}</th>\n" +
    "                    <th class=\"ability\">\n" +
    "                        <i class=\"home big icon\"></i>\n" +
    "                        <br>{{'MapRankAverageAbility' | translate}}\n" +
    "                    </th>\n" +
    "                    <th class=\"ability\">\n" +
    "                        <i class=\"bar chart big icon\"></i>\n" +
    "                        <br>{{'MapRankSkill1' | translate}}\n" +
    "                    </th>\n" +
    "                    <th class=\"ability\">\n" +
    "                        <i class=\"users big icon\"></i>\n" +
    "                        <br>{{'MapRankSkill2' | translate}}\n" +
    "                    </th>\n" +
    "                    <th class=\"ability\">\n" +
    "                        <i class=\"calculator big icon\"></i>\n" +
    "                        <br>{{'MapRankSkill3' | translate}}\n" +
    "                    </th>\n" +
    "                    <th class=\"ability\">\n" +
    "                        <i class=\"bullseye big icon\"></i>\n" +
    "                        <br>{{'MapRankSkill4' | translate}}\n" +
    "                    </th>\n" +
    "                    <th class=\"ability\">\n" +
    "                        <i class=\"comments outline big icon\"></i>\n" +
    "                        <br>{{'MapRankSkill5' | translate}}\n" +
    "                    </th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <img src=\"/img/icon/crown.png\" class=\"crown\">\n" +
    "                        <h5>1</h5>\n" +
    "                    </td>\n" +
    "                    <td class=\"avatar\">\n" +
    "                        <img class=\"ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\"> 天宝\n" +
    "                    </td>\n" +
    "                    <td class=\"error\">5</td>\n" +
    "                    <td>2</td>\n" +
    "                    <td>5</td>\n" +
    "                    <td>5</td>\n" +
    "                    <td>7</td>\n" +
    "                    <td>10</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <img src=\"/img/icon/crown.png\" class=\"crown\">\n" +
    "                        <h5>2</h5>\n" +
    "                    </td>\n" +
    "                    <td class=\"avatar\">\n" +
    "                        <img class=\"ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\"> 周星星\n" +
    "                    </td>\n" +
    "                    <td class=\"error\">5</td>\n" +
    "                    <td>2</td>\n" +
    "                    <td>5</td>\n" +
    "                    <td>5</td>\n" +
    "                    <td>7</td>\n" +
    "                    <td>10</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <img src=\"/img/icon/crown.png\" class=\"crown\">\n" +
    "                        <h5>3</h5>\n" +
    "                    </td>\n" +
    "                    <td class=\"avatar\">\n" +
    "                        <img class=\"ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\"> 林志玲\n" +
    "                    </td>\n" +
    "                    <td class=\"error\">5</td>\n" +
    "                    <td>2</td>\n" +
    "                    <td>5</td>\n" +
    "                    <td>5</td>\n" +
    "                    <td>7</td>\n" +
    "                    <td>10</td>\n" +
    "                </tr>\n" +
    "                <tr class=\"null-tr\">\n" +
    "                    <td colspan=\"8\"></td>\n" +
    "                </tr>\n" +
    "                <tr class=\"second-table-tr\">\n" +
    "                    <td>\n" +
    "                        <h5>90</h5>\n" +
    "                    </td>\n" +
    "                    <td class=\"avatar\">\n" +
    "                        <img class=\"ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\"> 范冰冰\n" +
    "                    </td>\n" +
    "                    <td class=\"error\">5</td>\n" +
    "                    <td>2</td>\n" +
    "                    <td>5</td>\n" +
    "                    <td>5</td>\n" +
    "                    <td>7</td>\n" +
    "                    <td>10</td>\n" +
    "                </tr>\n" +
    "                <tr class=\"error\">\n" +
    "                    <td>\n" +
    "                        <h5>91</h5>\n" +
    "                    </td>\n" +
    "                    <td class=\"avatar\">\n" +
    "                        <img class=\"ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\"> 陈大民\n" +
    "                    </td>\n" +
    "                    <td class=\"error\">5</td>\n" +
    "                    <td>2</td>\n" +
    "                    <td>5</td>\n" +
    "                    <td>5</td>\n" +
    "                    <td>7</td>\n" +
    "                    <td>10</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <h5>92</h5>\n" +
    "                    </td>\n" +
    "                    <td class=\"avatar\">\n" +
    "                        <img class=\"ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\"> 郭晓静\n" +
    "                    </td>\n" +
    "                    <td class=\"error\">5</td>\n" +
    "                    <td>2</td>\n" +
    "                    <td>5</td>\n" +
    "                    <td>5</td>\n" +
    "                    <td>7</td>\n" +
    "                    <td>10</td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "    <div class=\"ui bottom attached tab segment rank-segment\" data-tab=\"second\">\n" +
    "        <table class=\"ui table center aligned rank-table\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>{{'MapRankRank' | translate}}</th>\n" +
    "                    <th>{{'MapRankPopularity' | translate}}</th>\n" +
    "                    <th>{{'MapRankTeamName' | translate}}</th>\n" +
    "                    <th width=\"70%\">{{'MapRankTeamMember' | translate}}</th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <img src=\"/img/icon/crown.png\" class=\"crown\">\n" +
    "                        <h5>1</h5>\n" +
    "                    </td>\n" +
    "                    <td>10</td>\n" +
    "                    <td>无敌铁金刚-{{selectCategory}}</td>\n" +
    "                    <td>\n" +
    "                        <img class=\"gender-m ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-f ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-m ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-f ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-m ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <img src=\"/img/icon/crown.png\" class=\"crown\">\n" +
    "                        <h5>2</h5>\n" +
    "                    </td>\n" +
    "                    <td>9</td>\n" +
    "                    <td>听妈妈的话-{{selectCategory}}</td>\n" +
    "                    <td>\n" +
    "                        <img class=\"gender-m ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-f ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-m ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-f ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-m ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <img src=\"/img/icon/crown.png\" class=\"crown\">\n" +
    "                        <h5>3</h5>\n" +
    "                    </td>\n" +
    "                    <td>8</td>\n" +
    "                    <td>OpenMind-{{selectCategory}}</td>\n" +
    "                    <td>\n" +
    "                        <img class=\"gender-m ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-f ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-m ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-f ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-m ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr class=\"null-tr\">\n" +
    "                    <td colspan=\"8\"></td>\n" +
    "                </tr>\n" +
    "                <tr class=\"second-table-tr\">\n" +
    "                    <td>\n" +
    "                        <h5>90</h5>\n" +
    "                    </td>\n" +
    "                    <td>4</td>\n" +
    "                    <td>今生今世-{{selectCategory}}</td>\n" +
    "                    <td>\n" +
    "                        <img class=\"gender-m ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-f ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-m ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-f ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-m ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr class=\"error\">\n" +
    "                    <td>\n" +
    "                        <h5>91</h5>\n" +
    "                    </td>\n" +
    "                    <td>3</td>\n" +
    "                    <td>陈大民的团队-{{selectCategory}}</td>\n" +
    "                    <td>\n" +
    "                        <img class=\"gender-m ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-f ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-m ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-f ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-m ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <h5>92</h5>\n" +
    "                    </td>\n" +
    "                    <td>2</td>\n" +
    "                    <td>绿巨人-{{selectCategory}}</td>\n" +
    "                    <td>\n" +
    "                        <img class=\"gender-m ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-f ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-m ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-f ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                        <img class=\"gender-m ui middle aligned b-tiny image\" src=\"/img/salespage/wilfried.png\">\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('template/national-list.html',
    "<div class=\"series_banner\">\n" +
    "    <img ng-src=\"{{cmpt}}/img/banner_national.gif\">\n" +
    "</div>\n" +
    "<div class=\"national-content\" ng-controller=\"nationalCtrl\">\n" +
    "    <div class=\"ui grid\">\n" +
    "        <div class=\"ten wide column map-column\">\n" +
    "            <div china-map></div>\n" +
    "        </div>\n" +
    "        <div class=\"six wide column\">\n" +
    "            <div class=\"ui cards national-cards\">\n" +
    "                <div class=\"card available\" ng-repeat=\"epic in nationalEpics\" ng-click=\"epic.show=!epic.show\">\n" +
    "                    <div class=\"content national-name\">\n" +
    "                        <div class=\"epic_header\">{{epic.title}}</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"content\">\n" +
    "                        <div class=\"description\">\n" +
    "                            <div>\n" +
    "                                <i class=\"calendar icon\"></i> {{formatDate(epic.epic_game_from)}}\n" +
    "                            </div>\n" +
    "                            <div>\n" +
    "                                <i class=\"user icon\"></i> {{epic.memberCount||0}}{{40020 | translate}}\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"extra content\">\n" +
    "                        <div class=\"text-right\">\n" +
    "                            {{getTime(epic)}}\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"dimmer national-dimmer\" ng-class=\"{active: epic.show}\">\n" +
    "                        <div class=\"content\">\n" +
    "                            <div class=\"center\">\n" +
    "                                <p ng-bind-html=\"epic.description|trusted\"></p>\n" +
    "                                <div class=\"label\">\n" +
    "                                    <a ng-href=\"/{{lang}}{{cmpt}}/epic?epic_id={{epic.epic_id}}\">\n" +
    "                                    {{40019|translate}}\n" +
    "                                </a>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('template/people_can_join.html',
    "<div class=\"people-can-join list\" ng-controller=\"peopleCanJoinCtrl\">\n" +
    "    <div class=\"message\" ng-show=\"message.show\">\n" +
    "        <div class=\"error\" ng-show=\"message.error\">\n" +
    "            {{message.error|translate}}\n" +
    "            <i class=\"remove icon\" ng-click=\"message.show=false\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"text\" ng-show=\"message.text\">\n" +
    "            {{message.text|translate}}\n" +
    "            <i class=\"remove icon\" ng-click=\"message.show=false\"></i>\n" +
    "        </div>\n" +
    "    </div>\n" +
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
    "                                <img class=\"gender-{{person.gender.toLowerCase()}}\" ng-src=\"{{person.avatar}}\">\n" +
    "                            </div>\n" +
    "                            <div class=\"title\">\n" +
    "                                {{person.nick_name||person.real_name}}\n" +
    "                            </div>\n" +
    "                            <!--<div class=\"description\">\n" +
    "                                <div>清华大学</div>\n" +
    "                                <div>设计系</div>\n" +
    "                            </div>-->\n" +
    "                        </div>\n" +
    "                        <button class=\"btn\" ng-click=\"sendInvite(person)\">\n" +
    "                            <i class=\"icon plus\"></i>{{40015|translate}}\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"change item\">\n" +
    "            <button class=\"btn\" ng-click=\"searchMember()\">{{40211|translate}}</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('template/people_invited.html',
    "<div class=\"people-invited list\" ng-controller=\"peopleInvitedCtrl\">\n" +
    "    <div class=\"message\" ng-show=\"message.show\">\n" +
    "        <div class=\"error\" ng-show=\"message.error\">\n" +
    "            {{message.error|translate}}\n" +
    "            <i class=\"remove icon\" ng-click=\"message.show=false\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"text\" ng-show=\"message.text\">\n" +
    "            {{message.text|translate}}\n" +
    "            <i class=\"remove icon\" ng-click=\"message.show=false\"></i>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"persons ui items\">\n" +
    "        <div class=\"item ui grid\">\n" +
    "            <div class=\"sixteen wide column\">\n" +
    "                <div class=\"ui five column grid\">\n" +
    "                    <div class=\"img column\" ng-repeat=\"person in persons\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"img\">\n" +
    "                                <img class=\"gender-{{person.gender.toLowerCase()}}\" ng-src=\"{{person.avatar}}\">\n" +
    "                            </div>\n" +
    "                            <div class=\"title\">\n" +
    "                                {{person.nick_name||person.real_name}}\n" +
    "                            </div>\n" +
    "                            <!--<div class=\"description\">\n" +
    "                                <div>清华大学</div>\n" +
    "                                <div>设计系</div>\n" +
    "                            </div>-->\n" +
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
    "    <div class=\"message\" ng-show=\"message.show\">\n" +
    "        <div class=\"error\" ng-show=\"message.error\">\n" +
    "            {{message.error|translate}}\n" +
    "            <i class=\"remove icon\" ng-click=\"message.show=false\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"text\" ng-show=\"message.text\">\n" +
    "            {{message.text|translate}}\n" +
    "            <i class=\"remove icon\" ng-click=\"message.show=false\"></i>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"persons ui items\">\n" +
    "        <div class=\"item ui grid\">\n" +
    "            <div class=\"sixteen wide column\">\n" +
    "                <div class=\"ui five column grid\">\n" +
    "                    <div class=\"img column\" ng-repeat=\"member in members\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"img\">\n" +
    "                                <img class=\"gender-{{member.gender.toLowerCase()}}\" ng-src=\"{{member.avatar}}\">\n" +
    "                            </div>\n" +
    "                            <div class=\"title\">\n" +
    "                                {{member.nick_name||member.real_name}}\n" +
    "                            </div>\n" +
    "                            <!--<div class=\"description\">\n" +
    "                                <div>清华大学</div>\n" +
    "                                <div>设计系</div>\n" +
    "                            </div>-->\n" +
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


  $templateCache.put('template/profile.html',
    "<div class=\"profile-box\">\n" +
    "    <div class=\"base-profile\">\n" +
    "        <img class=\"ui middle aligned image\" src=\"/img/salespage/wilfried.png\">\n" +
    "        <span>陈大民</span>\n" +
    "    </div>\n" +
    "    <div class=\"ui divider\"></div>\n" +
    "    <div class=\"ui two column grid\">\n" +
    "        <div class=\"column\">\n" +
    "            <i class=\"dollar big icon\"></i> {{'MapHomeBridgeCoins' | translate}}：99\n" +
    "        </div>\n" +
    "        <div class=\"column\">\n" +
    "            <i class=\"configure big icon\"></i> {{'MapHomeSkills' | translate}}：5\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"ui divider\"></div>\n" +
    "    <div radar-map class=\"small-rader\" data=\"data\"></div>\n" +
    "    <div class=\"lists\">\n" +
    "        <i class=\"flag big icon\"></i> {{'MapHomeAchievement' | translate}}\n" +
    "    </div>\n" +
    "    <div class=\"lists\">\n" +
    "        <button class=\"ui grey basic button fluid\" ng-click=\"selectDirectiveItem('personalRecord')\">{{'MapHomePersonalRecord' | translate}}</button>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "        <button class=\"ui grey basic button fluid\" ng-click=\"selectDirectiveItem('rankingList')\">{{'MapHomeRankingList' | translate}}</button>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('template/season-list.html',
    "<div class=\"series_banner\">\n" +
    "    <img ng-src=\"{{cmpt}}/img/banner_season.gif\">\n" +
    "</div>\n" +
    "<div class=\"season-content cloak\" ng-controller=\"seasonCtrl\">\n" +
    "    <div class=\"timeline\">\n" +
    "        <div class=\"timeline-content\" ng-repeat=\"epic in epics\" ng-class=\"{first: epic === epics[0], last: epic === epics.length - 1}\">\n" +
    "            <div class=\"ui three column grid timeline-content-grid available\">\n" +
    "                <div class=\"three wide column\">\n" +
    "                    <p class=\"text-right\">\n" +
    "                        {{formatDate(epic.date,true)}}\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "                <div class=\"one wide column time-line\">\n" +
    "                </div>\n" +
    "                <div class=\"twelve wide column\">\n" +
    "                    <div ng-repeat=\"item in epic.epics\" class=\"ui card season-card fluid available\" ng-click=\"item.show=!item.show\">\n" +
    "                        <div class=\"content season-name\">\n" +
    "                            <div class=\"epic_header\">{{item.title}} {{translateRegion(item.region)|translate}}</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"content\">\n" +
    "                            <div class=\"description\">\n" +
    "                                <div class=\"left floated\">\n" +
    "                                    <i class=\"user icon\"></i> {{item.memberCount||0}}{{40020 | translate}}\n" +
    "                                </div>\n" +
    "                                <div class=\"right floated\">\n" +
    "                                    {{getTime(item)}}\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"dimmer season-dimmer\" ng-class=\"{active: item.show}\">\n" +
    "                            <div class=\"content\">\n" +
    "                                <div class=\"center\">\n" +
    "                                    <p ng-bind-html=\"item.description|trusted\">\n" +
    "                                    </p>\n" +
    "                                    <div class=\"label\">\n" +
    "                                        <a ng-href=\"/{{lang}}{{cmpt}}/epic?epic_id={{item.epic_id}}\">\n" +
    "                                            {{40019|translate}}\n" +
    "                                        </a>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('template/series-list.html',
    "<div class=\"cloak\" ng-controller=\"seriesCtrl\">\n" +
    "    <div ng-repeat=\"series in all_series\">\n" +
    "        <div class=\"series_banner\">\n" +
    "            <a ng-href=\"/{{lang}}{{cmpt}}/{{series.series_type}}?series_id={{series.series_id}}\">\n" +
    "                <img ng-src=\"{{cmpt}}/img/banner_{{series.series_type}}.png\" />\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"available-lists\">\n" +
    "            <div class=\"available-list\" ng-if=\"epic.team\" ng-repeat=\"epic in series.epics\">\n" +
    "                <div class=\"ui grid\">\n" +
    "                    <div class=\"twelve wide column\">\n" +
    "                        <div class=\"list-title\">\n" +
    "                            <a ng-href=\"/{{lang}}{{cmpt}}/epic?epic_id={{epic.epic_id}}\">\n" +
    "                                <h3>\n" +
    "                                    {{epic.title}}, \n" +
    "                                    {{getTime(epic)}}\n" +
    "                                </h3>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                        <div class=\"list-content\">\n" +
    "                            <i class=\"user icon\" ng-class=\"{active: epic.team.teamMemberCount >= epic.max_team_member_count}\"></i>\n" +
    "                            <label>\n" +
    "                                {{epic.team.teamMemberCount}}/{{epic.max_team_member_count}}\n" +
    "                            </label>\n" +
    "                            <label>\n" +
    "                                {{epic.team.name}}\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"two wide column\">\n" +
    "                        <div class=\"wechat\">\n" +
    "                            <i class=\"big wechat icon home-wechat-share\" pop klass=\"qrpop\" content=\"<div class='qrcode' qrcode src='QRCode(epic.epic_id, epic.team.id)'></div>\"></i>\n" +
    "                        </div>\n" +
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
    "                <div class=\"message\" ng-show=\"message.show\">\n" +
    "                    <div class=\"error\" ng-show=\"message.error\">\n" +
    "                        {{message.error|translate}}\n" +
    "                        <i class=\"remove icon\" ng-click=\"message.show=false\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"text\" ng-show=\"message.text\">\n" +
    "                        {{message.text|translate}}\n" +
    "                        <i class=\"remove icon\" ng-click=\"message.show=false\"></i>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"ui form\" ng-if=\"tab.name=='create' && !ms_team\">&nbsp;</div>\n" +
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
    "<div ng-controller=\"gameteamCtrl\" class=\"teammember cloak\" ng-show=\"share_team || ms_team\">\n" +
    "    <div class=\"head\" ng-show=\"!isSharePage && ms_team\">\n" +
    "        <span ng-if=\"(ms_epic.max_team_member_count|| 5) > ms_team.memberLength\">还差{{(ms_epic.max_team_member_count|| 5) - ms_team.memberLength}}位队友,赶紧邀请朋友加入!</span>\n" +
    "        <span ng-if=\"(ms_epic.max_team_member_count|| 5) == ms_team.memberLength\">已完成组队!</span>\n" +
    "        <button class=\"btn\" ng-click=\"removeMember(ms_member)\">\n" +
    "            <i class=\"icon sign out\"></i> {{40021|translate}}\n" +
    "        </button>\n" +
    "        <button class=\"btn\" ng-if=\"ms_epic.epic_id && ms_team.team_id\" pop klass=\"qrpop\" content=\"<div class='qrcode' qrcode src='QRCode(ms_epic.epic_id, ms_team.team_id)'></div>\">\n" +
    "            <i class=\"icon wechat\"></i> {{40018|translate}}\n" +
    "        </button>\n" +
    "    </div>\n" +
    "    <div class=\"body\">\n" +
    "        <div class=\"name\">\n" +
    "            {{40022|translate}}\n" +
    "            <label ng-show=\"!edit\">{{(isSharePage? share_team : ms_team)['name']}}</label>\n" +
    "            <input type=\"text\" maxlength=\"20\" ng-model=\"(isSharePage? share_team : ms_team)['name']\" ng-show=\"edit\">\n" +
    "            <i class=\"icon write\" ng-show=\"!isSharePage && isLeader && !edit\" ng-click=\"edit=true\"></i>\n" +
    "            <i class=\"icon checkmark\" ng-show=\"!isSharePage && isLeader && edit\" ng-click=\"updateTeamName()\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"ui grid\"></div>\n" +
    "        <div class=\"ui five column grid list\">\n" +
    "            <div class=\"column item\" ng-class=\"{selected:selected===member}\" ng-repeat=\"member in (isSharePage? share_team : ms_team)['members']\">\n" +
    "                <div class=\"img\" ng-click=\"select(member)\">\n" +
    "                    <img class=\"gender-{{member.gender.toLowerCase()}}\" ng-src=\"{{member.avatar}}\">\n" +
    "                    <i class=\"icon remove circle\" ng-if=\"member.member_id\" ng-click=\"removeMember(member)\"></i>\n" +
    "                </div>\n" +
    "                <div class=\"title\">\n" +
    "                    {{member.nick_name||member.real_name}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('template/teams_apply_sent.html',
    "<div class=\"teams-apply-sent list\" ng-controller=\"teamsApplySentCtrl\">\n" +
    "    <div class=\"message\" ng-show=\"message.show\">\n" +
    "        <div class=\"error\" ng-show=\"message.error\">\n" +
    "            {{message.error|translate}}\n" +
    "            <i class=\"remove icon\" ng-click=\"message.show=false\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"text\" ng-show=\"message.text\">\n" +
    "            {{message.text|translate}}\n" +
    "            <i class=\"remove icon\" ng-click=\"message.show=false\"></i>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"teams ui items\">\n" +
    "        <div class=\"item ui grid\" ng-repeat=\"team in teams\" ng-class=\"{expanded:team.expanded}\">\n" +
    "            <span class=\"name middle aligned content six wide column\">\n" +
    "                {{team.name}}\n" +
    "            </span>\n" +
    "            <div class=\"images ten wide column minor\" ng-show=\"!team.expanded\" ng-click=\"team.expanded=true\">\n" +
    "                <div class=\"ui five column grid\">\n" +
    "                    <div class=\"img column\" ng-repeat=\"member in team.members\">\n" +
    "                        <img class=\"gender-{{member.gender.toLowerCase()}}\" ng-src=\"{{member.avatar}}\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"images\" ng-show=\"team.expanded\">\n" +
    "                <div class=\"ui five column grid\">\n" +
    "                    <div class=\"img column\" ng-repeat=\"member in team.members\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"img\">\n" +
    "                                <img class=\"gender-{{member.gender.toLowerCase()}}\" ng-src=\"{{member.avatar}}\">\n" +
    "                            </div>\n" +
    "                            <div class=\"title\">\n" +
    "                                {{member.nick_name || member.real_name}}\n" +
    "                            </div>\n" +
    "                            <!--<div class=\"description\">\n" +
    "                                <div>清华大学</div>\n" +
    "                                <div>设计系</div>\n" +
    "                            </div>-->\n" +
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
    "    <div class=\"message\" ng-show=\"message.show\">\n" +
    "        <div class=\"error\" ng-show=\"message.error\">\n" +
    "            {{message.error|translate}}\n" +
    "            <i class=\"remove icon\" ng-click=\"message.show=false\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"text\" ng-show=\"message.text\">\n" +
    "            {{message.text|translate}}\n" +
    "            <i class=\"remove icon\" ng-click=\"message.show=false\"></i>\n" +
    "        </div>\n" +
    "    </div>\n" +
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
    "                        <img class=\"gender-{{member.gender.toLowerCase()}}\" ng-src=\"{{member.avatar}}\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"images\" ng-show=\"team.expanded\">\n" +
    "                <div class=\"ui five column grid\">\n" +
    "                    <div class=\"img column\" ng-repeat=\"member in team.members\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"img\">\n" +
    "                                <img class=\"gender-{{member.gender.toLowerCase()}}\" ng-src=\"{{member.avatar}}\">\n" +
    "                            </div>\n" +
    "                            <div class=\"title\">\n" +
    "                                {{member.nick_name || member.real_name}}\n" +
    "                            </div>\n" +
    "                            <!--<div class=\"description\">\n" +
    "                                <div>清华大学</div>\n" +
    "                                <div>设计系</div>\n" +
    "                            </div>-->\n" +
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
    "    <div class=\"message\" ng-show=\"message.show\">\n" +
    "        <div class=\"error\" ng-show=\"message.error\">\n" +
    "            {{message.error|translate}}\n" +
    "            <i class=\"remove icon\" ng-click=\"message.show=false\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"text\" ng-show=\"message.text\">\n" +
    "            {{message.text|translate}}\n" +
    "            <i class=\"remove icon\" ng-click=\"message.show=false\"></i>\n" +
    "        </div>\n" +
    "    </div>\n" +
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
    "                        <img class=\"gender-{{member.gender.toLowerCase()}}\" ng-src=\"{{member.avatar}}\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"images\" ng-show=\"team.expanded\">\n" +
    "                <div class=\"ui five column grid\">\n" +
    "                    <div class=\"img column\" ng-repeat=\"member in team.members\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"img\">\n" +
    "                                <img class=\"gender-{{member.gender.toLowerCase()}}\" ng-src=\"{{member.avatar}}\">\n" +
    "                            </div>\n" +
    "                            <div class=\"title\">\n" +
    "                                {{member.nick_name || member.real_name}}\n" +
    "                            </div>\n" +
    "                            <!--<div class=\"description\">\n" +
    "                                <div>清华大学</div>\n" +
    "                                <div>设计系</div>\n" +
    "                            </div>-->\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"change item\">\n" +
    "        <button class=\"btn\" ng-click=\"searchTeam()\">{{40211|translate}}</button>\n" +
    "    </div>\n" +
    "</div>"
  );

}]);
