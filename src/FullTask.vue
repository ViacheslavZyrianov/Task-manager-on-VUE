<template>
    <transition name="fade">
        <div class="popup" v-if="task">
            <div class="popup-body box-shadow">
                <h3 class="task-title">{{task.title}}</h3>
                <div class="task-priority" :class="task.priority">Priority: <span>{{task.priority}}</span></div>
                <h4>Details</h4>
                <p class="task-details">{{task.details}}</p>
                <button class="btn btn-red" @click="$emit('onHideFullTask')">Close</button>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: ['task']
    }
</script>

<style scoped lang="scss">

    .popup-body{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    h4{
        margin-bottom: 0;
    }

    .task-priority{

        span{
            text-transform: uppercase;
            display: inline-block;
            width: 22px;
            color: #ffffff;
            text-align: center;
            font-weight: bold;
            border-radius: 50%;
        }

        &.h span{
            background-color: #c4222c;
        }

        &.m span{
            background-color: #fcaa40;
        }

        &.l span{
            background-color: #00713f;
        }

    }

    .btn-red{
        margin: auto 0 0 auto;
    }

</style>