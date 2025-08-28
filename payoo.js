document.getElementById('loginBtn').addEventListener('click', function (e) {
    e.preventDefault()
    const mobile = 12345678910
    const pin = 1234



    const mobileNumber = document.getElementById('mobile').value;
    const mobileNumberConvert = parseInt(mobileNumber)
    const pinNumber = document.getElementById('pin').value;
    const pinNumberConveter = parseInt(pinNumber)
    console.log(mobileNumberConvert, pinNumberConveter)
    if(mobileNumberConvert===mobile && pinNumberConveter===pin){
        window.location.href='./home.html'
    }
    else{
        console.log('Cridential Error')
    }

})