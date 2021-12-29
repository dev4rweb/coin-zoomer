<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AirDropOpenPageController extends Controller
{
    public function index($id): \Inertia\Response
    {
        $user = Auth::user();

        return Inertia::render('AirDropOpenPage', [
            'currentUser' => $user,
            'pageId' => $id
        ]);
    }
}
