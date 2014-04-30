/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'Menu',
    requires: [
        'Ext.MessageBox'
    ],
    views: [
        'Image',
        'LoginPanel',
        'Main'
    ],
    controllers:['Main'],
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png'
    },
    isIconPrecomposed: true,
    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png'
    },
    launch: function() {
        Ext.fly('appLoadingIndicator').destroy();
        FB.getLoginStatus(function(response) {
            if (response.status == 'connected') {
                alert('logged in');
            } else {
                alert('not logged in');
            }
        });
        // Initialize the main view
        Ext.Viewport.add(Ext.create('Menu.view.Main'));
    },
    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
