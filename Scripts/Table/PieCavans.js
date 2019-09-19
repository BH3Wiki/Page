

//app.controller('PieController', function ($scope,$http) {
	
//	$scope.Chart = new Chart(document.getElementById("canvas").getContext("2d"), {  //先建立一個 chart
//		type: 'pie', // 圖表類型
//		data: {
//			labels: ["泛用","專屬","炸裂"], // 標題
//			datasets: [{
//				label: "標籤1", // 標籤
//				data: [20, 40, 50], // 資料
//				backgroundColor: ['Red', 'Blue', 'Black'],  // 背景色
//				borderWidth: 1 // 外框寬度
//			}]
//		}
//	});
//	$scope.RandomColor = function () {
//		var letters = '0123456789ABCDEF'.split('');
//		var color = '#';
//		for (var j = 0; j < 6; j++) {
//			color += letters[Math.floor(Math.random() * 16)];
//		}
//		return color;
//	}
//	$scope.DrowCanvas = function () {
//		$('#canvas').remove(); // 刪除canvas重繪解決閃爍問題
//		$('#canvasDiv').append('<canvas id="canvas"></canvas>');
//		var labels = [];
//		var dataArr = [];
//		var colorArr = [];
//		var radarTicks = {};
//		angular.forEach($scope.BarData, function (data) {
//			labels.push(data.ListLabel)
//			dataArr.push(data.ListNum)
//			colorArr.push($scope.RandomColor())
//		})

//		var ctx = document.getElementById("canvas").getContext("2d");
//		$scope.Chart = new Chart(ctx, {  //先建立一個 chart
//			type: 'pie', // 圖表類型
//			data: {
//				labels: labels, // 標題
//				datasets: [{
//					label: "測試數量", // 標籤
//					data: dataArr, // 資料
//					//backgroundColor:colorArr,
//				}]
//			},
//			options: {
//				scales: {
//					xAxes: [{
//						stacked: true,
//						barThickness: 15,
//					}],
//					yAxes: [{
//						stacked: true,
//					}],
//				},
//			}

//		});
				
//	}
//});
