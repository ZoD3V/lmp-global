<?php

use App\Models\KeyCharacter;
use App\Models\Product;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_key_character', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('key_character_id');
            $table->timestamps();

            // Menambahkan constraint foreign key
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->foreign('key_character_id')->references('id')->on('key_character')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_key_character');
    }
};
