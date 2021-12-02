const fs = require('fs');

part1 = () => {

    let text = fs.readFileSync('1x.txt','utf8');
    text = text.split('\r\n');

    let prev = parseInt(text[0]);
    let count = 0;
    for (let i = 1; i < text.length; i++) {
        if (text[i] > prev) count++;
        console.log(prev, text[i], count);
        prev = parseInt(text[i]);
    };

    console.log(count); // 1655

}

part2 = () => {
    
    let text = fs.readFileSync('1.txt','utf8');
    text = text.split('\r\n');

    let prev = parseInt(text[2]);
    let prev2 = parseInt(text[1]);
    let prev3 = parseInt(text[0]);
    let count = 0;
    for (let i = 3; i < text.length; i++) {
        if ((parseInt(text[i]) + prev + prev2) > (prev + prev2 + prev3)) count++;
        console.log(prev, prev2, prev3, text[i], count);
        prev3 = prev2;
        prev2 = prev;
        prev = parseInt(text[i]);
    }

    console.log(count); // 1683

};

part2();