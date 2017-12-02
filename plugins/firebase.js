import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'

// explicit installation required in module environments
Vue.use(VueFire)

let config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MSG_SENDER_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default {
  database: firebase.database()
}
