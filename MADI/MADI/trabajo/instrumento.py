from machine import Pin
from neopixel import NeoPixel
import time
from machine import PWM
from machine import TouchPad
import mpu6050
from machine import I2C
from hcsr04 import HCSR04
import math

neo_pixel = None
musica_1 = None
Naranja1 = None
Naranja2 = None
MPU = None
U_Sonico = None
i = None
Distancia = None
Inclinacion = None

def hex_to_rgb(value):
  value = value.lstrip('#')
  lv = len(value)
  return tuple(int(value[i:i + lv // 3], 16) for i in range(0, lv, lv // 3))

def por_sonido(p,t):
  if p>100:
    p=100
  elif p<0:
    p=0
  if t==0:
    fre=round(((2093-262)*p/100)+262)
  elif t==1:
    fre=round(((2093-262)*p/100)+262)
  elif t==2:
    fre=round(((2093-262)*p/100)+262)
  elif t==3:
    fre=round(((247-65)*p/100)+65)
  elif t==4:
    fre=round(((2093-65)*p/100)+65)
  return (fre)


neo_pixel = NeoPixel(Pin(12, Pin.OUT),24)
musica_1 = PWM(Pin(25))
Naranja1= TouchPad(Pin(4))
Naranja2= TouchPad(Pin(2))
Naranja1.config(1000)
Naranja2.config(1000)
i2c = I2C(scl=Pin(22), sda=Pin(21))
MPU = mpu6050.accel(i2c)
U_Sonico = HCSR04(trigger_pin=32, echo_pin=35)
while True:
  if 300 > (Naranja1.read()):
    for i in range(3):
      neo_pixel[i-1] = hex_to_rgb('#ff0000')
    neo_pixel.write()
    musica_1.freq(784)
    musica_1.duty(512)
    time.sleep_us(1968750)
    musica_1.freq(0)
    time.sleep_us(31250)
  if 300 > (Naranja2.read()):
    for i in range(3, 6):
      neo_pixel[i-1] = hex_to_rgb('#ff9900')
    neo_pixel.write()
    musica_1.freq(587)
    musica_1.duty(512)
    time.sleep_us(1968750)
    musica_1.freq(0)
    time.sleep_us(31250)
  Distancia = U_Sonico.distance_cm()
  print(Distancia)
  if 30 > Distancia:
    for i in range(6, 9):
      neo_pixel[i-1] = hex_to_rgb('#ffff00')
    neo_pixel.write()
    musica_1.freq(por_sonido((round(Distancia+50)),3))
    musica_1.duty(255)
  Inclinacion = MPU.get_values()
  if 5000 < (Inclinacion["AcX"]):
    for i in range(9, 12):
      neo_pixel[i-1] = hex_to_rgb('#33ff33')
    neo_pixel.write()
    musica_1.freq(262)
    musica_1.duty(512)
    time.sleep_us(1968750)
    musica_1.freq(0)
    time.sleep_us(31250)
  if -5000 > (Inclinacion["AcX"]):
    for i in range(12, 15):
      neo_pixel[i-1] = hex_to_rgb('#33ccff')
    neo_pixel.write()
    musica_1.freq(294)
    musica_1.duty(512)
    time.sleep_us(1968750)
    musica_1.freq(0)
    time.sleep_us(31250)
  if 5000 < (Inclinacion["AcY"]):
    for i in range(15, 18):
      neo_pixel[i-1] = hex_to_rgb('#6666cc')
    neo_pixel.write()
    musica_1.freq(330)
    musica_1.duty(512)
    time.sleep_us(1968750)
    musica_1.freq(0)
    time.sleep_us(31250)
  if -5000 > (Inclinacion["AcY"]):
    for i in range(18, 21):
      neo_pixel[i-1] = hex_to_rgb('#cc66cc')
    neo_pixel.write()
    musica_1.freq(349)
    musica_1.duty(512)
    time.sleep_us(1968750)
    musica_1.freq(0)
    time.sleep_us(31250)
