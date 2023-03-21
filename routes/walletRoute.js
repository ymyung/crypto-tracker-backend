const express = require('express')
const router = express.Router()
const {
    getWallets,
    getWallet,
    createWallet,
    editWallet,
    deleteWallet
} = require('../controllers/walletController')

// get all projects
router.get('/', getWallets)

// get one project
router.get('/:id', getWallet)

// post a new project
router.post('/', createWallet)

// edit project
router.patch('/:id', editWallet)

// delete project
router.delete('/:id', deleteWallet)

module.exports = router