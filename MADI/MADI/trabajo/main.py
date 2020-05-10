from hcsr04 import HCSR04
from machine import Pin
import time

U_Sonico = None


U_Sonico = HCSR04(trigger_pin=12, echo_pin=13)
while True:
  print(U_Sonico.distance_cm())
  time.sleep(1)
