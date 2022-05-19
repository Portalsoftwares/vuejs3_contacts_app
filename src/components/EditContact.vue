<template>
    <div class="row my-4">
        <div class="col-md-8 mx-auto">
            <div class="card">
                <div class="card-body d-flex justify-content-center">
                    <AddEditContact :updating="true"></AddEditContact>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import AddEditContact from './AddEditContact.vue';
</script>

<style>
</style>