<script setup>
import { Head, Link } from '@inertiajs/vue3';
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Question from "@/Components/Question.vue";
import {useQuizStore} from "../../stores/QuizStore";
import Reponse from "@/Components/Reponse.vue";

const quiz = useQuizStore();
//let reponses = quiz.questions[quiz.turn].reponse

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    start : Boolean,
    finish : Boolean

});

</script>

<template >
    <Head title="Welcome" />
    <div class="bg-bg-0 bg-bgImg bg-cover bg-center min-h-screen flex flex-col justify-around">
        <div class="bg-black h-fit">
            <div v-if="canLogin" class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                <Link
                    v-if="$page.props.auth.user"
                    :href="route('dashboard')"
                    class="text-sm text-gray-700 dark:text-gray-500 underline"
                    >Dashboard</Link
                >


                <template v-else>
                    <Link :href="route('login')" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in</Link>

                    <Link
                        v-if="canRegister"
                        :href="route('register')"
                        class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                        >Register</Link
                    >
                </template>
            </div>

        </div>

        <div class="flex flex-row justify-between items-center mt-30">
            <div class="bg-bg-owen bg-contain bg-bottom h-80 w-1/2 bg-no-repeat p-1 animate-bounce-slow"></div>

            <Question v-if="quiz.turn < quiz.questions.length"
                :question = quiz.questions[quiz.turn].question
            />

            <Question v-else
                      question = "Je crois avoir trouver la bonne musique pour vous !"
            />

        </div>
        <div class="flex justify-center items-center" v-if="!start">

            <div class="ml-4 bg-white" @click="start = true">
                Commencer
            </div>

        </div>
        <div class="flex justify-center items-center" v-if="!quiz.finish && start">

            <Reponse

                v-for="(reponse,index) in quiz.questions[quiz.turn].reponse "
                      :reponse = reponse
                      :key="index"
            />


        </div>
        <div v-if="quiz.finish && !quiz.comparedFinish" @click='quiz.endQuiz()' class="text-white bg-[#232323] w-1/2 p-2 m-center text-center shadow-inner hover:border hover:border-violet-600">
            See a song for you !
        </div>

        <div v-if="quiz.comparedFinish">
            <!-- TO DO -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/a9zPVsdeIaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                    class="iframe m-center">

            </iframe>

        </div>

    </div>
</template>
