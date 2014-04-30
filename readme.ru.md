# Ion.CheckRadio 1.1.0

> <a href="readme.md">English description</a> | Описание на русском

jQuery плагин для стилизации чекбоксов и радио-батонов. С поддержкой скинов <a href="http://ionden.com/a/plugins/ion.checkRadio/index.html">Сайт проекта и демо</a>

Download: <a href="http://ionden.com/a/plugins/ion.checkRadio/ion.checkRadio-1.1.0.zip">ion.checkRadio-1.1.0.zip</a>

***

## Описание
* Ion.CheckRadio — простой и понятный плагин для стилизации чекбоксов и радио-батонов.
* С поддержкой скинов
* Кроссбраузерная поддержка: Google Chrome, Mozilla Firefox, Opera, Safari, IE(8.0+)
* Плагин поддерживает устройства с touch-экраном (iPhone, iPad, etc.).
* <a href="https://github.com/IonDen/ion.checkRadio">Репозиторий на GitHub</a>.
* Плагин свободно распространяется на условиях <a href="http://ionden.com/a/plugins/licence.html" target="_blank">лицензии MIT</a>.

## Зависимости
* <a href="http://jquery.com/" target="_blank">jQuery 1.9+</a>

## Подключение

Подключаем библиотеки:
* jQuery
* ion.checkRadio.min.js

CSS:
* normalize.min.css - елательно, если он у вас еще не подключен
* ion.checkRadio.css
* ion.checkRadio.skinName.css

Не забываем про картинки скина:
* icr-skinName-skin.png - спрайт скина
* Либо воспользуйтесь вложенным в архив PSD файлом, и нарисуйте собственный скин

Создаем чекбоксы и/или радио-батоны:
```html
<input type="radio" name="reading" value="0" id="reading_0" /> <label for="reading_0">Очень люблю</label>
<input type="radio" name="reading" value="1" id="reading_1" /> <label for="reading_1">Иногда читаю</label>
<input type="radio" name="reading" value="2" id="reading_2" /> <label for="reading_2">Лучше фильм посмотрю</label>
<input type="radio" name="reading" value="3" id="reading_3" /> <label for="reading_3">Ненавижу</label>

или так:

<label><input type="radio" name="movies" value="0" /> Обожаю</label>
<label><input type="radio" name="movies" value="1" /> Не против</label>
<label><input type="radio" name="movies" value="2" /> Так себе</label>
<label><input type="radio" name="movies" value="3" /> Ненавижу</label>

или вот еще чекбоксиков:

<label><input type="checkbox" name="think" value="0" /> О себе</label>
<label><input type="checkbox" name="think" value="1" /> О деньгах</label>
<label><input type="checkbox" name="think" value="2" /> О высоком</label>
<label><input type="checkbox" name="think" value="3" /> О здоровье</label>
<label><input type="checkbox" name="think" value="4" /> О работе</label>
<label><input type="checkbox" name="think" value="5" checked /> Об отдыхе</label>
<label><input type="checkbox" name="think" value="6" disabled checked /> О сексе</label>
```

Инициализируем плагин:
```javascript
$("input[type='radio'], input[type='checkbox']").ionCheckRadio();
```

Profit!


## История обновлений
* 30.04.2014 - Множество мелких исправлений, в том числе: #1, #5, #7
* 05.08.2013 - исправлен мелкий баг с событием onChange
* 31.07.2013 - исправлен мелкий недочет
* 21.07.2013 - релиз