<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RootController extends Controller
{
	public function __invoke()
	{
		
		return view('pages.index');
	}
}
