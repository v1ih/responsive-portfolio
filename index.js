const balloon = document.getElementById('air-balloon')
const cloudOne = document.getElementById('cloud-one')
const cloudTwo = document.getElementById('cloud-two')
const cloudThree = document.getElementById('cloud-three')
const cloudFour = document.getElementById('cloud-four')
const cloudFive = document.getElementById('cloud-five')
const javascript = document.getElementById('javascript')
const react = document.getElementById('react')
const python = document.getElementById('python')

function move() {
    const incrementer = window.scrollY
    
    // 10 refers to the 10% refered in the css code, bottom //
    balloon.style.bottom = 10 + incrementer * 0.1 + '%'

    // clouds 
    cloudOne.style.bottom = 40 + incrementer * 0.12 + '%'
    cloudOne.style.left = 75 + incrementer * 0.1 + '%'

    cloudTwo.style.bottom = 80 + incrementer * 0.14 + '%'
    cloudTwo.style.left = 70 + incrementer * 0.15 + '%'

    cloudThree.style.bottom = 60 + incrementer * 0.1 + '%'
    cloudThree.style.left = 0 + incrementer * -0.12 + '%'

    cloudFour.style.bottom = 70 + incrementer * 0.16 + '%'
    cloudFour.style.left = 20 + incrementer * -0.15 + '%'

    cloudFive.style.bottom = 60 + incrementer * 0.2 + '%'
    cloudFive.style.left = 60 + incrementer * -0.16 + '%'

    // icons 
    javascript.style.left = 32 + incrementer * -1 + '%'
    react.style.left = 20 + incrementer * -2.2 + '%'
    python.style.left = 26 + incrementer * -1.5 + '%'
    
}

window.addEventListener('scroll', move)