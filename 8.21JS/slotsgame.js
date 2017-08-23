// var quarters = 50;
// function slots(quarters){
//   while(quarters > 0){
//     if (Math.floor(Math.random()*100) ==33){
//       quarters += Math.floor(Math.random()*51)+50;
//       console.log(quarters);
//     }
//     else{
//       quarters -= 1;
//       console.log(quarters);
//     }
//   }
// }
// slots(quarters);


function playSlots(numOfQuarters){
		while(numOfQuarters > 0){
			var win = Math.floor(Math.random()*100);
			if(win > 1){
				var amountWon = Math.random()*50 + 50
				return amountWon + numOfQuarters
			}
		}
		return 0
	}

	function playSlotsBonus(numOfQuarters, goal){
		while(numOfQuarters > 0){
			var win = Math.floor(Math.random()*100);
			if(win > 99){
				var amountWon = Math.floor(Math.random()*50 + 50)
				if(amountWon + numOfQuarters > goal){
					return amountWon + numOfQuarters
				}else{
					numOfQuarters += amountWon;
					console.log("won:", numOfQuarters)
				}
			}
		}
		console.log("lossed")
		return 0
	}
	playSlotsBonus(100, 200);
