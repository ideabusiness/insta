import gulp from 'gulp'
import webpack from 'webpack'
import nodemon from 'nodemon'
import config from '../webpack.backend'

gulp.task('watch', (done) => {
  let isFiredDone = false

  webpack(config).watch(100, (err, stats) => {
    if (!isFiredDone) {
      isFiredDone = true
      done()
    }
    nodemon.restart()
  })
})
