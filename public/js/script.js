$(document).ready(function(){
    // Initialize Materialize components
    $('.materialboxed').materialbox();
    $('.modal').modal();

    // Event handler for opening modal
    $('#clickMeButton').click(function() {
        $('#modal1').modal('open');
    });

    // Event handler for form submission
    $('#formSubmit').click(submitForm);

    // Fetch and display cards
    getAllCards();
});

// Function to fetch cards data
const getAllCards = () => {
    fetch('api/cat')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data:', data);
        // Add fetched cards to the page
        addCards(data.data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

// Function to add cards to the page
const addCards = (items) => {
    items.forEach((item) => {
        let itemToAppend =
            '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
            item.path +
            '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' +
            item.title +
            '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
            "</a></p></div>" +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' +
            item.subTitle +
            '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' +
            item.description +
            "</p>" +
            "</div></div></div>";
        $("#card-section").append(itemToAppend);
    });
}

// Function to handle form submission
const submitForm = () => {
    let formData = {};
    formData.firstName = $('#first_name').val();
    formData.lastName = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log(formData);

    fetch('/api/cat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Response:', data);
        // Display success message or handle response data
        $('#catPostSuccess').text('Cat post successful');
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
