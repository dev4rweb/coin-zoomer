<?php


namespace App\Helpers;


use App\Models\Coin;
use Carbon\Carbon;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\URL;

class SiteMapGenerator
{
    public static function generate()
    {
        try {
            // https://youtu.be/6M4OsMcIgpI
            // create new sitemap object
            $sitemap = App::make('sitemap');

            // add items to the sitemap (url, date, priority, freq)
            $sitemap->add(URL::to('/'), Carbon::now(), '1.0', 'daily');
            $sitemap->add(URL::to('/adc'), Carbon::now(), '1.0', 'daily');
            $sitemap->add(URL::to('/contacts'), Carbon::now(), '1.0', 'daily');
            $sitemap->add(URL::to('/verified'), Carbon::now(), '1.0', 'daily');

            // get all coins from DB
            $coins = Coin::all();

            // add every coin to sitemap
            foreach ($coins as $coin) {
                $name = str_replace(' ', '_', $coin->name);
                $sitemap->add(URL::to('/coin/' . $name), $coin['updated_at'], '1.0', 'daily');
            }

            // generate your sitemap (format, filename)
//    $sitemap->store('xml', '../docs/sitemap');
            $sitemap->store('xml', '../../sitemap');
            // this will generate file sitemap.xml to public folder
            $response['success'] = true;
            $response['message'] = 'Sitemap generated';
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return $response;
    }
}
