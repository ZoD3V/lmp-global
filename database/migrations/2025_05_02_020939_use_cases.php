<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('use_cases', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('testimonial_category_id'); // Must match the type of testimonials_categories.id
            $table->string('logo')->nullable();
            $table->string('company_name');
            $table->timestamps();

            // Add the constraint after the column is defined
            $table->foreign('testimonial_category_id')
                ->references('id')
                ->on('testimonials_categories')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
