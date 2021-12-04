const fs = require('fs');

part1 = () => {

    let text = fs.readFileSync('4.txt','utf8');
    text = text.split('\r\n');

    let bingoNumbers = text[0].split(',');
    // console.log(bingoNumbers);

    // Construct the bingo boards
    let boards = [];
    let maxBoards = (text.length-1) / 6;
    for (let i=0; i<maxBoards; i++) {
        let curBoard = [];
        for(let j=0; j<5; j++) {
            curBoard.push([]);
            let curLine = text[i*6+j + 2].split(' ').filter(n => n);
            for (let k=0; k<5; k++) {
                curBoard[j].push(parseInt(curLine[k]));
            }
        }
        boards.push(curBoard);
    }
    // console.log(boards);

    let i = 0;
    let solve = [];
    let solved = false;

    while (!solved) {
        for (let j=0; j<maxBoards; j++) {
            let curBoard = boards[j].join().split(',');
            let curNum = bingoNumbers[i];
            // change the bingo board if the number is in the board
            if (curBoard.includes(curNum)) {
                index = curBoard.indexOf(curNum);
                boards[j][Math.floor((index) / 5)][(index) % 5] = -1;
            }
            // check for wins
            for (let k=0; k<5; k++) {
                // vertical
                if (boards[j][0][k] == -1 && boards[j][1][k] == -1 && boards[j][2][k] == -1 && boards[j][3][k] == -1 && boards[j][4][k] == -1) {
                    console.log('bingo on vertical ' + (k+1) + ' in board ' + (j+1) + ' in round ' + i);
                    solved = true;
                    // console.log(boards[j]);
                    solve.push(j,k,0); // 0 for vertical
                }
                // horizontal
                if (boards[j][k][0] == -1 && boards[j][k][1] == -1 && boards[j][k][2] == -1 && boards[j][k][3] == -1 && boards[j][k][4] == -1) {
                    console.log('bingo on horizontal ' + (k+1) + ' in board ' + (j+1) + ' in round ' + i);
                    solved = true;
                    // console.log(boards[j]);
                    solve.push(j,k,1); // 1 for horizontal
                }
            }
        }
        i++;
    }

    console.log(boards[solve[0]]);
    let sum = 0;
    for (let j=0; j<5; j++) {
        for (let k=0; k<5; k++) {
            if (boards[solve[0]][j][k] != -1) {
                sum += boards[solve[0]][j][k];
            }
        }
    }
    console.log(sum, sum * 24); // 15792
}

part2 = () => {
    
    let text = fs.readFileSync('4x.txt','utf8');
    text = text.split('\r\n');


};

part1();