<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
// use App\CartDetail;

class CatalogArticle extends Model
{
    protected $table = "catalog_articles";

    protected $fillable = ['category_id', 'brand_id', 'user_id', 'name', 'code',  'description', 'color', 'textile', 'stock', 'stockmin', 'price', 'discount', 'reseller_price', 'reseller_discount', 'thumb', 'status', 'slug'];

    public function variants(){
    	return $this->hasMany('App\CatalogVariant', 'article_id');
    }

    public function category(){
    	return $this->belongsTo('App\CatalogCategory');
    }

    public function fav(){
    	return $this->belongsTo('App\CatalogFav', 'article_id');
    }
    
    public function hasFavs()
    {
        return $this->belongsTo('App\CatalogFav', 'id');
    }

    public function cartDetails(){
    	return $this->hasMany('App\CartDetail', 'id');
    }

    public function customer(){
    	return $this->belongsTo('App\Customer');
    }

    public function user(){
    	return $this->belongsTo('App\User');
    }

    public function images(){
    	return $this->hasMany('App\CatalogImage', 'article_id');
    }

    public function size(){
    	return $this->belongsToMany('App\CatalogSize');
    }

    public function tags(){
    	return $this->belongsToMany('App\CatalogTag');
    }

    public function brands(){
    	return $this->belongsToMany('App\CatalogBrand');
    }

    public function brand(){
    	return $this->belongsTo('App\CatalogBrand');
    }

    
    public function featuredImageName(){
        $featuredImage = $this->images()->where('featured', true)->first();

        if($featuredImage != null)
            return 'webimages/catalogo/'.$featuredImage->name;
        elseif($this->images() && $this->images()->first() != null)
            $featuredImage = 'webimages/catalogo/'.$this->images()->first()->name;
        else
            $featuredImage = 'images/gen/catalog-gen.jpg';
        
        return $featuredImage;
    }


    // OLD
    // public function featuredImageName(){
        
    //     $featuredImage = $this->images()->where('featured', true)->first();
    //     if(!$featuredImage){
    //         $featuredImage = $this->images()->first();
    //     }
        
    //     if($featuredImage){
    //         return 'webimages/catalogo/'.$featuredImage->name;
    //     }   
    //     return 'images/gen/catalog-gen.jpg';
    // }

    public function scopeActive($query){
        return $query->where('status', '1');
    }

    public function scopeInActive($query){
        return $query->where('status', '0');
    }

    // Search for all article variants, 
    // sum all variants stock and return articles
    // wich sum is less than min stock required
    public function scopeLowStock($query, $ammount)
    {
        $articles = $query->where('status', '1')->get();
        $idsToShow = [];
        
        foreach($articles as $article)
        {
            $totalStock = 0;
            foreach($article->variants as $variant)
            {
                $totalStock += $variant->stock; 
            }
            if($totalStock > $ammount)
            {
                array_push($idsToShow, $article->id);
            }
        }

        return $query->whereIn('id', $idsToShow);
    }


    public function scopeSearch($query, $term, $categories, $tags)
    {  
        return $query
            ->where('name', 'like', "%" . $term . "%")
            ->orWhere('color', 'like', "%" . $term . "%")
            ->orWhere('textile', 'like', "%" . $term . "%")
            ->orWhereHas('tags', function($tags) use($term){
                $tags->where('name', 'like', "%" . $term ."%");
            })
            ->orWhereHas('category', function($categories) use($term){
                $categories->where('name', 'like', "%" . $term ."%");
            });
    }

    public function scopeSearchCategory($query, $term)
    {
        return $query->whereHas('category', function($categories) use($term){
            $categories->where('name', 'like', "%" . $term ."%");
        });
    }

    public function scopeSearchName($query, $term)
    {
        return $query
            ->where('name', 'like', "%" . $term . "%");
    }
     
    public function scopeSearchCode($query, $term)
    {
        return $query
            ->orWhere('code', 'like', "%" . $term . "%");
    }
       
    public function scopeSize($query, $term)
    {  
        return $query
            ->where('size', 'like', "%" . $term . "%");
    }

    public function scopeSearchtitle($query, $title)
    {
        return $query->where('name', 'LIKE', "%$title%");
    }

}
