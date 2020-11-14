function toFullVideo(document) {
  if (document.requestFullScreen) { //切换全屏模式
    return document.requestFullScreen()
  } else if (document.webkitRequestFullScreen) {
    return document.webkitRequestFullScreen()
  } else if (document.mozRequestFullScreen) {
    return document.mozRequestFullScreen()
  } else if (document.msRequestFullscreen) { //使用IE时，最后的screen的s为小写
    return document.msRequestFullscreen()
  }
}
function exitFullVideo(document) {
  if (document.exitFullscreen) {
    return document.fullscreenElement && document.exitFullscreen();
  } else if (document.webkitCancelFullScreen) {
    return document.webkitCancelFullScreen();
  } else if (document.mozCancelFullScreen) {
    return document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    return document.msExitFullscreen();
  }
}
export {
  toFullVideo,
  exitFullVideo
}