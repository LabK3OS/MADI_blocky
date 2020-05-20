import time
import tcs34725
from machine import I2C, Pin

def html_rgb(data):
    r, g, b, c = data
    red = pow((int((r/c) * 256) / 255), 2.5) * 255
    green = pow((int((g/c) * 256) / 255), 2.5) * 255
    blue = pow((int((b/c) * 256) / 255), 2.5) * 255
    return red, green, blue


i2c = I2C(scl=Pin(5), sda=Pin(4))
sensor = tcs34725.TCS34725(i2c)
sensor.gain(60)
print(sensor.active())
time.sleep_ms(500)
print(sensor.read(True))
print(html_rgb(sensor.read(True))))
time.sleep_ms(20)
