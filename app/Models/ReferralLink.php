<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReferralLink extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'ref_link'
    ];

    protected $casts = [
        'user_id' => 'integer'
    ];

    protected $appends = [
        'inviter',
        'added_coin',

    ];

    public function getInviterAttribute()
    {
        $user = User::find($this->user_id);
        if ($user) return $user;
        return 'Inviter not found';
    }

    public function getAddedCoinAttribute()
    {
        $coins = Coin::where('invite_link', $this->ref_link)->get();
        foreach ($coins as $coin) {
            $coin['bonus'] = Bonus::where('coin_id', $coin->id)->first();
        }
        if ($coins) return $coins;
        return null;
    }
}
