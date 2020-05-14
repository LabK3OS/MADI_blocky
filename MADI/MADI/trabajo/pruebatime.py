# FUNCIÓN PARA ESTABLECER LA CONEXIÓN WIFI (STATION)
def do_connect(SSID, PASSWORD):
    import network                            # importa el módulo network
    global sta_if
    sta_if = network.WLAN(network.STA_IF)     # instancia el objeto -sta_if- para realizar la conexión en modo STA
    if not sta_if.isconnected():              # si no existe conexión...
        sta_if.active(True)                   # activa el interfaz STA del ESP32
        sta_if.connect(SSID, PASSWORD)        # inicia la conexión con el AP
        print('Conectando a la red', SSID +"...")
        while not sta_if.isconnected():           # ...si no se ha establecido la conexión...
            pass                                  # ...repite el bucle...
    print('Configuración de red (IP/netmask/gw/DNS):', sta_if.ifconfig())

do_connect("StevenOr","1026591258")    # DESCOMENTAR Y PONER nombre/clave_de_red RED PARA EJECUTAR
#____________________________________________________________________________________________________________

# OBTENCIÓN DESDE INTERNET DE NTP - NETWORK TIME PROTOCOL
import ntptime          #NTP-time (obtenida desde pool.ntp.org)
ntptime.settime()       #https://github.com/micropython/micropython/blob/master/ports/esp8266/modules/ntptime.py
#____________________________________________________________________________________________________________

# SINCRONIZACIÓN DEL RELOJ INTERNO E IMPRESIÓN DE FECHA Y HORA
from machine import RTC
(year, month, mday, week_of_year, hour, minute, second, milisecond)=RTC().datetime()
RTC().init((year, month, mday, week_of_year, hour+2, minute, second, milisecond))   # GMT corrección. GMT+2 (ESPAÑA)

print ("Fecha: {:02d}/{:02d}/{}".format(RTC().datetime()[2],
                                        RTC().datetime()[1],
                                        RTC().datetime()[0]))

print ("Hora: {:02d}:{:02d}:{:02d}".format(RTC().datetime()[4],
                                           RTC().datetime()[5],
                                           RTC().datetime()[6]))
