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
var PandaView = require('./panda-view');
var PandaListView = require('./panda-list-view');
var customization = require('%app.core%/customization');
var dialog = require('%app.core%/dialog');

//Unless you know what you're doing, registration of a new layout should always go through customization module dedicated function
module.exports = customization.declareLayout({
    //Header configuration is self-explanatory
    header: {
        title: app.lang.get('Panda Details'),
        buttons: {
            mainMenu: true,
            save: true,
            cancel: true,
        },
    },

    //Views that are contained in this layout. There can be any number of views.
    views: [PandaView],
}, {
    //We can extend NomadLayout methods like so (only @protected and @public method should be extended):
    onHeaderSaveClick: function() {
        dialog.showAlert('Custom Save button handler');
        this._super();
    },
});

