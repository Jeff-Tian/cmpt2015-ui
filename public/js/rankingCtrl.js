(function(exports) {
    if (window.ModuleTrack) {
        var moduleTrack = new window.ModuleTrack('ranking');
    }

    var DETAILS_RANKING_TITLE = [
        ["名次", "", "总得分"],
        ["名次", "", "平均排名"],
        ["名次", "", "平均得分"]
    ];
    var DETAILS_OPTIONS = [[], [], []];

    var OPTION_INIT = 0;
    var SUB_OPTION_INIT = [0, 0, 0];
    var NUMBER_SUFFIX = ["st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th"];

    var TITLE_OPTIONS = [
        ["学校", "排行榜"],
        ["战队", "排行榜"],
        ["个人", "排行榜"]
    ];
    var SUB_TITLE_OPTIONS = [
        "总得分榜",
        "平均排名榜",
        "平均得分榜"
    ];

    var TYPE_AVERAGE_RANK = "average-rank";
    var TYPE_AVERAGE_SCORE = "average-score";
    var TYPE_TOTAL_SCORE = "total-score";
    var TYPE_ORDER = [TYPE_TOTAL_SCORE, TYPE_AVERAGE_RANK, TYPE_AVERAGE_SCORE];
    var TARGET_SCHOOL = "school";
    var TARGET_TEAM = "team";
    var TARGET_PERSON = "user";
    var TARGET_ORDER = [TARGET_SCHOOL, TARGET_TEAM, TARGET_PERSON];

    var createRankingTitleArray = function(option, suboption) {
        var title = DETAILS_RANKING_TITLE[suboption];
        return [title[0], TITLE_OPTIONS[option][0], title[2]];
    };

    var createSingleDetailObject = function(sourceAry) {
        return {
            "rank": sourceAry[0],
            "name": sourceAry[1],
            "score": sourceAry[2]
        };
    };

    var refreshDetails = function(option, subOption) {
        var retArray = [];
        retArray.push(createSingleDetailObject(createRankingTitleArray(option, subOption)));
        var resultList = DETAILS_OPTIONS[option][subOption];
        resultList.forEach(function(value) {
            retArray.push(createSingleDetailObject(value));
        });

        return retArray;
    };

    exports.rankingCtrl = function($scope, $http, $q) {
        var urls = [
            "/service-proxy/info/ranking/total-score/school/10",
            "/service-proxy/info/ranking/average-score/school/10",
            "/service-proxy/info/ranking/average-rank/school/10",
            "/service-proxy/info/ranking/total-score/team/10",
            "/service-proxy/info/ranking/average-score/team/10",
            "/service-proxy/info/ranking/average-rank/team/10",
            "/service-proxy/info/ranking/total-score/user/10",
            "/service-proxy/info/ranking/average-score/user/10",
            "/service-proxy/info/ranking/average-rank/user/10"
        ];
        var mappingNameRules = function(value, mappingObject) {
            var retValue = "";
            switch (value) {
                case TARGET_SCHOOL:
                    retValue = mappingObject.name;
                    break;
                case TARGET_TEAM:
                    retValue = mappingObject.name_s;
                    break;
                case TARGET_PERSON:
                    retValue = mappingObject.real_name_s;
                    break;
            }
            return retValue;
        };
        var mappingScoreRules = function(value, mappingObject) {
            var retValue = "";
            switch (value) {
                case TYPE_AVERAGE_RANK:
                    retValue = mappingObject.average;
                    break;
                case TYPE_AVERAGE_SCORE:
                    retValue = mappingObject.average;
                    break;
                case TYPE_TOTAL_SCORE:
                    retValue = mappingObject.total;
                    break;
            }
            return parseFloat(retValue).toFixed(2);
        };
        var urlPromises = urls.map(function(value, index) {
            var dfd = $q.defer();
            $http.get(value).success(function(data) {
                var dataArray = data.data;
                if (dataArray && dataArray.length > 0) {
                    dataArray = dataArray.map(function(value, index) {
                        return [
                            (index + 1) + NUMBER_SUFFIX[index],
                            mappingNameRules(data.target, value), 
                            mappingScoreRules(data.type, value)
                        ];
                    })
                }
                DETAILS_OPTIONS[TARGET_ORDER.indexOf(data.target)][TYPE_ORDER.indexOf(data.type)] = dataArray;
                dfd.resolve(dataArray);
            });
            return dfd.promise;
        });
        $q.all(urlPromises).then(function() {
            $scope.option = OPTION_INIT;
            $scope.subOption = SUB_OPTION_INIT;
            $scope.details = refreshDetails($scope.option, $scope.subOption[$scope.option]);
            $scope.titleOptions = TITLE_OPTIONS;
            $scope.subTitleOptions = SUB_TITLE_OPTIONS;
        }, function (reason) {
            dfd.reject(reason);
        });
        $scope.rankChange = function(option) {
            $scope.option = option;
            $scope.details = refreshDetails($scope.option, $scope.subOption[option]);
        };
        $scope.subTileChange = function(option) {
            $scope.subOption[$scope.option] = option;
            $scope.details = refreshDetails($scope.option, option);
        };
    };
    exports.rankingCtrl.$inject = ['$scope', '$http', '$q'];
})(angular.cmpt = angular.cmpt || {});
