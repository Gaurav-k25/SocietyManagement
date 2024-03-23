// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDujLK_YZBHTF74JjgXr_qxfxDCbDTNxpQ",
    authDomain: "fir-44465.firebaseapp.com",
    databaseURL: "https://fir-44465.firebaseio.com",
    projectId: "fir-44465",
    storageBucket: "",
    messagingSenderId: "285417483684",
    appId: "1:285417483684:web:c7aaf17e03dc3f66"
    }
  
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
