angular.module('portfolioControllers', [])
    .controller('WorkCtrl', ['$scope', '$routeParams', 'skills', 'projects',
        function($scope, $routeParams, skills, projects) {
            var isSelectedSkill = function(skill) {
                return skill.key === $scope.activeSkill;
            };
            var isActiveSkillContainedWithinProject = function(project) {
                return project.skills.indexOf($scope.activeSkill) != -1 || !$scope.activeSkill;
            };
            $scope.skills = skills;
            $scope.projects = projects;
            $scope.activeSkill = $routeParams.skill;
            $scope.isSelectedSkill = isSelectedSkill;
            $scope.isActiveSkillContainedWithinProject = isActiveSkillContainedWithinProject;
            scroll(0,0);
        }
    ]).controller('HomeCtrl', ['$scope', 'skills',
        function($scope, skills){
            $scope.skills = skills;
        }
    ]);