function factNum(a) {

    let fact = 1,
    format = "",
    mul;

    for (let i = a; i >= 1; i--) {

        mul = fact * i;
        fact = mul;
        format += i + (i > 1 ? " X " : " = ");

    }

    return format += fact;

}

const output = factNum(4);
console.log(output);
