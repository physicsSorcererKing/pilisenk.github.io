$(document).ready(()=>{

	$('#my-carousel').carousel({
		interval: 3000
	});
	


	$('.close-alert').click(e=>{
		$('.alert').alert('close');
	});

	$('.alert').on('close.bs.alert', ()=>{
		console.log('close alert');
	})

	$('.alert').on('closed.bs.alert', ()=>{
		console.log('closed alert');
	})
});