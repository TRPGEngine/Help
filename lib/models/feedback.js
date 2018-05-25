module.exports = function HelpFeedback(orm, db) {
  let HelpFeedback = db.define('help_feedback', {
    username: {type: 'text', required: true},
    contact: {type: 'text'},
    content: {type: 'text', size: 1000, required: true},
    createAt: {type: 'date', time: true},
  }, {
    hooks: {
      beforeCreate: function(next) {
        if (!this.createAt) {
  				this.createAt = new Date();
  			}
  			return next();
      }
    },
    methods: {

    }
  });

  return HelpFeedback;
}
