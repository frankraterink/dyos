function Dyos() {
	this.appvar = 'foos';
  this.init();
}

Dyos.prototype = {
	init: function() {
		// define vars
    this.demoText = 'hello world';

    // init functions
    var that = this;
    $('.grid-item').on('click', function(){
      var el = $(this);
      that.GridItemOnclick(el);
    });
	},

  GridItemOnclick: function(el) {

    var item = $(el);
    var largeItems = $('.grid-item-large');
    var that = this;

    if (item.hasClass('grid-item-large')) {
      $(el).removeClass('grid-item-large');
      that.triggerMasonry();
    } else if (largeItems.length > 0) {
      largeItems.removeClass('grid-item-large');
      that.triggerMasonry();
      setTimeout(function(){
        item.addClass('grid-item-large');
        that.triggerMasonry();
      }, 600);

    } else {
      item.addClass('grid-item-large');
      that.triggerMasonry();
    }





  },

	triggerMasonry: function() {
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer',
      transitionDuration: '0.6s'
    });
	}
}


Dyos = new Dyos();
