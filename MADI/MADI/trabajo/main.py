from machine import Pin

Entrada = None

"""Describe esta función...
"""
def hacer_algo():
  global Entrada
  print('INTERRUPCION')


Entrada=Pin(12, Pin.IN,Pin.PULL_UP)
Entrada.irq(trigger = Pin.IRQ_RISING, handler = lambda t:hacer_algo())

while True:
  pass
