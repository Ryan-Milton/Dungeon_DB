const mongoose = require('mongoose');

const playerSheet = new mongoose.Schema({
   character_name: String,
   player_name: String,
   class: String,
   level: { type: Number, max: 20 },
   race: String,
   experience_points: Number,
   strength: {
       base: Number,
       skills: {
           athletics: Number,
       } 
   },
   dexterity: {
       base: Number,
       skills: {
           acrobatics: Number,
           stealth: Number,
       } 
   },
   constitution: {
    base: Number,
    skills: {
        } 
    },
   intelligence: {
    base: Number,
    skills: {
        arcana: Number,
        history: Number,
        investigation: Number,
        nature: Number,
        religion: Number,
        } 
    },
   wisdom: {
    base: Number,
    skills: {
        animal_handling: Number,
        insight: Number,
        medicine: Number,
        perception: Number,
        survival: Number
        } 
    },
   charisma: {
    base: Number,
    skills: {
        deception: Number,
        intimidation: Number,
        performance: Number,
        persuasion: Number,
        } 
    },
});

module.exports = mongoose.model('PlayerSheet', playerSheet);