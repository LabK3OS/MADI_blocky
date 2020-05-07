import math
from machine import Pin
from neopixel import NeoPixel
from machine import Timer

Hora = None
Segundo = None
minuto = None
xsegundo = None
neo_pixel = None
xminuto = None
Temp = None
xhora = None

def colour_rgb(r, g, b):
  r = round(min(100, max(0, r)) * 2.55)
  g = round(min(100, max(0, g)) * 2.55)
  b = round(min(100, max(0, b)) * 2.55)
  return (r, g, b)

"""Describe esta función...
"""
def hola():
  global Hora, Segundo, minuto, xsegundo, neo_pixel, xminuto, Temp, xhora
  Segundo = Segundo + 1
  if Segundo >= 60:
    Segundo = 0
    minuto = minuto + 1
    if minuto >= 60:
      minuto = 0
      Hora = Hora + 1
      if Hora >= 12:
        Hora = 0
  xsegundo = round(Segundo / 2.5) + 1
  xminuto = round(minuto / 2.5) + 1
  xhora = round(Hora / 0.5) + 1
  if xhora == xminuto:
    if xhora == xsegundo:
      neo_pixel[xhora-1] = (colour_rgb(50, 50, 50))
    else:
      neo_pixel[xhora-1] = (colour_rgb(50, 50, 0))
      neo_pixel[xsegundo-1] = (colour_rgb(0, 0, 50))
  elif xhora == xsegundo:
    neo_pixel[xhora-1] = (colour_rgb(50, 0, 50))
    neo_pixel[xminuto-1] = (colour_rgb(0, 50, 0))
  elif xminuto == xsegundo:
    neo_pixel[xminuto-1] = (colour_rgb(0, 50, 50))
    neo_pixel[xhora-1] = (colour_rgb(50, 0, 0))
  else:
    neo_pixel[xhora-1] = (colour_rgb(50, 0, 0))
    neo_pixel[xminuto-1] = (colour_rgb(0, 50, 0))
    neo_pixel[xsegundo-1] = (colour_rgb(0, 0, 50))
  neo_pixel.write()


Hora = 12
minuto = 0
Segundo = 0
neo_pixel = NeoPixel(Pin(12, Pin.OUT),24)
Temp = Timer(0)
Temp.init(period=1000, mode=Timer.PERIODIC, callback=hola)
while True:
  pass
