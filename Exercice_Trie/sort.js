const persons = [
    {
        firstname: "Eloise",
        lastname: "Boyer",
        age: 12
    },
    {
        firstname: "Testou",
        lastname: "Rochard",
        age: 20
    },
    {
        firstname: "Didier",
        lastname: "Douille",
        age: 50
    },
    {
        firstname: "AnabelleA",
        lastname: "Nasri",
        age: 19
    }
];

function sortArrayOfObjectByColumnName(arrayOfElement, columnName, isAscending = true) {
    const arrayLength = arrayOfElement.length;

    for (let nbElementToExclude = 0; nbElementToExclude < arrayLength; nbElementToExclude++) {
        const nbElementToSort = arrayLength - nbElementToExclude - 1;
        for (let index = 0; index < nbElementToSort; index++) {
            isAscending ? compareAscending(arrayOfElement, index, columnName) : compareDescending(arrayOfElement, index, columnName);
        }
    }   
    return(arrayOfElement);
  }

function compareAscending(arrayOfElement, index, columnName) {
    if (arrayOfElement[index][columnName] > arrayOfElement[index + 1][columnName]) {
        swapToNext(arrayOfElement, index);
    }
}

function compareDescending(arrayOfElement, index, columnName) {
    if (arrayOfElement[index][columnName] < arrayOfElement[index + 1][columnName]) {
        swapToNext(arrayOfElement, index);
    }
}

function swapToNext(arrayOfElement, index) {
    let tmp = arrayOfElement[index];
    arrayOfElement[index] = arrayOfElement[index + 1];
    arrayOfElement[index + 1] = tmp;
}
