const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51KD2V7JzrUp5irn8DNdYFcLH9Q2MnRFKJcqNa8OSaeLyKgvba1Znbpo30DK9cdilxesPifwiRiHPII4s5dKuRlq000YYnYQCNr"
);

// App config
const app = express();
// Middlewares
app.use(cors({ orginal: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payement Request Recieved | for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command

exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-e5ac8/us-central1/api
