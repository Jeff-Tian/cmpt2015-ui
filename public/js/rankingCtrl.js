(function(exports) {
    if (window.ModuleTrack) {
        var moduleTrack = new window.ModuleTrack('ranking');
    }
    var DETAILS_RANKING_TITLE = [
        ["名次", "", "总得分"],
        ["名次", "", "平均排名"],
        ["名次", "", "平均得分"]
    ];
    var RANK_AVERAGE_RANK = [
        ["1st", "浙江财经大学", "2.25"],
        ["2nd", "中山大学", "2.50"],
        ["3rd", "东北财经大学", "2.81"],
        ["4th", "西南财经大学", "2.90"],
        ["5th", "复旦大学", "2.93"],
        ["6th", "山东财经大学", "3.13"],
        ["7th", "广东财经大学", "3.15"],
        ["8th", "同济大学", "3.32"],
        ["9th", "吉林大学", "3.41"],
        ["10th", "对外经济贸易大学", "3.41"]
    ];
    var RANK_AVERAGE_SCORE = [
        ["1st", "西南财经大学", "56.59"],
        ["2nd", "复旦大学", "51.40"],
        ["3rd", "中山大学", "48.89"],
        ["4th", "东北财经大学", "47.45"],
        ["5th", "对外经济贸易大学", "44.42"],
        ["6th", "长春理工大学", "42.10"],
        ["7th", "吉林大学", "41.64"],
        ["8th", "同济大学", "39.96"],
        ["9th", "山东财经大学", "39.37"],
        ["10th", "浙江财经大学", "36.70"]
    ];
    var RANK_TOTAL_SCORE = [
        ["1st", "佟文钊（中国人民大学）", "171.41"],
        ["1st", "李朋浩（中国人民大学）", "171.41"],
        ["1st", "林鹤仪（中国人民大学）", "171.41"],
        ["1st", "道日那（中国人民大学）", "171.41"],
        ["1st", "王梓麒（中国人民大学）", "171.41"],
        ["6th", "徐子云（复旦大学）", "145.43"],
        ["6th", "项昊天（复旦大学）", "145.43"],
        ["6th", "林子傑（复旦大学）", "145.43"],
        ["6th", "张文萱（复旦大学）", "145.43"],
        ["6th", "金旭磊（复旦大学）", "145.43"]
    ];
    var SCHOOL_OPTIONS = [RANK_AVERAGE_RANK, RANK_AVERAGE_SCORE, RANK_TOTAL_SCORE];
    var PERSONAL_OPTIONS = [RANK_AVERAGE_SCORE, RANK_AVERAGE_SCORE, RANK_AVERAGE_SCORE];
    var TEAM_OPTIONS = [RANK_TOTAL_SCORE, RANK_TOTAL_SCORE, RANK_TOTAL_SCORE];
    var DETAILS_OPTIONS = [SCHOOL_OPTIONS, TEAM_OPTIONS, PERSONAL_OPTIONS];
    var OPTION_INIT = 0;
    var SUB_OPTION_INIT = [0, 0, 0];

    var TITLE_OPTIONS = [
        ["学校", "排行榜"],
        ["战队", "排行榜"],
        ["个人", "排行榜"]
    ];
    var SUB_TITLE_OPTIONS = ["总得分榜", "排名榜", "平均得分榜"];

    var createRankingTitleArray = function(option) {
        var title = DETAILS_RANKING_TITLE[option];
        return [title[0], TITLE_OPTIONS[option][0], title[2]];
    }

    var createSingleDetailObject = function(sourceAry) {
        return {
            "rank": sourceAry[0],
            "name": sourceAry[1],
            "score": sourceAry[2]
        };
    };

    var refreshDetails = function(option, subOption) {
        var retArray = [];
        retArray.push(createSingleDetailObject(createRankingTitleArray(option)));
        var resultList = DETAILS_OPTIONS[option][subOption];
        resultList.forEach(function(value) {
            retArray.push(createSingleDetailObject(value));
        });

        return retArray;
    };

    exports.rankingCtrl = function($scope) {
        $scope.option = OPTION_INIT;
        $scope.subOption = SUB_OPTION_INIT;
        $scope.details = refreshDetails($scope.option, $scope.subOption[$scope.option]);
        $scope.titleOptions = TITLE_OPTIONS;
        $scope.subTitleOptions = SUB_TITLE_OPTIONS;
        $scope.rankChange = function(option) {
            $scope.option = option;
            $scope.details = refreshDetails($scope.option, $scope.subOption[option]);
        };
        $scope.subTileChange = function(option) {
            $scope.subOption[$scope.option] = option;
            $scope.details = refreshDetails($scope.option, option);
        };
    };
    exports.rankingCtrl.$inject = ['$scope'];
})(angular.cmpt = angular.cmpt || {});