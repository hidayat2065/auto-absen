import { createWidget, widget } from '@zos/ui'
import {
  getBrightness,
  setBrightness,
  setPageBrightTime,
} from '@zos/display'

let originalBrightness = 50

SecondaryWidget({
  onResume() {
    // Simpan brightness sebelum dinaikkan
    originalBrightness = getBrightness()

    // Full brightness untuk scan QR
    setBrightness({
      brightness: 100,
    })

    // Layar tetap menyala 60 detik
    setPageBrightTime({
      brightTime: 60000,
    })
  },

  onPause() {
    // Kembalikan brightness sebelumnya
    setBrightness({
      brightness: originalBrightness,
    })
  },

  build() {
    // Background putih
    createWidget(widget.FILL_RECT, {
      x: 0,
      y: 0,
      w: 480,
      h: 480,
      color: 0xffffff,
    })

    // QR presisi 348 x 348
    createWidget(widget.IMG, {
      x: 66,
      y: 66,
      w: 348,
      h: 348,
      src: 'qr.png',
    })
  },
})