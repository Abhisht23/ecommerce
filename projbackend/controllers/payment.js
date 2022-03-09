// var braintree = require("braintree");

// var gateway = new braintree.BraintreeGateway({
//   environment: braintree.Environment.Sandbox,
//   merchantId: "sbs9bnzs276r9sc7",
//   publicKey: "ddnns46yvdnjbmh5",
//   privateKey: "f679a67c68f450fd36b57541772f4e19"
// });

// module.exports.getToken = (req, res) => {
//   gateway.clientToken.generate({}, function(err, response) {
//     if (err) {
//       res.status(500).json(err);
//     } else {
//       res.send(response);
//     }
//   });
// };

// exports.processPayment = (req, res) => {
//   let nonceFromTheClient = req.body.paymentMethodNonce;

//   let amountFromTheClient = req.body.amount;
//   gateway.transaction.sale(
//     {
//       amount: amountFromTheClient,
//       paymentMethodNonce: nonceFromTheClient,

//       options: {
//         submitForSettlement: true
//       }
//     },
//     function(err, result) {
//       if (err) {
//         res.status(500).json(error);
//       } else {
//         res.json(result);
//       }
//     }
//   );
// };

var braintree = require("braintree");

var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "sbs9bnzs276r9sc7",
  publicKey: "ddnns46yvdnjbmh5",
  privateKey: "f679a67c68f450fd36b57541772f4e19"
});

exports.getToken = (req, res) => {
  gateway.clientToken.generate({}, function(err, response) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  });
};

exports.processPayment = (req, res) => {
  let nonceFromTheClient = req.body.paymentMethodNonce;

  let amountFromTheClient = req.body.amount;
  gateway.transaction.sale(
    {
      amount: amountFromTheClient,
      paymentMethodNonce: nonceFromTheClient,

      options: {
        submitForSettlement: true
      }
    },
    function(err, result) {
      if (err) {
        res.status(500).json(error);
      } else {
        res.json(result);
      }
    }
  );
};

