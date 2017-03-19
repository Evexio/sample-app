/*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/Resources/Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */

var app = SUGAR.App;
var customization = require('%app.core%/customization');
var ptr = require('%app.views%/ptr');

module.exports = customization.declareView({
    header: {
        title: app.lang.get('Data Receiver'),
        buttons: {
            mainMenu: true,
        },
    },
}, {
    template: 'data-receiver',
    shouldFetchContext: false,

    initialize: function(options) {
        var data = options.data;    // data object from controller.navigate or controller.loadScreen method.
        this.userInput = data ? data.userInput : 'unknown';

        this._super(options);
    },
});
