<?php

namespace App\Http\Controllers\Api;

use App\Filters\CoinFilter;
use App\Http\Controllers\Controller;
use App\Models\Coin;
use Illuminate\Http\Request;

class CoinController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CoinFilter $filter)
    {

        try {
//            $coins = Coin::filter($filter)->take($filter->request['limit'])->get();
            $coins = Coin::filter($filter)
                ->where('is_approved', 1)
                ->with('votes')
                ->with('coinChains')
                ->paginate($filter->request['limit']);
            $response['success'] = true;
            $response['message'] = 'Filter and Search';
            $response['models'] = $coins;
            $response['filter'] = $filter->request['limit'];
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
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
        try {
            $coin = Coin::findOrFail($id);
            $coin->update($request->all());
            $response['success'] = true;
            $response['message'] = 'Coin updated';
            $response['model'] = $coin;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
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
            $coin = Coin::findOrFail($id);
            $coin->delete();
            $response['success'] = true;
            $response['message'] = 'Coin deleted';
            $response['id'] = $id;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }
}
