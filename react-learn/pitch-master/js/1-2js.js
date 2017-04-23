// JavaScript Document
$(document).ready(function() {
	var token = getToken();
	var auth = encrypt(token);
	var a = { "auth" : auth };
	var postdata = { data :JSON.stringify(a) };
    $.ajax({
		url: "http://222.201.132.27/bbter-all/index.php/Home/UserData/getNoClassData",
		type: "POST",
		processData: "false",
		contentType: "application/x-www-form-urlencoded",
		data: a,
		success: function(getdata){
			var obj = eval ("(" + getdata + ")");
			if (obj.code==200){
				token = obj.token;
				info = obj.info;
				noclass = obj.data.noclass;
				document.cookie = "token=" + token;
				$(".classStatus .val").text(obj.data.classstatus);
				var i = 0;
				var j = 0;
				$(".content .choose").each(function() {
					if(noclass[i][j]==0){
						$(this).css("backgroundColor","rgb(106, 144, 182)");
					}
					j++;
					if(j==7){
						j=0;
						i++;	
					}
			    });//填充信息并显示没课表
			}
		}
	});
	$(".reset").click(function() {
        var i = 0;
		var j = 0;
		$(".content .choose").each(function() {
			if (noclass[i][j]==0){
				$(this).css("backgroundColor","rgb(106, 144, 182)");
			}
			else $(this).css("backgroundColor","rgb(234, 234, 234)");
			j++;
			if (j==7){
				j=0;
				i++;	
			}
		});
    });//还原没课表
    $(".content .choose").click(function(){
		if($(this).css("background-color")=="rgb(234, 234, 234)")
			{
				$(this).css("background-color","rgb(106, 144, 182)");
				return false;
			}
		if($(this).css("background-color")=="rgb(106, 144, 182)")
		 	{
				$(this).css("background-color","rgb(234, 234, 234)");
			}
	});//预选修改没课表
	$(".submit").click(function() {
        var newclass = new Array();
        newclass = noclass;
		var i = 0;
		var j = 0;
		$(".content .choose").each(function() {
            if ($(this).css("background-color")=="rgb(234, 234, 234)"){
				newclass[i][j] = 1;
			}
			else newclass[i][j] = 0;
			j++;
			if (j==7){
				j=0;
				i++;
			}
        });
		newclass = JSON.stringify(newclass);
		a = { "auth" : auth,"data":{"noclass":newclass }};
		$.ajax({
			url: "http://222.201.132.27/bbter-all/index.php/Home/ModifyCourse/addDataToNewTable",
			type: "POST",
			processData: "false",
			contentType: "application/x-www-form-urlencoded",
			data: a,
			success: function(getdata){
				var obj = eval ("(" + getdata + ")");
				if (obj.code==200){
					token = obj.token;
					alert("提交成功");
				}
			}
		});
    });//修改无课表
});
