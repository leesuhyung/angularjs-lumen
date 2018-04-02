<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * @var array
     */
    protected $fillable = [];

    /**
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    /**
     * @var string
     */
    protected $table = 'user';
}