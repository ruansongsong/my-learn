$.ajax({
	url: '/getData',
	type: 'GET',
	success: function (data) {
		$('#title').text(data.name);
	}
});
var a = {
	"name": "songsong"
}
$.ajax({
	url: '/post',
	type: 'POST',
	data: a,
	async: true,
})
