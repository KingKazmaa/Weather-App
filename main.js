const api = {
    key: '5e943be28d5f77d502c6633770b389b9'
    baseurl: 'https://api.openweathermap.org/data/2.5/'
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery)