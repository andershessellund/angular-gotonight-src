/*global angular */

(function() {
  "use strict";

  var module = angular.module('todomvc', []);
  module.controller('TodoCtrl', function($scope) {
    $scope.todos = [
      { title: 'Vis liste af eksisterende TODOs (en mock-liste til at starte med).' },
      { title: 'Markér TODO som færdig ved at klikke på flueben.' },
      { title: 'Skriv ny TODO ved at angive tekst og trykke enter.' },
      { title: 'Fjern eksisterende TODO ved at trykke på krydset.' },
      { title: '"XXX items left" skal vise korrekt antal.' },
      { title: '"Clear completed (XXX)" skal rydde færdige TODOs og vise korrekt antal.' },
      { title: 'Vis kun "main"-sektion hvis der overhovedet er nogen TODOs.' },
      { title: 'Vis kun "footer"-sektion hvis der overhovedet er nogen TODOs.' },
      { title: 'Mulighed for at markere/fravælge alle.' },
      { title: 'Gem listen af TODOs i localStorage.' },
      { title: '"All"/"Active"/"Completed" skal vise relevante TODOs.' },
      { title: 'Den aktuelle side ("All"/"Active"/"Completed") skal fremhæves.' },
      { title: 'Redigér eksisterende TODO ved at dobbeltklikke på teksten og redigere.' }
    ];
  });
})();