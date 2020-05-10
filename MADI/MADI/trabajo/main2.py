from machine import Pin
from neopixel import NeoPixel

neo_pixel = None
i = None
j = None

def colour_rgb(r, g, b):
  r = round(min(100, max(0, r)) * 2.55)
  g = round(min(100, max(0, g)) * 2.55)
  b = round(min(100, max(0, b)) * 2.55)
  return (r, g, b)


neo_pixel = NeoPixel(Pin(12, Pin.OUT),24)
while True:
  for i in range(25):
    for j in range(25):
      neo_pixel[i-1] = (colour_rgb(100, i, 0))
    neo_pixel.write()
  for i in range(25):
    for j in range(25):
      neo_pixel[i-1] = (colour_rgb(100-i, 100, 0))
    neo_pixel.write()
  for i in range(25):
    for j in range(25):
      neo_pixel[i-1] = (colour_rgb(0, 100, i))
    neo_pixel.write()
  for i in range(25):
    for j in range(25):
      neo_pixel[i-1] = (colour_rgb(0, 100-i, 100))
    neo_pixel.write()
  for i in range(25):
    for j in range(25):
      neo_pixel[i-1] = (colour_rgb(i, 0, 100))
    neo_pixel.write()
  for i in range(25):
    for j in range(25):
      neo_pixel[i-1] = (colour_rgb(100, 0, 100-i))
    neo_pixel.write()
