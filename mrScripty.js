var map = [
	['', '', ''],
	['', '', ''],
	['', '', '']
];

var playerWinCheck = function() {
	// call at the end of the player's turn to check if the player won
	if(map[0][0] == 'X' & map[0][1] == 'X' & map[0][2] == 'X') {
		turn(0);
		$('#turn').text('You WIN!');
	} else if(map[1][0] == 'X' & map[1][1] == 'X' & map[1][2] == 'X') {
		turn(0);
		$('#turn').text('You WIN!');
	} else if(map[2][0] == 'X' & map[2][1] == 'X' & map[2][2] == 'X') {
		turn(0);
		$('#turn').text('You WIN!');
	} else if(map[0][0] == 'X' & map[1][0] == 'X' & map[2][0] == 'X') {
		turn(0);
		$('#turn').text('You WIN!');
	} else if(map[0][1] == 'X' & map[1][1] == 'X' & map[2][1] == 'X') {
		turn(0);
		$('#turn').text('You WIN!');
	} else if(map[0][2] == 'X' & map[1][2] == 'X' & map[2][2] == 'X') {
		turn(0);
		$('#turn').text('You WIN!');
	} else if(map[0][0] == 'X' & map[1][1] == 'X' & map[2][2] == 'X') {
		turn(0);
		$('#turn').text('You WIN!');
	} else if(map[0][2] == 'X' & map[1][1] == 'X' & map[2][0] == 'X') {
		turn(0);
		$('#turn').text('You WIN!');
	} else if(map[0][0] != '' & map[0][1] != '' & map[0][2] != '' & map[1][0] != '' & map[1][1] != '' & map[1][2] != '' & map[2][0] != '' & map[2][1] != '' & map[2][2] != '') {
		turn(0);
		$('#turn').text('Tied!');
	} else {
		turn(2);
	};
};

var compWinCheck = function() {
	// call at the start of the player's turn to check if the computer already won
	if(map[0][0] == 'O' & map[0][1] == 'O' & map[0][2] == 'O') {
		turn(0);
		$('#turn').text('You LOSE!');
	} else if(map[1][0] == 'O' & map[1][1] == 'O' & map[1][2] == 'O') {
		turn(0);
		$('#turn').text('You LOSE!');
	} else if(map[2][0] == 'O' & map[2][1] == 'O' & map[2][2] == 'O') {
		turn(0);
		$('#turn').text('You LOSE!');
	} else if(map[0][0] == 'O' & map[1][0] == 'O' & map[2][0] == 'O') {
		turn(0);
		$('#turn').text('You LOSE!');
	} else if(map[0][1] == 'O' & map[1][1] == 'O' & map[2][1] == 'O') {
		turn(0);
		$('#turn').text('You LOSE!');
	} else if(map[0][2] == 'O' & map[1][2] == 'O' & map[2][2] == 'O') {
		turn(0);
		$('#turn').text('You LOSE!');
	} else if(map[0][0] == 'O' & map[1][1] == 'O' & map[2][2] == 'O') {
		turn(0);
		$('#turn').text('You LOSE!');
	} else if(map[0][2] == 'O' & map[1][1] == 'O' & map[2][0] == 'O') {
		turn(0);
		$('#turn').text('You LOSE!');
	} else if(map[0][0] != '' & map[0][1] != '' & map[0][2] != '' & map[1][0] != '' & map[1][1] != '' & map[1][2] != '' & map[2][0] != '' & map[2][1] != '' & map[2][2] != '') {
		turn(0);
		$('#turn').text('Tied!');
	} else {
		turn(1);
	};
};

var compute = function() {
	// check to see if the computer can complete a line
	if (map[0][0] == 'O' & map[0][1] == 'O' & map[0][2] == '') { //row checks
		map[0][2] = 'O';
		$('#three').text('O');
	} else if (map[0][0] == 'O' & map[0][2] == 'O' & map[0][1] == '') {
		map[0][1] = 'O';
		$('#two').text('O');
	} else if (map[0][1] == 'O' & map[0][2] == 'O' & map[0][0] == '') {
		map[0][0] = 'O';
		$('#one').text('O');
	} else if (map[1][0] == 'O' & map[1][1] == 'O' & map[1][2] == '') {
		map[1][2] = 'O';
		$('#six').text('O');
	} else if (map[1][0] == 'O' & map[1][2] == 'O' & map[1][1] == '') {
		map[1][1] = 'O';
		$('#five').text('O');
	} else if (map[1][1] == 'O' & map[1][2] == 'O' & map[1][0] == '') {
		map[1][0] = 'O';
		$('#four').text('O');
	} else if (map[2][0] == 'O' & map[2][1] == 'O' & map[2][2] == '') {
		map[2][2] = 'O';
		$('#nine').text('O');
	} else if (map[2][0] == 'O' & map[2][2] == 'O' & map[2][1] == '') {
		map[2][1] = 'O';
		$('#eight').text('O');
	} else if (map[2][1] == 'O' & map[2][2] == 'O' & map[2][0] == '') {
		map[2][0] = 'O';
		$('#seven').text('O');
	} else if (map[0][0] == 'O' & map[1][0] == 'O' & map[2][0] == '') { //column checks
		map[2][0] = 'O';
		$('#seven').text('O');
	} else if (map[0][0] == 'O' & map[2][0] == 'O' & map[1][0] == '') {
		map[1][0] = 'O';
		$('#four').text('O');
	} else if (map[1][0] == 'O' & map[2][0] == 'O' & map[0][0] == '') {
		map[0][0] = 'O';
		$('#one').text('O');
	} else if (map[0][1] == 'O' & map[1][1] == 'O' & map[2][1] == '') {
		map[2][1] = 'O';
		$('#eight').text('O');
	} else if (map[0][1] == 'O' & map[2][1] == 'O' & map[1][1] == '') {
		map[1][1] = 'O';
		$('#five').text('O');
	} else if (map[1][1] == 'O' & map[2][1] == 'O' & map[0][1] == '') {
		map[0][1] = 'O';
		$('#two').text('O');
	} else if (map[0][2] == 'O' & map[1][2] == 'O' & map[2][2] == '') {
		map[2][2] = 'O';
		$('#nine').text('O');
	} else if (map[0][2] == 'O' & map[2][2] == 'O' & map[1][2] == '') {
		map[1][2] = 'O';
		$('#six').text('O');
	} else if (map[1][2] == 'O' & map[2][2] == 'O' & map[0][2] == '') {
		map[0][2] = 'O';
		$('#three').text('O');
	} else if (map[0][0] == 'O' & map[1][1] == 'O' & map[2][2] == '') { //diagonal checks
		map[2][2] = 'O';
		$('#nine').text('O');
	} else if (map[0][0] == 'O' & map[2][2] == 'O' & map[1][1] == '') {
		map[1][1] = 'O';
		$('#five').text('O');
	} else if (map[1][1] == 'O' & map[2][2] == 'O' & map[0][0] == '') {
		map[0][0] = 'O';
		$('#one').text('O');
	} else if (map[0][2] == 'O' & map[1][1] == 'O' & map[2][0] == '') {
		map[2][0] = 'O';
		$('#seven').text('O');
	} else if (map[0][2] == 'O' & map[2][0] == 'O' & map[1][1] == '') {
		map[1][1] = 'O';
		$('#five').text('O');
	} else if (map[1][1] == 'O' & map[2][0] == 'O' & map[0][2] == '') {
		map[0][2] = 'O';
		$('#three').text('O');
	// else check to make sure the player isn't about to complete a line, if so block them
	} else if (map[0][0] == 'X' & map[0][1] == 'X' & map[0][2] == '') { //row checks
		map[0][2] = 'O';
		$('#three').text('O');
	} else if (map[0][0] == 'X' & map[0][2] == 'X' & map[0][1] == '') {
		map[0][1] = 'O';
		$('#two').text('O');
	} else if (map[0][1] == 'X' & map[0][2] == 'X' & map[0][0] == '') {
		map[0][0] = 'O';
		$('#one').text('O');
	} else if (map[1][0] == 'X' & map[1][1] == 'X' & map[1][2] == '') {
		map[1][2] = 'O';
		$('#six').text('O');
	} else if (map[1][0] == 'X' & map[1][2] == 'X' & map[1][1] == '') {
		map[1][1] = 'O';
		$('#five').text('O');
	} else if (map[1][1] == 'X' & map[1][2] == 'X' & map[1][0] == '') {
		map[1][0] = 'O';
		$('#four').text('O');
	} else if (map[2][0] == 'X' & map[2][1] == 'X' & map[2][2] == '') {
		map[2][2] = 'O';
		$('#nine').text('O');
	} else if (map[2][0] == 'X' & map[2][2] == 'X' & map[2][1] == '') {
		map[2][1] = 'O';
		$('#eight').text('O');
	} else if (map[2][1] == 'X' & map[2][2] == 'X' & map[2][0] == '') {
		map[2][0] = 'O';
		$('#seven').text('O');
	} else if (map[0][0] == 'X' & map[1][0] == 'X' & map[2][0] == '') { //column checks
		map[2][0] = 'O';
		$('#seven').text('O');
	} else if (map[0][0] == 'X' & map[2][0] == 'X' & map[1][0] == '') {
		map[1][0] = 'O';
		$('#four').text('O');
	} else if (map[1][0] == 'X' & map[2][0] == 'X' & map[0][0] == '') {
		map[0][0] = 'O';
		$('#one').text('O');
	} else if (map[0][1] == 'X' & map[1][1] == 'X' & map[2][1] == '') {
		map[2][1] = 'O';
		$('#eight').text('O');
	} else if (map[0][1] == 'X' & map[2][1] == 'X' & map[1][1] == '') {
		map[1][1] = 'O';
		$('#five').text('O');
	} else if (map[1][1] == 'X' & map[2][1] == 'X' & map[0][1] == '') {
		map[0][1] = 'O';
		$('#two').text('O');
	} else if (map[0][2] == 'X' & map[1][2] == 'X' & map[2][2] == '') {
		map[2][2] = 'O';
		$('#nine').text('O');
	} else if (map[0][2] == 'X' & map[2][2] == 'X' & map[1][2] == '') {
		map[1][2] = 'O';
		$('#six').text('O');
	} else if (map[1][2] == 'X' & map[2][2] == 'X' & map[0][2] == '') {
		map[0][2] = 'O';
		$('#three').text('O');
	} else if (map[0][0] == 'X' & map[1][1] == 'X' & map[2][2] == '') { //diagonal checks
		map[2][2] = 'O';
		$('#nine').text('O');
	} else if (map[0][0] == 'X' & map[2][2] == 'X' & map[1][1] == '') {
		map[1][1] = 'O';
		$('#five').text('O');
	} else if (map[1][1] == 'X' & map[2][2] == 'X' & map[0][0] == '') {
		map[0][0] = 'O';
		$('#one').text('O');
	} else if (map[0][2] == 'X' & map[1][1] == 'X' & map[2][0] == '') {
		map[2][0] = 'O';
		$('#seven').text('O');
	} else if (map[0][2] == 'X' & map[2][0] == 'X' & map[1][1] == '') {
		map[1][1] = 'O';
		$('#five').text('O');
	} else if (map[1][1] == 'X' & map[2][0] == 'X' & map[0][2] == '') {
		map[0][2] = 'O';
		$('#three').text('O');
	// check if the computer already started a line and continue it
	} else if (map[0][0] == 'O' & map[0][1] == '' & map[0][2] == '') { //row checks
		map[0][1] = 'O';
		$('#two').text('O');
	} else if (map[0][1] == 'O' & map[0][0] == '' & map[0][2] == '') {
		map[0][0] = 'O';
		$('#one').text('O');
	} else if (map[0][2] == 'O' & map[0][1] == '' & map[0][0] == '') {
		map[0][0] = 'O';
		$('#one').text('O');
	} else if (map[1][0] == 'O' & map[1][1] == '' & map[1][2] == '') {
		map[1][1] = 'O';
		$('#five').text('O');
	} else if (map[1][1] == 'O' & map[1][0] == '' & map[1][2] == '') {
		map[1][0] = 'O';
		$('#four').text('O');
	} else if (map[1][2] == 'O' & map[1][1] == '' & map[1][0] == '') {
		map[1][0] = 'O';
		$('#four').text('O');
	} else if (map[2][0] == 'O' & map[2][1] == '' & map[2][2] == '') {
		map[2][1] = 'O';
		$('#eight').text('O');
	} else if (map[2][1] == 'O' & map[2][0] == '' & map[2][2] == '') {
		map[2][0] = 'O';
		$('#seven').text('O');
	} else if (map[2][2] == 'O' & map[2][1] == '' & map[2][0] == '') {
		map[2][0] = 'O';
		$('#seven').text('O');
	} else if (map[0][0] == 'O' & map[1][0] == '' & map[2][0] == '') { //column checks
		map[1][0] = 'O';
		$('#four').text('O');
	} else if (map[1][0] == 'O' & map[0][0] == '' & map[2][0] == '') {
		map[0][0] = 'O';
		$('#one').text('O');
	} else if (map[2][0] == 'O' & map[1][0] == '' & map[0][0] == '') {
		map[0][0] = 'O';
		$('#one').text('O');
	} else if (map[0][1] == 'O' & map[1][1] == '' & map[2][1] == '') {
		map[1][1] = 'O';
		$('#five').text('O');
	} else if (map[1][1] == 'O' & map[0][1] == '' & map[2][1] == '') {
		map[0][1] = 'O';
		$('#two').text('O');
	} else if (map[2][1] == 'O' & map[1][1] == '' & map[0][1] == '') {
		map[0][1] = 'O';
		$('#two').text('O');
	} else if (map[0][2] == 'O' & map[1][2] == '' & map[2][2] == '') {
		map[1][2] = 'O';
		$('#six').text('O');
	} else if (map[1][2] == 'O' & map[0][2] == '' & map[2][2] == '') {
		map[0][2] = 'O';
		$('#three').text('O');
	} else if (map[2][2] == 'O' & map[1][2] == '' & map[0][2] == '') {
		map[0][2] = 'O';
		$('#three').text('O');
	} else if (map[0][0] == 'O' & map[1][1] == '' & map[2][2] == '') {
		map[1][1] = 'O';
		$('#five').text('O');
	} else if (map[1][1] == 'O' & map[0][0] == '' & map[2][2] == '') {
		map[0][0] = 'O';
		$('#one').text('O');
	} else if (map[2][2] == 'O' & map[1][1] == '' & map[0][0] == '') {
		map[0][0] = 'O';
		$('#one').text('O');
	} else if (map[0][2] == 'O' & map[1][1] == '' & map[2][0] == '') {
		map[1][1] = 'O';
		$('#five').text('O');
	} else if (map[1][1] == 'O' & map[0][2] == '' & map[2][0] == '') {
		map[0][2] = 'O';
		$('#three').text('O');
	} else if (map[2][0] == 'O' & map[1][1] == '' & map[0][2] == '') {
		map[0][2] = 'O';
		$('#three').text('O');
	// else select a empty position and claim it
	} else if (map[0][0] == '') {
		map[0][0] = 'O';
		$('#one').text('O');
	} else if (map[0][1] == '') {
		map[0][1] = 'O';
		$('#two').text('O');
	} else if (map[0][2] == '') {
		map[0][2] = 'O';
		$('#three').text('O');
	} else if (map[1][0] == '') {
		map[1][0] = 'O';
		$('#four').text('O');
	} else if (map[1][1] == '') {
		map[1][1] = 'O';
		$('#five').text('O');
	} else if (map[1][2] == '') {
		map[1][2] = 'O';
		$('#six').text('O');
	} else if (map[2][0] == '') {
		map[2][0] = 'O';
		$('#seven').text('O');
	} else if (map[2][1] == '') {
		map[2][1] = 'O';
		$('#eight').text('O');
	} else if (map[2][2] == '') {
		map[2][2] = 'O';
		$('#nine').text('O');
	};
};

var buttsbuttsbutts = function() {
	// run at the start of the player's turn to add buttons to free spaces
	for (i = 0; i < map.length; i++) {
		for (u = 0; u < map[i].length; u++) {
			console.log(i + ', ' + u);
			if (map[i][u] == '') {
				switch(i + '-' + u) {
					case '0-0':
						$('#one').html('<button id="butt_one">-</button>');
						console.log('1');
						break;
					case '0-1':
						$('#two').html('<button id="butt_two">-</button>');
						console.log('2');
						break;
					case '0-2':
						$('#three').html('<button id="butt_three">-</button>');
						console.log('3');
						break;
					case '1-0':
						$('#four').html('<button id="butt_four">-</button>');
						console.log('4');
						break;
					case '1-1':
						$('#five').html('<button id="butt_five">-</button>');
						console.log('5');
						break;
					case '1-2':
						$('#six').html('<button id="butt_six">-</button>');
						console.log('6');
						break;
					case '2-0':
						$('#seven').html('<button id="butt_seven">-</button>');
						console.log('7');
						break;
					case '2-1':
						$('#eight').html('<button id="butt_eight">-</button>');
						console.log('8');
						break;
					case '2-2':
						$('#nine').html('<button id="butt_nine">-</button>');
						console.log('9');
						break;
					default:
						console.log('error');
						break;
				};
			};
		};
	};
};

var noButts = function() {
	//run when the player makes a selection to clear the buttons
	$('#butt_one').remove();
	$('#butt_two').remove();
	$('#butt_three').remove();
	$('#butt_four').remove();
	$('#butt_five').remove();
	$('#butt_six').remove();
	$('#butt_seven').remove();
	$('#butt_eight').remove();
	$('#butt_nine').remove();
};

//process player's selection when a button is pressed
$(document).on('click touch', 'button', function() {
	//get which button is pressed
	var choice = $(this).attr('id').split('_')[1];
	//call function to remove all buttons
	noButts();
	//update board and map based on selection
	switch(choice) {
		case 'one':
			map[0][0] = 'X';
			$('#one').text('X');
			break;
		case 'two':
			map[0][1] = 'X';
			$('#two').text('X');
			break;
		case 'three':
			map[0][2] = 'X';
			$('#three').text('X');
			break;
		case 'four':
			map[1][0] = 'X';
			$('#four').text('X');
			break;
		case 'five':
			map[1][1] = 'X';
			$('#five').text('X');
			break;
		case 'six':
			map[1][2] = 'X';
			$('#six').text('X');
			break;
		case 'seven':
			map[2][0] = 'X';
			$('#seven').text('X');
			break;
		case 'eight':
			map[2][1] = 'X';
			$('#eight').text('X');
			break;
		case 'nine':
			map[2][2] = 'X';
			$('#nine').text('X');
			break;
	};
	//call function to check if player won this turn
	playerWinCheck();
});

//calls for running the computer's turn
var compTurn = function() {
	compute();
	compWinCheck();
};

//cals for setting up the player's turn
var playerTurn = function() {
	buttsbuttsbutts();
};

//function for turn cycling
var turn = function(state) {
	switch(state) {
		case 1:
			$('#turn').text('player');
			playerTurn();
			break;
		case 2:
			$('#turn').text('computer');
			compTurn();
			break;
	};
};

$(document).on('ready', function() {
	//player starts first
	turn(1); 
});