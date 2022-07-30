<?php


namespace App\Helpers;


use App\Models\ReferralLink;

class GenerateReferralLink
{

    public static function generate($user_id)
    {
        do {
            $code = self::generateRandomString(10);
            $url = $_SERVER['SERVER_NAME'] == '127.0.0.1' ?
                'http://' . $_SERVER['SERVER_NAME'] . ':8000' :
                'https://' . $_SERVER['SERVER_NAME'];
            $url .= '/add-coin?ref_link=' .$code;
            $sameLinks = ReferralLink::where('ref_link', $url)->get();
        } while (count($sameLinks) > 0);
        return ReferralLink::create([
            'user_id' => $user_id,
            'ref_link' => $url
        ]);
    }

    public static function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}
