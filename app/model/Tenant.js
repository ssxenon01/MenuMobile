Ext.define('Menu.model.Tenant', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id', type: 'string'},
            {name: 'title', type: 'string'},
            {name: 'thumb', type: 'auto'},
            {name: 'images', type: 'string'},
            {name: 'description', type: 'string'},
            {name: 'category', type: 'string'},
            {name: 'map', type: 'auto'},

            // contact info

            {name: 'email', type: 'string'},
            {name: 'phone', type: 'string'},
            {name: 'mobile', type: 'string'},
            {name: 'fax', type: 'string'},
            {name: 'websiteUrl', type: 'string'},
            {name: 'facebookUrl', type: 'string'},
            {name: 'googlePlust', type: 'string'},
            {name: 'twitterId', type: 'string'},

            // additional

            {name:'reviews'},
            {name:'rating'},
            {name:'ratingCount'}
        ]
    }
});
