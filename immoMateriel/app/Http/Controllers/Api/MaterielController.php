<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Materiel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class MaterielController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Materiel::select('id','title','description','image')->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validated = Validator::make($request->all(),[
            'title'=> 'required|string|max:255',
            'description'=> 'required|string',
            'image' => 'required|image',
        ]);
        if($validated->fails()){
            return response()->json([
                'status' => 'failed',
                'message'=> 'erreur de validation',
                'error' => $validated->errors()
            ],422);
        }
        try{
            $imageName= Str::random().'.'.$request->image->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('product/image',$request->image,$imageName);
            $materiel = Materiel::create($request->post()+['image' => $imageName]);

            return response()->json([
                'status' => 'success',
                'message' => 'produit enregistré avec succés',
                'data' => $materiel
            ]);
        }catch(\Exception $e){
            return response()->json([
               'status' => 'failed',
               'message'=> 'erreur lors de l\'enregistrement du produit',
                'error' => $e->getMessage()
            ],500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Materiel $materiel)
    {
        //
        if(!$materiel){
            return response()->json([
               'status' => 'failed',
               'message'=> 'produit introuvable'
            ],404);
        }
        return response()->json([
            'data' => $materiel
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Materiel $materiel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Materiel $materiel)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'image' => 'nullable|image', // Validation optionnelle pour l'image
        ]);
    
        try {
            if ($request->hasFile('image')) {
                // Supprimez l'ancienne image si elle existe
                if ($materiel->image) {
                    Storage::disk('public')->delete('product/image/' . $materiel->image);
                }
    
                // Téléchargez la nouvelle image
                $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('product/image', $request->image, $imageName);
                $materiel->update(['image' => $imageName]);
            }
    
            // Mettre à jour les autres champs
            $materiel->update($request->only(['title', 'description']));
    
            return response()->json([
                'status' => 'success',
                'message' => 'Produit mis à jour avec succès',
                'data' => $materiel,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Erreur lors de la mise à jour du produit',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Materiel $materiel)
    {
        //
        $materiel->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'produit supprimé avec succès',
            'data' => $materiel
        ]);
    }
}
