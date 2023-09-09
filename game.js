let playAgain = true;
while(playAgain){// Computer
  const game_characters = ['snake', 'water', "gun"];
  let random_number =Math.floor(Math.random()*3+1)
  let computer_picks = game_characters[random_number]
  let computer_pick = computer_picks.toLowerCase();
  
  // User
  
  let user_picks = prompt("Enter ur choice from these characters: snake, water, gun:>")
  
  let user_pick = user_picks.toLowerCase();
  
  if(user_pick.includes('snake') || user_pick.includes('water') || user_pick.includes('gun')){
    if(user_pick===computer_pick){
      alert("Game drawn!")
    }
    else if(user_pick==='snake' && computer_pick==='water'){
      alert(`You win! computer_choice: ${computer_pick}***Snake drinks all water***`);
    }
    else if(user_pick==='gun' && computer_pick==='snake'){
      alert(`You win! computer_choice: ${computer_pick} ***Gun kills snake***`);
    }
    else if(user_pick==='water' && computer_pick==='gun'){
      alert(`You win! computer_choice: ${computer_pick} ***Gun gets immersed in water***`);
    }
    else{
      alert(`You loose! computer_choice: ${computer_pick} ***Better luck next time!***`);
    }
  }else{
    alert("Invalid entry!")
  }
  playAgain = confirm("Do u wanna play again?")
}
