document.addEventListener('DOMContentLoaded', function() {
  const birthdayTime = document.querySelector('#birthdayTime')
  const backgroundMusicPath = '/Users/johnmartinez/dev/ninas_birthday_site/sounds/somePlaceholderMusic.mp3'

  const countdownContainer = document.querySelector('#countdown')
  const daysCountdown = document.querySelector('#days')
  const hoursCountdown = document.querySelector('#hours')
  const minutesCountdown = document.querySelector('#minutes')
  const secondsCountdown = document.querySelector('#seconds')

  let backgroundMusic = []

  function countdown() {

    const now = new Date()
    let currentYear = now.getFullYear()
    // let eventDate = new Date( currentYear, 01, 04 )
    let eventDate = new Date( currentYear, 00, 28 )
    const isItFebruary4th = now.getMonth() === 0 && now.getDate() === 27

    const currentTime = now.getTime()
    const eventTime = eventDate.getTime()
    const remainingTime = eventTime - currentTime

    let seconds = Math.floor( remainingTime / 1000 )
    let minutes = Math.floor( seconds / 60 )
    let hours =  Math.floor( minutes / 60 )
    let days = Math.floor( hours / 24 )

    hours %= 24
    minutes %= 60
    seconds %= 60

    const hoursView = ( hours < 10 ) ? "0" + hours : hours
    const minutesView = ( minutes < 10 ) ? "0" + minutes : minutes
    const secondsView = ( seconds < 10 ) ? "0" + seconds : seconds

    if ( isItFebruary4th ) {
      console.log('Happy birthday, Nina!')
      countdownContainer.style.display = "none"

      birthdayTime.style.display = "block"
      backgroundMusic.play()
      // document.body.style.backgroundColor = "pink"

    } else {

      daysCountdown.textContent = days
      hoursCountdown.textContent = hours
      minutesCountdown.textContent = minutes
      secondsCountdown.textContent = seconds

      setTimeout(countdown, 1000)

    } // end of if ( isItFebruary4th )

  } // end of countdown

  function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  } // end of sound(src)

  function main() {
    backgroundMusic = new sound(backgroundMusicPath)
    countdown()
  }

  main()
}) // end of DOMContentLoaded
