import math
import time
import time
from machine import Pin
from machine import DAC

dac0=DAC(Pin(25))
tipo = None
fre = None
duracion = None
tiempo = None
muestra = None
start = None
delta = None

def generador(tipo, fre, duracion):
  global tiempo, muestra, start, delta
  tiempo = (1 / fre) * 1000000
  muestra = 0
  duracion = duracion * 1000000
  start = time.ticks_ms()
  delta = 0
  if tipo == 0:
    while delta < duracion:
      dac0.write(round(127.5 * (1 + math.sin((360 * muestra) / 180.0 * math.pi))))
      muestra = muestra + 1 / 60
      if muestra > 1:
        muestra = 0
      time.sleep_us((round(tiempo / 60)))
      delta = time.ticks_diff(time.ticks_ms(), start)
  elif tipo == 1:
    while delta < duracion:
      if muestra < 0.25:
        dac0.write(round(127.5 * (1 + (2 * muestra) / 0.5)))
      elif 0.25 <= muestra and muestra < 0.75:
        dac0.write(round(127.5 * (1 + (1 - 2 * muestra) / 0.5)))
      else:
        dac0.write(round(127.5 * (1 + (2 * (muestra - 1)) / 0.5)))
      muestra = muestra + 1 / 60
      if muestra > 1:
        muestra = 0
      time.sleep_us((round(tiempo / 60)))
      delta = time.ticks_diff(time.ticks_ms(), start)
  elif tipo == 2:
    while delta < duracion:
      dac0.write(round(127.5 * (1 + (1 - 2 * muestra))))
      muestra = muestra + 1 / 60
      if muestra > 1:
        muestra = 0
      time.sleep_us((round(tiempo / 60)))
      delta = time.ticks_diff(time.ticks_ms(), start)


generador(0, 2000, 1)
