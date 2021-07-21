const express = require("express");

const router = express.Router();
const acctController = require("../controllers/accounts");

router.get("/accounts", acctController.show_accounts);
router.post("/accounts/create", acctController.create_account);

module.exports = router;