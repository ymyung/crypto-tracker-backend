const Wallet = require('../models/walletModel')
const mongoose = require('mongoose')

// get all wallets
const getWallets = async (req, res) => {
    try {
        const response = await Wallet.find({}).sort({ value: -1 })

        res.status(200).json(response)
    } catch(error) {
        res.status(400).json({error})
    }
}

// get a single wallet
const getWallet = async (req, res) => {
    try {
        const { id } = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No such wallet'})
        }

        const response = await Wallet.findById(id)

        if(!response) {
            return res.status(404).json({error: 'Wallet not found'})
        }

        res.status(404).json({response})
    } catch(error) {
        res.status(400).json({error})
    }
}

// create a new wallet
const createWallet = async (req, res) => {
    try {
        const { name, image, amount, value } = req.body

        const response = await Wallet.create({ name, image, amount, value })
        console.log(response)

        res.status(200).json(response)
    } catch(error) {
        res.status(400).json({error})
    }
}

// edit a wallet
const editWallet = async (req, res) => {
    try {
        const { id } = req.params
        const { amount } = req.body

        const response = await Wallet.findByIdAndUpdate(id, {
            amount: amount
        }, { new: true })

        res.status(200).json(response)
    } catch(error) {
        res.status(400).json({error})
    }
}

// delete a wallet
const deleteWallet = async (req, res) => {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such wallet' })
        }

        const response = await Wallet.findOneAndDelete( id )

        res.status(200).json({ message: `Wallet ${response.name} has been deleted` })
    } catch(error) {
        res.status(400).json({error})
    }
}

module.exports = {
    getWallets,
    getWallet,
    createWallet,
    editWallet,
    deleteWallet
}