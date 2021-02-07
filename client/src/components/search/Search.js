import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import scriptLoader from 'react-async-script-loader';

const Search = ({ isScriptLoaded, isScriptLoadSucceed }) => {
  const [address, setAddress] = useState('');
 

  const handleChange = (value) => {
    setAddress(value);
};

  const handleSelect = (value) => {
    setAddress(value)
  }
 
  // const searchOptions = {
  //   location: LatLng(55.6049, 13.0038),
  //   radius: 500,
  //   types: ['hospital', 'physiotherapist','doctor', 'health', 'point_of_interest','establishment']
  // }
 


  if (isScriptLoaded && isScriptLoadSucceed) {
    return (
      <div>
        <PlacesAutocomplete
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
          // searchOptions={searchOptions}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Search Place...",
                })}
              />
              <div>
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const style = suggestion.active
                    ? { backgroundColor: "#40a832", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };

                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=AIzaSyAHKF6kjlGxaNdFBoFBbZNE-JzeBPfXzZU&libraries=places`,
])(Search);