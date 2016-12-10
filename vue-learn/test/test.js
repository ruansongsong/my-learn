"use strict";
print('233');

// 1.创建xhr对象
var xhr = new XMLHttpRequest();
// 2.调用open()方法,第3个参数是否异步发送
xhr.open('GET', 'example.php', true);
// 3.发送特定请求,send()方法接受1个参数，即请求主题发送的数据
xhr.send(null);

// 检查这两种状态
if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
	alert(xhr.responseText);
} else {
	alert('request was unsuccessful' + xhr.status);
}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if(xhr.readyState == 4) {
		if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
			alert(xhr.responseText);
		}else {
			alert('error' + xhr.status);
		}
	}
}
xhr.open('get', 'example.php', true);
xhr.send(null);

xhr.open('post', 'post.php', true);
xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
xhr.send(data);

// 设置超时3000毫秒
xhr.timeout = 3000;
// timeout事件回调函数
xhr.ontimeout = function () {
	alert('请求超时');
}

// 新建一个FormData对象
var formData = new FormData();
// 为它添加表单项
formData.append('username', '张珊');
formData.append('password', '12345');
// 传送FormData对象
xhr.send(formData);

// FormData对象也可用来获取网页表单的值
var form = document.getElementById('form');
var formData = new FormData(form);
formData.appen('secret', '12345');
xhr.open('post', 'post.php', true);
xhr.send(formData);
