// Load large images only when thumbnail is clicked

$('img').click( function() {
	// Get image src
	var source = $(this).attr('src');
	// Get photo's ID
	var photoID = 'photo' + $(this).attr('id');
	// Add -large to end of image name
	var largeImage = source.replace('.jpg', '-large.jpg');
	//Change image source of modal to large image
	$('#' + photoID).children('img').attr('src', largeImage);
});
