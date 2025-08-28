document.getElementById('add-money-btn').addEventListener('click',function(e) {
    e.preventDefault()
   const bank= document.getElementById('bank').value
   const accountNumber=parseInt( document.getElementById('account-number').value)
    const addAmount=parseInt( document.getElementById('add-amount').value)
    const pin =document.getElementById('pin').value 
   
    const realMoney=parseInt(document.getElementById('real-money').innerText)
     console.log(bank,accountNumber,addAmount,pin,realMoney)
     const totalMoney=addAmount+realMoney
     document.getElementById('real-money').innerText=totalMoney
})