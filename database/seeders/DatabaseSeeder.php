<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        $user = User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('admin'),
        ]);
        $role = Role::create(['name' => 'Admin']);
        $user->assignRole($role);

        $user1 = User::factory()->create([
            'name' => 'Maintence',
            'email' => 'maintence@maintence.com',
            'password' => Hash::make('maintence'),
        ]);
        $role = Role::create(['name' => 'Maintained']);
        $user1->assignRole($role);
    }
}
