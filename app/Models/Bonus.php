<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bonus extends Model
{
    use HasFactory;

    protected $fillable = [
        'coin_id',
        'amount',
        'wallet_id',
        'paid'
    ];

    protected $casts = [
        'coin_id' => 'integer',
        'amount' => 'integer',
        'wallet_id' => 'integer',
        'paid' => 'boolean',
        'created_at' => 'datetime:Y-m-d H:m',
    ];

    protected $appends = [
        'coin_name',
        'owner_name'
    ];

    public function getCoinNameAttribute()
    {
        $coin = Coin::where('id', $this->coin_id)->first();
        if ($coin) return $coin->name;
        return 'Unknown';
    }

    public function getOwnerNameAttribute()
    {
        $coin = Coin::where('id', $this->coin_id)->first();
        if ($coin && $coin->invite_link) {
            $link = ReferralLink::where('ref_link', $coin->invite_link)->first();
            if ($link) {
                $user = User::where('id', $link->user_id)->first();
                if ($user) return $user->name;
            }
        }
        return 'Unknown';
    }
}
