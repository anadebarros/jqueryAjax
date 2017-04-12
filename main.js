$(function (){
	var $orders = $('#orders'); //ul id
	var $name = $('#name');
	var $drink = $('#drink');

	function addOrder(order){
		$orders.append('<li>name: ' + order.name + ', drink: ' + order.drink + '</li>');
	}

	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/johnbob/friends',
		success: function(orders){
			$.each(orders, function(index, order){
				addOrder(order);
			});
		},
		error: function(){
			alert('error loading orders');
		}
	});

	$('#add-order').on('click', function(){
		var order = {
			name: $name.val(),
			drink: $drink.val(),
		};

		$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/johnbob/friends',
			data: order,
			success: function(newOrder){
				addOrder(newOrder);
			},
			error: function(){
			alert('error saving orders');
		}
		});
	});
});