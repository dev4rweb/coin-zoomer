<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use Intervention\Image\ImageManagerStatic;

class ImageCacheController extends Controller
{
    public function polygonal()
    {
//        $img = ImageManagerStatic::make('public/images/polygonal-blue-abstract.png');
        $img = ImageManagerStatic::cache(function ($image){
            $image->make('images/polygonal-blue-abstract.png');
        });
        return ImageManagerStatic::make($img)->response();
//        return Image::make('polygonal-blue-abstract.png');
    }

    public function dogWin()
    {
        $img = ImageManagerStatic::cache(function ($image){
            $image->make('images/win-dog.png');
        });
        return ImageManagerStatic::make($img)->response();
    }

    public function greenCard()
    {
        $img = ImageManagerStatic::cache(function ($image){
            $image->make('images/green-card.png');
        });
        return ImageManagerStatic::make($img)->response();
    }

    public function pinkCard()
    {
        $img = ImageManagerStatic::cache(function ($image){
            $image->make('images/pink-card.png');
        });
        return ImageManagerStatic::make($img)->response();
    }

    public function blueCard()
    {
        $img = ImageManagerStatic::cache(function ($image){
            $image->make('images/blue-card.png');
        });
        return ImageManagerStatic::make($img)->response();
    }
}
