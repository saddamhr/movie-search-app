$(document).ready(function(){
    const apiKey = 'bab297c0'
    $('#movieForm').submit(function(even){
        event.preventDefault()

        const movie = $('#movie').val()

        var result = ''

        const url = 'http://www.omdbapi.com/?apikey=' +apiKey

        $.ajax({
            method: 'GET',
            url:url + '&t='+movie,
            success:function(data) {
                console.log(data)

                result = `
                <img style="float:left" class="img-thumnail" width="200" height="300" src="${data.Poster}"/>
                `

                $('#result').html(result)
            }
        })
    })
})