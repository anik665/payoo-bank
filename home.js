// logoutbutton functionality
document.getElementById('logOutbtn').addEventListener('click',function(){
    console.log('log out button is click')
    window.location.href='./index.html'

})





// add-money btn  functionality


document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const pinValue = 1234;
    const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById('account-number').value
    const addAmount = parseInt(document.getElementById('add-amount').value)
    const pin = document.getElementById('pin').value

    const realMoney = parseInt(document.getElementById('real-money').innerText)
    if (accountNumber.length < 11) {
        alert('Please Provide a valid Account number')
        return;
    }
    if (pin != pinValue) {
        alert('Please Provide Valid pin number')
    }
    console.log(bank, accountNumber, addAmount, pin, realMoney)
    const totalMoney = addAmount + realMoney
    document.getElementById('real-money').innerText = totalMoney
})


// Cashout Features 

document.getElementById('cashOut-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const pinValue=1234;

    //Get the element with id
    const userAccount = document.getElementById('userAccount').value
    const cashOutAmount = parseInt(document.getElementById('cashOut-amount').value)
    const pin = document.getElementById('pin2').value

    const realMoney = parseInt(document.getElementById('real-money').innerText)
    if (userAccount.length < 11) {
        alert('Please Provide a valid Account number')
        return;
    }
    if (pin != pinValue) {
        alert('Please Provide Valid pin number')
        return ;
    }
    console.log(userAccount ,cashOutAmount , pin, realMoney)
    const totalMoney =  realMoney-cashOutAmount
    document.getElementById('real-money').innerText = totalMoney
})






// toggoling Features 

// MoneyAdd functionality 
document.getElementById('moneyAdd').addEventListener('click', function () {
    console.log('moneyAdd')
    document.getElementById('cashOutform').style.display = 'none'
    document.getElementById('transfarFrom').style.display = 'none'
    document.getElementById('getBonusFrom').style.display = 'none'
    document.getElementById('paybillForm').style.display = 'none'
    document.getElementById('addMoneyForm').style.display = 'block'
})
// MoneyCashout functionality

document.getElementById('moneyCash').addEventListener('click', function () {
    console.log('moneycash')
    document.getElementById('transfarFrom').style.display = 'none'
    document.getElementById('getBonusFrom').style.display = 'none'
    document.getElementById('paybillForm').style.display = 'none'
    document.getElementById('addMoneyForm').style.display = 'none'
    document.getElementById('cashOutform').style.display = 'block'
})

// Transfar money functionality 
document.getElementById('transferCash').addEventListener('click', function () {
    console.log('transfer')
    document.getElementById('transfarFrom').style.display = 'block'
    document.getElementById('getBonusFrom').style.display = 'none'
    document.getElementById('paybillForm').style.display = 'none'
    document.getElementById('addMoneyForm').style.display = 'none'
    document.getElementById('cashOutform').style.display = 'none'
})
//bonusCash functionality

document.getElementById('bonusCash').addEventListener('click', function () {
    console.log('bonus')
    document.getElementById('transfarFrom').style.display = 'none'
    document.getElementById('getBonusFrom').style.display = 'block'
    document.getElementById('paybillForm').style.display = 'none'
    document.getElementById('addMoneyForm').style.display = 'none'
    document.getElementById('cashOutform').style.display = 'none'
})

document.getElementById('paybill').addEventListener('click', function () {
    console.log('paybill')
    document.getElementById('transfarFrom').style.display = 'none'
    document.getElementById('getBonusFrom').style.display = 'none'
    document.getElementById('paybillForm').style.display = 'block'
    document.getElementById('addMoneyForm').style.display = 'none'
    document.getElementById('cashOutform').style.display = 'none'
}) 
