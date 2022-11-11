<?php

namespace App\Http\Controllers;

use App\Models\Vote;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function store(Request $request)
    {
        try {
            $user = Auth::user()->load(['votes']);
            $count = 0;
            if (count($user->votes)) {
                foreach ($user->votes as $vote) {
                    if ($vote->created_at > Carbon::today())
                        $count++;
                }
            }
            if ($count > 4) $message = 'You cannot vote now! Try it again tomorrow';
            else {
                Vote::create([
                    'user_id' => $user->id,
                    'coin_id' => $request['coin_id']
                ]);
                $message = 'You are voted';
            }
        } catch (\Exception $exception) {
            $message = $exception->getMessage();
        }
        return redirect()->back()->withErrors(['error' => $message]);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
