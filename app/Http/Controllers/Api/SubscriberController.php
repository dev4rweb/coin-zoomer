<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\Subscriber;
use Illuminate\Http\Request;

class SubscriberController extends Controller
{

    public function index()
    {
        try {
            $subscribers = Subscriber::orderBy('id', 'desc')->get();
            $response['success'] = true;
            $response['message'] = 'All subscribers - ' . count($subscribers);
            $response['models'] = $subscribers;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }

    public function store(Request $request)
    {
        try {
            $subscriber = Subscriber::create($request->all());
            $response['success'] = true;
            $response['message'] = 'Subscriber created';
            $response['model'] = $subscriber;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }

    public function show($id)
    {
        try {
            $subscriber = Subscriber::findOrFail($id);
            $response['success'] = true;
            $response['message'] = 'Subscriber found';
            $response['model'] = $subscriber;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }

    public function update(Request $request, $id)
    {
        try {
            $subscriber = Subscriber::findOrFail($id);
            $subscriber->update($request->all());
            $response['success'] = true;
            $response['message'] = 'Subscriber updated';
            $response['model'] = $subscriber;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }

    public function destroy($id)
    {
        try {
            $subscriber = Subscriber::findOrFail($id);
            $subscriber->delete();
            $response['success'] = true;
            $response['message'] = 'Subscriber destroyed';
            $response['id'] = $id;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }
}
