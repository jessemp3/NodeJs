const res = require("express/lib/response");

const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Peach",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 2,
  PONTOS: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
      break;
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    let block = await getRandomBlock();
    console.log(`Bloco ${block}`);

    //   rolar

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //test

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(
        player1.NOME,
        "VELOCIDADE",
        diceResult1,
        character1.VELOCIDADE
      );

      await logRollResult(
        player2.NOME,
        "VELOCIDADE",
        diceResult2,
        character2.VELOCIDADE
      );
    } else if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(
        player1.NOME,
        "MANOBRABILIDADE",
        diceResult1,
        character1.MANOBRABILIDADE
      );

      await logRollResult(
        player2.NOME,
        "MANOBRABILIDADE",
        diceResult2,
        character2.MANOBRABILIDADE
      );
    } else if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} Confrontou com ${character2.NOME} 🥊`);

      await logRollResult(player1.NOME, "PODER", diceResult1, character1.PODER);

      await logRollResult(player2.NOME, "PODER", diceResult2, character2.PODER);

      if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
        console.log(
          `${character1.NOME} Venceu o confronto ${character2.NOME} Perdeu um ponton 🐢`
        );

        character2.PONTOS--;
      }

      if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
        console.log(
          `${character2.NOME} Venceu o confronto ${character1.NOME} Perdeu um ponton 🐢`
        );
        character1.PONTOS--;
      }
    }

    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.NOME} Marcou um ponto`);
      character1.PONTOS++;
    }

    if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.NOME} Marcou um ponto`);
      character2.PONTOS++;
    }

    console.log("------------------------------");
  }
}

async function declareWinner(character1, character2) {
  console.log("Resultado Final:");
  console.log(`${character1.NOME}: ${character1.PONTOS}`);
  console.log(`${character2.NOME}: ${character2.PONTOS}`);

  if (character1.PONTOS > character2.PONTOS) {
    console.log(`O ${character1.NOME} Venceu 🏆`);
  } else if (character2.PONTOS > character1.PONTOS) {
    console.log(`O ${character2.NOME} Venceu 🏆`);
  } else {
    console.log("Empate");
  }
}

(async function main() {
  console.log(
    `🏁🚨 Corrida entre o ${player1.NOME} e ${player2.NOME} começando...\n`
  );

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();
