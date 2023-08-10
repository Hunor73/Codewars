/*
Title: Is he gonna survive?
Description:
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)
*/

function hero(bullets, dragons){
    let bulletsNeeded = dragons * 2
    if (bullets >= bulletsNeeded) {
        return true
    } else return false
}

console.log(hero(4,3))

/*
More consise versions
function hero(bullets, dragons) {
    // Calculate the total bullets needed to defeat all dragons
    const bulletsNeeded = dragons * 2;
    
    // Check if the hero has enough bullets to survive
    return bullets >= bulletsNeeded;
}

function hero(bullets, dragons){
  return bullets >= dragons * 2
}
*/

