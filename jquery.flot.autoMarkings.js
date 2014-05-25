/** AutoMarkings Plugin for flot
 * https://github.com/kcdr/flot-autoMarkings/edit/master/README.md
 * 
 * Licensed under the MIT license.
 * 
 */


(function ($) {
    function init(plot) {

        function autoMarkingsFunction(plot, offset) {
        	$(plot.getData()).each(function(){
        		if (this.autoMarkings && this.autoMarkings.enabled === true) {
                    if( plot.getOptions().grid.markings==null ) plot.getOptions().grid.markings = new Array();
        		
                    if( this.autoMarkings.showMinMax === true || this.autoMarkings.showAvg === true )
                    {
	                    if( this.autoMarkings.min==null || this.autoMarkings.max==null || this.autoMarkings.avg==null ){
	        				var min=Number.MAX_VALUE;
	        				var max=0;
	        				var sum = 0;
	        				var count = 0;
	        				$(this.data).each(function(){
	        					if( this[1] < min) min=this[1];
	        					if( this[1] > max) max=this[1];
	        					count++;
	        					sum += this[1];
	        				});
	        				this.autoMarkings.min = min;
	        				this.autoMarkings.max = max;
	        				this.autoMarkings.avg = sum/count;
	        			}
                    }
                    
                    var seriesColor = this.autoMarkings.color || this.color;
                    
	        		if( this.autoMarkings.showMinMax === true && this.autoMarkings.min!=Number.MAX_VALUE && this.autoMarkings.max!=0 )
	        		{
	        			plot.getOptions().grid.markings.push({ yaxis: { from: this.autoMarkings.min, to: this.autoMarkings.max }, color: seriesColor.replace('rgb(','rgba(').replace(')',','+this.autoMarkings.minMaxAlpha+')') });
	        		}
	        		if( this.autoMarkings.showAvg === true && this.autoMarkings.avg!=Number.NaN)
	        		{
	        			if( this.autoMarkings.avg!=null )
	        				plot.getOptions().grid.markings.push({ yaxis: { from: this.autoMarkings.avg, to: this.autoMarkings.avg }, color: seriesColor });
	        		}
        		}
        	});
        }

        plot.hooks.processOffset.push(autoMarkingsFunction);
    }

    var options = {series: { autoMarkings: {enabled: false, minMaxAlpha:0.2}}};
    
    /** Options
     * enabled
     * color
     * showMinMax
     * minMaxAlpha
     * showAvg
     * min
     * max
     * avg
     */

    $.plot.plugins.push({
        init: init,
        options: options,
        name: "autoMarkings",
        version: "0.1"
    });
})(jQuery);
