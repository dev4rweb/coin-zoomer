<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddWarningFieldsInCoinsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('coins', function (Blueprint $table) {
            $table->text('warning_message')->nullable();
            $table->boolean('show_warning_message')->default(false);
            $table->boolean('important_warning_message')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('coins', function (Blueprint $table) {
            $table->dropColumn('warning_message');
            $table->dropColumn('show_warning_message');
            $table->dropColumn('important_warning_message');
        });
    }
}
