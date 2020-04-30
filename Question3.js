function solution(relation) {
    var student = [
        {
            Student_number: "100",
            Name: "ryan",
            Major: "music",
            Grade: "2",
        },
        {
            Student_number: "200",
            Name: "apeach",
            Major: "math",
            Grade: "2",
        },
        {
            Student_number: "300",
            Name: "tube",
            Major: "computer",
            Grade: "3",
        },
        {
            Student_number: "400",
            Name: "con",
            Major: "computer",
            Grade: "4",
        },
        {
            Student_number: "500",
            Name: "muzi",
            Major: "music",
            Grade: "3",
        },
        {
            Student_number: "600",
            Name: "apeach",
            Major: "music",
            Grade: "2",
        },
    ]

    var duplicate = student
        .map(item => item['Name'])
        .map((item, index, final) => final.indexOf(item) !== index && index)
        .filter(obj => student[obj])
        .map(item => student[item]["Name"]);

    var totalDuplicate = student.filter(item => duplicate.includes(item.Name));

    var answer = totalDuplicate.length;
    return answer;
}