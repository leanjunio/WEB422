$(document).ready(() => {
  loadImages()
})

const loadImages = () => {
  $('#img-1').attr('src', '../public/images/image_1.jpg')
  $('#img-2').attr('src', '../public/images/image_2.jpg')
  $('#img-3').attr('src', '../public/images/image_3.jpg')
  $('#img-4').attr('src', '../public/images/image_4.jpg')
}