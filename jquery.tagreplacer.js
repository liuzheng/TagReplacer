/* tagreplacer.js
 * Checks your document for HTML5 tags like <section>, <header>, etc, and replaces them with divs.
 * Designed for use with IE detection, so you can still use awesome HTML5 tags.
 */

jQuery.fn.replaceTags = function(taglist)
{
	var tags = [];
	for(var tag in taglist)
	{
		tags.push(tag);												// Get all of the tags to replace.
	}
	
	for (var i in tags)
	{
		this.find(tags[i].toString()).each(function() {				// Look for all tags of the specified tag type.
			var el = jQuery(this);									// Get the current element.
			var newel = jQuery("<"+taglist[tags[i]]+">");			// Create a new tag of the replacement type.
			newel.attr(jQuery.getAttributes(el, true));				// Copy attributes from the old tag.
			newel.html(jQuery(el).html());							// Copy the innerHTML.
			jQuery(el).replaceWith(newel);							// Replace the old tag with the new tag.
		});
	}
}