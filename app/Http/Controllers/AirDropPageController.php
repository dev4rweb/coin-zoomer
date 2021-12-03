<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AirDropPageController extends Controller
{
    public function index(): \Inertia\Response
    {
        $user = Auth::user();

        return Inertia::render('AirDropPage', [
            'currentUser' => $user,
        ]);
    }
}
