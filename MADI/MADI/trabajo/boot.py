#import webrepl_setup

def do_connect():
    import network
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        print('connecting to network...')
        wlan.connect('StevenOr','1026591258')
        while not wlan.isconnected():
            pass
    print('network config:', wlan.ifconfig())
do_connect()
import webrepl
import os
webrepl.start()
