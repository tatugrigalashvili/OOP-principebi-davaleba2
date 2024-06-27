class Rectangle {
    height = "";
    width = "";

    set_height() {
        this.height = 5+"cm"+ "<br>"
    }
    get_height() {
        document.write(this.height)
    }

    set_width() {
        this.width = 3 + "cm"
    }
    get_width() {
        document.write(this.width)
    }
}

var object= new Rectangle()

object.set_height()
object.get_height()

object.set_width()
object.get_width()