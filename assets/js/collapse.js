const collapseItems = document.querySelectorAll('.collapse__item')
const mainImg = document.getElementById('mainCollapseImage')

collapseItems.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      // Close other items
      collapseItems.forEach(i => {
        if (i !== item) i.removeAttribute('open')
      })
      // Change image for desktop
      const imgSrc = item.dataset.img
      mainImg.src = imgSrc
    }
  })
})