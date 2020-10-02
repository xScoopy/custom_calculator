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
total_episodes_input.addEventListener('input', calculateTimeToWatch)
avg_length_input.addEventListener('input', calculateTimeToWatch)
hrs_per_day_input.addEventListener('input', calculateTimeToWatch)
unit_input.addEventListener('input', calculateTimeToWatch)




//defining total length of show calculation function
function calculateLength() {
    const total_episode_value = parseFloat(total_episodes_input.value)
    const avg_length_value = parseFloat(avg_length_input.value)
    const units = unit_input.value 
    const show_total_length = total_episode_value * avg_length_value
    if (units == 'min'){
        show_length_display.innerHTML = 'The entire show would be ' + show_total_length + ' ' + units + ' long!'
    }
    else if (units == 'hours'){
        show_length_display.innerHTML = 'The entire show would be ' + (show_total_length / 60).toFixed(2) + ' ' + units + ' long!'
    }
    else if (units == 'days'){
        show_length_display.innerHTML = 'The entire show would be ' + (show_total_length / 60 / 24).toFixed(2) + ' ' + units + ' long!'
    }
    
}
//defining episodes per day calculation function
function calculateTimeToWatch() {
    const total_episode_value = parseFloat(total_episodes_input.value)
    const avg_length_value = parseFloat(avg_length_input.value)
    const hrs_per_day_value = parseFloat(hrs_per_day_input.value)
    const show_total_length = total_episode_value * avg_length_value
    const hours_total = show_total_length / 60
    const days_of_watching = hours_total / hrs_per_day_value
    const weeks_to_finish = (days_of_watching / 7).toFixed(0)
    const days_to_finish = (days_of_watching % 7).toFixed(0) 
    const episodes_per_day = (hrs_per_day_value * 60) / avg_length_value
    per_day_calc_display.innerHTML = 'If you watch ' + episodes_per_day.toFixed(2) + ' episodes per day, you will finish in ' + weeks_to_finish + ' week(s) and ' + days_to_finish + ' day(s).' 

}