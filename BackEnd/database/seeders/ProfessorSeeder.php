<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Professor;

class ProfessorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Professor::factory()->count(50)->create();
    }
}
