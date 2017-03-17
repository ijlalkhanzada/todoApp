'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('todoAppApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
