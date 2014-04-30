Ext.define('Menu.view.ReviewForm', {
    extend: 'Ext.form.Panel',
    xtype: 'reviewform',
    fullscreen: true,
    config: {
        items: [
            {
                xtype: 'textfield',
                name: 'title',
                label: 'Name'
            },
            {
                xtype: 'textfield',
                name: 'content',
                label: 'Email'
            },
            {
                xtype: 'passwordfield',
                name: 'password',
                label: 'Password'
            }
        ]
    }
});
