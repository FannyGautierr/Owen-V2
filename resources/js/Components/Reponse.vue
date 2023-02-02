

<script setup>
import {useQuizStore} from "../../stores/QuizStore";

const quiz = useQuizStore()
defineProps({
    reponse:String,
    key : Number

})
const setAnswer = (reponse) => {
    quiz.adjective.push(reponse)
}
</script>

<template>

    <button @click="setAnswer(reponse)" class="bg-reponse bg-contain h-80 w-1/2 bg-no-repeat bg-center text-white flex items-center justify-center">{{reponse}}</button>

</template>

