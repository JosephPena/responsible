 export default {
  user: {
    id: 1,
    profile: {
      avatar: 'https://i.ytimg.com/vi/1v6M41Divso/maxresdefault.jpg',
      fullName: 'Kim Panda',
      street: 'back handle lane',
      city: 'Austin',
      state: 'Virginia',
      zip: '56352',
    },
    isDriver: false,
    isRider: false,
    location: {lat:30.2672, lng:-97.7431},
    friends: [
      {
        id: 2,
        avatar: 'http://dreamatico.com/data_images/dolphin/dolphin-2.jpg',
        fullName: 'Flipp',
      },
      {
        id: 7,
        avatar: 'http://vignette3.wikia.nocookie.net/pokemon/images/1/' +
                '16/025Pikachu_OS_anime_10.png/revision/20150102074354',
        fullName: 'PIKA',
      },
      {
        id: 8,
        avatar: 'http://vignette1.wikia.nocookie.net/pokemon/images/b/b8/' +
          '001Bulbasaur_Dream.png/revision/latest?cb=20140903033758',
        fullName: 'Bulb',
      },
      {
        id: 9,
        avatar: 'http://petupon.com/wp-content/uploads/2014/05/259758xcitefun-cute-animals-0.jpg',
        fullName: 'Ears',
      },
      {
        id: 11,
        avatar: 'https://s-media-cache-ak0.pinimg.com/236x/b6/83/9d/' +
          'b6839df8dc84c73e6f641f8a05cf7347.jpg',
        fullName: 'Bunneh',
      },
      {
        id: 12,
        avatar: 'http://www.funcage.com/blog/wp-content/uploads/2013/'
         + '11/Cute-Animals-Saying-Hi-To-You-001.jpg',
        fullName: 'Lazy Harp Seal',
      },
    ],
  },
  ride: {
    match: null,
    riders: [], // Array of this driver's friends who are looking for a ride.
    messages: [
      { id: 1, time: '12:30', text: 'Where are you?', },
      { id: 7, time: '12:42', text: 'On my way. Where you at?', },
      { id: 1, time: '12:45', text: 'Four Horseman', },
      { id: 7, time: '12:50', text: 'Be there in ten.', },
    ],
    isWaitingForMatch: false,
    isMatched: false,
    isConfirmed: false,
    isCancelling: false,
    isAccepting: false,
    isFetchingMessages: false,
    acceptRideError: null,
    rideRequestError: null,
    messagesFetchError: null,
    directions: null,
  },
  routing: {
    locationBeforeTransitions: null,
  },
};
