<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Professor extends Model
{
    use HasFactory;

    protected $filable = [
        'name',
        'age'
    ];

    public function disciplines(){
        return $this->hasMany(Professor::class);
    }
}
