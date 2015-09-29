angular.module('game').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('template/gameteam.html',
    "<teammember></teammember>\n" +
    "<teamjoin></teamjoin>"
  );


  $templateCache.put('template/people_can_join.html',
    "<div class=\"people-can-join list\" ng-controller=\"peopleCanJoinCtrl\">\n" +
    "    <div class=\"ui search\">\n" +
    "        <div class=\"ui left icon input\">\n" +
    "            <i class=\"icon search\"></i>\n" +
    "            <input type=\"text\" class=\"search-input\" placeholder=\"{{40016|translate}}\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"persons ui items\">\n" +
    "        <div class=\"item ui grid expanded\">\n" +
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
    "                        <button class=\"btn\">\n" +
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
    "        <div class=\"item ui grid expanded\">\n" +
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
    "<div class=\"people-want-to-join\"></div>"
  );


  $templateCache.put('template/teamjoin.html',
    "<div ng-controller=\"teamjoin\" class=\"teamjoin\">\n" +
    "    <div class=\"actions ui grid\">\n" +
    "        <div class=\"six wide column\">\n" +
    "            <div class=\"toggle\">\n" +
    "                <div class=\"{{tab.name}}\" ng-repeat=\"tab in tabs\">\n" +
    "                    <button class=\"btn\" ng-class=\"{selected:selected===tab}\" ng-click=\"toggle(tab)\">\n" +
    "                        {{tab.label|translate}}\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"ten wide column\" ng-show=\"selected.name==='create'\">\n" +
    "            <div class=\"create-input ui form fluid custom popup center right transition visible\">\n" +
    "                <div class=\"inline fields\">\n" +
    "                    <div class=\"one wide field\">\n" +
    "                    </div>\n" +
    "                    <div class=\"label four wide field\">\n" +
    "                        {{40006|translate}}\n" +
    "                    </div>\n" +
    "                    <div class=\"eight wide field\">\n" +
    "                        <input type=\"text\" maxlength=\"100\">\n" +
    "                    </div>\n" +
    "                    <div class=\"four wide field\">\n" +
    "                        <button class=\"btn\">\n" +
    "                            {{40007|translate}}\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"contents\">\n" +
    "        <div class=\"{{tab.name}}\" ng-show=\"selected===tab\" ng-repeat=\"tab in tabs\">\n" +
    "            <div class=\"tab-header ui form\">\n" +
    "                <div class=\"inline fields\">\n" +
    "                    <div class=\"four wide field\" ng-repeat=\"child in tab.children\">\n" +
    "                        <button class=\"btn\" ng-class=\"{selected: selected.tab===child}\" ng-click=\"selectTab(child)\">\n" +
    "                            {{child.label|translate}}\n" +
    "                            <span ng-if=\"number[child.name]\">\n" +
    "                                ({{number[child.name]}})\n" +
    "                            </span>\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"tabs\">\n" +
    "                <div class=\"content {{child.name}}\" ng-show=\"selected.tab===child\" ng-repeat=\"child in tab.children\">\n" +
    "                    <div ng-dynamic-directive=\"child.name\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>"
  );


  $templateCache.put('template/teammember.html',
    "<div ng-controller=\"gameteam\" class=\"teammember\">\n" +
    "    <h2 class=\"title\">选择你想扮演的角色</h2>\n" +
    "    <div class=\"ui five column grid\">\n" +
    "        <div class=\"column item\" ng-class=\"{selected:selected===item}\" ng-repeat=\"item in teamMembers\">\n" +
    "            <div class=\"image\" ng-click=\"select(item)\">\n" +
    "                <img src=\"//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7-small\" alt=\"\">\n" +
    "                <i class=\"icon checkmark\"></i>\n" +
    "            </div>\n" +
    "            <div class=\"name\">\n" +
    "                {{item.title}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"meta\">你選擇扮演的CEO，首重具備優秀的執行力、綜觀大局的遠 見。说明文字说明文字说明文字说明文字说明文字说明文字 说明文字说明文字说明文字。\n" +
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
    "            <div class=\"images ten wide column\" ng-show=\"!team.expanded\" ng-click=\"team.expanded=true\">\n" +
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
    "                                {{member.nick_name}}(CEO)\n" +
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
    "                <button class=\"btn\">\n" +
    "                    <i class=\"icon plus\"></i>{{40013|translate}}\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            <span class=\"name middle aligned content four wide column\">\n" +
    "                {{team.name}}\n" +
    "            </span>\n" +
    "            <div class=\"images ten wide column\" ng-show=\"!team.expanded\" ng-click=\"team.expanded=true\">\n" +
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
    "                                {{member.nick_name}}(CEO)\n" +
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
    "            <input type=\"text\" class=\"search-input\" placeholder=\"{{40016|translate}}\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"ui items\">\n" +
    "        <div class=\"item ui grid\" ng-repeat=\"team in teams\" ng-class=\"{expanded:team.expanded}\">\n" +
    "            <div class=\"middle aligned content two wide column\">\n" +
    "                <button class=\"btn\">\n" +
    "                    <i class=\"icon plus\"></i>{{40017|translate}}\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            <span class=\"name middle aligned content four wide column\">\n" +
    "                {{team.name}}\n" +
    "            </span>\n" +
    "            <div class=\"images ten wide column\" ng-show=\"!team.expanded\" ng-click=\"team.expanded=true\">\n" +
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
    "                                {{member.nick_name}}(CEO)\n" +
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
