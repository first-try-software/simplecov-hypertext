//= require_directory ./libraries/
//= require_directory ./plugins/
//= require_self

$(document).ready(function () {
  $('.file_list').dataTable({
    order: [[1, "asc"]],
    paging: false
  });

  $('.file_list_container').hide();

  // Add tabs based upon existing file_list_containers
  $('.file_list_container h2').each(function () {
    var container_id = $(this).parent().attr('id');
    var group_name = $(this).find('.group_name').first().html();
    var covered_percent = $(this).find('.covered_percent').first().html();

    $('.group_tabs').append('<li><a href="#' + container_id + '">' + group_name + ' (' + covered_percent + ')</a></li>');
  });

  $('.group_tabs a').each(function () {
    $(this).addClass($(this).attr('href').replace('#', ''));
  });

  // Make sure tabs don't get ugly focus borders when active
  $('.group_tabs').on('focus', 'a', function () { $(this).blur(); });

  var favicon_path = $('link[rel="icon"]').attr('href');
  $('.group_tabs').on('click', 'a', function () {
    if (!$(this).parent().hasClass('active')) {
      $('.group_tabs a').parent().removeClass('active');
      $(this).parent().addClass('active');
      $('.file_list_container').hide();
      $(".file_list_container" + $(this).attr('href')).show();
      window.location.href = window.location.href.split('#')[0] + $(this).attr('href').replace('#', '#_');

      // Force favicon reload - otherwise the location change containing anchor would drop the favicon...
      // Works only on firefox, but still... - Anyone know a better solution to force favicon on local file?
      $('link[rel="icon"]').remove();
      $('head').append('<link rel="icon" type="image/png" href="' + favicon_path + '" />');
    };
    return false;
  });

  if (window.location.hash) {
    var anchor = window.location.hash.substring(1);
    $('.group_tabs a.' + anchor.replace('_', '')).click();
  } else {
    $('.group_tabs a:first').click();
  };

  $("abbr.timeago").timeago();
  $('#loading').fadeOut();
  $('#wrapper').show();
  $('.dataTables_filter input').focus()
});
