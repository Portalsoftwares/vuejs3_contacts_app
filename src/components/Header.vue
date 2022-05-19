<template>
    <nav class="navbar navbar-expand-lg rounded mt-2" style="background-color: #e74c3c;">
        <div class="container-fluid">
            <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="bi bi-list text-white"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link text-white" aria-current="page" to="/">
                            <i class="bi bi-house-door"></i> Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-white" to="#">
                            <i class="bi bi-people"></i> 
                            {{storeContacts.contactsNumber}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useContactsStore } from '../stores/storeContacts';
//get store
const storeContacts = useContactsStore();
</script>
