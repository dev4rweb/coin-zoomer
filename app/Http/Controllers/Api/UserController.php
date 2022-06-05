<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Vote;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $admin = Auth::user();
            if ($admin->is_admin) {
                $user = User::findOrFail($id);
                $votes = Vote::where('user_id', $id)->get();
                $msg = 'User - ' . $user->name . ' removed with ' . count($votes) . ' his votes';
                if (count($votes) > 0) {
                    foreach ($votes as $vote) {
                        $vote->delete();
                    }
                }
                $user->delete();
                $response['message'] = $msg;
            } else {
                $response['message'] = 'You can do it';
            }
            $response['success'] = true;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }

    public function fillVoteLimit(Request $request)
    {
        try {
            $user = User::findOrFail($request['user_id']);
            if ($user) {
                $user['vote_limit'] = $request['voteAmount'];
                $user->save();
            }
            $user = User::find($user->id)->with('votes')->first();
            $response['success'] = true;
            $response['message'] = 'vote limit updated';
            $response['model'] = $user;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }
}
