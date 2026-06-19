using System;
using System.Threading;
using System.Threading.Tasks;
using Telegram.Bot;
using Telegram.Bot.Polling;
using Telegram.Bot.Types;
using Telegram.Bot.Types.Enums;
using Telegram.Bot.Types.ReplyMarkups;


class Program
{
    private static string BotToken = "8550758942:AAFPS9KoEJ42_7QJKIEQqevZz176vHaydu8";
    private static TelegramBotClient? BotClient;

    static async Task Main(string[] args)
    {
        BotClient = new TelegramBotClient(BotToken);

        using var cts = new CancellationTokenSource();

        var receiverOptions = new ReceiverOptions
        {
            AllowedUpdates = Array.Empty<UpdateType>()
        };
        BotClient.StartReceiving(
            updateHandler: HandleUpdateAsync,
            errorHandler: HandlePollingErrorAsync,
            receiverOptions: receiverOptions,
            cancellationToken: cts.Token
        );


        var me = await BotClient.GetMe(cancellationToken: cts.Token);
        Console.WriteLine($"Бот @{me.Username} успішно запущений у VS Code! Натисніть Enter, щоб вийти.");
        Console.ReadLine();

        cts.Cancel();
    }

    static async Task HandleUpdateAsync(ITelegramBotClient botClient, Update update, CancellationToken cancellationToken)
    {
        if (update.Message is not { } message || message.Text is not { } messageText)
            return;

        long chatId = message.Chat.Id;
        Console.WriteLine($"Отримано повідомлення '{messageText}' у чаті {chatId}.");

        if (messageText.ToLower() == "/start" || messageText.ToLower() == "грати")
        {
            var inlineKeyboard = new InlineKeyboardMarkup(new[]
            {
                new []
                {
                    InlineKeyboardButton.WithUrl(
                        text: "Відкрити гру \"Вгадай Слово\"",
                        url: "https://ryeskevych-blip.github.io/guesstheword2/"
                    )
                }
            });


            await botClient.SendMessage(
                chatId: chatId,
                text: "Привіт! Ласкаво просимо до гри «Вгадай Слово». Натисніть кнопку нижче, щоб перейти на сайт і почати гру:",
                replyMarkup: inlineKeyboard,
                cancellationToken: cancellationToken
            );
        }
    }


    static Task HandlePollingErrorAsync(ITelegramBotClient botClient, Exception exception, CancellationToken cancellationToken)
    {
        Console.WriteLine($"Ошибка Telegram API:\n{exception.Message}");
        return Task.CompletedTask;
    }
}
