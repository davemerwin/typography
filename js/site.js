$(document).ready(function(){
	
	$('.printMe').click(function() {
		window.print();
		return false;
	});
	
	$('li.sample').append('<h1>Lorem Ipsum Dolor Sit</h1><h2>Lorem Ipsum Dolor Sit</h2><h3>Lorem Ipsum Dolor Sit</h3><h4>Lorem Ipsum Dolor Sit</h4><p>Lorem ipsum dolor sit amet, <a href="http://www.twitter.com/davemerwin">consectetur adipisicing</a> elit, sed do eiusmod tempor incididunt <strong>ut labore</strong> et dolore magna aliqua. Ut enim ad <em>minim veniam</em>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>');
	
	$('.helveticalArial').prepend('<h3 class="sampleType">Helvetica &amp; Arial</h3>');
	$('.arialblackArialblack').prepend('<h3 class="sampleType">Arial Black &amp Arial Black</h3>');
	$('.impactImpact').prepend('<h3 class="sampleType">Impact &amp; Impact</h3>');
	$('.lucidagrandeLucidaSansUnicode').prepend('<h3 class="sampleType">Lucida Grande &amp; Lucida Sans Unicode</h3>');
	$('.genevaTahoma').prepend('<h3 class="sampleType">Geneva &amp; Tahoma</h3>');
	$('.helveticaTrebuchetMS').prepend('<h3 class="sampleType">Helvetica &amp; Trebuchet MS</h3>');
	$('.verdenaVerdena').prepend('<h3 class="sampleType">Verdena &amp; Verdena</h3>');
	$('.genevaMSSansSerif').prepend('<h3 class="sampleType">Geneva &amp; MS Sans Serif</h3>');
	$('.georgiaGeorgia').prepend('<h3 class="sampleType">Georgia &amp; Georgia</h3>');
	$('.palatinoPalatino').prepend('<h3 class="sampleType">Palatino &amp; Palatino</h3>');
	$('.timesTimesNewRoman').prepend('<h3 class="sampleType">Times &amp; Times New Roman</h3>');
	$('.newyorkMSSerif').prepend('<h3 class="sampleType">New York &amp; MS Serif</h3>');
	$('.couriernewCourierNew').prepend('<h3 class="sampleType">Courier New &amp; Courier New</h3>');
	$('.monacoLucidaConsole').prepend('<h3 class="sampleType">Monaco &amp; Lucida Console</h3>');
	$('.comicsansComicSans').prepend('<h3 class="sampleType">Comic Sans &amp; Comic Sans</h3>');
	$('.symbolSymbol').prepend('<h3 class="sampleType">Symbol &amp; Symbol</h3>');
	$('.webdingsWebdings').prepend('<h3 class="sampleType">Webdings &amp; Webdings</h3>');
	$('.dingbatsDingbats').prepend('<h3 class="sampleType">Dingbats &amp; Dingbats</h3>');
});