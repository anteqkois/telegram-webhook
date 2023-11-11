import "dotenv/config";
import { Telegraf } from "telegraf";

export const telegramBotClientAnteq = new Telegraf(process.env.TELEGRAM_BOT_ANTEQ_TOKEN_ACCESS || "", {
  handlerTimeout: 20_000,
});
