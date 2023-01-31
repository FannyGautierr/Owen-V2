<script setup>
import { Head, Link } from '@inertiajs/vue3';
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Question from "@/Components/Question.vue";

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
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
            <div class="bg-bg-owen bg-contain bg-bottom h-80 w-1/2 bg-no-repeat p-1"></div>
            <Question
                question = "hey"
            />

        </div>
        <div class="flex justify-center items-center">
            <SecondaryButton class="ml-4" >
                Commencer
            </SecondaryButton>
        </div>
    </div>
</template>
