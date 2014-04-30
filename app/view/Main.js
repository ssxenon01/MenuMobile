Ext.define('Menu.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.tab.Panel'
    ],
    config: {
        cls:'gundee',
        layout:'card',
        items: [
            {
                xtype:'loginpanel',
                iconCls:'home',
                cls:'login-form',
                title:'Login'
            },
            {
                xtype:'tabpanel',
                tabBarPosition: 'bottom',
                items:[
                    {
                        xtype:'imgupload',
                        iconCls:'home',
                        title:'Image'
                    },
                    {
                        title: 'Welcome',
                        iconCls: 'home',
                        styleHtmlContent: true,
                        scrollable: true,
                        items: {
                            docked: 'top',
                            xtype: 'titlebar',
                            title: 'Welcome to Sencha Touch 2'
                        },
                        html: [
                            "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                            "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                            "and refresh to change what's rendered here."
                        ].join("")
                    },
                    {
                        title: 'Get Started',
                        iconCls: 'action',

                        items: [
                            {
                                docked: 'top',
                                xtype: 'titlebar',
                                title: 'Getting Started'
                            },
                            {
                                xtype: 'video',
                                url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                                posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                            }
                        ]
                    }
                ]
            }
            
        ]
    }
});
