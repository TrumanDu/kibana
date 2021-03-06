/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { getServices, IndexPatterns } from '../kibana_services';
// @ts-ignore
import { getRootBreadcrumbs } from '../breadcrumbs';
import html from './doc.html';
import { Doc } from '../doc/doc';
const { uiRoutes, uiModules, wrapInI18nContext, timefilter } = getServices();
uiModules.get('apps/discover').directive('discoverDoc', function(reactDirective: any) {
  return reactDirective(
    wrapInI18nContext(Doc),
    [
      ['id', { watchDepth: 'value' }],
      ['index', { watchDepth: 'value' }],
      ['indexPatternId', { watchDepth: 'reference' }],
      ['indexPatternService', { watchDepth: 'reference' }],
      ['esClient', { watchDepth: 'reference' }],
    ],
    { restrict: 'E' }
  );
});

uiRoutes
  // the old, pre 8.0 route, no longer used, keep it to stay compatible
  // somebody might have bookmarked his favorite log messages
  .when('/doc/:indexPattern/:index/:type', {
    redirectTo: '/doc/:indexPattern/:index',
  })
  // the new route, es 7 deprecated types, es 8 removed them
  .when('/doc/:indexPattern/:index', {
    controller: ($scope: any, $route: any, es: any, indexPatterns: IndexPatterns) => {
      timefilter.disableAutoRefreshSelector();
      timefilter.disableTimeRangeSelector();
      $scope.esClient = es;
      $scope.id = $route.current.params.id;
      $scope.index = $route.current.params.index;
      $scope.indexPatternId = $route.current.params.indexPattern;
      $scope.indexPatternService = indexPatterns;
    },
    template: html,
    k7Breadcrumbs: ($route: any) => [
      ...getRootBreadcrumbs(),
      {
        text: `${$route.current.params.index}#${$route.current.params.id}`,
      },
    ],
  });
