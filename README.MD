# Landing THOMAS RHYTHM - Homework Sergey Zhmailo 
1. Описание структуры проекта
2. Описание подключаемых библиотек
3. Описание стандартных классов и компонентов
4. Описание медиазапросов
## 1. Описание структуры проекта
Каталог | Описание
------------ | -------------
CSS/ | Файлы стилей проекта: et-line.css, font-awesome.min.css, grid.css, lightbox.css, slicknav.css, style.css
FONTS/ | Шрифты проекта: et-line.eot, et-line.svg, et-line.ttf, et-line.woff, FontAwesome.otf, fontawesome-webfont.eot, fontawesome-webfont.svg, fontawesome-webfont.ttf, fontawesome-webfont.woff
IMG/ | Файлы изображений к проекту
JS/ | Скрипты к проекты
index.html | Страница проекта
guide.html | Гайд к проекту с основными элементами
README.MD | Этот файл-описание

## 2. Описание подключаемых библиотек
##### Google fonts
- Dosis:300,400
- Open+Sans:300,400
##### Google maps API
- google-maps.js
##### jQuery
- jquery-1.12.4.js
##### jQuery UI
- jquery-ui.js
##### Slick slider
- slick.min.css
- slick.min.js
##### Slick nav mobile menu
- slicknav.css
- jquery.slicknav.min.js
##### Lightbox
- lightbox.css
- lightbox.js
##### Et-line icons
- et-line.css
##### Font awesom
- font-awesome.min.css
##### Grid style
- grid.css
##### Custom style
- style.css
##### Scroll
- header-scroll.js
- scroll-to.js
##### Init plugins
- init.js

## 3. Описание стандартных классов и компонентов
В файле guide.html находятся основные компоненты проекта:
##### Секции:
- DEFAULT SECTION 
```
<div class="default-section"></div>
```
- SMALL SECTION
```
<div class="small-section"></div>
```
##### Цвет секций:
- Черный
```
<div class="small-section bg-black"></div>
```
- Серый
```
<div class="small-section bg-gray"></div>
```
##### Текстовый блок
- Стандарт
```
<p class="default-text">
    Lorem ipsum dolor sit amet 
</p>
```
- Выравнивание правый край/центр
```
<p class="default-text text-right">
    Lorem ipsum dolor sit amet 
</p>
<p class="default-text text-center">
    Lorem ipsum dolor sit amet 
</p>
```
##### Цитата
```
<blockquote class="blockquote">
  <p>Lorem ipsum dolor sit amet?</p>
  <span>- Luise</span>
</blockquote>
```
##### Иконки
- ET-LINE
```
<span class="icon-heart"></span>
```
- Font awesome
```
<span class="fa fa-facebook"></span>
```
- Ромб черный
```
<div class="romb-icon black-icon">
    <i class="fa fa-phone"></i>
</div>
```
- Ромб прозрачный
```
<div class="romb-icon transparent-icon">
    <i class="fa fa-phone"></i>
</div>
```
- Ромб белый
```
<div class="romb-icon white-icon">
    <i class="fa fa-phone"></i>
</div>
```
##### Кнопки
- Стандартная
```
<a href="#" class="btn btn-default">Def Button</a>
```
- Черная
```
<a href="#" class="btn btn-black">Black Button</a>
```
- Маленькая
```
<button class="btn btn-default btn-xs">XS Buttons</button>
```
##### GRID колонки
- 100%
```
<div class="col col-12"></div>
````
- 50%
```
<div class="col col-6"></div>
````
- 33%
```
<div class="col col-4"></div>
````
- 25%
```
<div class="col col-3"></div>
````
##### GRID колонки (max-width: 1200px)
```
<div class="col col-lg-12"></div>
````
##### GRID колонки (max-width: 991px)
```
<div class="col col-md-12"></div>
````
##### GRID колонки (max-width: 767px)
```
<div class="col col-sm-12"></div>
````
##### GRID колонки (max-width: 576px)
```
<div class="col col-xs-12"></div>
````
##### Формы
- Поле ввода данных Имя/EMAIL
```
 <form>
    <input type="text" name="name" class="form-control" placeholder="NAME">
    <input type="email" name="email" class="form-control" placeholder="EMAIL">
</form>
```
- Поле ввода данных заблокировано
```
<form>
    <input type="text" name="name" class="form-control" placeholder="DISABLED" disabled>
</form>
```
- Поле ввода данных c подсказкой/ с ошибкой
```
<form>
    <input type="email" name="email" class="form-control" placeholder="EMAIL" value="EXAMPLE@MAIL.COM">
    <input type="email" name="email" class="form-control error" placeholder="EMAIL">
</form>
```
- Текстовое поле для сообщений
```
<form>
    <textarea name="message" class="form-control" placeholder="MESSAGE"></textarea>
</form>
```
- Кнопка отправки формы/заблокировано
```
<form>
    <input type="submit" value="Send" class="btn btn-black">
    <button type="submit" class="btn btn-black">Send message</button>
    <button type="submit" class="btn btn-black" disabled>Disabled Send message</button>
</form>
```
## 4. Описание медиазапросов
- Нетбуки, ноутбуки и планшеты в альбомной ориентации 992px - 1200px
```
@media (max-width: 1200px) {
    }
```
- Планшеты 7'< в портретной ориентации, планшеты 7' в альбомной ориентации 768px - 991px
```
@media (max-width: 991px) {
    }
```
- Планшеты 7 в портретной ориентации и планшеты и телефоны 7'> в альбомной ориентации 577px - 767px
```
@media (max-width: 767px) {
    }
```
- Все мобильные телефоны в портретной и в альбомной ориентации
```
@media (max-width: 576px) {
    }
```
