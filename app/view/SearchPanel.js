Ext.define('Menu.view.SearchPanel', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.field.Search'
    ],
    config: {
        styleHtmlContent: true,
        html: 'This is a simple example of fields within toolbars.',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                items: [
                    {
                        xtype: 'searchfield',
                        placeHolder: 'Search',
                        name: 'searchfield'
                    }
                ]
            }
        ]
    }
});
