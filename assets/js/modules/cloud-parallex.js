const clouds = document.querySelectorAll('.cloud')

document.addEventListener('mousemove', (e) => {

  const x = e.clientX / window.innerWidth
  const y = e.clientY / window.innerHeight

  clouds.forEach((cloud, index) => {

    const speed = (index + 2) * 20

    const moveX = (x + 0.5) * speed
    const moveY = (y + 0.5) * speed

    cloud.style.transform = `translate(${moveX}px, ${moveY}px)`

  })

})