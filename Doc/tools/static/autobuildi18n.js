// Trigger translation autobuild
$(document).ready(function() {
    $('.autobuildi18n').click(function() {
        var $this = $(this);
        var pagename = $this.data('pagename');
        console.log('Send request to update page: ' + pagename);
        $.post(
            '/_build/update/',
            {'source_path': pagename}
        ).done(function(data) {
            console.log('Page (' + pagename + ') update complete');
            console.log(data);
        }).fail(function(data) {
            console.log('Page (' + pagename +') update failed');
            console.log(data);
        });
    });
});
