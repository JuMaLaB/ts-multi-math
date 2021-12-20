function startGame() {
  // starting a new game
  let playerName: string | undefined = getInputValue('playername');
  logPlayer(playerName);

  postScore(80, playerName);
  postScore(-5, playerName);
}

function logPlayer(name: string = 'MultiMath Player'): void {
  console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
  if (inputElement.value === '') {
    return undefined;
  }
  else {
    return inputElement.value;
  }
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {
  let logger: (value: string) => void;
  score < 0 ? logger = logError : logger = logMessage;
  const scoreElement: HTMLElement | null = document.getElementById('postedScores');
  scoreElement!.innerText = `${score} - ${playerName}`;
  logger(`Score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string): void => console.log(message);

function logError(err: string): void {
  console.error(err);
}

const newPlayer: Player = new Player();
newPlayer.name = 'Some one';
console.log(newPlayer.formatName());

/* let myRes: Result = {
  playerName: 'JB',
  score: 5,
  problemCount: 5,
  factor: 7,
};

let player: Person = {
  name: 'JU',
  formatName: () => 'Ju'
} */