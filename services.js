exports.addId = (obj) => {
    var i = 0;

    obj.foreach(element => {    //función para los arrays (foreach) y hace lo mismo que un for :)
        element.id = ++i;
    });

    return obj;
}