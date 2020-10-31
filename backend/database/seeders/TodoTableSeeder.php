<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class TodoTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    // \App\Models\Todo::factory(10)->create();
    for ($i = 0; $i < 10; $i++) {
      DB::table('todos')->insert([
        'body' => Str::random(10),
        'is_done' => false,
        'created_at' =>  new Carbon('now'),
        'updated_at' =>  new Carbon('now'),
      ]);
    }
  }
}