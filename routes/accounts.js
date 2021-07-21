const express = require("express");

const router = express.Router();
const acctController = require("../controllers/accounts");

router.get("/accounts", acctController.show_accounts);

module.exports = router;