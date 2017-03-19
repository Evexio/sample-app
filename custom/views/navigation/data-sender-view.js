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

module.exports = customization.declareView({
    header: {
        title: app.lang.get('Data Sender'),
        buttons: {
            mainMenu: true,
        },
    },
}, {
    template: 'data-sender',
    shouldFetchContext: false,

    events: function() {
        return { 'click .user-submit': 'onSubmit' };
    },

    onSubmit: function(e) {
        e.preventDefault();

        var value = this.$('input[type=text]').val();
        var data = { userInput: value };

        app.controller.navigate({
            url: 'datareceiver',
            data: data, // we send data object that will be available as options.data of DataReceiverView.initialize method.
        });
    },
});
