$(function() {
	console.log("DOM załadowany");
    function randomString() {
        var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
        var str = '';
        var i = 0;
        for (i = 0; i < 10; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        };
        return str;
    };
    function Column(name) {
        var self = this; // przyda się dla funkcji zagnieżdżonych

        this.id = randomString();
        this.name = name;
        this.$element = createColumn();

        function createColumn() {
            var $column = $('<div>').addClass('column');
            var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
            var $columnCardList = $('<ul>').addClass('column-card-list');
            var $columnDelete = $('<button>').addClass('btn-delete').text('x');
            var $columnAddCard = $('<button>').addClass('add-card').text('Dodaj kartę');

            $columnDelete.click(function() {
                self.removeColumn();
            });
            //Dodawanie karteczki po kliknięciu w przycisk:
            $columnAddCard.click(function() {
                    self.addCard(new Card(prompt("Wpisz nazwę karty")));
            });
        };
        //PODPINANIE ZDARZEN
  }
})