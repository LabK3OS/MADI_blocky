#DAC function
from machine import DAC #import Pin module，8bit DAC parameter range:0-255，output voltage range:0-3.3V
dac0=DAC(Pin(25))
dac1=DAC(Pin(26))

dac0.write(128) #output 1.75V voltage
dac1.write(64)  #output 0.9V voltage
