const functions = require("firebase-functions");
require("dotenv").config();

const api_key = process.env.API_KEY;
const domain = process.env.DOMAIN;
const mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

exports.watchCounter = functions.firestore
  .document("counters/{id}")
  .onUpdate((snap, context) => {
    const update = snap.after.data();

    if (update.current % 10 === 0) {
      const data = {
        from: "Tricia <tricia.sdmngo@gmail.com>",
        to: "pat.sdmngo@gmail.com",
        subject: "Hello from the Counter App",
        text: "The counter reached a multiple of ten.",
      };
      mailgun.messages().send(data, (err, body) => {
        if (err) {
          console.error(err);
        } else {
          console.log(body);
        }
      });
    }
  });
