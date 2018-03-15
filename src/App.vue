<template>

    <div class="task-manager">
        <h1>Task manager</h1>
        <div class="task-list-type-wrapper">
            <to-do :taskList="taskList"
                   :isRemovingDisabled="isRemovingDisabled"
                   :isAddingDisabled="isAddingDisabled"
                   @onTaskAdd="taskAdd"
                   @onTaskEdit="taskEdit"
                   @onTaskDone="taskDone"
                   @onTaskRemove="taskRemove"
                   @onShowFullTask="showFullTask"
            ></to-do>
            <done :taskList="taskList"
                  @onTaskRemove="taskRemove"
                  @onRemoveAllDoneTasks="removeAllDoneTasks"
                  @onShowFullTask="showFullTask"
                  @onTaskToDo="taskToDo"
            ></done>
            <edit-task
                    :editTaskData="clonedTask"
                    :isTaskEditing="isTaskEditing"
                    :editTaskType="editTaskType"
                    :originalTask="currentEditTask"
                    :isTaskSaveDisabled="isTaskSaveDisabled"
                    @onCancel="onCancel"
                    @onSave="onSave"
                    @onInput="onInput"
            ></edit-task>
            <full-task
                    @onHideFullTask="hideFullTask"
                    :task="taskFull"
            ></full-task>
        </div>
    </div>

</template>

<script>
    const tasks = [
        {
            state: 'toDo',
            title: '111',
            priority: 'm',
            details: '11  1111111 11 11111 1 111 11 11',
        },
        {
            state: 'toDo',
            title: '222',
            priority: 'h',
            details: '22 222 222222 22222 222 2222',
        },
        {
            state: 'toDo',
            title: '333',
            priority: 'l',
            details: '333 3333333 333 333 333333 33',
        }
    ];
    export default {
        data() {
            return {
                isRemovingDisabled: true,
                isAddingDisabled: true,
                taskList: tasks,
                isTaskEditing: false,
                editTaskType: '',
                clonedTask: null,
                currentEditTask: null,
                taskFull: null,
                isTaskSaveDisabled: true,
            }
        },
        methods: {
            taskAdd() {
                const task = {
                    state: 'toDo',
                    title: '',
                    priority: '',
                    details: '',
                };
                this.taskEdit(task);
                this.editTaskType = 'add';
            },
            taskDone(task) {
                task.state = 'done';
            },
            taskToDo(task) {
                task.state = 'toDo';
            },
            taskEdit(task) {
                this.editTaskType = 'edit';
                this.currentEditTask = task;
                this.clonedTask = Object.assign({}, task);
            },
            taskRemove(task) {
                const indexToDelete = this.taskList.indexOf(task);
                this.taskList.splice(indexToDelete, 1);
            },
            removeAllDoneTasks() {
                for (let task of this.taskList) {
                    if (task.state === 'done') {
                        this.taskRemove(task);
                    }
                }
            },
            showFullTask(task) {
                this.taskFull = task;
            },
            hideFullTask() {
                this.taskFull = null;
            },
            onSave(editTaskData, isAdd) {
                if(this.isTaskSaveDisabled && this.areTaskFieldsEmpty){
                    return;
                }
                const task = Object.assign(this.currentEditTask, this.clonedTask);
                if (isAdd) {
                    this.taskList.push(task);
                }
                this.onCancel();
            },
            onCancel() {
                this.currentEditTask = null;
                this.clonedTask = null;
                this.isTaskSaveDisabled = true;
            },
            onInput() {
                this.isTaskSaveDisabled = this.areTaskFieldsEmpty;
            },
        },
        computed: {
            areTaskFieldsEmpty(){
                if(this.clonedTask===null){
                    return;
                }
                const titleLength = this.clonedTask.title.length;
                const priorityLength = this.clonedTask.priority.length;
                const detailsLength = this.clonedTask.details.length;
                return titleLength < 1 || priorityLength < 1 || detailsLength < 1;
            }
        }
    }
</script>

<style lang="scss">
    @import "scss/basic";

    .task-list-type-wrapper {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

</style>
