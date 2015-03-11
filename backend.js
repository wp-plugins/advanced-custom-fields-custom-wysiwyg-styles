function acfTinyMCEclasses() {
	var checkEditors = setInterval(function(){
		var editorfelder = jQuery('.acf-field-wysiwyg').length;
		var iframefelder = jQuery('.acf-field-wysiwyg iframe').length;
		if (editorfelder == iframefelder) {
			clearInterval(checkEditors);
			parseEditors();
		}
	},2000);
}	
function parseEditors() {
	jQuery('.acf-field-wysiwyg').each(function() {
		var fieldname = jQuery(this).attr('data-name');
		jQuery('iframe',this).contents().find('body').addClass('acf_'+fieldname);
	});
}
jQuery(document).ready(function(){
    acfTinyMCEclasses(); 
});