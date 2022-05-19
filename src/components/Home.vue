<template>
  <div class="row mt-3">
    <div class="col-md-8 mx-auto">
      <div class="card">
        <div class="card-body d-flex justify-content-center">
          <AddEditContact></AddEditContact>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-md-12">
      <div class="row">
        <Contact 
          v-for="contact in storeContacts.contacts"
          :key="contact.id" 
          :contact="contact"  
          @deleteContactEvent="deleteContact"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import Contact from './Contact.vue';
  import { useContactsStore } from '../stores/storeContacts';
  import AddEditContact from './AddEditContact.vue';

  //get store
  const storeContacts = useContactsStore();

  //delete contact function
  const deleteContact = (id) => {
    storeContacts.removeContact(id);
  }
</script>

<style>

</style>