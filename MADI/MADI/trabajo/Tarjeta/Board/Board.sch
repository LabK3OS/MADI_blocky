EESchema Schematic File Version 4
EELAYER 30 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title ""
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L Connector:Conn_01x04_Female J2
U 1 1 5EC0471E
P 3400 3100
F 0 "J2" H 3292 2675 50  0000 C CNN
F 1 "NeoPixel" H 3292 2766 50  0000 C CNN
F 2 "Connector_PinHeader_2.54mm:PinHeader_1x04_P2.54mm_Vertical" H 3400 3100 50  0001 C CNN
F 3 "~" H 3400 3100 50  0001 C CNN
	1    3400 3100
	-1   0    0    1   
$EndComp
NoConn ~ 3600 3200
$Comp
L Connector:Conn_01x02_Female J3
U 1 1 5EC11998
P 3400 2550
F 0 "J3" H 3292 2225 50  0000 C CNN
F 1 "BUZZER" H 3292 2316 50  0000 C CNN
F 2 "Connector_PinHeader_2.54mm:PinHeader_1x02_P2.54mm_Vertical" H 3400 2550 50  0001 C CNN
F 3 "~" H 3400 2550 50  0001 C CNN
	1    3400 2550
	-1   0    0    1   
$EndComp
$Comp
L Connector:Conn_01x04_Female J5
U 1 1 5EC03BB9
P 6850 2850
F 0 "J5" H 6878 2826 50  0000 L CNN
F 1 "HC-SR04" H 6878 2735 50  0000 L CNN
F 2 "Connector_PinHeader_2.54mm:PinHeader_1x04_P2.54mm_Vertical" H 6850 2850 50  0001 C CNN
F 3 "~" H 6850 2850 50  0001 C CNN
	1    6850 2850
	1    0    0    -1  
$EndComp
NoConn ~ 4700 2850
NoConn ~ 4700 2750
NoConn ~ 4700 2650
NoConn ~ 4700 2550
NoConn ~ 4700 3150
NoConn ~ 4700 3250
$Comp
L Connector:Conn_01x10_Female J1
U 1 1 5EC2BF9A
P 3350 4000
F 0 "J1" H 3242 3275 50  0000 C CNN
F 1 "TouchPad" H 3242 3366 50  0000 C CNN
F 2 "Connector_PinHeader_2.54mm:PinHeader_1x10_P2.54mm_Vertical" H 3350 4000 50  0001 C CNN
F 3 "~" H 3350 4000 50  0001 C CNN
	1    3350 4000
	-1   0    0    1   
$EndComp
NoConn ~ 4700 4350
NoConn ~ 4700 4250
NoConn ~ 5700 4350
NoConn ~ 5700 4250
NoConn ~ 4700 3950
NoConn ~ 5700 2750
NoConn ~ 5700 2850
NoConn ~ 5700 3050
NoConn ~ 5700 3150
NoConn ~ 5700 3350
$Comp
L Connector:Conn_01x02_Female J6
U 1 1 5EC630B1
P 5250 1950
F 0 "J6" H 5278 1926 50  0000 L CNN
F 1 "Alimentacion 5V Externa" H 5278 1835 50  0000 L CNN
F 2 "Connector_PinHeader_2.54mm:PinHeader_1x02_P2.54mm_Vertical" H 5250 1950 50  0001 C CNN
F 3 "~" H 5250 1950 50  0001 C CNN
	1    5250 1950
	1    0    0    -1  
$EndComp
Wire Wire Line
	5850 3750 5700 3750
NoConn ~ 5700 3250
$Comp
L power:GND #PWR0101
U 1 1 5ECF0132
P 6600 2400
F 0 "#PWR0101" H 6600 2150 50  0001 C CNN
F 1 "GND" H 6605 2227 50  0000 C CNN
F 2 "" H 6600 2400 50  0001 C CNN
F 3 "" H 6600 2400 50  0001 C CNN
	1    6600 2400
	1    0    0    -1  
$EndComp
Wire Wire Line
	6600 2400 6750 2400
Text GLabel 6650 2250 0    50   Input ~ 0
GND
Wire Wire Line
	6750 2400 6750 2250
Wire Wire Line
	6750 2250 6650 2250
Text GLabel 3650 2550 2    50   Input ~ 0
GND
Wire Wire Line
	3650 2550 3600 2550
Text GLabel 4600 4150 0    50   Input ~ 0
GND
Wire Wire Line
	4700 4150 4600 4150
Text GLabel 4600 4450 0    50   Input ~ 0
GND
Wire Wire Line
	4600 4450 4700 4450
$Comp
L Board-rescue:ESP32_THING_W_ANT_KEEPOUT-SparkFun-Boards B1
U 1 1 5EBFF6FD
P 5200 3550
F 0 "B1" H 5200 4910 45  0000 C CNN
F 1 "ESP32_THING_W_ANT_KEEPOUT" H 5200 4826 45  0000 C CNN
F 2 "ESP32_THING" H 5200 4750 20  0001 C CNN
F 3 "" H 5200 3550 50  0001 C CNN
F 4 "DEV-13907" H 5200 4731 60  0000 C CNN "Campo4"
	1    5200 3550
	1    0    0    -1  
$EndComp
Text GLabel 3750 3100 2    50   Input ~ 0
GND
Wire Wire Line
	3750 3100 3600 3100
Text GLabel 5800 2550 2    50   Input ~ 0
GND
Wire Wire Line
	5700 2550 5800 2550
Text GLabel 6550 2750 0    50   Input ~ 0
GND
Wire Wire Line
	6550 2750 6650 2750
Text GLabel 4950 2050 0    50   Input ~ 0
GND
Wire Wire Line
	4950 2050 5050 2050
Text GLabel 5800 4450 2    50   Input ~ 0
GND
Text GLabel 5800 4150 2    50   Input ~ 0
GND
Wire Wire Line
	5700 4150 5800 4150
Wire Wire Line
	5700 4450 5800 4450
Text GLabel 5850 2650 2    50   Input ~ 0
SDA
Wire Wire Line
	5850 2650 5700 2650
Text GLabel 5800 2950 2    50   Input ~ 0
SCL
Wire Wire Line
	5800 2950 5700 2950
Text GLabel 4600 4050 0    50   Input ~ 0
VCC_3
Text GLabel 5800 4050 2    50   Input ~ 0
VCC_3
Wire Wire Line
	5700 4050 5800 4050
Wire Wire Line
	4600 4050 4700 4050
Wire Wire Line
	6600 3350 6700 3350
Text GLabel 6600 3350 0    50   Input ~ 0
VCC_3
Wire Wire Line
	6600 3550 6700 3550
Text GLabel 6600 3550 0    50   Input ~ 0
SCL
Wire Wire Line
	6600 3650 6700 3650
Text GLabel 6600 3650 0    50   Input ~ 0
SDA
Wire Wire Line
	6600 3450 6700 3450
Text GLabel 6600 3450 0    50   Input ~ 0
GND
NoConn ~ 6700 4050
NoConn ~ 6700 3950
NoConn ~ 6700 3850
NoConn ~ 6700 3750
$Comp
L Connector:Conn_01x08_Female J4
U 1 1 5EC0084F
P 6900 3650
F 0 "J4" H 6928 3626 50  0000 L CNN
F 1 "MPU6050" H 6928 3535 50  0000 L CNN
F 2 "Connector_PinHeader_2.54mm:PinHeader_1x08_P2.54mm_Vertical" H 6900 3650 50  0001 C CNN
F 3 "~" H 6900 3650 50  0001 C CNN
	1    6900 3650
	1    0    0    -1  
$EndComp
Text GLabel 4950 1950 0    50   Input ~ 0
VCC_5
Wire Wire Line
	4950 1950 5050 1950
Text GLabel 6600 3050 0    50   Input ~ 0
VCC_5
Wire Wire Line
	6600 3050 6650 3050
Text GLabel 3750 3000 2    50   Input ~ 0
VCC_5
Wire Wire Line
	3750 3000 3600 3000
Text GLabel 3750 2900 2    50   Input ~ 0
Neo
Text GLabel 4600 3450 0    50   Input ~ 0
Neo
Wire Wire Line
	3600 2900 3750 2900
Wire Wire Line
	4600 3450 4700 3450
Text GLabel 4600 3350 0    50   Input ~ 0
BUZZER
Text GLabel 3650 2450 2    50   Input ~ 0
BUZZER
Wire Wire Line
	4600 3350 4700 3350
Wire Wire Line
	3600 2450 3650 2450
Text GLabel 3700 3500 2    50   Input ~ 0
Touch9
Text GLabel 3700 3600 2    50   Input ~ 0
Touch8
Text GLabel 3700 3700 2    50   Input ~ 0
Touch7
Text GLabel 3700 3800 2    50   Input ~ 0
Touch6
Text GLabel 3700 3900 2    50   Input ~ 0
Touch5
Text GLabel 3700 4000 2    50   Input ~ 0
Touch4
Wire Wire Line
	3550 3500 3700 3500
Wire Wire Line
	3550 3600 3700 3600
Wire Wire Line
	3550 3700 3700 3700
Wire Wire Line
	3550 3800 3700 3800
Wire Wire Line
	3550 3900 3700 3900
Wire Wire Line
	3550 4000 3700 4000
Text GLabel 4600 2950 0    50   Input ~ 0
Touch9
Text GLabel 4600 3050 0    50   Input ~ 0
Touch8
Text GLabel 4600 3550 0    50   Input ~ 0
Touch7
Text GLabel 4600 3650 0    50   Input ~ 0
Touch6
Text GLabel 4600 3750 0    50   Input ~ 0
Touch5
Text GLabel 4600 3850 0    50   Input ~ 0
Touch4
Wire Wire Line
	4600 2950 4700 2950
Wire Wire Line
	4600 3050 4700 3050
Wire Wire Line
	4600 3550 4700 3550
Wire Wire Line
	4600 3650 4700 3650
Wire Wire Line
	4600 3750 4700 3750
Wire Wire Line
	4600 3850 4700 3850
Text GLabel 5850 3450 2    50   Input ~ 0
Touch3
Text GLabel 5850 3550 2    50   Input ~ 0
Touch2
Text GLabel 5850 3650 2    50   Input ~ 0
Touch1
Text GLabel 5850 3750 2    50   Input ~ 0
Touch0
Text GLabel 3700 4100 2    50   Input ~ 0
Touch0
Text GLabel 3700 4200 2    50   Input ~ 0
Touch1
Text GLabel 3700 4300 2    50   Input ~ 0
Touch2
Text GLabel 3700 4400 2    50   Input ~ 0
Touch3
Wire Wire Line
	3550 4100 3700 4100
Wire Wire Line
	3550 4200 3700 4200
Wire Wire Line
	3550 4300 3700 4300
Wire Wire Line
	3550 4400 3700 4400
Wire Wire Line
	5850 3450 5700 3450
Wire Wire Line
	5850 3550 5700 3550
Wire Wire Line
	5850 3650 5700 3650
Text GLabel 6550 2850 0    50   Input ~ 0
ECHO
Text GLabel 6550 2950 0    50   Input ~ 0
TRIG
Text GLabel 5850 3850 2    50   Input ~ 0
ECHO
Text GLabel 5850 3950 2    50   Input ~ 0
TRIG
Wire Wire Line
	6550 2850 6650 2850
Wire Wire Line
	6550 2950 6650 2950
Wire Wire Line
	5700 3850 5850 3850
Wire Wire Line
	5700 3950 5850 3950
$EndSCHEMATC
