<template>
    <div class="task-list-type task-list-done">
        <h2>Done</h2>
        <ul class="task-list">
            <li class="task box-shadow"
                v-for="task in taskList"
                v-if="task.state === 'done'">
                <div class="task-text">{{task.title}}</div>
                <!--<div class="task-text">{{task.priority}}</div>-->
                <!--<div class="task-details">{{task.details}}</div>-->
                <div class="btn-list">
                    <button class="btn btn-blue" @click="$emit('onShowFullTask', task)">
                        <icon name="eye" class="btn-icon"></icon>
                    </button>
                    <button class="btn btn-yellow"
                            @click="$emit('onTaskToDo', task)">
                        <icon name="arrow-left" class="btn-icon"></icon>
                    </button>
                    <button class="btn btn-red"
                            @click="$emit('onTaskRemove', task)">
                        <icon name="trash" class="btn-icon"></icon>
                    </button>
                </div>
            </li>
            <li></li>
        </ul>
        <!--<button class="btn btn-red btn-remove-all-tasks"-->
                <!--@click="$emit('onRemoveAllDoneTasks')">Remove all done tasks</button>-->
    </div>
</template>

<script>
    export default {
        props: ['taskList']
    }
</script>

<style scoped lang="scss">

    .task {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        background-color: #ffffff;
        border-radius: 16px;
        margin-bottom: 24px;

        .input-text {
            flex-grow: 1;
        }

    }

    .task-text{
        flex-grow: 1;
    }

    .btn-remove-all-tasks{
        position: absolute;
        right: 16px;
        bottom: 0;
    }

    .btn-list{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .btn{
            padding: 0;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            margin-left: 8px;

            &:first-child{
                margin-left: 0;
            }

            .btn-icon{
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
            }

        }

    }

</style>