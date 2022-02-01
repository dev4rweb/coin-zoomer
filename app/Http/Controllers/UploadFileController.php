<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadFileController extends Controller
{
    public function uploadFile(Request $request)
    {
        if ($request->hasFile('image')) {
            $response['message'] = 'Has file';
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $picture = time() . '.' . $extension;
            $file->move(public_path('img'), $picture);
            if (strpos($_SERVER['SERVER_NAME'], '127.0.0.1') !== false) {
                $response['filepath'] = '/img/' . $picture;
            } else {
                $response['filepath'] = '/lsapp/public/img/' . $picture;
            }
            $response['success'] = true;
        } else {
            $response['success'] = false;
            $response['message'] = 'Something wrong';
        }

        return response()->json($response);
    }
}
