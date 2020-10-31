<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $todo = new Todo;
    $todo = $todo->latest()->get();
    return response()->json($todo, 200);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $todo = new Todo;
    $todo->body = $request->body;
    $todo->is_done = false;
    $todo->save();
    $todo = $todo->latest()->get();
    return response()->json($todo, 200);
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Todo  $todo
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    $todo = Todo::find($id);
    return response()->json($todo, 200);
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Todo  $todo
   * @return \Illuminate\Http\Response
   */
  public function edit(Todo $todo)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Models\Todo  $todo
   * @return \Illuminate\Http\Response
   */
  public function update($id)
  {
    $todo = Todo::find($id);
    $todo->is_done = !$todo->is_done;
    $todo->update();
    $todo = $todo->latest()->get();
    return response()->json($todo, 200);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Todo  $todo
   * @return \Illuminate\Http\Response
   */
  public function destroy(Todo $todo)
  {
    $todo->delete();
    $todo = $todo->latest()->get();
    return response()->json($todo, 200);
  }
}