<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Http\Request;

use Exception;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		$events = Event::all();
		return response()->json($events, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
		$event =  $request->all();

		try { 
			$event['date'] = Carbon::createFromFormat('Y-d-m', $event['date']);
		} catch(Exception $exception)  { 
			$event['date'] = null;
		}

		Event::create($event);

		return response()->json($event, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $event)
    {
		$updatedEventValues = $request->only(['theme', 'address', 'batch', 'date', 'totalCapacity']);

		try { 
			$updatedEventValues['date'] = Carbon::createFromFormat('Y-d-m', $event['date']);
		} catch(Exception $exception)  { 
			$updatedEventValues['date'] = null;
		}

		$event->fill($updatedEventValues);
		$event->save();

		return response()->json($event, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
		$event->delete();
		return response()->json($event, 200);
    }
}
