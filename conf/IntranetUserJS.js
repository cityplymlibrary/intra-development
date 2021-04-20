// useful links - prevent default event
$('.newsitem a').click(function(event) {
	event.preventDefault();
});

// useful links - change arrows
$('#circToggle').click(function() {
	$('#circCaret').toggleClass('fa-angle-double-down');
	$('#circCaret').toggleClass('fa-angle-double-left');
});
$('#holdsToggle').click(function() {
	$('#holdsCaret').toggleClass('fa-angle-double-down');
	$('#holdsCaret').toggleClass('fa-angle-double-left');
});
$('#overdueToggle').click(function() {
	$('#overdueCaret').toggleClass('fa-angle-double-down');
	$('#overdueCaret').toggleClass('fa-angle-double-left');
});
$('#reportsToggle').click(function() {
	$('#reportsCaret').toggleClass('fa-angle-double-down');
	$('#reportsCaret').toggleClass('fa-angle-double-left');
});
$('#cataloguingToggle').click(function() {
	$('#cataloguingCaret').toggleClass('fa-angle-double-down');
	$('#cataloguingCaret').toggleClass('fa-angle-double-left');
});
$('#serialsToggle').click(function() {
	$('#serialsCaret').toggleClass('fa-angle-double-down');
	$('#serialsCaret').toggleClass('fa-angle-double-left');
});
$('#acquiToggle').click(function() {
	$('#acquiCaret').toggleClass('fa-angle-double-down');
	$('#acquiCaret').toggleClass('fa-angle-double-left');
});
$('#listsToggle').click(function() {
	$('#listsCaret').toggleClass('fa-angle-double-down');
	$('#listsCaret').toggleClass('fa-angle-double-left');
});
$('#courseToggle').click(function() {
	$('#courseCaret').toggleClass('fa-angle-double-down');
	$('#courseCaret').toggleClass('fa-angle-double-left');
});
$('#toolsToggle').click(function() {
	$('#toolsCaret').toggleClass('fa-angle-double-down');
	$('#toolsCaret').toggleClass('fa-angle-double-left');
});
