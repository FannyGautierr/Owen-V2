import { defineStore } from "pinia";

export const useQuizStore = defineStore("QuizStore" , {
    state: () => {
        return{
            questions:[
                {
                    question:"Quel temps fait-il ?",
                    reponse : ["froid","chaud"]
                },
                {
                    question:"De quelle humeur êtes-vous ?",
                    reponse : ["froid","chaud"]

                },
                {
                    question:"Quel temps fait-il ?",
                    reponse : ["froid","chaud"]

                },
                {
                    question:"Quel temps fait-il ?",
                    reponse : ["froid","chaud"]

                }
            ],
            adjective : [],

        }
    },
    actions: () => {

    },
    getters: () => {

    }
})
