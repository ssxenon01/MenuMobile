Ext.define('Menu.view.LoginPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'loginpanel',
    config: {
        scrollable:false,
        layout: {
            type:"vbox",
            pack:"center",
            align:"center"
        },
        items: [
            {
                xtype: "image",
                margin:'0 0 200px 0',
                src: 'resources/icons/menu-400.png',
                width: 200,
                height:88
            },{
                xtype:'button',
                role:'loginWithFB',
                width:'90%',
                iconCls:'facebook',
                border:0,
                text:'Файсбүүк ээр нэвтрэх'
            }
        ]
    }
});
