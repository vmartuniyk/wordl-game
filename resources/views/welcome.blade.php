<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <script src="{{ mix('js/app.js') }}"></script>
    <title>Try Cat</title>
</head>
<body>
    <main
        x-data="game"
        @keyup.window="onKeyPress($event.key)"
    >
        <div id="game">
            <template x-for="row in board">
                <div class="row">
                    <template x-for="tile in row">
                        <div class="tile" :class="tile.status" x-text="tile.letter"></div>
                    </template>
                </div>
            </template>
        </div>
        <output x-text="message"></output>
    </main>
</body>
</html>
