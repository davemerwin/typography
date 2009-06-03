$(document).ready(function(){
	
	$('.printMe').click(function() {
		window.print();
		return false;
	});
	
	$('li.sample').append('<div class="grid_5 omega"><h1>Lorem Ipsum Dolor Sit</h1><h2>Lorem Ipsum Dolor Sit</h2><h4>Lorem Ipsum Dolor Sit</h4><h4>Lorem Ipsum Dolor Sit</h4><p>Lorem ipsum dolor sit amet, <a href="http://www.twitter.com/davemerwin">consectetur adipisicing</a> elit, sed do eiusmod tempor incididunt <strong>ut labore</strong> et dolore magna aliqua. Ut enim ad <em>minim veniam</em>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p class="top"><a href="#wrap">top</a></p></div>');
	
	$('.sampleList li:odd').addClass('alt');
	
	$('#helveticalArial').prepend('<h4 class="sampleType grid_3 alpha">Helvetica &amp; Arial</h4>');
	$('#arialblackArialblack').prepend('<h4 class="sampleType grid_3 alpha">Arial Black &amp Arial Black</h4>');
	$('#impactImpact').prepend('<h4 class="sampleType grid_3 alpha">Impact &amp; Impact</h4>');
	$('#lucidagrandeLucidaSansUnicode').prepend('<h4 class="sampleType grid_3 alpha">Lucida Grande &amp; Lucida Sans Unicode</h4>');
	$('#genevaTahoma').prepend('<h4 class="sampleType grid_3 alpha">Geneva &amp; Tahoma</h4>');
	$('#trebuchetMSArial').prepend('<h4 class="sampleType grid_3 alpha">Trebuchet MS &amp; Arial</h4>');
	$('#verdenaVerdena').prepend('<h4 class="sampleType grid_3 alpha">Verdena &amp; Verdena</h4>');
	$('#genevaMSSansSerif').prepend('<h4 class="sampleType grid_3 alpha">Geneva &amp; MS Sans Serif</h4>');
	$('#georgiaGeorgia').prepend('<h4 class="sampleType grid_3 alpha">Georgia &amp; Georgia</h4>');
	$('#palatinoPalatino').prepend('<h4 class="sampleType grid_3 alpha">Palatino &amp; Palatino</h4>');
	$('#timesTimesNewRoman').prepend('<h4 class="sampleType grid_3 alpha">Times &amp; Times New Roman</h4>');
	$('#newyorkMSSerif').prepend('<h4 class="sampleType grid_3 alpha">New York &amp; MS Serif</h4>');
	$('#couriernewCourierNew').prepend('<h4 class="sampleType grid_3 alpha">Courier New &amp; Courier New</h4>');
	$('#monacoLucidaConsole').prepend('<h4 class="sampleType grid_3 alpha">Monaco &amp; Lucida Console</h4>');
	$('#comicsansComicSans').prepend('<h4 class="sampleType grid_3 alpha">Comic Sans &amp; Comic Sans</h4>');
	$('#symbolSymbol').prepend('<h4 class="sampleType grid_3 alpha">Symbol &amp; Symbol</h4>');
	$('#webdingsWebdings').prepend('<h4 class="sampleType grid_3 alpha">Webdings &amp; Webdings</h4>');
	$('#dingbatsDingbats').prepend('<h4 class="sampleType grid_3 alpha">Dingbats &amp; Dingbats</h4>');
	
	$('#default-submit').css('display', 'block');
	
	$('body').append('<script src="googleanlytics.js" type="text/javascript" charset="utf-8"></script>');
});