const presentdate=new Date()
const months=['jan','feb','mar','april']
function printdate(){
    console.log(presentdate);
}
function currentmonth(){
    const month=presentdate.getMonth()
    console.log("current month is: ",months[month])
}
function getbatchinfo(Batch,weekDay,topic){
    console.log(`${Batch},${weekDay},the topic for today is ${topic}`)
}
module.exports.presentdate=printdate;
module.exports.currentmonth=currentmonth;
module.exports.getbatchinfo=getbatchinfo;