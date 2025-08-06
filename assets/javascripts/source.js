//= require_directory ./libraries/
//= require_directory ./plugins/
//= require_self

$(document).ready(function () {
  $('.source_table pre code').each(function(i, e) {hljs.highlightBlock(e, '  ')});
});
