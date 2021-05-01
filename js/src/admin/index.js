/*
 * This file is part of justoverclock/flarum-ext-infocards.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/app';

app.initializers.add('justoverclock/flarum-ext-infocards', () => {
  app.extensionData.for('justoverclock-infocards').registerSetting({
    setting: 'justoverclock-infocards.apikey',
    name: 'ApiKey',
    type: 'text',
    placeholder: 'Example: https://api.countapi.xyz/hit/your-site.com/visits',
    label: app.translator.trans('flarum-ext-infocards.admin.createapikey'),
    help: app.translator.trans('flarum-ext-infocards.admin.apikeyhelp'),
  });
});
