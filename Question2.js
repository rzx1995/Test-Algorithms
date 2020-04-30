function solution(N, users) {
// N : stage

    var recordOld = [2,1,2,6,2,4,3,3];

    recordOld.push(N);

    var recordNew = record;

    var data = recordNew.filter(item => item === N);
    var dataTotal = recordNew.filter(item => item >= N);

    var answer = "Stage " + N + " failure rate : " + data.length + "/" + dataTotal.length;
    return answer;        
}