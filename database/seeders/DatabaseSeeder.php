<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'name' => 'Admin',
            'is_admin' => true,
            'email' => 'admin@source-byte.com',
            'password' => \bcrypt('Nikodem2022')
        ]);
        User::factory()->create([
            'name' => 'User',
            'email' => 'User@gmail.com',
            'password' => \bcrypt('password')
        ]);
         User::factory(30)->create();
         $this->call(CoinSeeder::class);
//         $this->call(CoinChainSeeder::class);
         $this->call(VoteSeeder::class);
         $this->call(BannerSeeder::class);
         $this->call(SubscriberSeeder::class);
    }
}
