// 80's Kids #6: Rock 'Em, Sock 'Em Robots
// You and your friends have been battling it out with your Rock 'Em, Sock 'Em robots, but things have gotten a little boring. You've each decided to add some amazing new features to your robot and automate them to battle to the death.
//
// Each robot will be represented by an object. You will be given two robot objects, and an object of battle tactics and how much damage they produce. Each robot will have a name, hit points, speed, and then a list of battle tacitcs they are to perform in order. Whichever robot has the best speed, will attack first with one battle tactic.
//
// Your job is to decide who wins.

function innerFight (robot1, robot2, tactics) {
  var winner;
  for (var i = 0; i < robot1.tactics.length;i++){
    robot2['health'] = robot2['health'] - tactics[robot1['tactics'][i]]
    if (robot2['health'] <= 0) {
      winner = robot1['name']
      break;
    }
    robot1['health'] = robot1['health'] - tactics[robot2['tactics'][i]]
    if (robot1['health'] <= 0) {
      winner = robot2['name']
      break;
    }
  }
  if (!winner){
    if (robot1['health'] == robot2['health']) {
      return winner;
    }
    else return robot1['health'] < robot2['health'] ? robot2['name']:robot1['name']
  }
  else return winner;
}
function fight(robot1, robot2, tactics) {
  turnOne = robot1['speed'] >= robot2['speed'] ? robot1: robot2;
  turnTwo = robot1['speed'] >= robot2['speed'] ? robot2: robot1;

  var winner = innerFight(turnOne,turnTwo,tactics);

  return winner ?  winner + ' has won the fight.':'The fight was a draw.';

}
