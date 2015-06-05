# Ion.CheckRadio 2.0.0

[![](https://pledgie.com/campaigns/25694.png?skin_name=chrome)](https://pledgie.com/campaigns/25694)

> English description | <a href="readme.ru.md">Описание на русском</a>

jQuery plugin for styling checkboxes and radio-buttons. With skin support.
* <a href="http://ionden.com/a/plugins/ion.checkRadio/en.html">Project page and demos</a>
* <a href="http://ionden.com/a/plugins/ion.checkRadio/ion.checkRadio-2.0.0.zip">Download Ion.checkRadio-2.0.0.zip</a>

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

### Recommended HTML
```html
Radio-buttons:

<label class="icr-label">
    <span class="icr-item type_radio"></span>
    <span class="icr-hidden"><input class="icr-input" type="radio" name="!group_name!" value="!radio_value_1!" /></span>
    <span class="icr-text">!radio_text_1!</span>
</label>
<label class="icr-label">
    <span class="icr-item type_radio"></span>
    <span class="icr-hidden"><input class="icr-input" type="radio" name="!group_name!" value="!radio_value_2!" /></span>
    <span class="icr-text">!radio_text_2!</span>
</label>

Checkboxes:
<label class="icr-label">
    <span class="icr-item type_checkbox"></span>
    <span class="icr-hidden"><input class="icr-input" type="radio" name="!group_name!" value="!checkbox_value_1!" /></span>
    <span class="icr-text">!checkbox_text_1!</span>
</label>
<label class="icr-label">
    <span class="icr-item type_checkbox"></span>
    <span class="icr-hidden"><input class="icr-input" type="radio" name="!group_name!" value="!checkbox_value_2!" /></span>
    <span class="icr-text">!checkbox_text_1!</span>
</label>
```

 
### Regular HTML
```html
Create checkboxes and/or radio-buttons:

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

### Initialize slider
```javascript
// all on the page:
$("input[type='radio'], input[type='checkbox']").ionCheckRadio();

// or specific only:
$(".my_inputs").ionCheckRadio();
```

Success!


## <a href="history.md">Update history</a>

## Support plugin development
[![](https://pledgie.com/campaigns/25694.png?skin_name=chrome)](https://pledgie.com/campaigns/25694)