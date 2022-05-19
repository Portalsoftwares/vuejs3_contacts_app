<template>
    <div class="col-md-3">
        <div class="card">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <img src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527__480.png" 
                        :alt="contact.name" class="img-fluid rounded me-2" width="60" height="60">
                    <div class="d-flex flex-column">
                        <h6>{{contact.name}}</h6>
                        <h6>{{contact.phone}}</h6>
                    </div>
                </div>
            </div>
            <div class="card-footer bg-white d-flex justify-content-between">
                <router-link :to="`/edit/${contact.id}`" class="btn btn-sm btn-warning">
                    <i class="bi bi-pencil"></i>
                </router-link>
                <button 
                    @click="deleteContact(contact.id)"
                    class="btn btn-sm btn-danger">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        contact: {
            type: Object,
            default: {
                name: '',
                phone: ''
            }
        }
    });
    
    //emit event 
    const emit = defineEmits(['deleteContactEvent']);
    
    //delete contact function
    const deleteContact = (id) => {
        emit('deleteContactEvent',id);
    }

</script>

<style>

</style>