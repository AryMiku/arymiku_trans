app.service('singletonService', function () {
    this.text = "First Text";
    this.setText = function (text) {
        this.text = text;
    };
    this.getText = function () {
        return 5555;
    };


})