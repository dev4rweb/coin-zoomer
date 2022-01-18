<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coin extends Model
{
    use HasFactory;

    protected $fillable = [
        'is_approved',
        'is_promoted',
        'name',
        'description',
        'price',
        'symbol',
        'market_cap',
        'launch_date',
        'chain',
        'address',
        'contractTelegram',
        'contractTwitter',
        'contractReddit',
        'contractWeb',
        'contractDiscord',
        'logotype',
        'contractAdditional',
        'email',
        'telegram',
    ];
}
