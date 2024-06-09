import mqtt, { MqttClient } from "mqtt";
import { handleMessage } from "./messageHandlers";
import dotenv from "dotenv";

dotenv.config();
const urlBrokerMqtt = 'mqtt://100.28.74.43';
if (!urlBrokerMqtt) {
  console.error("URL_BROKER_MQTT environment variable is not defined.");
  process.exit(1);
}
const client = mqtt.connect(urlBrokerMqtt);

client.on("connect", () => {
  console.log("Connected to MQTT Broker");
});

client.on("message", async (topic, message) => {
  handleMessage(topic, message);
});

export default client;