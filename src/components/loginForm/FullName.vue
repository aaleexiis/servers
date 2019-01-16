<template>
    <p>Full Name: {{firstName}} {{lastName}}</p>
</template>
<script>
    export default {
        props: {
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            }
        }
    }
</script>