// This file is simply an automation of human tests about a correct smart contract creation
// and interaction

// chai provides some useful functions to do tests
const { assert } = require('chai')

require('chai')
    .use(require('chai-as-promised'))
    .should()

const SinglePayment = artifacts.require('./SinglePayment.sol')

contract('SinglePayment', ([deployer, buyer, seller]) => {
    let singlePayment

    before(async () => {
        singlePayment = await SinglePayment.deployed({value: web3.utils.toWei('0.5', 'Ether')})
    })

    // check that the deploy is OK
    // checks:
    //      1. correct deploy the contract
    //      2. the contract variables are set
    describe('deployment', async() => {
        it('contract deployed successfully', async() => {
            const address = await singlePayment.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })

        it('the initial order number is zero', async() => {
            const orderCount = await singlePayment.getOrderCount();
            assert.equal(orderCount, 0)
        })

    })

    describe('order creation', async() => {
        // variables updated that we need to do checks
        let result, orderCount, oldContractBalance

        before(async() => {
            oldContractBalance = await web3.eth.getBalance(singlePayment.address)
            oldContractBalance = new web3.utils.BN(oldContractBalance)
            result = await singlePayment.newOrder(seller, web3.utils.toWei('1', 'Ether'), {from: buyer, value: web3.utils.toWei('1', 'Ether')})
            orderCount = await singlePayment.getOrderCount()
        })

        
        it('order created correctly', async() => {
            // SUCCESS
            assert.equal(orderCount, 1)
            const event = result.logs[0].args
            const newContractBalance = await web3.eth.getBalance(singlePayment.address)
            assert.equal(event.ownerAddress, buyer, 'owner address is correct')
            assert.equal(event.sellerAddress, seller, "seller address is correct")
            assert.equal(event.amount, web3.utils.toWei('1', 'Ether'), 'amount is correct')
            assert.notEqual(event.unlockCode.toNumber(), 0)
            assert.notEqual(event.unlockCode.toNumber(), null)
            assert.notEqual(event.unlockCode.toNumber(), undefined)
            assert.equal(event.state, 1, 'order is filled')
            
            const expectedBalance = oldContractBalance.add(new web3.utils.BN(event.amount))
            assert.equal(expectedBalance.toString(), newContractBalance.toString(), "contract is correctly filled")

            /// FAILURE CASES
            // user tries to insert an amount less than the required amount
            await singlePayment.newOrder(seller, web3.utils.toWei('1', 'Ether'), {from: buyer, value: web3.utils.toWei('0.5', 'Ether')}).should.be.rejected

            // user tries to order his item, or send funds to itself
            await singlePayment.newOrder(seller, web3.utils.toWei('1', 'Ether'), {from: seller, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected
        
            // user tries to pass value equal to zero
            await singlePayment.newOrder(seller, 0, {from: seller, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected
        })

        it('get the correct order infos', async() => {
            const order = await singlePayment.getOrderById(orderCount)
            assert.equal(order.sellerAddress, seller, 'seller address is correct')
            assert.equal(order.ownerAddress, buyer, 'buyer address is correct')
            assert.equal(order.state, 1, "order state is correct")
        })
    })

    describe('item received confirmation', async() => {
        // variables updated that we need to do checks
        let result, unlockCode

        before(async() => {
            unlockCode = await singlePayment.getUnlockCode(1)
            oldSellerBalance = await web3.eth.getBalance(seller)
            oldSellerBalance = new web3.utils.BN(oldSellerBalance)
        })

        it('order closed and seller received the funds', async() => {
            result = await singlePayment.confirmReceived(1, unlockCode, {from: buyer})
            const event = result.logs[0].args
            const order = await singlePayment.getOrderById(event.id)
            assert.equal(order.state, 2, 'the order is set to closed')
            
            let newSellerBalance
            newSellerBalance = await web3.eth.getBalance(seller)   // getBalance and then convert him
            newSellerBalance = new web3.utils.BN(newSellerBalance) // BIG NUMBER to do big number addition

            const expectedSellerBalance = oldSellerBalance.add(new web3.utils.BN(order.amount))
            assert.equal(expectedSellerBalance.toString(), newSellerBalance.toString(), "funds correctly send to seller from smart contract")
        })
    })
    
    describe('refound owner and order canceled', async() => {
        let result, orderCount

        before(async() => {
            result = await singlePayment.newOrder(seller, web3.utils.toWei('1', 'Ether'), {from: buyer, value: web3.utils.toWei('1', 'Ether')})
            orderCount = await singlePayment.getOrderCount()
        })

        it('order canceled and buyer received funds back', async() => {
            
            oldBuyerBalance = await web3.eth.getBalance(buyer)
            oldBuyerBalance = new web3.utils.BN(oldBuyerBalance)
            result = await singlePayment.refundOwner(orderCount, {from: buyer})
            
            const event = result.logs[0].args
            const order = await singlePayment.getOrderById(event.id)

            assert.equal(order.state, 3, 'the order is set to canceled')

            newBuyerBalance = await web3.eth.getBalance(buyer)   // getBalance and then convert him
            newBuyerBalance = new web3.utils.BN(newBuyerBalance) // BIG NUMBER to do big number addition

            const expectedBuyerBalance = oldBuyerBalance.add(new web3.utils.BN(order.amount))
            // the two values are different due to gas fee payment
            assert.equal(expectedBuyerBalance.toString(), newBuyerBalance.toString(), "funds correctly send to buyer from smart contract")
        })
    })
})