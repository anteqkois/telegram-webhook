import { telegramBotClientAnteq } from "./clients/anteq";

telegramBotClientAnteq
  .on("message", (ctx) => {
    console.log(ctx);
  })
  .catch(console.log);

// telegramBotClientAnteq.telegram.getWebhookInfo().then((res) => {
//   console.log(res);
// });

telegramBotClientAnteq.launch().catch((err) => console.log(err));
