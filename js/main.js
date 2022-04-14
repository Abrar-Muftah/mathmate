let arrayfibo = [];

const MatheMate = {
  addition: function (query1, query2) {
    return query1 + query2;
  },
  subtraction: function (query1, query2) {
    return query1 - query2;
  },
  multiplication: function (query1, query2) {
    return query1 * query2;
  },
  division: function (query1, query2) {
    return query1 / query2;
  },
  power: function (query1, query2) {
    return query1 ** query2;
  },
  percantage: function (query1, query2) {
    return (query1 / 100) * query2;
  },
  rest: function (query1, query2) {
    return query1 % query2;
  },
  fibonacci: function (query1) {
    const number = parseInt(query1);
    let n1 = 0,
      n2 = 1,
      nextTerm;

    nextTerm = n1 + n2;
    while (nextTerm < number) {
      // print the next term
      // console.log(nextTerm);
      n1 = n2;
      n2 = nextTerm;
      nextTerm = n1 + n2;
      fibnums.push(nextTerm);
    }
    // return nextTerm;
  },
  fibo: function (totfibo) {
    let antwoordfibo = 0;
    let arrayfibo = [1, 1];
    console.log(totfibo);
    for (let i = 0; antwoordfibo < totfibo; i++) {
      let nummerfibo1 = arrayfibo[i];
      let nummerfibo2 = arrayfibo[i + 1];
      antwoordfibo = nummerfibo1 + nummerfibo2;
      arrayfibo[arrayfibo.length] = antwoordfibo;
      console.log(arrayfibo);
    }
    return arrayfibo;
  },
  prime: function (num) {
    for (let i = 0; i <= num; i++) {
      let input = 0;

      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          input = 1;
        }
      }

      //   if number greater than 1 and not divisible by other numbers
      if (i > 1 && input == 0) {
        console.log(i);
      }
    }
  },
  tafel: function (to, table) {
    let tabelList = [];
    for (let i = 0; i <= to; i++) {
      let ans = (table[i] = i * table);
      // let ans = [i] ** tabel;
      tabelList.push(ans);
    }
    return tabelList;
  },
  breuken: function (query1) {
    for (let i = 1; i <= query1; i++) {
      let ans = "1 / " + i + " = " + MatheMate.division(1, i);

      arrayAns.push(ans);
    }
    return arrayAns;
  },
  evenoneven: function (num) {
    if (num % 2 == 0) {
      num = " even getal";
    } else {
      num = " oneven getal";
    }
    return num;
  },
  romanizer: function (num) {
    if (isNaN(num)) return NaN;
    let digits = String(+num).split(""),
      key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
      roman = "",
      i = 3;
    while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
  },
};


document.getElementById("antwoordfibobutton").addEventListener("click", fibo);
// const MathComplex = {
//   fibo: function (totfibo) {
//     let antwoordfibo = 0;
//     let arrayfibo = [1, 1];
//     console.log(totfibo);
//     for (let i = 0; antwoordfibo < totfibo; i++) {
//       let nummerfibo1 = arrayfibo[i];
//       let nummerfibo2 = arrayfibo[i + 1];
//       antwoordfibo = nummerfibo1 + nummerfibo2;
//       arrayfibo[arrayfibo.length] = antwoordfibo;
//       console.log(arrayfibo);
//     }
//     return arrayfibo;
//   },
// };

// console.log(MatheMate.fibonacci(50));

// MatheMate.fibonacci(50);

// fibnums.forEach((e) => {
//   console.log(e);
// });

// addition
// subtraction
// division
// multiplication
// power
// percantage
// rest
// fibonacci
// tafel
// breuken
// evenoneven
// romanizer
// prime
