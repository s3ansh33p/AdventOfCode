const fs = require('fs');

part1 = () => {

    let text = fs.readFileSync('3x.txt','utf8');
    text = text.split('\r\n');

    let solved = '';
    let epsilon = '';
    for (let i = 0; i < text[0].length; i++) {
        let curSolve = 0;
        for (let j=0; j < text.length; j++) {
            if (text[j][i] === '1') {
                curSolve++;
            } else {
                curSolve--;
            }
        }
        console.log(curSolve)
        if (curSolve > 0) {
            solved += '1';
            epsilon += '0';
        } else {
             solved += '0';
             epsilon += '1';
        }
    }

    console.log(solved, parseInt(solved, 2), epsilon, parseInt(epsilon, 2), parseInt(solved, 2) * parseInt(epsilon, 2)); // 101000101001 2601 010111010110 1494 3885894
}

part2 = () => {

    let sourceText = fs.readFileSync('3.txt','utf8');
    text = sourceText.split('\r\n');

    let oxygenRating = '';
    let CRating = '';

    let solved = false;
    let bitDepth = 0;
    while (!solved) {

        // complete first pass on bit 1
        let solveBit = (oxygenRating.length !== 0) ? '0' : '1';
        let curSolve = 0;
        for (let j=0; j < text.length; j++) {
            if (text[j][bitDepth] === solveBit) {
                curSolve++;
            } else {
                curSolve--;
            }
        }

        console.log(curSolve)

        // get remaining bytes
        let remainingBytes = [];
        if (curSolve > 0 || (curSolve == 0 && oxygenRating.length === 0)) {
            for (let j=0; j < text.length; j++) {
                if (text[j][bitDepth] === '1') {
                    remainingBytes.push(text[j]);
                }
            }
        } else {
            for (let j=0; j < text.length; j++) {
                if (text[j][bitDepth] === '0') {
                    remainingBytes.push(text[j]);
                }
            }
        }

        // set new text
        text = remainingBytes;
        console.log(remainingBytes);
        if (remainingBytes.length < 2) {
            if (oxygenRating === '') {
                oxygenRating = remainingBytes[0];
                bitDepth = 0;
                text = sourceText.split('\r\n');
            } else {
                CRating = remainingBytes[0];
                solved = true;
            }
        } else {
            bitDepth++;
        }

    }

    console.log(oxygenRating, CRating, parseInt(oxygenRating, 2), parseInt(CRating, 2), parseInt(oxygenRating, 2) * parseInt(CRating, 2)); // 111010111111 010010000111 3775 1159 4375225

}

part2();