<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'card_number',
        'description',
    ];

    protected $casts = [
        'user_id' => 'integer',
        'is_use' => 'boolean'
    ];

    protected $appends = [
        'is_use'
    ];

    public function getIsUseAttribute()
    {
        $bonus = Bonus::where('wallet_id', $this->id)->first();
        if ($bonus) return true;
        return false;
    }
}
