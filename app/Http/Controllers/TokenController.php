<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Response;

class TokenController extends Controller
{
    //
    /**
     * @throws GuzzleException
     */
    public function getToken(){
        $client = new Client();
        $response = $client->post('https://accounts.spotify.com/api/token', [
            'form_params' => [
                'grant_type' => 'client_credentials',
                'client_id' => env('SPOTIFY_CLIENT'),
                'client_secret' => env('SPOTIFY_SECRET')
            ]
        ]);
        $data = json_decode($response->getBody(), true);
        return $data["access_token"];
    }
}
