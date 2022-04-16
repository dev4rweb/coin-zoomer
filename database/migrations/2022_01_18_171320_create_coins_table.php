<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoinsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('coins', function (Blueprint $table) {
            $table->id();
            $table->boolean('is_approved')->default(false);
            $table->boolean('is_promoted')->default(false);
            $table->boolean('is_coin_gecko')->default(false);
            $table->boolean('is_presale')->default(false);
            $table->boolean('is_fake')->default(true);
            $table->string('name');
            $table->text('description');
            $table->double('price')->nullable();
            $table->double('one_hour')->nullable();
            $table->string('symbol');
            $table->integer('circulating_supply')->nullable();
            $table->bigInteger('market_cap')->nullable();
            $table->date('launch_date');
            $table->string('coin_gecko_link')->nullable();
            $table->string('contractTelegram')->nullable();
            $table->string('contractTwitter')->nullable();
            $table->string('contractReddit')->nullable();
            $table->string('contractWeb')->nullable();
            $table->string('contractDiscord')->nullable();
            $table->string('logotype')->nullable();
            $table->text('contractAdditional')->nullable();
            $table->string('email');
            $table->string('telegram')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('coins');
    }
}
