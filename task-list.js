const tasks = [

    {

        title:"javaScript",
        completed:true,
        duration: 60,
    },
    {

        title:"css",
        completed:false,
        duration: 50,
    },
   {

        title:"React",
        completed:false,
        duration: 10,
    }
];
console.log("我的学习任务：")
function getInformation(tasks){
        tasks.forEach((task,index)=>{
            const status =task.completed ? "已完成":"未完成";
            console.log(`${index+1}.${task.title}:${status}`);
        })
        }
getInformation(tasks);

// const totalTasks=tasks.length;
// const completedTasks=tasks.filter(task=>task.completed);
// const uncompletedTasks=totalTasks-completedTasks.length;
// // let totalTime=0;
// // tasks.forEach((task)=>{
// //     totalTime+=task.duration
// // });
// const totalTime=tasks.reduce((sum,task)=>sum+task.duration,0);
// console.log(`任务总数:${totalTasks}\n已完成:${completedTasks.length}\n未完成:${uncompletedTasks}\n计划总时长:${totalTime}`);



const completedCount=tasks.reduce((sum,task)=>{
    return task.completed?sum+1:sum},0);
console.log(`已完成任务数:${completedCount}`);