let no_of_times = parseInt(prompt("How many times do you wanna play this game?"));
let no_games = no_of_times;
let final_score = 0;
let playAgain = 0;
while(playAgain<=no_of_times){
  
  // Computer
  const game_characters = ['snake', 'water', "gun"];
  let random_number =Math.floor(Math.random()*3)
  let computer_picks = game_characters[random_number]
  let computer_pick = computer_picks.toLowerCase();
  
  // User
  
  let user_picks = prompt("Enter ur choice from these characters: snake, water, gun:>")
  
  let user_pick = user_picks.toLowerCase();
  
  if(user_pick.includes('snake') || user_pick.includes('water') || user_pick.includes('gun')){
    if(user_pick===computer_pick){
      alert(`Game drawn!\nChances left: ${--no_of_times}`)
    }
    else if(user_pick==='snake' && computer_pick==='water'){
      alert(`You win!\ncomputer_choice: ${computer_pick}\n***Snake drinks all water***\nChances left: ${--no_of_times}`);
      final_score++
    }
    else if(user_pick==='gun' && computer_pick==='snake'){
      alert(`You win!\ncomputer_choice: ${computer_pick}\n***Gun kills snake***\nChances left: ${--no_of_times}`);
      final_score++
    }
    else if(user_pick==='water' && computer_pick==='gun'){
      alert(`You win!\ncomputer_choice: ${computer_pick}\n***Gun gets immersed in water***\nChances left: ${--no_of_times}`);
      final_score++
    }
    else{
      alert(`You loose!\ncomputer_choice: ${computer_pick}\n***Better luck next time!***\nChances left: ${--no_of_times}`);
    }
  }else{
    alert(`Invalid entry!\nChances left: ${--no_of_times}`)
  }
  if(no_of_times>0){
    playAgain = confirm("Do u wanna play again?");
  }else{
    if(final_score===Math.floor(no_games/2)){
    alert(`You ran out of chances!\nYour final score is ${final_score} out of ${no_games}\nFinal result: Draw!!`)
  }else if(final_score>Math.floor(no_games/2)){
    alert(`You ran out of chances!\nYour final score is ${final_score} out of ${no_games}\nFinal result: You won the series !!`)
  }else{
    alert(`You ran out of chances!\nYour final score is ${final_score} out of ${no_games}\nFinal result: You lost the series!!`)
  }
}
}
