import { defineStore } from 'pinia'

export const useContactsStore = defineStore('contacts', {
    state: () => {
        return { 
            contacts: [
                {
                    id: 'id1',
                    name: 'john doe',
                    phone: 999009900
                },
                {
                    id: 'id2',
                    name: 'mark doe',
                    phone: 445566556
                }
            ]
        }
    },
    getters: {
        contactsNumber(state) {
          return state.contacts.length
        },
        getContact(state) {
            return (id) => state.contacts.find((contact) => contact.id === id);
        },
    },
    actions: {
        addContact(contact) {
            this.contacts.unshift(contact);
        },
        updateContact(item) {
            let index = this.contacts.findIndex(contact => contact.id === item.id);
            this.contacts[index].name = item.name;
            this.contacts[index].phone = item.phone;
        },
        removeContact(id) {
            this.contacts = this.contacts.filter(contact => contact.id !== id);
        }
    },
})