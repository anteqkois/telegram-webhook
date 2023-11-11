import { Telegraf } from "telegraf";

export const telegramBotClientMxd = new Telegraf(
  process.env.TELEGRAM_BOT_MXD_TOKEN_ACCESS || "",
  {
    handlerTimeout: 20_000,
  }
);