import { defineStore } from "pinia";
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-js";
//const Spotify = require('spotify-web-api-js');
const s = new SpotifyWebApi();


export const useSpotifyStore = defineStore("SpotifyStore" , {
    state: () => ({
        music:[],
        accessToken : "",
        spotifySong : [],

    }),
    actions: {
        getToken(){

            axios.get('/userToken')
                .then(response=>{
                    console.log(response.data)
                    this.accessToken = response.data
                    s.setAccessToken(this.accessToken)
                    this.getSong();
                })
                .catch(error=>{
                    console.log(error)
                })

        },
        getSong(){
            s.searchTracks(this.music[1].name).then(
                function (data) {
                    console.log('Search tracks by ', data);
                    this.spotifySong.push(data.tracks.items[0])
                },
                function (err) {
                    console.error(err);
                }
            );
        }
    },
    getters: () => {

    }
})
