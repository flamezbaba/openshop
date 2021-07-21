const account = require("../models/account");
const validator = require("email-validator");

exports.show_accounts = async (req, res) => {
    let records = await account.find();

    return res.status(200).send(records);
};

exports.create_account = async (req, res) => {
    const {name, password, email, role} = req.body;

    // validate
    if(!name){
        return res.status(409).send("name is required");
    }

    if(!password){
        return res.status(409).send("password is required");
    }

    if(!email){
        return res.status(409).send("email is required");
    }

    if(!validator.validate(email)){
        return res.status(409).send("email is not valid");
    }

    let check = await account.findOne({ email});
    if(check){
        return res.status(409).send("email already used");
    }
    else{
        let record = await account.create({
            name : name,
            email : email,
            password : password,
            uuid : "op"+Math.floor(Math.random() * 1000000),
        });

        return res.status(200).send(record);
    }
};
