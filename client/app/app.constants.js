'use strict';

import angular from 'angular';

export default angular.module('todoAppApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
