# Allma Coding Exam
This is a coding exam administered for consideration of employment as a front-end engineer @ Allma (https://allma.io). This exam does not include algorithmic challenges or data structure challenges, but focuses on real-world use cases at Allma. An API output file (tasks.json) includes an API response for a set of tasks to be completed by various users of the system. Your job is to build a lite front-end application that reads this API and displays the output of it in a single page according to a set of use cases.

## Rules
1. This is a take-home exam and there is no time limit.
2. You may use any resources to complete the test including Google, Stack Overflow, etc.
3. You may _NOT_ enlist the help of other developers to complete the project, your work should be your own.
4. You may use any JS variant e.g. TypeScript, ES201x, vanilla.
5. You may use any set of JS runtimes, frameworks, or libraries. e.g. Node, React, Vue, Angular, Bootstrap, etc.

## Criteria for Passing
1. Your solution should meet/implement all of the valid use cases as outlined. 
2. Your solution should enlist readable and understandable code. Feel free to annotate your code as you would normally.
3. Your solution should include instructions on how to run it.
4. The solution cannot fail on it's design aesthetics, e.g. pixel perfection, colors, styles, etc, however quality solutions in this regard will be viewed positively.

## Use Cases to Implement
1. All tasks from the API should be rendered on a single screen/page. You can render it any way you like, e.g. tabular, cards, etc.
    1. Render at minimum the following properties of the task which are included in the API response:
        1. name
        2. description
        3. user (can use name, avatar, or both)
        4. assignedToUser (can use name, avatar, or both)
        5. dueDate
        6. status
    2. Render the number of whole integer days remaining until the due date. Value can be negative if the date is in the past. Round up to the nearest whole number.
2. The total completion rate of all tasks should be rendered on the screen. e.g. 45% completion rate.
    1. A task is considered complete if it has a taskStatusId value of "Complete", "Canceled", or "Incompletable".
3. The total trouble rate of all tasks should be rendered on the screen. e.g. 12% trouble rate.
    1. A task is considered trouble if it has a taskStatusId value of "Delayed", "Blocked", or "Stuck".
4. The minimum dueDate and the maximum dueDate of all tasks should be rendered on the screen, including the number of whole integer days between them inclusive. Round up to the nearest whole number.

## Submissions
1. Please submit your solutions uploaded to source control, e.g. your GitHub and sending the link, or alternatively as a zipped file by emailing it to zzullick at allma.io.

## Brownie Points
1. If your solution runs in a Docker container.
2. If your solution can search the tasks by the name/description fields via a UI input field.
3. If your solution can filter the tasks by status via a UI control.
