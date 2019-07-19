
//    Define the keys and value for a JavaScript object that
  //  represents a journal entry about what you learned today
const entryCollection = [{
    date:"",
    concept:"",
    entry:"",
    mood:"",
},
{
    date:"07/15/2019",
    concept:"Javascript Objects",
    entry:"Each Object has their own properties that represents data learned the difference between array and object",
    mood:"Content",
},
{
    date:"07/16/2019",
    concept:"Functions Javascript",
    entry:"Functions are reusable code. Learned the difference between pure and impure functions. Did 4 practice exercises. i spent most time learn how to use string concatenation and iteration ",
    mood:"happy",
}]
//entryCollection.push(journalEntry, journalEntry2, journalEntry3)
//console.log(entryCollection)
const makeJournalEntryComponent = (entryCollection) => {
    return `
    <section class="entry">
    <p class= "date">${entryCollection.date}</p>
    <p class= "concept">${entryCollection.concept}</p>
    <p class= "entry">${entryCollection.entry}</p>
    <p class= "mood">${entryCollection.mood}</p>
     
    </section>

    `
}
const entryComponent = document.querySelector(".entryLog")
const renderJournalEntries= (entries) =>{
    entryCollection.forEach(element => {
    const html= makeJournalEntryComponent(element)
    entryComponent.innerHTML += html

})
}

renderJournalEntries(entryCollection)