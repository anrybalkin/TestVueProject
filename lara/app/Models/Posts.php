<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    protected $table="TestTableForVue";
    protected $fillable=[
        'id',
        'title',
        'text',
        'img',
        'source','type'
    ];
}
