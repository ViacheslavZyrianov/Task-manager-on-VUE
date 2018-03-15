<template>
    <div class="task-list-type task-list-todo">
        <h2>to do</h2>
        <ul class="task-list">
            <li class="task box-shadow"
                v-for="(task,taskID) in taskList"
                v-if="task.state === 'toDo'"
                :key="taskID">
                <div class="task-element task-priority" :class="task.priority">{{ task.priority }}</div>
                <div class="task-element task-title">{{ task.title }}</div>
                <div class="task-element task-details">{{task.details}}</div>
                <div class="btn-list">
                    <button class="btn btn-yellow-text"
                            @click="$emit('onTaskEdit', task)">
                        <icon name="pencil" class="btn-icon"></icon>
                    </button>
                    <button class="btn btn-green-text"
                            @click="$emit('onTaskDone', task)">
                        <icon name="check" class="btn-icon"></icon>
                    </button>
                    <button class="btn btn-red-text"
                            @click="$emit('onTaskRemove', task)">
                        <icon name="trash" class="btn-icon"></icon>
                    </button>
                </div>
                <button class="btn btn-blue btn-show-full-task" @click="$emit('onShowFullTask', task)">
                    <icon name="eye" class="btn-icon"></icon>
                    <span class="btn-text">Show full task</span>
                </button>
            </li>
        </ul>
        <button class="btn btn-blue btn-add-task"
                @click="$emit('onTaskAdd')">
            <icon name="plus" class="btn-icon"></icon>
            <span class="btn-text">Add task</span></button>
    </div>
</template>

<script>
    export default {
        props: ['taskList']
    }
</script>

<style scoped lang="scss">

    .task-list {
        position: relative;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
        margin-bottom: 24px;
    }

    .task {
        position: relative;
        width: 200px;
        min-height: 200px;
        background-color: #ffffff;
        margin: 0 24px 24px 0;
        padding-top: 32px;
        border-radius: 8px;
        overflow: hidden;

        &:nth-child(3n) {
            margin-right: 0;
        }

    }

    .task-element {
        margin-bottom: 8px;
    }

    .task-title {
        padding: 0 8px;
        font-weight: bold;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 22px;
    }

    .task-priority {
        color: #ffffff;
        position: absolute;
        top: 0;
        left: 0;
        width: 24px;
        height: 24px;
        margin: 0;
        text-align: center;
        user-select: none;
        font-weight: bold;
        border-bottom-right-radius: 8px;

        &.h {
            background-color: #c4222c;
        }

        &.m {
            background-color: #fcaa40;
        }

        &.l {
            background-color: #00713f;
        }

        &:first-letter {
            text-transform: uppercase;
        }

    }

    .task-details {
        position: relative;
        color: #878787;
        padding: 0 8px;
        height: 102px;
        overflow: hidden;
        margin-bottom: 0;

        &:after {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            height: 16px;
            width: 100%;
            background: linear-gradient(to top, #ffffff 0%, transparent 100%);
        }

    }

    .btn-list {
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .btn {
            padding: 0;
            width: 24px;
            height: 24px;

            &:hover {
                .btn-icon {
                    transform: scale(1.2);
                }
            }

        }

    }

    .btn-show-full-task {
        width: 100%;
        border-radius: 0 0 8px 8px;
    }

    .btn-add-task {
        position: fixed;
        top: 100px;
        left: 100px;
        /*float: right;*/
        /*margin-top: 24px;*/
        /*box-shadow: 4px 4px 12px 2px rgba(0, 0, 0, .2);*/
    }

</style>