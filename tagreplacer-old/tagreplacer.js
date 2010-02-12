/* tagreplacer.js
 * Checks your document for HTML5 tags like <section>, <header>, etc, and replaces them with divs.
 * Designed for use with IE detection, so you can still use awesome HTML5 tags.
 */

function replaceTags(taglist)
{
	var tags = keys(taglist);									// Use keys() to get the tags to replace.
	
	for (var i in tags)
	{
		$("body").find(tags[i].toString()).each(function() {	// Look for all tags of the specified tag type.
			var el = $(this);									// Get the current element.
			var newel = $("<"+taglist[tags[i]]+">");			// Create a new tag of the replacement type.
			newel.attr($.getAttributes(el, true));				// Copy attributes from the old tag.
			newel.html($(el).html());							// Copy the innerHTML.
			$(el).replaceWith(newel);							// Replace the old tag with the new tag.
		});
	}
}

function keys(obj) // Retrieve an array of the keys from the associative array.
{
	var keys = [];
	for(var key in obj)
	{
		keys.push(key);
	}
	return keys;
}

// Credit for the keys function goes to Matthew on Stack Overflow.
// Original thread: http://stackoverflow.com/questions/890807/iterate-over-a-javascript-associative-array-in-sorted-order