<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
            Schema::table('users', function (Blueprint $table) {
                // Drop unnecessary columns
                $table->dropColumn(['name', 'email_verified_at', 'password', 'remember_token']);

                // Add new columns
                $table->string('first_name')->nullable(false)->after('id'); // first_name column
                $table->string('last_name')->nullable(false); // last_name column
                $table->string('contact_number')->nullable()->after('email'); // contact_number column

            });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // If rolling back, re-add the dropped columns
            $table->string('name');
            $table->string('password');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('remember_token', 100)->nullable();

            // Drop the added columns in the down method (if rolling back the migration)
            $table->dropColumn(['first_name', 'last_name', 'contact_number']);
        });
    }
};
