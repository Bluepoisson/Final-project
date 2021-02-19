

const PLACES_URL = `https://maps.googleapis.com/maps/api/place/details/json?placeid={place_id}&key=${API_KEY}`;


const PLACES_DETAILS_URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=name,rating,reviews,formatted_phone_number&key=${API_KEY}`

const PLACES_DETAILS_URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJCVKnQkOhU0YRctd2LNO0GT8&fields=name,rating,reviews,formatted_address,formatted_phone_number&key=${API_KEY}`