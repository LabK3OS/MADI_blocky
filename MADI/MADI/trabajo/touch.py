import time
from machine import Pin
from machine import PWM
from machine import TouchPad

musica_1 = None
Touch = None
a = None

musica_1 = PWM(Pin(25))
Touch= TouchPad(Pin(33))
Touch.config(1000)


while True:
  a = Touch.read()
  print('Touch: {0}'.format(a))
  time.sleep(1)
