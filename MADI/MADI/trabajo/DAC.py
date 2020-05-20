#DAC function
from machine import DAC #import Pin module，8bit DAC parameter range:0-255，output voltage range:0-3.3V
dac0=DAC(Pin(0))

dac0.write(128) #output 1.75V voltage

#omega = frecuencia * 2 * pi
# create a buffer containing a sine-wave, using half-word samples
#buf = array(255 + int(254 * math.sin(2 * math.pi * omega * i / 128)) for i in range(128))
#https://github.com/loboris/MicroPython_ESP32_psRAM_LoBo/wiki/dac

#dac = DAC(0)
#dac.write_timed(buf, 2500 * len(buf), mode=DAC.CIRCULAR)
