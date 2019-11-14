
var sodokuInputs = document.querySelectorAll("input");
for (var i = 0; i < sodokuInputs.length; i++) {
    sodokuInputs[i].onchange = checkAll;
}

function checkAll(event) {
    var num = event.target.value
    resetColors();
    checkRowErrors();
    checkColumnErrors();
    checkSectionErrors();
    if (!(event.target.classList.contains("red-border"))) {
        event.target.classList.add("cyan-border");
    }
}

function checkValue(value) {
    var num = Number(value);
    return isNaN(num) || ((num > 9 || num < 1) && value != "");
}

function resetColors() {
    for (var i = 0; i < sodokuInputs.length; i++) {
        sodokuInputs[i].classList.remove("red-border");
        sodokuInputs[i].classList.remove("cyan-border");
    }
}

function checkRowErrors() {
    console.log('checking rows ...')
    //for all rows
    for (var r = 0; r < 9; r++) {
        var row = document.getElementsByClassName("row-" + r);
        //for all elements on row
        for (var i = 0; i < 8; i++) {
            if (checkValue(row[i].value)) {
                row[i].classList.add("red-border");
            } else {
                for (var j = i + 1; j < 9; j++) {
                    if (checkValue(row[j].value)) {
                        row[j].classList.add("red-border");
                    } else {
                        if (row[i].value == row[j].value && row[i].value != "") {
                            row[i].classList.add("red-border");
                            row[j].classList.add("red-border");
                        }
                    }
                }
            }
        }
    }
}

function checkColumnErrors() {
    console.log('checking columns ...')
    //for all Columns
    for (var c = 0; c < 9; c++) {
        var column = document.getElementsByClassName("col-" + c);
        //for all elements on column
        for (var i = 0; i < 8; i++) {
            if (checkValue(column[i].value)) {
                column[i].classList.add("red-border");
            } else {
                for (var j = i + 1; j < 9; j++) {
                    if (checkValue(column[j].value)) {
                        column[j].classList.add("red-border");
                    } else {
                        if (column[i].value == column[j].value && column[i].value != "") {
                            column[i].classList.add("red-border");
                            column[j].classList.add("red-border");
                        }
                    }
                }
            }
        }
    }
}

function checkSectionErrors() {
    console.log('checking sections ...');
    //for all sections
    for (var s = 0; s < 9; s++) {
        var section = document.getElementsByClassName("sec-" + s);
        //for all elements on section
        for (var i = 0; i < 8; i++) {
            if (checkValue(section[i].value)) {
                section[i].classList.add("red-border");
            } else {
                for (var j = i + 1; j < 9; j++) {
                    if (checkValue(section[j].value)) {
                        section[j].classList.add("red-border");
                    } else {
                        if (section[i].value == section[j].value && section[i].value != "") {
                            section[i].classList.add("red-border");
                            section[j].classList.add("red-border");
                        }
                    }
                }
            }
        }
    }
}
