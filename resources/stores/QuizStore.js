import { defineStore } from "pinia";

export const useQuizStore = defineStore("QuizStore" , {
    state: () => ({

            questions:[
                {
                    question:"Peut tu me dire quelle heure est-il?",
                    reponse : ["matin","aprem","soir","nuit"]
                },
                {
                    question:"Regarde autour de toi, quel temps fait-il ?",
                    reponse : ["Soleil","gris","pluvieux"]

                },
                {
                    question:"Est ce qu’il fait chaud?",
                    reponse : ["froid","chaud"]

                },
                {
                    question:"est tu seul ou en groupe ?",
                    reponse : ["seul","groupe"]

                },
                {
                 question: "Qu’est ce tu/vous êtes entrain de faire ?",
                 reponse : ["actif","passif"]

                }
            ],
            adjective : [],
            turn : 0,
            finish:false,


    }),
    actions: {
        setAnswer(reponse){
            this.adjective.push(reponse)
            this.turn++
        },
        endQuiz(finish){
            if(finish){
                /* TODO */
                /* -> Faire un appel dans la BD / comparer les arrays*/
            }
        }
    },
    getters: () => {

    }
})
