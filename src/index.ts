import fastify, { FastifyRequest } from "fastify";
import { Message } from "telegraf/typings/core/types/typegram";
import { telegramBotClientAnteq } from "./clients/anteq";

const webhookUrl = `${process.env.HOST_URL}/webhook`;
telegramBotClientAnteq.telegram.setWebhook(webhookUrl);

const PORT = +(process.env.PORT ?? 3000);

const app = fastify();

app.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

app.post("/webhook", async (request: FastifyRequest, reply) => {
  const body = request.body as any;

  if (body?.message?.text?.includes("/start")) {
    const message = body.message as Message;
    console.log("New /start call");
    console.log(body);

    const [_, token] = body.message.text.split(" ");
    console.log(token);

    await telegramBotClientAnteq.telegram.sendMessage(
      message.chat.id,
      "Your bot is successfuly connected ! 🚀"
    );
  } else {
    console.log("Webhook call");
    console.log(body);
  }

  reply.send({ status: "ok" });
});

const startFastify = () => {
  app.listen(
    {
      port: PORT,
      host: "0.0.0.0",
    },
    (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`[Fastify] Rest API listening at ${address}`);
    }
  );
};

startFastify();
