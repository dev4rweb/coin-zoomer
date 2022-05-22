<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\HotNotification;
use Illuminate\Http\Request;

class HotNotificationController extends Controller
{

    public function index()
    {
        try {
            $hotNotifications = HotNotification::all();
            $response['success'] = true;
            $response['message'] = 'All notification count - ' . count($hotNotifications);
            $response['models'] = $hotNotifications;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }
        return response()->json($response);
    }

    public function store(Request $request)
    {
        try {
            $hotNotification = HotNotification::create($request->all());
            $response['success'] = true;
            $response['message'] = 'Hot notification created';
            $response['model'] = $hotNotification;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }
        return response()->json($response);
    }

    public function show($id)
    {
        try {
            $hotNotification = HotNotification::findOrFail($id);
            $response['success'] = true;
            $response['message'] = 'Hot notification found';
            $response['model'] = $hotNotification;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }
        return response()->json($response);
    }

    public function update(Request $request, $id)
    {
        try {
            $hotNotification = HotNotification::findOrFail($id);
            $hotNotification->update($request->all());
            $response['success'] = true;
            $response['message'] = 'Hot notification updated';
            $response['model'] = $hotNotification;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }
        return response()->json($response);
    }

    public function destroy($id)
    {
        try {
            $hotNotification = HotNotification::findOrFail($id);
            $hotNotification->delete();
            $response['success'] = true;
            $response['message'] = 'Hot notification destroyed';
            $response['id'] = $id;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }
        return response()->json($response);
    }
}
