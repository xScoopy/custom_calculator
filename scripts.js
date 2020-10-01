//setting constants for inputs
const total_episodes_input = document.querySelector('#total_episodes')
const avg_length_input = document.querySelector('#episode_length')
const hrs_per_day_input = document.querySelector('#hours_per_day')
const unit_input = document.querySelector('#unit')

//setting constants for displays
const show_length_display = document.querySelector('#show_total_length')
const per_day_calc_display = document.querySelector('#episodes_per_day')

//adding event listeners for first function
total_episodes_input.addEventListener('input', calculateLength)
avg_length_input.addEventListener('input', calculateLength)
hrs_per_day_input.addEventListener('input', calculateLength)
unit_input.addEventListener('input', calculateLength)

//adding event listeners for second function
// total_episodes_input.addEventListener('input', function2)
// avg_length_input.addEventListener('input', function2)
// hrs_per_day_input.addEventListener('input', function2)
// unit_input.addEventListener('input', function2)




//defining total length of show calculation function
function calculateLength() {
    const total_episode_value = parseFloat(total_episodes_input.value)
    const avg_length_value = parseFloat(avg_length_input.value)
    const units = unit_input.value 
    const show_total_length = total_episode_value * avg_length_value
    if (units == 'Minutes'){
        show_length_display.innerHTML = 'The show is ' + toString(show_total_length) + ' amount of ' + toString(units) + ' long!'
    }
    else if (units == 'Hours'){
        show_length_display.innerHTML = 'The show is ' + toString((show_total_length / 60)) + ' amount of ' + toString(units) + ' long!'
    }
    else if (units == 'Days'){
        show_length_display.innerHTML = 'The show is ' + toString((show_total_length / 60 / 24)) + ' amount of ' + toString(units) + ' long!'
    }
    console.log(show_total_length)
}
calculateLength()


//defining episodes per day calculation function