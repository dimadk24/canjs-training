/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import 'canjs/amd/can';
import 'can/construct/super';
import 'can/construct/proxy';
import 'can/control/plugin';
import 'can/list/sort';
import 'can/map/attributes';
import 'can/map/backup';
import 'can/map/validations';
import './components/hello-world/hello-world';

const template = can.mustache('<hello-world></hello-world');
document.getElementById('app').append(template({}));
