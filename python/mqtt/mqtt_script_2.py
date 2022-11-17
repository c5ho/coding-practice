import paho.mqtt.client as mqtt
import time
# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):

  print("Connected with result code "+str(rc))
  # Subscribing in on_connect() means that if we lose the connection and
  # reconnect then subscriptions will be renewed.
  client.subscribe("etec224_mqtt_test/")
  global Connected
  Connected = True

Connected = False
client = mqtt.Client()
client.on_connect = on_connect
client.connect("broker.emqx.io", 1883, 60)

client.loop_start()
while Connected!= True:
  #Wait Here
  time.sleep(0.1)
try:
  while True:
    value = input('Enter Message : ')
    client.publish('etec224_mqtt_test/', value)

except KeyboardInterrupt:
  client.disconnect()
  client.loop_stop()