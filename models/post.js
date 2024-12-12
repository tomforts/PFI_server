import Model from './model.js';

export default class Post extends Model {
    constructor() {
        super(true /* secured Id */);

        this.addField('Title', 'string');
        this.addField('Text', 'string');
        this.addField('Category', 'string');
        this.addField('Image', 'asset');
        this.addField('Date', 'integer');
        //this.addField('Likes', 'array', []); //array of users
        this.addField('Creator', 'object');
        


        this.setKey("Title");
    }
}