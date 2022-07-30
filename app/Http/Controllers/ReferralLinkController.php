<?php

namespace App\Http\Controllers;

use App\Helpers\GenerateReferralLink;
use App\Models\ReferralLink;
use Illuminate\Http\Request;

class ReferralLinkController extends Controller
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
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $userId = $request['user_id'];
            if ($userId) {
                $refLink = GenerateReferralLink::generate($userId);
                $response['ref_link_created'] = $refLink;
                if ($refLink) {
                    $refLinks = ReferralLink::where('user_id', $userId)
                        ->orderBy('id', 'desc')->get();
                    $response['models'] = $refLinks;
                }
            }
            $response['user_id'] = $userId;
            $response['success'] = true;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\ReferralLink $referralLink
     * @return \Illuminate\Http\Response
     */
    public function show(ReferralLink $referralLink)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\ReferralLink $referralLink
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ReferralLink $referralLink)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\ReferralLink $referralLink
     * @return \Illuminate\Http\Response
     */
    public function destroy(ReferralLink $referralLink)
    {
        try {
            $response['referralLink'] = $referralLink;
            if ($referralLink) $referralLink->delete();
            $response['success'] = true;
            $refLinks = ReferralLink::where('user_id', $referralLink->user_id)
                ->orderBy('id', 'desc')->get();
            $response['models'] = $refLinks;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }
}
