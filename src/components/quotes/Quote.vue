<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel-body quote">
                <slot>

                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
        }
    }

</script>

<style>
    .panel-body {
        font-family: "Courier New";
        font-size: 24px;
        color: grey;
    }

    .quote {
        cursor: pointer;
    }

    .quote:hover {
        background-color: rosybrown;
    }
</style>