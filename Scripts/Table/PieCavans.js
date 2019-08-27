
var app = angular.module('App', []);
app.controller('AppController', function ($scope, $http) {
	
	$scope.Chart = new Chart(document.getElementById("canvas").getContext("2d"), {  //���إߤ@�� chart
		type: 'pie', // �Ϫ�����
		data: {
			labels: [1, 2, 3, 4 , 5], // ���D
			datasets: [{
				label: "����1", // ����
				data: [20, 40, 50, 70 ,90], // ���
				backgroundColor: ['Red', 'Blue', 'Black', 'Yellow', 'Red' ],  // �I����
				borderWidth: 1 // �~�ؼe��
			}]
		}
	});
	$scope.RandomColor = function () {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var j = 0; j < 6; j++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	$scope.DrowCanvas = function (type) {
		$('#canvas').remove(); // �R��canvas��ø�ѨM�{�{���D
		$('#canvasDiv').append('<canvas id="canvas"></canvas>');
		var labels = [];
		var dataArr = [];
		var colorArr = [];
		var radarTicks = {};
		angular.forEach($scope.BarData, function (data) {
			labels.push(data.ListLabel)
			dataArr.push(data.ListNum)
			colorArr.push($scope.RandomColor())
		})

		var ctx = document.getElementById("canvas").getContext("2d");
		$scope.Chart = new Chart(ctx, {  //���إߤ@�� chart
			type: 'pie', // �Ϫ�����
			data: {
				labels: labels, // ���D
				datasets: [{
					label: "���ռƶq", // ����
					data: dataArr, // ���
					//backgroundColor:colorArr,
				}]
			},
			options: {
				scales: {
					xAxes: [{
						stacked: true,
						barThickness: 15,
					}],
					yAxes: [{
						stacked: true,
					}],
				},
			}

		});
				
	}
});
