<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\SendMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendEmail(Request $request)
    {
        try {
            /*$data['email'] = $request['email'];
            $data['userName'] = $request['userName'];
            $data['contact'] = $request['contact'];
            $data['coinName']  = $request['coinName'];
            $data['message'] = $request['message'];*/

//            Mail::send(new SendMail($data), ['data' => $request->all()]);
//            Mail::to('dev4rweb@gmail.com')->send(new SendMail($data));
            Mail::to('dev4rweb@gmail.com')->send(new SendMail($request->all()));

            $response['success'] = true;
//            $response['message'] = 'Email sent from ' . $data;
            $response['message'] = 'Email sent from ';
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }
}
