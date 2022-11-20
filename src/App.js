import './App.css';
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';


const getLocalContacts = ()=>{
  const retriveContacts = localStorage.getItem("contacts");
  if(retriveContacts){
    return JSON.parse(localStorage.getItem("contacts"));
  }
}
function App() {
 const LOCAL_STORAGE_KEY = "contacts"
 const [contacts, setContacts] = useState(getLocalContacts);
 const addContactHandler = (contact)=>{
  console.log(contact)
  setContacts([...contacts, {id: uuidv4(), ...contact}]);
 }
 const removeContactHandler = (id) =>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    })
    setContacts(newContactList);
 }

 useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
 }, [contacts]);

  return (    
    <div className = "ui container">
      <Header/>     
      <AddContact addContactHandler = {addContactHandler}/>           
      <ContactList contacts = {contacts} getContactId = {removeContactHandler}/>         
    </div>  
  );
}

export default App;
