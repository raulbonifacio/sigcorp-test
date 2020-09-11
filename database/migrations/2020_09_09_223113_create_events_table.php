<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
	public function up()
	{
		Schema::create('events', function (Blueprint $table) {
			$table->id();
			$table->string('theme')->nullable()->default('');
			$table->string('address')->nullable()->default('');
			$table->unsignedInteger('totalCapacity')->nullable()->default('1');
			$table->string('batch')->nullable()->default('');
			$table->date('date')->nullable()->useCurrent();
			$table->timestamps();
			$table->softDeletes();
		});
	}

	public function down()
	{
		Schema::dropIfExists('events');
	}
}
