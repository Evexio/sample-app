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

var customization = require('%app.core%/customization');

// Overriding application config. This method must be called on scripts loading phase, once all scripts are loaded, then it's been executed only once.
customization.setConfigOverrideFn(function(appConfig) {

    // We need to exclude Bookmarks module from offline because it's a custom module added by metadata.
    // (Actually it's inject by metadata hack in samples-meta-bootstrap/modules-meta, DO NOT FOLLOW that example)
    var offlineExcluded = appConfig.offline.exclude;
    if (!_.contains(offlineExcluded, 'Bookmarks')) {
        offlineExcluded.push('Bookmarks');
    }
});
