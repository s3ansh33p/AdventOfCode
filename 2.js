const fs = require('fs');

part1 = () => {

    let text = fs.readFileSync('2.txt','utf8');
    text = text.split('\r\n');

    let horizontal = 0;
    let depth = 0;

    for(let i = 0; i < text.length; i++){
        if (text[i].slice(0,7) == "forward") {
            horizontal += parseInt(text[i].slice(8));
        } else if (text[i].slice(0,2) == "up") {
            depth -= parseInt(text[i].slice(3));
        } else if (text[i].slice(0,4) == "down") {
            depth += parseInt(text[i].slice(5));
        }
    }

    console.log(depth, horizontal, depth*horizontal); // 872 2003 1746616

}

part2 = () => {
    
    let text = fs.readFileSync('2.txt','utf8');
    text = text.split('\r\n');

    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    for(let i = 0; i < text.length; i++){
        if (text[i].slice(0,7) == "forward") {
            horizontal += parseInt(text[i].slice(8));
            depth += (aim * parseInt(text[i].slice(8)));
        } else if (text[i].slice(0,2) == "up") {
            aim -= parseInt(text[i].slice(3));
        } else if (text[i].slice(0,4) == "down") {
            aim += parseInt(text[i].slice(5));
        }
    }

    console.log(aim, depth, horizontal, depth*horizontal); // 872 869681 2003 1741971043

};

part2();