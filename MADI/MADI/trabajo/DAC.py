#DAC function
from machine import DAC #import Pin module，8bit DAC parameter range:0-255，output voltage range:0-3.3V
dac0=DAC(Pin(25))

dac0.waveform(freq,type,duration) #output 1.75V voltage

# freq

# 16-32000 Hz for sine wave
# 500-32000 Hz for noise
# 170 - 3600 Hz for triangle
# 170 - 7200 Hz for ramp and sawtooth


# type

# SINE,TRIANGLE,RAMP,SAWTOOTH and NOISE

# duration

# duracition in ms



dac0.stopwave()
