<template>
    <div>
        <div v-for="(v, i) in list" class="row">
            <div v-for="(text, k) in v" class="item">
                <div class="list-item">
                    <text>{{text}}</text>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .item{
        flex:1;
        justify-content: center;
        align-items:center;
        border-width:1;
        border:1px solid  #000;
    }
    .row {
        flex-direction: row;
        height: 80px;
    }
</style>
<script>
    module.exports = {
        data: function () {
            return {
                list:[
                    ['A', 'B', 'C'],
                    ['D', 'E', 'F'],
                    ['G', 'H', 'I']
                ]
            }
        }
    }
</script>