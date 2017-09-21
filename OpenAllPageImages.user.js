// ==UserScript==
// @name        OpenAllPageImages
// @namespace   Reddit
// @include     https://www.reddit.com/r/*
// @include     https://www.reddit.com/user/*
// @version     1
// @grant       none
// ==/UserScript==
var div = $('<div class=\'spacer\'></div>');
var side_content_box = $('<div class=\'sidecontentbox\'></div>');
var title = $('<div class="title"><h1>Extensions</h1></div>');
var ul = $('<ul class="content"><input class="option" type="button" id="open-images" value="open all links"/></ul>');
side_content_box.append(title);
side_content_box.append(ul);
div.append(side_content_box);
$('.side').append(div);
$('#open-images').click(function () {
    $('a.title').each((i, item) => {
        window.open(item.href, '_blank');
    });
});
