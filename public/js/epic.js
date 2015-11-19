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
            40025: '我的参赛信息',
            40026: '我的比赛记录',
            40027: '我的比赛排名',
            40030: '比赛已结束，结束时间',
            40031: '已开始比赛，比赛结束时间',
            40032: '已结束报名，比赛开始时间',
            40033: '已开始报名，报名结束时间',
            40034: '即将开始报名，报名开始时间',
            40040: 'Bridge+',
            40041: '合得',
            40042: 'http://www.bridgeplus.cn',
            40043: 'http://www.hcdlearning.com',
            40044: '服务号',
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
            40070: '比赛已结束！',
            40071: '比赛已结束，组队未成功！期待下次比赛吧~ ',
            40072: '比赛已开始！加油！',
            40073: '报名已结束，组队未成功！期待下次比赛吧~ ',
            40074: '组队报名成功！比赛时间',
            40075: '组队成功！比赛时间',
            40076: '请在报名截止时间',
            40077: '前完成组队',
            40078: '我的战队',
            40079: '正在参加',
            40080: '大赛详情',
            40081: '全国商战模拟游戏大赛',
            40082: '官网',
            40083: '搜寻队伍',
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
            40404: '未登录',
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
    .directive('epicMobile', function() {
        return {
            restrict: "E",
            templateUrl: 'template/epic_mobile.html'
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
    .directive('teammemberMobile', function() {
        return {
            restrict: "E",
            templateUrl: 'template/teammember_mobile.html'
        };
    })
    .directive('teamjoin', function() {
        return {
            restrict: "E",
            templateUrl: 'template/teamjoin.html'
        };
    })
    .directive('headerMobile', function() {
        return {
            restrict: "E",
            templateUrl: 'template/header_mobile.html'
        };
    })
    .directive('footerMobile', function() {
        return {
            restrict: "E",
            templateUrl: 'template/footer_mobile.html'
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
                                        color: '#CCC',
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
                dom.each(function(i, dom) {
                    $compile(dom)(scope.$parent);
                });
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
    .directive('qrcode', function() {
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
    .directive('inputEnter', ['$parse', function($parse) {
        return {
            restrict: "A",
            compile: function($element, attr) {
                var fn = $parse(attr['inputEnter']);
                return function(scope, element) {
                    element.bind('keypress', function(event) {
                        if (event.keyCode == 13) {
                            scope.$apply(function() {
                                fn(scope, {
                                    $event: event
                                });
                            });
                        }
                    });
                };
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
            }).success(function(json) {
                if (json.isSuccess) {
                    $scope.ms_team = json.result;
                    if ($scope.ms_team) {
                        $scope.fixTeam($scope.ms_team);
                    }
                }
            });
        }

        var search = location.search.slice(1);
        var version = (function() {
            if (typeof buildDate !== 'undefined') {
                return buildDate;
            }
            if (angular && angular.bplus && angular.bplus.config && angular.bplus.config.cdn && angular.bplus.config.cdn.version) {
                return angular.bplus.config.cdn.version;
            }
            return '';
        })();
        var cdn = (function() {
            if (typeof cdn !== 'undefined') {
                return cdn;
            }
            if (angular && angular.bplus && angular.bplus.config && angular.bplus.config.cdn && angular.bplus.config.cdn.normal) {
                return angular.bplus.config.cdn.normal.slice(0, -1);
            }
            return '';
        })();
        var unknown = cdn + cmpt + '/img/unknown.png?' + version;
        var unknownMan = cdn + cmpt + '/img/male_default.png?' + version;
        var unknownWoMan = cdn + cmpt + '/img/female_default.png?' + version;
        $scope.empty = [{}, {}, {}, {}, {}];
        $scope.isLeader = false;
        $scope.cmpt = cmpt;
        $scope.gameLink = (function() {
            if ($scope.site == 'bplus') {
                return '/zh/youth';
            }
            return '/zh/competion';
        })();
        $scope.wechatName = $scope.site == 'bplus' ? 40040 : 40041;
        $scope.portalLink = $scope.site == 'bplus' ? 40042 : 40043;
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
            member.show_name = member.real_name || member.nick_name || member.wechat;
            if (member.education) {
                member.university = member.education.university;
                member.major = member.education.major;
            }
            if (!member.member_id) {
                member.avatar = unknown;
            } else {
                if (member.avatar) {
                    member.avatar += '-small';
                } else {
                    if (member.gender == 'U') {
                        member.avatar = unknown;
                    } else if (member.gender == 'M') {
                        member.avatar = unknownMan;
                    } else if (member.gender == 'F') {
                        member.avatar = unknownWoMan;
                    } else {
                        member.avatar = unknown;
                    }
                }
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
            return protocol + '//' + host + '/' + $scope.lang + cmpt + '/shared_epic?epic_id=' + epic_id + '&team_id=' + team_id;
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
        $scope.getTeamTime = function(epic, delta) {
            var full = delta >= 0;
            if (epic.epic_game_end < now) {
                return $translate.instant(full ? 40070 : 40071);
            }
            if (epic.epic_game_from < now) {
                return $translate.instant(full ? 40072 : 40073);
            }
            if (epic.epic_sign_end < now) {
                return full ? ($translate.instant(40074) + $scope.formatDate(epic.epic_game_from)) : $translate.instant(40073);
            }
            if (epic.epic_sign_from < now) {
                return full ? ($translate.instant(40075) + $scope.formatDate(epic.epic_game_from)) : ($translate.instant(40076) + $scope.formatDate(epic.epic_sign_end) + $translate.instant(40077));
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
                university: $scope.memberName,
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
        $scope.nationalEpics = [];
        $scope.$watch('ms_series.epics', function(val) {
            if (!val) {
                return;
            }
            val.forEach(function(epic) {
                if (epic.region) {
                    epic.regionCode = $scope.translateRegion(epic.region);
                }
                if (epic.regionCode == 40060) {
                    $scope.nationalEpics.push(epic);
                }
            });
            $scope.filterEpics = [].concat($scope.nationalEpics);
        });
        $scope.filterEpics = [];
        $scope.$on('area/choose', function(e, areaCode) {
            $scope.$apply(function() {
                $scope.filterEpics = $scope.ms_series.epics.filter(function(epic) {
                    return epic.regionCode == areaCode;
                }).concat($scope.nationalEpics);
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
                $scope.showInGaming = true;
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
