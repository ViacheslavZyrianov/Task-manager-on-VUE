<template>
    <transition name="fade">
        <div class="popup" v-if="editTaskData">
            <div class="popup-body box-shadow">
                <h3 v-if="editTaskType == 'add'">Add new task</h3>
                <h3 v-else-if="editTaskType == 'edit'">Edit task "{{originalTask.title}}"</h3>
                <div class="form-group">
                    <label class="task-element-name">
                        <span class="task-element-title">Name</span>
                        <input type="text" class="input-text"
                               v-model="editTaskData.title"
                               @input="$emit('onInput')"
                        >
                    </label>
                </div>
                <div class="form-group task-element-priority">
                    <span class="task-element-title">Priority</span>
                    <label class="checkbox priority-checkbox priority-checkbox-high">
                        <input type="radio" value="h" name="task-priority"
                               v-model="editTaskData.priority"
                               @change="$emit('onInput')"
                        >
                        <span class="input-radio-text">High</span>
                    </label>
                    <label class="checkbox priority-checkbox priority-checkbox-medium">
                        <input type="radio" value="m" name="task-priority"
                               v-model="editTaskData.priority"
                               @change="$emit('onInput')"
                        >
                        <span class="input-radio-text">Medium</span>
                    </label>
                    <label class="checkbox priority-checkbox priority-checkbox-low">
                        <input type="radio" value="l" name="task-priority"
                               v-model="editTaskData.priority"
                               @change="$emit('onInput')"
                        >
                        <span class="input-radio-text">Low</span>
                    </label>
                </div>
                <div class="form-group task-element-details">
                    <div class="task-element-title">Details</div>
                    <textarea
                            class="input-textarea"
                            name="task-details"
                            v-model="editTaskData.details"
                            @input="$emit('onInput')"
                    ></textarea>
                </div>
                <div class="btn-list">
                    <button class="btn btn-red"
                            @click="$emit('onCancel')">Cancel</button>
                    <button
                            v-if="editTaskType == 'add'"
                            class="btn btn-green"
                            :class="{ 'btn-disabled': isTaskSaveDisabled }"
                            @click="$emit('onSave', editTaskData, true)">Add
                    </button>
                    <button
                            v-else-if="editTaskType == 'edit'"
                            class="btn btn-green"
                            @click="$emit('onSave', editTaskData)">Save
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: ['editTaskData', 'editTaskType', 'originalTask', 'isTaskSaveDisabled']
    }
</script>

<style scoped lang="scss">

    h3 {
        margin: 0 0 24px;
        width: 100%;
        text-align: center;
    }

    .task-element-title {
        position: relative;
        margin-right: 16px;
        font-weight: bold;
        width: 100px;
        display: block;
    }

    .task-element-name {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .input-text{
            width: auto;
            flex: 1;
        }

    }

    .task-element-priority{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .priority-checkbox{
        margin-right: 8px;

        &.priority-checkbox-high{

            input:checked{
                & ~ span:before{
                    background-color: #c4222c;
                    transform: scale(1.5);
                }
            }

        }

        &.priority-checkbox-medium{

            input:checked{
                & ~ span:before{
                    background-color: #fcaa40;
                    transform: scale(1.5);
                }
            }

        }

        &.priority-checkbox-low{

            input:checked{
                & ~ span:before{
                    background-color: #00713f;
                    transform: scale(1.5);
                }
            }

        }

        &:hover, &:focus{
            span{
                color: #000000;
            }
        }

    }

    .task-element-details {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 300px;

        .task-element-name {
            margin-bottom: 16px;
        }

        .input-textarea {
            flex: 1;
            margin-top: 16px;
        }

    }

    .btn-list {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: auto;

        .btn{
            margin-left: 8px;
        }

    }

</style>