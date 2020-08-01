/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    console.log(pattern);
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if(filters.duration.from != 1 || filters.duration.to != 14){
    output = trips.filter(trip => trip.days >= filters.duration.from && trip.days <= filters.duration.to);

  }
  // TODO - filter by tags
  if(filters.tags.length != 0){


    // output = trips.filter((trip) =>{
    //   for (let filterTag of filters.tags){
    //     if (trip.tags.includes(tag) == true){
    //       return trip;
    //     }
    //     return trip.tags.every((tag) => {
    //       return tag == filterTag;
    //     });
    //   }
    // }
    // );

    const pattern = new RegExp(filters.tags, 'i');
    output = output.filter(trip => pattern.test(trip.tags));

    // output = trips.filter((trip) =>{
    //   for (let filterTag of filters.tags){
    //     trip.tags.every((tag) => {
    //       trip.tags.includes(filterTag);
    //       return trip;
        
      
    //     });
      
    //   }
    // } 
    // );


    // const text = filters.tags.toString();
    // console.log(text);

    // output = trips.filter((trip) =>{
    //   trip.tags.every((tag) => {
    //     console.log(filters.tags.includes(tag));
    //     return filters.tags.includes(tag);
       
    //     // console.log(text.test(new RegExp(tag,'i')));
    //     // return text.test(new RegExp(tag,'i'));
    //   });
    // }
    // );

    // output = trips.filter(trip => trip.tags.includes(filters.tags[filters.tags.filter(tag => tag != '')]));
  }
  // TODO - sort by cost descending (most expensive goes first) i dont have it in my task and no even button for that

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips;
  // TODO - filter trips by tripId DONE

  return filtered.length ? filtered.filter(trip => trip.id == tripId)[0]: {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips;
  console.log(countryCode);

  // TODO - filter trips by countryCode DONE

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered.filter(trip => trip.country.code == countryCode): [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
