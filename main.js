window.onload = function() {

	var data = '{"inputs":[{"data":{"image":{"url":"http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG"}}}]}'
    $.ajax({
        'type': 'POST',
        'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
        'headers': {
            'Authorization': 'Key b98e7c6f10e9484aa15ddf88e1999e93',
            'Content-Type': 'application/json'
        },
        'data': data,
       success: function (response) { //connect ajax 
            var ingredients = response.outputs[0].data.concepts; //variable me store kia hai rsponse jo aa raha usko
            var list = ''; //empty string variable 
            for (var i =0;i < ingredients.length;i++) {
                list += '<div class="ingredient">' + ingredients[i].name + '</div>' //loop for displaying html on html page 
            }
            console.log(list);
            $('.ingredients').html(list);
        },
        error: function (xhr) {
            console.log(xhr);
        }
    })
	
}