function solution(condition, userID) {
// condition    : ["Came In", "Came Out"]
// userID       : ["uid1234", "uid4567"]

// userArray = [
//     {
//         idUser: "uid1234",
//         name: "Muzi", // Change This Name
//     },
//     {
//         idUser: "uid4567",
//         name: "Prodo", // Change This Name
//     },
// ];

    var answer = [];

    answer.push({
        id: userID,
        Log: condition,
    });

    return (
        answer.map((item, index) => {
            {userArr.map((itemU, indexU)=>{
                if(item.id == itemU.idUser){
                    {itemU.name}
                }
            })} {item.Log};
        })
    );
}