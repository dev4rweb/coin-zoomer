<?php


namespace App\Helpers;


use App\Models\Coin;
use Carbon\Carbon;
use DOMAttr;
use DOMDocument;

class SitemapCreator
{
    private static $pages = [];

    public static function generate()
    {
        try {
            self::addPage('https://coinzoomer.com/', Carbon::now());
            self::addPage('https://coinzoomer.com/adc', Carbon::now());
            self::addPage('https://coinzoomer.com/contacts', Carbon::now());
            self::addPage('https://coinzoomer.com/verified', Carbon::now());

            // get all coins from DB
            $coins = Coin::all();
            foreach ($coins as $coin) {
                $name = str_replace(' ', '_', $coin->name);
                self::addPage('https://coinzoomer.com/coin/' . $name, $coin['updated_at']);
            }

            $dom = new DOMDocument();
            $dom->encoding = 'utf-8';
            $dom->xmlVersion = '1.0';
            $dom->formatOutput = true;

            if (strpos($_SERVER['SERVER_NAME'], '127.0.0.1') !== false) {
                $xml_file_name = '../sitemap.xml'; // local
            } else {
                $xml_file_name = '../../sitemap.xml'; // external
            }

            $dom = new DOMDocument();
            $dom->encoding = 'utf-8';
            $dom->xmlVersion = '1.0';
            $dom->formatOutput = true;

            $root = $dom->createElement('urlset');
            $rootAttr = new DOMAttr('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
            $root->setAttributeNode($rootAttr);

            foreach (self::$pages as $page) {
                $url_node = $dom->createElement('url');

                $loc_node = $dom->createElement('loc', $page['loc']);
                $url_node->appendChild($loc_node);

                $priority_node = $dom->createElement('priority', '1.0');
                $url_node->appendChild($priority_node);

                $lastmod_node = $dom->createElement('lastmod', '2022-08-08T11:05:02+03:00');
                $url_node->appendChild($lastmod_node);

                $changefreq_node = $dom->createElement('changefreq', 'daily');
                $url_node->appendChild($changefreq_node);

                $root->appendChild($url_node);
            }

            $dom->appendChild($root);
            $dom->save($xml_file_name);

            $response['success'] = true;
            $response['message'] = 'Sitemap generated';
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return $response;
    }

    private static function addPage($url, $created_at)
    {
        $page = [
            'loc' => $url,
            'lastmod' => $created_at,
            'priority' => '1.0',
            'changefreq' => 'daily'
        ];
        array_push(self::$pages, $page);
    }
}
