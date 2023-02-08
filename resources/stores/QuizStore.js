import { defineStore } from "pinia";
import axios from "axios";
import {useSpotifyStore} from "./SpotifyStore";




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
            finish : false,
            musics : [],
            selectedSongs : [],
            comparedFinish:false


    }),
    actions: {
        setAnswer(reponse){
            if(this.turn<=4){
                this.adjective.push(reponse);
                this.turn++ ;
                if(this.adjective.length>4){
                    this.finish =true;
                }
            }
        },
        endQuiz(){
            axios.get("/music")
                .then(response=>{
                    response.data.forEach((item,index)=>{
                        this.getAdjectives(item)
                    })
                    this.compareArray(this.musics);
                })
        },
        getAdjectives(song){
            console.log(song)
            let description=[]
            let music={
                "name":"",
                "artist":"",
                description :[],
            }

            let artist = song.artist
            description.push(song.firstQuestion)
            description.push(song.secondQuestion)
            description.push(song.thirdQuestion)
            description.push(song.fourthQuestion)
            description.push(song.fiveQuestion)
            console.log(description)
            music.name=song.name
            music.artist=song.artist
            music.description=description

            this.musics.push(music)


        },
        compareArray(musics){
            let countCheck = 0
            musics.forEach((item)=>{
                for (let i = 0; i<item.description.length; i++){
                    if(item.description[i]===this.adjective[i]){
                        console.info(item.description[i],this.adjective[i])
                        countCheck++
                    }
                }
                console.log(countCheck>2)
                if (countCheck>2){
                    this.selectedSongs.push(item)
                }else {
                    console.log("nope")
                }

            })
            const spotifyStore = useSpotifyStore();
            spotifyStore.music.push(this.selectedSongs[0])
            spotifyStore.getToken();
            this.comparedFinish=true;


        }

    },
    getters: () => {

    }
})
