// Display original doc link
// Adopted from http://docs.python.jp/3.5/_static/gotooriginal.js
$(document).ready(function() {
    var base = 'https://docs.python.org/3.5/';
    var url = document.URL.replace(/#.*/, '');
    var parts = url.split('/');
    base += parts[parts.length-2] + '/' + parts[parts.length-1];
    $('a.headerlink').each(function() {
        var html = '<a href="' + base + $(this).attr('href') +
                   '" title="原文連結"><small>（原文）</small></a>';
        $(this).after(html);
    })
});
