<template>
    <form class="row g-3 mt-2">
        <div class="col-auto">
            <label for="name" class="visually-hidden">Name</label>
            <input 
                v-model="data.contact.name"
                type="text" 
                class="form-control" 
                name="name" 
                placeholder="Name">
        </div>
        <div class="col-auto">
            <label for="phone" class="visually-hidden">Phone</label>
            <input 
                v-model="data.contact.phone"
                type="text" 
                class="form-control" 
                autocomplete="off"
                name="phone" 
                placeholder="Phone">
        </div>
        <div class="col-auto" v-if="updating">
            <button type="submit" 
                :disabled="!data.contact.name || !data.contact.phone"
                @click.prevent="updateContact" 
                class="btn btn-warning mb-3">
                <i class="bi bi-pen"></i> Update
            </button>
        </div>
        <div class="col-auto" v-else>
            <button type="submit" 
                :disabled="!data.contact.name || !data.contact.phone"
                @click.prevent="addContact" 
                class="btn btn-primary mb-3">
                <i class="bi bi-plus"></i> Add
            </button>
        </div>
    </form>
</template>

<script setup>
    import { onMounted, reactive, watch } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { v4 as uuidv4 } from 'uuid';
    import { useContactsStore } from '../stores/storeContacts';

    //get routes
    const route = useRoute();
    const router = useRouter();

    //get params
    const props = defineProps({
        updating: {
            type: Boolean,
            default: false
        }
    })

    const data = reactive({
        contact: {
            name: '',
            phone: ''
        },
        exists: false
    });

    //get store
    const storeContacts = useContactsStore();

    //add contact
    const addContact = () => {
        let contact = {
            id: uuidv4(),
            name: data.contact.name,
            phone: data.contact.phone
        }
        storeContacts.addContact(contact);
        data.contact.name = '';
        data.contact.phone = '';
    }

    //update contact
    const updateContact = () => {
        let contact = {
            id: route.params.id,
            name: data.contact.name,
            phone: data.contact.phone
        }
        storeContacts.updateContact(contact);
        router.push('/');
    }

    onMounted(() => {
        if(props.updating){
            data.contact = storeContacts.getContact(route.params.id);
        }
    });
</script>

<style>
</style>