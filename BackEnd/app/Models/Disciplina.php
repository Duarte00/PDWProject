<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Disciplina extends Model
{
    use HasFactory;

    protected $filable = [
        'title',
        'credits',
        'professor_id'

    ];

    public function professor(){
        return $this->belongsTo(Professor::class);
    }
}
