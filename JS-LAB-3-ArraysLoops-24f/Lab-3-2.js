//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY
var studyGroup = ["James", "Frederick", "Blessed", "Victor", "Betty"]

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(studyGroup);

//REMOVE LAST MEMBER
var LastMember = studyGroup.pop()
console.log(studyGroup)

//ADD SEAN TO FRONT OF ARRAY
var addSean = studyGroup.unshift("Sean") 
console.log(studyGroup);

//REARRANGE THE ARRAY ALPHABETICALLY
var alphaTeam = studyGroup.sort()
console.log(studyGroup);

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log(`We have ${studyGroup.length} people in our group.`);

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE
for(var i = 0; i < studyGroup.length; i++){
    console.log(`${studyGroup[i]} is num ${i + 1}.`);
}
