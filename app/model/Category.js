Ext.define('Menu.model.Category', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id', type: 'string'},
            {name: 'slug', type: 'string'},
            {name: 'title', type: 'string'},
            {name: 'thumb', type: 'auto'},
            {name: 'org-count', type: 'integer'},
            {name: 'description', type: 'string'},
            {name: 'dateCreated', type: 'date'},
            {name: 'parent', type: 'auto'}
        ]
    }
});
