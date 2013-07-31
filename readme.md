# Ion.CheckRadio 1.0.1

> English description | <a href="readme.ru.md">Описание на русском</a>

jQuery plugin for styling checkboxes and radio-buttons. With skin support. <a href="http://ionden.com/a/plugins/ion.checkRadio/en.html">Project page and demos</a>

Download: <a href="http://ionden.com/a/plugins/ion.checkRadio/ion.checkRadio-1.0.1.zip">ion.checkRadio-1.0.1.zip</a>

***

## Description
* Ion.CheckRadio — nice and easy jQuery-plugin for checkbox and radio-buttons customization.
* With skin support
* Crossbrowser: Google Chrome, Mozilla Firefox, Opera, Safari, IE(8.0+)
* Ion.CheckRadio supports touch-devices (iPhone, iPad, etc.).
* Ion.CheckRadio freely distributed under terms of <a href="http://ionden.com/a/plugins/licence-en.html" target="_blank">MIT licence</a>.

## Dependencies
* <a href="http://jquery.com/" target="_blank">jQuery 1.9+</a>

## Using script

Import this libraries:
* jQuery
* ion.checkRadio.min.js

And CSS:
* normalize.min.css - desirable if you have not yet connected one
* ion.checkRadio.css
* ion.checkRadio.skinName.css

Don't forget about skin image:
* icr-skinName-skin.png - skin sprite
* Or use included PSD file and draw your own skin

Create checkboxes and/or radio-buttons:
```html
<input type="radio" name="reading" value="0" id="reading_0" /> <label for="reading_0">Very much</label>
<input type="radio" name="reading" value="1" id="reading_1" /> <label for="reading_1">Sometimes</label>
<input type="radio" name="reading" value="2" id="reading_2" /> <label for="reading_2">Better watch movie</label>
<input type="radio" name="reading" value="3" id="reading_3" /> <label for="reading_3">Hate it</label>

or

<label><input type="radio" name="movies" value="0" /> Love them</label>
<label><input type="radio" name="movies" value="1" /> Like them</label>
<label><input type="radio" name="movies" value="2" /> Indifferent</label>
<label><input type="radio" name="movies" value="3" /> Hate them</label>

or drop some checkboxes:

<label><input type="checkbox" name="think" value="0" /> Self</label>
<label><input type="checkbox" name="think" value="1" /> Money</label>
<label><input type="checkbox" name="think" value="2" /> Stuff</label>
<label><input type="checkbox" name="think" value="3" /> Health</label>
<label><input type="checkbox" name="think" value="4" /> Work</label>
<label><input type="checkbox" name="think" value="5" checked /> Rest</label>
<label><input type="checkbox" name="think" value="6" disabled checked /> Sex</label>
```

Initialize slider:
```javascript
$("input[type='radio'], input[type='checkbox']").ionCheckRadio();
```

Success!


## Update history
* July 31, 2013 - minor enhancement
* July 21, 2013 - release