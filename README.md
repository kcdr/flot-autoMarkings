AutoMarkings Plugin for Flot
=================
This is a plugin for drawing Markers for min max and average values with [flot](http://code.google.com/p/flot/).

## Example ##
![Example](/resources/autoMarkings_example.png)

## Installation ##
Download and include the javaScript-file on your page:
```html
<script type="text/javascript" src="[...]/jquery.flot.min.js"></script>
<script type="text/javascript" src="[...]/jquery.flot.autoMarkings.js"></script>
```

## Options ##
* enabled: [true|false] Enable or disable autoMarkings. Default: false
* color: [String e.g. "rgb(237,194,64)"] Color to use for drawing the marking of the series. If not given the plugin will use the color calculated by flot for each series.
* showMinMax: [true|false] Draw a marking between the minimum and maximum of the series data. Default: false
* minMaxAlpha: [doubleValue] Alpha value of minMax markings color. Default: 0.2
* showAvg: [true|false] Draw a marking line for the average of the series data. Default: false
* min: [doubleValue] The minimum value of the series data. If not given the plugin will automatically calculate this value.
* max: [doubleValue] The maximum value of the series data. If not given the plugin will automatically calculate this value.
* avg: [doubleValue] The average value of the series data. If not given the plugin will automatically calculate this value.

Options can be set inside the 'series' option of the plot. Flot will then copy these to each series.
```js
var options = {
  series: {
    autoMarkings= {
      enabled: true,
        showMinMax: true,
        showAvg: true
    }
  }
};

$.plot(placeholder, data, options);
```

Options can also be set for each series individually to e.g. enable autoMarkings on one series and disable on another. 
